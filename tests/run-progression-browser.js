/* Requires the chrome-devtools CLI from chrome-devtools-mcp, installed globally.
 * Set CHROME_DEVTOOLS_CLI to its build/src/bin/chrome-devtools.js if installed elsewhere.
 * Runs in the CLI's dedicated browser; no personal browser profile is used.
 */
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { execFileSync } = require('node:child_process');
const checks = require('./progression-browser.js');
const root = path.resolve(__dirname, '..');
const relativeCLI = 'node_modules/chrome-devtools-mcp/build/src/bin/chrome-devtools.js';
const cli = [process.env.CHROME_DEVTOOLS_CLI, path.join(path.dirname(process.execPath), relativeCLI), path.resolve(path.dirname(process.execPath), '../lib', relativeCLI)].find(file => file && fs.existsSync(file));
if (!cli) throw new Error('Install chrome-devtools-mcp globally or set CHROME_DEVTOOLS_CLI to its CLI JavaScript entry point.');
function run(...args) {
  const output = execFileSync(process.execPath, [cli, ...args], { cwd: root, encoding: 'utf8', timeout: 60000, maxBuffer: 8 * 1024 * 1024 });
  if (/MCP error|Error:|error executing/i.test(output)) throw new Error(output);
  return output;
}
const pageOutput = run('new_page', 'about:blank');
const pageId = pageOutput.match(/(\d+):.*\[selected\]/)?.[1];
if (!pageId) throw new Error(`Cannot find test page: ${pageOutput}`);
const reports = [];
try {
  for (const entry of ['index.html', 'minecraft_modpack_wiki.html']) {
    for (const [label, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
      run('resize_page', pageId, String(width), String(height));
      run('emulate', pageId, '--networkConditions', 'Offline', '--viewport', `${width}x${height}x1${label === 'mobile' ? ',mobile,touch' : ''}`);
      run('navigate_page', pageId, '--url', pathToFileURL(path.join(root, entry)).href);
      const output = run('evaluate_script', checks.toString(), '--pageId', pageId);
      const match = output.match(/```json\s*([\s\S]*?)\s*```/);
      if (!match) throw new Error(`No test result: ${output}`);
      const report = JSON.parse(match[1]);
      if (report.status !== 'PASS') throw new Error(JSON.stringify(report));
      if (report.viewport !== width) throw new Error(`Expected ${width}px, actually tested ${report.viewport}px`);
      reports.push(report);
      run('take_screenshot', pageId, '--filePath', path.join('tests', `progression-${entry === 'index.html' ? '' : 'alternate-'}${label}.png`));
      console.log(`${entry} / ${label}: ${report.checks} checks passed, offline`);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'progression-browser-results.json'), JSON.stringify({ status: 'PASS', reports }, null, 2) + '\n');
} finally {
  run('close_page', pageId);
}

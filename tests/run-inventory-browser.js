/* Uses the installed chrome-devtools CLI and a dedicated tab. */
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { execFileSync } = require('node:child_process');
const checks = require('./inventory-browser.js');
const root = path.resolve(__dirname, '..');
const relativeCLI = 'node_modules/chrome-devtools-mcp/build/src/bin/chrome-devtools.js';
const cli = [process.env.CHROME_DEVTOOLS_CLI, path.join(path.dirname(process.execPath), relativeCLI), path.resolve(path.dirname(process.execPath), '../lib', relativeCLI)].find(file => file && fs.existsSync(file));
if (!cli) throw Error('Set CHROME_DEVTOOLS_CLI to the installed chrome-devtools.js CLI.');
function run(...args) {
  const output = execFileSync(process.execPath, [cli, ...args], {cwd:root, encoding:'utf8', timeout:60000, maxBuffer:8*1024*1024});
  if (/MCP error|Error:|error executing/i.test(output)) throw Error(output);
  return output;
}
const output = run('new_page', 'about:blank');
const pageId = output.match(/(\d+):.*\[selected\]/)?.[1];
if (!pageId) throw Error(output);
const reports = [];
const out = path.join(root, '.cache/inventory-browser');
fs.mkdirSync(out, {recursive:true});
try {
  for (const entry of ['index.html']) {
    for (const [label, width, height] of [['desktop',1440,1000],['mobile',390,844]]) {
      run('resize_page', pageId, String(width), String(height));
      run('emulate', pageId, '--networkConditions', 'Offline', '--viewport', `${width}x${height}x1${label==='mobile'?',mobile,touch':''}`);
      run('navigate_page', pageId, '--url', pathToFileURL(path.join(root,entry)).href);
      const output = run('evaluate_script', checks.toString(), '--pageId', pageId);
      const match = output.match(/```json\s*([\s\S]*?)\s*```/);
      if (!match) throw Error(output);
      const report = JSON.parse(match[1]);
      if (report.status !== 'PASS' || report.viewport !== width) throw Error(JSON.stringify(report));
      reports.push(report);
      run('take_screenshot', pageId, '--filePath', path.join(out,`${entry}-${label}.png`));
      console.log(`${entry} / ${label}: ${report.checks} checks passed, offline`);
    }
  }
  fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({status:'PASS',reports},null,2)+'\n');
  run('emulate', pageId, '--networkConditions', 'Offline', '--viewport', '1440x1600x1');
  run('evaluate_script', require('./inventory-review.js').toString(), '--pageId', pageId);
  run('take_screenshot', pageId, '--fullPage', 'true', '--filePath', path.join(out,'visual-review.png'));
} finally { run('close_page',pageId); }

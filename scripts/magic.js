(function () {
  'use strict';

  const commonGear = [
    ['Ancient Codex', 'irons_spellbooks:netherite_spell_book'],
    ['Mana Ring', 'irons_spellbooks:mana_ring'],
    ['Cooldown Ring', 'irons_spellbooks:cooldown_ring']
  ];
  const build = (name, role, summary, spells, gear, rotation, progression, weakness) => ({name, role, summary, spells, gear, rotation, progression, weakness});
  const schools = [
    {
      id:'fire', name:'Fire', icon:'🔥', color:'#e76f51', role:'Area damage and pressure', focus:'Blaze Rod', style:'Aggressive · medium range',
      description:'Fire turns space into a hazard. Its projectiles and lingering flames are excellent for clearing groups and maintaining pressure, but resistant targets demand a backup plan.',
      traits:['Burn damage','Area denial','Explosive finishers'],
      builds:[
        build('Wildfire Artillery','Ranged clearing','Blanket groups with persistent fire, then finish survivors with a direct projectile.',['Fireball','Wall of Fire','Blaze Storm','Burning Dash'],[['Pyromancer Robes','irons_spellbooks:pyromancer_chestplate'],['Blaze Spell Book','irons_spellbooks:blaze_spell_book'],['Pyrium Staff','irons_spellbooks:pyrium_staff']],['Place Wall of Fire across the approach.','Pressure the group with Blaze Storm.','Use Fireball on dense or durable targets.','Keep Burning Dash ready to disengage.'],'Start with Fireball, add a field spell, then invest in fire power after the rotation is sustainable.','Fire-resistant enemies and uncontrolled burning can erase your advantage.'),
        build('Cinder Duelist','Mobile damage','Fight closer to the target with quick movement and repeatable fire pressure.',['Burning Dash','Fire Breath','Firebolt','Magma Bomb'],[['Infernal Sorcerer Chestplate','irons_spellbooks:infernal_sorcerer_chestplate'],['Pyrium Staff','irons_spellbooks:pyrium_staff'],commonGear[1]],['Open with Firebolt while closing distance.','Use Fire Breath during a safe attack window.','Dash through or away before the counterattack.','Spend Magma Bomb when the target is committed.'],'Prioritize mana and mobility before maximum spell power. Keep a melee weapon for interrupted casts.','Close-range channels are risky against knockback, burst damage, and fire immunity.')]
    },
    {
      id:'ice', name:'Ice', icon:'❄️', color:'#69a8e8', role:'Crowd control and safety', focus:'Frozen Bone', style:'Control · flexible range',
      description:'Ice wins by slowing the fight down. Freezing, decoys, and defensive tools create safe openings while reliable projectiles chip away at controlled targets.',
      traits:['Freeze','Decoys','Defensive recovery'],
      builds:[
        build('Frost Warden','Control and defense','Lock down dangerous enemies and trade burst damage for a safer battlefield.',['Ray of Frost','Blizzard','Ice Tomb','Icicle'],[['Cryomancer Coat','irons_spellbooks:cryomancer_chestplate'],['Frostbranded Book','irons_spellbooks:ice_spell_book'],['Ice Staff','irons_spellbooks:ice_staff']],['Freeze the priority target with Ray of Frost.','Place Blizzard where enemies must travel.','Fire Icicle while the group is controlled.','Use Ice Tomb before lethal pressure, not after.'],'Build around Icicle first, then add one control spell and finally the defensive slot.','Some bosses resist control; long cooldowns punish careless overlap.'),
        build('Glacial Trickster','Mobile control','Use decoys and short teleports to split attention and punish pursuit.',['Frost Step','Snowball','Ice Spikes','Icicle'],[['Cryomancer Coat','irons_spellbooks:cryomancer_chestplate'],['Frostward Ring','irons_spellbooks:frostward_ring'],commonGear[2]],['Throw Snowball into the approach.','Use Frost Step to leave a decoy and change angle.','Cast Ice Spikes through the controlled lane.','Use Icicle as the inexpensive filler.'],'Secure Frost Step only after a dependable attack fits the book. Cooldown reduction smooths the loop.','Needs usable terrain and careful teleport aim; mobile enemies can leave the control zone.')]
    },
    {
      id:'lightning', name:'Lightning', icon:'⚡', color:'#e5b84c', role:'Burst damage and tempo', focus:'Bottle o’ Lightning', style:'Fast · high mana demand',
      description:'Lightning delivers concentrated damage and rapid target switching. It rewards decisive casts and good mana planning more than prolonged attrition.',
      traits:['Single-target burst','Chaining','Speed buffs'],
      builds:[
        build('Storm Lancer','Boss burst','Create a short damage window and drive high-impact lightning into one target.',['Charge','Lightning Lance','Lightning Bolt','Ascension'],[['Electromancer Robes','irons_spellbooks:electromancer_chestplate'],['Rod o’ Lightning','irons_spellbooks:lightning_rod'],commonGear[1]],['Cast Charge before entering danger.','Open with Lightning Bolt.','Use Lightning Lance during the target’s recovery.','Ascend to escape ground pressure.'],'Begin with a repeatable lightning attack; add expensive burst only when max mana supports it.','The rotation can empty a small mana pool and leaves downtime after the burst.'),
        build('Tempest Conductor','Group clearing','Turn clustered encounters into chain reactions and sustained storm damage.',['Chain Lightning','Ball Lightning','Thunderstorm','Shockwave'],[['Electromancer Robes','irons_spellbooks:electromancer_chestplate'],['Lightning Bottle','irons_spellbooks:lightning_bottle'],commonGear[2]],['Start Thunderstorm before enemies spread.','Send Ball Lightning through the densest lane.','Chain Lightning from a central target.','Shockwave if the group reaches you.'],'Add Chain Lightning after securing a cheap filler. Treat Thunderstorm as an encounter cooldown.','Performs poorly when enemies are isolated or hidden from sight.')]
    },
    {
      id:'holy', name:'Holy', icon:'✦', color:'#b8dc68', role:'Healing, buffs, and frontline support', focus:'Divine Pearl', style:'Support · melee hybrid',
      description:'Holy magic keeps a player or party alive while still offering weapon-based offense. Its value rises when you reserve mana for the moment recovery matters.',
      traits:['Healing','Temporary health','Weapon synergy'],
      builds:[
        build('Sanctum Keeper','Party support','Protect allies, stabilize mistakes, and keep the group fighting through long encounters.',['Heal','Fortify','Haste','Greater Heal'],[['Priest Robes','irons_spellbooks:priest_chestplate'],['Villager Bible','irons_spellbooks:villager_spell_book'],commonGear[1]],['Apply Haste before contact.','Use Fortify as the group takes pressure.','Heal focused allies without spending the emergency cast.','Reserve Greater Heal for a safe channel window.'],'Start with Heal and enough armor to survive casting. Add group buffs once playing with allies regularly.','Low personal damage and long recovery casts require protection from teammates or terrain.'),
        build('Divine Vanguard','Melee spellblade','Use holy buffs and weapon-scaling attacks from the front line.',['Divine Smite','Fortify','Guiding Bolt','Heal'],[['Paladin Chestplate','irons_spellbooks:paladin_chestplate'],['Truthseeker','irons_spellbooks:truthseeker'],commonGear[2]],['Tag the target with Guiding Bolt.','Fortify before committing to melee.','Use Divine Smite with your strongest suitable weapon.','Disengage and Heal rather than forcing another swing.'],'Keep weapon and armor quality current; the spellbook supplements the melee kit instead of replacing it.','Melee range exposes cast windows, and healing cannot prevent sudden lethal damage.')]
    },
    {
      id:'ender', name:'Ender', icon:'◈', color:'#b388eb', role:'Mobility and spatial control', focus:'Ender Pearl', style:'Technical · high utility',
      description:'Ender magic manipulates position. It excels at escaping, collapsing groups, and attacking from unexpected angles, but mistakes can move the caster into greater danger.',
      traits:['Teleportation','Gravity control','Repositioning'],
      builds:[
        build('Rift Skirmisher','Mobility damage','Change angles constantly and attack before enemies can reset their aim.',['Teleport','Counterspell','Magic Missile','Recall'],[['Shadowwalker Garb','irons_spellbooks:shadowwalker_chestplate'],['Dragonskin Spell Book','irons_spellbooks:dragonskin_spell_book'],['Teleportation Amulet','irons_spellbooks:teleportation_amulet']],['Open from cover with Magic Missile.','Teleport across the target’s attack line.','Counterspell the dangerous cast.','Recall only with a known safe destination.'],'Learn Teleport in safe terrain and keep an affordable attack from another school.','Bad destinations, void terrain, and cooldown lockouts can turn mobility into a death trap.'),
        build('Gravity Architect','Battlefield control','Gather enemies into a kill zone and deny safe positions.',['Black Hole','Abyssal Shroud','Portal','Magic Missile'],[['Shadowwalker Garb','irons_spellbooks:shadowwalker_chestplate'],['Dragonskin Spell Book','irons_spellbooks:dragonskin_spell_book'],commonGear[2]],['Place Black Hole where terrain limits escape.','Pressure trapped targets with a dependable attack.','Use Portal to reset range.','Spend Abyssal Shroud to survive unavoidable pressure.'],'Treat the major control spell as a late-book addition; the build still needs a cheap attack.','Large cooldowns and terrain-sensitive placement make failed casts expensive.')]
    },
    {
      id:'blood', name:'Blood', icon:'🩸', color:'#c94f64', role:'Life-steal and risky offense', focus:'Blood Vial', style:'Aggressive · sustain through damage',
      description:'Blood magic converts aggression into momentum through draining attacks, necromancy, and self-buffs. It is powerful when damage keeps flowing and fragile when it cannot connect.',
      traits:['Life-steal','Necromancy','Self-buffs'],
      builds:[
        build('Crimson Reaver','Drain fighter','Stay active at medium range and recover through successful offensive casts.',['Blood Slash','Ray of Siphoning','Blood Step','Raise Dead'],[['Cultist Armor','irons_spellbooks:cultist_chestplate'],['Vampiric Spell Book','irons_spellbooks:necronomicon_spell_book'],['Blood Staff','irons_spellbooks:blood_staff']],['Raise Dead before committing.','Use Blood Step to reach a clean angle.','Siphon a durable target to stabilize.','Spend Blood Slash when the lane is clear.'],'Use conventional healing until drain spells are dependable. Dead King gear is a late goal, not an entry requirement.','Missed casts provide no sustain, and some enemies resist the school’s damage profile.'),
        build('Grave Commander','Summoner','Let summoned allies divide attention while you support them from range.',['Raise Dead','Summon Horse','Ray of Siphoning','Blood Needles'],[['Cultist Armor','irons_spellbooks:cultist_chestplate'],['Conjurer’s Talisman','irons_spellbooks:conjurers_talisman'],['Blood Staff','irons_spellbooks:blood_staff']],['Summon before entering the main room.','Let minions establish threat.','Use Blood Needles from a protected angle.','Siphon the healthiest target when pressured.'],'Invest in summon support only after verifying that the core summon fits your available book rarity.','Summons can path poorly, expire between waves, or struggle against mobile bosses.')]
    },
    {
      id:'evocation', name:'Evocation', icon:'♜', color:'#5fc7b5', role:'Conjuration and adaptable offense', focus:'Emerald', style:'Versatile · setup focused',
      description:'Evocation is the broad toolbox: fangs, magical projectiles, summoned allies, and defensive tricks. It supports specialized builds without forcing one damage pattern.',
      traits:['Conjuration','Summons','Broad utility'],
      builds:[
        build('Archevoker','Conjured offense','Create hazards and summoned pressure that keep enemies reacting.',['Fang Strike','Summon Vex','Chain Creeper','Fang Ward'],[['Archevoker Robes','irons_spellbooks:archevoker_chestplate'],['Grimoire of Evokation','irons_spellbooks:evoker_spell_book'],['Conjurer’s Talisman','irons_spellbooks:conjurers_talisman']],['Summon Vex before the main exchange.','Line up Fang Strike through the approach.','Use Chain Creeper on a dense group.','Raise Fang Ward when enemies turn on you.'],'Start with Fang Strike; add summons after cooldown and mana support are comfortable.','Summons and ground attacks lose value against distant or highly mobile targets.'),
        build('Arcane Artillerist','General ranged damage','Carry several targeting patterns so terrain never shuts down the whole spellbook.',['Magic Missile','Arrow Volley','Fang Strike','Chain Creeper'],[['Wizard Robes','irons_spellbooks:wizard_chestplate'],['Grimoire of Evokation','irons_spellbooks:evoker_spell_book'],commonGear[2]],['Use Magic Missile for routine targets.','Arrow Volley over clustered enemies or fixed positions.','Fang Strike down narrow lanes.','Save Chain Creeper for a group that can propagate it.'],'Favor spell slots and cooldown reduction over one-school power until the final loadout is settled.','Versatility costs specialization; poor spell choice can still waste mana on the wrong terrain.')]
    },
    {
      id:'nature', name:'Nature', icon:'🌿', color:'#72bd6b', role:'Debuffs and attrition', focus:'Poisonous Potato', style:'Methodical · team friendly',
      description:'Nature weakens enemies before finishing them. Armor reduction, damage reduction, poison, and terrain pressure make it a strong opener for both solo and group play.',
      traits:['Armor reduction','Damage debuffs','Area pressure'],
      builds:[
        build('Plague Sage','Debuff specialist','Strip enemy defenses and reduce their threat before committing major damage.',['Acid Orb','Blight','Poison Arrow','Earthquake'],[['Plagued Armor','irons_spellbooks:plagued_chestplate'],['Druidic Tome','irons_spellbooks:druidic_spell_book'],['Poisonward Ring','irons_spellbooks:poisonward_ring']],['Land Acid Orb to reduce armor.','Apply Blight to the priority enemy.','Use Earthquake to slow the group.','Fire Poison Arrow while debuffs are active.'],'Acquire one reliable damage spell before stacking utility. Upgrade duration and power only when debuffs land consistently.','Damage ramps slowly, and poison-immune targets reduce the value of part of the kit.'),
        build('Earthshaper','Area control','Use terrain-centered effects to keep packs grouped and weakened.',['Earthquake','Poison Breath','Acid Orb','Oakskin'],[['Plagued Armor','irons_spellbooks:plagued_chestplate'],['Druidic Tome','irons_spellbooks:druidic_spell_book'],['Oakskin Elixir','irons_spellbooks:oakskin_elixir']],['Apply Oakskin before entering the room.','Center Earthquake on the leading enemy.','Splash Acid Orb into the slowed group.','Channel Poison Breath only while the lane is controlled.'],'Prioritize protection and one safe ranged option before adding close-range poison.','Flying enemies and open terrain can escape ground-centered control.')]
    },
    {
      id:'eldritch', name:'Eldritch', icon:'👁', color:'#9b77d1', role:'Rare late-game power', focus:'Echo Shard after learning', style:'Advanced · costly cooldowns',
      description:'Eldritch is a special late-game school. Restore and consume manuscripts to learn individual spells before crafting or casting them; do not plan an early build around finding them immediately.',
      traits:['Manuscript unlocks','Powerful defense','Late-game utility'],
      builds:[
        build('Abyss Walker','Survival and scouting','Use rare defensive and information tools to survive spaces ordinary builds cannot safely inspect.',['Abyssal Shroud','Planar Sight','Sculk Tentacles','Teleport'],[['Eldritch Manuscript','irons_spellbooks:eldritch_manuscript'],['Ancient Knowledge Fragment','irons_spellbooks:ancient_knowledge_fragment'],commonGear[2]],['Use Planar Sight before entering the structure.','Place Sculk Tentacles to control the approach.','Trigger Abyssal Shroud for the lethal attack window.','Teleport to a verified safe position.'],'Develop a complete conventional spellbook first. Add each Eldritch spell only after its manuscript is learned.','Very long cooldowns and difficult acquisition make this a supplement, not a self-sufficient starter kit.'),
        build('Eldritch Destroyer','Late-game burst','Spend rare, high-impact casts on priority enemies while a normal school handles routine combat.',['Eldritch Blast','Sculk Tentacles','Abyssal Shroud','Magic Missile'],[['Eldritch Manuscript','irons_spellbooks:eldritch_manuscript'],['Ancient Codex','irons_spellbooks:netherite_spell_book'],commonGear[1]],['Control the lane with Sculk Tentacles.','Use Eldritch Blast on the priority target.','Return to a low-cost filler during cooldown.','Shroud only when the enemy’s strongest attack is committed.'],'Mana and cooldown support matter more than filling every slot with rare spells. Keep a cheap non-Eldritch attack.','Acquisition is slow, cooldowns are severe, and the build cannot efficiently handle every routine enemy.')]
    }
  ];

  const data = {schools};
  Object.freeze(data.schools);
  window.MAGIC_GUIDE_DATA = Object.freeze(data);
  const root = document.getElementById('magicGuideRoot');
  if (!root) return;
  let selected = schools[0].id;

  function esc(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
  function gearMarkup(gear) {
    return gear.map(([name,id]) => `<button type="button" class="magic-item" data-item-id="${esc(id)}">${esc(name)} ↗</button>`).join('');
  }
  function buildMarkup(entry, index) {
    return `<article class="magic-build" aria-labelledby="magic-build-${index}">
      <div class="build-top"><span class="build-kicker">${esc(entry.role)}</span><h3 id="magic-build-${index}">${esc(entry.name)}</h3><p>${esc(entry.summary)}</p></div>
      <div class="build-body">
        <section class="build-block"><h4>Spellbook</h4><div class="build-spells">${entry.spells.map(spell=>`<span>${esc(spell)}</span>`).join('')}</div></section>
        <section class="build-block"><h4>Equipment priorities</h4><div class="build-gear">${gearMarkup(entry.gear)}</div></section>
        <section class="build-block"><h4>Combat loop</h4><ol>${entry.rotation.map(step=>`<li>${esc(step)}</li>`).join('')}</ol></section>
        <section class="build-block"><h4>Progression</h4><p>${esc(entry.progression)}</p></section>
        <p class="build-block build-caution"><strong>Watch for:</strong> ${esc(entry.weakness)}</p>
      </div></article>`;
  }
  function render() {
    const school = schools.find(entry => entry.id === selected);
    root.style.setProperty('--school', school.color);
    root.innerHTML = `<header class="magic-hero">
      <span class="magic-eyebrow">Iron’s Spells ’n Spellbooks · 1.20.1 field guide</span>
      <h1>Choose your school. Then shape the build.</h1>
      <p>Each school is a distinct magic class with its own combat identity. Pick one below to compare focused builds, spell rotations, equipment priorities, progression, and the matchups that can expose it.</p>
      <div class="magic-primer"><span>1 · Choose a school</span><span>2 · Compare its builds</span><span>3 · Assemble a sustainable rotation</span></div>
    </header>
    <section class="magic-panel" aria-labelledby="school-picker-title">
      <div class="magic-panel-head"><div><span class="magic-section-label">Magic classes</span><h2 id="school-picker-title">Nine schools, nine ways to cast</h2></div><p>School bonuses reward specialization, but every build should keep a conventional weapon and a low-cost answer for cooldowns.</p></div>
      <div class="school-grid" role="tablist" aria-label="Magic schools">${schools.map(entry=>`<button type="button" class="school-choice${entry.id===selected?' active':''}" role="tab" aria-selected="${entry.id===selected}" tabindex="${entry.id===selected?'0':'-1'}" data-school="${entry.id}" style="--school-color:${entry.color}"><span class="school-choice-icon" aria-hidden="true">${entry.icon}</span><strong>${entry.name}</strong><small>${entry.role}</small></button>`).join('')}</div>
    </section>
    <section class="school-overview" aria-labelledby="selected-school-title">
      <div><div class="school-title"><span class="school-title-icon" aria-hidden="true">${school.icon}</span><div><span class="school-role">Selected class</span><h2 id="selected-school-title">${school.name} School</h2></div></div><p class="school-description">${school.description}</p><div class="school-traits">${school.traits.map(x=>`<span>${x}</span>`).join('')}</div></div>
      <div class="school-facts"><div class="school-fact"><small>School focus</small><b>${school.focus}</b></div><div class="school-fact"><small>Combat identity</small><b>${school.style}</b></div><div class="school-fact"><small>Builds below</small><b>${school.builds.length} focused paths</b></div></div>
    </section>
    <div class="build-heading"><span class="magic-section-label">${school.name} builds</span><h2>Pick the version that fits your playstyle</h2><p>Spell names describe loadout goals; use the installed scroll tooltip for exact level, mana, rarity, and cooldown values.</p></div>
    <div class="build-grid">${school.builds.map(buildMarkup).join('')}</div>
    <footer class="magic-sources">Version-sensitive reference: <a href="https://github.com/iron431/Irons-Spells-n-Spellbooks/blob/1.20.1-legacy/src/main/resources/assets/irons_spellbooks/lang/en_us.json" target="_blank" rel="noopener noreferrer">Iron’s Spells 1.20.1 language data</a>. General school roles: <a href="https://iron.wiki/schools/" target="_blank" rel="noopener noreferrer">author’s school guide</a>.</footer>`;
  }
  root.addEventListener('click', event => {
    const choice = event.target.closest('[data-school]');
    if (!choice) return;
    selected = choice.dataset.school;
    render();
    root.querySelector(`[data-school="${selected}"]`).focus();
  });
  root.addEventListener('keydown', event => {
    const choice = event.target.closest('[data-school]');
    if (!choice || !['ArrowRight','ArrowLeft','ArrowDown','ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    const index = schools.findIndex(entry => entry.id === choice.dataset.school);
    const delta = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
    selected = schools[(index + delta + schools.length) % schools.length].id;
    render();
    root.querySelector(`[data-school="${selected}"]`).focus();
  });
  render();
}());

// D&D 5E Monster Generator - PDF Export

function exportToPDF() {
    if (!currentMonster) {
        alert('No monster to export. Generate a monster first!');
        return;
    }
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    const m = currentMonster;
    
    // Get portrait image if it exists
    const portraitImg = document.getElementById('portraitImage');
    const hasPortrait = portraitImg && portraitImg.style.display !== 'none' && portraitImg.src;
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>${m.name} - Monster Stat Block</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Libre Baskerville', Georgia, serif;
            font-size: 10pt;
            line-height: 1.4;
            color: #000;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .stat-block {
            background: #fdf1dc;
            border: 1px solid #58180d;
            padding: 15px;
        }
        
        .monster-name {
            font-family: 'Libre Baskerville', Georgia, serif;
            font-size: 24pt;
            color: #58180d;
            margin-bottom: 0;
            font-variant: small-caps;
            letter-spacing: 1px;
        }
        
        .monster-type {
            font-style: italic;
            margin-bottom: 10px;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(to right, #58180d, #c9ad6a, #58180d);
            margin: 10px 0;
        }
        
        .stat-line {
            margin: 3px 0;
        }
        
        .stat-line strong {
            color: #58180d;
        }
        
        .abilities {
            display: flex;
            justify-content: space-between;
            text-align: center;
            margin: 10px 0;
            border-top: 1px solid #58180d;
            border-bottom: 1px solid #58180d;
            padding: 8px 0;
        }
        
        .ability {
            flex: 1;
        }
        
        .ability-name {
            font-weight: bold;
            color: #58180d;
            font-size: 9pt;
        }
        
        .ability-score {
            font-size: 11pt;
        }
        
        .section-title {
            font-size: 14pt;
            color: #58180d;
            border-bottom: 1px solid #58180d;
            margin: 15px 0 10px 0;
            font-variant: small-caps;
        }
        
        .trait, .action {
            margin-bottom: 8px;
        }
        
        .trait-name, .action-name {
            font-weight: bold;
            font-style: italic;
        }
        
        .legendary-intro, .lair-intro {
            font-style: italic;
            margin-bottom: 10px;
        }
        
        .portrait-section {
            text-align: center;
            margin-bottom: 15px;
        }
        
        .portrait-image {
            max-width: 250px;
            max-height: 250px;
            border: 2px solid #58180d;
            border-radius: 8px;
        }
        
        @media print {
            body {
                padding: 0;
            }
            .stat-block {
                border: none;
            }
        }
    </style>
</head>
<body>
    <div class="stat-block">
        ${hasPortrait ? `<div class="portrait-section"><img src="${portraitImg.src}" class="portrait-image" alt="${m.name} portrait"></div>` : ''}
        <h1 class="monster-name">${m.name}</h1>
        <p class="monster-type">${capitalize(m.size)} ${m.type}, ${m.alignment}</p>
        
        <div class="divider"></div>
        
        <p class="stat-line"><strong>Armor Class</strong> ${m.ac} (${m.acType})</p>
        <p class="stat-line"><strong>Hit Points</strong> ${m.hp} (${m.hpFormula})</p>
        <p class="stat-line"><strong>Speed</strong> ${formatSpeeds(m.speeds)}</p>
        
        <div class="divider"></div>
        
        <div class="abilities">
            <div class="ability">
                <div class="ability-name">STR</div>
                <div class="ability-score">${m.abilityScores.str} (${formatModifier(m.abilityModifiers.str)})</div>
            </div>
            <div class="ability">
                <div class="ability-name">DEX</div>
                <div class="ability-score">${m.abilityScores.dex} (${formatModifier(m.abilityModifiers.dex)})</div>
            </div>
            <div class="ability">
                <div class="ability-name">CON</div>
                <div class="ability-score">${m.abilityScores.con} (${formatModifier(m.abilityModifiers.con)})</div>
            </div>
            <div class="ability">
                <div class="ability-name">INT</div>
                <div class="ability-score">${m.abilityScores.int} (${formatModifier(m.abilityModifiers.int)})</div>
            </div>
            <div class="ability">
                <div class="ability-name">WIS</div>
                <div class="ability-score">${m.abilityScores.wis} (${formatModifier(m.abilityModifiers.wis)})</div>
            </div>
            <div class="ability">
                <div class="ability-name">CHA</div>
                <div class="ability-score">${m.abilityScores.cha} (${formatModifier(m.abilityModifiers.cha)})</div>
            </div>
        </div>
        
        ${renderPDFSaves(m)}
        ${renderPDFSkills(m)}
        ${renderPDFDefenses(m)}
        <p class="stat-line"><strong>Senses</strong> ${m.senses.join(', ')}</p>
        <p class="stat-line"><strong>Languages</strong> ${m.languages}</p>
        <p class="stat-line"><strong>Challenge</strong> ${formatCR(m.cr)} (${formatNumber(m.xp)} XP)</p>
        <p class="stat-line"><strong>Proficiency Bonus</strong> +${m.proficiencyBonus}</p>
        
        <div class="divider"></div>
        
        ${renderPDFTraits(m)}
        
        <h2 class="section-title">Actions</h2>
        ${m.multiattack ? `<div class="action"><span class="action-name">Multiattack.</span> ${m.multiattack}</div>` : ''}
        ${renderPDFActions(m)}
        
        ${m.legendaryActions ? renderPDFLegendary(m) : ''}
        ${m.lairActions ? renderPDFLair(m) : ''}
        ${m.spellcasting ? renderPDFSpells(m) : ''}
    </div>
    
    <script>
        window.onload = function() {
            window.print();
        }
    </script>
</body>
</html>
    `;
    
    printWindow.document.write(html);
    printWindow.document.close();
}

function renderPDFSaves(m) {
    if (!m.savingThrows || Object.keys(m.savingThrows).length === 0) return '';
    const labels = { str: 'Str', dex: 'Dex', con: 'Con', int: 'Int', wis: 'Wis', cha: 'Cha' };
    const saves = Object.entries(m.savingThrows).map(([stat, bonus]) => `${labels[stat]} ${formatModifier(bonus)}`).join(', ');
    return `<p class="stat-line"><strong>Saving Throws</strong> ${saves}</p>`;
}

function renderPDFSkills(m) {
    if (!m.skills || Object.keys(m.skills).length === 0) return '';
    const skills = Object.entries(m.skills).map(([skill, bonus]) => `${capitalize(skill)} ${formatModifier(bonus)}`).join(', ');
    return `<p class="stat-line"><strong>Skills</strong> ${skills}</p>`;
}

function renderPDFDefenses(m) {
    let html = '';
    if (m.damageResistances?.length > 0) html += `<p class="stat-line"><strong>Damage Resistances</strong> ${m.damageResistances.join(', ')}</p>`;
    if (m.damageImmunities?.length > 0) html += `<p class="stat-line"><strong>Damage Immunities</strong> ${m.damageImmunities.join(', ')}</p>`;
    if (m.conditionImmunities?.length > 0) html += `<p class="stat-line"><strong>Condition Immunities</strong> ${m.conditionImmunities.join(', ')}</p>`;
    return html;
}

function renderPDFTraits(m) {
    if (!m.traits?.length) return '';
    return m.traits.map(t => `
        <div class="trait">
            <span class="trait-name">${t.name}.</span> ${t.description
                .replace('{range}', t.defaultRange || '60')
                .replace('{amount}', t.defaultAmount || '10')
                .replace('{dice}', t.defaultDice || '2d6')
                .replace('{dc}', 8 + m.proficiencyBonus + (m.abilityModifiers.str || 0))
            }
        </div>
    `).join('');
}

function renderPDFActions(m) {
    return m.actions.map(action => {
        // Library format: action has full description text
        if (action.description && !action.attackBonus) {
            return `<div class="action"><span class="action-name">${action.name}.</span> ${action.description}</div>`;
        }
        
        // Generated format: breath weapon
        if (action.type === 'breath') {
            return `<div class="action"><span class="action-name">${action.name} (Recharge ${action.recharge}).</span> ${action.description}</div>`;
        }
        
        // Generated format: standard attack
        const attackType = action.type === 'melee' ? 'Melee Weapon Attack' : 'Ranged Weapon Attack';
        const rangeText = action.type === 'melee' ? `reach ${action.reach} ft.` : `range ${action.range}`;
        return `<div class="action"><span class="action-name">${action.name}.</span> <em>${attackType}:</em> ${formatModifier(action.attackBonus)} to hit, ${rangeText}, one target. <em>Hit:</em> ${action.damage} damage.</div>`;
    }).join('');
}

function renderPDFLegendary(m) {
    return `
        <h2 class="section-title">Legendary Actions</h2>
        <p class="legendary-intro">The creature can take ${m.legendaryActions.count} legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The creature regains spent legendary actions at the start of its turn.</p>
        ${m.legendaryActions.actions.map(a => `
            <div class="action">
                <span class="action-name">${a.name}${a.cost > 1 ? ` (Costs ${a.cost} Actions)` : ''}.</span> ${a.description
                    .replace('{dc}', 8 + m.proficiencyBonus + (m.abilityModifiers.str || 0))
                    .replace('{damage}', getDamageDice(m.cr, 'secondary'))
                }
            </div>
        `).join('')}
    `;
}

function renderPDFLair(m) {
    return `
        <h2 class="section-title">Lair Actions</h2>
        <p class="lair-intro">On initiative count 20 (losing initiative ties), the creature can take a lair action to cause one of the following effects:</p>
        <ul>
            ${m.lairActions.map(a => `<li>${a.description}</li>`).join('')}
        </ul>
    `;
}

function renderPDFSpells(m) {
    const abilityNames = { int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };
    const sd = m.spellcasting;
    
    // Handle both library format (dc/attack) and generated format (saveDC/attackBonus)
    const saveDC = sd.dc || sd.saveDC;
    const attackBonus = sd.attack || sd.attackBonus;
    const isInnate = sd.innate;
    
    let spellList = '';
    
    // Handle library format spells (cantrips, 1st, 2nd, etc.)
    if (sd.spells) {
        for (const [key, value] of Object.entries(sd.spells)) {
            if (Array.isArray(value) && value.length > 0) {
                // Direct array of spell names (atWill, cantrips, etc)
                const spellNames = value.map(id => (typeof spells !== 'undefined' && spells[id]?.name) || id).join(', ');
                const label = key === 'atWill' ? 'At will' : 
                              key === 'cantrips' ? 'Cantrips (at will)' :
                              key === 'perDay3' ? '3/day each' :
                              key === 'perDay2' ? '2/day each' :
                              key === 'perDay1' ? '1/day each' :
                              key;
                spellList += `<p><strong>${label}:</strong> <em>${spellNames}</em></p>`;
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                // Spell slot format { slots: X, spells: [...] }
                if (value.slots !== undefined && value.spells) {
                    const spellNames = value.spells.map(id => (typeof spells !== 'undefined' && spells[id]?.name) || id).join(', ');
                    const levelLabel = key === 'cantrips' ? 'Cantrips (at will)' : `${key} level (${value.slots} slots)`;
                    spellList += `<p><strong>${levelLabel}:</strong> <em>${spellNames}</em></p>`;
                } else if (Array.isArray(value.spells)) {
                    const spellNames = value.spells.join(', ');
                    spellList += `<p><strong>${key}:</strong> <em>${spellNames}</em></p>`;
                }
            }
        }
    }
    
    const title = isInnate ? 'Innate Spellcasting' : 'Spellcasting';
    const intro = isInnate ? 
        `The creature's innate spellcasting ability is ${abilityNames[sd.ability]} (spell save DC ${saveDC}${attackBonus ? `, ${formatModifier(attackBonus)} to hit with spell attacks` : ''}). It can innately cast the following spells, requiring no material components:` :
        `The creature is a spellcaster. Its spellcasting ability is ${abilityNames[sd.ability]} (spell save DC ${saveDC}${attackBonus ? `, ${formatModifier(attackBonus)} to hit with spell attacks` : ''}).`;
    
    return `
        <h2 class="section-title">${title}</h2>
        <p>${intro}</p>
        ${spellList}
    `;
}

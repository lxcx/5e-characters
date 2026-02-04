// D&D 5E Monster Generator - UI Functions

// Display generated monster
function displayMonster(monster) {
    const resultEl = document.getElementById('monsterResult');
    
    let html = `
        <div class="monster-card">
            <div class="monster-header">
                <div class="monster-name-section">
                    <h1 class="monster-name editable" onclick="editField('name')">${monster.name}</h1>
                    <p class="monster-basics">
                        <span class="editable" onclick="editField('size')">${capitalize(monster.size)}</span>
                        <span class="editable" onclick="editField('type')">${monster.type}</span>,
                        <span class="editable" onclick="editField('alignment')">${monster.alignment}</span>
                    </p>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="monster-stats-row">
                <div class="stat-item">
                    <span class="stat-label">Armor Class</span>
                    <span class="stat-value">${monster.ac}</span>
                    <span class="stat-note">(${monster.acType})</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Hit Points</span>
                    <span class="stat-value">${monster.hp}</span>
                    <span class="stat-note">(${monster.hpFormula})</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Speed</span>
                    <span class="stat-value">${formatSpeeds(monster.speeds)}</span>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="ability-scores">
                ${renderAbilityScores(monster)}
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="monster-details">
                ${renderSavingThrows(monster)}
                ${renderSkills(monster)}
                ${renderDefenses(monster)}
                <p><strong>Senses</strong> ${monster.senses && monster.senses.length > 0 ? monster.senses.join(', ') : 'passive Perception ' + (10 + (monster.skills?.perception || monster.abilityModifiers?.wis || 0))}</p>
                <p><strong>Languages</strong> ${monster.languages || '—'}</p>
                <p><strong>Challenge</strong> ${formatCR(monster.cr)} (${formatNumber(monster.xp)} XP)</p>
                <p><strong>Proficiency Bonus</strong> +${monster.proficiencyBonus}</p>
                ${monster.source ? `<p><strong>Source</strong> ${monster.source}</p>` : ''}
            </div>
            
            ${renderTraits(monster)}
            
            ${renderActions(monster)}
            
            ${renderReactions(monster)}
            
            ${monster.isLegendary ? renderLegendaryActions(monster) : ''}
            
            ${monster.lairActions ? renderLairActions(monster) : ''}
            
            ${monster.hasSpellcasting ? renderSpellcasting(monster) : ''}
            
            <div class="monster-description">
                <h3 class="section-title"><i class="fa-solid fa-book"></i> Description</h3>
                <p class="editable" onclick="editField('description')">${monster.description}</p>
            </div>
            
            <!-- Portrait Section -->
            <div class="portrait-section">
                <h3 class="section-title"><i class="fa-solid fa-image"></i> Portrait</h3>
                <div class="portrait-container" id="portraitContainer">
                    <div class="portrait-placeholder" id="portraitPlaceholder">
                        <i class="fa-solid fa-dragon"></i>
                        <span>Click below to generate a portrait</span>
                    </div>
                    <img id="portraitImage" class="portrait-image" style="display: none;" alt="Monster Portrait">
                    <div id="portraitLoading" class="portrait-loading" style="display: none;">
                        <i class="fa-solid fa-spinner fa-spin"></i>
                        <span>Generating portrait...</span>
                    </div>
                </div>
                <div class="portrait-actions">
                    <button class="generate-portrait-btn" onclick="generatePortrait()">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> Generate Portrait
                    </button>
                    <button class="view-prompt-btn" onclick="showPortraitPrompt()">
                        <i class="fa-solid fa-scroll"></i> View Prompt
                    </button>
                </div>
            </div>
            
            <!-- Export Section -->
            <div class="export-section">
                <button class="export-pdf-btn" onclick="exportToPDF()">
                    <i class="fa-solid fa-file-pdf"></i> Export to PDF
                </button>
            </div>
        </div>
    `;
    
    resultEl.innerHTML = html;
}

// Render ability scores
function renderAbilityScores(monster) {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const labels = { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' };
    
    return `
        <div class="ability-grid">
            ${abilities.map(ability => `
                <div class="ability-item">
                    <span class="ability-label">${labels[ability]}</span>
                    <span class="ability-score">${monster.abilityScores[ability]}</span>
                    <span class="ability-mod">(${formatModifier(monster.abilityModifiers[ability])})</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Render saving throws
function renderSavingThrows(monster) {
    if (!monster.savingThrows || Object.keys(monster.savingThrows).length === 0) {
        return '';
    }
    
    const labels = { str: 'Str', dex: 'Dex', con: 'Con', int: 'Int', wis: 'Wis', cha: 'Cha' };
    const saves = Object.entries(monster.savingThrows)
        .map(([stat, bonus]) => `${labels[stat]} ${formatModifier(bonus)}`)
        .join(', ');
    
    return `<p><strong>Saving Throws</strong> ${saves}</p>`;
}

// Render skills
function renderSkills(monster) {
    if (!monster.skills || Object.keys(monster.skills).length === 0) {
        return '';
    }
    
    const skills = Object.entries(monster.skills)
        .map(([skill, bonus]) => `${capitalize(skill)} ${formatModifier(bonus)}`)
        .join(', ');
    
    return `<p><strong>Skills</strong> ${skills}</p>`;
}

// Render defenses
function renderDefenses(monster) {
    let html = '';
    
    if (monster.damageResistances && monster.damageResistances.length > 0) {
        html += `<p><strong>Damage Resistances</strong> ${monster.damageResistances.join(', ')}</p>`;
    }
    if (monster.damageImmunities && monster.damageImmunities.length > 0) {
        html += `<p><strong>Damage Immunities</strong> ${monster.damageImmunities.join(', ')}</p>`;
    }
    if (monster.conditionImmunities && monster.conditionImmunities.length > 0) {
        html += `<p><strong>Condition Immunities</strong> ${monster.conditionImmunities.join(', ')}</p>`;
    }
    
    return html;
}

// Render traits
function renderTraits(monster) {
    if (!monster.traits || monster.traits.length === 0) {
        return '';
    }
    
    return `
        <div class="traits-section">
            <h3 class="section-title"><i class="fa-solid fa-star"></i> Traits</h3>
            ${monster.traits.map(trait => `
                <div class="trait-item">
                    <p><strong>${trait.name}.</strong> ${trait.description
                        .replace('{range}', trait.defaultRange || '60')
                        .replace('{amount}', trait.defaultAmount || '10')
                        .replace('{dice}', trait.defaultDice || '2d6')
                        .replace('{dc}', 8 + monster.proficiencyBonus + (monster.abilityModifiers.str || 0))
                    }</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Render actions
function renderActions(monster) {
    let html = `
        <div class="actions-section">
            <h3 class="section-title"><i class="fa-solid fa-swords"></i> Actions</h3>
    `;
    
    // Multiattack first if present
    if (monster.multiattack) {
        html += `
            <div class="action-item">
                <p><strong>Multiattack.</strong> ${monster.multiattack}</p>
            </div>
        `;
    }
    
    // Regular actions
    for (const action of monster.actions) {
        html += renderAction(action, monster);
    }
    
    html += `
            <button class="add-action-btn" onclick="openActionModal()">
                <i class="fa-solid fa-plus"></i> Add Action
            </button>
        </div>
    `;
    
    return html;
}

// Render single action
function renderAction(action, monster) {
    // If action has a full description (library format), use it directly
    if (action.description && !action.attackBonus) {
        // Check if it's a recharge ability
        const rechargeMatch = action.name.match(/\(Recharge (\d+-\d+|\d+)\)/i);
        const displayName = rechargeMatch ? action.name : action.name;
        
        return `
            <div class="action-item">
                <p><strong>${displayName}.</strong> ${action.description}</p>
            </div>
        `;
    }
    
    // Handle breath weapon type (generated format)
    if (action.type === 'breath') {
        return `
            <div class="action-item">
                <p><strong>${action.name} (Recharge ${action.recharge}).</strong> ${action.description}</p>
            </div>
        `;
    }
    
    // Handle standard attack format (generated format)
    const attackType = action.type === 'melee' ? 'Melee Weapon Attack' : 'Ranged Weapon Attack';
    const rangeText = action.type === 'melee' ? `reach ${action.reach} ft.` : `range ${action.range}`;
    
    return `
        <div class="action-item">
            <p><strong>${action.name}.</strong> <em>${attackType}:</em> ${formatModifier(action.attackBonus)} to hit, ${rangeText}, one target. <em>Hit:</em> ${action.damage} damage.</p>
        </div>
    `;
}

// Render reactions
function renderReactions(monster) {
    if (!monster.reactions || monster.reactions.length === 0) {
        return '';
    }
    
    return `
        <div class="reactions-section">
            <h3 class="section-title"><i class="fa-solid fa-bolt"></i> Reactions</h3>
            ${monster.reactions.map(reaction => `
                <div class="action-item">
                    <p><strong>${reaction.name}.</strong> ${reaction.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Render legendary actions
function renderLegendaryActions(monster) {
    if (!monster.legendaryActions) return '';
    const actions = monster.legendaryActions.actions;
    if (!actions || !Array.isArray(actions) || actions.length === 0) return '';
    
    // Support both formats: count (generated) and perRound (library)
    const actionCount = monster.legendaryActions.count || monster.legendaryActions.perRound || 3;
    
    return `
        <div class="legendary-section">
            <h3 class="section-title"><i class="fa-solid fa-crown"></i> Legendary Actions</h3>
            <p class="legendary-intro">The creature can take ${actionCount} legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The creature regains spent legendary actions at the start of its turn.</p>
            ${actions.map(action => {
                // Check if cost is included in name (library format) or as separate property
                const hasCostInName = action.name.includes('Costs') || action.name.includes('costs');
                const costSuffix = !hasCostInName && action.cost > 1 ? ` (Costs ${action.cost} Actions)` : '';
                
                return `
                <div class="legendary-item">
                    <p><strong>${action.name}${costSuffix}.</strong> ${action.description
                        .replace('{dc}', 8 + monster.proficiencyBonus + (monster.abilityModifiers?.str || 0))
                        .replace('{damage}', getDamageDice(monster.cr, 'secondary'))
                    }</p>
                </div>
            `}).join('')}
        </div>
    `;
}

// Render lair actions
function renderLairActions(monster) {
    if (!monster.lairActions) return '';
    
    return `
        <div class="lair-section">
            <h3 class="section-title"><i class="fa-solid fa-dungeon"></i> Lair Actions</h3>
            <p class="lair-intro">On initiative count 20 (losing initiative ties), the creature can take a lair action to cause one of the following effects; the creature can't use the same effect two rounds in a row:</p>
            <ul class="lair-list">
                ${monster.lairActions.map(action => `
                    <li>${action.description}</li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Render spellcasting
function renderSpellcasting(monster) {
    if (!monster.spellcasting) return '';
    
    const abilityNames = { int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };
    const spellData = monster.spellcasting;
    
    // Handle library format (dc/attack) vs generated format (saveDC/attackBonus)
    const saveDC = spellData.dc || spellData.saveDC;
    const attackBonus = spellData.attack || spellData.attackBonus;
    const isInnate = spellData.innate;
    
    let spellList = '';
    
    // Handle library format spells
    if (spellData.spells) {
        for (const [key, value] of Object.entries(spellData.spells)) {
            if (Array.isArray(value) && value.length > 0) {
                // Direct array of spell names (atWill, etc)
                const spellNames = value.map(id => typeof spells !== 'undefined' && spells[id]?.name || id).join(', ');
                const label = key === 'atWill' ? 'At will' : 
                              key === 'cantrips' ? 'Cantrips (at will)' :
                              key;
                spellList += `<p><strong>${label}:</strong> <em>${spellNames}</em></p>`;
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                // Spell slot format { slots: X, spells: [...] }
                if (value.slots && value.spells) {
                    const spellNames = value.spells.map(id => typeof spells !== 'undefined' && spells[id]?.name || id).join(', ');
                    const levelLabel = key === 'cantrips' ? 'Cantrips (at will)' : `${key} level (${value.slots} slots)`;
                    spellList += `<p><strong>${levelLabel}:</strong> <em>${spellNames}</em></p>`;
                } else if (Array.isArray(value.spells)) {
                    // Just spells array
                    const spellNames = value.spells.join(', ');
                    spellList += `<p><strong>${key}:</strong> <em>${spellNames}</em></p>`;
                }
            }
        }
    }
    
    // Fallback to old generated format
    if (!spellList && spellData.spells) {
        if (spellData.spells.atWill?.length > 0) {
            const spellNames = spellData.spells.atWill.map(id => typeof spells !== 'undefined' && spells[id]?.name || id).join(', ');
            spellList += `<p><strong>At will:</strong> <em>${spellNames}</em></p>`;
        }
        if (spellData.spells.perDay3?.length > 0) {
            const spellNames = spellData.spells.perDay3.map(id => typeof spells !== 'undefined' && spells[id]?.name || id).join(', ');
            spellList += `<p><strong>3/day each:</strong> <em>${spellNames}</em></p>`;
        }
        if (spellData.spells.perDay2?.length > 0) {
            const spellNames = spellData.spells.perDay2.map(id => typeof spells !== 'undefined' && spells[id]?.name || id).join(', ');
            spellList += `<p><strong>2/day each:</strong> <em>${spellNames}</em></p>`;
        }
        if (spellData.spells.perDay1?.length > 0) {
            const spellNames = spellData.spells.perDay1.map(id => typeof spells !== 'undefined' && spells[id]?.name || id).join(', ');
            spellList += `<p><strong>1/day each:</strong> <em>${spellNames}</em></p>`;
        }
    }
    
    const title = isInnate ? 'Innate Spellcasting' : 'Spellcasting';
    const intro = isInnate ? 
        `The creature's innate spellcasting ability is ${abilityNames[spellData.ability]} (spell save DC ${saveDC}${attackBonus ? `, ${formatModifier(attackBonus)} to hit with spell attacks` : ''}). It can innately cast the following spells, requiring no material components:` :
        `The creature is a spellcaster. Its spellcasting ability is ${abilityNames[spellData.ability]} (spell save DC ${saveDC}${attackBonus ? `, ${formatModifier(attackBonus)} to hit with spell attacks` : ''}).`;
    
    return `
        <div class="spellcasting-section">
            <h3 class="section-title"><i class="fa-solid fa-hat-wizard"></i> ${title}</h3>
            <p>${intro}</p>
            <div class="spell-list">
                ${spellList}
            </div>
        </div>
    `;
}

// Format speeds
function formatSpeeds(speeds) {
    const parts = [];
    for (const [type, speed] of Object.entries(speeds)) {
        if (type === 'walk') {
            parts.unshift(speed);
        } else {
            parts.push(`${type} ${speed}`);
        }
    }
    return parts.join(', ');
}

// Format CR
function formatCR(cr) {
    if (cr === 0.125) return '1/8';
    if (cr === 0.25) return '1/4';
    if (cr === 0.5) return '1/2';
    return cr.toString();
}

// Edit field
function editField(field) {
    // TODO: Implement inline editing
    console.log('Edit field:', field);
}

// Portrait generation (Prodia API with Pollinations fallback)
async function generatePortrait() {
    if (!currentMonster) return;
    
    const prompt = buildMonsterPortraitPrompt(currentMonster);
    
    // Show loading state
    const placeholder = document.getElementById('portraitPlaceholder');
    const loading = document.getElementById('portraitLoading');
    const image = document.getElementById('portraitImage');
    const btn = document.querySelector('.generate-portrait-btn');
    
    if (placeholder) placeholder.style.display = 'none';
    if (loading) {
        loading.style.display = 'flex';
        loading.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Generating portrait...</span>`;
    }
    if (image) image.style.display = 'none';
    if (btn) btn.disabled = true;
    
    // Try Prodia first (faster, more reliable)
    try {
        const response = await fetch('/api/generate-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, width: 512, height: 512 })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.success && data.imageUrl) {
                if (image) {
                    image.src = data.imageUrl;
                    image.style.display = 'block';
                }
                if (loading) loading.style.display = 'none';
                if (btn) btn.disabled = false;
                return;
            }
        }
    } catch (error) {
        console.log('Prodia failed, trying Pollinations fallback...');
    }
    
    // Fallback to Pollinations
    if (loading) {
        loading.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Trying backup service...</span>`;
    }
    
    const encodedPrompt = encodeURIComponent(prompt);
    const seed = Math.floor(Math.random() * 999999999);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&seed=${seed}&model=flux&nologo=true&safe=true&private=true`;
    
    const newImage = new Image();
    newImage.onload = function() {
        if (image) {
            image.src = imageUrl;
            image.style.display = 'block';
        }
        if (loading) loading.style.display = 'none';
        if (btn) btn.disabled = false;
    };
    newImage.onerror = function() {
        if (loading) loading.style.display = 'none';
        if (placeholder) {
            placeholder.style.display = 'flex';
            placeholder.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.5em; color: #dc3545;"></i>
                <span style="text-align: center; font-size: 0.9em;">Image service unavailable.<br>Click "View Prompt" to copy for other AI generators.</span>
            `;
        }
        if (btn) btn.disabled = false;
    };
    newImage.src = imageUrl;
}

function buildMonsterPortraitPrompt(m) {
    // For humanoids, use "character" instead of "monster" to get better results
    const isHumanoid = m.type === 'humanoid';
    const subjectWord = isHumanoid ? 'character' : 'creature';
    
    let prompt = `Fantasy illustration of a ${m.size} ${m.type} ${subjectWord} called "${m.name}".`;
    
    // Try to get visual description - check monster object first, then MONSTER_DESCRIPTIONS directly
    let visualDesc = m.visualDescription;
    if (!visualDesc && typeof MONSTER_DESCRIPTIONS !== 'undefined') {
        // Try to look up by normalized key (lowercase, spaces to hyphens)
        const key = m.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        visualDesc = MONSTER_DESCRIPTIONS[key];
    }
    
    // Use visual description if available (most accurate)
    if (visualDesc) {
        prompt += ` ${visualDesc}`;
    } else if (m.description) {
        prompt += ` ${m.description}`;
    } else {
        // Fallback to detailed type-specific visual hints
        const typeHints = {
            'aberration': 'Alien creature with writhing tentacles, multiple eyes on stalks, non-euclidean anatomy that hurts to look at, slimy otherworldly skin, and features that defy natural biology',
            'beast': 'Natural animal with realistic fur or scales, powerful muscles, keen predatory eyes, and features evolved for survival in the wild',
            'celestial': 'Divine being with luminous skin, feathered wings glowing with holy light, a halo or nimbus of golden energy, and serene yet powerful expression',
            'construct': 'Artificial creation made of stone, metal, or wood, with glowing rune inscriptions, mechanical joints, and expressionless features animated by magic',
            'dragon': 'Massive reptilian creature with armored scales, bat-like wings, horns crowning its head, fearsome jaws filled with fangs, and eyes burning with ancient intelligence',
            'elemental': 'Living embodiment of elemental force - swirling winds, crackling flames, flowing water, or shifting stone forming a vaguely humanoid shape',
            'fey': 'Ethereal creature of otherworldly beauty or strangeness, with features that shimmer between forms, pointed ears, and an aura of wild magic',
            'fiend': 'Demonic or devilish creature with horns, leathery bat wings, cloven hooves or clawed feet, burning eyes, and skin ranging from red to black',
            'giant': 'Enormous humanoid standing two to three times the height of a human, with proportionally massive muscles and a face weathered by age',
            'humanoid': 'Human or human-like person with realistic proportions and features',
            'monstrosity': 'Horrific hybrid creature combining features of multiple animals in unnatural ways - chimeric, twisted, and wrong in fundamental ways',
            'ooze': 'Amorphous blob of translucent or opaque slime, shapeless and flowing, with partially digested objects visible within its gelatinous mass',
            'plant': 'Ambulatory vegetation with bark-like skin, vine tendrils for limbs, leaves for hair, and glowing sap-like eyes set in a wooden face',
            'undead': 'Corpse-like creature with pallid or rotting flesh, hollow eye sockets glowing with spectral light, skeletal features, and an aura of grave-cold'
        };
        
        if (typeHints[m.type]) {
            prompt += ` ${typeHints[m.type]}.`;
        }
    }
    
    // Add power level description (skip for low-CR humanoids to keep them realistic)
    if (m.cr >= 20) {
        prompt += ' Legendary and godlike power, apocalyptic presence.';
    } else if (m.cr >= 10) {
        prompt += ' Extremely powerful and intimidating, boss-level threat.';
    } else if (m.cr >= 5 && !isHumanoid) {
        prompt += ' Dangerous and formidable creature.';
    }
    
    // Use different style prompts for humanoids vs monsters
    if (isHumanoid) {
        prompt += ' Dark fantasy art style, detailed character design, dramatic lighting, realistic human proportions, D&D character portrait, full body portrait.';
    } else {
        prompt += ' Dark fantasy art style, detailed creature design, dramatic lighting, D&D monster manual style illustration, full body portrait.';
    }
    
    return prompt;
}

// Portrait prompt viewer
function showPortraitPrompt() {
    if (!currentMonster) return;
    
    const prompt = buildMonsterPortraitPrompt(currentMonster);
    
    document.getElementById('portraitPromptText').value = prompt;
    document.getElementById('portraitPromptModal').classList.add('active');
}

function closePromptModal() {
    document.getElementById('portraitPromptModal').classList.remove('active');
}

function copyPromptToClipboard() {
    const textarea = document.getElementById('portraitPromptText');
    textarea.select();
    document.execCommand('copy');
    
    const btn = document.getElementById('copyPromptBtn');
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    btn.classList.add('copied');
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        btn.classList.remove('copied');
    }, 2000);
}

// Generate portrait with custom/edited prompt
async function generateWithCustomPrompt() {
    const customPrompt = document.getElementById('portraitPromptText').value.trim();
    if (!customPrompt) return;
    
    // Close modal
    closePromptModal();
    
    // Show loading state
    const placeholder = document.getElementById('portraitPlaceholder');
    const loading = document.getElementById('portraitLoading');
    const image = document.getElementById('portraitImage');
    const btn = document.querySelector('.generate-portrait-btn');
    
    if (placeholder) placeholder.style.display = 'none';
    if (loading) {
        loading.style.display = 'flex';
        loading.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Generating with custom prompt...</span>`;
    }
    if (image) image.style.display = 'none';
    if (btn) btn.disabled = true;
    
    // Try Prodia first
    try {
        const response = await fetch('/api/generate-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: customPrompt, width: 512, height: 512 })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.success && data.imageUrl) {
                if (image) {
                    image.src = data.imageUrl;
                    image.style.display = 'block';
                }
                if (loading) loading.style.display = 'none';
                if (btn) btn.disabled = false;
                return;
            }
        }
    } catch (error) {
        console.log('Prodia failed, trying Pollinations fallback...');
    }
    
    // Fallback to Pollinations
    if (loading) {
        loading.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Trying backup service...</span>`;
    }
    
    const encodedPrompt = encodeURIComponent(customPrompt);
    const seed = Math.floor(Math.random() * 999999999);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&seed=${seed}&model=flux&nologo=true&safe=true&private=true`;
    
    const newImage = new Image();
    newImage.onload = function() {
        if (image) {
            image.src = imageUrl;
            image.style.display = 'block';
        }
        if (loading) loading.style.display = 'none';
        if (btn) btn.disabled = false;
    };
    newImage.onerror = function() {
        if (loading) loading.style.display = 'none';
        if (placeholder) {
            placeholder.style.display = 'flex';
            placeholder.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.5em; color: #dc3545;"></i>
                <span style="text-align: center; font-size: 0.9em;">Image generation failed.<br>Try editing the prompt.</span>
            `;
        }
        if (btn) btn.disabled = false;
    };
    newImage.src = imageUrl;
}

// Reset prompt to auto-generated default
function resetPromptToDefault() {
    if (!currentMonster) return;
    const prompt = buildMonsterPortraitPrompt(currentMonster);
    document.getElementById('portraitPromptText').value = prompt;
}

// Action modal functions
function openActionModal() {
    document.getElementById('actionEditModal').classList.add('active');
}

function closeActionModal() {
    document.getElementById('actionEditModal').classList.remove('active');
}

function saveAction() {
    // TODO: Implement action saving
    closeActionModal();
}

// Spell modal functions
function closeSpellModal() {
    document.getElementById('spellSelectModal').classList.remove('active');
}

function clearAllSpells() {
    // TODO: Implement
}

function saveSpellSelections() {
    closeSpellModal();
}

// Trait modal functions
function closeTraitModal() {
    document.getElementById('traitSelectModal').classList.remove('active');
}

function filterTraitList() {
    // TODO: Implement
}

function addSelectedTrait() {
    closeTraitModal();
}

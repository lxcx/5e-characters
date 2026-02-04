// D&D 5E Monster Generator - UI Functions

let isEditing = false;

// Display generated monster
function displayMonster(monster) {
    const resultEl = document.getElementById('monsterResult');
    
    let html = `
        <div class="monster-card">
            <div class="monster-header">
                <div class="monster-name-section">
                    <h1 class="monster-name editable" id="editable-name" onclick="editMonsterTextField('name', event)">${monster.name}</h1>
                    <p class="monster-basics">
                        <span class="editable" id="editable-size" onclick="editMonsterSelectField('size', getSizeOptions(), event)">${capitalize(monster.size)}</span>
                        <span class="editable" id="editable-type" onclick="editMonsterSelectField('type', getTypeOptions(), event)">${monster.type}</span>,
                        <span class="editable" id="editable-alignment" onclick="editMonsterSelectField('alignment', getAlignmentOptions(), event)">${monster.alignment}</span>
                    </p>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="monster-stats-row">
                <div class="stat-item">
                    <span class="stat-label">Armor Class</span>
                    <span class="stat-value editable" id="editable-ac" onclick="editMonsterNumberField('ac', event)">${monster.ac}</span>
                    <span class="stat-note">(${monster.acType})</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Hit Points</span>
                    <span class="stat-value editable" id="editable-hp" onclick="editMonsterNumberField('hp', event)">${monster.hp}</span>
                    <span class="stat-note">(${monster.hpFormula || monster.hitDice || ''})</span>
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
            
            ${monster.isLegendary ? renderLegendaryActions(monster) : renderAddLegendaryOption()}
            
            ${monster.lairActions ? renderLairActions(monster) : ''}
            
            ${monster.hasSpellcasting ? renderSpellcasting(monster) : ''}
            
            <div class="monster-description">
                <h3 class="section-title"><i class="fa-solid fa-book"></i> Description</h3>
                <p class="editable" id="editable-description" onclick="editMonsterTextareaField('description', event)">${monster.description}</p>
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
                        <i class="fa-solid fa-scroll"></i> Edit Prompt
                    </button>
                    ${monster.source ? `<button class="official-art-btn" onclick="loadOfficialArt()">
                        <i class="fa-solid fa-book"></i> Official Art
                    </button>` : ''}
                    <button class="upload-image-btn" onclick="triggerImageUpload()">
                        <i class="fa-solid fa-upload"></i> Upload
                    </button>
                    <input type="file" id="imageUploadInput" accept="image/*" style="display: none;" onchange="handleImageUpload(event)">
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
                    <span class="ability-score editable" id="editable-ability-${ability}" onclick="editMonsterAbilityScore('${ability}', event)">${monster.abilityScores[ability]}</span>
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
    
    // Support both formats: count (generated) and perRound (library)
    const actionCount = monster.legendaryActions.count || monster.legendaryActions.perRound || 3;
    
    let actionsHtml = '';
    if (actions && Array.isArray(actions) && actions.length > 0) {
        actionsHtml = actions.map((action, index) => {
            // Check if cost is included in name (library format) or as separate property
            const hasCostInName = action.name.includes('Costs') || action.name.includes('costs');
            const costSuffix = !hasCostInName && action.cost > 1 ? ` (Costs ${action.cost} Actions)` : '';
            
            return `
                <div class="legendary-item">
                    <p>
                        <strong>${action.name}${costSuffix}.</strong> ${action.description
                            .replace('{dc}', 8 + monster.proficiencyBonus + (monster.abilityModifiers?.str || 0))
                            .replace('{damage}', getDamageDice(monster.cr, 'secondary'))
                            .replace('{bonus}', '+' + (monster.proficiencyBonus + (monster.abilityModifiers?.str || 0)))
                        }
                        <button class="remove-legendary-btn" onclick="removeLegendaryAction(${index})" title="Remove this legendary action">
                            <i class="fa-solid fa-times"></i>
                        </button>
                    </p>
                </div>
            `;
        }).join('');
    }
    
    return `
        <div class="legendary-section">
            <h3 class="section-title"><i class="fa-solid fa-crown"></i> Legendary Actions</h3>
            <p class="legendary-intro">The creature can take ${actionCount} legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The creature regains spent legendary actions at the start of its turn.</p>
            ${actionsHtml}
            <div class="legendary-actions-controls">
                <button class="add-legendary-btn" onclick="openLegendaryActionModal()">
                    <i class="fa-solid fa-plus"></i> Add Legendary Action
                </button>
            </div>
        </div>
    `;
}

// Render option to add legendary actions for non-legendary monsters
function renderAddLegendaryOption() {
    return `
        <div class="add-legendary-section">
            <button class="add-legendary-btn" onclick="openLegendaryActionModal()">
                <i class="fa-solid fa-crown"></i> Make Legendary (Add Legendary Actions)
            </button>
        </div>
    `;
}

// Open modal to add legendary action
function openLegendaryActionModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('legendaryActionModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'legendaryActionModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content legendary-modal">
                <h3><i class="fa-solid fa-crown"></i> Add Legendary Action</h3>
                
                <div class="modal-tabs">
                    <button class="modal-tab active" onclick="switchLegendaryTab('preset')">Select Preset</button>
                    <button class="modal-tab" onclick="switchLegendaryTab('custom')">Custom Action</button>
                </div>
                
                <div id="legendaryPresetTab" class="legendary-tab-content">
                    <div class="preset-actions-list">
                        ${getLegendaryActionOptions()}
                    </div>
                </div>
                
                <div id="legendaryCustomTab" class="legendary-tab-content" style="display: none;">
                    <div class="form-group">
                        <label>Action Name</label>
                        <input type="text" id="customLegendaryName" placeholder="e.g., Tail Sweep">
                    </div>
                    <div class="form-group">
                        <label>Cost (Actions)</label>
                        <select id="customLegendaryCost">
                            <option value="1">1 Action</option>
                            <option value="2">2 Actions</option>
                            <option value="3">3 Actions</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea id="customLegendaryDesc" rows="3" placeholder="Describe what this legendary action does..."></textarea>
                    </div>
                    <button class="modal-btn primary" onclick="addCustomLegendaryAction()">
                        <i class="fa-solid fa-plus"></i> Add Custom Action
                    </button>
                </div>
                
                <button class="modal-close-btn" onclick="closeLegendaryActionModal()">
                    <i class="fa-solid fa-times"></i> Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'flex';
}

// Get legendary action preset options HTML
function getLegendaryActionOptions() {
    const templates = [
        { name: "Detect", cost: 1, description: "Makes a Wisdom (Perception) check." },
        { name: "Tail Attack", cost: 1, description: "Makes a tail attack." },
        { name: "Wing Attack", cost: 2, description: "Beats its wings. Each creature within 15 feet must succeed on a Dexterity saving throw or take bludgeoning damage and be knocked prone. The creature can then fly up to half its flying speed." },
        { name: "Move", cost: 1, description: "Moves up to half its speed without provoking opportunity attacks." },
        { name: "Attack", cost: 2, description: "Makes one weapon attack." },
        { name: "Cast a Spell", cost: 3, description: "Casts a spell from its list of spells, using a spell slot as normal." },
        { name: "Claw Attack", cost: 1, description: "Makes one claw attack." },
        { name: "Bite Attack", cost: 2, description: "Makes one bite attack." },
        { name: "Frightening Presence", cost: 1, description: "Uses Frightful Presence." },
        { name: "Teleport", cost: 2, description: "Magically teleports up to 60 feet to an unoccupied space it can see." },
        { name: "Command Ally", cost: 1, description: "One ally within 30 feet that can hear the creature can use its reaction to move up to its speed or make one weapon attack." },
        { name: "Eye Ray", cost: 2, description: "Uses one random eye ray." },
        { name: "Disrupt Life", cost: 3, description: "Each non-undead creature within 20 feet must make a Constitution saving throw, taking necrotic damage on a failed save, or half as much on a successful one." },
        { name: "Energy Drain", cost: 2, description: "Melee Spell Attack against one creature. On hit, deals necrotic damage and the target must succeed on a Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken." },
        { name: "Unearthly Howl", cost: 2, description: "Each creature within 60 feet that can hear the creature must succeed on a Wisdom saving throw or become frightened until the end of the creature's next turn." },
        { name: "Tendril", cost: 1, description: "Makes one tendril attack." },
        { name: "Psychic Blast", cost: 2, description: "Each creature within 30 feet must succeed on an Intelligence saving throw or take psychic damage." },
        { name: "Consume Magic", cost: 2, description: "Targets one creature within 60 feet that is concentrating on a spell. The target must succeed on a Constitution saving throw or lose concentration." }
    ];
    
    return templates.map((t, i) => `
        <div class="preset-action-item" onclick="addPresetLegendaryAction(${i})">
            <strong>${t.name}</strong> <span class="cost-badge">${t.cost} action${t.cost > 1 ? 's' : ''}</span>
            <p>${t.description}</p>
        </div>
    `).join('');
}

// Switch between preset and custom tabs
function switchLegendaryTab(tab) {
    const presetTab = document.getElementById('legendaryPresetTab');
    const customTab = document.getElementById('legendaryCustomTab');
    const tabs = document.querySelectorAll('.modal-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'preset') {
        presetTab.style.display = 'block';
        customTab.style.display = 'none';
        tabs[0].classList.add('active');
    } else {
        presetTab.style.display = 'none';
        customTab.style.display = 'block';
        tabs[1].classList.add('active');
    }
}

// Add preset legendary action
function addPresetLegendaryAction(index) {
    const templates = [
        { name: "Detect", cost: 1, description: "Makes a Wisdom (Perception) check." },
        { name: "Tail Attack", cost: 1, description: "Makes a tail attack." },
        { name: "Wing Attack", cost: 2, description: "Beats its wings. Each creature within 15 feet must succeed on a Dexterity saving throw or take bludgeoning damage and be knocked prone. The creature can then fly up to half its flying speed." },
        { name: "Move", cost: 1, description: "Moves up to half its speed without provoking opportunity attacks." },
        { name: "Attack", cost: 2, description: "Makes one weapon attack." },
        { name: "Cast a Spell", cost: 3, description: "Casts a spell from its list of spells, using a spell slot as normal." },
        { name: "Claw Attack", cost: 1, description: "Makes one claw attack." },
        { name: "Bite Attack", cost: 2, description: "Makes one bite attack." },
        { name: "Frightening Presence", cost: 1, description: "Uses Frightful Presence." },
        { name: "Teleport", cost: 2, description: "Magically teleports up to 60 feet to an unoccupied space it can see." },
        { name: "Command Ally", cost: 1, description: "One ally within 30 feet that can hear the creature can use its reaction to move up to its speed or make one weapon attack." },
        { name: "Eye Ray", cost: 2, description: "Uses one random eye ray." },
        { name: "Disrupt Life", cost: 3, description: "Each non-undead creature within 20 feet must make a Constitution saving throw, taking necrotic damage on a failed save, or half as much on a successful one." },
        { name: "Energy Drain", cost: 2, description: "Melee Spell Attack against one creature. On hit, deals necrotic damage and the target must succeed on a Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken." },
        { name: "Unearthly Howl", cost: 2, description: "Each creature within 60 feet that can hear the creature must succeed on a Wisdom saving throw or become frightened until the end of the creature's next turn." },
        { name: "Tendril", cost: 1, description: "Makes one tendril attack." },
        { name: "Psychic Blast", cost: 2, description: "Each creature within 30 feet must succeed on an Intelligence saving throw or take psychic damage." },
        { name: "Consume Magic", cost: 2, description: "Targets one creature within 60 feet that is concentrating on a spell. The target must succeed on a Constitution saving throw or lose concentration." }
    ];
    
    if (!currentMonster) return;
    
    const action = { ...templates[index] };
    
    if (!currentMonster.legendaryActions) {
        currentMonster.legendaryActions = { count: 3, actions: [] };
    }
    if (!currentMonster.legendaryActions.actions) {
        currentMonster.legendaryActions.actions = [];
    }
    
    currentMonster.legendaryActions.actions.push(action);
    currentMonster.isLegendary = true;
    
    closeLegendaryActionModal();
    displayMonster(currentMonster);
}

// Add custom legendary action
function addCustomLegendaryAction() {
    const name = document.getElementById('customLegendaryName').value.trim();
    const cost = parseInt(document.getElementById('customLegendaryCost').value);
    const description = document.getElementById('customLegendaryDesc').value.trim();
    
    if (!name || !description) {
        alert('Please fill in both name and description.');
        return;
    }
    
    if (!currentMonster) return;
    
    if (!currentMonster.legendaryActions) {
        currentMonster.legendaryActions = { count: 3, actions: [] };
    }
    if (!currentMonster.legendaryActions.actions) {
        currentMonster.legendaryActions.actions = [];
    }
    
    currentMonster.legendaryActions.actions.push({ name, cost, description });
    currentMonster.isLegendary = true;
    
    // Clear form
    document.getElementById('customLegendaryName').value = '';
    document.getElementById('customLegendaryDesc').value = '';
    document.getElementById('customLegendaryCost').value = '1';
    
    closeLegendaryActionModal();
    displayMonster(currentMonster);
}

// Remove legendary action
function removeLegendaryAction(index) {
    if (!currentMonster || !currentMonster.legendaryActions || !currentMonster.legendaryActions.actions) return;
    
    currentMonster.legendaryActions.actions.splice(index, 1);
    
    // If no actions left, remove legendary status
    if (currentMonster.legendaryActions.actions.length === 0) {
        currentMonster.isLegendary = false;
        currentMonster.legendaryActions = null;
    }
    
    displayMonster(currentMonster);
}

// Close legendary action modal
function closeLegendaryActionModal() {
    const modal = document.getElementById('legendaryActionModal');
    if (modal) {
        modal.style.display = 'none';
    }
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

// Get size options for dropdown
function getSizeOptions() {
    return [
        { value: 'tiny', label: 'Tiny' },
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
        { value: 'huge', label: 'Huge' },
        { value: 'gargantuan', label: 'Gargantuan' }
    ];
}

// Get type options for dropdown
function getTypeOptions() {
    return [
        { value: 'aberration', label: 'Aberration' },
        { value: 'beast', label: 'Beast' },
        { value: 'celestial', label: 'Celestial' },
        { value: 'construct', label: 'Construct' },
        { value: 'dragon', label: 'Dragon' },
        { value: 'elemental', label: 'Elemental' },
        { value: 'fey', label: 'Fey' },
        { value: 'fiend', label: 'Fiend' },
        { value: 'giant', label: 'Giant' },
        { value: 'humanoid', label: 'Humanoid' },
        { value: 'monstrosity', label: 'Monstrosity' },
        { value: 'ooze', label: 'Ooze' },
        { value: 'plant', label: 'Plant' },
        { value: 'undead', label: 'Undead' }
    ];
}

// Get alignment options for dropdown
function getAlignmentOptions() {
    return [
        { value: 'lawful good', label: 'Lawful Good' },
        { value: 'neutral good', label: 'Neutral Good' },
        { value: 'chaotic good', label: 'Chaotic Good' },
        { value: 'lawful neutral', label: 'Lawful Neutral' },
        { value: 'neutral', label: 'Neutral' },
        { value: 'chaotic neutral', label: 'Chaotic Neutral' },
        { value: 'lawful evil', label: 'Lawful Evil' },
        { value: 'neutral evil', label: 'Neutral Evil' },
        { value: 'chaotic evil', label: 'Chaotic Evil' },
        { value: 'unaligned', label: 'Unaligned' },
        { value: 'any alignment', label: 'Any Alignment' }
    ];
}

// Edit text field (Name)
function editMonsterTextField(field, event) {
    if (event) event.stopPropagation();
    if (isEditing || !currentMonster) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const currentValue = currentMonster[field] || '';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'inline-edit-input';
    input.value = currentValue;
    
    element.innerHTML = '';
    element.appendChild(input);
    element.classList.remove('editable');
    
    setTimeout(() => {
        input.focus();
        input.select();
    }, 10);
    
    let saved = false;
    const saveEdit = () => {
        if (saved) return;
        saved = true;
        const newValue = input.value.trim();
        if (newValue && newValue !== currentValue) {
            currentMonster[field] = newValue;
        }
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    setTimeout(() => {
        input.addEventListener('blur', saveEdit);
    }, 100);
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEdit();
        } else if (e.key === 'Escape') {
            saved = true;
            isEditing = false;
            displayMonster(currentMonster);
        }
    });
}

// Edit select field (Size, Type, Alignment)
function editMonsterSelectField(field, options, event) {
    if (event) event.stopPropagation();
    if (isEditing || !currentMonster) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const currentValue = currentMonster[field] || '';
    
    const select = document.createElement('select');
    select.className = 'inline-edit-select';
    
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.value === currentValue || opt.value === currentValue.toLowerCase()) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    
    element.innerHTML = '';
    element.appendChild(select);
    element.classList.remove('editable');
    
    setTimeout(() => {
        select.focus();
    }, 10);
    
    let saved = false;
    const saveEdit = () => {
        if (saved) return;
        saved = true;
        const newValue = select.value;
        if (newValue !== currentValue && newValue !== currentValue.toLowerCase()) {
            currentMonster[field] = newValue;
        }
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    setTimeout(() => {
        select.addEventListener('blur', saveEdit);
    }, 100);
    
    select.addEventListener('change', () => {
        saveEdit();
    });
    
    select.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEdit();
        } else if (e.key === 'Escape') {
            saved = true;
            isEditing = false;
            displayMonster(currentMonster);
        }
    });
}

// Edit textarea field (Description)
function editMonsterTextareaField(field, event) {
    if (event) event.stopPropagation();
    if (isEditing || !currentMonster) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const currentValue = currentMonster[field] || '';
    
    const textarea = document.createElement('textarea');
    textarea.className = 'inline-edit-textarea';
    textarea.value = currentValue;
    textarea.rows = 4;
    
    element.innerHTML = '';
    element.appendChild(textarea);
    element.classList.remove('editable');
    
    setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }, 10);
    
    let saved = false;
    const saveEdit = () => {
        if (saved) return;
        saved = true;
        const newValue = textarea.value.trim();
        if (newValue !== currentValue) {
            currentMonster[field] = newValue;
        }
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    setTimeout(() => {
        textarea.addEventListener('blur', saveEdit);
    }, 100);
    
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            saved = true;
            isEditing = false;
            displayMonster(currentMonster);
        }
        // Allow Enter for newlines in textarea - use Escape to cancel or click away to save
    });
}

// Edit number field (AC, HP)
function editMonsterNumberField(field, event) {
    if (event) event.stopPropagation();
    if (isEditing || !currentMonster) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const currentValue = currentMonster[field] || 0;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'inline-edit-input inline-edit-number';
    input.value = currentValue;
    input.min = 1;
    input.max = field === 'ac' ? 30 : 9999;
    
    element.innerHTML = '';
    element.appendChild(input);
    element.classList.remove('editable');
    
    setTimeout(() => {
        input.focus();
        input.select();
    }, 10);
    
    let saved = false;
    const saveEdit = () => {
        if (saved) return;
        saved = true;
        const newValue = parseInt(input.value, 10);
        if (!isNaN(newValue) && newValue > 0 && newValue !== currentValue) {
            currentMonster[field] = newValue;
        }
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    setTimeout(() => {
        input.addEventListener('blur', saveEdit);
    }, 100);
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEdit();
        } else if (e.key === 'Escape') {
            saved = true;
            isEditing = false;
            displayMonster(currentMonster);
        }
    });
}

// Edit ability score
function editMonsterAbilityScore(ability, event) {
    if (event) event.stopPropagation();
    if (isEditing || !currentMonster) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-ability-${ability}`);
    if (!element) { isEditing = false; return; }
    
    const currentValue = currentMonster.abilityScores[ability] || 10;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'inline-edit-input inline-edit-number';
    input.value = currentValue;
    input.min = 1;
    input.max = 30;
    
    element.innerHTML = '';
    element.appendChild(input);
    element.classList.remove('editable');
    
    setTimeout(() => {
        input.focus();
        input.select();
    }, 10);
    
    let saved = false;
    const saveEdit = () => {
        if (saved) return;
        saved = true;
        const newValue = parseInt(input.value, 10);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 30 && newValue !== currentValue) {
            currentMonster.abilityScores[ability] = newValue;
            // Recalculate modifier
            currentMonster.abilityModifiers[ability] = Math.floor((newValue - 10) / 2);
        }
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    setTimeout(() => {
        input.addEventListener('blur', saveEdit);
    }, 100);
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEdit();
        } else if (e.key === 'Escape') {
            saved = true;
            isEditing = false;
            displayMonster(currentMonster);
        }
    });
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
    // Start with strong D&D identifier - models trained on D&D art will recognize monster names
    let prompt = `D&D 5e ${m.name}, Dungeons and Dragons monster.`;
    
    // Customize subject word based on type to avoid biasing the AI
    const isHumanoid = m.type === 'humanoid';
    const isElemental = m.type === 'elemental';
    const isOoze = m.type === 'ooze';
    
    let subjectWord = 'creature';
    if (isHumanoid) subjectWord = 'character';
    else if (isElemental) subjectWord = 'being';
    else if (isOoze) subjectWord = 'entity';
    
    // For elementals, don't say "elemental creature" - say "elemental force" or similar
    let typeDesc = m.type;
    if (isElemental) typeDesc = 'elemental force';
    if (isOoze) typeDesc = 'amorphous ooze';
    
    prompt += ` ${m.size} ${typeDesc} ${subjectWord}.`;
    
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
            'elemental': 'Living natural force taking vague humanoid shape - NOT a creature with a face or body, just raw elemental energy (wind, fire, water, or earth) in loose form. No animal features, no dragon features.',
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
// Track if we've set a custom prompt for this monster
let lastPromptMonsterName = null;

function showPortraitPrompt() {
    if (!currentMonster) return;
    
    const textarea = document.getElementById('portraitPromptText');
    
    // Only auto-fill prompt if:
    // 1. Textarea is empty, OR
    // 2. We switched to a different monster
    if (!textarea.value.trim() || lastPromptMonsterName !== currentMonster.name) {
        const prompt = buildMonsterPortraitPrompt(currentMonster);
        textarea.value = prompt;
        lastPromptMonsterName = currentMonster.name;
    }
    
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

// Trigger file upload dialog
function triggerImageUpload() {
    document.getElementById('imageUploadInput').click();
}

// Handle uploaded image
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate it's an image
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }
    
    // Read and display the image
    const reader = new FileReader();
    reader.onload = function(e) {
        const placeholder = document.getElementById('portraitPlaceholder');
        const loading = document.getElementById('portraitLoading');
        const image = document.getElementById('portraitImage');
        
        if (placeholder) placeholder.style.display = 'none';
        if (loading) loading.style.display = 'none';
        if (image) {
            image.src = e.target.result; // Base64 data URL
            image.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
    
    // Reset the input so the same file can be selected again
    event.target.value = '';
}

// Load official art from 5e.tools
function loadOfficialArt() {
    if (!currentMonster || !currentMonster.source) return;
    
    // Map source names to 5e.tools source codes
    const sourceMap = {
        'MM': 'MM',
        'Monster Manual': 'MM',
        'VGtM': 'VGM',
        "Volo's Guide to Monsters": 'VGM',
        'MToF': 'MTF',
        "Mordenkainen's Tome of Foes": 'MTF',
        'XGtE': 'XGE',
        'TCoE': 'TCE',
        'FToD': 'FTD',
        'MotM': 'MPMM',
        'XMM': 'XMM',
        '2024 Monster Manual': 'XMM',
        'Basic Rules': 'MM'
    };
    
    const source = sourceMap[currentMonster.source] || currentMonster.source;
    
    // Normalize monster name for 5e.tools image URLs
    // 5e.tools often uses simplified names (e.g., "Green Dragon" instead of "Adult Green Dragon")
    let monsterName = currentMonster.name;
    
    // Remove age prefixes from dragons and other creatures
    const agePrefixes = ['Adult ', 'Young ', 'Ancient ', 'Wyrmling ', 'Elder ', 'Greater ', 'Lesser '];
    for (const prefix of agePrefixes) {
        if (monsterName.startsWith(prefix)) {
            // For dragons, remove the prefix
            if (monsterName.includes('Dragon') || monsterName.includes('Dracolich')) {
                monsterName = monsterName.substring(prefix.length);
                break;
            }
        }
    }
    
    // Build list of sources to try (primary source first, then fallbacks)
    const sourcesToTry = [source];
    // Add MM/XMM fallbacks - try both Monster Manual versions
    if (source === 'MM') {
        sourcesToTry.push('XMM');
    } else if (source === 'XMM') {
        sourcesToTry.push('MM');
    } else {
        // For other sources, also try both MM versions as fallback
        sourcesToTry.push('MM', 'XMM');
    }
    
    const encodedName = encodeURIComponent(monsterName);
    
    // Show loading state
    const placeholder = document.getElementById('portraitPlaceholder');
    const loading = document.getElementById('portraitLoading');
    const image = document.getElementById('portraitImage');
    
    if (placeholder) placeholder.style.display = 'none';
    if (loading) {
        loading.style.display = 'flex';
        loading.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Loading official art...</span>`;
    }
    if (image) image.style.display = 'none';
    
    // Try each source in order until one works
    let currentIndex = 0;
    
    function tryNextSource() {
        if (currentIndex >= sourcesToTry.length) {
            // All sources exhausted, show error
            if (loading) loading.style.display = 'none';
            if (placeholder) {
                placeholder.style.display = 'flex';
                placeholder.innerHTML = `
                    <i class="fa-solid fa-image-slash" style="font-size: 2em; color: #6c757d;"></i>
                    <span style="text-align: center;">No official art found for this monster.<br>Try generating one instead!</span>
                `;
            }
            return;
        }
        
        const trySource = sourcesToTry[currentIndex];
        const imageUrl = `https://5e.tools/img/bestiary/${trySource}/${encodedName}.webp`;
        
        const testImage = new Image();
        testImage.onload = function() {
            if (image) {
                image.src = imageUrl;
                image.style.display = 'block';
            }
            if (loading) loading.style.display = 'none';
        };
        testImage.onerror = function() {
            // Try next source
            currentIndex++;
            tryNextSource();
        };
        testImage.src = imageUrl;
    }
    
    tryNextSource();
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

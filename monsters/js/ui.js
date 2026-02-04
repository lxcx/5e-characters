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
                <p><strong>Senses</strong> <span class="editable multi-edit" id="editable-senses" onclick="editMonsterMultiField('senses', getSenseOptions(), event)">${monster.senses && monster.senses.length > 0 ? monster.senses.join(', ') : 'passive Perception ' + (10 + (monster.skills?.perception || monster.abilityModifiers?.wis || 0))}</span></p>
                <p><strong>Languages</strong> <span class="editable multi-edit" id="editable-languages" onclick="editMonsterMultiField('languages', getLanguageOptions(), event)">${monster.languages || '—'}</span></p>
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
    
    // Always show damage resistances (editable)
    const resistances = monster.damageResistances && monster.damageResistances.length > 0 
        ? monster.damageResistances.join(', ') 
        : '—';
    html += `<p><strong>Damage Resistances</strong> <span class="editable multi-edit" id="editable-damageResistances" onclick="editMonsterMultiField('damageResistances', getDamageTypeOptions(), event)">${resistances}</span></p>`;
    
    // Always show damage immunities (editable)
    const immunities = monster.damageImmunities && monster.damageImmunities.length > 0 
        ? monster.damageImmunities.join(', ') 
        : '—';
    html += `<p><strong>Damage Immunities</strong> <span class="editable multi-edit" id="editable-damageImmunities" onclick="editMonsterMultiField('damageImmunities', getDamageTypeOptions(), event)">${immunities}</span></p>`;
    
    // Always show condition immunities (editable)
    const conditions = monster.conditionImmunities && monster.conditionImmunities.length > 0 
        ? monster.conditionImmunities.join(', ') 
        : '—';
    html += `<p><strong>Condition Immunities</strong> <span class="editable multi-edit" id="editable-conditionImmunities" onclick="editMonsterMultiField('conditionImmunities', getConditionOptions(), event)">${conditions}</span></p>`;
    
    return html;
}

// Render traits
function renderTraits(monster) {
    const hasTraits = monster.traits && monster.traits.length > 0;
    
    let traitsHtml = '';
    if (hasTraits) {
        traitsHtml = monster.traits.map((trait, index) => `
            <div class="trait-item">
                <p>
                    <strong>${trait.name}.</strong> ${trait.description
                        .replace('{range}', trait.defaultRange || '60')
                        .replace('{amount}', trait.defaultAmount || '10')
                        .replace('{dice}', trait.defaultDice || '2d6')
                        .replace('{dc}', 8 + monster.proficiencyBonus + (monster.abilityModifiers?.str || 0))
                        .replace('{threshold}', trait.defaultThreshold || '14')
                        .replace('{distance}', trait.defaultDistance || '20')
                        .replace('{height}', trait.defaultHeight || '15')
                        .replace('{attack}', trait.defaultAttack || 'melee')
                        .replace('{senses}', trait.defaultSenses || 'smell')
                        .replace('{object}', trait.defaultObject || 'a natural object')
                        .replace('{duration}', trait.defaultDuration || '15')
                        .replace('{level}', trait.defaultLevel || '6')
                        .replace('{forms}', trait.defaultForms || 'another form')
                        .replace('{ability}', trait.defaultAbility || 'Intelligence')
                        .replace('{types}', trait.defaultTypes || 'a damage type')
                        .replace('{conditions}', trait.defaultConditions || 'a condition')
                    }
                    <button class="remove-trait-btn" onclick="removeTrait(${index})" title="Remove this trait">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </p>
            </div>
        `).join('');
    }
    
    return `
        <div class="traits-section">
            <h3 class="section-title"><i class="fa-solid fa-star"></i> Traits</h3>
            ${traitsHtml}
            <div class="traits-controls">
                <button class="add-trait-btn" onclick="openTraitModal()">
                    <i class="fa-solid fa-plus"></i> Add Trait
                </button>
            </div>
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
    
    // Show modal using class (CSS uses opacity/visibility)
    modal.style.display = 'flex';
    modal.classList.add('active');
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
    const modal = document.getElementById('legendaryActionModal');
    const tabs = modal ? modal.querySelectorAll('.modal-tab') : [];
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'preset') {
        presetTab.style.display = 'block';
        customTab.style.display = 'none';
        if (tabs[0]) tabs[0].classList.add('active');
    } else {
        presetTab.style.display = 'none';
        customTab.style.display = 'block';
        if (tabs[1]) tabs[1].classList.add('active');
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
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
}

// ==================== TRAIT MODAL FUNCTIONS ====================

// Open modal to add trait
function openTraitModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('traitModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'traitModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content trait-modal">
                <h3><i class="fa-solid fa-star"></i> Add Trait</h3>
                
                <div class="modal-tabs">
                    <button class="modal-tab active" onclick="switchTraitTab('preset')">Select Preset</button>
                    <button class="modal-tab" onclick="switchTraitTab('custom')">Custom Trait</button>
                </div>
                
                <div id="traitPresetTab" class="trait-tab-content">
                    <div class="trait-category-filter">
                        <label>Filter by Category:</label>
                        <select id="traitCategoryFilter" onchange="filterTraitsByCategory()">
                            <option value="all">All Categories</option>
                            <option value="defensive">Defensive</option>
                            <option value="offensive">Offensive</option>
                            <option value="movement">Movement</option>
                            <option value="senses">Senses</option>
                            <option value="utility">Utility</option>
                        </select>
                    </div>
                    <div class="preset-traits-list" id="presetTraitsList">
                        ${getTraitOptions()}
                    </div>
                </div>
                
                <div id="traitCustomTab" class="trait-tab-content" style="display: none;">
                    <div class="form-group">
                        <label>Trait Name</label>
                        <input type="text" id="customTraitName" placeholder="e.g., Keen Hearing">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea id="customTraitDesc" rows="4" placeholder="Describe what the trait does..."></textarea>
                    </div>
                    <button class="modal-btn primary" onclick="addCustomTrait()">
                        <i class="fa-solid fa-plus"></i> Add Custom Trait
                    </button>
                </div>
                
                <button class="modal-close-btn" onclick="closeTraitModal()">
                    <i class="fa-solid fa-times"></i> Close
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Show modal using class (CSS uses opacity/visibility)
    modal.style.display = 'flex';
    modal.classList.add('active');
}

// Get preset trait options HTML
function getTraitOptions(category = 'all') {
    const traits = [
        // Defensive
        { id: 'magic-resistance', name: 'Magic Resistance', category: 'defensive', description: 'Has advantage on saving throws against spells and other magical effects.' },
        { id: 'legendary-resistance', name: 'Legendary Resistance (3/Day)', category: 'defensive', description: 'If the creature fails a saving throw, it can choose to succeed instead.' },
        { id: 'evasion', name: 'Evasion', category: 'defensive', description: 'If subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.' },
        { id: 'regeneration', name: 'Regeneration', category: 'defensive', description: 'Regains 10 hit points at the start of its turn.' },
        { id: 'sunlight-sensitivity', name: 'Sunlight Sensitivity', category: 'defensive', description: 'While in sunlight, has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.' },
        { id: 'limited-magic-immunity', name: 'Limited Magic Immunity', category: 'defensive', description: "Can't be affected or detected by spells of 6th level or lower unless it wishes to be." },
        
        // Offensive
        { id: 'pack-tactics', name: 'Pack Tactics', category: 'offensive', description: "Has advantage on attack rolls against a creature if at least one of the monster's allies is within 5 feet of the creature and the ally isn't incapacitated." },
        { id: 'sneak-attack', name: 'Sneak Attack (2d6)', category: 'offensive', description: "Once per turn, deals an extra 2d6 damage when it hits a target with a weapon attack and has advantage, or when the target is within 5 feet of an ally that isn't incapacitated and the monster doesn't have disadvantage." },
        { id: 'pounce', name: 'Pounce', category: 'offensive', description: 'If moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, the target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, can make one bite attack against it as a bonus action.' },
        { id: 'reckless', name: 'Reckless', category: 'offensive', description: 'At the start of its turn, can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.' },
        { id: 'aggressive', name: 'Aggressive', category: 'offensive', description: 'As a bonus action, can move up to its speed toward a hostile creature that it can see.' },
        { id: 'charge', name: 'Charge', category: 'offensive', description: 'If moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 2d6 damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.' },
        { id: 'frightful-presence', name: 'Frightful Presence', category: 'offensive', description: "Each creature of the monster's choice that is within 60 feet and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute." },
        { id: 'rampage', name: 'Rampage', category: 'offensive', description: 'When reduces a creature to 0 hit points with a melee attack on its turn, can take a bonus action to move up to half its speed and make a bite attack.' },
        { id: 'blood-frenzy', name: 'Blood Frenzy', category: 'offensive', description: "Has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
        { id: 'surprise-attack', name: 'Surprise Attack (2d6)', category: 'offensive', description: 'If surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 2d6 damage from the attack.' },
        { id: 'relentless', name: 'Relentless', category: 'offensive', description: 'If takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead. (Recharges after a Short or Long Rest)' },
        
        // Movement
        { id: 'amphibious', name: 'Amphibious', category: 'movement', description: 'Can breathe air and water.' },
        { id: 'spider-climb', name: 'Spider Climb', category: 'movement', description: 'Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.' },
        { id: 'flyby', name: 'Flyby', category: 'movement', description: "Doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
        { id: 'incorporeal-movement', name: 'Incorporeal Movement', category: 'movement', description: 'Can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.' },
        { id: 'standing-leap', name: 'Standing Leap', category: 'movement', description: 'Its long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.' },
        
        // Senses
        { id: 'darkvision-trait', name: 'Superior Darkvision', category: 'senses', description: 'Can see in dim light within 120 feet as if it were bright light, and in darkness as if it were dim light.' },
        { id: 'blindsight-trait', name: 'Blindsight', category: 'senses', description: 'Can perceive its surroundings within 60 feet without relying on sight.' },
        { id: 'tremorsense-trait', name: 'Tremorsense', category: 'senses', description: 'Can detect and pinpoint the origin of vibrations within 60 feet, provided the monster and the source are in contact with the same ground or substance.' },
        { id: 'truesight-trait', name: 'Truesight', category: 'senses', description: 'Can see in normal and magical darkness, see invisible creatures, automatically detect visual illusions, perceive original form of shapechangers, and see into the Ethereal Plane within 120 feet.' },
        { id: 'keen-hearing', name: 'Keen Hearing', category: 'senses', description: 'Has advantage on Wisdom (Perception) checks that rely on hearing.' },
        { id: 'keen-sight', name: 'Keen Sight', category: 'senses', description: 'Has advantage on Wisdom (Perception) checks that rely on sight.' },
        { id: 'keen-smell', name: 'Keen Smell', category: 'senses', description: 'Has advantage on Wisdom (Perception) checks that rely on smell.' },
        { id: 'keen-hearing-smell', name: 'Keen Hearing and Smell', category: 'senses', description: 'Has advantage on Wisdom (Perception) checks that rely on hearing or smell.' },
        
        // Utility
        { id: 'mimicry', name: 'Mimicry', category: 'utility', description: 'Can mimic sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.' },
        { id: 'shapechanger', name: 'Shapechanger', category: 'utility', description: 'Can use its action to polymorph into another form, or back into its true form. Its statistics are the same in each form.' },
        { id: 'telepathy', name: 'Telepathy', category: 'utility', description: 'Can magically communicate simple ideas, emotions, and images telepathically with any creature within 120 feet that can understand a language.' },
        { id: 'false-appearance', name: 'False Appearance', category: 'utility', description: 'While motionless, is indistinguishable from a natural object or ordinary creature.' },
        { id: 'ambusher', name: 'Ambusher', category: 'utility', description: 'Has advantage on attack rolls against any creature it has surprised.' },
        { id: 'hold-breath', name: 'Hold Breath', category: 'utility', description: 'Can hold its breath for 15 minutes.' },
        { id: 'labyrinthine-recall', name: 'Labyrinthine Recall', category: 'utility', description: 'Can perfectly recall any path it has traveled.' },
        { id: 'shadow-stealth', name: 'Shadow Stealth', category: 'utility', description: 'While in dim light or darkness, can take the Hide action as a bonus action.' },
        { id: 'web-sense', name: 'Web Sense', category: 'utility', description: 'While in contact with a web, knows the exact location of any other creature in contact with the same web.' },
        { id: 'web-walker', name: 'Web Walker', category: 'utility', description: 'Ignores movement restrictions caused by webbing.' }
    ];
    
    const filteredTraits = category === 'all' ? traits : traits.filter(t => t.category === category);
    
    return filteredTraits.map((trait, index) => `
        <div class="preset-trait-item" data-category="${trait.category}" onclick="addPresetTrait('${trait.id}')">
            <strong>${trait.name}</strong>
            <span class="trait-category-badge ${trait.category}">${capitalize(trait.category)}</span>
            <p>${trait.description}</p>
        </div>
    `).join('');
}

// Filter traits by category
function filterTraitsByCategory() {
    const category = document.getElementById('traitCategoryFilter').value;
    const listContainer = document.getElementById('presetTraitsList');
    if (listContainer) {
        listContainer.innerHTML = getTraitOptions(category);
    }
}

// Switch between preset and custom tabs
function switchTraitTab(tab) {
    const presetTab = document.getElementById('traitPresetTab');
    const customTab = document.getElementById('traitCustomTab');
    const tabs = document.querySelectorAll('#traitModal .modal-tab');
    
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

// Add preset trait
function addPresetTrait(traitId) {
    if (!currentMonster) return;
    
    // Get trait data from preset list
    const presetTraits = {
        'magic-resistance': { name: 'Magic Resistance', description: 'Has advantage on saving throws against spells and other magical effects.' },
        'legendary-resistance': { name: 'Legendary Resistance (3/Day)', description: 'If the creature fails a saving throw, it can choose to succeed instead.' },
        'evasion': { name: 'Evasion', description: 'If subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.' },
        'regeneration': { name: 'Regeneration', description: 'Regains 10 hit points at the start of its turn.' },
        'sunlight-sensitivity': { name: 'Sunlight Sensitivity', description: 'While in sunlight, has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.' },
        'limited-magic-immunity': { name: 'Limited Magic Immunity', description: "Can't be affected or detected by spells of 6th level or lower unless it wishes to be." },
        'pack-tactics': { name: 'Pack Tactics', description: "Has advantage on attack rolls against a creature if at least one of the monster's allies is within 5 feet of the creature and the ally isn't incapacitated." },
        'sneak-attack': { name: 'Sneak Attack (2d6)', description: "Once per turn, deals an extra 2d6 damage when it hits a target with a weapon attack and has advantage, or when the target is within 5 feet of an ally that isn't incapacitated and the monster doesn't have disadvantage." },
        'pounce': { name: 'Pounce', description: 'If moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, the target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, can make one bite attack against it as a bonus action.' },
        'reckless': { name: 'Reckless', description: 'At the start of its turn, can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.' },
        'aggressive': { name: 'Aggressive', description: 'As a bonus action, can move up to its speed toward a hostile creature that it can see.' },
        'charge': { name: 'Charge', description: 'If moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 2d6 damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.' },
        'frightful-presence': { name: 'Frightful Presence', description: "Each creature of the monster's choice that is within 60 feet and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute." },
        'rampage': { name: 'Rampage', description: 'When reduces a creature to 0 hit points with a melee attack on its turn, can take a bonus action to move up to half its speed and make a bite attack.' },
        'blood-frenzy': { name: 'Blood Frenzy', description: "Has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
        'surprise-attack': { name: 'Surprise Attack (2d6)', description: 'If surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 2d6 damage from the attack.' },
        'relentless': { name: 'Relentless', description: 'If takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead. (Recharges after a Short or Long Rest)' },
        'amphibious': { name: 'Amphibious', description: 'Can breathe air and water.' },
        'spider-climb': { name: 'Spider Climb', description: 'Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.' },
        'flyby': { name: 'Flyby', description: "Doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
        'incorporeal-movement': { name: 'Incorporeal Movement', description: 'Can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.' },
        'standing-leap': { name: 'Standing Leap', description: 'Its long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.' },
        'darkvision-trait': { name: 'Superior Darkvision', description: 'Can see in dim light within 120 feet as if it were bright light, and in darkness as if it were dim light.' },
        'blindsight-trait': { name: 'Blindsight', description: 'Can perceive its surroundings within 60 feet without relying on sight.' },
        'tremorsense-trait': { name: 'Tremorsense', description: 'Can detect and pinpoint the origin of vibrations within 60 feet, provided the monster and the source are in contact with the same ground or substance.' },
        'truesight-trait': { name: 'Truesight', description: 'Can see in normal and magical darkness, see invisible creatures, automatically detect visual illusions, perceive original form of shapechangers, and see into the Ethereal Plane within 120 feet.' },
        'keen-hearing': { name: 'Keen Hearing', description: 'Has advantage on Wisdom (Perception) checks that rely on hearing.' },
        'keen-sight': { name: 'Keen Sight', description: 'Has advantage on Wisdom (Perception) checks that rely on sight.' },
        'keen-smell': { name: 'Keen Smell', description: 'Has advantage on Wisdom (Perception) checks that rely on smell.' },
        'keen-hearing-smell': { name: 'Keen Hearing and Smell', description: 'Has advantage on Wisdom (Perception) checks that rely on hearing or smell.' },
        'mimicry': { name: 'Mimicry', description: 'Can mimic sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.' },
        'shapechanger': { name: 'Shapechanger', description: 'Can use its action to polymorph into another form, or back into its true form. Its statistics are the same in each form.' },
        'telepathy': { name: 'Telepathy', description: 'Can magically communicate simple ideas, emotions, and images telepathically with any creature within 120 feet that can understand a language.' },
        'false-appearance': { name: 'False Appearance', description: 'While motionless, is indistinguishable from a natural object or ordinary creature.' },
        'ambusher': { name: 'Ambusher', description: 'Has advantage on attack rolls against any creature it has surprised.' },
        'hold-breath': { name: 'Hold Breath', description: 'Can hold its breath for 15 minutes.' },
        'labyrinthine-recall': { name: 'Labyrinthine Recall', description: 'Can perfectly recall any path it has traveled.' },
        'shadow-stealth': { name: 'Shadow Stealth', description: 'While in dim light or darkness, can take the Hide action as a bonus action.' },
        'web-sense': { name: 'Web Sense', description: 'While in contact with a web, knows the exact location of any other creature in contact with the same web.' },
        'web-walker': { name: 'Web Walker', description: 'Ignores movement restrictions caused by webbing.' }
    };
    
    const trait = presetTraits[traitId];
    if (!trait) return;
    
    // Initialize traits array if it doesn't exist
    if (!currentMonster.traits) {
        currentMonster.traits = [];
    }
    
    // Check if trait already exists
    if (currentMonster.traits.some(t => t.name === trait.name)) {
        alert('This trait has already been added.');
        return;
    }
    
    currentMonster.traits.push({
        id: traitId,
        name: trait.name,
        description: trait.description
    });
    
    closeTraitModal();
    displayMonster(currentMonster);
}

// Add custom trait
function addCustomTrait() {
    const name = document.getElementById('customTraitName').value.trim();
    const description = document.getElementById('customTraitDesc').value.trim();
    
    if (!name || !description) {
        alert('Please fill in both the name and description.');
        return;
    }
    
    if (!currentMonster) return;
    
    // Initialize traits array if it doesn't exist
    if (!currentMonster.traits) {
        currentMonster.traits = [];
    }
    
    currentMonster.traits.push({
        id: 'custom-' + Date.now(),
        name: name,
        description: description
    });
    
    // Clear inputs
    document.getElementById('customTraitName').value = '';
    document.getElementById('customTraitDesc').value = '';
    
    closeTraitModal();
    displayMonster(currentMonster);
}

// Remove trait
function removeTrait(index) {
    if (!currentMonster || !currentMonster.traits) return;
    
    currentMonster.traits.splice(index, 1);
    displayMonster(currentMonster);
}

// Close trait modal
function closeTraitModal() {
    const modal = document.getElementById('traitModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
}

// ==================== END TRAIT MODAL FUNCTIONS ====================

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

// Get damage type options for dropdown
function getDamageTypeOptions() {
    return [
        { value: 'acid', label: 'Acid' },
        { value: 'bludgeoning', label: 'Bludgeoning' },
        { value: 'cold', label: 'Cold' },
        { value: 'fire', label: 'Fire' },
        { value: 'force', label: 'Force' },
        { value: 'lightning', label: 'Lightning' },
        { value: 'necrotic', label: 'Necrotic' },
        { value: 'piercing', label: 'Piercing' },
        { value: 'poison', label: 'Poison' },
        { value: 'psychic', label: 'Psychic' },
        { value: 'radiant', label: 'Radiant' },
        { value: 'slashing', label: 'Slashing' },
        { value: 'thunder', label: 'Thunder' },
        { value: 'bludgeoning, piercing, and slashing from nonmagical attacks', label: 'BPS (Nonmagical)' },
        { value: 'bludgeoning, piercing, and slashing from nonmagical attacks that aren\'t silvered', label: 'BPS (Non-Silvered)' },
        { value: 'bludgeoning, piercing, and slashing from nonmagical attacks that aren\'t adamantine', label: 'BPS (Non-Adamantine)' }
    ];
}

// Get condition options for dropdown
function getConditionOptions() {
    return [
        { value: 'blinded', label: 'Blinded' },
        { value: 'charmed', label: 'Charmed' },
        { value: 'deafened', label: 'Deafened' },
        { value: 'exhaustion', label: 'Exhaustion' },
        { value: 'frightened', label: 'Frightened' },
        { value: 'grappled', label: 'Grappled' },
        { value: 'incapacitated', label: 'Incapacitated' },
        { value: 'invisible', label: 'Invisible' },
        { value: 'paralyzed', label: 'Paralyzed' },
        { value: 'petrified', label: 'Petrified' },
        { value: 'poisoned', label: 'Poisoned' },
        { value: 'prone', label: 'Prone' },
        { value: 'restrained', label: 'Restrained' },
        { value: 'stunned', label: 'Stunned' },
        { value: 'unconscious', label: 'Unconscious' }
    ];
}

// Get sense options for dropdown
function getSenseOptions() {
    return [
        { value: 'blindsight 10 ft.', label: 'Blindsight 10 ft.' },
        { value: 'blindsight 30 ft.', label: 'Blindsight 30 ft.' },
        { value: 'blindsight 60 ft.', label: 'Blindsight 60 ft.' },
        { value: 'blindsight 120 ft.', label: 'Blindsight 120 ft.' },
        { value: 'blindsight 60 ft. (blind beyond this radius)', label: 'Blindsight 60 ft. (Blind Beyond)' },
        { value: 'darkvision 30 ft.', label: 'Darkvision 30 ft.' },
        { value: 'darkvision 60 ft.', label: 'Darkvision 60 ft.' },
        { value: 'darkvision 90 ft.', label: 'Darkvision 90 ft.' },
        { value: 'darkvision 120 ft.', label: 'Darkvision 120 ft.' },
        { value: 'tremorsense 30 ft.', label: 'Tremorsense 30 ft.' },
        { value: 'tremorsense 60 ft.', label: 'Tremorsense 60 ft.' },
        { value: 'truesight 30 ft.', label: 'Truesight 30 ft.' },
        { value: 'truesight 60 ft.', label: 'Truesight 60 ft.' },
        { value: 'truesight 120 ft.', label: 'Truesight 120 ft.' },
        { value: 'passive Perception 10', label: 'Passive Perception 10' },
        { value: 'passive Perception 12', label: 'Passive Perception 12' },
        { value: 'passive Perception 14', label: 'Passive Perception 14' },
        { value: 'passive Perception 16', label: 'Passive Perception 16' },
        { value: 'passive Perception 18', label: 'Passive Perception 18' },
        { value: 'passive Perception 20', label: 'Passive Perception 20' },
        { value: 'passive Perception 22', label: 'Passive Perception 22' },
        { value: 'passive Perception 25', label: 'Passive Perception 25' }
    ];
}

// Get language options for dropdown
function getLanguageOptions() {
    return [
        { value: 'Common', label: 'Common' },
        { value: 'Dwarvish', label: 'Dwarvish' },
        { value: 'Elvish', label: 'Elvish' },
        { value: 'Giant', label: 'Giant' },
        { value: 'Gnomish', label: 'Gnomish' },
        { value: 'Goblin', label: 'Goblin' },
        { value: 'Halfling', label: 'Halfling' },
        { value: 'Orc', label: 'Orc' },
        { value: 'Abyssal', label: 'Abyssal' },
        { value: 'Celestial', label: 'Celestial' },
        { value: 'Draconic', label: 'Draconic' },
        { value: 'Deep Speech', label: 'Deep Speech' },
        { value: 'Infernal', label: 'Infernal' },
        { value: 'Primordial', label: 'Primordial' },
        { value: 'Sylvan', label: 'Sylvan' },
        { value: 'Undercommon', label: 'Undercommon' },
        { value: 'Aquan', label: 'Aquan' },
        { value: 'Auran', label: 'Auran' },
        { value: 'Ignan', label: 'Ignan' },
        { value: 'Terran', label: 'Terran' },
        { value: 'telepathy 30 ft.', label: 'Telepathy 30 ft.' },
        { value: 'telepathy 60 ft.', label: 'Telepathy 60 ft.' },
        { value: 'telepathy 120 ft.', label: 'Telepathy 120 ft.' },
        { value: 'all', label: 'All Languages' },
        { value: 'the languages it knew in life', label: 'Languages Known in Life' },
        { value: '—', label: 'None' }
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

// Edit multi-select field (Damage Resistances, Immunities, Conditions, Senses, Languages)
function editMonsterMultiField(field, options, event) {
    if (event) event.stopPropagation();
    if (isEditing || !currentMonster) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    // Get current values (handle both array and string formats)
    let currentValues = [];
    if (field === 'languages') {
        // Languages is a string, split by comma
        const langValue = currentMonster[field] || '—';
        if (langValue && langValue !== '—') {
            currentValues = langValue.split(',').map(v => v.trim());
        }
    } else {
        // Arrays (senses, damageResistances, etc.)
        currentValues = currentMonster[field] || [];
    }
    
    // Create the multi-select container
    const container = document.createElement('div');
    container.className = 'multi-select-container';
    
    // Create checkboxes for each option
    const checkboxesHtml = options.map(opt => {
        const isChecked = currentValues.some(v => 
            v.toLowerCase() === opt.value.toLowerCase() || 
            v.toLowerCase().includes(opt.value.toLowerCase())
        );
        return `
            <label class="multi-select-option">
                <input type="checkbox" value="${opt.value}" ${isChecked ? 'checked' : ''}>
                <span>${opt.label}</span>
            </label>
        `;
    }).join('');
    
    container.innerHTML = `
        <div class="multi-select-options">${checkboxesHtml}</div>
        <div class="multi-select-buttons">
            <button type="button" class="multi-select-save">Save</button>
            <button type="button" class="multi-select-cancel">Cancel</button>
        </div>
    `;
    
    element.innerHTML = '';
    element.appendChild(container);
    element.classList.remove('editable');
    
    // Handle save
    const saveBtn = container.querySelector('.multi-select-save');
    const cancelBtn = container.querySelector('.multi-select-cancel');
    
    const saveEdit = () => {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
        const newValues = Array.from(checkboxes).map(cb => cb.value);
        
        if (field === 'languages') {
            // Languages is stored as a string
            currentMonster[field] = newValues.length > 0 ? newValues.join(', ') : '—';
        } else {
            // Arrays
            currentMonster[field] = newValues;
        }
        
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    const cancelEdit = () => {
        isEditing = false;
        displayMonster(currentMonster);
    };
    
    saveBtn.addEventListener('click', saveEdit);
    cancelBtn.addEventListener('click', cancelEdit);
    
    // Close on click outside
    setTimeout(() => {
        document.addEventListener('click', function closeOnOutsideClick(e) {
            if (!container.contains(e.target)) {
                document.removeEventListener('click', closeOnOutsideClick);
                if (isEditing) cancelEdit();
            }
        });
    }, 100);
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

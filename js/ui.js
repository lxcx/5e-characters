// D&D 5E NPC Generator - UI Functions (display, edit, modals)

let currentNPC = null;
const lockStates = {
    name: false,
    race: false,
    npcClass: false,
    occupation: false,
    age: false,
    gender: false,
    alignment: false,
    stats: false,
    skills: false,
    equipment: false,
    languages: false,
    backstory: false,
    spells: false,
    weapons: false,
    background: false,
    feats: false
};

function toggleLock(field) {
    lockStates[field] = !lockStates[field];
    updateLockButton(field);
    updateFormFieldState(field);
}

function updateLockButton(field) {
    const btn = document.getElementById(`lock-${field}`);
    if (btn) {
        btn.classList.toggle('locked', lockStates[field]);
        btn.innerHTML = lockStates[field] ? '<i class="fa-solid fa-lock"></i>' : '<i class="fa-solid fa-lock-open"></i>';
        btn.title = lockStates[field] ? 'Click to unlock' : 'Click to lock';
    }
}

function updateFormFieldState(field) {
    // Map NPC fields to form element IDs
    const fieldToFormId = {
        'race': 'race',
        'npcClass': 'npcClass',
        'occupation': 'occupation',
        'age': 'age',
        'gender': 'gender',
        'alignment': 'alignment'
    };

    const formId = fieldToFormId[field];
    if (formId) {
        const formGroup = document.getElementById(formId)?.closest('.form-group');
        if (formGroup) {
            formGroup.classList.toggle('disabled', lockStates[field]);
        }
    }
}

function updateAllFormStates() {
    ['race', 'npcClass', 'occupation', 'age', 'gender', 'alignment'].forEach(field => {
        updateFormFieldState(field);
    });
}

function regenerateNPC() {
    generateNPC();
}

function displayNPC(npc) {
    // Store NPC data globally
    currentNPC = npc;
    
    const resultDiv = document.getElementById('npcResult');
    const placeholder = document.getElementById('placeholder');
    const regenerateBtn = document.getElementById('regenerateBtn');

    placeholder.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    regenerateBtn.style.display = 'flex';

    // Format class name nicely (showing all classes with levels and subclasses)
    // Commoner is always level 0 and doesn't show a level number
    let className;
    if (npc.characterClasses && npc.characterClasses.length > 0) {
        className = npc.characterClasses.map(cc => {
            const name = cc.className === 'commoner' ? 'Commoner' : capitalize(cc.className);
            // Show level for adventurer classes, but not for commoner (which is level 0)
            let displayName = (cc.className !== 'commoner' && (cc.level > 1 || npc.characterClasses.length > 1)) 
                ? `${name} ${cc.level}` 
                : name;
            // Add subclass if present
            if (cc.subclass && subclasses[cc.className]) {
                const subclassData = subclasses[cc.className];
                const subclassOption = subclassData.options.find(o => o.id === cc.subclass);
                if (subclassOption) {
                    displayName += ` (${subclassOption.name})`;
                }
            }
            return displayName;
        }).join(' / ');
    } else {
        className = npc.npcClass === 'commoner' ? 'Commoner' : capitalize(npc.npcClass);
    }
    const occupationName = npc.occupation.replace(/_/g, ' ').split(' ').map(w => capitalize(w)).join(' ');

    // Helper to create lock button
    const lockBtn = (field) => `
        <button class="lock-btn ${lockStates[field] ? 'locked' : ''}" 
                id="lock-${field}" 
                onclick="toggleLock('${field}')"
                title="${lockStates[field] ? 'Click to unlock' : 'Click to lock'}">
            ${lockStates[field] ? '<i class="fa-solid fa-lock"></i>' : '<i class="fa-solid fa-lock-open"></i>'}
        </button>
    `;

    let html = `
        <div class="npc-card">
            <!-- Name Row -->
            <div class="npc-field-row" style="background: none; padding: 0; margin-bottom: 5px;">
                <div class="npc-name-section">
                    <div class="npc-name editable" id="editable-name" onclick="editTextField('name', '${npc.name.replace(/'/g, "\\'")}', event)">${npc.name}</div>
                </div>
                ${lockBtn('name')}
            </div>

            <!-- Race Row -->
            <div class="npc-field-row">
                <div class="npc-field-content">
                    <span class="npc-field-label">Race:</span>
                    <span class="npc-field-value editable" id="editable-race" onclick="editSelectField('race', '${npc.race}', getRaceOptions(), event)">${capitalize(npc.race)}</span>
                </div>
                ${lockBtn('race')}
            </div>

            <!-- Class Row -->
            <div class="npc-field-row">
                <div class="npc-field-content">
                    <span class="npc-field-label">Class:</span>
                    <span class="npc-field-value editable" id="editable-npcClass" onclick="editClassField(event)">${className}</span>
                    ${npc.totalLevel > 1 ? `<span class="level-badge">Level ${npc.totalLevel}</span>` : ''}
                </div>
                ${lockBtn('npcClass')}
            </div>

            ${npc.characterClasses?.some(cc => cc.className === 'commoner') ? `
            <!-- Occupation Row (for characters with Commoner class) -->
            <div class="npc-field-row">
                <div class="npc-field-content">
                    <span class="npc-field-label">Occupation:</span>
                    <span class="npc-field-value editable" id="editable-occupation" onclick="editSelectField('occupation', '${npc.occupation}', getOccupationOptions(), event)">${occupationName}</span>
                </div>
                ${lockBtn('occupation')}
            </div>
            ` : ''}

            <!-- Age Row -->
            <div class="npc-field-row">
                <div class="npc-field-content">
                    <span class="npc-field-label">Age:</span>
                    <span class="npc-field-value editable" id="editable-age" onclick="editAgeField(event)">${npc.age === 0 ? 'Newborn' : npc.age + ' years old'}</span>
                </div>
                ${lockBtn('age')}
            </div>

            <!-- Gender Row -->
            <div class="npc-field-row">
                <div class="npc-field-content">
                    <span class="npc-field-label">Gender:</span>
                    <span class="npc-field-value editable" id="editable-gender" onclick="editSelectField('gender', '${npc.gender}', getGenderOptions(), event)">${capitalize(npc.gender)}</span>
                </div>
                ${lockBtn('gender')}
            </div>

            <!-- Alignment Row -->
            <div class="npc-field-row">
                <div class="npc-field-content">
                    <span class="npc-field-label">Alignment:</span>
                    <span class="npc-field-value editable" id="editable-alignment" onclick="editSelectField('alignment', '${npc.alignment}', getAlignmentOptions(), event)">${capitalize(npc.alignment)}</span>
                </div>
                ${lockBtn('alignment')}
            </div>

            <!-- Ability Scores Section with Lock -->
            <div class="section-header">
                <div class="section-title" style="border-bottom: none; padding-bottom: 0;"><i class="fa-solid fa-chart-simple"></i> Ability Scores</div>
                ${lockBtn('stats')}
            </div>
            <small style="color: #6c757d; display: block; margin-bottom: 8px;">
                ${npc.ageCategory === 'infant' 
                    ? '<i class="fa-solid fa-baby"></i> Stats: Infant (1d4 each)'
                    : isPCMode() 
                        ? '<i class="fa-solid fa-list-ol"></i> Stats: Standard Array (15, 14, 13, 12, 10, 8)'
                        : npc.npcClass === 'commoner' && !npc.characterClasses?.some(c => c.className !== 'commoner')
                            ? '<i class="fa-solid fa-dice"></i> Stats: Commoner (4d4 drop lowest)'
                            : '<i class="fa-solid fa-dice"></i> Stats: Adventurer (4d6 drop lowest)'}
            </small>
            <div style="border-bottom: 2px solid #e9ecef; margin-bottom: 10px;"></div>
            <div class="stat-grid">
    `;

    Object.keys(npc.abilities).forEach(ability => {
        const isProficient = npc.savingThrows && npc.savingThrows.includes(ability);
        html += `
            <div class="stat-item" ${isProficient ? 'style="border: 2px solid #58180d;"' : ''}>
                <div class="stat-label">${abilityNames[ability]}</div>
                <div class="stat-value editable" id="editable-stat-${ability}" onclick="event.stopPropagation(); editStatField('${ability}')">${npc.abilities[ability]}</div>
                <div class="stat-modifier">${formatModifier(npc.modifiers[ability])}</div>
            </div>
        `;
    });

    html += `
            </div>

            <!-- Combat Stats Section -->
            <div class="section-title"><i class="fa-solid fa-shield-halved"></i> Combat Stats</div>
            
            <div class="info-item">
                <span class="info-label">Hit Points:</span>
                <span class="editable" id="editable-hp" onclick="event.stopPropagation(); editHPField()">${npc.hitPoints}</span>
                ${npc.customHP ? '(Custom)' : (npc.hitDice ? `(${npc.hitDice})` : '')}
            </div>
            <div class="info-item">
                <span class="info-label">Hit Dice:</span>${npc.hitDice || 'None'}
            </div>
            <div class="info-item">
                <span class="info-label">Armor Class:</span><span class="editable" id="editable-ac" onclick="event.stopPropagation(); editACField()">${npc.ac}</span> ${npc.customAC ? '(Custom)' : `(${npc.armorName})`}
            </div>
            <div class="info-item">
                <span class="info-label">Initiative:</span>${npc.initiative >= 0 ? '+' : ''}${npc.initiative}
            </div>
            <div class="info-item">
                <span class="info-label">Speed:</span>${npc.speed} ft.
            </div>
            ${npc.proficiencyBonus ? `
            <div class="info-item">
                <span class="info-label">Proficiency Bonus:</span>+${npc.proficiencyBonus}
            </div>
            ` : ''}
            
            <!-- Passive Skills -->
            <div class="passive-skills-row">
                <div class="passive-skill" title="Passive Perception">
                    <i class="fa-solid fa-eye"></i> ${npc.passivePerception}
                </div>
                <div class="passive-skill" title="Passive Investigation">
                    <i class="fa-solid fa-magnifying-glass"></i> ${npc.passiveInvestigation || 10 + (npc.modifiers?.int || 0)}
                </div>
                <div class="passive-skill" title="Passive Insight">
                    <i class="fa-solid fa-brain"></i> ${npc.passiveInsight || 10 + (npc.modifiers?.wis || 0)}
                </div>
            </div>
    `;
    
    // Saving Throws with actual values
    const savingThrowValues = Object.keys(npc.modifiers).map(ability => {
        const isProficient = npc.savingThrows && npc.savingThrows.includes(ability);
        const value = npc.modifiers[ability] + (isProficient ? npc.proficiencyBonus : 0);
        const prefix = value >= 0 ? '+' : '';
        const profMark = isProficient ? '*' : '';
        return `${abilityNames[ability].substring(0, 3)} ${prefix}${value}${profMark}`;
    });
    
    html += `
        <div class="info-item">
            <span class="info-label">Saving Throws:</span><span style="font-size: 0.9em;">${savingThrowValues.join(', ')}</span>
        </div>
    `;
    
    // Senses
    if (npc.senses && npc.senses.length > 0) {
        html += `
            <div class="info-item">
                <span class="info-label">Senses:</span>${npc.senses.join(', ')}
            </div>
        `;
    }
    
    // Languages (editable) - separate actual languages from choice notes
    const languageChoicePatterns = ['One other', 'Two others', 'Three others', 'One of your choice', 'Two of your choice'];
    const actualLanguages = (npc.languages || []).filter(lang => !languageChoicePatterns.some(p => lang.includes(p) || lang.toLowerCase().includes('other') || lang.toLowerCase().includes('choice')));
    const languageChoices = (npc.languages || []).filter(lang => languageChoicePatterns.some(p => lang.includes(p) || lang.toLowerCase().includes('other') || lang.toLowerCase().includes('choice')));
    
    // Add background language choices
    if (npc.backgroundData && npc.backgroundData.languages) {
        const bgLangCount = npc.backgroundData.languages;
        if (bgLangCount === 1) {
            languageChoices.push('One additional language (background)');
        } else if (bgLangCount === 2) {
            languageChoices.push('Two additional languages (background)');
        } else if (bgLangCount > 2) {
            languageChoices.push(`${bgLangCount} additional languages (background)`);
        }
    }
    
    html += `
        <div class="section-header" style="margin-top: 10px;">
            <div class="info-item" style="flex: 1; margin-bottom: 0;">
                <span class="info-label">Languages:</span>
                <span class="editable" style="cursor: pointer;" onclick="event.stopPropagation(); openMultiSelectModal('languages', 'Languages', getAllLanguages(), currentNPC.languages)">${actualLanguages.length > 0 ? actualLanguages.join(', ') : 'None'}</span>
            </div>
            ${lockBtn('languages')}
        </div>
    `;
    
    // Show language choices as a separate bold note
    if (languageChoices.length > 0) {
        html += `
            <div style="margin-left: 10px; margin-top: 5px; font-weight: bold; color: #58180d; font-style: italic;">
                + ${languageChoices.join(', ')}
            </div>
        `;
    }

    // Tool Proficiencies (from background)
    if (npc.toolProficiencies && npc.toolProficiencies.length > 0) {
        html += `
            <div class="info-item" style="margin-top: 5px;">
                <span class="info-label">Tool Proficiencies:</span>
                <span>${npc.toolProficiencies.join(', ')}</span>
            </div>
        `;
    }

    // Armor & Weapon Proficiencies
    if ((npc.armorProficiencies && npc.armorProficiencies.length > 0) || 
        (npc.weaponProficiencies && npc.weaponProficiencies.length > 0)) {
        html += `
            <div class="proficiencies-section" style="margin-top: 10px;">
        `;
        
        if (npc.armorProficiencies && npc.armorProficiencies.length > 0) {
            html += `
                <div class="info-item">
                    <span class="info-label">Armor:</span>
                    <span>${npc.armorProficiencies.join(', ')}</span>
                </div>
            `;
        }
        
        if (npc.weaponProficiencies && npc.weaponProficiencies.length > 0) {
            html += `
                <div class="info-item">
                    <span class="info-label">Weapons:</span>
                    <span>${npc.weaponProficiencies.join(', ')}</span>
                </div>
            `;
        }
        
        html += `</div>`;
    }

    // Weapons Section
    html += `
        <div class="section-header" style="margin-top: 15px;">
            <div class="section-title" style="border-bottom: none; padding-bottom: 0;"><i class="fa-solid fa-khanda"></i> Weapons</div>
            ${lockBtn('weapons')}
        </div>
        <div class="weapons-list">
    `;
    
    // Show Tiny Fists for infants, Unarmed Strike for others
    const isInfant = npc.ageCategory === 'infant';
    
    if (isInfant) {
        // Tiny Fists for infants - does 0 damage
        html += `
            <div class="weapon-card" title="The flailing fists of an infant. Adorable but ineffective." style="opacity: 0.85; border-style: dashed;">
                <div class="weapon-header">
                    <span class="weapon-name"><i class="fa-solid fa-hand" style="margin-right: 5px;"></i>Tiny Fists</span>
                    <span class="weapon-type">Natural</span>
                </div>
                <div class="weapon-stats">
                    <div class="weapon-stat">
                        <span class="weapon-stat-label">Attack:</span>
                        <span class="weapon-stat-value">+0</span>
                    </div>
                    <div class="weapon-stat">
                        <span class="weapon-stat-label">Damage:</span>
                        <span class="weapon-stat-value">No Damage</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        const unarmedStrike = getUnarmedStrike(
            npc.characterClasses?.[0]?.className || 'commoner',
            npc.totalLevel || 1,
            npc.modifiers,
            npc.proficiencyBonus || 2
        );
        
        const unarmedAttackSign = unarmedStrike.attackBonus >= 0 ? '+' : '';
        const unarmedDamageSign = unarmedStrike.damageBonus >= 0 ? '+' : '';
        const unarmedDamageBonus = unarmedStrike.damageBonus !== 0 ? ` ${unarmedDamageSign}${unarmedStrike.damageBonus}` : '';
        const unarmedProperties = unarmedStrike.properties && unarmedStrike.properties.length > 0 ? unarmedStrike.properties.join(', ') : '';
        
        html += `
            <div class="weapon-card" title="${unarmedStrike.description}" style="opacity: 0.85; border-style: dashed;">
                <div class="weapon-header">
                    <span class="weapon-name"><i class="fa-solid fa-hand-fist" style="margin-right: 5px;"></i>${unarmedStrike.name}</span>
                    <span class="weapon-type">Natural</span>
                </div>
                <div class="weapon-stats">
                    <div class="weapon-stat">
                        <span class="weapon-stat-label">Attack:</span>
                        <span class="weapon-stat-value">${unarmedAttackSign}${unarmedStrike.attackBonus}</span>
                    </div>
                    <div class="weapon-stat">
                        <span class="weapon-stat-label">Damage:</span>
                        <span class="weapon-stat-value">${unarmedStrike.damage}${unarmedDamageBonus} ${unarmedStrike.damageType}</span>
                    </div>
                </div>
                ${unarmedProperties ? `<div class="weapon-properties">${unarmedProperties}</div>` : ''}
            </div>
        `;
    }
    
    // Show racial natural weapon if applicable
    const racialWeapon = getRacialNaturalWeapon(npc.race, npc.modifiers);
    if (racialWeapon) {
        // Infants deal only 1 damage with no modifier, others use normal stats
        const racialAttackBonus = isInfant ? 0 : npc.modifiers.str + (npc.proficiencyBonus || 2);
        const racialAttackSign = racialAttackBonus >= 0 ? '+' : '';
        const racialDamage = isInfant ? '1' : racialWeapon.damage;
        const racialDamageSign = racialWeapon.damageBonus >= 0 ? '+' : '';
        const racialDamageBonus = isInfant ? '' : (racialWeapon.damageBonus !== 0 ? ` ${racialDamageSign}${racialWeapon.damageBonus}` : '');
        
        html += `
            <div class="weapon-card" title="${racialWeapon.description}" style="border-style: dashed; border-color: #8b6914;${isInfant ? ' opacity: 0.85;' : ''}">
                <div class="weapon-header">
                    <span class="weapon-name"><i class="fa-solid fa-paw" style="margin-right: 5px;"></i>${racialWeapon.name}</span>
                    <span class="weapon-type">Racial</span>
                </div>
                <div class="weapon-stats">
                    <div class="weapon-stat">
                        <span class="weapon-stat-label">Attack:</span>
                        <span class="weapon-stat-value">${racialAttackSign}${racialAttackBonus}</span>
                    </div>
                    <div class="weapon-stat">
                        <span class="weapon-stat-label">Damage:</span>
                        <span class="weapon-stat-value">${racialDamage}${racialDamageBonus} ${racialWeapon.damageType}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Then show equipped weapons
    if (npc.weapons && npc.weapons.length > 0) {
        npc.weapons.forEach((weapon, index) => {
            const modifier = weapon.modifier || 0;
            const totalAttackBonus = weapon.attackBonus + modifier;
            const totalDamageBonus = weapon.damageBonus + modifier;
            const attackSign = totalAttackBonus >= 0 ? '+' : '';
            const damageSign = totalDamageBonus >= 0 ? '+' : '';
            const damageBonus = totalDamageBonus !== 0 ? ` ${damageSign}${totalDamageBonus}` : '';
            const properties = weapon.properties && weapon.properties.length > 0 ? weapon.properties.join(', ') : '';
            const modifierBadge = modifier > 0 ? `<span class="weapon-modifier-badge">+${modifier}</span>` : '';
            
            html += `
                <div class="weapon-card" title="${weapon.description || ''}">
                    <div class="weapon-header">
                        <span class="weapon-name">${weapon.name}${modifierBadge}</span>
                        <span class="weapon-type">${weapon.type === 'improvised' ? 'Improvised' : (weapon.type === 'custom' ? 'Custom' : (weapon.type === 'natural' ? 'Natural' : (weapon.type + ' ' + weapon.category)))}</span>
                    </div>
                    <div class="weapon-stats">
                        <div class="weapon-stat">
                            <span class="weapon-stat-label">Attack:</span>
                            <span class="weapon-stat-value">${attackSign}${totalAttackBonus}</span>
                        </div>
                        <div class="weapon-stat">
                            <span class="weapon-stat-label">Damage:</span>
                            <span class="weapon-stat-value">${weapon.damage === '0' || weapon.damage === 'none' || weapon.damageType === 'none' ? 'No Damage' : `${weapon.damage}${damageBonus} ${weapon.damageType}`}</span>
                        </div>
                    </div>
                    ${properties ? `<div class="weapon-properties">${properties}</div>` : ''}
                    <div class="weapon-card-actions">
                        <button class="weapon-action-btn modifier" onclick="event.stopPropagation(); setWeaponModifier(${index})">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> ${modifier > 0 ? 'Change +' + modifier : 'Add Modifier'}
                        </button>
                        <button class="weapon-action-btn remove" onclick="event.stopPropagation(); removeWeapon(${index})">
                            <i class="fa-solid fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            `;
        });
    }
    
    html += `
        </div>
        <div class="weapon-add-buttons">
            <button class="weapon-add-btn" onclick="event.stopPropagation(); openWeaponModal()">
                <i class="fa-solid fa-plus"></i> Add Weapon
            </button>
            <button class="weapon-add-btn" onclick="event.stopPropagation(); openCustomWeaponModal()">
                <i class="fa-solid fa-hammer"></i> Custom Weapon
            </button>
        </div>
    `;

    html += `
            <div class="section-title"><i class="fa-solid fa-person"></i> Physical Traits</div>
            <div class="info-item">
                <span class="info-label">Size:</span>${capitalize(npc.size)}
            </div>
            <div class="info-item">
                <span class="info-label">Speed:</span>${npc.speed} feet
            </div>
    `;
    
    // Physical Appearance
    if (npc.appearance) {
        html += `
            <div class="info-item">
                <span class="info-label">Height:</span>${npc.appearance.height}
            </div>
            <div class="info-item">
                <span class="info-label">Weight:</span>${npc.appearance.weight}
            </div>
            <div class="info-item">
                <span class="info-label">Eyes:</span>${capitalize(npc.appearance.eyes)}
            </div>
            <div class="info-item">
                <span class="info-label">Hair:</span>${capitalize(npc.appearance.hair)}
            </div>
            <div class="info-item">
                <span class="info-label">Skin:</span>${capitalize(npc.appearance.skin)}
            </div>
        `;
    }
    
    // Racial Traits
    if (npc.traits && npc.traits.length > 0) {
        html += `
            <div class="section-title"><i class="fa-solid fa-star"></i> Racial Traits</div>
            <div class="traits-list">
                ${npc.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
            </div>
        `;
    }
    
    // Class Features
    const characterFeatures = getCharacterFeatures(npc.characterClasses || [{ className: npc.npcClass, level: npc.totalLevel || 1 }]);
    if (characterFeatures.length > 0) {
        html += `
            <div class="section-title"><i class="fa-solid fa-scroll"></i> Class Features</div>
            <div class="features-list">
                ${characterFeatures.map(f => `<span class="feature-tag" title="${f.description.replace(/"/g, '&quot;')}">${f.name} <span class="feature-level">(Lv ${f.level})</span></span>`).join('')}
            </div>
        `;
    }
    
    // Spells Section (only for spellcasters)
    if (npc.spellData) {
        const abilityNames = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };
        const spellAbilityName = abilityNames[npc.spellData.ability] || 'Unknown';
        
        const spellsLocked = lockStates.spells;
        html += `
            <div class="section-header">
                <div class="section-title" style="border-bottom: none; padding-bottom: 0;"><i class="fa-solid fa-hat-wizard"></i> Spellcasting</div>
                <button class="clear-spells-btn" onclick="event.stopPropagation(); clearAllSpellsFromSection()" title="Clear all spells to select your own" ${spellsLocked ? 'disabled' : ''}>
                    <i class="fa-solid fa-trash"></i> Clear
                </button>
                ${lockBtn('spells')}
            </div>
            <div class="spell-stats">
                <div class="spell-stat"><span class="spell-stat-label">Ability:</span> ${spellAbilityName}</div>
                <div class="spell-stat"><span class="spell-stat-label">Save DC:</span> ${npc.spellData.saveDC}</div>
                <div class="spell-stat"><span class="spell-stat-label">Attack:</span> +${npc.spellData.attackBonus}</div>
            </div>
        `;
        
        // Spell Slots
        const slotLabels = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
        const activeSlots = npc.spellData.spellSlots.map((count, idx) => ({ level: idx + 1, label: slotLabels[idx], count })).filter(s => s.count > 0);
        
        if (activeSlots.length > 0) {
            html += `
                <div class="spell-slots-display">
                    ${activeSlots.map(s => `<span class="spell-slot-badge">${s.label}: ${s.count}</span>`).join('')}
                </div>
            `;
        }
        
        // Cantrips
        if (npc.spellData.cantrips && npc.spellData.cantrips.length > 0) {
            html += `
                <div class="spell-section-title">Cantrips</div>
                <div class="spells-list editable" onclick="event.stopPropagation(); openSpellModal('cantrips')">
                    ${npc.spellData.cantrips.map(spellId => {
                        const spell = spells[spellId];
                        return spell ? `<span class="spell-tag cantrip" title="${spell.description.substring(0, 200).replace(/"/g, '&quot;')}...">${spell.name}</span>` : '';
                    }).join('')}
                </div>
            `;
        } else if (npc.spellData.cantripsKnown > 0) {
            html += `
                <div class="spell-section-title">Cantrips</div>
                <button class="select-spells-btn" onclick="event.stopPropagation(); openSpellModal('cantrips')">
                    <i class="fa-solid fa-wand-sparkles"></i> Select Cantrips (0/${npc.spellData.cantripsKnown})
                </button>
            `;
        }
        
        // Leveled Spells (grouped by level)
        if (npc.spellData.spells && npc.spellData.spells.length > 0) {
            // Group spells by level
            const spellsByLevel = {};
            npc.spellData.spells.forEach(spellId => {
                const spell = spells[spellId];
                if (spell) {
                    if (!spellsByLevel[spell.level]) spellsByLevel[spell.level] = [];
                    spellsByLevel[spell.level].push({ id: spellId, ...spell });
                }
            });
            
            html += `
                <div class="spell-section-title">Spells Known</div>
                <div class="spells-list editable" onclick="event.stopPropagation(); openSpellModal('spells')">
            `;
            
            // Sort levels and display
            Object.keys(spellsByLevel).sort((a, b) => a - b).forEach(level => {
                spellsByLevel[level].forEach(spell => {
                    html += `<span class="spell-tag level-${spell.level}" title="${spell.description.substring(0, 200).replace(/"/g, '&quot;')}...">${spell.name} <span class="spell-level-label">(${slotLabels[spell.level - 1]})</span></span>`;
                });
            });
            
            html += `</div>`;
        } else if (npc.spellData.spellsKnownCount > 0) {
            html += `
                <div class="spell-section-title">Spells Known</div>
                <button class="select-spells-btn" onclick="event.stopPropagation(); openSpellModal('spells')">
                    <i class="fa-solid fa-book-sparkles"></i> Select Spells (0/${npc.spellData.spellsKnownCount})
                </button>
            `;
        }
    }
    
    html += `
            <!-- Skills Section with Lock -->
            <div class="section-header">
                <div class="section-title" style="border-bottom: none; padding-bottom: 0;"><i class="fa-solid fa-book"></i> Skill Proficiencies</div>
                ${lockBtn('skills')}
            </div>
            <div style="border-bottom: 2px solid #e9ecef; margin-bottom: 10px;"></div>
            <div class="skills-list editable" style="padding: 5px; margin: -5px; border-radius: 6px;" onclick="event.stopPropagation(); openMultiSelectModal('skills', 'Skill Proficiencies', getAllSkills(), currentNPC.skills)">
    `;

    const allSkills = [
        'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History',
        'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception',
        'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'
    ];
    const proficiencyBonus = npc.proficiencyBonus || 2;
    
    allSkills.forEach(skill => {
        const isProficient = npc.skills.includes(skill);
        const ability = skillAbilities[skill] || 'int';
        const abilityMod = npc.modifiers[ability] || 0;
        const skillMod = isProficient ? abilityMod + proficiencyBonus : abilityMod;
        const modStr = skillMod >= 0 ? `+${skillMod}` : `${skillMod}`;
        html += `<span class="skill-tag ${isProficient ? 'proficient' : ''}">${skill} <span class="skill-modifier">(${modStr})</span></span>`;
    });

    html += `
            </div>

            <!-- Equipment Section with Lock -->
            <div class="section-header">
                <div class="section-title" style="border-bottom: none; padding-bottom: 0;"><i class="fa-solid fa-toolbox"></i> Equipment</div>
                ${lockBtn('equipment')}
            </div>
            <div style="border-bottom: 2px solid #e9ecef; margin-bottom: 10px;"></div>
            <div class="editable" id="editable-equipment" style="padding: 5px; margin: -5px; border-radius: 6px;" onclick="event.stopPropagation(); openMultiSelectModal('equipment', 'Equipment', getAllEquipment(), currentNPC.equipment)">
    `;

    if (npc.equipment.length > 0) {
        npc.equipment.forEach(item => {
            html += `<div class="info-item">${item}</div>`;
        });
    } else {
        html += `<div class="info-item" style="color: #6c757d; font-style: italic;">No notable equipment (click to add)</div>`;
    }

    html += `</div>`;

    // Currency
    if (npc.currency) {
        html += `
            <div class="section-title" style="margin-top: 15px;"><i class="fa-solid fa-coins"></i> Currency</div>
            <div class="info-item">
                <span style="color: #ffd700; font-weight: bold;">${npc.currency.gp} gp</span> · 
                <span style="color: #c0c0c0;">${npc.currency.sp} sp</span> · 
                <span style="color: #b87333;">${npc.currency.cp} cp</span>
            </div>
        `;
    }

    // Background traits (for PCs)
    if (npc.background && npc.backgroundData) {
        // For custom backgrounds, show skill selector
        const customSkillsHtml = npc.background === 'custom' ? `
            <div class="info-item" style="margin-bottom: 8px;">
                <span class="info-label">Skill Proficiencies (pick 2):</span>
                <span class="editable" style="cursor: pointer; display: block; margin-top: 4px;" 
                    onclick="openCustomBackgroundSkillsModal()">
                    ${npc.backgroundData.skills && npc.backgroundData.skills.length > 0 
                        ? npc.backgroundData.skills.join(', ') 
                        : 'Click to select 2 skills'}
                </span>
            </div>
        ` : '';
        
        // Use the proper name from backgroundData (has correct spacing), fallback to capitalized key
        const displayName = npc.backgroundData?.name || capitalize(npc.background);
        
        html += `
            <div class="section-title" style="margin-top: 15px;">
                <i class="fa-solid fa-masks-theater"></i> Background: 
                <span class="editable" style="cursor: pointer; border-bottom: 1px dashed #58180d;" 
                    onclick="${npc.background === 'custom' ? 'openCustomBackgroundNameModal()' : 'openBackgroundSelectModal()'}">
                    ${displayName}
                </span>
                ${npc.background === 'custom' ? '<span style="font-size: 0.8em; color: #666; margin-left: 8px;">(click to rename)</span>' : ''}
            </div>
            
            ${customSkillsHtml}
            
            <div class="info-item" style="margin-bottom: 8px;">
                <span class="info-label">Personality Trait:</span>
                <span class="editable" style="cursor: pointer; display: block; margin-top: 4px;" 
                    onclick="openBackgroundTraitModal('personalityTrait', 'Personality Trait', currentNPC.backgroundData.traits, currentNPC.personalityTrait)">
                    ${npc.personalityTrait || 'Click to select'}
                </span>
            </div>
            
            <div class="info-item" style="margin-bottom: 8px;">
                <span class="info-label">Ideal:</span>
                <span class="editable" style="cursor: pointer; display: block; margin-top: 4px;"
                    onclick="openBackgroundTraitModal('ideal', 'Ideal', currentNPC.backgroundData.ideals, currentNPC.ideal)">
                    ${npc.ideal || 'Click to select'}
                </span>
            </div>
            
            <div class="info-item" style="margin-bottom: 8px;">
                <span class="info-label">Bond:</span>
                <span class="editable" style="cursor: pointer; display: block; margin-top: 4px;"
                    onclick="openBackgroundTraitModal('bond', 'Bond', currentNPC.backgroundData.bonds, currentNPC.bond)">
                    ${npc.bond || 'Click to select'}
                </span>
            </div>
            
            <div class="info-item" style="margin-bottom: 8px;">
                <span class="info-label">Flaw:</span>
                <span class="editable" style="cursor: pointer; display: block; margin-top: 4px;"
                    onclick="openBackgroundTraitModal('flaw', 'Flaw', currentNPC.backgroundData.flaws, currentNPC.flaw)">
                    ${npc.flaw || 'Click to select'}
                </span>
            </div>
            
            ${npc.backgroundData.feature ? `
            <div class="info-item" style="margin-top: 12px; padding: 10px; background: #f8f5f0; border-left: 3px solid #58180d; border-radius: 4px;">
                <span class="info-label" style="color: #58180d;">Feature: ${npc.backgroundData.feature}</span>
                <div style="margin-top: 6px; font-size: 0.9em; color: #555;">${npc.backgroundData.featureDesc || ''}</div>
            </div>
            ` : ''}
        `;
    }

    if (npc.backstory) {
        html += `
            <!-- Backstory Section with Lock -->
            <div class="section-header">
                <div class="section-title" style="border-bottom: none; padding-bottom: 0;"><i class="fa-solid fa-scroll"></i> Backstory</div>
                ${lockBtn('backstory')}
            </div>
            <div style="border-bottom: 2px solid #e9ecef; margin-bottom: 10px;"></div>
            <div class="info-item editable" id="editable-backstory" onclick="editTextareaField('backstory', currentNPC.backstory, event)">${npc.backstory}</div>
        `;
    }

    // Pending Level Up section (if user chose "Choose Ability Scores & Feats")
    if (npc.pendingLevelUpChoice) {
        const totalASIs = countASIsEarned(npc.characterClasses || []);
        const totalPoints = totalASIs * 2;
        const raceKey = npc.race.toLowerCase();
        const canHaveBonusFeat = raceKey === 'human' || ['reborn', 'hexblood', 'dhampir'].includes(raceKey);
        
        html += `
            <div class="pending-levelup-section">
                <div class="pending-levelup-icon"><i class="fa-solid fa-exclamation-triangle"></i></div>
                <div class="pending-levelup-content">
                    <div class="pending-levelup-title">Level Up Choices Required</div>
                    <div class="pending-levelup-desc">
                        You have <strong>${totalPoints} points</strong> to spend on ability scores and feats.
                        ${canHaveBonusFeat ? '<br><span class="pending-levelup-bonus">Plus 1 free bonus feat from your race!</span>' : ''}
                    </div>
                    <button class="pending-levelup-btn" onclick="openLevelUpModal()">
                        <i class="fa-solid fa-arrow-up"></i> Make Level Up Choices
                    </button>
                </div>
            </div>
        `;
    }

    // Portrait section
    html += `
        <div class="portrait-section" id="portraitSection">
            <div class="section-title"><i class="fa-solid fa-image"></i> Character Portrait</div>
            <div id="portraitContainer" class="portrait-container">
                <div class="portrait-placeholder" id="portraitPlaceholder">
                    <i class="fa-solid fa-user-circle"></i>
                    <span>Click below to generate a portrait</span>
                </div>
                <img id="portraitImage" class="portrait-image" style="display: none;" alt="Character Portrait">
                <div id="portraitLoading" class="portrait-loading" style="display: none;">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    <span>Generating portrait...</span>
                </div>
            </div>
            <div class="portrait-actions">
                <button class="generate-portrait-btn" onclick="generatePortrait()">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Generate Portrait
                </button>
                <button class="view-prompt-btn" onclick="generatePortraitPrompt()">
                    <i class="fa-solid fa-eye"></i> View Prompt
                </button>
                <button class="upload-image-btn" onclick="triggerImageUpload()">
                    <i class="fa-solid fa-upload"></i> Upload
                </button>
                <input type="file" id="imageUploadInput" accept="image/*" style="display: none;" onchange="handleImageUpload(event)">
            </div>
        </div>
        
        <!-- Export Actions -->
        <div class="export-section">
            <button class="export-pdf-btn" onclick="exportCharacterSheet()">
                <i class="fa-solid fa-file-pdf"></i> Export Character Sheet
            </button>
            <div class="checkbox-group" style="margin-top: 10px; justify-content: center;">
                <input type="checkbox" id="includeBackstory" checked>
                <label for="includeBackstory" style="margin: 0;"><i class="fa-solid fa-scroll"></i> Include Backstory in PDF</label>
            </div>
        </div>
    `;

    html += `</div>`;

    resultDiv.innerHTML = html;
    
    // Update form field states based on locks
    updateAllFormStates();
}

function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function toggleCharacterType() {
    const toggle = document.getElementById('characterTypeToggle');
    const isPC = toggle.checked;
    
    document.getElementById('npcLabel').style.fontWeight = isPC ? 'normal' : 'bold';
    document.getElementById('npcLabel').style.color = isPC ? '#888' : '#58180d';
    document.getElementById('pcLabel').style.fontWeight = isPC ? 'bold' : 'normal';
    document.getElementById('pcLabel').style.color = isPC ? '#1e7b34' : '#888';
    
    // Update button text
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
        generateBtn.innerHTML = isPC 
            ? '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate PC'
            : '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate NPC';
    }
    
    // Update placeholder text
    const placeholderText = document.getElementById('placeholderText');
    if (placeholderText) {
        placeholderText.textContent = isPC
            ? 'Fill out the form and click "Generate PC" to create a character'
            : 'Fill out the form and click "Generate NPC" to create a character';
    }
    
    const classSelect = document.getElementById('npcClass');
    const commonerOption = classSelect.querySelector('option[value="commoner"]');
    
    // Hide/show commoner option based on mode
    if (commonerOption) {
        commonerOption.style.display = isPC ? 'none' : '';
    }
    
    if (isPC && classSelect.value === 'commoner') {
        // PC mode: switch from commoner to random adventurer
        classSelect.value = 'random';
        onClassChange();
    } else if (!isPC && classSelect.value !== 'commoner') {
        // NPC mode: default back to commoner
        classSelect.value = 'commoner';
        onClassChange();
    }
    
    // Set background default based on mode
    const bgSelect = document.getElementById('background');
    if (bgSelect) {
        bgSelect.value = isPC ? 'random' : 'none';
        showBackgroundDescription();
    }
    
    // Update level up options default based on mode
    const levelUpOptionsSelect = document.getElementById('levelUpOptions');
    if (levelUpOptionsSelect) {
        levelUpOptionsSelect.value = isPC ? 'choose' : 'random';
    }
}

function isPCMode() {
    const toggle = document.getElementById('characterTypeToggle');
    return toggle && toggle.checked;
}

function showRaceDescription() {
    const raceSelect = document.getElementById('race');
    const descriptionDiv = document.getElementById('raceDescription');
    const selectedRace = raceSelect.value;

    if (selectedRace === 'random' || !selectedRace) {
        descriptionDiv.classList.add('hidden');
        return;
    }

    const raceData = races[selectedRace];
    if (raceData && raceData.description) {
        const raceName = capitalize(selectedRace);
        descriptionDiv.innerHTML = `<strong>${raceName}</strong>${raceData.description}`;
        descriptionDiv.classList.remove('hidden');
    } else {
        descriptionDiv.classList.add('hidden');
    }
}

function showClassDescription() {
    const classSelect = document.getElementById('npcClass');
    const descriptionDiv = document.getElementById('classDescription');
    const selectedClass = classSelect.value;

    if (selectedClass === 'random' || !selectedClass) {
        descriptionDiv.classList.add('hidden');
        return;
    }

    const classData = classes[selectedClass];
    if (classData && classData.description) {
        const className = capitalize(selectedClass);
        const hitDie = classData.hitDie || 'd4';
        descriptionDiv.innerHTML = `<strong>${className}</strong> (${hitDie}) - ${classData.description}`;
        descriptionDiv.classList.remove('hidden');
    } else {
        descriptionDiv.classList.add('hidden');
    }
}

// Multiclass tracking
let multiclasses = []; // Array of {class: string, level: number}

function onClassChange() {
    showClassDescription();
    
    const classSelect = document.getElementById('npcClass');
    const levelSelect = document.getElementById('npcClassLevel');
    const subclassSelect = document.getElementById('npcSubclass');
    const occupationSelect = document.getElementById('occupation');
    const occupationDesc = document.getElementById('occupationDescription');
    const multiclassSection = document.getElementById('multiclassSection');
    const selectedClass = classSelect.value;
    
    const isCommoner = selectedClass === 'commoner';
    const isAdventurer = selectedClass !== 'commoner' && selectedClass !== 'random';
    
    // Show/hide level selector (for adventurers only, commoner is always level 0)
    levelSelect.style.display = isAdventurer ? 'block' : 'none';
    
    // Show multiclass section for both commoners and adventurers (commoners can be retired adventurers)
    multiclassSection.style.display = (isCommoner || isAdventurer) ? 'block' : 'none';
    
    // Show/hide occupation (for commoner only)
    occupationSelect.style.display = isCommoner ? 'block' : 'none';
    if (!isCommoner && occupationDesc) {
        occupationDesc.classList.add('hidden');
    }
    
    // Update subclass options
    updateSubclassOptions();
    
    // Update feats toggle visibility
    updateFeatsToggleVisibility();
    
    // Update class label with total level
    updateClassLabelWithTotalLevel();
}

function onLevelChange() {
    updateSubclassOptions();
    updateFeatsToggleVisibility();
    updateClassLabelWithTotalLevel();
}

function updateClassLabelWithTotalLevel() {
    const classSelect = document.getElementById('npcClass');
    const levelSelect = document.getElementById('npcClassLevel');
    const classLabel = document.getElementById('classLabel');
    
    if (!classLabel) return;
    
    const selectedClass = classSelect.value;
    
    // For commoner or random, don't show level
    if (selectedClass === 'commoner' || selectedClass === 'random') {
        classLabel.textContent = 'Class';
        return;
    }
    
    // Calculate total level from main class + multiclasses
    const mainLevel = parseInt(levelSelect.value) || 1;
    const multiclassLevels = multiclasses.reduce((sum, mc) => sum + (mc.level || 0), 0);
    const totalLevel = mainLevel + multiclassLevels;
    
    classLabel.innerHTML = `Class <span style="color: #6c757d; font-weight: normal;">(Level ${totalLevel})</span>`;
}

// Show level up options when character has ASI levels (level 4+)
function updateLevelUpOptionsVisibility() {
    const classSelect = document.getElementById('npcClass');
    const levelSelect = document.getElementById('npcClassLevel');
    const levelUpOptionsRow = document.getElementById('levelUpOptionsRow');
    const levelUpOptionsSelect = document.getElementById('levelUpOptions');
    
    if (!levelUpOptionsRow) return;
    
    const selectedClass = classSelect.value;
    const selectedLevel = parseInt(levelSelect.value) || 1;
    
    // Show level up options if:
    // 1. Class is an adventurer class (not commoner, not random)
    // 2. Level is 4+ (when first ASI is available)
    // Also consider multiclasses that might have levels 4+
    const isAdventurer = selectedClass !== 'commoner' && selectedClass !== 'random';
    const hasASILevel = selectedLevel >= 4;
    
    // Check multiclasses for level 4+
    const multiclassHasASI = multiclasses.some(mc => mc.level >= 4);
    
    if ((isAdventurer && hasASILevel) || multiclassHasASI) {
        levelUpOptionsRow.style.display = 'flex';
        
        // Set default based on character type: NPCs = random, PCs = choose
        if (levelUpOptionsSelect) {
            levelUpOptionsSelect.value = isPCMode() ? 'choose' : 'random';
        }
    } else {
        levelUpOptionsRow.style.display = 'none';
    }
}

// Alias for backward compatibility
function updateFeatsToggleVisibility() {
    updateLevelUpOptionsVisibility();
}

function updateSubclassOptions() {
    const classSelect = document.getElementById('npcClass');
    const levelSelect = document.getElementById('npcClassLevel');
    const subclassSelect = document.getElementById('npcSubclass');
    
    const selectedClass = classSelect.value;
    const selectedLevel = parseInt(levelSelect.value) || 1;
    
    // Get subclass data for this class
    const subclassData = subclasses[selectedClass];
    
    // Check if subclass is available at this level
    if (!subclassData || selectedLevel < subclassData.level || selectedClass === 'commoner' || selectedClass === 'random') {
        subclassSelect.style.display = 'none';
        return;
    }
    
    // Build subclass options
    let optionsHtml = '<option value="random">Random ' + subclassData.name + '</option>';
    subclassData.options.forEach(opt => {
        optionsHtml += `<option value="${opt.id}">${opt.name} (${opt.source})</option>`;
    });
    
    subclassSelect.innerHTML = optionsHtml;
    subclassSelect.style.display = 'block';
}

function addMulticlass() {
    const mainClass = document.getElementById('npcClass').value;
    
    // Get list of available classes (exclude commoner, random, and already selected classes)
    const usedClasses = [mainClass, ...multiclasses.map(m => m.className)];
    const availableClasses = Object.keys(classes).filter(c => 
        c !== 'commoner' && !usedClasses.includes(c)
    );
    
    if (availableClasses.length === 0) {
        alert('No more classes available for multiclassing!');
        return;
    }
    
    // Add a new multiclass with the first available class
    multiclasses.push({
        className: availableClasses[0],
        level: 1
    });
    
    renderMulticlasses();
    updateFeatsToggleVisibility();
    updateClassLabelWithTotalLevel();
}

function removeMulticlass(index) {
    multiclasses.splice(index, 1);
    renderMulticlasses();
    updateFeatsToggleVisibility();
    updateClassLabelWithTotalLevel();
}

function updateMulticlass(index, field, value) {
    if (field === 'class') {
        multiclasses[index].className = value;
        // Reset subclass when class changes
        multiclasses[index].subclass = 'random';
        renderMulticlasses(); // Re-render to show/hide subclass dropdown
    } else if (field === 'level') {
        multiclasses[index].level = parseInt(value);
        // Check if subclass should now appear/disappear
        const subclassData = subclasses[multiclasses[index].className];
        if (subclassData && parseInt(value) < subclassData.level) {
            multiclasses[index].subclass = null;
        }
        renderMulticlasses(); // Re-render to show/hide subclass dropdown
        updateFeatsToggleVisibility();
        updateClassLabelWithTotalLevel();
    } else if (field === 'subclass') {
        multiclasses[index].subclass = value;
    }
}

function renderMulticlasses() {
    const container = document.getElementById('multiclassContainer');
    const mainClass = document.getElementById('npcClass').value;
    const usedClasses = [mainClass, ...multiclasses.map(m => m.className)];
    
    let html = '';
    
    multiclasses.forEach((mc, index) => {
        // Available classes for this dropdown (current selection + unused classes)
        const availableForThis = Object.keys(classes).filter(c => 
            c !== 'commoner' && (c === mc.className || !usedClasses.includes(c))
        );
        
        // Check if subclass is available for this class and level
        const subclassData = subclasses[mc.className];
        const showSubclass = subclassData && mc.level >= subclassData.level;
        
        html += `
            <div class="multiclass-row">
                <select onchange="updateMulticlass(${index}, 'class', this.value)">
                    ${availableForThis.map(c => `
                        <option value="${c}" ${c === mc.className ? 'selected' : ''}>${capitalize(c)}</option>
                    `).join('')}
                </select>
                <select class="level-select" onchange="updateMulticlass(${index}, 'level', this.value)">
                    ${Array.from({length: 20}, (_, i) => i + 1).map(lvl => `
                        <option value="${lvl}" ${lvl === mc.level ? 'selected' : ''}>Lvl ${lvl}</option>
                    `).join('')}
                </select>
                <button type="button" class="remove-multiclass-btn" onclick="removeMulticlass(${index})">
                    <i class="fa-solid fa-times"></i>
                </button>
                ${showSubclass ? `
                    <select class="subclass-select" onchange="updateMulticlass(${index}, 'subclass', this.value)">
                        <option value="random" ${!mc.subclass || mc.subclass === 'random' ? 'selected' : ''}>Random ${subclassData.name}</option>
                        ${subclassData.options.map(opt => `
                            <option value="${opt.id}" ${mc.subclass === opt.id ? 'selected' : ''}>${opt.name}</option>
                        `).join('')}
                    </select>
                ` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function getTotalLevel() {
    const mainLevel = parseInt(document.getElementById('npcClassLevel').value) || 1;
    const multiLevels = multiclasses.reduce((sum, mc) => sum + mc.level, 0);
    return mainLevel + multiLevels;
}

function getProficiencyBonus(totalLevel) {
    if (totalLevel <= 4) return 2;
    if (totalLevel <= 8) return 3;
    if (totalLevel <= 12) return 4;
    if (totalLevel <= 16) return 5;
    return 6;
}

// Get class features for a character based on their classes and levels
function getCharacterFeatures(characterClasses) {
    if (!characterClasses || characterClasses.length === 0) return [];
    
    const features = [];
    characterClasses.forEach(cc => {
        const classFeatureList = classFeatures[cc.className] || [];
        classFeatureList.forEach(feature => {
            if (feature.level <= cc.level) {
                features.push({
                    ...feature,
                    className: cc.className
                });
            }
        });
    });
    
    // Sort by level, then by class name
    features.sort((a, b) => a.level - b.level || a.className.localeCompare(b.className));
    return features;
}

function calculateAC(primaryClassName, modifiers) {
    const classData = classes[primaryClassName];
    if (!classData || !classData.armor) {
        return { ac: 10 + modifiers.dex, armorName: 'Unarmored' };
    }
    
    const armor = classData.armor;
    let ac = armor.baseAC;
    let armorName = armor.name;
    
    // Add DEX modifier if applicable
    if (armor.addDex) {
        let dexBonus = modifiers.dex;
        if (armor.maxDex !== null) {
            dexBonus = Math.min(dexBonus, armor.maxDex);
        }
        ac += dexBonus;
    }
    
    // Handle special unarmored defense calculations
    if (armor.special === 'barbarian') {
        // Barbarian: 10 + DEX + CON
        ac = 10 + modifiers.dex + modifiers.con;
        armorName = 'Unarmored Defense';
    } else if (armor.special === 'monk') {
        // Monk: 10 + DEX + WIS
        ac = 10 + modifiers.dex + modifiers.wis;
        armorName = 'Unarmored Defense';
    }
    
    return { ac, armorName };
}

function showSubclassDescription() {
    const classSelect = document.getElementById('npcClass');
    const subclassSelect = document.getElementById('npcSubclass');
    const descriptionDiv = document.getElementById('subclassDescription');
    
    const selectedClass = classSelect.value;
    const selectedSubclass = subclassSelect.value;
    
    if (!selectedSubclass || selectedSubclass === 'random' || !selectedClass) {
        descriptionDiv.style.display = 'none';
        return;
    }
    
    const subclassData = subclasses[selectedClass];
    if (subclassData) {
        const option = subclassData.options.find(opt => opt.id === selectedSubclass);
        if (option) {
            // Show brief description (first sentence or first 150 chars)
            let brief = option.description;
            const firstSentence = brief.match(/^[^.!?]+[.!?]/);
            if (firstSentence) {
                brief = firstSentence[0];
            } else if (brief.length > 150) {
                brief = brief.substring(0, 147) + '...';
            }
            descriptionDiv.innerHTML = `<strong>${option.name}</strong> (${option.source}) - ${brief}`;
            descriptionDiv.style.display = 'block';
            return;
        }
    }
    
    descriptionDiv.style.display = 'none';
}

function showBackgroundDescription() {
    const bgSelect = document.getElementById('background');
    const descriptionDiv = document.getElementById('backgroundDescription');
    const selectedBg = bgSelect.value;

    if (selectedBg === 'random' || selectedBg === 'none' || !selectedBg) {
        descriptionDiv.style.display = 'none';
        return;
    }
    
    // Handle custom background
    if (selectedBg === 'custom') {
        descriptionDiv.innerHTML = `<strong>Custom Background</strong><br>Create your own background with custom traits, ideals, bonds, and flaws.`;
        descriptionDiv.style.display = 'block';
        return;
    }

    const bgData = backgrounds[selectedBg];
    if (bgData) {
        let html = `<div style="display: block; font-weight: bold; margin-bottom: 6px;">${bgData.name}</div>`;
        
        // Main flavor text (extract from description before "Skills:")
        const descMatch = bgData.description.match(/^([^.]+\.)/);
        if (descMatch) {
            html += `<div style="display: block; margin-bottom: 4px;">${descMatch[1]}</div>`;
        }
        
        // Skills
        if (bgData.skills && bgData.skills.length > 0) {
            html += `<div style="display: block;"><strong>Skills:</strong> ${bgData.skills.join(', ')}</div>`;
        }
        
        // Tools
        if (bgData.tools && bgData.tools.length > 0) {
            const toolList = Array.isArray(bgData.tools) ? bgData.tools.join(', ') : bgData.tools;
            html += `<div style="display: block;"><strong>Tools:</strong> ${toolList}</div>`;
        }
        
        // Languages
        if (bgData.languages) {
            const langText = bgData.languages === 1 ? 'One of your choice' : 
                            bgData.languages === 2 ? 'Two of your choice' : 
                            `${bgData.languages} of your choice`;
            html += `<div style="display: block;"><strong>Languages:</strong> ${langText}</div>`;
        }
        
        descriptionDiv.innerHTML = html;
        descriptionDiv.style.display = 'block';
    } else {
        descriptionDiv.style.display = 'none';
    }
}

function showOccupationDescription() {
    const occSelect = document.getElementById('occupation');
    const descriptionDiv = document.getElementById('occupationDescription');
    const selectedOcc = occSelect.value;

    if (selectedOcc === 'random' || !selectedOcc) {
        descriptionDiv.classList.add('hidden');
        return;
    }

    const occData = occupations[selectedOcc];
    if (occData && occData.description) {
        const occName = selectedOcc.replace(/_/g, ' ').split(' ').map(w => capitalize(w)).join(' ');
        descriptionDiv.innerHTML = `<strong>${occName}</strong> - ${occData.description}`;
        descriptionDiv.classList.remove('hidden');
    } else {
        descriptionDiv.classList.add('hidden');
    }
}

// Show descriptions on page load if values are already selected
window.addEventListener('DOMContentLoaded', function() {
    showRaceDescription();
    showClassDescription();
    showOccupationDescription();
    onClassChange(); // Set initial state for occupation/subclass visibility
});

// ============================================
// INLINE EDITING FUNCTIONS
// ============================================

// Prevent multiple edits at once
let isEditing = false;

// Edit text field (Name)
function editTextField(field, currentValue, event) {
    if (event) event.stopPropagation();
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'inline-edit-input';
    input.value = currentValue;
    
    element.innerHTML = '';
    element.appendChild(input);
    element.classList.remove('editable');
    
    // Use setTimeout to ensure focus happens after DOM update
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
            currentNPC[field] = newValue;
            regenerateBackstoryIfNeeded();
        }
        isEditing = false;
        displayNPC(currentNPC);
    };
    
    // Delay blur handler attachment
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
            displayNPC(currentNPC);
        }
    });
}

// Edit age field (number input)
function editAgeField(event) {
    if (event) event.stopPropagation();
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById('editable-age');
    if (!element || !currentNPC) { isEditing = false; return; }
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'inline-edit-input';
    input.value = currentNPC.age;
    input.min = 0;
    input.max = 10000;
    input.style.width = '100px';
    
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
        const newValue = parseInt(input.value);
        if (!isNaN(newValue) && newValue >= 0) {
            currentNPC.age = newValue;
            // Update age category based on new age
            currentNPC.ageCategory = determineAgeCategory(newValue, currentNPC.race);
            regenerateBackstoryIfNeeded();
        }
        isEditing = false;
        displayNPC(currentNPC);
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
            displayNPC(currentNPC);
        }
    });
}

// Edit stat field (Ability Scores)
function editStatField(ability) {
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-stat-${ability}`);
    if (!element || !currentNPC) { isEditing = false; return; }
    
    const currentValue = currentNPC.abilities[ability];
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'inline-edit-input';
    input.value = currentValue;
    input.min = 1;
    input.max = 30;
    input.style.width = '60px';
    input.style.textAlign = 'center';
    input.style.fontSize = '1.3em';
    input.style.fontWeight = 'bold';
    input.style.padding = '6px 4px';
    input.style.MozAppearance = 'textfield';  // Hide spinners in Firefox
    input.classList.add('stat-input');
    
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
        let newValue = parseInt(input.value);
        // Clamp value between 1 and 30
        if (isNaN(newValue) || newValue < 1) newValue = 1;
        if (newValue > 30) newValue = 30;
        
        currentNPC.abilities[ability] = newValue;
        // Recalculate modifier
        currentNPC.modifiers[ability] = Math.floor((newValue - 10) / 2);
        
        // Recalculate HP if CON changed (unless custom HP is set)
        if (ability === 'con' && !currentNPC.customHP) {
            const classData = classes[currentNPC.npcClass];
            if (classData) {
                const hitDieMap = { 'd4': 4, 'd6': 6, 'd8': 8, 'd10': 10, 'd12': 12 };
                const hitDieMax = hitDieMap[classData.hitDie] || 4;
                currentNPC.hitPoints = hitDieMax + currentNPC.modifiers.con;
            }
        }
        
        isEditing = false;
        displayNPC(currentNPC);
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
            displayNPC(currentNPC);
        }
    });
}

// Edit HP field
function editHPField() {
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById('editable-hp');
    if (!element || !currentNPC) { isEditing = false; return; }
    
    const currentValue = currentNPC.hitPoints;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'inline-edit-input';
    input.value = currentValue;
    input.min = 1;
    input.max = 999;
    input.style.width = '60px';
    input.style.textAlign = 'center';
    input.style.MozAppearance = 'textfield';
    input.classList.add('stat-input');
    
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
        let newValue = parseInt(input.value);
        if (isNaN(newValue) || newValue < 1) newValue = 1;
        if (newValue > 999) newValue = 999;
        
        currentNPC.hitPoints = newValue;
        currentNPC.customHP = true; // Mark as custom
        
        isEditing = false;
        displayNPC(currentNPC);
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
            displayNPC(currentNPC);
        }
    });
}

// Get XP needed for next level
function getNextLevelXP(currentLevel) {
    if (currentLevel >= 20) return xpThresholds[20];
    return xpThresholds[currentLevel + 1] || 355000;
}

// Edit AC field
function editACField() {
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById('editable-ac');
    if (!element || !currentNPC) { isEditing = false; return; }
    
    const currentValue = currentNPC.ac;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'inline-edit-input';
    input.value = currentValue;
    input.min = 1;
    input.max = 30;
    input.style.width = '60px';
    input.style.textAlign = 'center';
    input.style.MozAppearance = 'textfield';
    input.classList.add('stat-input');
    
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
        let newValue = parseInt(input.value);
        if (isNaN(newValue) || newValue < 1) newValue = 1;
        if (newValue > 30) newValue = 30;
        
        currentNPC.ac = newValue;
        currentNPC.customAC = true; // Mark as custom
        
        isEditing = false;
        displayNPC(currentNPC);
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
            displayNPC(currentNPC);
        }
    });
}

// Edit class field with multiclass support
function editClassField(event) {
    if (event) event.stopPropagation();
    if (isEditing) return;
    if (!currentNPC) return;
    isEditing = true;
    
    const element = document.getElementById('editable-npcClass');
    if (!element) { isEditing = false; return; }
    
    // Build the class editor HTML
    const characterClasses = currentNPC.characterClasses || [{ className: currentNPC.npcClass, level: 1 }];
    
    let editorHtml = '<div class="inline-class-editor">';
    
    characterClasses.forEach((cc, index) => {
        const availableClasses = Object.keys(classes).filter(c => c !== 'commoner');
        const subclassData = subclasses[cc.className];
        const showSubclass = subclassData && cc.level >= subclassData.level;
        
        editorHtml += `
            <div class="inline-class-row" data-index="${index}">
                <select class="inline-class-select" data-index="${index}">
                    ${index === 0 ? '<option value="commoner">Commoner</option>' : ''}
                    ${availableClasses.map(c => `
                        <option value="${c}" ${c === cc.className ? 'selected' : ''}>${capitalize(c)}</option>
                    `).join('')}
                </select>
                <select class="inline-level-select" data-index="${index}">
                    ${Array.from({length: 20}, (_, i) => i + 1).map(lvl => `
                        <option value="${lvl}" ${lvl === cc.level ? 'selected' : ''}>Lvl ${lvl}</option>
                    `).join('')}
                </select>
                ${showSubclass ? `
                    <select class="inline-subclass-select" data-index="${index}">
                        ${subclassData.options.map(opt => `
                            <option value="${opt.id}" ${opt.id === cc.subclass ? 'selected' : ''}>${opt.name}</option>
                        `).join('')}
                    </select>
                ` : ''}
                ${index > 0 ? `<button type="button" class="inline-remove-class" data-index="${index}"><i class="fa-solid fa-times"></i></button>` : ''}
            </div>
        `;
    });
    
    editorHtml += `
        <div class="inline-class-actions">
            <button type="button" class="inline-add-class"><i class="fa-solid fa-plus"></i> Add Class</button>
            <button type="button" class="inline-save-class"><i class="fa-solid fa-check"></i> Done</button>
        </div>
    </div>`;
    
    element.innerHTML = editorHtml;
    element.classList.remove('editable');
    
    // Add event listeners
    const editor = element.querySelector('.inline-class-editor');
    
    // Class select changes
    editor.querySelectorAll('.inline-class-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.index);
            const newClassName = e.target.value;
            currentNPC.characterClasses[idx].className = newClassName;
            if (idx === 0) currentNPC.npcClass = newClassName;
            
            // Reset subclass when class changes and set random if eligible
            const newSubclassData = subclasses[newClassName];
            const currentLevel = currentNPC.characterClasses[idx].level;
            if (newSubclassData && currentLevel >= newSubclassData.level) {
                currentNPC.characterClasses[idx].subclass = newSubclassData.options[0].id;
            } else {
                currentNPC.characterClasses[idx].subclass = null;
            }
            
            // Re-render editor to show/hide subclass
            recalculateNPCFromClasses();
            isEditing = false;
            displayNPC(currentNPC);
            setTimeout(() => editClassField(null), 50);
        });
    });
    
    // Level select changes
    editor.querySelectorAll('.inline-level-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.index);
            const newLevel = parseInt(e.target.value);
            const className = currentNPC.characterClasses[idx].className;
            currentNPC.characterClasses[idx].level = newLevel;
            
            // Check if subclass should now be shown/hidden
            const subclassData = subclasses[className];
            if (subclassData) {
                if (newLevel >= subclassData.level && !currentNPC.characterClasses[idx].subclass) {
                    // Reached subclass level, pick first option
                    currentNPC.characterClasses[idx].subclass = subclassData.options[0].id;
                    // Re-render to show subclass
                    recalculateNPCFromClasses();
                    isEditing = false;
                    displayNPC(currentNPC);
                    setTimeout(() => editClassField(null), 50);
                } else if (newLevel < subclassData.level && currentNPC.characterClasses[idx].subclass) {
                    // Below subclass level, remove it
                    currentNPC.characterClasses[idx].subclass = null;
                    recalculateNPCFromClasses();
                    isEditing = false;
                    displayNPC(currentNPC);
                    setTimeout(() => editClassField(null), 50);
                }
            }
        });
    });
    
    // Subclass select changes
    editor.querySelectorAll('.inline-subclass-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.index);
            currentNPC.characterClasses[idx].subclass = e.target.value;
        });
    });
    
    // Remove class buttons
    editor.querySelectorAll('.inline-remove-class').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.closest('.inline-remove-class').dataset.index);
            currentNPC.characterClasses.splice(idx, 1);
            recalculateNPCFromClasses();
            isEditing = false;
            displayNPC(currentNPC);
            // Re-open editor
            setTimeout(() => editClassField(null), 50);
        });
    });
    
    // Add class button
    editor.querySelector('.inline-add-class').addEventListener('click', () => {
        const usedClasses = currentNPC.characterClasses.map(cc => cc.className);
        const availableClasses = Object.keys(classes).filter(c => 
            c !== 'commoner' && !usedClasses.includes(c)
        );
        if (availableClasses.length > 0) {
            const newClass = availableClasses[0];
            const newSubclassData = subclasses[newClass];
            // New multiclass starts at level 1, check if subclass available at level 1
            const newSubclass = (newSubclassData && newSubclassData.level <= 1) ? newSubclassData.options[0].id : null;
            currentNPC.characterClasses.push({ className: newClass, level: 1, subclass: newSubclass });
            recalculateNPCFromClasses();
            isEditing = false;
            displayNPC(currentNPC);
            setTimeout(() => editClassField(null), 50);
        }
    });
    
    // Done button
    const doneBtn = editor.querySelector('.inline-save-class');
    if (doneBtn) {
        doneBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            recalculateNPCFromClasses();
            isEditing = false;
            displayNPC(currentNPC);
        });
    }
}

function recalculateNPCFromClasses() {
    if (!currentNPC || !currentNPC.characterClasses) return;
    
    const characterClasses = currentNPC.characterClasses;
    currentNPC.npcClass = characterClasses[0]?.className || 'commoner';
    
    // Recalculate total level (commoner is level 0, doesn't count)
    currentNPC.totalLevel = characterClasses.reduce((sum, cc) => cc.className === 'commoner' ? sum : sum + cc.level, 0) || 1;
    
    // Recalculate proficiency bonus
    currentNPC.proficiencyBonus = getProficiencyBonus(currentNPC.totalLevel);
    
    // Recalculate HP (level 0 classes like commoner don't contribute)
    const hitDieMap = { 'd4': 4, 'd6': 6, 'd8': 8, 'd10': 10, 'd12': 12 };
    let hitPoints = 0;
    let hitDiceStr = [];
    let firstAdventurerClass = true;
    
    characterClasses.forEach((cc, index) => {
        // Skip level 0 classes (like commoner)
        if (cc.level <= 0) return;
        
        const cd = classes[cc.className];
        if (!cd) return;
        const hitDieMax = hitDieMap[cd.hitDie] || 4;
        const hitDieAvg = Math.floor(hitDieMax / 2) + 1;
        
        if (firstAdventurerClass) {
            hitPoints += hitDieMax + currentNPC.modifiers.con;
            for (let lvl = 2; lvl <= cc.level; lvl++) {
                hitPoints += hitDieAvg + currentNPC.modifiers.con;
            }
            firstAdventurerClass = false;
        } else {
            for (let lvl = 1; lvl <= cc.level; lvl++) {
                hitPoints += hitDieAvg + currentNPC.modifiers.con;
            }
        }
        
        hitDiceStr.push(`${cc.level}${cd.hitDie}`);
    });
    
    // Only update HP if not custom
    if (!currentNPC.customHP) {
        // For pure commoners (level 0), give them 1 HP + CON modifier
        if (hitPoints === 0) {
            currentNPC.hitPoints = Math.max(1, 1 + currentNPC.modifiers.con);
            currentNPC.hitDice = '';
        } else {
            currentNPC.hitPoints = Math.max(1, hitPoints);
            currentNPC.hitDice = hitDiceStr.join(' + ');
        }
    }
    
    // Update saving throws from primary class
    const primaryClassData = classes[characterClasses[0]?.className];
    currentNPC.savingThrows = primaryClassData?.savingThrows || [];
    
    // Recalculate AC based on primary class (only if not custom)
    if (!currentNPC.customAC) {
        const acData = calculateAC(characterClasses[0]?.className || 'commoner', currentNPC.modifiers);
        currentNPC.ac = acData.ac;
        currentNPC.armorName = acData.armorName;
    }
    
    // Combine skills from all classes
    let allClassSkills = [];
    characterClasses.forEach(cc => {
        const cd = classes[cc.className];
        if (cd && cd.skills) {
            allClassSkills = [...allClassSkills, ...cd.skills];
        }
    });
    const occData = occupations[currentNPC.occupation];
    const occSkills = occData?.skills || [];
    currentNPC.skills = [...new Set([...allClassSkills, ...occSkills])];
    
    // Recalculate passive perception
    currentNPC.passivePerception = 10 + currentNPC.modifiers.wis + (currentNPC.skills.includes('Perception') ? currentNPC.proficiencyBonus : 0);
    
    // Regenerate backstory if not locked
    regenerateBackstoryIfNeeded();
}

// Edit textarea field (Backstory)
function editTextareaField(field, currentValue, event) {
    if (event) event.stopPropagation();
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const textarea = document.createElement('textarea');
    textarea.className = 'inline-edit-textarea';
    textarea.value = currentValue;
    
    element.innerHTML = '';
    element.appendChild(textarea);
    element.classList.remove('editable');
    
    setTimeout(() => {
        textarea.focus();
    }, 10);
    
    let saved = false;
    const saveEdit = () => {
        if (saved) return;
        saved = true;
        const newValue = textarea.value.trim();
        if (newValue) {
            currentNPC[field] = newValue;
        }
        isEditing = false;
        displayNPC(currentNPC);
    };
    
    setTimeout(() => {
        textarea.addEventListener('blur', saveEdit);
    }, 100);
    
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            saved = true;
            isEditing = false;
            displayNPC(currentNPC);
        }
    });
}

// Edit single-select field (Race, Class, Occupation, Gender, Alignment)
function editSelectField(field, currentValue, options, event) {
    if (event) event.stopPropagation();
    if (isEditing) return;
    isEditing = true;
    
    const element = document.getElementById(`editable-${field}`);
    if (!element) { isEditing = false; return; }
    
    const select = document.createElement('select');
    select.className = 'inline-edit-select';
    
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.value === currentValue) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    
    element.innerHTML = '';
    element.appendChild(select);
    element.classList.remove('editable');
    
    const finishEdit = () => {
        if (!isEditing) return;
        // Save the current value
        const newValue = select.value;
        if (newValue !== currentValue) {
            updateNPCField(field, newValue);
        }
        isEditing = false;
        displayNPC(currentNPC);
    };
    
    // Only close on blur (when clicking outside)
    select.addEventListener('blur', finishEdit);
    
    select.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            isEditing = false;
            displayNPC(currentNPC);
        } else if (e.key === 'Enter') {
            finishEdit();
        }
    });
    
    // Focus the select
    select.focus();
}

// Update NPC field with recalculations if needed
function updateNPCField(field, newValue) {
    currentNPC[field] = newValue;
    
    // Recalculate dependent fields
    if (field === 'race') {
        const raceData = races[newValue];
        if (raceData) {
            currentNPC.size = raceData.size;
            currentNPC.speed = raceData.speed;
        }
    }
    
    if (field === 'npcClass') {
        const classData = classes[newValue];
        if (classData) {
            currentNPC.hitDie = classData.hitDie;
            currentNPC.savingThrows = classData.savingThrows || [];
            // Recalculate HP
            const hitDieMap = { 'd4': 4, 'd6': 6, 'd8': 8, 'd10': 10, 'd12': 12 };
            const hitDieMax = hitDieMap[classData.hitDie] || 4;
            currentNPC.hitPoints = hitDieMax + currentNPC.modifiers.con;
        }
    }
    
    if (field === 'occupation') {
        const occData = occupations[newValue];
        if (occData && !lockStates.equipment) {
            currentNPC.equipment = occData.equipment || [];
        }
    }
    
    // Regenerate backstory if not locked
    regenerateBackstoryIfNeeded();
}

// Regenerate backstory if not locked
function regenerateBackstoryIfNeeded() {
    if (!currentNPC || lockStates.backstory) return;
    
    currentNPC.backstory = generateBackstory(
        currentNPC.name,
        currentNPC.race,
        currentNPC.occupation,
        currentNPC.age,
        currentNPC.alignment,
        currentNPC.ageCategory,
        currentNPC.gender,
        currentNPC.characterClasses
    );
}

// Get options for select fields
function getRaceOptions() {
    return Object.keys(races).map(r => ({
        value: r,
        label: capitalize(r)
    })).sort((a, b) => a.label.localeCompare(b.label));
}

function getClassOptions() {
    return Object.keys(classes).map(c => ({
        value: c,
        label: capitalize(c)
    })).sort((a, b) => a.label.localeCompare(b.label));
}

function getOccupationOptions() {
    // Filter out auto-assigned occupations (infant, adventurer)
    return Object.keys(occupations)
        .filter(o => o !== 'infant' && o !== 'adventurer')
        .map(o => ({
            value: o,
            label: o.replace(/_/g, ' ').split(' ').map(w => capitalize(w)).join(' ')
        })).sort((a, b) => a.label.localeCompare(b.label));
}

function getGenderOptions() {
    return [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'non-binary', label: 'Non-Binary' }
    ];
}

function getAlignmentOptions() {
    return alignments.map(a => ({
        value: a,
        label: capitalize(a)
    }));
}

// ============================================
// MODAL FUNCTIONS FOR MULTI-SELECT
// ============================================

let currentModalField = null;
let currentModalSelections = [];
let currentMaxSkills = 0;
let currentLockedSkills = [];

// Get skills that are locked (granted by race/class and cannot be unselected)
function getLockedSkills() {
    if (!currentNPC) return [];
    
    let locked = [];
    
    // Add class skills (from all classes)
    if (currentNPC.characterClasses) {
        currentNPC.characterClasses.forEach(cc => {
            const classData = classes[cc.className];
            if (classData && classData.skills) {
                locked = [...locked, ...classData.skills];
            }
        });
    }
    
    // Add racial trait skills (only traits that grant SPECIFIC skills, not choices)
    const raceData = races[currentNPC.race];
    if (raceData && raceData.traits) {
        raceData.traits.forEach(trait => {
            // Keen Senses (Elf variants) → Perception
            if (trait.includes('Keen Senses')) {
                locked.push('Perception');
            }
            // Menacing (Half-Orc) → Intimidation
            if (trait.includes('Menacing')) {
                locked.push('Intimidation');
            }
            // Kender Ace → Sleight of Hand
            if (trait.includes('Kender Ace')) {
                locked.push('Sleight of Hand');
            }
            // Silent Feathers (Owlin) → Stealth
            if (trait.includes('Silent Feathers')) {
                locked.push('Stealth');
            }
            // Cat's Talent (Tabaxi) → Perception + Stealth
            if (trait.includes('Cat\'s Talent')) {
                locked.push('Perception', 'Stealth');
            }
            // Observant & Athletic (Locathah) → Athletics + Perception
            if (trait.includes('Observant & Athletic')) {
                locked.push('Athletics', 'Perception');
            }
            // Reveler (Satyr) → Performance + Persuasion
            if (trait.includes('Reveler')) {
                locked.push('Performance', 'Persuasion');
            }
            // Note: Hunter's Instincts, Primal Intuition, Kenku Training, Skill Versatility, 
            // Extra Skill, Specialized Design grant CHOICES, so they're not locked to specific skills
        });
    }
    
    // Add occupation skills
    const occData = occupations[currentNPC.occupation];
    if (occData && occData.skills) {
        locked = [...locked, ...occData.skills];
    }
    
    return [...new Set(locked)]; // Remove duplicates
}

// Calculate maximum allowed skill proficiencies
function getMaxSkillProficiencies() {
    if (!currentNPC || !currentNPC.characterClasses) return 2;
    
    let maxSkills = 0;
    
    // Get skill choices from primary class only (first in list)
    const primaryClass = currentNPC.characterClasses[0];
    if (primaryClass && classes[primaryClass.className]) {
        maxSkills = classes[primaryClass.className].skillChoices || 2;
    }
    
    // Add racial skill bonuses based on traits
    const raceData = races[currentNPC.race];
    if (raceData && raceData.traits) {
        raceData.traits.forEach(trait => {
            // Traits that grant 2 skill proficiencies
            if (trait.includes('Skill Versatility') ||     // Half-Elf: 2 skills of choice
                trait.includes('Kenku Training') ||        // Kenku: 2 from Acrobatics/Deception/Stealth/Sleight of Hand
                trait.includes('Cat\'s Talent') ||         // Tabaxi: Perception + Stealth
                trait.includes('Hunter\'s Instincts') ||   // Leonin: choice from Athletics/Intimidation/Perception/Survival
                trait.includes('Primal Intuition') ||      // Orc: 2 from Animal Handling/Insight/Intimidation/Medicine/Nature/Perception/Survival
                trait.includes('Observant & Athletic') ||  // Locathah: Athletics + Perception
                trait.includes('Reveler')) {               // Satyr: Performance + Persuasion
                maxSkills += 2;
            }
            // Traits that grant 1 skill proficiency
            else if (trait.includes('Keen Senses') ||      // Elf/variants: Perception
                trait.includes('Menacing') ||              // Half-Orc: Intimidation
                trait.includes('Kender Ace') ||            // Kender: Sleight of Hand
                trait.includes('Silent Feathers') ||       // Owlin: Stealth
                trait.includes('Extra Skill') ||           // Human: 1 skill of choice
                trait.includes('Specialized Design')) {    // Warforged/Autognome: 1 skill of choice
                maxSkills += 1;
            }
        });
    }
    
    return maxSkills;
}

// Update the skill count display
function updateSkillCountDisplay() {
    const warningDiv = document.getElementById('skillCountWarning');
    const countText = document.getElementById('skillCountText');
    
    if (currentModalField !== 'skills' || !warningDiv) {
        warningDiv.style.display = 'none';
        return;
    }
    
    const selected = currentModalSelections.length;
    const locked = currentLockedSkills.length;
    const max = currentMaxSkills;
    
    warningDiv.style.display = 'flex';
    
    if (selected <= max) {
        warningDiv.className = 'skill-count-warning ok';
        const lockedNote = locked > 0 ? ` (${locked} from race/class/occupation)` : '';
        countText.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${selected} of ${max} proficiencies selected${lockedNote}`;
    } else {
        warningDiv.className = 'skill-count-warning error';
        const lockedNote = locked > 0 ? ` (${locked} locked)` : '';
        countText.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${selected} selected — exceeds limit of ${max}${lockedNote}`;
    }
}

// ============================================
// LEVEL UP MODAL FUNCTIONS
// ============================================

let levelUpState = {
    totalPoints: 0,
    pointsSpent: 0,
    abilityIncreases: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    selectedFeats: [],
    baseAbilities: {},
    npcData: null
};

function openLevelUpModal(npcData) {
    levelUpState.npcData = npcData || currentNPC;
    if (!levelUpState.npcData) return;
    
    // Calculate total points: each ASI = 2 points
    const totalASIs = countASIsEarned(levelUpState.npcData.characterClasses || []);
    levelUpState.totalPoints = totalASIs * 2;
    levelUpState.pointsSpent = 0;
    levelUpState.abilityIncreases = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    levelUpState.selectedFeats = [];
    levelUpState.baseAbilities = { ...levelUpState.npcData.abilities };
    
    // Check for bonus feat eligibility (variant human/custom lineage)
    const raceKey = levelUpState.npcData.race.toLowerCase();
    const canHaveBonusFeat = raceKey === 'human' || ['reborn', 'hexblood', 'dhampir'].includes(raceKey);
    levelUpState.canHaveBonusFeat = canHaveBonusFeat;
    levelUpState.bonusFeatUsed = false;
    
    renderLevelUpModal();
    
    const modal = document.getElementById('levelUpModal');
    modal.classList.add('active');
}

function renderLevelUpModal() {
    updateLevelUpPointsDisplay();
    renderLevelUpAbilities();
    renderLevelUpFeats();
}

function updateLevelUpPointsDisplay() {
    const display = document.getElementById('levelUpPointsDisplay');
    const remaining = levelUpState.totalPoints - levelUpState.pointsSpent;
    
    let bonusFeatText = '';
    if (levelUpState.canHaveBonusFeat && !levelUpState.bonusFeatUsed) {
        bonusFeatText = ' <span style="font-size: 0.8em; opacity: 0.9;">(+1 free feat available)</span>';
    }
    
    display.innerHTML = `
        <div>
            <div class="points-label">Level Up Points${bonusFeatText}</div>
            <div style="font-size: 0.85em; opacity: 0.8;">Each ASI grants 2 points • Feats cost 2 points • Ability +1 costs 1 point</div>
        </div>
        <div class="points-remaining">${remaining} / ${levelUpState.totalPoints}</div>
    `;
}

function renderLevelUpAbilities() {
    const container = document.getElementById('levelUpAbilities');
    const abilityNames = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };
    const remaining = levelUpState.totalPoints - levelUpState.pointsSpent;
    
    // Calculate feat bonuses for each ability
    const featBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    levelUpState.selectedFeats.forEach(featEntry => {
        if (featEntry.abilityChoice) {
            const feat = feats[featEntry.id];
            if (feat && feat.abilityBonus) {
                featBonuses[featEntry.abilityChoice] += feat.abilityBonus.amount;
            }
        }
    });
    
    let html = '';
    
    Object.entries(abilityNames).forEach(([key, name]) => {
        const baseScore = levelUpState.baseAbilities[key];
        const increase = levelUpState.abilityIncreases[key];
        const featBonus = featBonuses[key];
        const currentScore = Math.min(20, baseScore + increase + featBonus); // Cap at 20
        const modifier = Math.floor((currentScore - 10) / 2);
        const modStr = modifier >= 0 ? `+${modifier}` : `${modifier}`;
        
        const canIncrease = currentScore < 20 && remaining >= 1;
        const canDecrease = increase > 0;
        
        // Show breakdown of increases
        let increaseText = '';
        if (increase > 0 && featBonus > 0) {
            increaseText = `+${increase} / +${featBonus}★`;
        } else if (increase > 0) {
            increaseText = `+${increase}`;
        } else if (featBonus > 0) {
            increaseText = `+${featBonus}★`;
        }
        
        html += `
            <div class="level-up-ability">
                <div class="level-up-ability-info">
                    <span class="level-up-ability-name">${name.substring(0, 3)}</span>
                    <span class="level-up-ability-score">${currentScore}</span>
                    <span class="level-up-ability-mod">(${modStr})</span>
                </div>
                <div class="level-up-ability-controls">
                    <button class="level-up-ability-btn minus" onclick="decreaseAbility('${key}')" ${!canDecrease ? 'disabled' : ''}>
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <span class="level-up-ability-increase" title="${featBonus > 0 ? '★ = from feat' : ''}">${increaseText}</span>
                    <button class="level-up-ability-btn plus" onclick="increaseAbility('${key}')" ${!canIncrease ? 'disabled' : ''}>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function increaseAbility(ability) {
    const remaining = levelUpState.totalPoints - levelUpState.pointsSpent;
    
    // Calculate feat bonuses for this ability
    let featBonus = 0;
    levelUpState.selectedFeats.forEach(featEntry => {
        if (featEntry.abilityChoice === ability) {
            const feat = feats[featEntry.id];
            if (feat && feat.abilityBonus) {
                featBonus += feat.abilityBonus.amount;
            }
        }
    });
    
    const currentScore = levelUpState.baseAbilities[ability] + levelUpState.abilityIncreases[ability] + featBonus;
    
    if (remaining >= 1 && currentScore < 20) {
        levelUpState.abilityIncreases[ability]++;
        levelUpState.pointsSpent++;
        renderLevelUpModal();
    }
}

function decreaseAbility(ability) {
    if (levelUpState.abilityIncreases[ability] > 0) {
        levelUpState.abilityIncreases[ability]--;
        levelUpState.pointsSpent--;
        renderLevelUpModal();
    }
}

function renderLevelUpFeats() {
    const abilityNames = { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' };
    
    // Render selected feats
    const selectedContainer = document.getElementById('levelUpFeatsSelected');
    if (levelUpState.selectedFeats.length > 0) {
        selectedContainer.innerHTML = levelUpState.selectedFeats.map((featEntry, index) => {
            const feat = feats[featEntry.id];
            const isBonusFeat = levelUpState.canHaveBonusFeat && index === 0 && levelUpState.bonusFeatUsed;
            const abilityText = featEntry.abilityChoice ? ` (+1 ${abilityNames[featEntry.abilityChoice]})` : '';
            return `
                <span class="level-up-feat-selected-tag ${isBonusFeat ? 'bonus-feat' : ''}">
                    ${feat.name}${abilityText}${isBonusFeat ? ' (Free)' : ''}
                    <span class="remove-feat" onclick="removeLevelUpFeat('${featEntry.id}')"><i class="fa-solid fa-xmark"></i></span>
                </span>
            `;
        }).join('');
    } else {
        selectedContainer.innerHTML = '<div style="color: #999; font-style: italic; padding: 5px;">No feats selected</div>';
    }
    
    // Render feat list
    const listContainer = document.getElementById('levelUpFeatsList');
    const searchTerm = (document.getElementById('levelUpFeatSearch')?.value || '').toLowerCase();
    const filterValue = document.getElementById('levelUpFeatFilter')?.value || 'eligible';
    
    const remaining = levelUpState.totalPoints - levelUpState.pointsSpent;
    const canAffordFeat = remaining >= 2;
    const canUseBonusFeat = levelUpState.canHaveBonusFeat && !levelUpState.bonusFeatUsed;
    
    // Build current abilities for prereq checking (including feat bonuses)
    const currentAbilities = {};
    const featBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    levelUpState.selectedFeats.forEach(featEntry => {
        if (featEntry.abilityChoice) {
            const feat = feats[featEntry.id];
            if (feat && feat.abilityBonus) {
                featBonuses[featEntry.abilityChoice] += feat.abilityBonus.amount;
            }
        }
    });
    Object.keys(levelUpState.baseAbilities).forEach(key => {
        currentAbilities[key] = levelUpState.baseAbilities[key] + levelUpState.abilityIncreases[key] + featBonuses[key];
    });
    
    // Get list of already selected feat IDs
    const selectedFeatIds = levelUpState.selectedFeats.map(f => f.id);
    
    // Filter feats
    const filteredFeats = Object.entries(feats).filter(([featId, feat]) => {
        // Skip already selected
        if (selectedFeatIds.includes(featId)) return false;
        
        // Search filter
        if (searchTerm && !feat.name.toLowerCase().includes(searchTerm) && 
            !feat.description.toLowerCase().includes(searchTerm)) {
            return false;
        }
        
        // Prerequisite filter
        if (filterValue === 'eligible') {
            const eligible = meetsPrerequisites(feat, levelUpState.npcData.race, currentAbilities, 
                levelUpState.npcData.characterClasses || [], selectedFeatIds);
            if (!eligible) return false;
        }
        
        return true;
    }).sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    if (filteredFeats.length === 0) {
        listContainer.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">No feats match your criteria</div>';
        return;
    }
    
    listContainer.innerHTML = filteredFeats.map(([featId, feat]) => {
        const eligible = meetsPrerequisites(feat, levelUpState.npcData.race, currentAbilities, 
            levelUpState.npcData.characterClasses || [], levelUpState.selectedFeats);
        const canSelect = eligible && (canAffordFeat || canUseBonusFeat);
        
        const abilityBonus = feat.abilityBonus ? 
            `<span class="level-up-feat-ability">+${feat.abilityBonus.amount} ${feat.abilityBonus.choice.map(a => a.toUpperCase()).join('/')}</span>` : '';
        
        // Build full tooltip with description and benefits
        const benefitsText = feat.benefits ? feat.benefits.join(' • ') : '';
        const tooltipText = (feat.description + (benefitsText ? '\n\nBenefits: ' + benefitsText : '')).replace(/"/g, '&quot;');
        
        return `
            <div class="level-up-feat-item ${!canSelect ? 'ineligible' : ''}" 
                 onclick="${canSelect ? `addLevelUpFeat('${featId}')` : ''}"
                 title="${tooltipText}">
                <div>
                    <span class="level-up-feat-name">${feat.name}</span>
                    <span class="level-up-feat-source">${feat.source}</span>
                    <span class="level-up-feat-cost">${canUseBonusFeat && eligible ? 'Free or 2 pts' : '2 pts'}</span>
                </div>
                <div class="level-up-feat-desc">${feat.description.substring(0, 100)}${feat.description.length > 100 ? '...' : ''}</div>
                ${abilityBonus}
            </div>
        `;
    }).join('');
}

function addLevelUpFeat(featId) {
    const remaining = levelUpState.totalPoints - levelUpState.pointsSpent;
    const canUseBonusFeat = levelUpState.canHaveBonusFeat && !levelUpState.bonusFeatUsed;
    
    if (levelUpState.selectedFeats.some(f => f.id === featId)) return;
    
    const feat = feats[featId];
    if (!feat) return;
    
    // Check if feat has ability bonus that requires a choice
    if (feat.abilityBonus && feat.abilityBonus.choice && feat.abilityBonus.choice.length > 1) {
        // Prompt user to choose which ability to increase
        openFeatAbilityChoiceModal(featId, feat, canUseBonusFeat && levelUpState.selectedFeats.length === 0);
        return;
    }
    
    // Single ability or no ability bonus - add directly
    const featEntry = { 
        id: featId, 
        abilityChoice: feat.abilityBonus?.choice?.[0] || null 
    };
    
    // Check if using bonus feat or spending points
    if (canUseBonusFeat && levelUpState.selectedFeats.length === 0) {
        levelUpState.bonusFeatUsed = true;
        levelUpState.selectedFeats.push(featEntry);
    } else if (remaining >= 2) {
        levelUpState.pointsSpent += 2;
        levelUpState.selectedFeats.push(featEntry);
    }
    
    renderLevelUpModal();
}

// Modal to choose which ability to increase for half-feats
function openFeatAbilityChoiceModal(featId, feat, isBonusFeat) {
    const abilityNames = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' };
    
    const modal = document.getElementById('multiSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalOptions');
    const modalFooter = modal ? modal.querySelector('.modal-footer') : null;
    const customInput = modal ? modal.querySelector('.modal-custom-input') : null;
    
    // Hide elements not needed for this modal
    if (customInput) customInput.style.display = 'none';
    
    modalTitle.textContent = `${feat.name} - Choose Ability`;
    
    let html = `
        <div class="feat-ability-choice">
            <p style="margin-bottom: 15px; color: #666;">This feat increases one ability score by ${feat.abilityBonus.amount}. Choose which ability to increase:</p>
            <div class="feat-ability-options">
    `;
    
    feat.abilityBonus.choice.forEach(ability => {
        const currentScore = levelUpState.baseAbilities[ability] + levelUpState.abilityIncreases[ability];
        const canIncrease = currentScore < 20;
        
        html += `
            <button class="feat-ability-option ${!canIncrease ? 'disabled' : ''}" 
                    onclick="${canIncrease ? `confirmFeatAbilityChoice('${featId}', '${ability}', ${isBonusFeat})` : ''}"
                    ${!canIncrease ? 'disabled' : ''}>
                <span class="feat-ability-option-name">${abilityNames[ability]}</span>
                <span class="feat-ability-option-score">${currentScore} → ${currentScore + feat.abilityBonus.amount}</span>
                ${!canIncrease ? '<span class="feat-ability-option-max">(Already 20)</span>' : ''}
            </button>
        `;
    });
    
    html += `
            </div>
            <button class="modal-btn modal-btn-cancel" style="margin-top: 15px;" onclick="closeModal(); renderLevelUpModal();">Cancel</button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    if (modalFooter) modalFooter.style.display = 'none';
    modal.classList.add('active');
}

function confirmFeatAbilityChoice(featId, ability, isBonusFeat) {
    const remaining = levelUpState.totalPoints - levelUpState.pointsSpent;
    
    const featEntry = { id: featId, abilityChoice: ability };
    
    if (isBonusFeat) {
        levelUpState.bonusFeatUsed = true;
        levelUpState.selectedFeats.push(featEntry);
    } else if (remaining >= 2) {
        levelUpState.pointsSpent += 2;
        levelUpState.selectedFeats.push(featEntry);
    }
    
    closeModal();
    renderLevelUpModal();
}

function removeLevelUpFeat(featId) {
    const index = levelUpState.selectedFeats.findIndex(f => f.id === featId);
    if (index === -1) return;
    
    // Check if this was the bonus feat
    if (levelUpState.canHaveBonusFeat && index === 0 && levelUpState.bonusFeatUsed) {
        levelUpState.bonusFeatUsed = false;
    } else {
        // Refund the 2 points
        levelUpState.pointsSpent -= 2;
    }
    
    levelUpState.selectedFeats.splice(index, 1);
    renderLevelUpModal();
}

function filterLevelUpFeats() {
    renderLevelUpFeats();
}

function closeLevelUpModal() {
    const modal = document.getElementById('levelUpModal');
    modal.classList.remove('active');
    levelUpState = {
        totalPoints: 0,
        pointsSpent: 0,
        abilityIncreases: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
        selectedFeats: [],
        baseAbilities: {},
        npcData: null
    };
}

function saveLevelUpChoices() {
    if (!levelUpState.npcData) {
        closeLevelUpModal();
        return;
    }
    
    // Apply ability increases from points spent
    Object.keys(levelUpState.abilityIncreases).forEach(ability => {
        levelUpState.npcData.abilities[ability] += levelUpState.abilityIncreases[ability];
    });
    
    // Apply ability increases from feats
    levelUpState.selectedFeats.forEach(featEntry => {
        if (featEntry.abilityChoice) {
            const feat = feats[featEntry.id];
            if (feat && feat.abilityBonus) {
                levelUpState.npcData.abilities[featEntry.abilityChoice] += feat.abilityBonus.amount;
                // Cap at 20
                levelUpState.npcData.abilities[featEntry.abilityChoice] = Math.min(20, levelUpState.npcData.abilities[featEntry.abilityChoice]);
            }
        }
    });
    
    // Recalculate all modifiers
    Object.keys(levelUpState.npcData.abilities).forEach(ability => {
        levelUpState.npcData.modifiers[ability] = getModifier(levelUpState.npcData.abilities[ability]);
    });
    
    // Store feats as just IDs for display (with ability choices stored separately)
    levelUpState.npcData.feats = levelUpState.selectedFeats.map(f => f.id);
    levelUpState.npcData.featChoices = levelUpState.selectedFeats; // Keep full info for reference
    levelUpState.npcData.bonusFeat = levelUpState.bonusFeatUsed;
    
    // Calculate ASIs taken (points not spent on feats / 2, rounded)
    const pointsOnAbilities = levelUpState.pointsSpent - (levelUpState.selectedFeats.length - (levelUpState.bonusFeatUsed ? 1 : 0)) * 2;
    levelUpState.npcData.asisTaken = Math.floor(pointsOnAbilities / 2);
    
    // Clear the pending flag - choices have been made
    levelUpState.npcData.pendingLevelUpChoice = false;
    
    // Recalculate derived stats
    recalculateDerivedStats(levelUpState.npcData);
    
    // Update display
    displayNPC(levelUpState.npcData);
    closeLevelUpModal();
}

// Recalculate stats that depend on abilities/modifiers
function recalculateDerivedStats(npc) {
    // Recalculate initiative
    npc.initiative = npc.modifiers.dex;
    
    // Recalculate passive perception
    const hasPerception = npc.skills?.includes('Perception');
    npc.passivePerception = 10 + npc.modifiers.wis + (hasPerception ? npc.proficiencyBonus : 0);
    
    // Recalculate HP if CON changed
    // This is simplified - full recalc would need class hit dice info
    
    // Recalculate AC for unarmored classes
    const primaryClass = npc.characterClasses?.[0]?.className;
    if (primaryClass === 'barbarian') {
        npc.ac = 10 + npc.modifiers.dex + npc.modifiers.con;
        npc.acSource = 'Unarmored Defense';
    } else if (primaryClass === 'monk') {
        npc.ac = 10 + npc.modifiers.dex + npc.modifiers.wis;
        npc.acSource = 'Unarmored Defense';
    }
    
    // Update weapon attack/damage bonuses
    if (npc.weapons) {
        npc.weapons = npc.weapons.map(weapon => ({
            ...weapon,
            attackBonus: calculateAttackBonus(weapon, npc.modifiers, npc.proficiencyBonus, weapon.isProficient),
            damageBonus: calculateDamageBonus(weapon, npc.modifiers)
        }));
    }
    
    // Update spell save DC and attack bonus if spellcaster
    if (npc.spellData) {
        const spellAbility = npc.spellData.ability;
        npc.spellData.saveDC = 8 + npc.proficiencyBonus + npc.modifiers[spellAbility];
        npc.spellData.attackBonus = npc.proficiencyBonus + npc.modifiers[spellAbility];
    }
}

// ============================================
// FEAT MODAL FUNCTIONS
// ============================================

let currentFeatSelections = [];
let maxFeatsAllowed = 0;

function openFeatModal() {
    if (!currentNPC) return;
    
    // Get current selections
    currentFeatSelections = currentNPC.feats ? [...currentNPC.feats] : [];
    
    // Calculate max feats allowed
    const totalASIs = countASIsEarned(currentNPC.characterClasses || []);
    const hasBonusFeat = currentNPC.bonusFeat || false;
    maxFeatsAllowed = totalASIs + (hasBonusFeat ? 1 : 0);
    
    // If no ASIs and no bonus feat possible, allow at least 1 for manual selection
    if (maxFeatsAllowed === 0) {
        // Check if variant human/custom lineage eligible
        const raceKey = currentNPC.race.toLowerCase();
        if (raceKey === 'human' || ['reborn', 'hexblood', 'dhampir'].includes(raceKey)) {
            maxFeatsAllowed = 1;
        }
    }
    
    renderFeatModalOptions();
    
    const modal = document.getElementById('featSelectModal');
    modal.classList.add('active');
    updateFeatLimitWarning();
}

function renderFeatModalOptions() {
    const modalOptions = document.getElementById('featModalOptions');
    const searchTerm = (document.getElementById('featSearchInput')?.value || '').toLowerCase();
    const sourceFilter = document.getElementById('featSourceFilter')?.value || 'all';
    const prereqFilter = document.getElementById('featPrereqFilter')?.value || 'eligible';
    
    // Get all feats
    const allFeats = Object.entries(feats);
    
    // Filter and sort feats
    const filteredFeats = allFeats.filter(([featId, feat]) => {
        // Search filter
        if (searchTerm && !feat.name.toLowerCase().includes(searchTerm) && 
            !feat.description.toLowerCase().includes(searchTerm)) {
            return false;
        }
        
        // Source filter
        if (sourceFilter !== 'all') {
            if (sourceFilter === 'other') {
                if (['PHB', 'TCoE', 'XGtE'].includes(feat.source)) return false;
            } else {
                if (feat.source !== sourceFilter) return false;
            }
        }
        
        // Prerequisite filter
        if (prereqFilter === 'eligible') {
            const eligible = meetsPrerequisites(feat, currentNPC.race, currentNPC.abilities, 
                currentNPC.characterClasses || [], currentFeatSelections.filter(f => f !== featId));
            if (!eligible) return false;
        }
        
        return true;
    }).sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    // Build options HTML
    let optionsHtml = '';
    
    if (filteredFeats.length === 0) {
        optionsHtml = '<div style="text-align: center; color: #666; padding: 20px;">No feats match your filters</div>';
    } else {
        filteredFeats.forEach(([featId, feat]) => {
            const isSelected = currentFeatSelections.includes(featId);
            const eligible = meetsPrerequisites(feat, currentNPC.race, currentNPC.abilities, 
                currentNPC.characterClasses || [], currentFeatSelections.filter(f => f !== featId));
            
            // Build prerequisite string
            let prereqStr = '';
            if (feat.prerequisites) {
                const prereqs = [];
                if (feat.prerequisites.ability) {
                    for (const [ab, val] of Object.entries(feat.prerequisites.ability)) {
                        prereqs.push(`${ab.toUpperCase()} ${val}+`);
                    }
                }
                if (feat.prerequisites.race) {
                    prereqs.push(`Race: ${feat.prerequisites.race.join(' or ')}`);
                }
                if (feat.prerequisites.spellcasting) {
                    prereqs.push('Spellcasting');
                }
                if (feat.prerequisites.armorProficiency) {
                    prereqs.push(`${feat.prerequisites.armorProficiency} armor proficiency`);
                }
                if (feat.prerequisites.weaponProficiency) {
                    prereqs.push(`${feat.prerequisites.weaponProficiency} weapon proficiency`);
                }
                if (feat.prerequisites.feat) {
                    const reqFeat = feats[feat.prerequisites.feat];
                    prereqs.push(`Requires: ${reqFeat?.name || feat.prerequisites.feat}`);
                }
                prereqStr = prereqs.join(', ');
            }
            
            // Build benefits string
            const benefits = feat.benefits || [];
            
            // Ability bonus string
            let abilityStr = '';
            if (feat.abilityBonus) {
                abilityStr = `+${feat.abilityBonus.amount} ${feat.abilityBonus.choice.map(a => a.toUpperCase()).join(' or ')}`;
            }
            
            optionsHtml += `
                <div class="feat-option ${isSelected ? 'selected' : ''} ${!eligible ? 'ineligible' : ''}" 
                     onclick="${eligible || isSelected ? `toggleFeatOption(this, '${featId}')` : ''}"
                     data-feat-id="${featId}">
                    <input type="checkbox" class="feat-option-checkbox" ${isSelected ? 'checked' : ''} ${!eligible && !isSelected ? 'disabled' : ''}>
                    <div class="feat-option-content">
                        <div>
                            <span class="feat-option-name">${feat.name}</span>
                            <span class="feat-option-source">${feat.source}</span>
                        </div>
                        ${prereqStr ? `<div class="feat-option-prereq">Requires: ${prereqStr}</div>` : ''}
                        <div class="feat-option-desc">${feat.description.substring(0, 150)}${feat.description.length > 150 ? '...' : ''}</div>
                        ${benefits.length > 0 ? `
                            <div class="feat-option-benefits">
                                ${benefits.slice(0, 3).map(b => `<span class="feat-benefit-tag">${b}</span>`).join('')}
                            </div>
                        ` : ''}
                        ${abilityStr ? `<span class="feat-option-ability">${abilityStr}</span>` : ''}
                    </div>
                </div>
            `;
        });
    }
    
    modalOptions.innerHTML = optionsHtml;
}

function toggleFeatOption(element, featId) {
    const checkbox = element.querySelector('.feat-option-checkbox');
    const isCurrentlySelected = element.classList.contains('selected');
    
    if (isCurrentlySelected) {
        // Deselect
        element.classList.remove('selected');
        checkbox.checked = false;
        currentFeatSelections = currentFeatSelections.filter(f => f !== featId);
    } else {
        // Select
        element.classList.add('selected');
        checkbox.checked = true;
        if (!currentFeatSelections.includes(featId)) {
            currentFeatSelections.push(featId);
        }
    }
    
    updateFeatLimitWarning();
}

function updateFeatLimitWarning() {
    const warning = document.getElementById('featLimitWarning');
    const count = currentFeatSelections.length;
    
    if (count > maxFeatsAllowed && maxFeatsAllowed > 0) {
        warning.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> You have ${count} feats selected but only ${maxFeatsAllowed} ASI slot${maxFeatsAllowed !== 1 ? 's' : ''} available. Extra feats will still be saved.`;
        warning.style.display = 'block';
        warning.style.background = '#f8d7da';
        warning.style.borderColor = '#dc3545';
        warning.style.color = '#721c24';
    } else if (maxFeatsAllowed > 0) {
        warning.innerHTML = `<i class="fa-solid fa-info-circle"></i> Select up to ${maxFeatsAllowed} feat${maxFeatsAllowed !== 1 ? 's' : ''} (${count} selected). You can take feats instead of Ability Score Improvements.`;
        warning.style.display = 'block';
        warning.style.background = '#fff3cd';
        warning.style.borderColor = '#ffc107';
        warning.style.color = '#856404';
    } else {
        warning.innerHTML = `<i class="fa-solid fa-info-circle"></i> This character has no ASI levels yet. You can still add feats manually.`;
        warning.style.display = 'block';
    }
}

function filterFeatList() {
    renderFeatModalOptions();
}

function closeFeatModal() {
    const modal = document.getElementById('featSelectModal');
    modal.classList.remove('active');
    currentFeatSelections = [];
}

function saveFeatSelections() {
    if (currentNPC) {
        currentNPC.feats = [...currentFeatSelections];
        
        // Calculate how many ASIs were used vs feats
        const totalASIs = countASIsEarned(currentNPC.characterClasses || []);
        const numFeats = currentFeatSelections.length;
        
        // Check if first feat could be a bonus feat (variant human/custom lineage)
        const raceKey = currentNPC.race.toLowerCase();
        const couldHaveBonusFeat = raceKey === 'human' || ['reborn', 'hexblood', 'dhampir'].includes(raceKey);
        
        // If they have more feats than ASIs and could have bonus feat, mark it
        if (numFeats > totalASIs && couldHaveBonusFeat) {
            currentNPC.bonusFeat = true;
            currentNPC.asisTaken = Math.max(0, totalASIs - (numFeats - 1));
        } else {
            currentNPC.bonusFeat = false;
            currentNPC.asisTaken = Math.max(0, totalASIs - numFeats);
        }
        
        displayNPC(currentNPC);
    }
    closeFeatModal();
}

// Spell Modal Variables
let currentSpellModalType = null; // 'cantrips' or 'spells'
let currentSpellSelections = [];

function openSpellModal(type) {
    if (!currentNPC || !currentNPC.spellData) return;
    
    currentSpellModalType = type;
    const isCantrips = type === 'cantrips';
    
    // Get current selections
    currentSpellSelections = isCantrips ? [...currentNPC.spellData.cantrips] : [...currentNPC.spellData.spells];
    
    // Get primary class for spell list
    const primaryClass = currentNPC.characterClasses[0];
    let spellClassName = primaryClass.className;
    
    // Handle subclass spellcasters
    if (primaryClass.subclass === 'eldritch-knight') {
        spellClassName = 'wizard';
    } else if (primaryClass.subclass === 'arcane-trickster') {
        spellClassName = 'wizard';
    }
    
    // Get available spells for this class
    const maxLevel = currentNPC.spellData.maxSpellLevel;
    const availableSpells = Object.keys(spells).filter(spellId => {
        const spell = spells[spellId];
        if (!spell.classes.includes(spellClassName)) return false;
        if (isCantrips) return spell.level === 0;
        return spell.level > 0 && spell.level <= maxLevel;
    }).sort((a, b) => {
        const spellA = spells[a];
        const spellB = spells[b];
        if (spellA.level !== spellB.level) return spellA.level - spellB.level;
        return spellA.name.localeCompare(spellB.name);
    });
    
    const modal = document.getElementById('spellSelectModal');
    const modalTitle = document.getElementById('spellModalTitle');
    const modalOptions = document.getElementById('spellModalOptions');
    const maxCount = isCantrips ? currentNPC.spellData.cantripsKnown : currentNPC.spellData.spellsKnownCount;
    
    modalTitle.innerHTML = `<i class="fa-solid fa-hat-wizard"></i> Edit ${isCantrips ? 'Cantrips' : 'Spells'} (${currentSpellSelections.length}/${maxCount})`;
    
    // Build options HTML grouped by level
    let optionsHtml = '';
    const slotLabels = ['Cantrip', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
    let currentLevel = -1;
    
    // Count selected spells per level
    const selectedPerLevel = {};
    currentSpellSelections.forEach(spellId => {
        const spell = spells[spellId];
        if (spell) {
            selectedPerLevel[spell.level] = (selectedPerLevel[spell.level] || 0) + 1;
        }
    });
    
    availableSpells.forEach(spellId => {
        const spell = spells[spellId];
        if (spell.level !== currentLevel) {
            currentLevel = spell.level;
            const selectedCount = selectedPerLevel[currentLevel] || 0;
            optionsHtml += `<div class="spell-modal-level-header" data-level="${currentLevel}">
                ${slotLabels[currentLevel]} Level
                <span class="spell-level-count" id="spell-level-count-${currentLevel}">(${selectedCount} selected)</span>
            </div>`;
        }
        
        const isSelected = currentSpellSelections.includes(spellId);
        optionsHtml += `
            <div class="modal-option ${isSelected ? 'selected' : ''}" data-spell-level="${spell.level}" onclick="toggleSpellOption(this, '${spellId}')" title="${spell.description.substring(0, 300).replace(/"/g, '&quot;')}...">
                <span class="modal-option-checkbox"></span>
                <span>${spell.name}</span>
                <span class="spell-school">${spell.school}</span>
            </div>
        `;
    });
    
    modalOptions.innerHTML = optionsHtml;
    modal.classList.add('active');
    updateSpellModalCount();
}

function toggleSpellOption(element, spellId) {
    element.classList.toggle('selected');
    
    if (element.classList.contains('selected')) {
        if (!currentSpellSelections.includes(spellId)) {
            currentSpellSelections.push(spellId);
        }
    } else {
        currentSpellSelections = currentSpellSelections.filter(s => s !== spellId);
    }
    
    updateSpellModalCount();
}

function updateSpellModalCount() {
    const isCantrips = currentSpellModalType === 'cantrips';
    const maxCount = isCantrips ? currentNPC.spellData.cantripsKnown : currentNPC.spellData.spellsKnownCount;
    const modalTitle = document.getElementById('spellModalTitle');
    const count = currentSpellSelections.length;
    
    let statusClass = count <= maxCount ? 'ok' : 'over';
    modalTitle.innerHTML = `<i class="fa-solid fa-hat-wizard"></i> Edit ${isCantrips ? 'Cantrips' : 'Spells'} <span class="spell-count-${statusClass}">(${count}/${maxCount})</span>`;
    
    // Update per-level counts
    const selectedPerLevel = {};
    currentSpellSelections.forEach(spellId => {
        const spell = spells[spellId];
        if (spell) {
            selectedPerLevel[spell.level] = (selectedPerLevel[spell.level] || 0) + 1;
        }
    });
    
    // Update all level count displays
    for (let level = 0; level <= 9; level++) {
        const countEl = document.getElementById(`spell-level-count-${level}`);
        if (countEl) {
            const selectedCount = selectedPerLevel[level] || 0;
            countEl.textContent = `(${selectedCount} selected)`;
            countEl.className = selectedCount > 0 ? 'spell-level-count has-selections' : 'spell-level-count';
        }
    }
}

function closeSpellModal() {
    const modal = document.getElementById('spellSelectModal');
    modal.classList.remove('active');
    currentSpellModalType = null;
    currentSpellSelections = [];
}

function clearAllSpells() {
    currentSpellSelections = [];
    // Uncheck all checkboxes in the modal
    const checkboxes = document.querySelectorAll('#spellModalOptions input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    updateSpellModalCount();
}

function clearAllSpellsFromSection() {
    if (!currentNPC || !currentNPC.spellData) return;
    
    // Clear both cantrips and spells
    currentNPC.spellData.cantrips = [];
    currentNPC.spellData.spells = [];
    
    // Re-display the NPC to update the UI
    displayNPC(currentNPC);
}

function saveSpellSelections() {
    if (currentSpellModalType && currentNPC && currentNPC.spellData) {
        if (currentSpellModalType === 'cantrips') {
            currentNPC.spellData.cantrips = [...currentSpellSelections];
        } else {
            currentNPC.spellData.spells = [...currentSpellSelections];
        }
        displayNPC(currentNPC);
    }
    closeSpellModal();
}

// ============================================
// WEAPON MODAL FUNCTIONS
// ============================================

let selectedWeaponId = null;
let currentWeaponModifierIndex = null;

function openWeaponModal() {
    if (!currentNPC) return;
    
    selectedWeaponId = null;
    document.getElementById('weaponSearchInput').value = '';
    document.getElementById('weaponTypeFilter').value = 'all';
    document.getElementById('weaponCategoryFilter').value = 'all';
    document.getElementById('weaponModifierSelect').value = '0';
    
    renderWeaponList();
    
    const modal = document.getElementById('weaponSelectModal');
    modal.classList.add('active');
}

function renderWeaponList() {
    const searchTerm = document.getElementById('weaponSearchInput').value.toLowerCase();
    const typeFilter = document.getElementById('weaponTypeFilter').value;
    const categoryFilter = document.getElementById('weaponCategoryFilter').value;
    
    const container = document.getElementById('weaponModalOptions');
    
    // Filter weapons
    const filteredWeapons = Object.keys(weapons).filter(weaponId => {
        const weapon = weapons[weaponId];
        
        // Search filter
        if (searchTerm && !weapon.name.toLowerCase().includes(searchTerm)) return false;
        
        // Type filter
        if (typeFilter !== 'all' && weapon.type !== typeFilter) return false;
        
        // Category filter
        if (categoryFilter !== 'all' && weapon.category !== categoryFilter) return false;
        
        return true;
    }).sort((a, b) => {
        const weaponA = weapons[a];
        const weaponB = weapons[b];
        // Sort by type, then category, then name
        if (weaponA.type !== weaponB.type) return weaponA.type.localeCompare(weaponB.type);
        if (weaponA.category !== weaponB.category) return weaponA.category.localeCompare(weaponB.category);
        return weaponA.name.localeCompare(weaponB.name);
    });
    
    if (filteredWeapons.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #6c757d; padding: 20px;">No weapons match your filters</div>';
        return;
    }
    
    let html = '';
    filteredWeapons.forEach(weaponId => {
        const weapon = weapons[weaponId];
        const isSelected = selectedWeaponId === weaponId;
        const isProficient = currentNPC ? isWeaponProficient(currentNPC.characterClasses?.[0]?.className || 'commoner', weaponId) : false;
        const profBadge = isProficient ? '<span style="color: #28a745; font-size: 0.75em; margin-left: 5px;">(Proficient)</span>' : '';
        
        html += `
            <div class="weapon-modal-item ${isSelected ? 'selected' : ''}" onclick="selectWeaponInModal('${weaponId}')">
                <div class="weapon-modal-item-info">
                    <div class="weapon-modal-item-name">${weapon.name}${profBadge}</div>
                    <div class="weapon-modal-item-details">${capitalize(weapon.type)} ${weapon.category} • ${weapon.properties.length > 0 ? weapon.properties.join(', ') : 'No special properties'}</div>
                </div>
                <div class="weapon-modal-item-stats">
                    <div>${weapon.damage === '0' || weapon.damage === 'none' || weapon.damageType === 'none' ? '<strong>No Damage</strong>' : `<strong>${weapon.damage}</strong> ${weapon.damageType}`}</div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function filterWeaponList() {
    renderWeaponList();
}

function selectWeaponInModal(weaponId) {
    selectedWeaponId = weaponId;
    renderWeaponList();
}

function addSelectedWeapon() {
    if (!selectedWeaponId || !currentNPC) {
        alert('Please select a weapon first');
        return;
    }
    
    const weapon = weapons[selectedWeaponId];
    const modifier = parseInt(document.getElementById('weaponModifierSelect').value) || 0;
    const profBonus = currentNPC.proficiencyBonus || 2;
    const isProficient = isWeaponProficient(currentNPC.characterClasses?.[0]?.className || 'commoner', selectedWeaponId);
    
    const newWeapon = {
        ...weapon,
        id: selectedWeaponId,
        isProficient: isProficient,
        modifier: modifier,
        attackBonus: calculateAttackBonus(weapon, currentNPC.modifiers, profBonus, isProficient),
        damageBonus: calculateDamageBonus(weapon, currentNPC.modifiers)
    };
    
    if (!currentNPC.weapons) currentNPC.weapons = [];
    currentNPC.weapons.push(newWeapon);
    
    closeWeaponModal();
    displayNPC(currentNPC);
}

function closeWeaponModal() {
    const modal = document.getElementById('weaponSelectModal');
    modal.classList.remove('active');
    selectedWeaponId = null;
}

// Custom Weapon Modal
function openCustomWeaponModal() {
    if (!currentNPC) return;
    
    // Reset form
    document.getElementById('customWeaponName').value = '';
    document.getElementById('customWeaponDamage').value = '';
    document.getElementById('customWeaponDamageType').value = 'slashing';
    document.getElementById('customWeaponCategory').value = 'melee';
    document.getElementById('customWeaponAbility').value = 'str';
    document.getElementById('customWeaponModifier').value = '0';
    document.getElementById('customWeaponProperties').value = '';
    document.getElementById('customWeaponDescription').value = '';
    
    const modal = document.getElementById('customWeaponModal');
    modal.classList.add('active');
}

function closeCustomWeaponModal() {
    const modal = document.getElementById('customWeaponModal');
    modal.classList.remove('active');
}

function addCustomWeapon() {
    const name = document.getElementById('customWeaponName').value.trim();
    const damage = document.getElementById('customWeaponDamage').value.trim();
    const damageType = document.getElementById('customWeaponDamageType').value;
    const category = document.getElementById('customWeaponCategory').value;
    const ability = document.getElementById('customWeaponAbility').value;
    const modifier = parseInt(document.getElementById('customWeaponModifier').value) || 0;
    const propertiesStr = document.getElementById('customWeaponProperties').value.trim();
    const description = document.getElementById('customWeaponDescription').value.trim();
    
    if (!name || !damage) {
        alert('Please enter at least a weapon name and damage');
        return;
    }
    
    const properties = propertiesStr ? propertiesStr.split(',').map(p => p.trim()).filter(p => p) : [];
    if (ability === 'finesse' && !properties.includes('finesse')) {
        properties.push('finesse');
    }
    
    const profBonus = currentNPC.proficiencyBonus || 2;
    
    // Calculate attack bonus based on ability
    let attackBonus;
    if (ability === 'finesse') {
        attackBonus = Math.max(currentNPC.modifiers.str, currentNPC.modifiers.dex) + profBonus;
    } else if (ability === 'dex' || category === 'ranged') {
        attackBonus = currentNPC.modifiers.dex + profBonus;
    } else {
        attackBonus = currentNPC.modifiers.str + profBonus;
    }
    
    // Calculate damage bonus
    let damageBonus;
    if (ability === 'finesse') {
        damageBonus = Math.max(currentNPC.modifiers.str, currentNPC.modifiers.dex);
    } else if (ability === 'dex' || category === 'ranged') {
        damageBonus = currentNPC.modifiers.dex;
    } else {
        damageBonus = currentNPC.modifiers.str;
    }
    
    const newWeapon = {
        id: 'custom-' + Date.now(),
        name: name,
        type: 'custom',
        category: category,
        damage: damage,
        damageType: damageType,
        properties: properties,
        description: description || 'A custom weapon.',
        isProficient: true,
        modifier: modifier,
        attackBonus: attackBonus,
        damageBonus: damageBonus
    };
    
    if (!currentNPC.weapons) currentNPC.weapons = [];
    currentNPC.weapons.push(newWeapon);
    
    closeCustomWeaponModal();
    displayNPC(currentNPC);
}

// Weapon Modifier Modal
function setWeaponModifier(index) {
    if (!currentNPC || !currentNPC.weapons || !currentNPC.weapons[index]) return;
    
    currentWeaponModifierIndex = index;
    const weapon = currentNPC.weapons[index];
    
    document.getElementById('weaponModifierName').textContent = weapon.name;
    document.getElementById('weaponModifierValue').value = weapon.modifier || 0;
    
    const modal = document.getElementById('weaponModifierModal');
    modal.classList.add('active');
}

function closeWeaponModifierModal() {
    const modal = document.getElementById('weaponModifierModal');
    modal.classList.remove('active');
    currentWeaponModifierIndex = null;
}

function saveWeaponModifier() {
    if (currentWeaponModifierIndex === null || !currentNPC || !currentNPC.weapons) return;
    
    const modifier = parseInt(document.getElementById('weaponModifierValue').value) || 0;
    currentNPC.weapons[currentWeaponModifierIndex].modifier = modifier;
    
    closeWeaponModifierModal();
    displayNPC(currentNPC);
}

// Remove Weapon
function removeWeapon(index) {
    if (!currentNPC || !currentNPC.weapons) return;
    
    currentNPC.weapons.splice(index, 1);
    displayNPC(currentNPC);
}

// Background selection modal - allows changing the background after generation
function openBackgroundSelectModal() {
    const modal = document.getElementById('multiSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalOptions = document.getElementById('modalOptions');
    
    modalTitle.textContent = 'Select Background';
    
    // Build options HTML grouped by source
    const sourceGroups = {
        "Player's Handbook": ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folkhero', 'guildartisan', 'hermit', 'noble', 'outlander', 'sage', 'sailor', 'soldier', 'urchin'],
        "Sword Coast Adv. Guide": ['citywatch', 'clancrafter', 'cloisteredscholar', 'courtier', 'factionagent', 'fartraveler', 'inheritor', 'knightoftheorder', 'mercenaryveteran', 'urbanbountyhunter', 'uthgardttribemember', 'waterdhaviannoble'],
        "Ravnica": ['azoriusfunctionary', 'boroslegionnaire', 'dimiroperative', 'golgariagent', 'gruulanarch', 'izzetengineer', 'orzhovrepresentative', 'rakdoscultist', 'selesnyainitiate', 'simicscientist'],
        "Wildemount": ['grinner', 'volstruckeragent'],
        "Theros": ['athlete'],
        "Ravenloft": ['hauntedone', 'investigator'],
        "Strixhaven": ['loreholdstudent', 'prismaristudent', 'quandrixstudent', 'silverquillstudent', 'witherbloomstudent'],
        "Acquisitions Inc.": ['celebrityadventurersscion', 'failedmerchant', 'gambler', 'plaintiff', 'rivalintern']
    };
    
    let optionsHtml = '';
    
    // Custom option at the top
    const isCustom = currentNPC && currentNPC.background === 'custom';
    optionsHtml += `
        <div class="modal-option ${isCustom ? 'selected' : ''}" 
             style="padding: 10px 12px; cursor: pointer; border-radius: 4px; margin: 2px 0; background: ${isCustom ? '#e8dcc8' : '#f5f0e6'}; border: 1px dashed #58180d;"
             onmouseover="this.style.backgroundColor='#f0e8d8'"
             onmouseout="this.style.backgroundColor='${isCustom ? '#e8dcc8' : '#f5f0e6'}'"
             onclick="selectNewBackground('custom')">
            <strong><i class="fa-solid fa-pen"></i> Custom Background</strong>
            <div style="font-size: 0.85em; color: #666; margin-top: 2px;">
                Create your own traits, ideals, bonds, and flaws
            </div>
        </div>
    `;
    optionsHtml += `<div style="border-bottom: 2px solid #58180d; margin: 15px 0;"></div>`;
    
    for (const [source, bgKeys] of Object.entries(sourceGroups)) {
        optionsHtml += `<div style="font-weight: bold; margin-top: 10px; margin-bottom: 5px; color: #58180d; border-bottom: 1px solid #ddd; padding-bottom: 3px;">${source}</div>`;
        bgKeys.forEach(key => {
            const bg = backgrounds[key];
            if (bg) {
                const isSelected = currentNPC && currentNPC.background === key;
                optionsHtml += `
                    <div class="modal-option ${isSelected ? 'selected' : ''}" 
                         style="padding: 8px 12px; cursor: pointer; border-radius: 4px; margin: 2px 0;"
                         onmouseover="this.style.backgroundColor='#f0e8d8'"
                         onmouseout="this.style.backgroundColor='${isSelected ? '#e8dcc8' : 'transparent'}'"
                         onclick="selectNewBackground('${key}')">
                        <strong style="margin-right: 5px;">${bg.name}</strong>
                        <span style="font-size: 0.85em; color: #666;">Skills: ${bg.skills ? bg.skills.join(', ') : 'None'}</span>
                    </div>
                `;
            }
        });
    }
    
    modalOptions.innerHTML = optionsHtml;
    
    // Hide the custom input and footer for this modal
    const customInput = document.querySelector('#multiSelectModal .modal-custom-input');
    if (customInput) customInput.style.display = 'none';
    const modalFooter = document.querySelector('#multiSelectModal .modal-footer');
    if (modalFooter) modalFooter.style.display = 'none';
    
    modal.classList.add('active');
}

// Handle selecting a new background
function selectNewBackground(bgKey) {
    if (!currentNPC) return;
    
    // Handle custom background - prompt for name first
    if (bgKey === 'custom') {
        openCustomBackgroundNameModal();
        return;
    }
    
    const bgData = backgrounds[bgKey];
    if (!bgData) return;
    
    // Update the NPC with the new background
    currentNPC.background = bgKey;
    currentNPC.backgroundData = bgData;
    
    // Randomly select new trait, ideal, bond, flaw from the new background
    currentNPC.personalityTrait = randomChoice(bgData.traits);
    currentNPC.ideal = randomChoice(bgData.ideals);
    currentNPC.bond = randomChoice(bgData.bonds);
    currentNPC.flaw = randomChoice(bgData.flaws);
    
    // Update tool proficiencies from new background
    currentNPC.toolProficiencies = bgData.tools || [];
    
    // Update skills - add background skills (avoiding duplicates)
    const bgSkills = bgData.skills || [];
    bgSkills.forEach(skill => {
        if (!currentNPC.skills.includes(skill)) {
            currentNPC.skills.push(skill);
        }
    });
    
    // Close modal and refresh display
    closeModal();
    displayNPC(currentNPC);
}

// Custom background name input modal
function openCustomBackgroundNameModal() {
    const modal = document.getElementById('multiSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalOptions');
    
    modalTitle.textContent = 'Create Custom Background';
    
    // Get existing custom name if editing
    const existingName = currentNPC.background === 'custom' && currentNPC.backgroundData?.name !== 'Custom' 
        ? currentNPC.backgroundData.name 
        : '';
    
    let html = `
        <div style="margin-bottom: 15px;">
            <label style="font-weight: bold; display: block; margin-bottom: 8px;">Name your background:</label>
            <input type="text" id="customBackgroundNameInput" 
                   style="width: 100%; padding: 10px; border: 2px solid #dee2e6; border-radius: 6px; font-size: 1.1em;"
                   placeholder="e.g., Wandering Merchant, Disgraced Knight, Street Performer..."
                   value="${existingName}">
        </div>
        <div style="font-size: 0.9em; color: #666; margin-bottom: 15px;">
            <i class="fa-solid fa-info-circle"></i> 
            After naming your background, you'll be able to select 2 skill proficiencies and enter custom traits, ideals, bonds, and flaws.
        </div>
        <div style="display: flex; gap: 10px;">
            <button onclick="saveCustomBackgroundName()" 
                    style="flex: 1; padding: 10px; background: #58180d; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                <i class="fa-solid fa-check"></i> Create Background
            </button>
            <button onclick="closeModal()" 
                    style="flex: 1; padding: 10px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer;">
                Cancel
            </button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    
    // Hide the default modal elements
    const customInput = document.querySelector('#multiSelectModal .modal-custom-input');
    if (customInput) customInput.style.display = 'none';
    const modalFooter = document.querySelector('#multiSelectModal .modal-footer');
    if (modalFooter) modalFooter.style.display = 'none';
    
    modal.classList.add('active');
    
    // Focus the input
    setTimeout(() => {
        document.getElementById('customBackgroundNameInput')?.focus();
    }, 100);
}

function saveCustomBackgroundName() {
    const nameInput = document.getElementById('customBackgroundNameInput');
    const customName = nameInput?.value.trim() || 'Custom';
    
    currentNPC.background = 'custom';
    currentNPC.backgroundData = {
        name: customName,
        skills: [],
        tools: [],
        traits: ['Click to enter your personality trait...'],
        ideals: ['Click to enter your ideal...'],
        bonds: ['Click to enter your bond...'],
        flaws: ['Click to enter your flaw...']
    };
    currentNPC.personalityTrait = 'Click to enter your personality trait...';
    currentNPC.ideal = 'Click to enter your ideal...';
    currentNPC.bond = 'Click to enter your bond...';
    currentNPC.flaw = 'Click to enter your flaw...';
    currentNPC.toolProficiencies = [];
    
    closeModal();
    displayNPC(currentNPC);
}

// Custom background skill selection modal (limited to 2)
function openCustomBackgroundSkillsModal() {
    const modal = document.getElementById('multiSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalOptions');
    
    modalTitle.textContent = 'Select 2 Skill Proficiencies';
    
    const allSkills = [
        'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception',
        'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine',
        'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion',
        'Sleight of Hand', 'Stealth', 'Survival'
    ];
    
    const currentSelected = currentNPC.backgroundData?.skills || [];
    
    let html = `
        <div style="margin-bottom: 10px; font-size: 0.9em; color: #666;">
            Select exactly 2 skills for your custom background.
            <span id="customSkillCount" style="font-weight: bold; color: ${currentSelected.length === 2 ? '#1e7b34' : '#58180d'};">
                (${currentSelected.length}/2 selected)
            </span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
    `;
    
    allSkills.forEach(skill => {
        const isSelected = currentSelected.includes(skill);
        const isDisabled = !isSelected && currentSelected.length >= 2;
        html += `
            <div class="skill-option" 
                 style="padding: 8px; cursor: ${isDisabled ? 'not-allowed' : 'pointer'}; 
                        border-radius: 4px; border: 1px solid ${isSelected ? '#58180d' : '#ddd'};
                        background: ${isSelected ? '#f0e8d8' : (isDisabled ? '#f5f5f5' : 'white')};
                        opacity: ${isDisabled ? '0.5' : '1'};"
                 onclick="toggleCustomBackgroundSkill('${skill}', this)"
                 data-skill="${skill}"
                 data-selected="${isSelected}">
                ${isSelected ? '<i class="fa-solid fa-check" style="color: #58180d; margin-right: 5px;"></i>' : ''}
                ${skill}
            </div>
        `;
    });
    
    html += '</div>';
    
    html += `
        <div style="margin-top: 15px; text-align: right;">
            <button onclick="saveCustomBackgroundSkills()" 
                    style="padding: 8px 20px; background: #58180d; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Save Skills
            </button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    
    // Hide the default modal elements
    const customInput = document.querySelector('#multiSelectModal .modal-custom-input');
    if (customInput) customInput.style.display = 'none';
    const modalFooter = document.querySelector('#multiSelectModal .modal-footer');
    if (modalFooter) modalFooter.style.display = 'none';
    
    modal.classList.add('active');
}

function toggleCustomBackgroundSkill(skill, element) {
    if (!currentNPC || !currentNPC.backgroundData) return;
    
    const skills = currentNPC.backgroundData.skills || [];
    const isSelected = skills.includes(skill);
    
    if (isSelected) {
        // Remove skill
        currentNPC.backgroundData.skills = skills.filter(s => s !== skill);
    } else if (skills.length < 2) {
        // Add skill (only if under limit)
        currentNPC.backgroundData.skills = [...skills, skill];
    } else {
        // At limit, can't add more
        return;
    }
    
    // Refresh the modal
    openCustomBackgroundSkillsModal();
}

function saveCustomBackgroundSkills() {
    if (!currentNPC || !currentNPC.backgroundData) return;
    
    // Add the custom background skills to the character's skills (avoiding duplicates)
    const bgSkills = currentNPC.backgroundData.skills || [];
    bgSkills.forEach(skill => {
        if (!currentNPC.skills.includes(skill)) {
            currentNPC.skills.push(skill);
        }
    });
    
    closeModal();
    displayNPC(currentNPC);
}

// Background trait selection modal
function openBackgroundTraitModal(field, title, options, currentValue) {
    const modal = document.getElementById('multiSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalOptions');
    
    modalTitle.textContent = `Enter ${title}`;
    currentModalField = field;
    
    // Check if this is a custom background (options contain placeholder text)
    const isCustomBackground = currentNPC && currentNPC.background === 'custom';
    
    let html = '';
    
    // Only show selection options for non-custom backgrounds
    if (!isCustomBackground && options && options.length > 0 && !options[0].includes('Click to enter')) {
        modalTitle.textContent = `Select ${title}`;
        html += `
            <div style="margin-bottom: 15px;">
                <label style="font-weight: bold; display: block; margin-bottom: 5px;">Choose from ${title}s:</label>
                <div style="max-height: 200px; overflow-y: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px;">
        `;
        
        options.forEach((opt, index) => {
            const isSelected = opt === currentValue;
            html += `
                <div class="modal-option ${isSelected ? 'selected' : ''}" 
                     onclick="selectBackgroundTrait('${field}', this, ${index})"
                     data-value="${index}"
                     style="padding: 8px; margin: 4px 0; border-radius: 4px; cursor: pointer; ${isSelected ? 'background: #58180d; color: white;' : 'background: #f5f5f5;'}">
                    ${opt}
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
            <div style="margin-top: 15px;">
                <label style="font-weight: bold; display: block; margin-bottom: 5px;">Or enter custom ${title.toLowerCase()}:</label>
        `;
    } else {
        html += `
            <div>
                <label style="font-weight: bold; display: block; margin-bottom: 5px;">Enter your ${title.toLowerCase()}:</label>
        `;
    }
    
    // Get the current value for the textarea (exclude placeholder text)
    const textareaValue = currentValue && !currentValue.includes('Click to enter') && (!options || !options.includes(currentValue)) 
        ? currentValue 
        : (currentValue && !currentValue.includes('Click to enter') ? currentValue : '');
    
    html += `
            <textarea id="customTraitInput" style="width: 100%; min-height: 80px; padding: 8px; border: 2px solid #dee2e6; border-radius: 6px; font-family: inherit;"
                placeholder="Enter your own ${title.toLowerCase()}...">${textareaValue}</textarea>
        </div>
        <div style="margin-top: 15px; display: flex; gap: 10px;">
            <button onclick="saveBackgroundTrait('${field}')" style="flex: 1; padding: 10px; background: #58180d; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                <i class="fa-solid fa-check"></i> Save
            </button>
            <button onclick="closeModal()" style="flex: 1; padding: 10px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer;">
                Cancel
            </button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    
    // Hide the default modal elements (custom input and footer)
    const customInput = document.querySelector('#multiSelectModal .modal-custom-input');
    if (customInput) customInput.style.display = 'none';
    const modalFooter = document.querySelector('#multiSelectModal .modal-footer');
    if (modalFooter) modalFooter.style.display = 'none';
    
    modal.classList.add('active');
    
    // Store options for later
    modal.dataset.traitOptions = JSON.stringify(options);
}

function selectBackgroundTrait(field, element, index) {
    // Remove selected from all
    element.parentElement.querySelectorAll('.modal-option').forEach(el => {
        el.classList.remove('selected');
        el.style.background = '#f5f5f5';
        el.style.color = 'inherit';
    });
    
    // Add selected to clicked
    element.classList.add('selected');
    element.style.background = '#58180d';
    element.style.color = 'white';
    
    // Clear custom input
    document.getElementById('customTraitInput').value = '';
}

function saveBackgroundTrait(field) {
    const modal = document.getElementById('multiSelectModal');
    const options = JSON.parse(modal.dataset.traitOptions || '[]');
    const customInput = document.getElementById('customTraitInput').value.trim();
    
    let newValue;
    
    if (customInput) {
        newValue = customInput;
    } else {
        const selected = document.querySelector('.modal-option.selected');
        if (selected) {
            const index = parseInt(selected.dataset.value);
            newValue = options[index];
        }
    }
    
    if (newValue && currentNPC) {
        currentNPC[field] = newValue;
        displayNPC(currentNPC);
    }
    
    closeModal();
}

function openMultiSelectModal(field, title, options, currentSelections) {
    currentModalField = field;
    currentModalSelections = [...currentSelections];
    currentMaxSkills = getMaxSkillProficiencies();
    currentLockedSkills = field === 'skills' ? getLockedSkills() : [];
    
    // Ensure locked skills are always selected
    currentLockedSkills.forEach(skill => {
        if (!currentModalSelections.includes(skill)) {
            currentModalSelections.push(skill);
        }
    });
    
    const modal = document.getElementById('multiSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalOptions = document.getElementById('modalOptions');
    
    const iconMap = { skills: 'book', equipment: 'toolbox', languages: 'language' };
    const icon = iconMap[field] || 'list';
    modalTitle.innerHTML = `<i class="fa-solid fa-${icon}"></i> Edit ${title}`;
    
    // Build options HTML
    let optionsHtml = '';
    options.forEach(opt => {
        const isSelected = currentModalSelections.includes(opt);
        const isLocked = currentLockedSkills.includes(opt);
        const lockedClass = isLocked ? 'locked' : '';
        const lockedIcon = isLocked ? '<i class="fa-solid fa-lock" title="Granted by race/class"></i>' : '';
        
        optionsHtml += `
            <div class="modal-option ${isSelected ? 'selected' : ''} ${lockedClass}" onclick="toggleModalOption(this, '${opt.replace(/'/g, "\\'")}')">
                <span class="modal-option-checkbox"></span>
                <span>${opt}</span>
                ${lockedIcon}
            </div>
        `;
    });
    
    modalOptions.innerHTML = optionsHtml;
    
    // Hide custom input for skills, show for equipment and languages
    const customInputSection = document.querySelector('.modal-custom-input');
    if (customInputSection) {
        customInputSection.style.display = field === 'skills' ? 'none' : 'flex';
    }
    
    // Ensure modal footer is visible (may have been hidden by background trait modal)
    const modalFooter = document.querySelector('#multiSelectModal .modal-footer');
    if (modalFooter) modalFooter.style.display = 'flex';
    
    // Update skill count display
    updateSkillCountDisplay();
    
    modal.classList.add('active');
}

function toggleModalOption(element, value) {
    // Don't allow toggling locked skills
    if (element.classList.contains('locked')) {
        return;
    }
    
    element.classList.toggle('selected');
    
    if (element.classList.contains('selected')) {
        if (!currentModalSelections.includes(value)) {
            currentModalSelections.push(value);
        }
    } else {
        currentModalSelections = currentModalSelections.filter(s => s !== value);
    }
    
    // Update skill count if we're editing skills
    updateSkillCountDisplay();
}

function closeModal() {
    const modal = document.getElementById('multiSelectModal');
    modal.classList.remove('active');
    currentModalField = null;
    currentModalSelections = [];
    currentMaxSkills = 0;
    currentLockedSkills = [];
    
    // Hide skill count warning
    const warningDiv = document.getElementById('skillCountWarning');
    if (warningDiv) {
        warningDiv.style.display = 'none';
    }
    
    // Restore hidden elements for next use
    const customInput = document.querySelector('#multiSelectModal .modal-custom-input');
    if (customInput) customInput.style.display = '';
    const modalFooter = document.querySelector('#multiSelectModal .modal-footer');
    if (modalFooter) modalFooter.style.display = '';
}

function saveModalSelections() {
    if (currentModalField && currentNPC) {
        currentNPC[currentModalField] = [...currentModalSelections];
        displayNPC(currentNPC);
    }
    closeModal();
}

function addCustomItem() {
    const input = document.getElementById('customItemInput');
    const value = input.value.trim();
    
    if (value && !currentModalSelections.includes(value)) {
        currentModalSelections.push(value);
        
        // Add new option to the list
        const modalOptions = document.getElementById('modalOptions');
        const newOption = document.createElement('div');
        newOption.className = 'modal-option selected';
        newOption.onclick = function() { toggleModalOption(this, value); };
        newOption.innerHTML = `
            <span class="modal-option-checkbox"></span>
            <span>${value}</span>
        `;
        modalOptions.appendChild(newOption);
        
        input.value = '';
    }
}

// Get all available skills
function getAllSkills() {
    const skills = new Set();
    // Standard D&D 5e skills
    const standardSkills = [
        'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception',
        'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine',
        'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion',
        'Sleight of Hand', 'Stealth', 'Survival'
    ];
    standardSkills.forEach(s => skills.add(s));
    
    // Add skills from classes and occupations
    Object.values(classes).forEach(c => {
        if (c.skills) c.skills.forEach(s => skills.add(s));
    });
    Object.values(occupations).forEach(o => {
        if (o.skills) o.skills.forEach(s => skills.add(s));
    });
    
    return Array.from(skills).sort();
}

// Get all available languages
function getAllLanguages() {
    return [
        // Standard Languages
        'Common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc',
        // Exotic Languages
        'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon',
        // Primordial Dialects
        'Aquan', 'Auran', 'Ignan', 'Terran',
        // Rare/Unusual Languages
        'Aarakocra', 'Druidic', 'Gith', 'Grung', 'Leonin', 'Loxodon', 'Minotaur', 'Quori', 'Thri-kreen', 'Vedalken'
    ].sort();
}

// Get all available equipment
function getAllEquipment() {
    const equipment = new Set();
    
    // Add equipment from occupations
    Object.values(occupations).forEach(o => {
        if (o.equipment) o.equipment.forEach(e => equipment.add(e));
    });
    
    // Add some common items
    const commonItems = [
        'Backpack', 'Bedroll', 'Tinderbox', 'Torch', 'Rations (1 day)',
        'Waterskin', 'Rope (50 feet)', 'Dagger', 'Quarterstaff',
        'Clothes (common)', 'Clothes (traveler\'s)', 'Pouch'
    ];
    commonItems.forEach(e => equipment.add(e));
    
    return Array.from(equipment).sort();
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('multiSelectModal');
    if (e.target === modal) {
        closeModal();
    }
    const promptModal = document.getElementById('portraitPromptModal');
    if (e.target === promptModal) {
        closePromptModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closePromptModal();
    }
});

// ============================================
// PORTRAIT GENERATOR (Prodia API with Pollinations fallback)
// ============================================

// Trigger file upload dialog
function triggerImageUpload() {
    document.getElementById('imageUploadInput').click();
}

// Handle uploaded image
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const placeholder = document.getElementById('portraitPlaceholder');
        const loading = document.getElementById('portraitLoading');
        const image = document.getElementById('portraitImage');
        
        if (placeholder) placeholder.style.display = 'none';
        if (loading) loading.style.display = 'none';
        if (image) {
            image.src = e.target.result;
            image.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

async function generatePortrait() {
    if (!currentNPC) return;
    
    const prompt = buildPortraitPrompt(currentNPC);
    
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

function buildPortraitPrompt(npc) {
    const className = npc.npcClass === 'commoner' ? 'commoner' : npc.npcClass;
    const occupationName = npc.occupation.replace(/_/g, ' ');
    
    // Determine age description
    let ageDesc = '';
    if (npc.age < 5) ageDesc = 'infant';
    else if (npc.age < 15) ageDesc = 'young child';
    else if (npc.age < 25) ageDesc = 'young adult';
    else if (npc.age < 50) ageDesc = 'adult';
    else if (npc.age < 80) ageDesc = 'middle-aged';
    else ageDesc = 'elderly';

    // Get race-specific features
    const raceFeatures = getRaceVisualFeatures(npc.race);
    
    // Check if this is a non-human race that needs extra emphasis
    const nonHumanRaces = [
        'aarakocra', 'kenku', 'owlin', 'tabaxi', 'leonin', 'lizardfolk', 'dragonborn',
        'tortle', 'yuan-ti', 'kobold', 'minotaur', 'harengon', 'loxodon', 'grung',
        'locathah', 'thri-kreen', 'warforged', 'autognome'
    ];
    const isNonHuman = nonHumanRaces.includes(npc.race.toLowerCase());
    
    // Build the prompt - for non-human races, lead with strong non-human instruction
    let prompt;
    if (isNonHuman) {
        prompt = `DO NOT DRAW A HUMAN. ${raceFeatures} Fantasy character portrait of a ${ageDesc} ${npc.gender} ${npc.race} ${occupationName}`;
    } else {
        prompt = `DnD 5e ${npc.race}. Fantasy portrait of a ${ageDesc} ${npc.gender} ${npc.race} ${occupationName}`;
    }
    
    if (className !== 'commoner') {
        prompt += ` and ${className}`;
    }
    
    // Add race features (only for human races - non-human already has it at the start)
    if (!isNonHuman) {
        prompt += `. ${raceFeatures}`;
    }
    
    // Add alignment-based expression/demeanor
    const alignmentVibes = getAlignmentVisuals(npc.alignment);
    prompt += ` ${alignmentVibes}`;
    
    // Add occupation-based attire
    const attireHints = extractBackstoryVisuals(npc.backstory || '', npc.race, occupationName);
    if (attireHints) {
        prompt += ` ${attireHints}`;
    }

    // Art style - add stronger non-human emphasis if needed
    if (isNonHuman) {
        prompt += ` Detailed fantasy art, dramatic lighting, character portrait, Dungeons and Dragons style, digital painting. IMPORTANT: This is NOT a human - do not give this character a human face.`;
    } else {
        prompt += ` Detailed fantasy art, dramatic lighting, character portrait, Dungeons and Dragons style, digital painting.`;
    }

    return prompt;
}

// ============================================
// PORTRAIT PROMPT VIEWER
// ============================================

function generatePortraitPrompt() {
    if (!currentNPC) return;

    const prompt = buildPortraitPrompt(currentNPC);

    // Show the modal with the prompt
    const modal = document.getElementById('portraitPromptModal');
    const textarea = document.getElementById('portraitPromptText');
    textarea.value = prompt;
    modal.classList.add('active');
    
    // Reset copy button state
    const copyBtn = document.getElementById('copyPromptBtn');
    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy to Clipboard';
}

function getRaceVisualFeatures(race) {
    const features = {
        // Humanoid races (human-like faces)
        'human': 'Human with varied features.',
        'elf': 'Elegant elven features with pointed ears and graceful build.',
        'high elf': 'High elf with refined features, pointed ears, and an air of arcane nobility.',
        'wood elf': 'Wood elf with earthy skin tones, pointed ears, and wild, natural appearance.',
        'dark elf': 'Drow with dark purple-black skin, white hair, and piercing red eyes.',
        'dwarf': 'Stout dwarven build with thick beard and sturdy features.',
        'hill dwarf': 'Hill dwarf with ruddy complexion, thick beard, and keen eyes.',
        'mountain dwarf': 'Mountain dwarf with powerful build, braided beard, and stern expression.',
        'halfling': 'Small halfling with cheerful features and curly hair.',
        'lightfoot halfling': 'Nimble lightfoot halfling with quick eyes and friendly smile.',
        'stout halfling': 'Sturdy stout halfling with rosy cheeks and determined expression.',
        'gnome': 'Small gnome with large eyes, pointed ears, and curious expression.',
        'forest gnome': 'Forest gnome with earthy tones, large eyes, and connection to nature.',
        'rock gnome': 'Rock gnome with clever eyes, wild hair, and inventive spark.',
        'half-elf': 'Half-elf combining human and elven features with slightly pointed ears.',
        'half-orc': 'Half-orc with grayish-green skin, prominent jaw, and tusks.',
        'tiefling': 'Tiefling with reddish skin, curved horns on head, and a long tail. Infernal heritage visible.',
        'aasimar': 'Aasimar with celestial beauty, glowing eyes, and ethereal presence.',
        'goliath': 'Massive goliath with gray skin, bald head, and tribal markings.',
        'genasi': 'Genasi with elemental features reflecting their heritage.',
        'changeling': 'Changeling with pale features and slightly unsettling androgynous appearance.',
        'kalashtar': 'Kalashtar with serene human-like features and distant, dreamlike gaze.',
        'triton': 'Triton with blue-green skin, webbed fingers, and aquatic features.',
        'goblin': 'Small goblin with green skin, pointed ears, and sharp features.',
        'hobgoblin': 'Hobgoblin with orange-red skin, military bearing, and disciplined expression.',
        'orc': 'Full orc with green skin, tusks, and powerful savage features.',
        'fairy': 'Tiny fairy with delicate features, gossamer wings, and ethereal glow.',
        
        // Non-human faces - EXPLICIT descriptions needed
        'aarakocra': 'BIRD CREATURE - NO HUMAN FACE. Eagle-person with full bird head, sharp hooked beak (no human mouth), feathers instead of hair and skin, round bird eyes, taloned bird feet, large feathered wings on back.',
        'kenku': 'BIRD CREATURE - NO HUMAN FACE. Crow-person with full raven head, long black beak (no human mouth), black feathers covering entire face and body, small round crow eyes.',
        'owlin': 'BIRD CREATURE - NO HUMAN FACE. Owl-person with full owl head, flat feathered owl face, large round forward-facing owl eyes, small hooked beak (no human mouth), feathered body and wings.',
        'tabaxi': 'CAT CREATURE - NO HUMAN FACE. Bipedal cat with full feline face, cat muzzle with whiskers, fur covering entire face and body, pointed cat ears on top of head, vertical slit cat pupils, pink cat nose.',
        'leonin': 'LION CREATURE - NO HUMAN FACE. Bipedal lion with full lion head, lion muzzle with fangs, thick lion mane around face, fur covering entire body, golden lion eyes.',
        'lizardfolk': 'REPTILE CREATURE - NO HUMAN FACE. Bipedal lizard with full reptilian head, scaly snout with sharp teeth, no hair anywhere, green/brown scales covering entire face and body, yellow reptile eyes with slit pupils.',
        'dragonborn': 'DRAGON CREATURE - NO HUMAN FACE. Bipedal dragon with full draconic head, scaled snout, no hair, scales covering entire face and body, proud dragon horns, piercing dragon eyes.',
        'tortle': 'TURTLE CREATURE - NO HUMAN FACE. Bipedal turtle with reptilian turtle head, beak-like mouth (no human lips), large domed shell on back, wrinkled scaly green skin, wise ancient turtle eyes.',
        'yuan-ti': 'SNAKE CREATURE - NO HUMAN FACE. Serpent-person with snake-like features, scales covering face and body, forked tongue, snake eyes with vertical slit pupils, possibly snake head or hood.',
        'kobold': 'SMALL DRAGON CREATURE - NO HUMAN FACE. Tiny bipedal dragon/lizard with reptilian head, small scaly snout, scales covering entire body, small horns, large dragon-like eyes. Very small creature.',
        'bugbear': 'GOBLINOID CREATURE. Large hairy goblin with flat face, pointed ears, fangs, long gangly arms, shaggy brown fur covering entire hulking body.',
        'minotaur': 'BULL CREATURE - NO HUMAN FACE. Bipedal bull with full bull head, bovine snout and nostrils, large curved horns, cow ears, fur covering muscular body, hooved feet.',
        'harengon': 'RABBIT CREATURE - NO HUMAN FACE. Bipedal rabbit with full rabbit head, long upright rabbit ears, twitching rabbit nose, buck teeth, soft fur covering entire face and body, large rabbit feet.',
        'firbolg': 'Tall firbolg with cow-like broad nose, long pointed ears, blue or gray skin tones, gentle giant appearance.',
        'shifter': 'Shifter with bestial features, pointed ears, sharp fangs, wild hair, and animalistic traits showing lycanthrope heritage.',
        'centaur': 'Centaur with human upper body attached to full horse body with four horse legs. Half-human half-horse.',
        'satyr': 'Satyr with human upper body, small curved horns on head, pointed ears, goat legs with hooves below the waist.',
        'warforged': 'ROBOT - NO HUMAN SKIN OR FLESH. Living construct made of metal, wood, and stone. Metal face plate with glowing eyes, no mouth or nose, armored body with visible joints and plates. Mechanical golem creature.',
        'autognome': 'ROBOT - NO HUMAN SKIN OR FLESH. Small clockwork gnome-robot made entirely of metal, gears, and cogs. Metal face with glowing lens eyes, no organic features, brass/copper mechanical body. Steampunk robot creature.',
        'loxodon': 'ELEPHANT CREATURE - NO HUMAN FACE. Bipedal elephant with full elephant head, long prehensile trunk, large floppy elephant ears, tusks, thick gray wrinkled elephant skin covering entire body.',
        'grung': 'FROG CREATURE - NO HUMAN FACE. Small bipedal poison frog with full frog head, wide frog mouth, large bulging frog eyes on top of head, smooth wet amphibian skin, brightly colored (red/blue/green/orange).',
        'locathah': 'FISH CREATURE - NO HUMAN FACE. Bipedal fish-person with full fish head, fish eyes on sides of head, gills on neck, scales covering entire body, fins on arms and back, wide fish mouth.',
        'thri-kreen': 'INSECT CREATURE - NO HUMAN FACE. Bipedal mantis with insect head, large compound bug eyes, clicking mandibles instead of mouth, antennae, four arms, hard chitinous exoskeleton body, no skin.',
        'gith': 'Gaunt humanoid with yellow-green skin, pointed ears, angular features, sunken eyes.',
        'vedalken': 'Tall humanoid with blue skin, no hair, large blue eyes, elongated head, logical expression.'
    };
    return features[race.toLowerCase()] || `${capitalize(race)} with distinctive racial features.`;
}

function getAlignmentVisuals(alignment) {
    const visuals = {
        'lawful good': 'Noble and righteous bearing, warm and trustworthy expression.',
        'neutral good': 'Kind and approachable demeanor, gentle eyes.',
        'chaotic good': 'Free-spirited expression with a hint of mischief, warm smile.',
        'lawful neutral': 'Disciplined and composed expression, measuring gaze.',
        'true neutral': 'Balanced and calm expression, observant eyes.',
        'chaotic neutral': 'Unpredictable glint in eyes, carefree expression.',
        'lawful evil': 'Cold calculating expression, cruel sophistication.',
        'neutral evil': 'Selfish and cunning expression, untrustworthy eyes.',
        'chaotic evil': 'Wild and dangerous expression, hint of madness.'
    };
    return visuals[alignment] || 'Neutral expression.';
}

function extractBackstoryVisuals(backstory, race, occupation) {
    let hints = [];
    
    // Look for clothing/equipment hints based on occupation
    if (occupation.includes('blacksmith') || occupation.includes('smith')) {
        hints.push('Wearing a leather apron, muscular arms.');
    } else if (occupation.includes('merchant') || occupation.includes('trader')) {
        hints.push('Well-dressed in merchant attire, calculating expression.');
    } else if (occupation.includes('guard') || occupation.includes('soldier')) {
        hints.push('Wearing armor or uniform, vigilant stance.');
    } else if (occupation.includes('priest') || occupation.includes('cleric')) {
        hints.push('Wearing religious vestments, holy symbol visible.');
    } else if (occupation.includes('mage') || occupation.includes('wizard')) {
        hints.push('Wearing robes, arcane symbols, mystical presence.');
    } else if (occupation.includes('thief') || occupation.includes('rogue')) {
        hints.push('Hooded cloak, shadowy appearance, alert eyes.');
    } else if (occupation.includes('farmer') || occupation.includes('laborer')) {
        hints.push('Simple working clothes, weathered hands.');
    } else if (occupation.includes('noble') || occupation.includes('aristocrat')) {
        hints.push('Fine clothing, jewelry, aristocratic bearing.');
    } else if (occupation.includes('innkeeper') || occupation.includes('tavern')) {
        hints.push('Friendly tavern attire, welcoming demeanor.');
    } else if (occupation.includes('baker') || occupation.includes('cook')) {
        hints.push('Flour-dusted apron, warm friendly expression.');
    } else if (occupation.includes('healer') || occupation.includes('herbalist')) {
        hints.push('Carrying herbs or medical supplies, caring expression.');
    } else if (occupation.includes('hunter') || occupation.includes('ranger')) {
        hints.push('Woodland attire, bow or hunting gear, keen eyes.');
    } else if (occupation.includes('sailor') || occupation.includes('fisher')) {
        hints.push('Maritime clothing, weathered by sea and sun.');
    } else if (occupation.includes('entertainer') || occupation.includes('bard')) {
        hints.push('Colorful performer attire, charismatic presence.');
    } else if (occupation.includes('scholar') || occupation.includes('scribe')) {
        hints.push('Scholarly robes, spectacles, books or scrolls.');
    }
    
    return hints.join(' ');
}

function closePromptModal() {
    const modal = document.getElementById('portraitPromptModal');
    modal.classList.remove('active');
}

function copyPromptToClipboard() {
    const textarea = document.getElementById('portraitPromptText');
    const copyBtn = document.getElementById('copyPromptBtn');
    
    navigator.clipboard.writeText(textarea.value).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy to Clipboard';
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        textarea.select();
        document.execCommand('copy');
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy to Clipboard';
        }, 2000);
    });
}

// Export Character Sheet to PDF (opens printable view)

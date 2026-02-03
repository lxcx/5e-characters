// D&D 5E Monster Generator - Spell Functions

// Get spells filtered by level
function getSpellsByLevel(level) {
    return Object.keys(spells).filter(spellId => spells[spellId].level === level);
}

// Get random spells for a monster's innate spellcasting
function getInnateSpells(cr, spellcastingAbility) {
    const result = {
        atWill: [],
        perDay3: [],
        perDay2: [],
        perDay1: []
    };
    
    // Determine max spell level based on CR
    let maxSpellLevel = Math.min(9, Math.max(1, Math.floor(cr / 2)));
    if (cr >= 20) maxSpellLevel = 9;
    else if (cr >= 15) maxSpellLevel = 7;
    else if (cr >= 10) maxSpellLevel = 5;
    else if (cr >= 5) maxSpellLevel = 3;
    
    // Number of spells based on CR
    const atWillCount = Math.min(4, Math.max(1, Math.floor(cr / 4)));
    const perDay3Count = Math.min(3, Math.max(0, Math.floor(cr / 5)));
    const perDay2Count = Math.min(3, Math.max(0, Math.floor(cr / 7)));
    const perDay1Count = Math.min(3, Math.max(0, Math.floor(cr / 10)));
    
    // Get available spells (cantrips and leveled spells up to max)
    const availableCantrips = getSpellsByLevel(0);
    const availableLeveled = [];
    for (let i = 1; i <= maxSpellLevel; i++) {
        availableLeveled.push(...getSpellsByLevel(i));
    }
    
    // Select at-will spells (cantrips and low-level spells)
    const atWillPool = [...availableCantrips, ...getSpellsByLevel(1)];
    for (let i = 0; i < atWillCount && atWillPool.length > 0; i++) {
        const idx = randomInt(0, atWillPool.length - 1);
        result.atWill.push(atWillPool.splice(idx, 1)[0]);
    }
    
    // Select 3/day spells (low-mid level)
    const midLevelSpells = availableLeveled.filter(id => spells[id].level <= Math.ceil(maxSpellLevel / 2));
    for (let i = 0; i < perDay3Count && midLevelSpells.length > 0; i++) {
        const idx = randomInt(0, midLevelSpells.length - 1);
        result.perDay3.push(midLevelSpells.splice(idx, 1)[0]);
    }
    
    // Select 2/day spells (mid level)
    const higherSpells = availableLeveled.filter(id => spells[id].level > 2 && spells[id].level <= maxSpellLevel - 1);
    for (let i = 0; i < perDay2Count && higherSpells.length > 0; i++) {
        const idx = randomInt(0, higherSpells.length - 1);
        result.perDay2.push(higherSpells.splice(idx, 1)[0]);
    }
    
    // Select 1/day spells (highest level)
    const highestSpells = availableLeveled.filter(id => spells[id].level >= maxSpellLevel - 1);
    for (let i = 0; i < perDay1Count && highestSpells.length > 0; i++) {
        const idx = randomInt(0, highestSpells.length - 1);
        result.perDay1.push(highestSpells.splice(idx, 1)[0]);
    }
    
    return result;
}

// Calculate spell save DC for monster
function getMonsterSpellSaveDC(abilityMod, proficiencyBonus) {
    return 8 + abilityMod + proficiencyBonus;
}

// Calculate spell attack bonus for monster
function getMonsterSpellAttackBonus(abilityMod, proficiencyBonus) {
    return abilityMod + proficiencyBonus;
}

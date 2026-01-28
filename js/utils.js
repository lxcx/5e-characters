// D&D 5E NPC Generator - Utility Functions (random, dice, modifiers)

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Weighted random choice - weights object maps items to their relative weights
function weightedRandomChoice(items, weights) {
    const totalWeight = items.reduce((sum, item) => sum + (weights[item] || 1), 0);
    let random = Math.random() * totalWeight;
    
    for (const item of items) {
        random -= weights[item] || 1;
        if (random <= 0) {
            return item;
        }
    }
    return items[items.length - 1];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollAbilityScore() {
    // Roll 4d6, drop lowest
    const rolls = [];
    for (let i = 0; i < 4; i++) {
        rolls.push(randomInt(1, 6));
    }
    rolls.sort((a, b) => b - a);
    return rolls[0] + rolls[1] + rolls[2];
}

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

function formatModifier(mod) {
    return mod >= 0 ? `+${mod}` : `${mod}`;
}

// maturityAges is defined in data.js


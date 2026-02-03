// D&D 5E Monster Generator - Utility Functions

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

function rollDice(count, sides) {
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += randomInt(1, sides);
    }
    return total;
}

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

function formatModifier(mod) {
    return mod >= 0 ? `+${mod}` : `${mod}`;
}

// Calculate average of dice expression (e.g., "2d6+3" returns 10)
function averageDice(diceStr) {
    const match = diceStr.match(/(\d+)d(\d+)([+-]\d+)?/);
    if (!match) return 0;
    const count = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;
    return Math.floor(count * (sides + 1) / 2) + modifier;
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Title case
function titleCase(str) {
    return str.split(' ').map(word => capitalize(word)).join(' ');
}

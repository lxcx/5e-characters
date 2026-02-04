// ============================================
// ITEMS DATABASE - CORE DEFINITIONS
// ============================================
// Schema and constants for the D&D 5e item system

// ============================================
// ITEM CATEGORIES
// ============================================

const itemCategories = {
    'adventuring-gear': { name: 'Adventuring Gear', description: 'General equipment for adventurers' },
    'ammunition': { name: 'Ammunition', description: 'Projectiles for ranged weapons' },
    'arcane-focus': { name: 'Arcane Focus', description: 'Items used to channel arcane magic' },
    'armor': { name: 'Armor', description: 'Protective gear worn in combat' },
    'artisan-tools': { name: 'Artisan\'s Tools', description: 'Tools used by craftspeople' },
    'clothing': { name: 'Clothing', description: 'Garments and accessories' },
    'container': { name: 'Container', description: 'Items used to carry other items' },
    'druidic-focus': { name: 'Druidic Focus', description: 'Items used to channel druidic magic' },
    'equipment-pack': { name: 'Equipment Pack', description: 'Pre-assembled collections of gear' },
    'food-drink': { name: 'Food & Drink', description: 'Consumable sustenance' },
    'gaming-set': { name: 'Gaming Set', description: 'Games and gambling equipment' },
    'holy-symbol': { name: 'Holy Symbol', description: 'Religious icons for divine magic' },
    'instrument': { name: 'Musical Instrument', description: 'Instruments for performance' },
    'mount-gear': { name: 'Mounts & Gear', description: 'Equipment for mounts and vehicles' },
    'potion': { name: 'Potion', description: 'Magical consumable liquids' },
    'ring': { name: 'Ring', description: 'Magical rings worn on fingers' },
    'rod': { name: 'Rod', description: 'Magical rods of power' },
    'scroll': { name: 'Scroll', description: 'Magical scrolls containing spells' },
    'shield': { name: 'Shield', description: 'Defensive equipment held in hand' },
    'staff': { name: 'Staff', description: 'Magical staves' },
    'tool': { name: 'Tool', description: 'Specialized equipment for tasks' },
    'trade-goods': { name: 'Trade Goods', description: 'Commodities for commerce' },
    'vehicle': { name: 'Vehicle', description: 'Transportation' },
    'wand': { name: 'Wand', description: 'Magical wands' },
    'weapon': { name: 'Weapon', description: 'Arms for combat' },
    'wondrous-item': { name: 'Wondrous Item', description: 'Miscellaneous magic items' }
};

// ============================================
// ITEM RARITIES
// ============================================

const itemRarities = {
    'common': { name: 'Common', color: '#9d9d9d', priceRange: '50-100 gp' },
    'uncommon': { name: 'Uncommon', color: '#1eff00', priceRange: '101-500 gp' },
    'rare': { name: 'Rare', color: '#0070dd', priceRange: '501-5,000 gp' },
    'very-rare': { name: 'Very Rare', color: '#a335ee', priceRange: '5,001-50,000 gp' },
    'legendary': { name: 'Legendary', color: '#ff8000', priceRange: '50,001+ gp' },
    'artifact': { name: 'Artifact', color: '#e6cc80', priceRange: 'Priceless' }
};

// ============================================
// ITEM SOURCES
// ============================================

const itemSources = {
    'PHB': { name: 'Player\'s Handbook', abbreviation: 'PHB' },
    'DMG': { name: 'Dungeon Master\'s Guide', abbreviation: 'DMG' },
    'XGE': { name: 'Xanathar\'s Guide to Everything', abbreviation: 'XGE' },
    'TCE': { name: 'Tasha\'s Cauldron of Everything', abbreviation: 'TCE' },
    'FTOD': { name: 'Fizban\'s Treasury of Dragons', abbreviation: 'FToD' },
    'VRGR': { name: 'Van Richten\'s Guide to Ravenloft', abbreviation: 'VRGR' },
    'MOT': { name: 'Mythic Odysseys of Theros', abbreviation: 'MOT' },
    'ERLW': { name: 'Eberron: Rising from the Last War', abbreviation: 'ERLW' },
    'EGW': { name: 'Explorer\'s Guide to Wildemount', abbreviation: 'EGW' },
    'SCAG': { name: 'Sword Coast Adventurer\'s Guide', abbreviation: 'SCAG' },
    'COS': { name: 'Curse of Strahd', abbreviation: 'CoS' },
    'TOA': { name: 'Tomb of Annihilation', abbreviation: 'ToA' },
    'WDMM': { name: 'Waterdeep: Dungeon of the Mad Mage', abbreviation: 'WDotMM' },
    'WDDH': { name: 'Waterdeep: Dragon Heist', abbreviation: 'WDH' },
    'BGD': { name: 'Baldur\'s Gate: Descent into Avernus', abbreviation: 'BGDiA' },
    'IDR': { name: 'Icewind Dale: Rime of the Frostmaiden', abbreviation: 'IDRotF' },
    'OOA': { name: 'Out of the Abyss', abbreviation: 'OotA' },
    'PTA': { name: 'Princes of the Apocalypse', abbreviation: 'PotA' },
    'SKT': { name: 'Storm King\'s Thunder', abbreviation: 'SKT' },
    'HOTDQ': { name: 'Hoard of the Dragon Queen', abbreviation: 'HotDQ' },
    'ROT': { name: 'Rise of Tiamat', abbreviation: 'RoT' },
    'LMO': { name: 'Lost Mine of Phandelver', abbreviation: 'LMoP' },
    'GOT': { name: 'Ghosts of Saltmarsh', abbreviation: 'GoS' },
    'AI': { name: 'Acquisitions Incorporated', abbreviation: 'AI' },
    'BGAL': { name: 'Bigby Presents: Glory of the Giants', abbreviation: 'BGG' },
    'BOFM': { name: 'Book of Many Things', abbreviation: 'BoMT' }
};

// ============================================
// ARMOR TYPES
// ============================================

const armorTypes = {
    'light': { name: 'Light Armor', maxDex: null, stealthDisadvantage: false },
    'medium': { name: 'Medium Armor', maxDex: 2, stealthDisadvantage: false },
    'heavy': { name: 'Heavy Armor', maxDex: 0, stealthDisadvantage: true },
    'shield': { name: 'Shield', maxDex: null, stealthDisadvantage: false }
};

// ============================================
// MAGIC ITEM TABLES (DMG)
// ============================================

const magicItemTables = {
    'A': { rarity: 'common', minCR: 0, description: 'Minor common items' },
    'B': { rarity: 'uncommon', minCR: 1, description: 'Minor uncommon items' },
    'C': { rarity: 'rare', minCR: 5, description: 'Minor rare items' },
    'D': { rarity: 'very-rare', minCR: 11, description: 'Minor very rare items' },
    'E': { rarity: 'legendary', minCR: 17, description: 'Minor legendary items' },
    'F': { rarity: 'uncommon', minCR: 1, description: 'Major uncommon items' },
    'G': { rarity: 'rare', minCR: 5, description: 'Major rare items' },
    'H': { rarity: 'very-rare', minCR: 11, description: 'Major very rare items' },
    'I': { rarity: 'legendary', minCR: 17, description: 'Major legendary items' }
};

// ============================================
// ATTUNEMENT REQUIREMENTS
// ============================================

const attunementTypes = {
    'none': 'No attunement required',
    'any': 'Requires attunement',
    'spellcaster': 'Requires attunement by a spellcaster',
    'cleric': 'Requires attunement by a cleric',
    'druid': 'Requires attunement by a druid',
    'paladin': 'Requires attunement by a paladin',
    'ranger': 'Requires attunement by a ranger',
    'sorcerer': 'Requires attunement by a sorcerer',
    'warlock': 'Requires attunement by a warlock',
    'wizard': 'Requires attunement by a wizard',
    'bard': 'Requires attunement by a bard',
    'monk': 'Requires attunement by a monk',
    'rogue': 'Requires attunement by a rogue',
    'barbarian': 'Requires attunement by a barbarian',
    'fighter': 'Requires attunement by a fighter',
    'artificer': 'Requires attunement by an artificer',
    'good': 'Requires attunement by a creature of good alignment',
    'evil': 'Requires attunement by a creature of evil alignment',
    'neutral': 'Requires attunement by a creature of neutral alignment',
    'chaotic': 'Requires attunement by a creature of chaotic alignment',
    'lawful': 'Requires attunement by a creature of lawful alignment'
};

// ============================================
// ITEM SCHEMA TEMPLATE
// ============================================
/*
Item Schema:
{
    name: string,           // Display name
    type: string,           // Category from itemCategories
    subtype: string,        // Optional subcategory (e.g., 'light' for armor)
    rarity: string,         // From itemRarities (null for mundane)
    weight: number,         // Weight in pounds
    cost: string,           // Cost string (e.g., '10 gp')
    costValue: number,      // Cost in copper pieces for calculations
    attunement: string,     // From attunementTypes
    properties: string[],   // Array of special properties
    description: string,    // Full description
    source: string,         // From itemSources
    
    // Armor-specific
    ac: number,             // Base AC
    acBonus: number,        // AC bonus (for shields, magic items)
    strengthReq: number,    // Minimum strength requirement
    stealthDisadvantage: boolean,
    
    // Magic item specific
    charges: number,        // Number of charges
    recharge: string,       // Recharge description
    cursed: boolean,        // Is the item cursed
    sentient: boolean,      // Is the item sentient
    
    // Container specific
    capacity: string,       // Carrying capacity
    
    // Consumable specific
    consumable: boolean,    // Is item consumed on use
    effect: string          // Effect description
}
*/

// ============================================
// HELPER FUNCTIONS
// ============================================

// Convert cost string to copper pieces
function costToCopper(costString) {
    if (!costString) return 0;
    const match = costString.toLowerCase().match(/(\d+(?:,\d+)*(?:\.\d+)?)\s*(cp|sp|ep|gp|pp)/);
    if (!match) return 0;
    const value = parseFloat(match[1].replace(',', ''));
    const unit = match[2];
    const conversions = { cp: 1, sp: 10, ep: 50, gp: 100, pp: 1000 };
    return value * (conversions[unit] || 0);
}

// Format copper pieces to readable currency
function copperToCost(copper) {
    if (copper >= 1000 && copper % 1000 === 0) return `${copper / 1000} pp`;
    if (copper >= 100) return `${copper / 100} gp`;
    if (copper >= 10) return `${copper / 10} sp`;
    return `${copper} cp`;
}

// Get all items by category
function getItemsByCategory(items, category) {
    return Object.entries(items)
        .filter(([_, item]) => item.type === category)
        .reduce((acc, [key, item]) => ({ ...acc, [key]: item }), {});
}

// Get all items by rarity
function getItemsByRarity(items, rarity) {
    return Object.entries(items)
        .filter(([_, item]) => item.rarity === rarity)
        .reduce((acc, [key, item]) => ({ ...acc, [key]: item }), {});
}

// Get all items by source
function getItemsBySource(items, source) {
    return Object.entries(items)
        .filter(([_, item]) => item.source === source)
        .reduce((acc, [key, item]) => ({ ...acc, [key]: item }), {});
}

// Get random item by rarity
function getRandomItemByRarity(items, rarity) {
    const filtered = Object.entries(items).filter(([_, item]) => item.rarity === rarity);
    if (filtered.length === 0) return null;
    const [key, item] = filtered[Math.floor(Math.random() * filtered.length)];
    return { id: key, ...item };
}

// Get random item by category
function getRandomItemByCategory(items, category) {
    const filtered = Object.entries(items).filter(([_, item]) => item.type === category);
    if (filtered.length === 0) return null;
    const [key, item] = filtered[Math.floor(Math.random() * filtered.length)];
    return { id: key, ...item };
}

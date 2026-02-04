// Master Monster Index - Combines all monster data files
// This file should be loaded after all monster data files

const allMonsters = {};

// Merge all monster sources into allMonsters
function initializeMonsterLibrary() {
    // Monster Manual monsters (split across files)
    const monsterSources = [
        typeof MONSTERS_MM_A !== 'undefined' ? MONSTERS_MM_A : {},
        typeof MONSTERS_MM_B !== 'undefined' ? MONSTERS_MM_B : {},
        typeof MONSTERS_MM_C !== 'undefined' ? MONSTERS_MM_C : {},
        typeof MONSTERS_MM_D !== 'undefined' ? MONSTERS_MM_D : {},
        typeof MONSTERS_MM_EFG !== 'undefined' ? MONSTERS_MM_EFG : {},
        typeof MONSTERS_MM_REST !== 'undefined' ? MONSTERS_MM_REST : {},
        typeof MONSTERS_MM_SZ !== 'undefined' ? MONSTERS_MM_SZ : {},
        // Volo's Guide to Monsters
        typeof MONSTERS_VOLO !== 'undefined' ? MONSTERS_VOLO : {},
        // Mordenkainen's Tome of Foes
        typeof MONSTERS_MTOF !== 'undefined' ? MONSTERS_MTOF : {},
        // Complete Dragon Collection
        typeof MONSTERS_DRAGONS !== 'undefined' ? MONSTERS_DRAGONS : {},
        // Classic Undead
        typeof MONSTERS_UNDEAD !== 'undefined' ? MONSTERS_UNDEAD : {},
        // Giants and Large Creatures
        typeof MONSTERS_GIANTS !== 'undefined' ? MONSTERS_GIANTS : {},
        // Beasts and Common Creatures
        typeof MONSTERS_BEASTS !== 'undefined' ? MONSTERS_BEASTS : {},
        // Humanoid NPCs
        typeof MONSTERS_NPCS !== 'undefined' ? MONSTERS_NPCS : {},
        // Elementals, Oozes, Constructs
        typeof MONSTERS_ELEMENTALS !== 'undefined' ? MONSTERS_ELEMENTALS : {},
        // Fiends (Devils & Demons)
        typeof MONSTERS_FIENDS !== 'undefined' ? MONSTERS_FIENDS : {},
        // Aberrations, Fey, Celestials, Other
        typeof MONSTERS_MISC !== 'undefined' ? MONSTERS_MISC : {},
        // MM Complete Part 1 (A-F)
        typeof MONSTERS_MM_COMPLETE1 !== 'undefined' ? MONSTERS_MM_COMPLETE1 : {},
        // MM Complete Part 2 (G-M)
        typeof MONSTERS_MM_COMPLETE2 !== 'undefined' ? MONSTERS_MM_COMPLETE2 : {},
        // MM Complete Part 3 (I-O)
        typeof MONSTERS_MM_COMPLETE3 !== 'undefined' ? MONSTERS_MM_COMPLETE3 : {},
        // MM Complete Part 4 (P-Z)
        typeof MONSTERS_MM_COMPLETE4 !== 'undefined' ? MONSTERS_MM_COMPLETE4 : {},
        // Volo's Complete
        typeof MONSTERS_VOLO_COMPLETE !== 'undefined' ? MONSTERS_VOLO_COMPLETE : {},
        // MToF Complete
        typeof MONSTERS_MTOF_COMPLETE !== 'undefined' ? MONSTERS_MTOF_COMPLETE : {},
        // MToF Extended (Gith, Shadar-kai, Star Spawn, Sorrowsworn)
        typeof MONSTERS_MTOF_EXTENDED !== 'undefined' ? MONSTERS_MTOF_EXTENDED : {},
        // Eladrin and Oblex
        typeof MONSTERS_ELADRIN !== 'undefined' ? MONSTERS_ELADRIN : {},
        // Volo's Extended (Yuan-ti, Goblinoids, Mind Flayer Creations, Hags)
        typeof MONSTERS_VOLO_EXTENDED !== 'undefined' ? MONSTERS_VOLO_EXTENDED : {},
        // Adventure Book Monsters (CoS, ToA, SKT)
        typeof MONSTERS_ADVENTURES !== 'undefined' ? MONSTERS_ADVENTURES : {},
        // Extended Fiends (More Devils & Demons)
        typeof MONSTERS_FIENDS_EXTENDED !== 'undefined' ? MONSTERS_FIENDS_EXTENDED : {},
        // Classic D&D Monsters (Golems, Aberrations, Monstrosities, Undead)
        typeof MONSTERS_CLASSICS !== 'undefined' ? MONSTERS_CLASSICS : {},
        // Celestials (Angels, Other Celestials)
        typeof MONSTERS_CELESTIALS !== 'undefined' ? MONSTERS_CELESTIALS : {},
        // Planar Creatures (Modrons, Slaadi, Others)
        typeof MONSTERS_PLANAR !== 'undefined' ? MONSTERS_PLANAR : {},
        // Final Additions (Lycanthropes, Classic Creatures)
        typeof MONSTERS_FINAL !== 'undefined' ? MONSTERS_FINAL : {},
        // Expansion Pack 1 (Dinosaurs, NPCs, Swarms)
        typeof MONSTERS_EXPANSION1 !== 'undefined' ? MONSTERS_EXPANSION1 : {},
        // Expansion Pack 2 (Fey, Plants, Oozes)
        typeof MONSTERS_EXPANSION2 !== 'undefined' ? MONSTERS_EXPANSION2 : {},
        // Expansion Pack 3 (Giants, Undead, Elementals)
        typeof MONSTERS_EXPANSION3 !== 'undefined' ? MONSTERS_EXPANSION3 : {},
        // Expansion Pack 4 (Beasts, NPCs)
        typeof MONSTERS_EXPANSION4 !== 'undefined' ? MONSTERS_EXPANSION4 : {},
        // Expansion Pack 5 (Goblinoids, Drow, Classic Monsters)
        typeof MONSTERS_EXPANSION5 !== 'undefined' ? MONSTERS_EXPANSION5 : {},
        // Expansion Pack 6 (Underdark, Beasts, Constructs)
        typeof MONSTERS_EXPANSION6 !== 'undefined' ? MONSTERS_EXPANSION6 : {},
        // Expansion Pack 7 (Mephits, Fungi, Final NPCs)
        typeof MONSTERS_EXPANSION7 !== 'undefined' ? MONSTERS_EXPANSION7 : {},
        // Final Push (Zombies, Skeletons, Devils, Demons)
        typeof MONSTERS_FINAL_PUSH !== 'undefined' ? MONSTERS_FINAL_PUSH : {},
        // Expansion Pack 8 (Giants, Humanoids, Aberrations, Constructs, Beasts)
        typeof MONSTERS_EXPANSION8 !== 'undefined' ? MONSTERS_EXPANSION8 : {},
        // Expansion Pack 9 (Devils, Demons)
        typeof MONSTERS_EXPANSION9 !== 'undefined' ? MONSTERS_EXPANSION9 : {},
        // Expansion Pack 10 (Undead, Monstrosities, Yugoloths)
        typeof MONSTERS_EXPANSION10 !== 'undefined' ? MONSTERS_EXPANSION10 : {},
        // Expansion Pack 11 (Elementals, Fey, Sphinxes)
        typeof MONSTERS_EXPANSION11 !== 'undefined' ? MONSTERS_EXPANSION11 : {},
        // Expansion Pack 12 (Beholder-kin, NPCs, Yuan-ti)
        typeof MONSTERS_EXPANSION12 !== 'undefined' ? MONSTERS_EXPANSION12 : {},
        // Expansion Pack 13 (Swarms, Dragons, Undead)
        typeof MONSTERS_EXPANSION13 !== 'undefined' ? MONSTERS_EXPANSION13 : {},
        // Expansion Pack 14 (Sea Creatures, Underdark, Dinosaurs)
        typeof MONSTERS_EXPANSION14 !== 'undefined' ? MONSTERS_EXPANSION14 : {},
        // Expansion Pack 15 (Classic Monsters, Golems, Shapechangers)
        typeof MONSTERS_EXPANSION15 !== 'undefined' ? MONSTERS_EXPANSION15 : {},
        // Expansion Pack 16 (Devils, Demons, Undead, Beasts)
        typeof MONSTERS_EXPANSION16 !== 'undefined' ? MONSTERS_EXPANSION16 : {},
        // Expansion Pack 17 (Classic Monsters, Goblinoids, Misc)
        typeof MONSTERS_EXPANSION17 !== 'undefined' ? MONSTERS_EXPANSION17 : {},
        // Expansion Pack 18 (Undead, Aberrations, Fey)
        typeof MONSTERS_EXPANSION18 !== 'undefined' ? MONSTERS_EXPANSION18 : {},
        // Expansion Pack 19 (Misc Creatures, Giants, Plants)
        typeof MONSTERS_EXPANSION19 !== 'undefined' ? MONSTERS_EXPANSION19 : {},
        // Expansion Pack 20 (Elder Elementals, NPCs)
        typeof MONSTERS_EXPANSION20 !== 'undefined' ? MONSTERS_EXPANSION20 : {},
        // Expansion Pack 21 (Constructs, Undead, Devils)
        typeof MONSTERS_EXPANSION21 !== 'undefined' ? MONSTERS_EXPANSION21 : {},
        // Expansion Pack 22 (Demons, Celestials, Monstrosities)
        typeof MONSTERS_EXPANSION22 !== 'undefined' ? MONSTERS_EXPANSION22 : {},
        // Expansion Pack 23 (Legendary Creatures, Giants)
        typeof MONSTERS_EXPANSION23 !== 'undefined' ? MONSTERS_EXPANSION23 : {},
        // Expansion Pack 24 (Wizard NPCs, Misc)
        typeof MONSTERS_EXPANSION24 !== 'undefined' ? MONSTERS_EXPANSION24 : {},
        // Expansion Pack 25 (Underdark Creatures, Giants)
        typeof MONSTERS_EXPANSION25 !== 'undefined' ? MONSTERS_EXPANSION25 : {},
        // Expansion Pack 26 (Lycanthropes, Oozes)
        typeof MONSTERS_EXPANSION26 !== 'undefined' ? MONSTERS_EXPANSION26 : {},
        // Expansion Pack 27 (Vampires, Aberrations)
        typeof MONSTERS_EXPANSION27 !== 'undefined' ? MONSTERS_EXPANSION27 : {},
        // Expansion Pack 28 (Liches, Celestials)
        typeof MONSTERS_EXPANSION28 !== 'undefined' ? MONSTERS_EXPANSION28 : {},
        // Expansion Pack 29 (Iconic Monsters - Beholder, Mind Flayer, Pit Fiend, Balor)
        typeof MONSTERS_EXPANSION29 !== 'undefined' ? MONSTERS_EXPANSION29 : {},
        // Expansion Pack 30 (Adult Chromatic Dragons)
        typeof MONSTERS_EXPANSION30 !== 'undefined' ? MONSTERS_EXPANSION30 : {},
        // Expansion Pack 31 (Adult Metallic Dragons)
        typeof MONSTERS_EXPANSION31 !== 'undefined' ? MONSTERS_EXPANSION31 : {},
        // Expansion Pack 32 (Young Dragons)
        typeof MONSTERS_EXPANSION32 !== 'undefined' ? MONSTERS_EXPANSION32 : {},
        // Expansion Pack 33 (Ancient Dragons, Death Knight, Mummy Lord, Rakshasa)
        typeof MONSTERS_EXPANSION33 !== 'undefined' ? MONSTERS_EXPANSION33 : {},
        // Expansion Pack 34 (More Ancient Dragons, Dracolich, Gith, Archmage)
        typeof MONSTERS_EXPANSION34 !== 'undefined' ? MONSTERS_EXPANSION34 : {},
        // Expansion Pack 35 (Ancient Metallic Dragons)
        typeof MONSTERS_EXPANSION35 !== 'undefined' ? MONSTERS_EXPANSION35 : {},
        // Expansion Pack 36 (Dragon Wyrmlings)
        typeof MONSTERS_EXPANSION36 !== 'undefined' ? MONSTERS_EXPANSION36 : {},
        // Expansion Pack 37 (NPCs)
        typeof MONSTERS_EXPANSION37 !== 'undefined' ? MONSTERS_EXPANSION37 : {},
        // Expansion Pack 38 (Sphinxes, Celestials, Mounts)
        typeof MONSTERS_EXPANSION38 !== 'undefined' ? MONSTERS_EXPANSION38 : {},
        // Expansion Pack 39 (Golems, Beasts, Dinosaurs)
        typeof MONSTERS_EXPANSION39 !== 'undefined' ? MONSTERS_EXPANSION39 : {},
        // Expansion Pack 40 (More Beasts)
        typeof MONSTERS_EXPANSION40 !== 'undefined' ? MONSTERS_EXPANSION40 : {},
        // Expansion Pack 41 (Fey, Aberrations)
        typeof MONSTERS_EXPANSION41 !== 'undefined' ? MONSTERS_EXPANSION41 : {},
        // Expansion Pack 42 (Oozes, Mephits)
        typeof MONSTERS_EXPANSION42 !== 'undefined' ? MONSTERS_EXPANSION42 : {},
        // Expansion Pack 43 (Plants, Undead)
        typeof MONSTERS_EXPANSION43 !== 'undefined' ? MONSTERS_EXPANSION43 : {},
        // Expansion Pack 44 (Classic Monsters)
        typeof MONSTERS_EXPANSION44 !== 'undefined' ? MONSTERS_EXPANSION44 : {},
        // Expansion Pack 45 (More Classic Monsters)
        typeof MONSTERS_EXPANSION45 !== 'undefined' ? MONSTERS_EXPANSION45 : {},
        // Expansion Pack 46 (More Monstrosities)
        typeof MONSTERS_EXPANSION46 !== 'undefined' ? MONSTERS_EXPANSION46 : {},
        // Expansion Pack 47 (More Humanoids)
        typeof MONSTERS_EXPANSION47 !== 'undefined' ? MONSTERS_EXPANSION47 : {},
        // Expansion Pack 48 (Aquatic Creatures, Hags)
        typeof MONSTERS_EXPANSION48 !== 'undefined' ? MONSTERS_EXPANSION48 : {},
        // Expansion Pack 49 (Devils)
        typeof MONSTERS_EXPANSION49 !== 'undefined' ? MONSTERS_EXPANSION49 : {},
        // Expansion Pack 50 (Demons)
        typeof MONSTERS_EXPANSION50 !== 'undefined' ? MONSTERS_EXPANSION50 : {},
        // Expansion Pack 51 (Swarms, Common)
        typeof MONSTERS_EXPANSION51 !== 'undefined' ? MONSTERS_EXPANSION51 : {},
        // Expansion Pack 52 (Small Dragons, Constructs)
        typeof MONSTERS_EXPANSION52 !== 'undefined' ? MONSTERS_EXPANSION52 : {},
        // Expansion Pack 53 (Demon Lords)
        typeof MONSTERS_EXPANSION53 !== 'undefined' ? MONSTERS_EXPANSION53 : {},
        // Expansion Pack 54 (Archdevils)
        typeof MONSTERS_EXPANSION54 !== 'undefined' ? MONSTERS_EXPANSION54 : {},
        // Expansion Pack 55 (VGtM Missing)
        typeof MONSTERS_EXPANSION55 !== 'undefined' ? MONSTERS_EXPANSION55 : {},
        // Expansion Pack 56 (MToF Missing)
        typeof MONSTERS_EXPANSION56 !== 'undefined' ? MONSTERS_EXPANSION56 : {},
        // Expansion Pack 57 (Iconic Monsters - Tarrasque, Demon Lords, Archdevils, Common)
        typeof monstersExpansion57 !== 'undefined' ? monstersExpansion57 : {},
        // Expansion Pack 58 (Environment-Specific Creatures)
        typeof monstersExpansion58 !== 'undefined' ? monstersExpansion58 : {}
    ];
    
    for (const source of monsterSources) {
        Object.assign(allMonsters, source);
    }
    
    console.log(`Monster library loaded: ${Object.keys(allMonsters).length} creatures available`);
}

// Initialize on script load
initializeMonsterLibrary();

// Utility: Format CR for display
function formatCR(cr) {
    if (cr === 0.125) return '1/8';
    if (cr === 0.25) return '1/4';
    if (cr === 0.5) return '1/2';
    return String(cr);
}

// Utility: Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Utility: Capitalize string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// ============================================
// MONSTER MAKER - Categorization Schema
// ============================================

// Environment/Terrain tags
const ENVIRONMENTS = [
    'arctic', 'coastal', 'desert', 'forest', 'grassland', 
    'hill', 'mountain', 'swamp', 'underdark', 'underwater', 
    'urban', 'astral', 'feywild', 'shadowfell', 'limbo', 'far realm'
];

// Combat Role tags (based on 4e design philosophy)
const ROLES = {
    'artillery': 'High damage at range, low defenses',
    'brute': 'High HP and damage, lower accuracy',
    'controller': 'Battlefield control, debuffs, area effects',
    'leader': 'Buffs allies, commands minions',
    'lurker': 'High damage from ambush, low sustained damage',
    'minion': 'Low HP, groups together',
    'skirmisher': 'Mobile, hit-and-run tactics',
    'soldier': 'High defenses, moderate damage'
};

// Monster type categories
const CREATURE_TYPES = [
    'aberration', 'beast', 'celestial', 'construct', 'dragon',
    'elemental', 'fey', 'fiend', 'giant', 'humanoid',
    'monstrosity', 'ooze', 'plant', 'undead'
];

// Size categories with space and reach defaults
const SIZES = {
    'tiny': { space: 2.5, reach: 0 },
    'small': { space: 5, reach: 5 },
    'medium': { space: 5, reach: 5 },
    'large': { space: 10, reach: 5 },
    'huge': { space: 15, reach: 10 },
    'gargantuan': { space: 20, reach: 15 }
};

// CR to XP mapping
const CR_XP_TABLE = {
    0: 10, 0.125: 25, 0.25: 50, 0.5: 100,
    1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800,
    6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900,
    11: 7200, 12: 8400, 13: 10000, 14: 11500, 15: 13000,
    16: 15000, 17: 18000, 18: 20000, 19: 22000, 20: 25000,
    21: 33000, 22: 41000, 23: 50000, 24: 62000, 25: 75000,
    26: 90000, 27: 105000, 28: 120000, 29: 135000, 30: 155000
};

// Get XP for a given CR
function getXPForCR(cr) {
    return CR_XP_TABLE[cr] || 0;
}

// Filter monsters by environment
function getMonstersByEnvironment(env) {
    return Object.entries(allMonsters)
        .filter(([key, monster]) => monster.environment && monster.environment.includes(env))
        .map(([key, monster]) => ({ id: key, ...monster }));
}

// Filter monsters by role
function getMonstersByRole(role) {
    return Object.entries(allMonsters)
        .filter(([key, monster]) => monster.role === role)
        .map(([key, monster]) => ({ id: key, ...monster }));
}

// Filter monsters by type
function getMonstersByType(type) {
    return Object.entries(allMonsters)
        .filter(([key, monster]) => monster.type === type)
        .map(([key, monster]) => ({ id: key, ...monster }));
}

// Filter monsters by CR range
function getMonstersByCRRange(minCR, maxCR) {
    return Object.entries(allMonsters)
        .filter(([key, monster]) => monster.cr >= minCR && monster.cr <= maxCR)
        .map(([key, monster]) => ({ id: key, ...monster }));
}

// Filter monsters by tags
function getMonstersByTag(tag) {
    return Object.entries(allMonsters)
        .filter(([key, monster]) => monster.tags && monster.tags.includes(tag))
        .map(([key, monster]) => ({ id: key, ...monster }));
}

// Get all unique tags from the library
function getAllTags() {
    const tags = new Set();
    Object.values(allMonsters).forEach(monster => {
        if (monster.tags) {
            monster.tags.forEach(tag => tags.add(tag));
        }
    });
    return Array.from(tags).sort();
}

// Get library statistics
function getLibraryStats() {
    const monsters = Object.values(allMonsters);
    const stats = {
        total: monsters.length,
        byType: {},
        byRole: {},
        byEnvironment: {},
        byCR: {},
        bySource: {}
    };
    
    monsters.forEach(m => {
        // By type
        stats.byType[m.type] = (stats.byType[m.type] || 0) + 1;
        
        // By role
        if (m.role) {
            stats.byRole[m.role] = (stats.byRole[m.role] || 0) + 1;
        }
        
        // By environment
        if (m.environment) {
            m.environment.forEach(env => {
                stats.byEnvironment[env] = (stats.byEnvironment[env] || 0) + 1;
            });
        }
        
        // By CR
        const crKey = formatCR(m.cr);
        stats.byCR[crKey] = (stats.byCR[crKey] || 0) + 1;
        
        // By source
        if (m.source) {
            stats.bySource[m.source] = (stats.bySource[m.source] || 0) + 1;
        }
    });
    
    return stats;
}

// Expansion Pack 6 - Final push to 1000!
// More diverse creatures

const MONSTERS_EXPANSION6 = {
    // ===== Sahuagin =====
    
    

    // ===== More Underdark Creatures =====
    
    
    "quaggoth": {
        name: "Quaggoth",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "quaggoth",
        alignment: "chaotic neutral",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 17, dex: 12, con: 16, int: 6, wis: 12, cha: 7 },
        skills: { athletics: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 2,
        environment: ["underdark"],
        role: "brute",
        tags: ["humanoid", "quaggoth"],
        traits: [
            { name: "Wounded Fury", description: "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The quaggoth makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." }
        ]
    },
    
    
    

    // ===== More Beasts =====
    
    
    
    "cave-bear": {
        name: "Cave Bear",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: 40, swim: 30 },
        abilityScores: { str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "brute",
        tags: ["beast", "bear"],
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
    
    
    
    

    // ===== More Misc Creatures =====
    
    
    
    
};

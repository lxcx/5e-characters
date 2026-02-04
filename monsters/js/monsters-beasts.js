// Beasts and Common Creatures
// Source: MM (Monster Manual)

const MONSTERS_BEASTS = {
    // ===== WOLVES & CANINES =====
    
    
    

    // ===== BEARS =====
    
    
    "polar-bear": {
        name: "Polar Bear",
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
        senses: [],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
    

    // ===== CATS =====
    
    
    
    "saber-toothed-tiger": {
        name: "Saber-Toothed Tiger",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: [],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
    

    // ===== HORSES & MOUNTS =====
    "riding-horse": {
        name: "Riding Horse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 60 },
        abilityScores: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
        senses: [],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) bludgeoning damage." }
        ]
    },
    
    

    // ===== SNAKES =====
    
    

    // ===== SPIDERS =====
    
    

    // ===== AQUATIC =====
    
    

    // ===== BIRDS =====
    
    

    // ===== MISC BEASTS =====
    
    
    
    
    
    
    
};

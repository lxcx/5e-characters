// Extended Fiends - More Devils and Demons
// Sources: MM, MToF, VGtM

const MONSTERS_FIENDS_EXTENDED = {
    // ===== Greater Devils =====
    
    
    
    

    // ===== Greater Demons =====
    
    
    "goristro": {
        name: "Goristro",
        source: "MM",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 310,
        hitDice: "23d12+161",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 11, con: 25, int: 6, wis: 13, cha: 14 },
        savingThrows: { str: 13, dex: 6, con: 13, wis: 7 },
        skills: { perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal",
        cr: 17,
        environment: ["abyss"],
        role: "brute",
        tags: ["demon", "fiend", "minotaur"],
        traits: [
            { name: "Charge", description: "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone." },
            { name: "Labyrinthine Recall", description: "The goristro can perfectly recall any path it has traveled." },
            { name: "Magic Resistance", description: "The goristro has advantage on saving throws against spells and other magical effects." },
            { name: "Siege Monster", description: "The goristro deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The goristro makes three attacks: two with its fists and one with its hoof." },
            { name: "Fist", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." },
            { name: "Hoof", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10+7) bludgeoning damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone." },
            { name: "Gore", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10+7) piercing damage." }
        ]
    },
    
    

    // ===== Lesser Devils =====
    
    
    
};

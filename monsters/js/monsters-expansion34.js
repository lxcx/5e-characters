// Expansion Pack 34 - More Creatures
// Final comprehensive additions

const MONSTERS_EXPANSION34 = {
    // ===== More Ancient Dragons =====
    
    
    

    // ===== More Misc Creatures =====
    "draco-lich": {
        name: "Dracolich",
        source: "MM",
        size: "huge",
        type: "undead",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 225,
        hitDice: "18d12+108",
        speed: { walk: 40, fly: 80 },
        abilityScores: { str: 27, dex: 14, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 8, con: 12, wis: 8, cha: 10 },
        skills: { perception: 14, stealth: 8 },
        damageResistances: ["necrotic"],
        damageImmunities: ["lightning", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 17,
        environment: ["any"],
        role: "artillery",
        tags: ["undead", "dragon"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dracolich fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The dracolich has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10+8) piercing damage plus 7 (2d6) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dracolich's choice that is within 120 feet and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dracolich makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dracolich makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dracolich beats its wings. Each creature within 10 feet must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    }};

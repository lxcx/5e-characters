// Expansion Pack 36 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION36 = {
    // ===== Wyrmlings =====
    "white-dragon-wyrmling": {
        name: "White Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, burrow: 15, fly: 60, swim: 30 },
        abilityScores: { str: 14, dex: 10, con: 14, int: 5, wis: 10, cha: 11 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 2 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["cold"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        environment: ["arctic"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 2 (1d4) cold damage." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "black-dragon-wyrmling": {
        name: "Black Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 15, dex: 14, con: 13, int: 10, wis: 11, cha: 13 },
        savingThrows: { dex: 4, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["acid"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        environment: ["swamp"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 2 (1d4) acid damage." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "green-dragon-wyrmling": {
        name: "Green Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        environment: ["forest"],
        role: "controller",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 3 (1d6) poison damage." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "blue-dragon-wyrmling": {
        name: "Blue Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30, burrow: 15, fly: 60 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 3,
        environment: ["desert", "coastal"],
        role: "artillery",
        tags: ["dragon", "chromatic"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage plus 3 (1d6) lightning damage." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "red-dragon-wyrmling": {
        name: "Red Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30, climb: 30, fly: 60 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 5, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 4,
        environment: ["mountain"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) piercing damage plus 3 (1d6) fire damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "brass-dragon-wyrmling": {
        name: "Brass Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 30, burrow: 15, fly: 60 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 10, wis: 11, cha: 13 },
        savingThrows: { dex: 2, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 1,
        environment: ["desert"],
        role: "controller",
        tags: ["dragon", "metallic"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (20-foot line, DC 11, 14 (4d6) fire damage) or Sleep Breath (15-foot cone, DC 11)." }
        ]
    },
    "copper-dragon-wyrmling": {
        name: "Copper Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, climb: 30, fly: 60 },
        abilityScores: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["acid"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 1,
        environment: ["hill"],
        role: "controller",
        tags: ["dragon", "metallic"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath (20-foot line, DC 11, 18 (4d8) acid damage) or Slowing Breath (15-foot cone, DC 11)." }
        ]
    },
    "bronze-dragon-wyrmling": {
        name: "Bronze Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        environment: ["coastal"],
        role: "brute",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath (40-foot line, DC 12, 16 (3d10) lightning damage) or Repulsion Breath (30-foot cone, DC 12)." }
        ]
    },
    "silver-dragon-wyrmling": {
        name: "Silver Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 5, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["cold"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        environment: ["mountain"],
        role: "brute",
        tags: ["dragon", "metallic"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath (15-foot cone, DC 13, 18 (4d8) cold damage) or Paralyzing Breath (15-foot cone, DC 13)." }
        ]
    },
    "gold-dragon-wyrmling": {
        name: "Gold Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 19, dex: 14, con: 17, int: 14, wis: 11, cha: 16 },
        savingThrows: { dex: 4, con: 5, wis: 2, cha: 5 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 3,
        environment: ["grassland"],
        role: "brute",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (15-foot cone, DC 13, 22 (4d10) fire damage) or Weakening Breath (15-foot cone, DC 13)." }
        ]
    }
};

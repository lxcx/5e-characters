// Expansion Pack 34 - More Creatures
// Final comprehensive additions

const MONSTERS_EXPANSION34 = {
    // ===== More Ancient Dragons =====
    "ancient-green-dragon": {
        name: "Ancient Green Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful evil",
        ac: 21,
        acType: "natural armor",
        hp: 385,
        hitDice: "22d20+154",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
        savingThrows: { dex: 8, con: 14, wis: 10, cha: 11 },
        skills: { deception: 11, insight: 10, perception: 17, persuasion: 11, stealth: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 22,
        environment: ["forest"],
        role: "controller",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage plus 10 (3d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    },
    "ancient-blue-dragon": {
        name: "Ancient Blue Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful evil",
        ac: 22,
        acType: "natural armor",
        hp: 481,
        hitDice: "26d20+208",
        speed: { walk: 40, burrow: 40, fly: 80 },
        abilityScores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 23,
        environment: ["desert", "coastal"],
        role: "artillery",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) piercing damage plus 11 (2d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8+9) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone." }
        ]
    },
    "ancient-red-dragon": {
        name: "Ancient Red Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 546,
        hitDice: "28d20+252",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilityScores: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
        savingThrows: { dex: 7, con: 16, wis: 9, cha: 13 },
        skills: { perception: 16, stealth: 7 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 24,
        environment: ["mountain"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10+10) piercing damage plus 14 (4d6) fire damage." },
            { name: "Claw", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6+10) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8+10) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone." }
        ]
    },

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
    },
    "githyanki-knight": {
        name: "Githyanki Knight",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 91,
        hitDice: "14d8+28",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 15, int: 14, wis: 14, cha: 15 },
        savingThrows: { con: 5, int: 5, wis: 5 },
        senses: [],
        languages: "Gith",
        cr: 8,
        environment: ["any"],
        role: "soldier",
        tags: ["humanoid", "gith"],
        actions: [
            { name: "Multiattack", description: "The githyanki makes two silver greatsword attacks." },
            { name: "Silver Greatsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage plus 10 (3d6) psychic damage. This is a magic weapon attack. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 13,
            spells: {
                atWill: ["mage hand (the hand is invisible)"],
                "3/day each": ["jump", "misty step", "nondetection (self only)", "tongues"],
                "1/day each": ["plane shift", "telekinesis"]
            }
        }
    },
    "githzerai-zerth": {
        name: "Githzerai Zerth",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful neutral",
        ac: 17,
        hp: 84,
        hitDice: "13d8+26",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 18, con: 15, int: 16, wis: 17, cha: 12 },
        savingThrows: { str: 4, dex: 7, int: 6, wis: 6 },
        skills: { arcana: 6, insight: 6, perception: 6 },
        senses: [],
        languages: "Gith",
        cr: 6,
        environment: ["any"],
        role: "skirmisher",
        tags: ["humanoid", "gith"],
        traits: [
            { name: "Psychic Defense", description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes two unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage plus 13 (3d8) psychic damage. This is a magic weapon attack." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 14,
            spells: {
                atWill: ["mage hand (the hand is invisible)"],
                "3/day each": ["feather fall", "jump", "see invisibility", "shield"],
                "1/day each": ["phantasmal killer", "plane shift"]
            }
        }
    },
    "archmage": {
        name: "Archmage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 99,
        hitDice: "18d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16 },
        savingThrows: { int: 9, wis: 6 },
        skills: { arcana: 13, history: 13 },
        damageResistances: ["damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)"],
        senses: [],
        languages: "any six languages",
        cr: 12,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The archmage has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["fire bolt", "light", "mage hand", "prestidigitation", "shocking grasp"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "mage armor", "magic missile"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "mirror image", "misty step"] },
                "3rd": { slots: 3, spells: ["counterspell", "fly", "lightning bolt"] },
                "4th": { slots: 3, spells: ["banishment", "fire shield", "stoneskin"] },
                "5th": { slots: 3, spells: ["cone of cold", "scrying", "wall of force"] },
                "6th": { slots: 1, spells: ["globe of invulnerability"] },
                "7th": { slots: 1, spells: ["teleport"] },
                "8th": { slots: 1, spells: ["mind blank"] },
                "9th": { slots: 1, spells: ["time stop"] }
            }
        }
    }
};

// Expansion Pack 5 - Push to 1000
// More diverse creatures

const MONSTERS_EXPANSION5 = {
    // ===== Kobolds & Goblins =====
    "kobold": {
        name: "Kobold",
        source: "MM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 5,
        hitDice: "2d6-2",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 0.125,
        environment: ["forest", "hill", "mountain", "underdark"],
        role: "minion",
        tags: ["humanoid", "kobold"],
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Dagger", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    },
    "goblin": {
        name: "Goblin",
        source: "MM",
        size: "small",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilityScores: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 0.25,
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "minion",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Nimble Escape", description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns." }
        ],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "hobgoblin": {
        name: "Hobgoblin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 0.5,
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "soldier",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) slashing damage, or 6 (1d10+1) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8+1) piercing damage." }
        ]
    },
    "bugbear": {
        name: "Bugbear",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 16,
        acType: "hide armor, shield",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
        skills: { stealth: 6, survival: 2 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 1,
        environment: ["forest", "grassland", "underdark"],
        role: "brute",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)." },
            { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack." }
        ],
        actions: [
            { name: "Morningstar", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8+2) piercing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6+2) piercing damage in melee or 5 (1d6+2) piercing damage at range." }
        ]
    },

    // ===== Orcs =====
    "orc": {
        name: "Orc",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 13,
        acType: "hide armor",
        hp: 15,
        hitDice: "2d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
        skills: { intimidation: 2 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 0.5,
        environment: ["forest", "grassland", "hill", "mountain", "underdark"],
        role: "brute",
        tags: ["humanoid", "orc"],
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12+3) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "orc-eye-of-gruumsh": {
        name: "Orc Eye of Gruumsh",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 16,
        acType: "ring mail, shield",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 16, int: 9, wis: 13, cha: 12 },
        skills: { intimidation: 3, religion: 1 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 2,
        environment: ["forest", "grassland", "hill", "mountain", "underdark"],
        role: "leader",
        tags: ["humanoid", "orc", "spellcaster"],
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
            { name: "Gruumsh's Fury", description: "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attack)." }
        ],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (1d6+3 plus 1d8) piercing damage, or 12 (2d8+3) piercing damage if used with two hands to make a melee attack." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 11,
            attack: 3,
            spells: {
                cantrips: ["guidance", "resistance", "thaumaturgy"],
                "1st": { slots: 3, spells: ["bless", "command"] }
            }
        }
    },

    // ===== Gnolls =====
    "gnoll": {
        name: "Gnoll",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 15,
        acType: "hide armor, shield",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll",
        cr: 0.5,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["humanoid", "gnoll"],
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage if used with two hands to make a melee attack." },
            { name: "Longbow", description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8+1) piercing damage." }
        ]
    },
    "gnoll-pack-lord": {
        name: "Gnoll Pack Lord",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 15,
        acType: "chain shirt",
        hp: 49,
        hitDice: "9d8+9",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll",
        cr: 2,
        environment: ["forest", "grassland", "hill"],
        role: "leader",
        tags: ["humanoid", "gnoll"],
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gnoll makes two attacks, either with its glaive or its longbow, and uses its Incite Rampage if it can." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage." },
            { name: "Glaive", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10+3) slashing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Incite Rampage (Recharge 5-6)", description: "One creature the gnoll can see within 30 feet of it can use its reaction to make a melee attack if it can hear the gnoll and has the Rampage trait." }
        ]
    },
    "gnoll-fang-of-yeenoghu": {
        name: "Gnoll Fang of Yeenoghu",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 14,
        acType: "hide armor",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 15, con: 15, int: 10, wis: 11, cha: 13 },
        savingThrows: { con: 4, wis: 2, cha: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Gnoll",
        cr: 4,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["fiend", "gnoll"],
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gnoll makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 7 (2d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage." }
        ]
    },

    // ===== Drow =====
    "drow": {
        name: "Drow",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 15,
        acType: "chain shirt",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 10, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Elvish, Undercommon",
        cr: 0.25,
        environment: ["underdark"],
        role: "skirmisher",
        tags: ["humanoid", "elf", "drow"],
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 11,
            spells: {
                atWill: ["dancing lights"],
                "1/day each": ["darkness", "faerie fire"]
            }
        }
    },
    "drow-elite-warrior": {
        name: "Drow Elite Warrior",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 18,
        acType: "studded leather, shield",
        hp: 71,
        hitDice: "11d8+22",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 18, con: 14, int: 11, wis: 13, cha: 12 },
        savingThrows: { dex: 7, con: 5, wis: 4 },
        skills: { perception: 4, stealth: 10 },
        senses: ["darkvision 120 ft."],
        languages: "Elvish, Undercommon",
        cr: 5,
        environment: ["underdark"],
        role: "skirmisher",
        tags: ["humanoid", "elf", "drow"],
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The drow makes two shortsword attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) poison damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit: 7 (1d6+4) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour." }
        ],
        reactions: [
            { name: "Parry", description: "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["dancing lights"],
                "1/day each": ["darkness", "faerie fire", "levitate (self only)"]
            }
        }
    },
    "drow-mage": {
        name: "Drow Mage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 12,
        acType: "15 with mage armor",
        hp: 45,
        hitDice: "10d8",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 10, int: 17, wis: 13, cha: 12 },
        skills: { arcana: 6, deception: 4, perception: 4, stealth: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Elvish, Undercommon",
        cr: 7,
        environment: ["underdark"],
        role: "artillery",
        tags: ["humanoid", "elf", "drow", "spellcaster"],
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Staff", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands, plus 3 (1d6) poison damage." },
            { name: "Summon Demon (1/Day)", description: "The drow attempts to magically summon a quasit, or a shadow demon with a 50 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["mage hand", "minor illusion", "poison spray", "ray of frost"],
                "1st": { slots: 4, spells: ["mage armor", "magic missile", "shield", "witch bolt"] },
                "2nd": { slots: 3, spells: ["alter self", "misty step", "web"] },
                "3rd": { slots: 3, spells: ["fly", "lightning bolt"] },
                "4th": { slots: 3, spells: ["Evard's black tentacles", "greater invisibility"] },
                "5th": { slots: 1, spells: ["cloudkill"] }
            }
        }
    },
    "drow-priestess-of-lolth": {
        name: "Drow Priestess of Lolth",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 16,
        acType: "scale mail",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 12, int: 13, wis: 17, cha: 18 },
        savingThrows: { con: 4, wis: 6, cha: 7 },
        skills: { insight: 6, perception: 6, religion: 4, stealth: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Elvish, Undercommon",
        cr: 8,
        environment: ["underdark"],
        role: "leader",
        tags: ["humanoid", "elf", "drow", "spellcaster"],
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The drow makes two scourge attacks." },
            { name: "Scourge", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage plus 17 (5d6) poison damage." },
            { name: "Summon Demon (1/Day)", description: "The drow attempts to magically summon a yochlol with a 30 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["guidance", "poison spray", "resistance", "spare the dying", "thaumaturgy"],
                "1st": { slots: 4, spells: ["animal friendship", "cure wounds", "detect poison and disease", "ray of sickness"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "protection from poison", "web"] },
                "3rd": { slots: 3, spells: ["conjure animals (2 giant spiders)", "dispel magic"] },
                "4th": { slots: 3, spells: ["divination", "freedom of movement"] },
                "5th": { slots: 2, spells: ["insect plague", "mass cure wounds"] },
                "6th": { slots: 1, spells: ["harm"] }
            }
        }
    },

    // ===== Troglodytes & Kuo-toa =====
    "troglodyte": {
        name: "Troglodyte",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "troglodyte",
        alignment: "chaotic evil",
        ac: 11,
        acType: "natural armor",
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 10, con: 14, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 2 },
        senses: ["darkvision 60 ft."],
        languages: "Troglodyte",
        cr: 0.25,
        environment: ["underdark"],
        role: "brute",
        tags: ["humanoid", "troglodyte"],
        traits: [
            { name: "Chameleon Skin", description: "The troglodyte has advantage on Dexterity (Stealth) checks made to hide." },
            { name: "Stench", description: "Any creature other than a troglodyte that starts its turn within 5 feet of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The troglodyte makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "kuo-toa": {
        name: "Kuo-toa",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor, shield",
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 13, dex: 10, con: 11, int: 11, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 0.25,
        environment: ["underdark", "underwater"],
        role: "soldier",
        tags: ["humanoid", "kuo-toa", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." },
            { name: "Net", description: "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller creature. Hit: The target is restrained. A creature can use its action to make a DC 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net." }
        ],
        reactions: [
            { name: "Sticky Shield", description: "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding." }
        ]
    },

    // ===== More Classic Creatures =====
    "mimic": {
        name: "Mimic",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 12,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 15 },
        abilityScores: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
        skills: { stealth: 5 },
        damageImmunities: ["acid"],
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark", "dungeon"],
        role: "lurker",
        tags: ["monstrosity", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Adhesive (Object Form Only)", description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage." },
            { name: "False Appearance (Object Form Only)", description: "While the mimic remains motionless, it is indistinguishable from an ordinary object." },
            { name: "Grappler", description: "The mimic has advantage on attack rolls against any creature grappled by it." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage plus 4 (1d8) acid damage." }
        ]
    },
    "phase-spider": {
        name: "Phase Spider",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d10+5",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 15, dex: 15, con: 12, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["underdark", "forest"],
        role: "lurker",
        tags: ["monstrosity", "spider", "ethereal"],
        traits: [
            { name: "Ethereal Jaunt", description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa." },
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "carrion-crawler": {
        name: "Carrion Crawler",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 13, con: 16, int: 1, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Smell", description: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Spider Climb", description: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The carrion crawler makes two attacks: one with its tentacles and one with its bite." },
            { name: "Tentacles", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4+2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage." }
        ]
    },
    "grick": {
        name: "Grick",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "6d8",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 14, con: 11, int: 3, wis: 14, cha: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target." },
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    }
};

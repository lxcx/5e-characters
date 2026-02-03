// Monster Manual Complete - Part 2 (G-M remaining)
// Source: MM (Monster Manual)

const MONSTERS_MM_COMPLETE2 = {
    // ===== G =====
    "gargoyle": {
        name: "Gargoyle",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 15, dex: 11, con: 16, int: 6, wis: 11, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Terran",
        cr: 2,
        traits: [
            { name: "False Appearance", description: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue." }
        ],
        actions: [
            { name: "Multiattack", description: "The gargoyle makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." }
        ]
    },
    "genie-dao": {
        name: "Dao",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 187,
        hitDice: "15d10+105",
        speed: { walk: 30, burrow: 30, fly: 30 },
        abilityScores: { str: 23, dex: 12, con: 24, int: 12, wis: 13, cha: 14 },
        savingThrows: { int: 5, wis: 5, cha: 6 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 120 ft."],
        languages: "Terran",
        cr: 11,
        traits: [
            { name: "Earth Glide", description: "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through." },
            { name: "Elemental Demise", description: "If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying." },
            { name: "Sure-Footed", description: "The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Multiattack", description: "The dao makes two fist attacks or two maul attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Maul", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 20 (4d6+6) bludgeoning damage. If the target is a Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked prone." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect evil and good", "detect magic", "stone shape"],
                "3/day each": ["passwall", "move earth", "tongues"],
                "1/day each": ["conjure elemental (earth elemental only)", "gaseous form", "invisibility", "phantasmal killer", "plane shift", "wall of stone"]
            }
        }
    },
    "genie-djinni": {
        name: "Djinni",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 161,
        hitDice: "14d10+84",
        speed: { walk: 30, fly: 90 },
        abilityScores: { str: 21, dex: 15, con: 22, int: 15, wis: 16, cha: 20 },
        savingThrows: { dex: 6, wis: 7, cha: 9 },
        damageImmunities: ["lightning", "thunder"],
        senses: ["darkvision 120 ft."],
        languages: "Auran",
        cr: 11,
        traits: [
            { name: "Elemental Demise", description: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The djinni makes three scimitar attacks." },
            { name: "Scimitar", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)." },
            { name: "Create Whirlwind", description: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell)." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["detect evil and good", "detect magic", "thunderwave"],
                "3/day each": ["create food and water", "tongues", "wind walk"],
                "1/day each": ["conjure elemental (air elemental only)", "creation", "gaseous form", "invisibility", "major image", "plane shift"]
            }
        }
    },
    "genie-efreeti": {
        name: "Efreeti",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 22, dex: 12, con: 24, int: 16, wis: 15, cha: 16 },
        savingThrows: { int: 7, wis: 6, cha: 7 },
        damageImmunities: ["fire"],
        senses: ["darkvision 120 ft."],
        languages: "Ignan",
        cr: 11,
        traits: [
            { name: "Elemental Demise", description: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the efreeti was wearing or carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice." },
            { name: "Scimitar", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage plus 7 (2d6) fire damage." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["detect magic"],
                "3/day each": ["enlarge/reduce", "tongues"],
                "1/day each": ["conjure elemental (fire elemental only)", "gaseous form", "invisibility", "major image", "plane shift", "wall of fire"]
            }
        }
    },
    "genie-marid": {
        name: "Marid",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "chaotic neutral",
        ac: 17,
        acType: "natural armor",
        hp: 229,
        hitDice: "17d10+136",
        speed: { walk: 30, fly: 60, swim: 90 },
        abilityScores: { str: 22, dex: 12, con: 26, int: 18, wis: 17, cha: 18 },
        savingThrows: { dex: 5, wis: 7, cha: 8 },
        damageResistances: ["acid", "cold", "lightning"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Aquan",
        cr: 11,
        traits: [
            { name: "Amphibious", description: "The marid can breathe air and water." },
            { name: "Elemental Demise", description: "If the marid dies, its body disintegrates into a burst of water and foam, leaving behind only equipment the marid was wearing or carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The marid makes two trident attacks." },
            { name: "Trident", description: "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 13 (2d6+6) piercing damage, or 15 (2d8+6) piercing damage if used with two hands to make a melee attack." },
            { name: "Water Jet", description: "The marid magically shoots water in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw. On a failure, a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is pushed up to 20 feet away from the marid and knocked prone. On a success, a target takes half the bludgeoning damage, but is neither pushed nor knocked prone." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            spells: {
                atWill: ["create or destroy water", "detect evil and good", "detect magic", "fog cloud", "purify food and drink"],
                "3/day each": ["tongues", "water breathing", "water walk"],
                "1/day each": ["conjure elemental (water elemental only)", "control water", "gaseous form", "invisibility", "plane shift"]
            }
        }
    },
    "giant-badger": {
        name: "Giant Badger",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30, burrow: 10 },
        abilityScores: { str: 13, dex: 10, con: 15, int: 2, wis: 12, cha: 5 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The badger makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage." }
        ]
    },
    "giant-bat": {
        name: "Giant Bat",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 22,
        hitDice: "4d10",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 15, dex: 16, con: 11, int: 2, wis: 12, cha: 6 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "giant-centipede": {
        name: "Giant Centipede",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 5, dex: 14, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-crab": {
        name: "Giant Crab",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3 },
        skills: { stealth: 4 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target." }
        ]
    },
    "giant-fire-beetle": {
        name: "Giant Fire Beetle",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 30 },
        abilityScores: { str: 8, dex: 10, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Illumination", description: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6−1) slashing damage." }
        ]
    },
    "giant-frog": {
        name: "Giant Frog",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2, stealth: 3 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
            { name: "Swallow", description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
        ]
    },
    "giant-goat": {
        name: "Giant Goat",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40 },
        abilityScores: { str: 17, dex: 11, con: 12, int: 3, wis: 12, cha: 6 },
        senses: [],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) bludgeoning damage." }
        ]
    },
    "giant-hyena": {
        name: "Giant Hyena",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 50 },
        abilityScores: { str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Rampage", description: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage." }
        ]
    },
    "giant-lizard": {
        name: "Giant Lizard",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 15, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "giant-rat": {
        name: "Giant Rat",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Smell", description: "The rat has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ]
    },
    "giant-scorpion": {
        name: "Giant Scorpion",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 3,
        actions: [
            { name: "Multiattack", description: "The scorpion makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "giant-sea-horse": {
        name: "Giant Sea Horse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 16,
        hitDice: "3d10",
        speed: { walk: 0, swim: 40 },
        abilityScores: { str: 12, dex: 15, con: 11, int: 2, wis: 12, cha: 5 },
        senses: [],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Charge", description: "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Water Breathing", description: "The sea horse can breathe only underwater." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage." }
        ]
    },
    "giant-toad": {
        name: "Giant Toad",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Amphibious", description: "The toad can breathe air and water." },
            { name: "Standing Leap", description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target." },
            { name: "Swallow", description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
        ]
    },
    "giant-vulture": {
        name: "Giant Vulture",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral evil",
        ac: 10,
        hp: 22,
        hitDice: "3d10+6",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 15, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "understands Common but can't speak",
        cr: 1,
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The vulture makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." }
        ]
    },
    "giant-wasp": {
        name: "Giant Wasp",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 10, fly: 50 },
        abilityScores: { str: 10, dex: 14, con: 10, int: 1, wis: 10, cha: 3 },
        senses: [],
        languages: "—",
        cr: 0.5,
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-weasel": {
        name: "Giant Weasel",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 40 },
        abilityScores: { str: 11, dex: 16, con: 10, int: 4, wis: 12, cha: 5 },
        skills: { perception: 3, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Hearing and Smell", description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage." }
        ]
    },
    "giant-wolf-spider": {
        name: "Giant Wolf Spider",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4 },
        skills: { perception: 3, stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "gorgon": {
        name: "Gorgon",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 19,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7 },
        skills: { perception: 4 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Trampling Charge", description: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12+5) piercing damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10+5) bludgeoning damage." },
            { name: "Petrifying Breath (Recharge 5-6)", description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic." }
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
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target." },
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "grick-alpha": {
        name: "Grick Alpha",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 16, con: 15, int: 4, wis: 14, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 7,
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target." },
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8+4) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    "griffon": {
        name: "Griffon",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 30, fly: 80 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 2, wis: 13, cha: 8 },
        skills: { perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Sight", description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The griffon makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
        ]
    },
    "grimlock": {
        name: "Grimlock",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "grimlock",
        alignment: "neutral evil",
        ac: 11,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 12, int: 9, wis: 8, cha: 6 },
        skills: { athletics: 5, perception: 3, stealth: 3 },
        conditionImmunities: ["blinded"],
        senses: ["blindsight 30 ft."],
        languages: "Undercommon",
        cr: 0.25,
        traits: [
            { name: "Blind Senses", description: "The grimlock can't use its blindsight while deafened and unable to smell." },
            { name: "Keen Hearing and Smell", description: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Stone Camouflage", description: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Spiked Bone Club", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage plus 2 (1d4) piercing damage." }
        ]
    },

    // ===== H =====
    "harpy": {
        name: "Harpy",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 11,
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 },
        senses: [],
        languages: "Common",
        cr: 1,
        actions: [
            { name: "Multiattack", description: "The harpy makes two attacks: one with its claws and one with its club." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage." },
            { name: "Club", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage." },
            { name: "Luring Song", description: "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated." }
        ]
    },
    "hawk": {
        name: "Hawk",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 5, dex: 16, con: 8, int: 2, wis: 14, cha: 6 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Sight", description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ]
    },
    "hell-hound": {
        name: "Hell Hound",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hitDice: "7d8+14",
        speed: { walk: 50 },
        abilityScores: { str: 17, dex: 12, con: 14, int: 6, wis: 13, cha: 6 },
        skills: { perception: 5 },
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "understands Infernal but can't speak it",
        cr: 3,
        traits: [
            { name: "Keen Hearing and Smell", description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage plus 7 (2d6) fire damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "hippogriff": {
        name: "Hippogriff",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
        skills: { perception: 5 },
        senses: [],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Sight", description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The hippogriff makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
    },
    "hook-horror": {
        name: "Hook Horror",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft.", "darkvision 10 ft."],
        languages: "Hook Horror",
        cr: 3,
        traits: [
            { name: "Echolocation", description: "The hook horror can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Multiattack", description: "The hook horror makes two hook attacks." },
            { name: "Hook", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) piercing damage." }
        ]
    },
    "hunter-shark": {
        name: "Hunter Shark",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 0, swim: 40 },
        abilityScores: { str: 18, dex: 13, con: 15, int: 1, wis: 10, cha: 4 },
        skills: { perception: 2 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    "hyena": {
        name: "Hyena",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 50 },
        abilityScores: { str: 11, dex: 13, con: 12, int: 2, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Pack Tactics", description: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." }
        ]
    }
};

// Monster Manual Complete - Part 4 (P-Z remaining)
// Source: MM (Monster Manual)

const MONSTERS_MM_COMPLETE4 = {
    // ===== P =====
    "panther": {
        name: "Panther",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 50, climb: 40 },
        abilityScores: { str: 14, dex: 15, con: 10, int: 3, wis: 14, cha: 7 },
        skills: { perception: 4, stealth: 6 },
        senses: [],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Smell", description: "The panther has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "peryton": {
        name: "Peryton",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 16, dex: 12, con: 13, int: 9, wis: 12, cha: 10 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: [],
        languages: "understands Common and Elvish but can't speak",
        cr: 2,
        traits: [
            { name: "Dive Attack", description: "If the peryton is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target." },
            { name: "Flyby", description: "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach." },
            { name: "Keen Sight and Smell", description: "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The peryton makes one gore attack and one talon attack." },
            { name: "Gore", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) piercing damage." }
        ]
    },
    "piercer": {
        name: "Piercer",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 5, climb: 5 },
        abilityScores: { str: 10, dex: 13, con: 16, int: 1, wis: 7, cha: 3 },
        skills: { stealth: 5 },
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "False Appearance", description: "While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite." },
            { name: "Spider Climb", description: "The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Drop", description: "Melee Weapon Attack: +3 to hit, one creature directly underneath the piercer. Hit: 3 (1d6) piercing damage per 10 feet fallen, up to 21 (6d6). Miss: The piercer takes half the normal falling damage for the distance fallen." }
        ]
    },
    "poisonous-snake": {
        name: "Poisonous Snake",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 2, dex: 16, con: 11, int: 1, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "pony": {
        name: "Pony",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 2, wis: 11, cha: 7 },
        senses: [],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) bludgeoning damage." }
        ]
    },

    // ===== Q =====
    "quipper": {
        name: "Quipper",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 0, swim: 40 },
        abilityScores: { str: 2, dex: 16, con: 9, int: 1, wis: 7, cha: 2 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Blood Frenzy", description: "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The quipper can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },

    // ===== R =====
    "rat": {
        name: "Rat",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 20 },
        abilityScores: { str: 2, dex: 11, con: 9, int: 2, wis: 10, cha: 4 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Smell", description: "The rat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "raven": {
        name: "Raven",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 50 },
        abilityScores: { str: 2, dex: 14, con: 8, int: 2, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Mimicry", description: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "reef-shark": {
        name: "Reef Shark",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 0, swim: 40 },
        abilityScores: { str: 14, dex: 13, con: 13, int: 1, wis: 10, cha: 4 },
        skills: { perception: 2 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Pack Tactics", description: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "remorhaz": {
        name: "Remorhaz",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: 30, burrow: 20 },
        abilityScores: { str: 24, dex: 13, con: 21, int: 4, wis: 10, cha: 5 },
        damageImmunities: ["cold", "fire"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 11,
        traits: [
            { name: "Heated Body", description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10+7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target." },
            { name: "Swallow", description: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns." }
        ]
    },
    "roc": {
        name: "Roc",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 248,
        hitDice: "16d20+80",
        speed: { walk: 20, fly: 120 },
        abilityScores: { str: 28, dex: 10, con: 20, int: 3, wis: 10, cha: 9 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 3 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 11,
        traits: [
            { name: "Keen Sight", description: "The roc has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The roc makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8+9) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6+9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target." }
        ]
    },

    // ===== S =====
    "sahuagin": {
        name: "Sahuagin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9 },
        skills: { perception: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: 0.5,
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "sahuagin-baron": {
        name: "Sahuagin Baron",
        source: "MM",
        size: "large",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 16,
        acType: "breastplate",
        hp: 76,
        hitDice: "9d10+27",
        speed: { walk: 30, swim: 50 },
        abilityScores: { str: 19, dex: 15, con: 16, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 6, int: 5, wis: 4 },
        skills: { perception: 7 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: 5,
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes three attacks: one with its bite and two with its claws or trident." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Trident", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage, or 13 (2d8+4) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "sahuagin-priestess": {
        name: "Sahuagin Priestess",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 14, cha: 13 },
        skills: { perception: 6, religion: 3 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: 2,
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) slashing damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bless", "detect magic", "guiding bolt"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon (trident)"] },
                "3rd": { slots: 2, spells: ["mass healing word", "tongues"] }
            }
        }
    },
    "scorpion": {
        name: "Scorpion",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10 },
        abilityScores: { str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0,
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "sea-horse": {
        name: "Sea Horse",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 0, swim: 20 },
        abilityScores: { str: 1, dex: 12, con: 8, int: 1, wis: 10, cha: 2 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Water Breathing", description: "The sea horse can breathe only underwater." }
        ]
    },
    "shambling-mound": {
        name: "Shambling Mound",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 20, swim: 20 },
        abilityScores: { str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        damageResistances: ["cold", "fire"],
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "deafened", "exhaustion"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Lightning Absorption", description: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt." }
        ],
        actions: [
            { name: "Multiattack", description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." },
            { name: "Engulf", description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8+4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time." }
        ]
    },
    "shrieker": {
        name: "Shrieker",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "unaligned",
        ac: 5,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 0 },
        abilityScores: { str: 1, dex: 1, con: 10, int: 1, wis: 3, cha: 1 },
        conditionImmunities: ["blinded", "deafened", "frightened"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "False Appearance", description: "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus." }
        ],
        reactions: [
            { name: "Shriek", description: "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward." }
        ]
    },
    "spider": {
        name: "Spider",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2 },
        skills: { stealth: 4 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage." }
        ]
    },
    "sphinx-andro": {
        name: "Androsphinx",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 199,
        hitDice: "19d10+95",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 22, dex: 10, con: 20, int: 16, wis: 18, cha: 23 },
        savingThrows: { dex: 6, con: 11, int: 9, wis: 10 },
        skills: { arcana: 9, perception: 10, religion: 15 },
        damageImmunities: ["psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "Common, Sphinx",
        cr: 17,
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10+6) slashing damage." },
            { name: "Roar (3/Day)", description: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Claw Attack", description: "The sphinx makes one claw attack." },
                { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
                { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
            ]
        },
        spellcasting: {
            ability: "wis",
            dc: 18,
            attack: 10,
            spells: {
                cantrips: ["sacred flame", "spare the dying", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "detect evil and good", "detect magic"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "zone of truth"] },
                "3rd": { slots: 3, spells: ["dispel magic", "tongues"] },
                "4th": { slots: 3, spells: ["banishment", "freedom of movement"] },
                "5th": { slots: 2, spells: ["flame strike", "greater restoration"] },
                "6th": { slots: 1, spells: ["heroes' feast"] }
            }
        }
    },
    "sphinx-gyno": {
        name: "Gynosphinx",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 18, wis: 18, cha: 18 },
        skills: { arcana: 12, history: 12, perception: 8, religion: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "Common, Sphinx",
        cr: 11,
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Claw Attack", description: "The sphinx makes one claw attack." },
                { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
                { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
            ]
        },
        spellcasting: {
            ability: "int",
            dc: 16,
            attack: 8,
            spells: {
                cantrips: ["mage hand", "minor illusion", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "shield"] },
                "2nd": { slots: 3, spells: ["darkness", "locate object", "suggestion"] },
                "3rd": { slots: 3, spells: ["dispel magic", "remove curse", "tongues"] },
                "4th": { slots: 3, spells: ["banishment", "greater invisibility"] },
                "5th": { slots: 1, spells: ["legend lore"] }
            }
        }
    },
    "swarm-of-bats": {
        name: "Swarm of Bats",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of Tiny beasts",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 5, dex: 15, con: 10, int: 2, wis: 12, cha: 4 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Echolocation", description: "The swarm can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-insects": {
        name: "Swarm of Insects",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of Tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-poisonous-snakes": {
        name: "Swarm of Poisonous Snakes",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of Tiny beasts",
        alignment: "unaligned",
        ac: 14,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 8, dex: 18, con: 11, int: 1, wis: 10, cha: 3 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "swarm-of-quippers": {
        name: "Swarm of Quippers",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of Tiny beasts",
        alignment: "unaligned",
        ac: 13,
        hp: 28,
        hitDice: "8d8-8",
        speed: { walk: 0, swim: 40 },
        abilityScores: { str: 13, dex: 16, con: 9, int: 1, wis: 7, cha: 2 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Blood Frenzy", description: "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Water Breathing", description: "The swarm can breathe only underwater." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-rats": {
        name: "Swarm of Rats",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of Tiny beasts",
        alignment: "unaligned",
        ac: 10,
        hp: 24,
        hitDice: "7d8-7",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 11, con: 9, int: 2, wis: 10, cha: 3 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Smell", description: "The swarm has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-ravens": {
        name: "Swarm of Ravens",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of Tiny beasts",
        alignment: "unaligned",
        ac: 12,
        hp: 24,
        hitDice: "7d8-7",
        speed: { walk: 10, fly: 50 },
        abilityScores: { str: 6, dex: 14, con: 8, int: 3, wis: 12, cha: 6 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: [],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Beaks", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },

    // ===== T =====
    "thri-kreen": {
        name: "Thri-kreen",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "thri-kreen",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 15, con: 13, int: 8, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Thri-kreen",
        cr: 1,
        traits: [
            { name: "Chameleon Carapace", description: "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide." },
            { name: "Standing Leap", description: "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Multiattack", description: "The thri-kreen makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage." }
        ]
    },

    // ===== U =====
    "umber-hulk": {
        name: "Umber Hulk",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, burrow: 20 },
        abilityScores: { str: 20, dex: 13, con: 16, int: 9, wis: 10, cha: 10 },
        senses: ["darkvision 120 ft.", "tremorsense 60 ft."],
        languages: "Umber Hulk",
        cr: 5,
        traits: [
            { name: "Confusing Gaze", description: "When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated. On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn." },
            { name: "Tunneler", description: "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake." }
        ],
        actions: [
            { name: "Multiattack", description: "The umber hulk makes three attacks: two with its claws and one with its mandibles." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) slashing damage." },
            { name: "Mandibles", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." }
        ]
    },

    // ===== V =====
    "violet-fungus": {
        name: "Violet Fungus",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "unaligned",
        ac: 5,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 5 },
        abilityScores: { str: 3, dex: 1, con: 10, int: 1, wis: 3, cha: 1 },
        conditionImmunities: ["blinded", "deafened", "frightened"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "False Appearance", description: "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus." }
        ],
        actions: [
            { name: "Multiattack", description: "The fungus makes 1d4 Rotting Touch attacks." },
            { name: "Rotting Touch", description: "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage." }
        ]
    },
    "vulture": {
        name: "Vulture",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 10, fly: 50 },
        abilityScores: { str: 7, dex: 10, con: 13, int: 2, wis: 12, cha: 4 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage." }
        ]
    },

    // ===== W =====
    "water-weird": {
        name: "Water Weird",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 58,
        hitDice: "9d10+9",
        speed: { walk: 0, swim: 60 },
        abilityScores: { str: 17, dex: 16, con: 13, int: 11, wis: 10, cha: 10 },
        damageResistances: ["fire; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["blindsight 30 ft."],
        languages: "understands Aquan but doesn't speak",
        cr: 3,
        traits: [
            { name: "Invisible in Water", description: "The water weird is invisible while fully immersed in water." },
            { name: "Water Bound", description: "The water weird dies if it leaves the water to which it is bound or if that water is destroyed." }
        ],
        actions: [
            { name: "Constrict", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6+3) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can't constrict another target." }
        ]
    },
    "weasel": {
        name: "Weasel",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 30 },
        abilityScores: { str: 3, dex: 16, con: 8, int: 2, wis: 12, cha: 3 },
        skills: { perception: 3, stealth: 5 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Hearing and Smell", description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "will-o-wisp": {
        name: "Will-o'-Wisp",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "chaotic evil",
        ac: 19,
        hp: 22,
        hitDice: "9d4",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 1, dex: 28, con: 10, int: 13, wis: 14, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "necrotic", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 120 ft."],
        languages: "the languages it knew in life",
        cr: 2,
        traits: [
            { name: "Consume Life", description: "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points." },
            { name: "Ephemeral", description: "The will-o'-wisp can't wear or carry anything." },
            { name: "Incorporeal Movement", description: "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Variable Illumination", description: "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action." }
        ],
        actions: [
            { name: "Shock", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage." },
            { name: "Invisibility", description: "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)." }
        ]
    },
    "winter-wolf": {
        name: "Winter Wolf",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8 },
        skills: { perception: 5, stealth: 3 },
        damageImmunities: ["cold"],
        senses: [],
        languages: "Common, Giant, Winter Wolf",
        cr: 3,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Snow Camouflage", description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Cold Breath (Recharge 5-6)", description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "worg": {
        name: "Worg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 50 },
        abilityScores: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Goblin, Worg",
        cr: 0.5,
        traits: [
            { name: "Keen Hearing and Smell", description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },

    // ===== Y =====
    "yeti": {
        name: "Yeti",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 18, dex: 13, con: 16, int: 8, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Yeti",
        cr: 3,
        traits: [
            { name: "Fear of Fire", description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Keen Smell", description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Snow Camouflage", description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The yeti can use its Chilling Gaze and makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) slashing damage plus 3 (1d6) cold damage." },
            { name: "Chilling Gaze", description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour." }
        ]
    },
    "abominable-yeti": {
        name: "Abominable Yeti",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 137,
        hitDice: "11d12+66",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 24, dex: 10, con: 22, int: 9, wis: 13, cha: 9 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Yeti",
        cr: 9,
        traits: [
            { name: "Fear of Fire", description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Keen Smell", description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Snow Camouflage", description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The yeti can use its Chilling Gaze and makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) slashing damage plus 7 (2d6) cold damage." },
            { name: "Chilling Gaze", description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this yeti's gaze for 1 hour." },
            { name: "Cold Breath (Recharge 6)", description: "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "yuan-ti-abomination": {
        name: "Yuan-ti Abomination",
        source: "MM",
        size: "large",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 17, int: 17, wis: 15, cha: 18 },
        skills: { perception: 5, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 7,
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Abomination Form Only)", description: "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target." },
            { name: "Scimitar (Abomination Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Longbow (Abomination Form Only)", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 12 (2d8+3) piercing damage plus 10 (3d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"],
                "1/day": ["fear"]
            }
        }
    },
    "yuan-ti-malison": {
        name: "Yuan-ti Malison",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 12,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { deception: 5, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 3,
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict only once." },
            { name: "Bite (Snake Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Longbow (Yuan-ti Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage plus 7 (2d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"]
            }
        }
    },
    "yuan-ti-pureblood": {
        name: "Yuan-ti Pureblood",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "yuan-ti",
        alignment: "neutral evil",
        ac: 11,
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 11, int: 13, wis: 12, cha: 14 },
        skills: { deception: 6, perception: 3, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 1,
        traits: [
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The yuan-ti makes two melee attacks." },
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 4 (1d6+1) piercing damage plus 7 (2d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["animal friendship (snakes only)", "poison spray"],
                "3/day": ["suggestion"]
            }
        }
    }
};

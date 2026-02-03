// Expansion Pack 13 - More Comprehensive Coverage
// Additional creatures from all sources

const MONSTERS_EXPANSION13 = {
    // ===== Animated Objects =====
    "animated-table": {
        name: "Animated Table",
        source: "Various",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 8, con: 13, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["dungeon", "urban"],
        role: "brute",
        tags: ["construct"],
        traits: [
            { name: "Antimagic Susceptibility", description: "The table is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the table must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the table remains motionless, it is indistinguishable from a normal table." },
            { name: "Charge", description: "If the table moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },

    // ===== More Swarms =====
    "swarm-of-quippers": {
        name: "Swarm of Quippers",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
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
        environment: ["underwater"],
        role: "minion",
        tags: ["beast", "swarm", "aquatic"],
        traits: [
            { name: "Blood Frenzy", description: "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Water Breathing", description: "The swarm can breathe only underwater." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-poisonous-snakes": {
        name: "Swarm of Poisonous Snakes",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
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
        environment: ["forest", "swamp"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "swarm-of-spiders": {
        name: "Swarm of Spiders",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
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
        environment: ["forest", "swamp", "underdark", "urban"],
        role: "minion",
        tags: ["beast", "swarm", "spider"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Spider Climb", description: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The swarm ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-wasps": {
        name: "Swarm of Wasps",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 5, fly: 30 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: [],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "grassland", "urban"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Stings", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-centipedes": {
        name: "Swarm of Centipedes",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
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
        environment: ["underdark", "urban"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer. A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way." }
        ]
    },

    // ===== More Dragons =====
    "faerie-dragon-red": {
        name: "Faerie Dragon (Red)",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "chaotic good",
        ac: 15,
        hp: 14,
        hitDice: "4d4+4",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 3, dex: 20, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { arcana: 4, perception: 3, stealth: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Draconic, Sylvan",
        cr: 1,
        environment: ["forest"],
        role: "controller",
        tags: ["dragon", "fey"],
        traits: [
            { name: "Superior Invisibility", description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it." },
            { name: "Limited Telepathy", description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it." },
            { name: "Magic Resistance", description: "The dragon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." },
            { name: "Euphoria Breath (Recharge 5-6)", description: "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                "1/day each": ["color spray", "dancing lights", "mage hand", "minor illusion", "mirror image", "suggestion"]
            }
        }
    },
    "pseudodragon": {
        name: "Pseudodragon",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "neutral good",
        ac: 13,
        acType: "natural armor",
        hp: 7,
        hitDice: "2d4+2",
        speed: { walk: 15, fly: 60 },
        abilityScores: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10 },
        skills: { perception: 3, stealth: 4 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "understands Common and Draconic but can't speak",
        cr: 0.25,
        environment: ["coastal", "desert", "forest", "hill", "mountain", "urban"],
        role: "minion",
        tags: ["dragon"],
        traits: [
            { name: "Keen Senses", description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell." },
            { name: "Magic Resistance", description: "The pseudodragon has advantage on saving throws against spells and other magical effects." },
            { name: "Limited Telepathy", description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake." }
        ]
    },
    "wyvern": {
        name: "Wyvern",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 20, fly: 80 },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 6,
        environment: ["hill", "mountain"],
        role: "skirmisher",
        tags: ["dragon"],
        actions: [
            { name: "Multiattack", description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Stinger", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "guard-drake": {
        name: "Guard Drake",
        source: "VGtM",
        size: "medium",
        type: "dragon",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 16, int: 4, wis: 10, cha: 7 },
        skills: { perception: 2 },
        damageResistances: ["see Dragon Essence"],
        senses: ["darkvision 60 ft."],
        languages: "understands Draconic but can't speak",
        cr: 2,
        environment: ["any"],
        role: "soldier",
        tags: ["dragon"],
        traits: [
            { name: "Dragon Essence", description: "The guard drake has resistance to a type of damage based on the type of dragon that created it (acid for black, lightning for blue, fire for red, cold for white, poison for green)." }
        ],
        actions: [
            { name: "Multiattack", description: "The guard drake makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage." }
        ]
    },

    // ===== More Aberrations =====
    "chuul": {
        name: "Chuul",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 11, cha: 5 },
        skills: { perception: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Deep Speech but can't speak",
        cr: 4,
        environment: ["underdark", "underwater"],
        role: "brute",
        tags: ["aberration", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The chuul can breathe air and water." },
            { name: "Sense Magic", description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once." },
            { name: "Pincer", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled." },
            { name: "Tentacles", description: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "otyugh": {
        name: "Otyugh",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6 },
        savingThrows: { con: 7 },
        senses: ["darkvision 120 ft."],
        languages: "Otyugh",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "brute",
        tags: ["aberration"],
        traits: [
            { name: "Limited Telepathy", description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond." }
        ],
        actions: [
            { name: "Multiattack", description: "The otyugh makes three attacks: one with its bite and two with its tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8+3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target." },
            { name: "Tentacle Slam", description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6+3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned." }
        ]
    },

    // ===== More Undead =====
    "crawling-claw": {
        name: "Crawling Claw",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 12,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 13, dex: 14, con: 11, int: 5, wis: 10, cha: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "understands Common but can't speak",
        cr: 0,
        environment: ["dungeon", "urban"],
        role: "minion",
        tags: ["undead"],
        traits: [
            { name: "Turn Immunity", description: "The claw is immune to effects that turn undead." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning or slashing damage (claw's choice)." }
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
        environment: ["forest", "swamp", "urban"],
        role: "lurker",
        tags: ["undead"],
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
    "allip": {
        name: "Allip",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 6, dex: 17, con: 10, int: 17, wis: 15, cha: 16 },
        savingThrows: { int: 6, wis: 5 },
        skills: { perception: 5, stealth: 6 },
        damageResistances: ["acid", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        environment: ["any"],
        role: "controller",
        tags: ["undead"],
        traits: [
            { name: "Incorporeal Movement", description: "The allip can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Maddening Touch", description: "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6+3) psychic damage." },
            { name: "Whispers of Madness", description: "The allip chooses up to three creatures it can see within 60 feet of it. Each target must succeed on a DC 14 Wisdom saving throw, or it takes 7 (1d8+3) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and undead are immune to this effect." },
            { name: "Howling Babble (Recharge 6)", description: "Each creature within 30 feet of the allip that can hear it must make a DC 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8+3) psychic damage, and it is stunned until the end of its next turn. On a successful save, it takes half as much damage and isn't stunned. Constructs and undead are immune to this effect." }
        ]
    },

    // ===== More Misc =====
    "darklings": {
        name: "Darkling",
        source: "VGtM",
        size: "small",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 13,
        hitDice: "3d6+3",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 16, con: 12, int: 10, wis: 12, cha: 10 },
        skills: { acrobatics: 5, deception: 2, perception: 5, stealth: 7 },
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Elvish, Sylvan",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark", "urban"],
        role: "lurker",
        tags: ["fey"],
        traits: [
            { name: "Death Flash", description: "When the darkling dies, nonmagical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area and able to see the bright light must succeed on a DC 10 Constitution saving throw or be blinded until the end of the creature's next turn." },
            { name: "Light Sensitivity", description: "While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage. If the darkling has advantage on the attack roll, the attack deals an extra 7 (2d6) piercing damage." }
        ]
    },
    "darkling-elder": {
        name: "Darkling Elder",
        source: "VGtM",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "studded leather armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 17, con: 12, int: 10, wis: 14, cha: 13 },
        skills: { acrobatics: 5, deception: 3, perception: 6, stealth: 7 },
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Elvish, Sylvan",
        cr: 2,
        environment: ["forest", "swamp", "underdark", "urban"],
        role: "lurker",
        tags: ["fey"],
        traits: [
            { name: "Death Burn", description: "When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a DC 11 Constitution saving throw. On a failure, the creature takes 7 (2d6) radiant damage and, if the creature can see the light, is blinded until the end of its next turn. If the saving throw is successful, the creature takes half the damage and isn't blinded." }
        ],
        actions: [
            { name: "Multiattack", description: "The darkling elder makes two melee attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage. If the darkling elder has advantage on the attack roll, the attack deals an extra 10 (3d6) piercing damage." },
            { name: "Darkness (Recharges after a Short or Long Rest)", description: "The darkling elder casts darkness without any components. Wisdom is its spellcasting ability." }
        ]
    }
};

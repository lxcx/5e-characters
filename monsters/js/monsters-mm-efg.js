// D&D 5E Monster Manual - Monsters E, F, G
// Source: Monster Manual (MM)

const monstersMM_EFG = {
    // ===== E =====
    "eagle": {
        name: "Eagle",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: "10 ft.", fly: "60 ft." },
        abilityScores: { str: 6, dex: 15, con: 10, int: 2, wis: 14, cha: 7 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 slashing" }
        ]
    },
    "earth-elemental": {
        name: "Earth Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "12d10+60",
        speed: { walk: "30 ft.", burrow: "30 ft." },
        abilityScores: { str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5 },
        damageVulnerabilities: ["thunder"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 10"],
        languages: "Terran",
        cr: 5,
        traits: [
            { name: "Earth Glide", description: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through." },
            { name: "Siege Monster", description: "The elemental deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 8, reach: 10, damage: "2d8+5 bludgeoning" }
        ]
    },
    "efreeti": {
        name: "Efreeti",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: "40 ft.", fly: "60 ft." },
        abilityScores: { str: 22, dex: 12, con: 24, int: 16, wis: 15, cha: 16 },
        savingThrows: { int: 7, wis: 6, cha: 7 },
        damageImmunities: ["fire"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "Ignan",
        cr: 11,
        traits: [
            { name: "Elemental Demise", description: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the efreeti was wearing or carrying." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 15,
            attackBonus: 7,
            innate: true,
            spells: {
                "at will": ["detect-magic"],
                "3/day each": ["enlarge-reduce", "tongues"],
                "1/day each": ["conjure-elemental (fire elemental only)", "gaseous-form", "invisibility", "major-image", "plane-shift", "wall-of-fire"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice." },
            { name: "Scimitar", type: "melee", attackBonus: 10, reach: 5, damage: "2d6+6 slashing plus 2d6 fire" },
            { name: "Hurl Flame", type: "ranged", attackBonus: 7, range: "120 ft.", damage: "5d6 fire" }
        ]
    },
    "elephant": {
        name: "Elephant",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 76,
        hitDice: "8d12+24",
        speed: { walk: "40 ft." },
        abilityScores: { str: 22, dex: 9, con: 17, int: 3, wis: 11, cha: 6 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 4,
        traits: [
            { name: "Trampling Charge", description: "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", type: "melee", attackBonus: 8, reach: 5, damage: "3d8+6 piercing" },
            { name: "Stomp", type: "melee", attackBonus: 8, reach: 5, damage: "3d10+6 bludgeoning" }
        ]
    },
    "elk": {
        name: "Elk",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: "50 ft." },
        abilityScores: { str: 16, dex: 10, con: 12, int: 2, wis: 10, cha: 6 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 bludgeoning" },
            { name: "Hooves", type: "melee", attackBonus: 5, reach: 5, damage: "2d4+3 bludgeoning" }
        ]
    },
    "empyrean": {
        name: "Empyrean",
        source: "MM",
        size: "huge",
        type: "celestial",
        tags: ["titan"],
        alignment: "chaotic good (75%) or neutral evil (25%)",
        ac: 22,
        acType: "natural armor",
        hp: 313,
        hitDice: "19d12+190",
        speed: { walk: "50 ft.", fly: "50 ft.", swim: "50 ft." },
        abilityScores: { str: 30, dex: 21, con: 30, int: 21, wis: 22, cha: 27 },
        savingThrows: { str: 17, int: 12, wis: 13, cha: 15 },
        skills: { insight: 13, persuasion: 15 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft.", "passive Perception 16"],
        languages: "all",
        cr: 23,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the empyrean fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The empyrean has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The empyrean's weapon attacks are magical." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 23,
            innate: true,
            spells: {
                "at will": ["greater-restoration", "pass-without-trace", "water-breathing", "water-walk"],
                "1/day each": ["commune", "dispel-evil-and-good", "earthquake", "fire-storm", "plane-shift (self only)"]
            }
        },
        actions: [
            { name: "Maul", type: "melee", attackBonus: 17, reach: 10, damage: "6d6+10 bludgeoning" },
            { name: "Bolt", type: "ranged", attackBonus: 15, range: "600 ft.", damage: "7d6 damage (type chosen by empyrean)" }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Attack", cost: 1, description: "The empyrean makes one attack." },
                { name: "Bolster", cost: 2, description: "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn." },
                { name: "Trembling Strike (Costs 3 Actions)", cost: 3, description: "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone." }
            ]
        }
    },
    "erinyes": {
        name: "Erinyes",
        source: "MM",
        size: "medium",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 18, dex: 16, con: 18, int: 14, wis: 14, cha: 18 },
        savingThrows: { dex: 7, con: 8, wis: 6, cha: 8 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 12"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 12,
        traits: [
            { name: "Hellish Weapons", description: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)." },
            { name: "Magic Resistance", description: "The erinyes has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The erinyes makes three attacks." },
            { name: "Longsword", type: "melee", attackBonus: 8, reach: 5, damage: "1d8+4 slashing plus 3d8 poison" },
            { name: "Longbow", type: "ranged", attackBonus: 7, range: "150/600 ft.", damage: "1d8+3 piercing plus 3d8 poison", additionalText: "The target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic." }
        ],
        reactions: [
            { name: "Parry", description: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon." }
        ]
    },
    "ettercap": {
        name: "Ettercap",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 44,
        hitDice: "8d8+8",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Spider Climb", description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The ettercap ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettercap makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing plus 1d8 poison", additionalText: "The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 slashing" },
            { name: "Web (Recharge 5-6)", type: "ranged", attackBonus: 4, range: "30/60 ft.", damage: "—", additionalText: "The target is restrained by webbing. As an action, the restrained target can make a DC 11 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
        ]
    },
    "ettin": {
        name: "Ettin",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: "40 ft." },
        abilityScores: { str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Giant, Orc",
        cr: 4,
        traits: [
            { name: "Two Heads", description: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious." },
            { name: "Wakeful", description: "When one of the ettin's heads is asleep, its other head is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettin makes two attacks: one with its battleaxe and one with its morningstar." },
            { name: "Battleaxe", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+5 slashing" },
            { name: "Morningstar", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+5 piercing" }
        ]
    },

    // ===== F =====
    "fire-elemental": {
        name: "Fire Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 102,
        hitDice: "12d10+36",
        speed: { walk: "50 ft." },
        abilityScores: { str: 10, dex: 17, con: 16, int: 6, wis: 10, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Ignan",
        cr: 5,
        traits: [
            { name: "Fire Form", description: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns." },
            { name: "Illumination", description: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet." },
            { name: "Water Susceptibility", description: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two touch attacks." },
            { name: "Touch", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+3 fire", additionalText: "If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns." }
        ]
    },
    "fire-giant": {
        name: "Fire Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 162,
        hitDice: "13d12+78",
        speed: { walk: "30 ft." },
        abilityScores: { str: 25, dex: 9, con: 23, int: 10, wis: 14, cha: 13 },
        savingThrows: { dex: 3, con: 10, cha: 5 },
        skills: { athletics: 11, perception: 6 },
        damageImmunities: ["fire"],
        senses: ["passive Perception 16"],
        languages: "Giant",
        cr: 9,
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", type: "melee", attackBonus: 11, reach: 10, damage: "6d6+7 slashing" },
            { name: "Rock", type: "ranged", attackBonus: 11, range: "60/240 ft.", damage: "4d10+7 bludgeoning" }
        ]
    },
    "flameskull": {
        name: "Flameskull",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d4+18",
        speed: { walk: "0 ft.", fly: "40 ft. (hover)" },
        abilityScores: { str: 1, dex: 17, con: 14, int: 16, wis: 10, cha: 11 },
        skills: { arcana: 5, perception: 2 },
        damageResistances: ["lightning", "necrotic", "piercing"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "Common",
        cr: 4,
        traits: [
            { name: "Illumination", description: "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action." },
            { name: "Magic Resistance", description: "The flameskull has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 13,
            attackBonus: 5,
            level: 5,
            slots: { 1: 3, 2: 2, 3: 1 },
            spells: {
                cantrips: ["mage-hand"],
                1: ["magic-missile", "shield"],
                2: ["blur", "flaming-sphere"],
                3: ["fireball"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The flameskull uses Fire Ray twice." },
            { name: "Fire Ray", type: "ranged", attackBonus: 5, range: "30 ft.", damage: "3d6 fire" }
        ]
    },
    "flesh-golem": {
        name: "Flesh Golem",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "neutral",
        ac: 9,
        hp: 93,
        hitDice: "11d8+44",
        speed: { walk: "30 ft." },
        abilityScores: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5 },
        damageImmunities: ["lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "understands the languages of its creator but can't speak",
        cr: 5,
        traits: [
            { name: "Berserk", description: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk." },
            { name: "Aversion of Fire", description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Lightning Absorption", description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+4 bludgeoning" }
        ]
    },
    "flying-snake": {
        name: "Flying Snake",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 5,
        hitDice: "2d4",
        speed: { walk: "30 ft.", fly: "60 ft.", swim: "30 ft." },
        abilityScores: { str: 4, dex: 18, con: 11, int: 2, wis: 12, cha: 5 },
        senses: ["blindsight 10 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Flyby", description: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "1 piercing plus 3d4 poison" }
        ]
    },
    "flying-sword": {
        name: "Flying Sword",
        source: "MM",
        size: "small",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 17,
        hitDice: "5d6",
        speed: { walk: "0 ft.", fly: "50 ft. (hover)" },
        abilityScores: { str: 12, dex: 15, con: 11, int: 1, wis: 5, cha: 1 },
        savingThrows: { dex: 4 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 7"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Antimagic Susceptibility", description: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword." }
        ],
        actions: [
            { name: "Longsword", type: "melee", attackBonus: 3, reach: 5, damage: "1d8+1 slashing" }
        ]
    },
    "frog": {
        name: "Frog",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: "20 ft.", swim: "20 ft." },
        abilityScores: { str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3 },
        skills: { perception: 1, stealth: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start." }
        ]
    },
    "frost-giant": {
        name: "Frost Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: "40 ft." },
        abilityScores: { str: 23, dex: 9, con: 21, int: 9, wis: 10, cha: 12 },
        savingThrows: { con: 8, wis: 3, cha: 4 },
        skills: { athletics: 9, perception: 3 },
        damageImmunities: ["cold"],
        senses: ["passive Perception 13"],
        languages: "Giant",
        cr: 8,
        actions: [
            { name: "Multiattack", description: "The giant makes two greataxe attacks." },
            { name: "Greataxe", type: "melee", attackBonus: 9, reach: 10, damage: "3d12+6 slashing" },
            { name: "Rock", type: "ranged", attackBonus: 9, range: "60/240 ft.", damage: "4d10+6 bludgeoning" }
        ]
    },

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
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 15, dex: 11, con: 16, int: 6, wis: 11, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Terran",
        cr: 2,
        traits: [
            { name: "False Appearance", description: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue." }
        ],
        actions: [
            { name: "Multiattack", description: "The gargoyle makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 slashing" }
        ]
    },
    "gelatinous-cube": {
        name: "Gelatinous Cube",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 6,
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: "15 ft." },
        abilityScores: { str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Ooze Cube", description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.\n\nCreatures inside the cube can be seen but have total cover.\n\nA creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.\n\nThe cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time." },
            { name: "Transparent", description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube." }
        ],
        actions: [
            { name: "Pseudopod", type: "melee", attackBonus: 4, reach: 5, damage: "3d6 acid" },
            { name: "Engulf", description: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\n\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\n\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\n\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube." }
        ]
    },
    "ghast": {
        name: "Ghast",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 13,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 17, con: 10, int: 11, wis: 10, cha: 8 },
        damageResistances: ["necrotic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common",
        cr: 2,
        traits: [
            { name: "Stench", description: "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours." },
            { name: "Turning Defiance", description: "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "2d8+3 piercing" },
            { name: "Claws", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 slashing", additionalText: "If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "ghost": {
        name: "Ghost",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "any alignment",
        ac: 11,
        hp: 45,
        hitDice: "10d8",
        speed: { walk: "0 ft.", fly: "40 ft. (hover)" },
        abilityScores: { str: 7, dex: 13, con: 10, int: 10, wis: 12, cha: 17 },
        damageResistances: ["acid", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "any languages it knew in life",
        cr: 4,
        traits: [
            { name: "Ethereal Sight", description: "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa." },
            { name: "Incorporeal Movement", description: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Withering Touch", type: "melee", attackBonus: 5, reach: 5, damage: "4d6+3 necrotic" },
            { name: "Etherealness", description: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane." },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring." },
            { name: "Possession (Recharge 6)", description: "One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\n\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends." }
        ]
    },
    "ghoul": {
        name: "Ghoul",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common",
        cr: 1,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 2, reach: 5, damage: "2d6+2 piercing" },
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 slashing", additionalText: "If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "giant-ape": {
        name: "Giant Ape",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 157,
        hitDice: "15d12+60",
        speed: { walk: "40 ft.", climb: "40 ft." },
        abilityScores: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7 },
        skills: { athletics: 9, perception: 4 },
        senses: ["passive Perception 14"],
        languages: "—",
        cr: 7,
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", type: "melee", attackBonus: 9, reach: 10, damage: "3d10+6 bludgeoning" },
            { name: "Rock", type: "ranged", attackBonus: 9, range: "50/100 ft.", damage: "7d6+6 bludgeoning" }
        ]
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
        speed: { walk: "30 ft.", burrow: "10 ft." },
        abilityScores: { str: 13, dex: 10, con: 15, int: 2, wis: 12, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The badger makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 piercing" },
            { name: "Claws", type: "melee", attackBonus: 3, reach: 5, damage: "2d4+1 slashing" }
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
        speed: { walk: "10 ft.", fly: "60 ft." },
        abilityScores: { str: 15, dex: 16, con: 11, int: 2, wis: 12, cha: 6 },
        senses: ["blindsight 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" }
        ]
    },
    "giant-boar": {
        name: "Giant Boar",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: "40 ft." },
        abilityScores: { str: 17, dex: 10, con: 16, int: 2, wis: 7, cha: 5 },
        senses: ["passive Perception 8"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 slashing" }
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
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 5, dex: 14, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft.", "passive Perception 8"],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing", additionalText: "The target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-constrictor-snake": {
        name: "Giant Constrictor Snake",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 60,
        hitDice: "8d12+8",
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 19, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft.", "passive Perception 12"],
        languages: "—",
        cr: 2,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 6, reach: 10, damage: "2d6+4 piercing" },
            { name: "Constrict", type: "melee", attackBonus: 6, reach: 5, damage: "2d8+4 bludgeoning", additionalText: "The target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
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
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3 },
        skills: { stealth: 4 },
        senses: ["blindsight 30 ft.", "passive Perception 9"],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 bludgeoning", additionalText: "The target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target." }
        ]
    },
    "giant-crocodile": {
        name: "Giant Crocodile",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d12+27",
        speed: { walk: "30 ft.", swim: "50 ft." },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        skills: { stealth: 5 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 30 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The crocodile makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", type: "melee", attackBonus: 8, reach: 5, damage: "3d10+5 piercing", additionalText: "The target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." },
            { name: "Tail", type: "melee", attackBonus: 8, reach: 10, damage: "2d8+5 bludgeoning", additionalText: "If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ]
    },
    "giant-eagle": {
        name: "Giant Eagle",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral good",
        ac: 13,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: "10 ft.", fly: "80 ft." },
        abilityScores: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "Giant Eagle, understands Common and Auran but can't speak them",
        cr: 1,
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The eagle makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 piercing" },
            { name: "Talons", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 slashing" }
        ]
    },
    "giant-elk": {
        name: "Giant Elk",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d12+10",
        speed: { walk: "60 ft." },
        abilityScores: { str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak them",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 6, reach: 10, damage: "2d6+4 bludgeoning" },
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "4d8+4 bludgeoning" }
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 8, dex: 10, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft.", "passive Perception 8"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Illumination", description: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 1, reach: 5, damage: "1d6-1 slashing" }
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
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2, stealth: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 12"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 piercing", additionalText: "The target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
            { name: "Swallow", description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time.\n\nIf the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
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
        speed: { walk: "40 ft." },
        abilityScores: { str: 17, dex: 11, con: 12, int: 3, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 5, reach: 5, damage: "2d4+3 bludgeoning" }
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
        speed: { walk: "50 ft." },
        abilityScores: { str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Rampage", description: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 piercing" }
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
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 15, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing" }
        ]
    },
    "giant-octopus": {
        name: "Giant Octopus",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 52,
        hitDice: "8d10+8",
        speed: { walk: "10 ft.", swim: "60 ft." },
        abilityScores: { str: 17, dex: 13, con: 13, int: 4, wis: 10, cha: 4 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Hold Breath", description: "While out of water, the octopus can hold its breath for 1 hour." },
            { name: "Underwater Camouflage", description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater." },
            { name: "Water Breathing", description: "The octopus can breathe only underwater." }
        ],
        actions: [
            { name: "Tentacles", type: "melee", attackBonus: 5, reach: 15, damage: "2d6+3 bludgeoning", additionalText: "If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target." },
            { name: "Ink Cloud (Recharges after a Short or Long Rest)", description: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        ]
    },
    "giant-owl": {
        name: "Giant Owl",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral",
        ac: 12,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: "5 ft.", fly: "60 ft." },
        abilityScores: { str: 13, dex: 15, con: 12, int: 8, wis: 13, cha: 10 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them",
        cr: 0.25,
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", type: "melee", attackBonus: 3, reach: 5, damage: "2d6+1 slashing" }
        ]
    },
    "giant-poisonous-snake": {
        name: "Giant Poisonous Snake",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 10, dex: 18, con: 13, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft.", "passive Perception 12"],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 6, reach: 10, damage: "1d4+4 piercing", additionalText: "The target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." }
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Smell", description: "The rat has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing" }
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
        speed: { walk: "40 ft." },
        abilityScores: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
        senses: ["blindsight 60 ft.", "passive Perception 9"],
        languages: "—",
        cr: 3,
        actions: [
            { name: "Multiattack", description: "The scorpion makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 bludgeoning", additionalText: "The target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target." },
            { name: "Sting", type: "melee", attackBonus: 4, reach: 5, damage: "1d10+2 piercing", additionalText: "The target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one." }
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
        speed: { walk: "0 ft.", swim: "40 ft." },
        abilityScores: { str: 12, dex: 15, con: 11, int: 2, wis: 12, cha: 5 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Charge", description: "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Water Breathing", description: "The sea horse can breathe only underwater." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 bludgeoning" }
        ]
    },
    "giant-shark": {
        name: "Giant Shark",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: "0 ft.", swim: "50 ft." },
        abilityScores: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 9, reach: 5, damage: "3d10+6 piercing" }
        ]
    },
    "giant-spider": {
        name: "Giant Spider",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
        skills: { stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 piercing", additionalText: "The target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." },
            { name: "Web (Recharge 5-6)", type: "ranged", attackBonus: 5, range: "30/60 ft.", damage: "—", additionalText: "The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
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
        speed: { walk: "20 ft.", swim: "40 ft." },
        abilityScores: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Amphibious", description: "The toad can breathe air and water." },
            { name: "Standing Leap", description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d10+2 piercing plus 1d10 poison", additionalText: "If the target is Medium or smaller, it is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target." },
            { name: "Swallow", description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\n\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
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
        speed: { walk: "10 ft.", fly: "60 ft." },
        abilityScores: { str: 15, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: "understands Common but can't speak",
        cr: 1,
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The vulture makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 piercing" },
            { name: "Talons", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 slashing" }
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
        speed: { walk: "10 ft.", fly: "50 ft." },
        abilityScores: { str: 10, dex: 14, con: 10, int: 1, wis: 10, cha: 3 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 0.5,
        actions: [
            { name: "Sting", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing", additionalText: "The target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
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
        speed: { walk: "40 ft." },
        abilityScores: { str: 11, dex: 16, con: 10, int: 4, wis: 12, cha: 5 },
        skills: { perception: 3, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Hearing and Smell", description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+3 piercing" }
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
        speed: { walk: "40 ft.", climb: "40 ft." },
        abilityScores: { str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4 },
        skills: { perception: 3, stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 piercing", additionalText: "The target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "gibbering-mouther": {
        name: "Gibbering Mouther",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "neutral",
        ac: 9,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: "10 ft.", swim: "10 ft." },
        abilityScores: { str: 10, dex: 8, con: 16, int: 3, wis: 10, cha: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Aberrant Ground", description: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn." },
            { name: "Gibbering", description: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle." },
            { name: "Bites", type: "melee", attackBonus: 2, reach: 5, damage: "5d6 piercing", additionalText: "If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther." },
            { name: "Blinding Spittle (Recharge 5-6)", description: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn." }
        ]
    },
    "glabrezu": {
        name: "Glabrezu",
        source: "MM",
        size: "large",
        type: "fiend",
        tags: ["demon"],
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 157,
        hitDice: "15d10+75",
        speed: { walk: "40 ft." },
        abilityScores: { str: 20, dex: 15, con: 21, int: 19, wis: 17, cha: 16 },
        savingThrows: { str: 9, con: 9, wis: 7, cha: 7 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 13"],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 9,
        traits: [
            { name: "Magic Resistance", description: "The glabrezu has advantage on saving throws against spells and other magical effects." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 16,
            innate: true,
            spells: {
                "at will": ["darkness", "detect-magic", "dispel-magic"],
                "1/day each": ["confusion", "fly", "power-word-stun"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell." },
            { name: "Pincer", type: "melee", attackBonus: 9, reach: 10, damage: "2d10+5 bludgeoning", additionalText: "If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target." },
            { name: "Fist", type: "melee", attackBonus: 9, reach: 5, damage: "2d4+5 bludgeoning" }
        ]
    },
    "gladiator": {
        name: "Gladiator",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather, shield",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 12, cha: 15 },
        savingThrows: { str: 7, dex: 5, con: 6 },
        skills: { athletics: 10, intimidation: 5 },
        senses: ["passive Perception 11"],
        languages: "any one language (usually Common)",
        cr: 5,
        traits: [
            { name: "Brave", description: "The gladiator has advantage on saving throws against being frightened." },
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The gladiator makes three melee attacks or two ranged attacks." },
            { name: "Spear", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 piercing (2d8+4 two-handed)" },
            { name: "Spear (Ranged)", type: "ranged", attackBonus: 7, range: "20/60 ft.", damage: "1d6+4 piercing" },
            { name: "Shield Bash", type: "melee", attackBonus: 7, reach: 5, damage: "2d4+4 bludgeoning", additionalText: "If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Parry", description: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon." }
        ]
    },
    "gnoll": {
        name: "Gnoll",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["gnoll"],
        alignment: "chaotic evil",
        ac: 15,
        acType: "hide armor, shield",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Gnoll",
        cr: 0.5,
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing" },
            { name: "Spear", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing (1d8+2 two-handed)" },
            { name: "Spear (Ranged)", type: "ranged", attackBonus: 4, range: "20/60 ft.", damage: "1d6+2 piercing" },
            { name: "Longbow", type: "ranged", attackBonus: 3, range: "150/600 ft.", damage: "1d8+1 piercing" }
        ]
    },
    "goat": {
        name: "Goat",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: "40 ft." },
        abilityScores: { str: 12, dex: 10, con: 11, int: 2, wis: 10, cha: 5 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 3, reach: 5, damage: "1d4+1 bludgeoning" }
        ]
    },
    "goblin": {
        name: "Goblin",
        source: "MM",
        size: "small",
        type: "humanoid",
        tags: ["goblinoid"],
        alignment: "neutral evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 7,
        hitDice: "2d6",
        speed: { walk: "30 ft." },
        abilityScores: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "Common, Goblin",
        cr: 0.25,
        traits: [
            { name: "Nimble Escape", description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns." }
        ],
        actions: [
            { name: "Scimitar", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 slashing" },
            { name: "Shortbow", type: "ranged", attackBonus: 4, range: "80/320 ft.", damage: "1d6+2 piercing" }
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
        speed: { walk: "30 ft.", fly: "60 ft.", swim: "30 ft." },
        abilityScores: { str: 19, dex: 14, con: 17, int: 14, wis: 11, cha: 16 },
        savingThrows: { dex: 4, con: 5, wis: 2, cha: 5 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: "Draconic",
        cr: 3,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "1d10+4 piercing" },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons.\n\nFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\n\nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
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
        speed: { walk: "40 ft." },
        abilityScores: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7 },
        skills: { perception: 4 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Trampling Charge", description: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", type: "melee", attackBonus: 8, reach: 5, damage: "2d12+5 piercing" },
            { name: "Hooves", type: "melee", attackBonus: 8, reach: 5, damage: "2d10+5 bludgeoning" },
            { name: "Petrifying Breath (Recharge 5-6)", description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic." }
        ]
    },
    "gray-ooze": {
        name: "Gray Ooze",
        source: "MM",
        size: "medium",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: "10 ft.", climb: "10 ft." },
        abilityScores: { str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 2 },
        skills: { stealth: 2 },
        damageResistances: ["acid", "cold", "fire"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Amorphous", description: "The ooze can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrode Metal", description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.\n\nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round." },
            { name: "False Appearance", description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock." }
        ],
        actions: [
            { name: "Pseudopod", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 bludgeoning plus 2d6 acid", additionalText: "If the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
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
        speed: { walk: "30 ft.", fly: "60 ft.", swim: "30 ft." },
        abilityScores: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: "Draconic",
        cr: 2,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d10+2 piercing plus 1d6 poison" },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "green-hag": {
        name: "Green Hag",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 12, con: 16, int: 13, wis: 14, cha: 14 },
        skills: { arcana: 3, deception: 4, perception: 4, stealth: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Common, Draconic, Sylvan",
        cr: 3,
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Mimicry", description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 12,
            innate: true,
            spells: {
                "at will": ["dancing-lights", "minor-illusion", "vicious-mockery"]
            }
        },
        actions: [
            { name: "Claws", type: "melee", attackBonus: 6, reach: 5, damage: "2d8+4 slashing" },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised." },
            { name: "Invisible Passage", description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her." }
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
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 14, dex: 14, con: 11, int: 3, wis: 14, cha: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target." },
            { name: "Tentacles", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 slashing" },
            { name: "Beak", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" }
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
        speed: { walk: "30 ft.", fly: "80 ft." },
        abilityScores: { str: 18, dex: 15, con: 16, int: 2, wis: 13, cha: 8 },
        skills: { perception: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Sight", description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The griffon makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", type: "melee", attackBonus: 6, reach: 5, damage: "1d8+4 piercing" },
            { name: "Claws", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 slashing" }
        ]
    },
    "grimlock": {
        name: "Grimlock",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["grimlock"],
        alignment: "neutral evil",
        ac: 11,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 12, con: 12, int: 9, wis: 8, cha: 6 },
        skills: { athletics: 5, perception: 3, stealth: 3 },
        conditionImmunities: ["blinded"],
        senses: ["blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius)", "passive Perception 13"],
        languages: "Undercommon",
        cr: 0.25,
        traits: [
            { name: "Blind Senses", description: "The grimlock can't use its blindsight while deafened and unable to smell." },
            { name: "Keen Hearing and Smell", description: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Stone Camouflage", description: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Spiked Bone Club", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+3 bludgeoning plus 1d4 piercing" }
        ]
    },
    "guard": {
        name: "Guard",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 16,
        acType: "chain shirt, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "30 ft." },
        abilityScores: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10 },
        skills: { perception: 2 },
        senses: ["passive Perception 12"],
        languages: "any one language (usually Common)",
        cr: 0.125,
        actions: [
            { name: "Spear", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 piercing (1d8+1 two-handed)" },
            { name: "Spear (Ranged)", type: "ranged", attackBonus: 3, range: "20/60 ft.", damage: "1d6+1 piercing" }
        ]
    },
    "guardian-naga": {
        name: "Guardian Naga",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: "40 ft." },
        abilityScores: { str: 19, dex: 18, con: 16, int: 16, wis: 19, cha: 18 },
        savingThrows: { dex: 8, con: 7, int: 7, wis: 8, cha: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Celestial, Common",
        cr: 10,
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." }
        ],
        spellcasting: {
            ability: "wis",
            saveDC: 16,
            attackBonus: 8,
            level: 11,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
            spells: {
                cantrips: ["mending", "sacred-flame", "thaumaturgy"],
                1: ["command", "cure-wounds", "shield-of-faith"],
                2: ["calm-emotions", "hold-person"],
                3: ["bestow-curse", "clairvoyance"],
                4: ["banishment", "freedom-of-movement"],
                5: ["flame-strike", "geas"],
                6: ["true-seeing"]
            }
        },
        actions: [
            { name: "Bite", type: "melee", attackBonus: 8, reach: 10, damage: "1d8+4 piercing", additionalText: "The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Spit Poison", type: "ranged", attackBonus: 8, range: "15/30 ft.", damage: "—", additionalText: "The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    }
};

// Add to global monsters object
if (typeof allMonsters === 'undefined') {
    var allMonsters = {};
}
Object.assign(allMonsters, monstersMM_EFG);

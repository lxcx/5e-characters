// Expansion Pack 51 - More Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION51 = {
    // ===== More Common Creatures =====
    "stirge": {
        name: "Stirge",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: "1/8",
        environment: ["forest", "swamp", "urban", "underdark"],
        role: "minion",
        tags: ["beast"],
        actions: [
            { name: "Blood Drain", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4+3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ]
    },
    "swarm-of-bats": {
        name: "Swarm of Bats",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm",
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
        cr: "1/4",
        environment: ["underdark", "urban"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Echolocation", description: "The swarm can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-rats": {
        name: "Swarm of Rats",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm",
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
        cr: "1/4",
        environment: ["urban", "swamp"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Keen Smell", description: "The swarm has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-insects": {
        name: "Swarm of Insects",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm",
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
        cr: "1/2",
        environment: ["forest", "swamp", "grassland"],
        role: "minion",
        tags: ["beast", "swarm"],
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
        subtype: "swarm",
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
        environment: ["swamp", "forest"],
        role: "controller",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "swarm-of-ravens": {
        name: "Swarm of Ravens",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm",
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
        cr: "1/4",
        environment: ["forest", "grassland", "hill"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Beaks", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },

    // ===== More Undead =====
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
        environment: ["forest", "swamp"],
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
    "flameskull": {
        name: "Flameskull",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d4+18",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 1, dex: 17, con: 14, int: 16, wis: 10, cha: 11 },
        skills: { arcana: 5, perception: 2 },
        damageResistances: ["lightning", "necrotic", "piercing"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 4,
        environment: ["underdark", "urban"],
        role: "artillery",
        tags: ["undead", "spellcaster"],
        traits: [
            { name: "Illumination", description: "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action." },
            { name: "Magic Resistance", description: "The flameskull has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them." }
        ],
        actions: [
            { name: "Multiattack", description: "The flameskull uses Fire Ray twice." },
            { name: "Fire Ray", description: "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["mage hand"],
                "1st": { slots: 3, spells: ["magic missile", "shield"] },
                "2nd": { slots: 2, spells: ["blur", "flaming sphere"] },
                "3rd": { slots: 1, spells: ["fireball"] }
            }
        }
    },
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
        environment: ["urban"],
        role: "minion",
        tags: ["undead"],
        traits: [
            { name: "Turn Immunity", description: "The claw is immune to effects that turn undead." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning or slashing damage (claw's choice)." }
        ]
    }
};

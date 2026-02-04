// D&D 5E Monster Manual - Monsters S-Z
// Source: Monster Manual (MM)

const monstersMM_SZ = {
    // ===== S =====
    
    
    "satyr": {
        name: "Satyr",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 31,
        hitDice: "7d8",
        speed: { walk: "40 ft." },
        abilityScores: { str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14 },
        skills: { perception: 2, performance: 6, stealth: 5 },
        senses: ["passive Perception 12"],
        languages: "Common, Elvish, Sylvan",
        cr: 0.5,
        traits: [
            { name: "Magic Resistance", description: "The satyr has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 3, reach: 5, damage: "2d4+1 bludgeoning" },
            { name: "Shortsword", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 piercing" },
            { name: "Shortbow", type: "ranged", attackBonus: 5, range: "80/320 ft.", damage: "1d6+3 piercing" }
        ]
    },
    
    
    "shadow": {
        name: "Shadow",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: "40 ft." },
        abilityScores: { str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8 },
        skills: { stealth: 4 },
        damageVulnerabilities: ["radiant"],
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Amorphous", description: "The shadow can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the shadow can take the Hide action as a bonus action." },
            { name: "Sunlight Weakness", description: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws." }
        ],
        actions: [
            { name: "Strength Drain", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 necrotic", additionalText: "The target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later." }
        ]
    },
    
    
    
    
    
    
    "spirit-naga": {
        name: "Spirit Naga",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: "40 ft." },
        abilityScores: { str: 18, dex: 17, con: 14, int: 16, wis: 15, cha: 16 },
        savingThrows: { dex: 6, con: 5, wis: 5, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "Abyssal, Common",
        cr: 8,
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 14,
            attackBonus: 6,
            level: 10,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
            spells: {
                cantrips: ["mage-hand", "minor-illusion", "ray-of-frost"],
                1: ["charm-person", "detect-magic", "sleep"],
                2: ["detect-thoughts", "hold-person"],
                3: ["lightning-bolt", "water-breathing"],
                4: ["blight", "dimension-door"],
                5: ["dominate-person"]
            }
        },
        actions: [
            { name: "Bite", type: "melee", attackBonus: 7, reach: 10, damage: "1d6+4 piercing plus 7d8 poison" }
        ]
    },
    "sprite": {
        name: "Sprite",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        acType: "leather armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: "10 ft.", fly: "40 ft." },
        abilityScores: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 8 },
        senses: ["passive Perception 13"],
        languages: "Common, Elvish, Sylvan",
        cr: 0.25,
        actions: [
            { name: "Longsword", type: "melee", attackBonus: 2, reach: 5, damage: "1 slashing" },
            { name: "Shortbow", type: "ranged", attackBonus: 6, range: "40/160 ft.", damage: "1 piercing", additionalText: "The target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake." },
            { name: "Heart Sight", description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw." },
            { name: "Invisibility", description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it." }
        ]
    },
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
        speed: { walk: "10 ft.", fly: "40 ft." },
        abilityScores: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Blood Drain", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+3 piercing", additionalText: "The stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4+3) hit points due to blood loss.\n\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ]
    },
    
    "stone-golem": {
        name: "Stone Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: "30 ft." },
        abilityScores: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: "understands the languages of its creator but can't speak",
        cr: 10,
        traits: [
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 10, reach: 5, damage: "3d8+6 bludgeoning" },
            { name: "Slow (Recharge 5-6)", description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    
    "succubus": {
        name: "Succubus/Incubus",
        source: "MM",
        size: "medium",
        type: "fiend",
        tags: ["shapechanger"],
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20 },
        skills: { deception: 9, insight: 5, perception: 5, persuasion: 9, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
        cr: 4,
        traits: [
            { name: "Telepathic Bond", description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence." },
            { name: "Shapechanger", description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        actions: [
            { name: "Claw (Fiend Form Only)", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 slashing" },
            { name: "Charm", description: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\n\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends." },
            { name: "Draining Kiss", description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10+5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Etherealness", description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    },

    // ===== T =====
    
    
    "tiger": {
        name: "Tiger",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: "40 ft." },
        abilityScores: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d10+3 piercing" },
            { name: "Claw", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 slashing" }
        ]
    },
    
    "triceratops": {
        name: "Triceratops",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 95,
        hitDice: "10d12+30",
        speed: { walk: "50 ft." },
        abilityScores: { str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Trampling Charge", description: "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", type: "melee", attackBonus: 9, reach: 5, damage: "4d8+6 piercing" },
            { name: "Stomp", type: "melee", attackBonus: 9, reach: 5, damage: "3d10+6 bludgeoning" }
        ]
    },
    
    "tyrannosaurus-rex": {
        name: "Tyrannosaurus Rex",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d12+52",
        speed: { walk: "50 ft." },
        abilityScores: { str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "—",
        cr: 8,
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", type: "melee", attackBonus: 10, reach: 10, damage: "4d12+7 piercing", additionalText: "If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target." },
            { name: "Tail", type: "melee", attackBonus: 10, reach: 10, damage: "3d8+7 bludgeoning" }
        ]
    },

    // ===== U-Z =====
    
    
    "warhorse": {
        name: "Warhorse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: "60 ft." },
        abilityScores: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Trampling Charge", description: "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 bludgeoning" }
        ]
    },
    
    "werewolf": {
        name: "Werewolf",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["human", "shapechanger"],
        alignment: "chaotic evil",
        ac: 11,
        acType: "12 in wolf or hybrid form",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: "30 ft. (40 ft. in wolf form)" },
        abilityScores: { str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: ["passive Perception 14"],
        languages: "Common (can't speak in wolf form)",
        cr: 3,
        traits: [
            { name: "Shapechanger", description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)." },
            { name: "Bite (Wolf or Hybrid Form Only)", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing", additionalText: "If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy." },
            { name: "Claws (Hybrid Form Only)", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 slashing" },
            { name: "Spear (Humanoid Form Only)", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing (1d8+2 two-handed)" },
            { name: "Spear (Ranged, Humanoid Form Only)", type: "ranged", attackBonus: 4, range: "20/60 ft.", damage: "1d6+2 piercing" }
        ]
    },
    
    
    
    "wolf": {
        name: "Wolf",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "40 ft." },
        abilityScores: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 piercing", additionalText: "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ]
    }};

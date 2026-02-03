// D&D 5E Monster Manual - Monsters C
// Source: Monster Manual (MM)

const monstersMM_C = {
    // ===== C =====
    "cambion": {
        name: "Cambion",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "any evil alignment",
        ac: 19,
        acType: "scale mail",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 18, dex: 18, con: 16, int: 14, wis: 12, cha: 16 },
        savingThrows: { str: 7, con: 6, int: 5, cha: 6 },
        skills: { deception: 6, intimidation: 6, perception: 4, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Abyssal, Common, Infernal",
        cr: 5,
        traits: [
            { name: "Fiendish Blessing", description: "The AC of the cambion includes its Charisma bonus." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 14,
            innate: true,
            spells: {
                "3/day each": ["alter-self", "command", "detect-magic"],
                "1/day": ["plane-shift (self only)"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The cambion makes two melee attacks or uses its Fire Ray twice." },
            { name: "Spear", type: "melee", attackBonus: 7, reach: 5, damage: "1d6+4 piercing plus 1d6 fire" },
            { name: "Spear (Two-Handed)", type: "melee", attackBonus: 7, reach: 5, damage: "1d8+4 piercing plus 1d6 fire" },
            { name: "Spear (Ranged)", type: "ranged", attackBonus: 7, range: "20/60 ft.", damage: "1d6+4 piercing plus 1d6 fire" },
            { name: "Fire Ray", type: "ranged", attackBonus: 7, range: "120 ft.", damage: "3d6 fire" },
            { name: "Fiendish Charm", description: "One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours." }
        ]
    },
    "camel": {
        name: "Camel",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 9,
        hp: 15,
        hitDice: "2d10+4",
        speed: { walk: "50 ft." },
        abilityScores: { str: 16, dex: 8, con: 14, int: 2, wis: 8, cha: 5 },
        senses: ["passive Perception 9"],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d4 bludgeoning" }
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
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 14, dex: 13, con: 16, int: 1, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Smell", description: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Spider Climb", description: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The carrion crawler makes two attacks: one with its tentacles and one with its bite." },
            { name: "Tentacles", type: "melee", attackBonus: 8, reach: 10, damage: "1d4+2 poison", additionalText: "The target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success." },
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 piercing" }
        ]
    },
    "cat": {
        name: "Cat",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: "40 ft.", climb: "30 ft." },
        abilityScores: { str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Smell", description: "The cat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Claws", type: "melee", attackBonus: 0, reach: 5, damage: "1 slashing" }
        ]
    },
    "centaur": {
        name: "Centaur",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral good",
        ac: 12,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: "50 ft." },
        abilityScores: { str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11 },
        skills: { athletics: 6, perception: 3, survival: 3 },
        senses: ["passive Perception 13"],
        languages: "Elvish, Sylvan",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow." },
            { name: "Pike", type: "melee", attackBonus: 6, reach: 10, damage: "1d10+4 piercing" },
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 bludgeoning" },
            { name: "Longbow", type: "ranged", attackBonus: 4, range: "150/600 ft.", damage: "1d8+2 piercing" }
        ]
    },
    "chain-devil": {
        name: "Chain Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d8+40",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 15, con: 18, int: 11, wis: 12, cha: 14 },
        savingThrows: { con: 7, wis: 4, cha: 5 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 8,
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks with its chains." },
            { name: "Chain", type: "melee", attackBonus: 8, reach: 10, damage: "2d6+4 slashing", additionalText: "The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns." },
            { name: "Animate Chains (Recharges after a Short or Long Rest)", description: "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.\n\nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies." }
        ],
        reactions: [
            { name: "Unnerving Mask", description: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn." }
        ]
    },
    "chimera": {
        name: "Chimera",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 19, dex: 11, con: 19, int: 3, wis: 14, cha: 10 },
        skills: { perception: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 18"],
        languages: "understands Draconic but can't speak",
        cr: 6,
        actions: [
            { name: "Multiattack", description: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns." },
            { name: "Bite", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 piercing" },
            { name: "Horns", type: "melee", attackBonus: 7, reach: 5, damage: "1d12+4 bludgeoning" },
            { name: "Claws", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 slashing" },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
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
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 11, cha: 5 },
        skills: { perception: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "understands Deep Speech but can't speak",
        cr: 4,
        traits: [
            { name: "Amphibious", description: "The chuul can breathe air and water." },
            { name: "Sense Magic", description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once." },
            { name: "Pincer", type: "melee", attackBonus: 6, reach: 10, damage: "2d6+4 bludgeoning", additionalText: "The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled." },
            { name: "Tentacles", description: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "clay-golem": {
        name: "Clay Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 133,
        hitDice: "14d10+56",
        speed: { walk: "20 ft." },
        abilityScores: { str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 1 },
        damageImmunities: ["acid", "poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "understands the languages of its creator but can't speak",
        cr: 9,
        traits: [
            { name: "Acid Absorption", description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt." },
            { name: "Berserk", description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 8, reach: 5, damage: "2d10+5 bludgeoning", additionalText: "If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic." },
            { name: "Haste (Recharge 5-6)", description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action." }
        ]
    },
    "cloaker": {
        name: "Cloaker",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 78,
        hitDice: "12d10+12",
        speed: { walk: "10 ft.", fly: "40 ft." },
        abilityScores: { str: 17, dex: 15, con: 12, int: 13, wis: 12, cha: 14 },
        skills: { stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "Deep Speech, Undercommon",
        cr: 8,
        traits: [
            { name: "Damage Transfer", description: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half." },
            { name: "False Appearance", description: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak." },
            { name: "Light Sensitivity", description: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The cloaker makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+3 piercing", additionalText: "If the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to try to detach the cloaker by succeeding on a DC 16 Strength check." },
            { name: "Tail", type: "melee", attackBonus: 6, reach: 10, damage: "1d8+3 slashing" },
            { name: "Moan", description: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours." },
            { name: "Phantasms (Recharges after a Short or Long Rest)", description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\n\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\n\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears." }
        ]
    },
    "cloud-giant": {
        name: "Cloud Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral good (50%) or neutral evil (50%)",
        ac: 14,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d12+96",
        speed: { walk: "40 ft." },
        abilityScores: { str: 27, dex: 10, con: 22, int: 12, wis: 16, cha: 16 },
        savingThrows: { con: 10, wis: 7, cha: 7 },
        skills: { insight: 7, perception: 7 },
        senses: ["passive Perception 17"],
        languages: "Common, Giant",
        cr: 9,
        traits: [
            { name: "Keen Smell", description: "The giant has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 15,
            innate: true,
            spells: {
                "at will": ["detect-magic", "fog-cloud", "light"],
                "3/day each": ["feather-fall", "fly", "misty-step", "telekinesis"],
                "1/day each": ["control-weather", "gaseous-form"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The giant makes two morningstar attacks." },
            { name: "Morningstar", type: "melee", attackBonus: 12, reach: 10, damage: "3d8+8 piercing" },
            { name: "Rock", type: "ranged", attackBonus: 12, range: "60/240 ft.", damage: "4d10+8 bludgeoning" }
        ]
    },
    "cockatrice": {
        name: "Cockatrice",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: "20 ft.", fly: "40 ft." },
        abilityScores: { str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0.5,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "1d4+1 piercing", additionalText: "The target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours." }
        ]
    },
    "commoner": {
        name: "Commoner",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 10,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
        senses: ["passive Perception 10"],
        languages: "any one language (usually Common)",
        cr: 0,
        actions: [
            { name: "Club", type: "melee", attackBonus: 2, reach: 5, damage: "1d4 bludgeoning" }
        ]
    },
    "constrictor-snake": {
        name: "Constrictor Snake",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 15, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Constrict", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 bludgeoning", additionalText: "The target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ]
    },
    "couatl": {
        name: "Couatl",
        source: "MM",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: "30 ft.", fly: "90 ft." },
        abilityScores: { str: 16, dex: 20, con: 17, int: 18, wis: 20, cha: 18 },
        savingThrows: { con: 5, wis: 7, cha: 6 },
        damageResistances: ["radiant"],
        damageImmunities: ["psychic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft.", "passive Perception 15"],
        languages: "all, telepathy 120 ft.",
        cr: 4,
        traits: [
            { name: "Magic Weapons", description: "The couatl's weapon attacks are magical." },
            { name: "Shielded Mind", description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 14,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good", "detect-magic", "detect-thoughts"],
                "3/day each": ["bless", "create-food-and-water", "cure-wounds", "lesser-restoration", "protection-from-poison", "sanctuary", "shield"],
                "1/day each": ["dream", "greater-restoration", "scrying"]
            }
        },
        actions: [
            { name: "Bite", type: "melee", attackBonus: 8, reach: 5, damage: "1d6+5 piercing", additionalText: "The target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake." },
            { name: "Constrict", type: "melee", attackBonus: 6, reach: 10, damage: "2d6+3 bludgeoning", additionalText: "The target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target." },
            { name: "Change Shape", description: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\n\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form." }
        ]
    },
    "crab": {
        name: "Crab",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: "20 ft.", swim: "20 ft." },
        abilityScores: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 2 },
        skills: { stealth: 2 },
        senses: ["blindsight 30 ft.", "passive Perception 9"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", type: "melee", attackBonus: 0, reach: 5, damage: "1 bludgeoning" }
        ]
    },
    "crocodile": {
        name: "Crocodile",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: "20 ft.", swim: "30 ft." },
        abilityScores: { str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d10+2 piercing", additionalText: "The target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." }
        ]
    },
    "cult-fanatic": {
        name: "Cult Fanatic",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any non-good alignment",
        ac: 13,
        acType: "leather armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 14, con: 12, int: 10, wis: 13, cha: 14 },
        skills: { deception: 4, persuasion: 4, religion: 2 },
        senses: ["passive Perception 11"],
        languages: "any one language (usually Common)",
        cr: 2,
        traits: [
            { name: "Dark Devotion", description: "The fanatic has advantage on saving throws against being charmed or frightened." }
        ],
        spellcasting: {
            ability: "wis",
            saveDC: 11,
            attackBonus: 3,
            level: 4,
            slots: { 1: 4, 2: 3 },
            spells: {
                cantrips: ["light", "sacred-flame", "thaumaturgy"],
                1: ["command", "inflict-wounds", "shield-of-faith"],
                2: ["hold-person", "spiritual-weapon"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The fanatic makes two melee attacks." },
            { name: "Dagger", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing" },
            { name: "Dagger (Ranged)", type: "ranged", attackBonus: 4, range: "20/60 ft.", damage: "1d4+2 piercing" }
        ]
    },
    "cultist": {
        name: "Cultist",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any non-good alignment",
        ac: 12,
        acType: "leather armor",
        hp: 9,
        hitDice: "2d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 12, con: 10, int: 10, wis: 11, cha: 10 },
        skills: { deception: 2, religion: 2 },
        senses: ["passive Perception 10"],
        languages: "any one language (usually Common)",
        cr: 0.125,
        traits: [
            { name: "Dark Devotion", description: "The cultist has advantage on saving throws against being charmed or frightened." }
        ],
        actions: [
            { name: "Scimitar", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 slashing" }
        ]
    },
    "cyclops": {
        name: "Cyclops",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: "30 ft." },
        abilityScores: { str: 22, dex: 11, con: 20, int: 8, wis: 6, cha: 10 },
        senses: ["passive Perception 8"],
        languages: "Giant",
        cr: 6,
        traits: [
            { name: "Poor Depth Perception", description: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away." }
        ],
        actions: [
            { name: "Multiattack", description: "The cyclops makes two greatclub attacks." },
            { name: "Greatclub", type: "melee", attackBonus: 9, reach: 10, damage: "3d8+6 bludgeoning" },
            { name: "Rock", type: "ranged", attackBonus: 9, range: "30/120 ft.", damage: "4d10+6 bludgeoning" }
        ]
    }
};

// Add to global monsters object
if (typeof allMonsters === 'undefined') {
    var allMonsters = {};
}
Object.assign(allMonsters, monstersMM_C);

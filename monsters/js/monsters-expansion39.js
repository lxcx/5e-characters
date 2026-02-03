// Expansion Pack 39 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION39 = {
    // ===== More Misc Creatures =====
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
        speed: { walk: 20 },
        abilityScores: { str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 1 },
        damageImmunities: ["acid", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 9,
        environment: ["urban"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Acid Absorption", description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt." },
            { name: "Berserk", description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic." },
            { name: "Haste (Recharge 5-6)", description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action." }
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
        speed: { walk: 30 },
        abilityScores: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 10,
        environment: ["urban"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Slow (Recharge 5-6)", description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "iron-golem": {
        name: "Iron Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 20,
        acType: "natural armor",
        hp: 210,
        hitDice: "20d10+100",
        speed: { walk: 30 },
        abilityScores: { str: 24, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["fire", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 16,
        environment: ["urban"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Fire Absorption", description: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." },
            { name: "Sword", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10+7) slashing damage." },
            { name: "Poison Breath (Recharge 6)", description: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
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
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5 },
        damageImmunities: ["lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 5,
        environment: ["urban"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Berserk", description: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see." },
            { name: "Aversion of Fire", description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Lightning Absorption", description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },

    // ===== More Beasts =====
    "dire-wolf": {
        name: "Dire Wolf",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: 50 },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
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
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7 },
        skills: { athletics: 9, perception: 4 },
        senses: [],
        languages: "—",
        cr: 7,
        environment: ["forest"],
        role: "brute",
        tags: ["beast"],
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6+6) bludgeoning damage." }
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
        speed: { walk: 30, swim: 50 },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        skills: { stealth: 5 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["swamp", "coastal"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 30 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The crocodile makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10+5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
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
        speed: { walk: 0, swim: 50 },
        abilityScores: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["underwater"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage." }
        ]
    },
    "mammoth": {
        name: "Mammoth",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilityScores: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6 },
        senses: [],
        languages: "—",
        cr: 6,
        environment: ["arctic", "grassland"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Trampling Charge", description: "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8+7) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10+7) bludgeoning damage." }
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
        speed: { walk: 50 },
        abilityScores: { str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["grassland"],
        role: "brute",
        tags: ["beast", "dinosaur"],
        traits: [
            { name: "Trampling Charge", description: "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8+6) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10+6) bludgeoning damage." }
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
        speed: { walk: 50 },
        abilityScores: { str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 8,
        environment: ["grassland", "forest"],
        role: "brute",
        tags: ["beast", "dinosaur"],
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12+7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." }
        ]
    }
};

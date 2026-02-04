// D&D 5E Monster Manual - Monsters E, F, G
// Source: Monster Manual (MM)

const monstersMM_EFG = {
    // ===== E =====
    
    
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
    
    
    
    

    // ===== F =====
    
    
    
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
    
    
    
    

    // ===== G =====
    
    
    
    
    
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

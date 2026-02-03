// Final Push - Breaking 1000!
// The last 20+ creatures

const MONSTERS_FINAL_PUSH = {
    // ===== Zombies & Skeletons =====
    "zombie": {
        name: "Zombie",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 20 },
        abilityScores: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages it knew in life but can't speak",
        cr: 0.25,
        environment: ["underdark", "urban"],
        role: "minion",
        tags: ["undead", "zombie"],
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage." }
        ]
    },
    "skeleton": {
        name: "Skeleton",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 13,
        acType: "armor scraps",
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 0.25,
        environment: ["underdark", "urban"],
        role: "minion",
        tags: ["undead", "skeleton"],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "minotaur-skeleton": {
        name: "Minotaur Skeleton",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 11, con: 15, int: 6, wis: 8, cha: 5 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 2,
        environment: ["underdark", "dungeon"],
        role: "brute",
        tags: ["undead", "skeleton", "minotaur"],
        traits: [
            { name: "Charge", description: "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12+4) slashing damage." },
            { name: "Gore", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    "ogre-zombie": {
        name: "Ogre Zombie",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 85,
        hitDice: "9d10+36",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 6, con: 18, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Common and Giant but can't speak",
        cr: 2,
        environment: ["underdark", "urban"],
        role: "brute",
        tags: ["undead", "zombie", "ogre"],
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Morningstar", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },
    "beholder-zombie": {
        name: "Beholder Zombie",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 8, con: 16, int: 3, wis: 8, cha: 5 },
        savingThrows: { wis: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned", "prone"],
        senses: ["darkvision 60 ft."],
        languages: "understands Deep Speech and Undercommon but can't speak",
        cr: 5,
        environment: ["underdark"],
        role: "artillery",
        tags: ["undead", "zombie", "beholder"],
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage." },
            { name: "Eye Ray", description: "The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it. 1. Paralyzing Ray, 2. Fear Ray, 3. Enervation Ray, 4. Disintegration Ray." }
        ]
    },

    // ===== Mummies & Misc Undead =====
    "mummy": {
        name: "Mummy",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 11,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12 },
        savingThrows: { wis: 2 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 3,
        environment: ["desert", "dungeon"],
        role: "brute",
        tags: ["undead", "mummy"],
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot." },
            { name: "Dreadful Glare", description: "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration." }
        ]
    },

    // ===== Devils & Demons =====
    "imp": {
        name: "Imp",
        source: "MM",
        size: "tiny",
        type: "fiend",
        subtype: "devil, shapechanger",
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14 },
        skills: { deception: 4, insight: 3, persuasion: 4, stealth: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, Common",
        cr: 1,
        environment: ["urban", "nine hells"],
        role: "lurker",
        tags: ["fiend", "devil", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the imp's darkvision." },
            { name: "Magic Resistance", description: "The imp has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Sting (Bite in Beast Form)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Invisibility", description: "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it." }
        ]
    },
    "quasit": {
        name: "Quasit",
        source: "MM",
        size: "tiny",
        type: "fiend",
        subtype: "demon, shapechanger",
        alignment: "chaotic evil",
        ac: 13,
        hp: 7,
        hitDice: "3d4",
        speed: { walk: 40 },
        abilityScores: { str: 5, dex: 17, con: 10, int: 7, wis: 10, cha: 10 },
        skills: { stealth: 5 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common",
        cr: 1,
        environment: ["urban", "abyss"],
        role: "lurker",
        tags: ["fiend", "demon", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted." },
            { name: "Magic Resistance", description: "The quasit has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Claw (Bite in Beast Form)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Scare (1/Day)", description: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success." },
            { name: "Invisibility", description: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it." }
        ]
    },
    "dretch": {
        name: "Dretch",
        source: "MM",
        size: "small",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 11,
        acType: "natural armor",
        hp: 18,
        hitDice: "4d6+4",
        speed: { walk: 20 },
        abilityScores: { str: 11, dex: 11, con: 12, int: 5, wis: 8, cha: 3 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
        cr: 0.25,
        environment: ["abyss"],
        role: "minion",
        tags: ["fiend", "demon"],
        actions: [
            { name: "Multiattack", description: "The dretch makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." },
            { name: "Fetid Cloud (1/Day)", description: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions." }
        ]
    },
    "lemure": {
        name: "Lemure",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 7,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 15 },
        abilityScores: { str: 10, dex: 5, con: 11, int: 1, wis: 11, cha: 3 },
        damageResistances: ["cold"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands Infernal but can't speak",
        cr: 0,
        environment: ["nine hells"],
        role: "minion",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the lemure's darkvision." },
            { name: "Hellish Rejuvenation", description: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ]
    },

    // ===== Final few to break 1000 =====
    "dust-devil": {
        name: "Dust Devil",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 14, dex: 16, con: 14, int: 3, wis: 8, cha: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "tremorsense 30 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["desert"],
        role: "skirmisher",
        tags: ["elemental"],
        traits: [
            { name: "Elemental Nature", description: "A dust devil doesn't require air, food, drink, or sleep." }
        ],
        actions: [
            { name: "Dust Devil Aura", description: "The dust devil can engulf Small or smaller creatures. Each creature in the dust devil's space must make a DC 12 Strength saving throw. On a failure, the creature takes 3 (1d6) slashing damage and is blinded until the end of its next turn. On a success, it takes half as much damage and isn't blinded." },
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." }
        ]
    },
    "sword-wraith-warrior": {
        name: "Sword Wraith Warrior",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 16,
        acType: "chain shirt, shield",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 12, con: 17, int: 6, wis: 9, cha: 10 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 3,
        environment: ["any"],
        role: "soldier",
        tags: ["undead"],
        traits: [
            { name: "Martial Fury", description: "As a bonus action, the sword wraith can make one weapon attack. If it does so, attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8+1) piercing damage." }
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
        speed: { walk: 10, swim: 10 },
        abilityScores: { str: 10, dex: 8, con: 16, int: 3, wis: 10, cha: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration"],
        traits: [
            { name: "Aberrant Ground", description: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn." },
            { name: "Gibbering", description: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle." },
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther." },
            { name: "Blinding Spittle (Recharge 5-6)", description: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn." }
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
        languages: "understands Infernal but can't speak",
        cr: 3,
        environment: ["nine hells"],
        role: "skirmisher",
        tags: ["fiend", "hound"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage plus 7 (2d6) fire damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "basilisk": {
        name: "Basilisk",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["mountain", "underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Petrifying Gaze", description: "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage plus 7 (2d6) poison damage." }
        ]
    },

    // ===== BREAKING 1000! =====
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
        environment: ["forest", "grassland", "hill"],
        role: "skirmisher",
        tags: ["monstrosity", "mount"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
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
        environment: ["arctic"],
        role: "skirmisher",
        tags: ["monstrosity", "cold"],
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
    "death-dog": {
        name: "Death Dog",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 12,
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 3, wis: 13, cha: 6 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 1,
        environment: ["desert"],
        role: "skirmisher",
        tags: ["monstrosity"],
        traits: [
            { name: "Two-Headed", description: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack", description: "The dog makes two bite attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure." }
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
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["forest"],
        role: "lurker",
        tags: ["monstrosity", "spider"],
        traits: [
            { name: "Spider Climb", description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The ettercap ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettercap makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage." }
        ]
    },
    "manticore": {
        name: "Manticore",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 14,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 30, fly: 50 },
        abilityScores: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 3,
        environment: ["grassland", "hill", "mountain", "coastal"],
        role: "artillery",
        tags: ["monstrosity"],
        traits: [
            { name: "Tail Spike Regrowth", description: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest." }
        ],
        actions: [
            { name: "Multiattack", description: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Tail Spike", description: "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8+3) piercing damage." }
        ]
    },
    "medusa": {
        name: "Medusa",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 16, int: 12, wis: 13, cha: 15 },
        skills: { deception: 5, insight: 4, perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 6,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity"],
        traits: [
            { name: "Petrifying Gaze", description: "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success." }
        ],
        actions: [
            { name: "Multiattack", description: "The medusa makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow." },
            { name: "Snake Hair", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage plus 14 (4d6) poison damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage plus 7 (2d6) poison damage." }
        ]
    }
};

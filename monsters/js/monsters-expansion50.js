// Expansion Pack 50 - More Creatures
// Additional monsters - Final batch for comprehensive coverage

const MONSTERS_EXPANSION50 = {
    // ===== More Demons =====
    "manes": {
        name: "Manes",
        source: "MM",
        size: "small",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 9,
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 20 },
        abilityScores: { str: 10, dex: 9, con: 13, int: 3, wis: 8, cha: 4 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: "1/8",
        environment: ["abyss"],
        role: "minion",
        tags: ["fiend", "demon"],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." }
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
        cr: "1/4",
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
    "shadow-demon": {
        name: "Shadow Demon",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 13,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 1, dex: 17, con: 12, int: 14, wis: 13, cha: 14 },
        savingThrows: { dex: 5, cha: 4 },
        skills: { stealth: 7 },
        damageResistances: ["acid", "fire", "necrotic", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "lightning", "poison"],
        damageVulnerabilities: ["radiant"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 4,
        environment: ["abyss", "underdark"],
        role: "lurker",
        tags: ["fiend", "demon", "incorporeal"],
        traits: [
            { name: "Incorporeal Movement", description: "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Light Sensitivity", description: "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the demon can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6+3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6+3) psychic damage." }
        ]
    },
    "barlgura": {
        name: "Barlgura",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 7, wis: 14, cha: 9 },
        savingThrows: { dex: 5, con: 6 },
        skills: { perception: 5, stealth: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 5,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Innate Spellcasting", description: "The barlgura's spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components: 1/day each: entangle, phantasmal force; 2/day each: disguise self, invisibility (self only)" },
            { name: "Reckless", description: "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn." },
            { name: "Running Leap", description: "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start." }
        ],
        actions: [
            { name: "Multiattack", description: "The barlgura makes three attacks: one with its bite and two with its fists." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) bludgeoning damage." }
        ]
    },
    "chasme": {
        name: "Chasme",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "13d10+13",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 15, dex: 15, con: 12, int: 11, wis: 14, cha: 10 },
        savingThrows: { dex: 5, wis: 5 },
        skills: { perception: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 6,
        environment: ["abyss"],
        role: "controller",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Drone", description: "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn within 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours." },
            { name: "Magic Resistance", description: "The chasme has advantage on saving throws against spells and other magical effects." },
            { name: "Spider Climb", description: "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Proboscis", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6+2) piercing damage plus 24 (7d6) necrotic damage, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration." }
        ]
    },
    "nalfeshnee": {
        name: "Nalfeshnee",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d10+96",
        speed: { walk: 20, fly: 30 },
        abilityScores: { str: 21, dex: 10, con: 22, int: 19, wis: 12, cha: 15 },
        savingThrows: { con: 11, int: 9, wis: 6, cha: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 13,
        environment: ["abyss"],
        role: "controller",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Magic Resistance", description: "The nalfeshnee has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6+5) slashing damage." },
            { name: "Horror Nimbus (Recharge 5-6)", description: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours." },
            { name: "Teleport", description: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ]
    },
    "glabrezu": {
        name: "Glabrezu",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 157,
        hitDice: "15d10+75",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 15, con: 21, int: 19, wis: 17, cha: 16 },
        savingThrows: { str: 9, con: 9, wis: 7, cha: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 9,
        environment: ["abyss"],
        role: "controller",
        tags: ["fiend", "demon", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The glabrezu has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell." },
            { name: "Pincer", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10+5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 16,
            spells: {
                atWill: ["darkness", "detect magic", "dispel magic"],
                "1/day each": ["confusion", "fly", "power word stun"]
            }
        }
    },
    "goristro": {
        name: "Goristro",
        source: "MM",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 310,
        hitDice: "23d12+161",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 11, con: 25, int: 6, wis: 13, cha: 14 },
        savingThrows: { str: 13, dex: 6, con: 13, wis: 7 },
        skills: { perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal",
        cr: 17,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Charge", description: "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone." },
            { name: "Labyrinthine Recall", description: "The goristro can perfectly recall any path it has traveled." },
            { name: "Magic Resistance", description: "The goristro has advantage on saving throws against spells and other magical effects." },
            { name: "Siege Monster", description: "The goristro deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The goristro makes three attacks: two with its fists and one with its hoof." },
            { name: "Fist", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." },
            { name: "Hoof", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10+7) bludgeoning damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone." },
            { name: "Gore", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10+7) piercing damage." }
        ]
    }
};

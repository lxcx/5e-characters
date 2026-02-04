// Expansion Pack 7 - Breaking 1000!
// Final creatures

const MONSTERS_EXPANSION7 = {
    // ===== Mephits =====
    
    
    
    
    
    

    // ===== More Classic Creatures =====
    
    
    
    
    
    "gas-spore": {
        name: "Gas Spore",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "unaligned",
        ac: 5,
        hp: 1,
        hitDice: "1d10-4",
        speed: { walk: 0, fly: 10 },
        abilityScores: { str: 5, dex: 1, con: 3, int: 1, wis: 1, cha: 1 },
        damageImmunities: ["poison"],
        conditionImmunities: ["blinded", "deafened", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "minion",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Death Burst", description: "The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease. Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12 + the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days." },
            { name: "Eerie Resemblance", description: "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check." }
        ],
        actions: [
            { name: "Touch", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 poison damage, and the creature must succeed on a DC 10 Constitution saving throw or become infected with the disease described in the Death Burst trait." }
        ]
    },

    // ===== More NPCs =====
    
    
    
    "archer": {
        name: "Archer",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 18, con: 16, int: 11, wis: 13, cha: 10 },
        skills: { acrobatics: 6, perception: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["forest", "grassland", "urban"],
        role: "artillery",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Archer's Eye (3/Day)", description: "As a bonus action, the archer can add 1d10 to its next attack or damage roll with a longbow or shortbow." }
        ],
        actions: [
            { name: "Multiattack", description: "The archer makes two attacks with its longbow." },
            { name: "Shortsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 8 (1d8+4) piercing damage." }
        ]
    },
    "martial-arts-adept": {
        name: "Martial Arts Adept",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        hp: 60,
        hitDice: "11d8+11",
        speed: { walk: 40 },
        abilityScores: { str: 11, dex: 17, con: 13, int: 11, wis: 16, cha: 10 },
        skills: { acrobatics: 5, insight: 5, stealth: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["urban"],
        role: "skirmisher",
        tags: ["humanoid", "npc", "monk"],
        traits: [
            { name: "Unarmored Defense", description: "While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The adept makes three unarmed strikes or three dart attacks." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage. If the target is a creature, the adept can choose one of the following additional effects: The target must succeed on a DC 13 Strength saving throw or drop one item it is holding (adept's choice); The target must succeed on a DC 13 Dexterity saving throw or be knocked prone; The target must succeed on a DC 13 Constitution saving throw or be stunned until the end of the adept's next turn." },
            { name: "Dart", description: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." }
        ],
        reactions: [
            { name: "Deflect Missile", description: "In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by 1d10+3. If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free." }
        ]
    },

    // ===== Final creatures to hit 1000! =====
    "swarm-of-rot-grubs": {
        name: "Swarm of Rot Grubs",
        source: "VGtM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 5, climb: 5 },
        abilityScores: { str: 2, dex: 7, con: 10, int: 1, wis: 2, cha: 1 },
        damageResistances: ["piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +0 to hit, reach 0 ft., one creature in the swarm's space. Hit: The target is infested by 1d4 rot grubs. At the start of each of the target's turns, the target takes 1d6 piercing damage per rot grub infesting it. Applying fire to the bite wound before the end of the target's next turn deals 1 fire damage to the target and kills these rot grubs. After this time, these rot grubs are too far under the skin to be burned. If a target infested by rot grubs ends its turn with 0 hit points, it dies as the rot grubs burrow into its heart and kill it. Any effect that cures disease kills all rot grubs infesting the target." }
        ]
    },
    "flumph": {
        name: "Flumph",
        source: "MM",
        size: "small",
        type: "aberration",
        alignment: "lawful good",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 5, fly: 30 },
        abilityScores: { str: 6, dex: 15, con: 10, int: 14, wis: 14, cha: 11 },
        skills: { arcana: 4, history: 4, religion: 4 },
        damageVulnerabilities: ["psychic"],
        senses: ["darkvision 60 ft."],
        languages: "understands Undercommon but can't speak, telepathy 60 ft.",
        cr: 0.125,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration"],
        traits: [
            { name: "Advanced Telepathy", description: "The flumph can perceive the content of any telepathic communication used within 60 feet of it, and it can't be surprised by creatures with any form of telepathy." },
            { name: "Prone Deficiency", description: "If the flumph is knocked prone, roll a die. On an odd result, the flumph lands upside-down and is incapacitated. At the end of each of its turns, the flumph can make a DC 10 Dexterity saving throw, righting itself and ending the incapacitated condition if it succeeds." },
            { name: "Telepathic Shroud", description: "The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells." }
        ],
        actions: [
            { name: "Tendrils", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage plus 2 (1d4) acid damage. At the end of each of its turns, the target must make a DC 10 Constitution saving throw, taking 2 (1d4) acid damage on a failure or ending the recurring acid damage on a success. A lesser restoration spell cast on the target also ends the recurring acid damage." },
            { name: "Stench Spray (1/Day)", description: "Each creature in a 15-foot cone originating from the flumph must succeed on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for 1d4 hours. The coated creature is poisoned as long as the stench lasts, and other creatures are poisoned while with in 5 feet of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar." }
        ]
    }};

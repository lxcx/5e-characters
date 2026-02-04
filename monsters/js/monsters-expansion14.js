// Expansion Pack 14 - More Comprehensive Coverage
// Additional creatures from various sources

const MONSTERS_EXPANSION14 = {
    // ===== Sea Creatures =====
    "sea-spawn": {
        name: "Sea Spawn",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        alignment: "neutral evil",
        ac: 11,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 20, swim: 30 },
        abilityScores: { str: 15, dex: 8, con: 15, int: 6, wis: 10, cha: 8 },
        senses: ["darkvision 120 ft."],
        languages: "understands Aquan and Common but can't speak",
        cr: 1,
        environment: ["coastal", "underwater"],
        role: "brute",
        tags: ["humanoid", "aquatic"],
        traits: [
            { name: "Limited Amphibiousness", description: "The sea spawn can breathe air and water, but it needs to be submerged in the sea at least once a day for 1 minute to avoid suffocating." }
        ],
        actions: [
            { name: "Multiattack", description: "The sea spawn makes three attacks: two unarmed strikes and one with its Piscine Anatomy." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." },
            { name: "Piscine Anatomy", description: "The sea spawn has one or more of the following attack options, provided it has the appropriate anatomy: Bite, Poison Quills, Tentacle, Claw." }
        ]
    },
    "deep-scion": {
        name: "Deep Scion",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "shapechanger",
        alignment: "neutral evil",
        ac: 11,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 18, dex: 13, con: 16, int: 10, wis: 12, cha: 14 },
        savingThrows: { wis: 3, cha: 4 },
        skills: { deception: 6, insight: 3, sleight: 3, stealth: 3 },
        senses: ["darkvision 120 ft."],
        languages: "Aquan, Common, thieves' cant",
        cr: 3,
        environment: ["coastal", "underwater", "urban"],
        role: "lurker",
        tags: ["humanoid", "shapechanger", "aquatic"],
        traits: [
            { name: "Shapechanger", description: "The deep scion can use its action to polymorph into a humanoid-piscine hybrid form, or back into its true form. Its statistics, other than its speed, are the same in each form. Any equipment it is wearing or carrying isn't transformed. The deep scion reverts to its true form if it dies." },
            { name: "Amphibious", description: "The deep scion can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "In humanoid form, the deep scion makes two melee attacks. In hybrid form, the deep scion makes three attacks: one with its bite and two with its claws." },
            { name: "Battleaxe (Humanoid Form Only)", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." },
            { name: "Bite (Hybrid Form Only)", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d4+4) piercing damage." },
            { name: "Claw (Hybrid Form Only)", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) slashing damage." },
            { name: "Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest)", description: "The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a DC 13 Wisdom saving throw or be stunned until the end of the deep scion's next turn. In water, the psychic screech also telepathically transmits the deep scion's memories of the last 24 hours to its master, regardless of distance, so long as it and its master are in the same body of water." }
        ]
    },
    "sea-lion": {
        name: "Sea Lion",
        source: "ToA",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 10, swim: 40 },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 8 },
        skills: { perception: 4, stealth: 5 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["coastal", "underwater"],
        role: "skirmisher",
        tags: ["monstrosity", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The sea lion can breathe air and water." },
            { name: "Keen Smell", description: "The sea lion has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The sea lion has advantage on attack rolls against a creature if at least one of the sea lion's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The sea lion makes three attacks: one bite attack and two claw attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage." }
        ]
    },

    // ===== More Underdark Creatures =====
    
    
    
    

    // ===== Dinosaurs =====
    
    
    "hadrosaurus": {
        name: "Hadrosaurus",
        source: "VGtM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { perception: 2 },
        senses: [],
        languages: "—",
        cr: 0.25,
        environment: ["forest", "grassland", "swamp"],
        role: "minion",
        tags: ["beast", "dinosaur"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) bludgeoning damage." }
        ]
    }};

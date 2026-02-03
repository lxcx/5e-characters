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
    "duergar": {
        name: "Duergar",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 16,
        acType: "scale mail, shield",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 25 },
        abilityScores: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 1,
        environment: ["underdark"],
        role: "soldier",
        tags: ["humanoid", "dwarf", "duergar"],
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available." },
            { name: "War Pick", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage, or 11 (2d8+2) piercing damage while enlarged." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage, or 9 (2d6+2) piercing damage while enlarged." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "duergar-stone-guard": {
        name: "Duergar Stone Guard",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 25 },
        abilityScores: { str: 18, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 2,
        environment: ["underdark"],
        role: "soldier",
        tags: ["humanoid", "dwarf", "duergar"],
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Phalanx Formation", description: "The duergar has advantage on attack rolls and Dexterity saving throws while standing within 5 feet of a duergar ally wielding a shield." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage." },
            { name: "King's Knife (Shortsword)", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage, or 11 (2d6+4) piercing damage while enlarged." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 7 (1d6+4) piercing damage, or 11 (2d6+4) piercing damage while enlarged." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "mind-flayer-arcanist": {
        name: "Mind Flayer Arcanist",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
        savingThrows: { int: 7, wis: 6, cha: 6 },
        skills: { arcana: 7, deception: 6, insight: 6, perception: 6, persuasion: 6, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 8,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration", "mind flayer", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The mind flayer has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10+4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 15,
            spells: {
                atWill: ["detect thoughts", "levitate"],
                "1/day each": ["dominate monster", "plane shift (self only)"]
            }
        }
    },
    "flind": {
        name: "Flind",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 16,
        acType: "chain mail",
        hp: 127,
        hitDice: "15d8+60",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 10, con: 19, int: 11, wis: 13, cha: 12 },
        savingThrows: { con: 8, wis: 5 },
        skills: { intimidation: 5, perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll, Abyssal",
        cr: 9,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["humanoid", "gnoll"],
        traits: [
            { name: "Aura of Blood Thirst", description: "If the flind isn't incapacitated, any creature with the Rampage trait can make a bite attack as a bonus action while within 10 feet of the flind." }
        ],
        actions: [
            { name: "Multiattack", description: "The flind makes three attacks: one with each of its different flail attacks or three with its longbow." },
            { name: "Flail of Madness", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw. On a failed save, the target must make a melee attack against a random target within its reach on its next turn. If it has no targets within its reach even after moving, it loses its action on that turn." },
            { name: "Flail of Pain", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage plus 22 (4d10) psychic damage." },
            { name: "Flail of Paralysis", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be paralyzed until the end of its next turn." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 4 (1d8) piercing damage." }
        ]
    },

    // ===== Dinosaurs =====
    "velociraptor": {
        name: "Velociraptor",
        source: "VGtM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 30 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 4, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0.25,
        environment: ["forest", "grassland"],
        role: "minion",
        tags: ["beast", "dinosaur"],
        traits: [
            { name: "Pack Tactics", description: "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The velociraptor makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "deinonychus": {
        name: "Deinonychus",
        source: "VGtM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 15, con: 14, int: 4, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["forest", "grassland"],
        role: "skirmisher",
        tags: ["beast", "dinosaur"],
        traits: [
            { name: "Pounce", description: "If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The deinonychus makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage." }
        ]
    },
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
    },
    "stegosaurus": {
        name: "Stegosaurus",
        source: "VGtM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 76,
        hitDice: "8d12+24",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: [],
        languages: "—",
        cr: 4,
        environment: ["forest", "grassland"],
        role: "brute",
        tags: ["beast", "dinosaur"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 26 (6d6+5) piercing damage." }
        ]
    },
    "ankylosaurus": {
        name: "Ankylosaurus",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d12+16",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 11, con: 15, int: 2, wis: 12, cha: 5 },
        senses: [],
        languages: "—",
        cr: 3,
        environment: ["grassland"],
        role: "brute",
        tags: ["beast", "dinosaur"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6+4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ]
    },
    "brontosaurus": {
        name: "Brontosaurus",
        source: "VGtM",
        size: "gargantuan",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 121,
        hitDice: "9d20+27",
        speed: { walk: 30 },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        savingThrows: { con: 6 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["forest", "grassland"],
        role: "brute",
        tags: ["beast", "dinosaur"],
        actions: [
            { name: "Stomp", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27 (5d8+5) bludgeoning damage, and the target must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32 (6d8+5) bludgeoning damage." }
        ]
    }
};

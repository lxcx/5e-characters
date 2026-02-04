// Expansion Pack 13 - More Comprehensive Coverage
// Additional creatures from all sources

const MONSTERS_EXPANSION13 = {
    // ===== Animated Objects =====
    "animated-table": {
        name: "Animated Table",
        source: "Various",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 8, con: 13, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["dungeon", "urban"],
        role: "brute",
        tags: ["construct"],
        traits: [
            { name: "Antimagic Susceptibility", description: "The table is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the table must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the table remains motionless, it is indistinguishable from a normal table." },
            { name: "Charge", description: "If the table moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },

    // ===== More Swarms =====
    
    
    
    
    

    // ===== More Dragons =====
    
    
    
    "guard-drake": {
        name: "Guard Drake",
        source: "VGtM",
        size: "medium",
        type: "dragon",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 16, int: 4, wis: 10, cha: 7 },
        skills: { perception: 2 },
        damageResistances: ["see Dragon Essence"],
        senses: ["darkvision 60 ft."],
        languages: "understands Draconic but can't speak",
        cr: 2,
        environment: ["any"],
        role: "soldier",
        tags: ["dragon"],
        traits: [
            { name: "Dragon Essence", description: "The guard drake has resistance to a type of damage based on the type of dragon that created it (acid for black, lightning for blue, fire for red, cold for white, poison for green)." }
        ],
        actions: [
            { name: "Multiattack", description: "The guard drake makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage." }
        ]
    },

    // ===== More Aberrations =====
    
    

    // ===== More Undead =====
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
        environment: ["dungeon", "urban"],
        role: "minion",
        tags: ["undead"],
        traits: [
            { name: "Turn Immunity", description: "The claw is immune to effects that turn undead." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning or slashing damage (claw's choice)." }
        ]
    },
    
    "allip": {
        name: "Allip",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 6, dex: 17, con: 10, int: 17, wis: 15, cha: 16 },
        savingThrows: { int: 6, wis: 5 },
        skills: { perception: 5, stealth: 6 },
        damageResistances: ["acid", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        environment: ["any"],
        role: "controller",
        tags: ["undead"],
        traits: [
            { name: "Incorporeal Movement", description: "The allip can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Maddening Touch", description: "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6+3) psychic damage." },
            { name: "Whispers of Madness", description: "The allip chooses up to three creatures it can see within 60 feet of it. Each target must succeed on a DC 14 Wisdom saving throw, or it takes 7 (1d8+3) psychic damage and must use its reaction to make a melee weapon attack against one creature of the allip's choice that the allip can see. Constructs and undead are immune to this effect." },
            { name: "Howling Babble (Recharge 6)", description: "Each creature within 30 feet of the allip that can hear it must make a DC 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8+3) psychic damage, and it is stunned until the end of its next turn. On a successful save, it takes half as much damage and isn't stunned. Constructs and undead are immune to this effect." }
        ]
    },

    // ===== More Misc =====
    "darklings": {
        name: "Darkling",
        source: "VGtM",
        size: "small",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 13,
        hitDice: "3d6+3",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 16, con: 12, int: 10, wis: 12, cha: 10 },
        skills: { acrobatics: 5, deception: 2, perception: 5, stealth: 7 },
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Elvish, Sylvan",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark", "urban"],
        role: "lurker",
        tags: ["fey"],
        traits: [
            { name: "Death Flash", description: "When the darkling dies, nonmagical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area and able to see the bright light must succeed on a DC 10 Constitution saving throw or be blinded until the end of the creature's next turn." },
            { name: "Light Sensitivity", description: "While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage. If the darkling has advantage on the attack roll, the attack deals an extra 7 (2d6) piercing damage." }
        ]
    },
    "darkling-elder": {
        name: "Darkling Elder",
        source: "VGtM",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "studded leather armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 17, con: 12, int: 10, wis: 14, cha: 13 },
        skills: { acrobatics: 5, deception: 3, perception: 6, stealth: 7 },
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Elvish, Sylvan",
        cr: 2,
        environment: ["forest", "swamp", "underdark", "urban"],
        role: "lurker",
        tags: ["fey"],
        traits: [
            { name: "Death Burn", description: "When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a DC 11 Constitution saving throw. On a failure, the creature takes 7 (2d6) radiant damage and, if the creature can see the light, is blinded until the end of its next turn. If the saving throw is successful, the creature takes half the damage and isn't blinded." }
        ],
        actions: [
            { name: "Multiattack", description: "The darkling elder makes two melee attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage. If the darkling elder has advantage on the attack roll, the attack deals an extra 10 (3d6) piercing damage." },
            { name: "Darkness (Recharges after a Short or Long Rest)", description: "The darkling elder casts darkness without any components. Wisdom is its spellcasting ability." }
        ]
    }
};

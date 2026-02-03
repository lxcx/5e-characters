// Expansion Pack 2 - More Creatures
// Continuing toward 1000 monsters

const MONSTERS_EXPANSION2 = {
    // ===== More Fey =====
    "dryad": {
        name: "Dryad",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral",
        ac: 11,
        acType: "16 with barkskin",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Elvish, Sylvan",
        cr: 1,
        environment: ["forest"],
        role: "controller",
        tags: ["fey", "nature"],
        traits: [
            { name: "Magic Resistance", description: "The dryad has advantage on saving throws against spells and other magical effects." },
            { name: "Speak with Beasts and Plants", description: "The dryad can communicate with beasts and plants as if they shared a language." },
            { name: "Tree Stride", description: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree." }
        ],
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8+4) bludgeoning damage with shillelagh." },
            { name: "Fey Charm", description: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["druidcraft"],
                "3/day each": ["entangle", "goodberry"],
                "1/day each": ["barkskin", "pass without trace", "shillelagh"]
            }
        }
    },
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
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14 },
        skills: { perception: 2, performance: 6, stealth: 5 },
        senses: [],
        languages: "Common, Elvish, Sylvan",
        cr: 0.5,
        environment: ["forest"],
        role: "skirmisher",
        tags: ["fey"],
        traits: [
            { name: "Magic Resistance", description: "The satyr has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) bludgeoning damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "pixie": {
        name: "Pixie",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 2, dex: 20, con: 8, int: 10, wis: 14, cha: 15 },
        skills: { perception: 4, stealth: 7 },
        senses: [],
        languages: "Sylvan",
        cr: 0.25,
        environment: ["forest", "feywild"],
        role: "controller",
        tags: ["fey", "tiny"],
        traits: [
            { name: "Magic Resistance", description: "The pixie has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Superior Invisibility", description: "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["druidcraft"],
                "1/day each": ["confusion", "dancing lights", "detect evil and good", "detect thoughts", "dispel magic", "entangle", "fly", "phantasmal force", "polymorph", "sleep"]
            }
        }
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
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 8 },
        senses: [],
        languages: "Common, Elvish, Sylvan",
        cr: 0.25,
        environment: ["forest", "feywild"],
        role: "skirmisher",
        tags: ["fey", "tiny"],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake." },
            { name: "Heart Sight", description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment." },
            { name: "Invisibility", description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it." }
        ]
    },
    "blink-dog": {
        name: "Blink Dog",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 5 },
        senses: [],
        languages: "Blink Dog, understands Sylvan but can't speak it",
        cr: 0.25,
        environment: ["forest", "feywild"],
        role: "skirmisher",
        tags: ["fey"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage." },
            { name: "Teleport (Recharge 4-6)", description: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack." }
        ]
    },
    "quickling": {
        name: "Quickling",
        source: "VGtM",
        size: "tiny",
        type: "fey",
        alignment: "chaotic evil",
        ac: 16,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 120 },
        abilityScores: { str: 4, dex: 23, con: 13, int: 10, wis: 12, cha: 7 },
        skills: { acrobatics: 8, perception: 5, sleight_of_hand: 8, stealth: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Sylvan",
        cr: 1,
        environment: ["forest", "feywild"],
        role: "skirmisher",
        tags: ["fey", "speedster"],
        traits: [
            { name: "Blurred Movement", description: "Attack rolls against the quickling have disadvantage unless the quickling is incapacitated or restrained." },
            { name: "Evasion", description: "If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." }
        ],
        actions: [
            { name: "Multiattack", description: "The quickling makes three dagger attacks." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 8 (1d4+6) piercing damage." }
        ]
    },
    "yeth-hound": {
        name: "Yeth Hound",
        source: "VGtM",
        size: "large",
        type: "fey",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 18, dex: 17, con: 16, int: 5, wis: 12, cha: 7 },
        skills: { perception: 5 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "understands Common, Elvish, and Sylvan but can't speak",
        cr: 4,
        environment: ["forest", "feywild"],
        role: "skirmisher",
        tags: ["fey", "hound"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The yeth hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Sunlight Banishment", description: "If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can't affect or be affected by anything on the other plane." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage, plus 14 (4d6) psychic damage if the target is frightened." },
            { name: "Baleful Baying", description: "The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a DC 13 Wisdom saving throw or be frightened until the end of the hound's next turn or until the hound is incapacitated. A frightened target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible." }
        ]
    },

    // ===== Plants =====
    "treant": {
        name: "Treant",
        source: "MM",
        size: "huge",
        type: "plant",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilityScores: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
        damageResistances: ["bludgeoning", "piercing"],
        damageVulnerabilities: ["fire"],
        senses: [],
        languages: "Common, Druidic, Elvish, Sylvan",
        cr: 9,
        environment: ["forest"],
        role: "brute",
        tags: ["plant", "nature"],
        traits: [
            { name: "False Appearance", description: "While the treant remains motionless, it is indistinguishable from a normal tree." },
            { name: "Siege Monster", description: "The treant deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The treant makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." },
            { name: "Animate Trees (1/Day)", description: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree." }
        ]
    },
    "myconid-sovereign": {
        name: "Myconid Sovereign",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "lawful neutral",
        ac: 13,
        acType: "natural armor",
        hp: 60,
        hitDice: "8d10+16",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 10, con: 14, int: 13, wis: 15, cha: 10 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "leader",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Distress Spores", description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain." },
            { name: "Sun Sickness", description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight." }
        ],
        actions: [
            { name: "Multiattack", description: "The myconid uses either its Hallucination Spores or its Pacifying Spores, then makes a fist attack." },
            { name: "Fist", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4+1) bludgeoning damage plus 7 (3d4) poison damage." },
            { name: "Animating Spores (3/Day)", description: "The myconid targets one corpse of a humanoid or a Large or smaller beast within 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises as a spore servant." },
            { name: "Hallucination Spores", description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The poisoned target is incapacitated while it hallucinates." },
            { name: "Pacifying Spores", description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Rapport Spores", description: "A 30-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other." }
        ]
    },
    "myconid-adult": {
        name: "Myconid Adult",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "lawful neutral",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 20 },
        abilityScores: { str: 10, dex: 10, con: 12, int: 10, wis: 13, cha: 7 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "soldier",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Distress Spores", description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain." },
            { name: "Sun Sickness", description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) bludgeoning damage plus 5 (2d4) poison damage." },
            { name: "Pacifying Spores (3/Day)", description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Rapport Spores", description: "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals." }
        ]
    },
    "myconid-sprout": {
        name: "Myconid Sprout",
        source: "MM",
        size: "small",
        type: "plant",
        alignment: "lawful neutral",
        ac: 10,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 10 },
        abilityScores: { str: 8, dex: 10, con: 10, int: 8, wis: 11, cha: 5 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 0,
        environment: ["underdark"],
        role: "minion",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Distress Spores", description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain." },
            { name: "Sun Sickness", description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4-1) bludgeoning damage plus 2 (1d4) poison damage." },
            { name: "Rapport Spores", description: "A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals." }
        ]
    },
    "vegepygmy": {
        name: "Vegepygmy",
        source: "VGtM",
        size: "small",
        type: "plant",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 14, con: 13, int: 6, wis: 11, cha: 7 },
        skills: { perception: 2, stealth: 4 },
        damageResistances: ["lightning", "piercing"],
        senses: ["darkvision 60 ft."],
        languages: "Vegepygmy",
        cr: 0.25,
        environment: ["forest", "swamp"],
        role: "minion",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Plant Camouflage", description: "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life." },
            { name: "Regeneration", description: "The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    },

    // ===== More Oozes =====
    "black-pudding": {
        name: "Black Pudding",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 7,
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 16, dex: 5, con: 16, int: 1, wis: 6, cha: 1 },
        damageImmunities: ["acid", "cold", "lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 4,
        environment: ["underdark", "dungeon"],
        role: "brute",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The pudding can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrosive Form", description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes." },
            { name: "Spider Climb", description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ],
        reactions: [
            { name: "Split", description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding." }
        ]
    },
    "gelatinous-cube": {
        name: "Gelatinous Cube",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 6,
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 15 },
        abilityScores: { str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["underdark", "dungeon"],
        role: "lurker",
        tags: ["ooze"],
        traits: [
            { name: "Ooze Cube", description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover. A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage." },
            { name: "Transparent", description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage." },
            { name: "Engulf", description: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it." }
        ]
    },
    "gray-ooze": {
        name: "Gray Ooze",
        source: "MM",
        size: "medium",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 2 },
        skills: { stealth: 2 },
        damageResistances: ["acid", "cold", "fire"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.5,
        environment: ["underdark", "dungeon"],
        role: "lurker",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The ooze can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrode Metal", description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage." },
            { name: "False Appearance", description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ]
    }
};

// Volo's Guide to Monsters - Complete Collection
// Source: VGtM (Volo's Guide to Monsters)

const MONSTERS_VOLO_COMPLETE = {
    // ===== Beholder Variants =====
    "death-kiss": {
        name: "Death Kiss",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "neutral evil",
        ac: 16,
        acType: "natural armor",
        hp: 161,
        hitDice: "17d10+68",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 10, wis: 12, cha: 10 },
        savingThrows: { con: 8, wis: 5 },
        skills: { perception: 5 },
        damageImmunities: ["lightning"],
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon",
        cr: 10,
        traits: [
            { name: "Lightning Blood", description: "A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The death kiss makes three tentacle attacks. Up to three of these attacks can be replaced by Blood Drain, one attack per tentacle." },
            { name: "Tentacle", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 14 (3d6+4) piercing damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained. The death kiss has ten tentacles, each of which can grapple one target." },
            { name: "Blood Drain", description: "One creature grappled by a tentacle of the death kiss must make a DC 16 Constitution saving throw. On a failed save, the target takes 22 (4d10) lightning damage, and the death kiss regains half as many hit points." }
        ]
    },
    "gazer": {
        name: "Gazer",
        source: "VGtM",
        size: "tiny",
        type: "aberration",
        alignment: "neutral evil",
        ac: 13,
        hp: 13,
        hitDice: "3d4+6",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 3, dex: 17, con: 14, int: 3, wis: 10, cha: 7 },
        savingThrows: { wis: 2 },
        skills: { perception: 4, stealth: 5 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the gazer can move up to its speed toward a hostile creature that it can see." },
            { name: "Mimicry", description: "The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." },
            { name: "Eye Rays", description: "The gazer shoots two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 60 feet of it: 1. Dazing Ray, 2. Fear Ray, 3. Frost Ray, 4. Telekinetic Ray." }
        ]
    },
    "spectator": {
        name: "Spectator",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "lawful neutral",
        ac: 14,
        acType: "natural armor",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 8, dex: 14, con: 14, int: 13, wis: 14, cha: 11 },
        skills: { perception: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 3,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6−1) piercing damage." },
            { name: "Eye Rays", description: "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn." },
            { name: "Create Food and Water", description: "The spectator magically creates enough food and water to sustain itself for 24 hours." }
        ],
        reactions: [
            { name: "Spell Reflection", description: "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature." }
        ]
    },

    // ===== Giants =====
    "mouth-of-grolantor": {
        name: "Mouth of Grolantor",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 105,
        hitDice: "10d12+40",
        speed: { walk: 50 },
        abilityScores: { str: 21, dex: 10, con: 18, int: 5, wis: 7, cha: 5 },
        skills: { perception: 0 },
        conditionImmunities: ["frightened"],
        senses: [],
        languages: "Giant",
        cr: 6,
        traits: [
            { name: "Mouth of Madness", description: "The giant is immune to confusion spells and similar magic." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two fist attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 15 (3d6+5) piercing damage, and the giant magically regains hit points equal to the damage dealt." },
            { name: "Fist", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8+5) bludgeoning damage." }
        ]
    },
    "stone-giant-dreamwalker": {
        name: "Stone Giant Dreamwalker",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 18,
        acType: "natural armor",
        hp: 161,
        hitDice: "14d12+70",
        speed: { walk: 40 },
        abilityScores: { str: 23, dex: 14, con: 21, int: 10, wis: 8, cha: 12 },
        savingThrows: { dex: 6, con: 9, wis: 3 },
        skills: { athletics: 14, perception: 3 },
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Giant",
        cr: 10,
        traits: [
            { name: "Dreamwalker's Charm", description: "An enemy that starts its turn within 30 feet of the giant must make a DC 13 Charisma saving throw, provided that the giant isn't incapacitated. On a failed save, the creature is charmed by the giant. A creature charmed in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the creature is immune to this giant's Dreamwalker's Charm for 24 hours." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two attacks with its greatclub." },
            { name: "Greatclub", description: "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Petrifying Touch", description: "The giant touches one Medium or smaller creature within 10 feet of it that is charmed by it. The target must make a DC 17 Constitution saving throw. On a failed save, the target becomes petrified, and the giant can adhere the target to its stony body." }
        ]
    },

    // ===== Mind Flayers =====
    "alhoon": {
        name: "Alhoon",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "any evil alignment",
        ac: 15,
        acType: "natural armor",
        hp: 120,
        hitDice: "16d8+48",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 16, int: 19, wis: 17, cha: 17 },
        savingThrows: { con: 7, int: 8, wis: 7, cha: 7 },
        skills: { arcana: 8, deception: 7, history: 8, insight: 7, perception: 7, stealth: 5 },
        damageResistances: ["cold", "lightning", "necrotic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Magic Resistance", description: "The alhoon has advantage on saving throws against spells and other magical effects." },
            { name: "Turn Resistance", description: "The alhoon has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Chilling Grasp", description: "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (3d6) cold damage." },
            { name: "Mind Blast (Recharge 5-6)", description: "The alhoon magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 16 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "int",
            dc: 16,
            attack: 8,
            spells: {
                cantrips: ["chill touch", "dancing lights", "mage hand", "prestidigitation", "shocking grasp"],
                "1st": { slots: 4, spells: ["detect magic", "disguise self", "magic missile", "shield"] },
                "2nd": { slots: 3, spells: ["invisibility", "mirror image", "scorching ray"] },
                "3rd": { slots: 3, spells: ["counterspell", "fly", "lightning bolt"] },
                "4th": { slots: 3, spells: ["confusion", "Evard's black tentacles", "phantasmal killer"] },
                "5th": { slots: 2, spells: ["modify memory", "wall of force"] },
                "6th": { slots: 1, spells: ["disintegrate", "globe of invulnerability"] }
            }
        }
    },
    "ulitharid": {
        name: "Ulitharid",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 127,
        hitDice: "17d10+34",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 12, con: 15, int: 21, wis: 19, cha: 21 },
        savingThrows: { int: 9, wis: 8, cha: 9 },
        skills: { arcana: 9, insight: 8, perception: 8, stealth: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 2 miles",
        cr: 9,
        traits: [
            { name: "Creature Sense", description: "The ulitharid is aware of the presence of creatures within 2 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it. A creature protected by a mind blank spell, a nondetection spell, or similar magic can't be perceived in this manner." },
            { name: "Magic Resistance", description: "The ulitharid has advantage on saving throws against spells and other magical effects." },
            { name: "Psionic Hub", description: "If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a psychic link with any other creature the ulitharid can detect using its Creature Sense. Any such link ends if the creature falls outside the telepathy ranges of both the ulitharid and the elder brain. The ulitharid can maintain its psychic link with the elder brain regardless of the distance between them, so long as they are both on the same plane of existence." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 27 (4d10+5) psychic damage. If the target is Large or smaller, it is grappled (escape DC 14) and must succeed on a DC 17 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one incapacitated humanoid grappled by the ulitharid. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The ulitharid magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 17 Intelligence saving throw or take 31 (4d12+5) psychic damage and be stunned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 17,
            spells: {
                atWill: ["detect thoughts", "levitate"],
                "1/day each": ["confusion", "dominate monster", "eyebite", "feeblemind", "mass suggestion", "plane shift (self only)", "project image", "scrying", "telekinesis"]
            }
        }
    },

    // ===== Gnolls =====
    "gnoll-flesh-gnawer": {
        name: "Gnoll Flesh Gnawer",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 14,
        acType: "studded leather",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 14, con: 12, int: 8, wis: 10, cha: 8 },
        savingThrows: { dex: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll",
        cr: 1,
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gnoll makes three attacks: one with its bite and two with its shortsword." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Sudden Rush", description: "Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn't provoke opportunity attacks." }
        ]
    },
    "gnoll-hunter": {
        name: "Gnoll Hunter",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 13,
        acType: "leather armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 14, con: 12, int: 8, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll",
        cr: 0.5,
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gnoll makes two attacks, either with its glaive or its longbow." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage when used with two hands to make a melee attack." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage, and the target's speed is reduced by 10 feet until the end of its next turn." }
        ]
    },
    "gnoll-witherling": {
        name: "Gnoll Witherling",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 8, con: 12, int: 5, wis: 5, cha: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Gnoll but can't speak",
        cr: 0.25,
        traits: [
            { name: "Rampage", description: "When the witherling reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The witherling makes two attacks: one with its bite and one with its club, or two with its club." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Club", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ],
        reactions: [
            { name: "Vengeful Strike", description: "In response to a gnoll being reduced to 0 hit points within 30 feet of the witherling, the witherling makes a melee attack." }
        ]
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
        traits: [
            { name: "Aura of Blood Thirst", description: "If the flind isn't incapacitated, any creature with the Rampage trait can make a bite attack as a bonus action while within 10 feet of the flind." }
        ],
        actions: [
            { name: "Multiattack", description: "The flind makes three attacks: one with each of its different flail heads." },
            { name: "Flail of Madness", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw. On a failed save, the target must make a melee attack against a random target within its reach on its next turn. If it has no targets within its reach even after moving, it loses its action on that turn." },
            { name: "Flail of Pain", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage plus 22 (4d10) psychic damage." },
            { name: "Flail of Paralysis", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be paralyzed until the end of its next turn." }
        ]
    },

    // ===== Kobolds =====
    "kobold-dragonshield": {
        name: "Kobold Dragonshield",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 44,
        hitDice: "8d6+16",
        speed: { walk: 20 },
        abilityScores: { str: 12, dex: 15, con: 14, int: 8, wis: 9, cha: 10 },
        skills: { perception: 1 },
        damageResistances: ["see Dragon's Resistance below"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 1,
        traits: [
            { name: "Dragon's Resistance", description: "The kobold has resistance to a type of damage based on the color of dragon that invested it with power (choose or roll a d10): 1-2, acid (black); 3-4, cold (white); 5-6, fire (red); 7-8, lightning (blue); 9-10, poison (green)." },
            { name: "Heart of the Dragon", description: "If the kobold is frightened or paralyzed by an effect that allows a saving throw, it can repeat the save at the start of its turn to end the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits from this trait (including the dragonshield) has advantage on its next attack roll." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kobold makes two melee attacks." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "kobold-inventor": {
        name: "Kobold Inventor",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 13,
        hitDice: "3d6+3",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 12, int: 8, wis: 7, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 0.25,
        traits: [
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." },
            { name: "Weapon Invention", description: "The kobold uses one of the following options (roll a d8 or choose one); the kobold can use each one no more than once per day: 1. Acid, 2. Alchemist's Fire, 3. Basket of Centipedes, 4. Green Slime Pot, 5. Rot Grub Pot, 6. Scorpion on a Stick, 7. Skunk in a Cage, 8. Wasp Nest in a Bag." }
        ]
    },
    "kobold-scale-sorcerer": {
        name: "Kobold Scale Sorcerer",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d6+10",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 14, int: 10, wis: 9, cha: 14 },
        skills: { arcana: 2, medicine: 1 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 1,
        traits: [
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Sorcery Points", description: "The kobold has 3 sorcery points. It can spend 1 or more sorcery points as a bonus action to gain one of the following benefits: Heightened Spell, Subtle Spell." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kobold makes two attacks." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Chromatic Bolt", description: "Ranged Spell Attack: +4 to hit, range 90 ft., one target. Hit: 5 (1d10) of a type of the kobold's choice: acid, cold, fire, lightning, poison, or thunder." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["fire bolt", "mage hand", "mending", "poison spray"],
                "1st": { slots: 4, spells: ["charm person", "chromatic orb", "expeditious retreat"] },
                "2nd": { slots: 3, spells: ["scorching ray"] }
            }
        }
    },

    // ===== Orcs =====
    "orc-blade-of-ilneval": {
        name: "Orc Blade of Ilneval",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 11, con: 17, int: 10, wis: 12, cha: 14 },
        savingThrows: { wis: 3 },
        skills: { insight: 3, intimidation: 4, perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 4,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." },
            { name: "Foe Smiter of Ilneval", description: "The orc deals an extra die of damage when it hits with a longsword attack (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval's Command is available to use, the orc can use it after these attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage, or 14 (2d10+3) slashing damage when used with two hands." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Ilneval's Command (Recharge 4-6)", description: "Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one weapon attack." }
        ]
    },
    "orc-claw-of-luthic": {
        name: "Orc Claw of Luthic",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 14,
        acType: "hide armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 15, con: 16, int: 10, wis: 15, cha: 11 },
        skills: { intimidation: 2, medicine: 4, survival: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 2,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two claw attacks, or four claw attacks if it has fewer than half of its hit points remaining." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "mending", "resistance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bane", "cure wounds", "guiding bolt"] },
                "2nd": { slots: 3, spells: ["augury", "warding bond"] }
            }
        }
    },
    "orc-hand-of-yurtrus": {
        name: "Orc Hand of Yurtrus",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 12,
        acType: "hide armor",
        hp: 30,
        hitDice: "4d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 11, con: 16, int: 11, wis: 14, cha: 9 },
        skills: { arcana: 2, intimidation: 1, medicine: 4, religion: 2 },
        senses: ["darkvision 60 ft."],
        languages: "understands Common and Orc but can't speak",
        cr: 2,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." }
        ],
        actions: [
            { name: "Touch of the White Hand", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8) necrotic damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "mending", "resistance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bane", "detect magic", "inflict wounds", "protection from evil and good"] },
                "2nd": { slots: 3, spells: ["blindness/deafness", "silence"] }
            }
        }
    },
    "orc-nurtured-one-of-yurtrus": {
        name: "Orc Nurtured One of Yurtrus",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 9,
        hp: 30,
        hitDice: "4d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 8, con: 16, int: 7, wis: 11, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 0.5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." },
            { name: "Corrupted Carrier", description: "When the orc is reduced to 0 hit points, it explodes, and any creature within 10 feet of it must make a DC 13 Constitution saving throw. On a failed save, the creature takes 14 (4d6) poison damage and becomes poisoned. On a success, the creature takes half as much damage and isn't poisoned. A creature poisoned by this effect can repeat the save at the end of each of its turn, ending the effect on itself on a success. While poisoned by this effect, a creature can't regain hit points." },
            { name: "Nurtured One of Yurtrus", description: "The orc has advantage on saving throws against poison and disease." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage plus 2 (1d4) necrotic damage." },
            { name: "Corrupted Vengeance", description: "The orc reduces itself to 0 hit points, triggering its Corrupted Carrier trait." }
        ]
    },
    "orc-red-fang-of-shargaas": {
        name: "Orc Red Fang of Shargaas",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 15,
        acType: "studded leather",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 15, int: 9, wis: 11, cha: 9 },
        skills: { intimidation: 1, perception: 2, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 3,
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the orc can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Hand of Shargaas", description: "The orc deals 2 extra dice of damage when it hits a target with a weapon attack (included in its attacks)." },
            { name: "Shargaas's Sight", description: "Magical darkness doesn't impede the orc's darkvision." },
            { name: "Slayer", description: "In the first round of a combat, the orc has advantage on attack rolls against any creature that hasn't taken a turn yet. If the orc hits a creature that round who was surprised, the hit is automatically a critical hit." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two scimitar or dart attacks." },
            { name: "Scimitar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (3d6+3) slashing damage." },
            { name: "Dart", description: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 10 (3d4+3) piercing damage." },
            { name: "Veil of Shargaas (Recharges after a Short or Long Rest)", description: "The orc casts darkness without any components. Wisdom is its spellcasting ability." }
        ]
    },

    // ===== Hobgoblins =====
    "hobgoblin-devastator": {
        name: "Hobgoblin Devastator",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 13,
        acType: "studded leather",
        hp: 45,
        hitDice: "7d8+14",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 12, con: 14, int: 16, wis: 13, cha: 11 },
        skills: { arcana: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 4,
        traits: [
            { name: "Arcane Advantage", description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the hobgoblin and that ally isn't incapacitated." },
            { name: "Army Arcana", description: "When the hobgoblin casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage, or 5 (1d8+1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["acid splash", "fire bolt", "ray of frost", "shocking grasp"],
                "1st": { slots: 4, spells: ["fog cloud", "magic missile", "thunderwave"] },
                "2nd": { slots: 3, spells: ["gust of wind", "Melf's acid arrow", "scorching ray"] },
                "3rd": { slots: 3, spells: ["fireball", "fly", "lightning bolt"] },
                "4th": { slots: 1, spells: ["ice storm"] }
            }
        }
    },
    "hobgoblin-iron-shadow": {
        name: "Hobgoblin Iron Shadow",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 15,
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 40 },
        abilityScores: { str: 14, dex: 16, con: 15, int: 14, wis: 15, cha: 11 },
        skills: { acrobatics: 5, athletics: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 2,
        traits: [
            { name: "Unarmored Defense", description: "While the hobgoblin is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The hobgoblin makes four attacks, each of which can be an unarmed strike or a dart attack. It can also use Shadow Jaunt once, either before or after one of the attacks." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage." },
            { name: "Dart", description: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." },
            { name: "Shadow Jaunt", description: "The hobgoblin magically teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it is leaving and its destination must be in dim light or darkness." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 12,
            spells: {
                atWill: ["minor illusion", "prestidigitation"],
                "1/day each": ["charm person", "disguise self", "silent image"]
            }
        }
    },

    // ===== Misc Creatures =====
    "boggle": {
        name: "Boggle",
        source: "VGtM",
        size: "small",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        hp: 18,
        hitDice: "4d6+4",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 8, dex: 18, con: 13, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3, sleight of hand: 6, stealth: 6 },
        damageResistances: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "Sylvan",
        cr: 0.125,
        traits: [
            { name: "Dimensional Rift", description: "As a bonus action, the boggle can create an invisible and immobile rift within an opening or frame it can see within 5 feet of it, provided that the space is no bigger than 10 feet on any side. The dimensional rift bridges the distance between that space and any point within 30 feet of it that the boggle can see or specify by distance and direction. While next to the rift, the boggle can see through it and is considered to be next to the destination as well, and anything the boggle puts through the rift (including a portion of its body) emerges at the destination. Only the boggle can use the rift, and it lasts until the end of the boggle's next turn." },
            { name: "Slippery", description: "The boggle has advantage on ability checks and saving throws made to escape a grapple." }
        ],
        actions: [
            { name: "Pummel", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6−1) bludgeoning damage." },
            { name: "Oil Puddle", description: "The boggle creates a puddle of oil that is either slippery or sticky (boggle's choice). The puddle is 1 inch deep and covers the ground in the boggle's space. The puddle is difficult terrain. When the puddle appears, each creature standing in its area must succeed on a DC 11 Dexterity saving throw or fall prone (slippery) or be restrained (sticky). A creature that enters the area must also succeed on that save." }
        ]
    },
    "catoblepas": {
        name: "Catoblepas",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 12, con: 21, int: 3, wis: 14, cha: 8 },
        skills: { perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Keen Smell", description: "The catoblepas has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Stench", description: "Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the Stench of any catoblepas for 1 hour." }
        ],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6+4) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be stunned until the start of the catoblepas's next turn." },
            { name: "Death Ray (Recharge 5-6)", description: "The catoblepas targets one creature it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray." }
        ]
    },
    "cave-fisher": {
        name: "Cave Fisher",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 16,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 16, dex: 13, con: 14, int: 3, wis: 10, cha: 3 },
        skills: { perception: 2, stealth: 5 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Adhesive Filament", description: "The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is grappled by the cave fisher (escape DC 13), and ability checks made to escape this grapple have disadvantage. The filament can be attacked (AC 15; 5 hit points; immunity to poison and psychic damage). A weapon that fails to sever it becomes stuck to it, requiring an action and a successful DC 13 Strength check to pull free. Destroying the filament deals no damage to the cave fisher, which can extrude a replacement filament on its next turn." },
            { name: "Flammable Blood", description: "If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage." },
            { name: "Spider Climb", description: "The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The cave fisher makes two attacks with its claws." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Filament", description: "One creature grappled by the cave fisher's adhesive filament must make a DC 13 Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can't extrude another filament." }
        ]
    },
    "chitine": {
        name: "Chitine",
        source: "VGtM",
        size: "small",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "hide armor",
        hp: 18,
        hitDice: "4d6+4",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 10, dex: 14, con: 12, int: 10, wis: 10, cha: 7 },
        skills: { athletics: 4, stealth: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Undercommon",
        cr: 0.5,
        traits: [
            { name: "Fey Ancestry", description: "The chitine has advantage on saving throws against being charmed, and magic can't put the chitine to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Sense", description: "While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The chitine ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The chitine makes three attacks with its daggers." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ]
    },
    "choldrith": {
        name: "Choldrith",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 12, dex: 16, con: 12, int: 11, wis: 14, cha: 10 },
        skills: { athletics: 5, religion: 2, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Undercommon",
        cr: 3,
        traits: [
            { name: "Fey Ancestry", description: "The choldrith has advantage on saving throws against being charmed, and magic can't put the choldrith to sleep." },
            { name: "Spider Climb", description: "The choldrith can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the choldrith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Sense", description: "While in contact with a web, the choldrith knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The choldrith ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage plus 10 (3d6) poison damage." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one Large or smaller creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 11 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 hp; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "mending", "resistance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bane", "healing word", "sanctuary", "shield of faith"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon (dagger)"] }
            }
        }
    },
    "cranium-rat": {
        name: "Cranium Rat",
        source: "VGtM",
        size: "tiny",
        type: "aberration",
        alignment: "lawful evil",
        ac: 12,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 30 },
        abilityScores: { str: 2, dex: 14, con: 10, int: 4, wis: 11, cha: 8 },
        senses: ["darkvision 30 ft."],
        languages: "telepathy 30 ft.",
        cr: 0,
        traits: [
            { name: "Illumination", description: "As a bonus action, the cranium rat can shed dim light from its exposed brain in a 5-foot radius or extinguish the light." },
            { name: "Telepathic Shroud", description: "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "darkmantle": {
        name: "Darkmantle",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 16, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Echolocation", description: "The darkmantle can't use its blindsight while deafened." },
            { name: "False Appearance", description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite." }
        ],
        actions: [
            { name: "Crush", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way." },
            { name: "Darkness Aura (1/Day)", description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled." }
        ]
    },
    "froghemoth": {
        name: "Froghemoth",
        source: "VGtM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d12+80",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 23, dex: 13, con: 20, int: 2, wis: 12, cha: 5 },
        savingThrows: { con: 9, wis: 5 },
        skills: { perception: 9, stealth: 5 },
        damageResistances: ["fire", "lightning"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 10,
        traits: [
            { name: "Amphibious", description: "The froghemoth can breathe air and water." },
            { name: "Shock Susceptibility", description: "If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both." }
        ],
        actions: [
            { name: "Multiattack", description: "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite." },
            { name: "Tentacle", description: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8+6) bludgeoning damage, and the target is grappled (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth's turns." },
            { name: "Tongue", description: "The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action." }
        ]
    },
    "neogi": {
        name: "Neogi",
        source: "VGtM",
        size: "small",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d6+12",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 6, dex: 16, con: 14, int: 13, wis: 12, cha: 15 },
        skills: { intimidation: 4, perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Deep Speech, Undercommon",
        cr: 3,
        traits: [
            { name: "Mental Fortitude", description: "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep." },
            { name: "Spider Climb", description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The neogi makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage." },
            { name: "Enslave (Recharges after a Short or Long Rest)", description: "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The charmed target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the charmed target takes damage, it can repeat the saving throw, ending the effect on itself on a success." }
        ]
    },
    "neogi-hatchling": {
        name: "Neogi Hatchling",
        source: "VGtM",
        size: "tiny",
        type: "aberration",
        alignment: "lawful evil",
        ac: 11,
        hp: 7,
        hitDice: "3d4",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 6, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Mental Fortitude", description: "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep." },
            { name: "Spider Climb", description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage plus 3 (1d6) poison damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "neogi-master": {
        name: "Neogi Master",
        source: "VGtM",
        size: "medium",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 71,
        hitDice: "11d8+22",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 6, dex: 16, con: 14, int: 16, wis: 12, cha: 18 },
        savingThrows: { wis: 3 },
        skills: { arcana: 5, deception: 6, intimidation: 6, perception: 3, persuasion: 6 },
        senses: ["darkvision 120 ft."],
        languages: "Common, Deep Speech, Undercommon, telepathy 30 ft.",
        cr: 4,
        traits: [
            { name: "Mental Fortitude", description: "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep." },
            { name: "Spider Climb", description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The neogi makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage." },
            { name: "Enslave (Recharges after a Short or Long Rest)", description: "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target. The charmed target obeys the neogi's commands and can't take reactions, and the neogi and the target can communicate telepathically with each other at a distance of up to 1 mile. Whenever the charmed target takes damage, it can repeat the saving throw, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["guidance", "mage hand", "minor illusion", "prestidigitation"],
                "1/day each": ["dimension door", "fear", "hold person", "invisibility"]
            }
        }
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
        traits: [
            { name: "Plant Camouflage", description: "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life." },
            { name: "Regeneration", description: "The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    },
    "vegepygmy-chief": {
        name: "Vegepygmy Chief",
        source: "VGtM",
        size: "small",
        type: "plant",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d6+12",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 14, con: 14, int: 7, wis: 12, cha: 9 },
        skills: { perception: 3, stealth: 4 },
        damageResistances: ["lightning", "piercing"],
        senses: ["darkvision 60 ft."],
        languages: "Vegepygmy",
        cr: 2,
        traits: [
            { name: "Plant Camouflage", description: "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life." },
            { name: "Regeneration", description: "The vegepygmy regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "The vegepygmy makes two attacks with its claws or two melee attacks with its spear." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage if used with two hands to make a melee attack." },
            { name: "Spores (1/Day)", description: "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn't a plant must succeed on a DC 12 Constitution saving throw or be poisoned. While poisoned in this way, a target takes 9 (2d8) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "thorny": {
        name: "Thorny",
        source: "VGtM",
        size: "medium",
        type: "plant",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 12, con: 13, int: 2, wis: 10, cha: 6 },
        skills: { perception: 4, stealth: 3 },
        damageResistances: ["lightning", "piercing"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Plant Camouflage", description: "The thorny has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life." },
            { name: "Regeneration", description: "The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the thorny's next turn. The thorny dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Thorny Body", description: "At the start of its turn, the thorny deals 2 (1d4) piercing damage to any creature grappling it." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6+1) piercing damage." }
        ]
    }
};

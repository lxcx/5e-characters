// D&D 5E Monster Manual - Monsters D
// Source: Monster Manual (MM)

const monstersMM_D = {
    // ===== D =====
    
    
    
    "death-tyrant": {
        name: "Death Tyrant",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 187,
        hitDice: "25d10+50",
        speed: { walk: "0 ft.", fly: "20 ft. (hover)" },
        abilityScores: { str: 10, dex: 14, con: 14, int: 19, wis: 15, cha: 19 },
        savingThrows: { str: 5, con: 7, int: 9, wis: 7, cha: 9 },
        skills: { perception: 12 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "paralyzed", "petrified", "poisoned", "prone"],
        senses: ["darkvision 120 ft.", "passive Perception 22"],
        languages: "Deep Speech, Undercommon",
        cr: 14,
        traits: [
            { name: "Negative Energy Cone", description: "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the death tyrant decides which way the cone faces and whether the cone is active.\n\nAny creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the death tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "4d6 piercing" },
            { name: "Eye Rays", description: "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:\n\n1. Charm Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be charmed by the death tyrant for 1 hour.\n\n2. Paralyzing Ray. The targeted creature must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute.\n\n3. Fear Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute.\n\n4. Slowing Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or have its speed halved for 1 minute.\n\n5. Enervation Ray. The targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.\n\n6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 17 Strength saving throw or the death tyrant moves it up to 30 feet in any direction.\n\n7. Sleep Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or fall asleep for 1 minute.\n\n8. Petrification Ray. The targeted creature must make a DC 17 Dexterity saving throw or begin turning to stone.\n\n9. Disintegration Ray. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage.\n\n10. Death Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Eye Ray", cost: 1, description: "The death tyrant uses one random eye ray." }
            ]
        }
    },
    "deep-gnome": {
        name: "Deep Gnome (Svirfneblin)",
        source: "MM",
        size: "small",
        type: "humanoid",
        tags: ["gnome"],
        alignment: "neutral good",
        ac: 15,
        acType: "chain shirt",
        hp: 16,
        hitDice: "3d6+6",
        speed: { walk: "20 ft." },
        abilityScores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 9 },
        skills: { investigation: 3, perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "Gnomish, Terran, Undercommon",
        cr: 0.5,
        traits: [
            { name: "Stone Camouflage", description: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Gnome Cunning", description: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 11,
            innate: true,
            spells: {
                "at will": ["nondetection (self only)"],
                "1/day each": ["blindness-deafness", "blur", "disguise-self"]
            }
        },
        actions: [
            { name: "War Pick", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing" },
            { name: "Poisoned Dart", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d4+2 piercing", additionalText: "The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute." }
        ]
    },
    
    
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
        speed: { walk: "50 ft." },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 piercing", additionalText: "If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "displacer-beast": {
        name: "Displacer Beast",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: "40 ft." },
        abilityScores: { str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Avoidance", description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Displacement", description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0." }
        ],
        actions: [
            { name: "Multiattack", description: "The displacer beast makes two attacks with its tentacles." },
            { name: "Tentacle", type: "melee", attackBonus: 6, reach: 10, damage: "1d6+4 bludgeoning plus 1d6 piercing" }
        ]
    },
    "djinni": {
        name: "Djinni",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 161,
        hitDice: "14d10+84",
        speed: { walk: "30 ft.", fly: "90 ft." },
        abilityScores: { str: 21, dex: 15, con: 22, int: 15, wis: 16, cha: 20 },
        savingThrows: { dex: 6, wis: 7, cha: 9 },
        damageImmunities: ["lightning", "thunder"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: "Auran",
        cr: 11,
        traits: [
            { name: "Elemental Demise", description: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 17,
            attackBonus: 9,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good", "detect-magic", "thunderwave"],
                "3/day each": ["create-food-and-water", "tongues", "wind-walk"],
                "1/day each": ["conjure-elemental (air elemental only)", "creation", "gaseous-form", "invisibility", "major-image", "plane-shift"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The djinni makes three scimitar attacks." },
            { name: "Scimitar", type: "melee", attackBonus: 9, reach: 5, damage: "2d6+5 slashing plus 1d6 lightning (or thunder)" },
            { name: "Create Whirlwind", description: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\n\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind." }
        ]
    },
    
    
    
    "drider": {
        name: "Drider",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12 },
        skills: { perception: 5, stealth: 9 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: "Elvish, Undercommon",
        cr: 6,
        traits: [
            { name: "Fey Ancestry", description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep." },
            { name: "Spider Climb", description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Walker", description: "The drider ignores movement restrictions caused by webbing." }
        ],
        spellcasting: {
            ability: "wis",
            saveDC: 13,
            innate: true,
            spells: {
                "at will": ["dancing-lights"],
                "1/day each": ["darkness", "faerie-fire"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack." },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "1d4 piercing plus 2d8 poison" },
            { name: "Longsword", type: "melee", attackBonus: 6, reach: 5, damage: "1d8+3 slashing" },
            { name: "Longbow", type: "ranged", attackBonus: 6, range: "150/600 ft.", damage: "1d8+3 piercing plus 1d8 poison" }
        ]
    },
    "drow": {
        name: "Drow",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["elf"],
        alignment: "neutral evil",
        ac: 15,
        acType: "chain shirt",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 14, con: 10, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "Elvish, Undercommon",
        cr: 0.25,
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 11,
            innate: true,
            spells: {
                "at will": ["dancing-lights"],
                "1/day each": ["darkness", "faerie-fire"]
            }
        },
        actions: [
            { name: "Shortsword", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Hand Crossbow", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing", additionalText: "The target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake." }
        ]
    },
    
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Elvish, Sylvan",
        cr: 1,
        traits: [
            { name: "Magic Resistance", description: "The dryad has advantage on saving throws against spells and other magical effects." },
            { name: "Speak with Beasts and Plants", description: "The dryad can communicate with beasts and plants as if they shared a language." },
            { name: "Tree Stride", description: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 14,
            innate: true,
            spells: {
                "at will": ["druidcraft"],
                "3/day each": ["entangle", "goodberry"],
                "1/day each": ["barkskin", "pass-without-trace", "shillelagh"]
            }
        },
        actions: [
            { name: "Club", type: "melee", attackBonus: 2, reach: 5, damage: "1d4 bludgeoning (1d8+4 with shillelagh)" },
            { name: "Fey Charm", description: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\n\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\n\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time." }
        ]
    },
    "duergar": {
        name: "Duergar",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["dwarf"],
        alignment: "lawful evil",
        ac: 16,
        acType: "scale mail, shield",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: "25 ft." },
        abilityScores: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: "Dwarvish, Undercommon",
        cr: 1,
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available." },
            { name: "War Pick", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing (2d8+2 while enlarged)" },
            { name: "Javelin", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing (2d6+2 while enlarged)" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing" },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour. Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "dust-mephit": {
        name: "Dust Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 17,
        hitDice: "5d6",
        speed: { walk: "30 ft.", fly: "30 ft." },
        abilityScores: { str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageVulnerabilities: ["fire"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "Auran, Terran",
        cr: 0.5,
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 10,
            innate: true,
            spells: {
                "1/day": ["sleep"]
            }
        },
        actions: [
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 slashing" },
            { name: "Blinding Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    }
};

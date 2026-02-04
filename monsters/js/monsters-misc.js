// Aberrations, Fey, Celestials, and Other Creatures
// Source: MM (Monster Manual)

const MONSTERS_MISC = {
    // ===== ABERRATIONS =====
    
    
    
    "intellect-devourer": {
        name: "Intellect Devourer",
        source: "MM",
        size: "tiny",
        type: "aberration",
        alignment: "lawful evil",
        ac: 12,
        hp: 21,
        hitDice: "6d4+6",
        speed: { walk: 40 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 12, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Deep Speech but can't speak, telepathy 60 ft.",
        cr: 2,
        traits: [
            { name: "Detect Sentience", description: "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell." }
        ],
        actions: [
            { name: "Multiattack", description: "The intellect devourer makes one attack with its claws and uses Devour Intellect." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Devour Intellect", description: "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence." },
            { name: "Body Thief", description: "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body." }
        ]
    },
    

    // ===== FEY =====
    
    
    
    "sea-hag": {
        name: "Sea Hag",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 16, dex: 13, con: 16, int: 12, wis: 12, cha: 13 },
        senses: ["darkvision 60 ft."],
        languages: "Aquan, Common, Giant",
        cr: 2,
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Horrific Appearance", description: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Death Glare", description: "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies." }
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
    

    // ===== CELESTIALS =====
    
    
    
    
    

    // ===== OTHER CREATURES =====
    
    
    
    
    
    
};

// Expansion Pack 18 - Even More Creatures
// Continuing to fill gaps

const MONSTERS_EXPANSION18 = {
    // ===== More Undead =====
    "deathlock": {
        name: "Deathlock",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 12,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 15, con: 10, int: 14, wis: 12, cha: 16 },
        savingThrows: { int: 4, cha: 5 },
        skills: { arcana: 4, history: 4 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 4,
        environment: ["underdark", "urban"],
        role: "artillery",
        tags: ["undead", "spellcaster"],
        traits: [
            { name: "Turn Resistance", description: "The deathlock has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Deathly Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) necrotic damage." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["chill touch", "eldritch blast", "mage hand"],
                "1st": { slots: 4, spells: ["arms of Hadar", "hex"] },
                "2nd": { slots: 3, spells: ["crown of madness", "darkness", "hold person", "invisibility", "spider climb"] }
            }
        }
    },
    "deathlock-mastermind": {
        name: "Deathlock Mastermind",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 110,
        hitDice: "20d8+20",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 12, int: 15, wis: 12, cha: 17 },
        savingThrows: { int: 5, cha: 6 },
        skills: { arcana: 5, history: 5, perception: 4 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "the languages it knew in life",
        cr: 8,
        environment: ["underdark", "urban"],
        role: "controller",
        tags: ["undead", "spellcaster"],
        traits: [
            { name: "Turn Resistance", description: "The deathlock has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Deathly Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6+3) necrotic damage." },
            { name: "Grave Bolts", description: "Ranged Spell Attack: +6 to hit, range 120 ft., one or two targets. Hit: 18 (4d8) necrotic damage. If the target is Large or smaller, it must succeed on a DC 16 Strength saving throw or become restrained as shadowy tendrils wrap around it for 1 minute. A restrained target can use its action to make a DC 16 Strength check, freeing itself on a success." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["chill touch", "mage hand", "message", "minor illusion", "poison spray"],
                "1st": { slots: 4, spells: ["detect magic", "disguise self", "mage armor"] },
                "2nd": { slots: 3, spells: ["darkness", "hold person", "invisibility", "spider climb"] },
                "3rd": { slots: 3, spells: ["counterspell", "dispel magic", "hunger of Hadar"] },
                "4th": { slots: 2, spells: ["blight", "dimension door"] },
                "5th": { slots: 1, spells: ["contact other plane", "negative energy flood"] }
            }
        }
    },
    "spawn-of-kyuss": {
        name: "Spawn of Kyuss",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 10,
        hp: 76,
        hitDice: "9d8+36",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 18, int: 5, wis: 7, cha: 3 },
        savingThrows: { wis: 1 },
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages it knew in life but can't speak",
        cr: 5,
        environment: ["underdark"],
        role: "brute",
        tags: ["undead"],
        traits: [
            { name: "Regeneration", description: "The spawn of Kyuss regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the spawn takes radiant damage, this trait doesn't function at the start of the spawn's next turn. The spawn is destroyed only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Worms", description: "If the spawn of Kyuss is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away, and it loses its Burrowing Worm action." }
        ],
        actions: [
            { name: "Multiattack", description: "The spawn of Kyuss makes two attacks with its claws and uses Burrowing Worm." },
            { name: "Burrowing Worm", description: "A worm launches from the spawn of Kyuss at one humanoid that the spawn can see within 10 feet of it. The worm latches onto the target's skin unless the target succeeds on a DC 11 Dexterity saving throw. The worm is a Tiny undead with AC 6, 1 hit point, a 2 (-4) in every ability score, and a speed of 1 foot. While on the target's skin, the worm can be killed by normal means or scraped off using an action (the spawn can use this action to launch a scraped-off worm at a humanoid it can see within 10 feet of the worm). Otherwise, the worm burrows under the target's skin at the end of the target's next turn, dealing 1 piercing damage to it. At the end of each of its turns thereafter, the target takes 7 (2d6) necrotic damage per worm infesting it (maximum of 10d6). A worm-infested target dies if it drops to 0 hit points, then rises 10 minutes later as a spawn of Kyuss. If a worm-infested creature is targeted by an effect that cures disease or removes a curse, all the worms infesting it wither away." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage plus 7 (2d6) necrotic damage." }
        ]
    },

    // ===== More Aberrations =====
    "mind-witness": {
        name: "Mind Witness",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 14, con: 14, int: 15, wis: 15, cha: 10 },
        savingThrows: { int: 5, wis: 5 },
        skills: { perception: 8 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 600 ft.",
        cr: 5,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration", "beholder-kin", "mind flayer"],
        traits: [
            { name: "Telepathic Hub", description: "When the mind witness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see." }
        ],
        actions: [
            { name: "Multiattack", description: "The mind witness makes two attacks: one with its bite and one with its tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6+2) piercing damage." },
            { name: "Tentacles", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 20 (4d8+2) psychic damage. If the target is Large or smaller, it is grappled (escape DC 13) and must succeed on a DC 13 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Eye Ray", description: "The mind witness shoots one magical eye ray at random (reroll duplicates), choosing one target it can see within 120 feet of it. See the beholder stat block for a list of possible eye rays." }
        ]
    },
    
    

    // ===== More Creatures =====
    "meenlock": {
        name: "Meenlock",
        source: "VGtM",
        size: "small",
        type: "fey",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 31,
        hitDice: "7d6+7",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 12, int: 11, wis: 10, cha: 8 },
        skills: { perception: 4, stealth: 6, survival: 2 },
        conditionImmunities: ["frightened"],
        senses: ["darkvision 120 ft."],
        languages: "telepathy 120 ft.",
        cr: 2,
        environment: ["forest", "swamp"],
        role: "lurker",
        tags: ["fey"],
        traits: [
            { name: "Fear Aura", description: "Any beast or humanoid that starts its turn within 10 feet of the meenlock must succeed on a DC 11 Wisdom saving throw or be frightened until the start of the creature's next turn." },
            { name: "Light Sensitivity", description: "While in bright light, the meenlock has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Shadow Teleport (Recharge 5-6)", description: "As a bonus action, the meenlock can teleport to an unoccupied space within 30 feet of it, provided that both the space it's teleporting from and its destination are in dim light or darkness. The destination need not be within line of sight." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage, and the target must succeed on a DC 11 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    
    "korred": {
        name: "Korred",
        source: "VGtM",
        size: "small",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 17,
        acType: "natural armor",
        hp: 102,
        hitDice: "12d6+60",
        speed: { walk: 30, burrow: 30 },
        abilityScores: { str: 23, dex: 14, con: 20, int: 10, wis: 15, cha: 9 },
        skills: { athletics: 9, perception: 5, stealth: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft.", "tremorsense 120 ft."],
        languages: "Dwarvish, Gnomish, Sylvan, Terran, Undercommon",
        cr: 7,
        environment: ["forest", "hill", "mountain", "underdark"],
        role: "brute",
        tags: ["fey"],
        traits: [
            { name: "Command Hair", description: "The korred has at least one 50-foot-long rope woven out of its hair. As a bonus action, the korred commands one such rope within 30 feet of it to move up to 20 feet and entangle a Large or smaller creature that the korred can see. The target must succeed on a DC 13 Dexterity saving throw or become grappled by the rope (escape DC 13). Until this grapple ends, the target is restrained." },
            { name: "Stone Camouflage", description: "The korred has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Stone Stride", description: "Once on each of its turns, the korred can use 5 feet of movement to step magically into one stone object or surface and emerge from a second stone object or surface within 60 feet of it, appearing in an unoccupied space within 5 feet of the second object or surface." }
        ],
        actions: [
            { name: "Multiattack", description: "The korred makes two attacks with its greatclub or hurls two rocks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d8+6) bludgeoning damage, or 19 (3d8+6) bludgeoning damage if the korred is on the ground and the target is no more than 5 feet from a stone surface." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/120 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 13,
            spells: {
                atWill: ["commune with nature", "meld into stone", "stone shape"],
                "1/day each": ["conjure elemental (as 6th-level spell; galeb duhr, gargoyle, earth elemental, or xorn only)", "Otto's irresistible dance"]
            }
        }
    }
};

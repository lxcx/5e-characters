// Expansion Pack 52 - Final Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION52 = {
    // ===== More Misc Creatures =====
    
    "faerie-dragon": {
        name: "Faerie Dragon (Violet)",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "chaotic good",
        ac: 15,
        hp: 14,
        hitDice: "4d4+4",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 3, dex: 20, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { arcana: 4, perception: 3, stealth: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Draconic, Sylvan",
        cr: 2,
        environment: ["forest"],
        role: "controller",
        tags: ["dragon", "spellcaster"],
        traits: [
            { name: "Superior Invisibility", description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it." },
            { name: "Limited Telepathy", description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it." },
            { name: "Magic Resistance", description: "The dragon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." },
            { name: "Euphoria Breath (Recharge 5-6)", description: "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                "1/day each": ["color spray", "dancing lights", "hallucinatory terrain", "mage hand", "major image", "minor illusion", "mirror image", "polymorph", "suggestion"]
            }
        }
    }};

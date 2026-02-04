// Expansion Pack 17 - More Creatures
// Filling remaining gaps

const MONSTERS_EXPANSION17 = {
    // ===== More Classic Monsters =====
    
    
    
    

    // ===== More Humanoids =====
    "hobgoblin-captain": {
        name: "Hobgoblin Captain",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 13 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 3,
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "leader",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The hobgoblin makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated." }
        ]
    },
    
    

    // ===== More Misc =====
    
    "kraken-priest": {
        name: "Kraken Priest",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any evil alignment",
        ac: 10,
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 12, dex: 10, con: 16, int: 10, wis: 15, cha: 14 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: [],
        languages: "any two languages",
        cr: 5,
        environment: ["coastal", "underwater"],
        role: "controller",
        tags: ["humanoid", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The priest can breathe air and water." }
        ],
        actions: [
            { name: "Thunderous Touch", description: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10) thunder damage." },
            { name: "Voice of the Kraken (Recharges after a Short or Long Rest)", description: "A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC 14 Charisma saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["guidance", "light", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "create or destroy water"] },
                "2nd": { slots: 3, spells: ["augury", "call lightning", "gust of wind"] },
                "3rd": { slots: 3, spells: ["control water", "water breathing", "water walk"] }
            }
        }
    },
    "nagpa": {
        name: "Nagpa",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "nagpa",
        alignment: "neutral evil",
        ac: 19,
        acType: "natural armor",
        hp: 187,
        hitDice: "34d8+34",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 15, con: 12, int: 23, wis: 18, cha: 21 },
        savingThrows: { int: 12, wis: 10, cha: 11 },
        skills: { arcana: 12, deception: 11, history: 12, insight: 10, perception: 10 },
        senses: ["truesight 120 ft."],
        languages: "Common plus up to five other languages",
        cr: 17,
        environment: ["desert", "swamp", "underdark", "urban"],
        role: "controller",
        tags: ["humanoid", "spellcaster"],
        traits: [
            { name: "Corruption", description: "As a bonus action, the nagpa targets one creature it can see within 90 feet of it. The target must make a DC 20 Charisma saving throw. An evil creature makes the save with disadvantage. On a failed save, the target is charmed by the nagpa until the start of the nagpa's next turn. On a successful save, the target becomes immune to the nagpa's Corruption for the next 24 hours." },
            { name: "Paralysis (Recharge 6)", description: "As a bonus action, the nagpa forces each creature within 30 feet of it to make a DC 20 Wisdom saving throw, excluding undead and constructs. On a failed save, a target is paralyzed for 1 minute. A paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        actions: [
            { name: "Staff", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 24 (7d6) necrotic damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 20,
            attack: 12,
            spells: {
                cantrips: ["chill touch", "fire bolt", "mage hand", "message", "minor illusion"],
                "1st": { slots: 4, spells: ["charm person", "detect magic", "protection from evil and good", "witch bolt"] },
                "2nd": { slots: 3, spells: ["hold person", "ray of enfeeblement", "suggestion"] },
                "3rd": { slots: 3, spells: ["counterspell", "fireball", "fly"] },
                "4th": { slots: 3, spells: ["confusion", "hallucinatory terrain", "wall of fire"] },
                "5th": { slots: 3, spells: ["dominate person", "dream", "geas"] },
                "6th": { slots: 1, spells: ["circle of death", "disintegrate"] },
                "7th": { slots: 1, spells: ["etherealness", "finger of death"] },
                "8th": { slots: 1, spells: ["dominate monster", "feeblemind"] }
            }
        }
    }
};

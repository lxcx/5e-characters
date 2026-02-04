// Expansion Pack 27 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION27 = {
    // ===== More Vampires =====
    
    "vampire-spellcaster": {
        name: "Vampire Spellcaster",
        source: "MM",
        size: "medium",
        type: "undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18 },
        savingThrows: { dex: 9, wis: 7, cha: 9 },
        skills: { perception: 7, stealth: 9 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft."],
        languages: "the languages it knew in life",
        cr: 15,
        environment: ["urban"],
        role: "controller",
        tags: ["undead", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form." },
            { name: "Legendary Resistance (3/Day)", description: "If the vampire fails a saving throw, it can choose to succeed instead." },
            { name: "Misty Escape", description: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist instead of falling unconscious." },
            { name: "Regeneration", description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has standard vampire weaknesses." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8+4) bludgeoning damage." },
            { name: "Bite (Bat or Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) necrotic damage." }
        ],
        legendaryActions: [
            { name: "Move", description: "The vampire moves up to its speed without provoking opportunity attacks." },
            { name: "Unarmed Strike", description: "The vampire makes one unarmed strike." },
            { name: "Bite (Costs 2 Actions)", description: "The vampire makes one bite attack." }
        ],
        spellcasting: {
            ability: "int",
            dc: 15,
            attack: 7,
            spells: {
                cantrips: ["mage hand", "prestidigitation", "ray of frost"],
                "1st": { slots: 4, spells: ["comprehend languages", "fog cloud", "sleep"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "gust of wind", "mirror image"] },
                "3rd": { slots: 3, spells: ["animate dead", "bestow curse", "nondetection"] },
                "4th": { slots: 3, spells: ["blight", "greater invisibility"] },
                "5th": { slots: 2, spells: ["dominate person"] }
            }
        }
    },

    // ===== More Creatures =====
    "mind-flayer-lich": {
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
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 10,
        environment: ["underdark"],
        role: "controller",
        tags: ["undead", "mind flayer", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The alhoon has advantage on saving throws against spells and other magical effects." },
            { name: "Turn Resistance", description: "The alhoon has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Chilling Grasp", description: "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (3d6) cold damage, and the alhoon regains hit points equal to the damage dealt." },
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
    
    
    "retriever": {
        name: "Retriever",
        source: "MToF",
        size: "large",
        type: "construct",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 150,
        hitDice: "12d10+84",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 22, dex: 16, con: 20, int: 3, wis: 11, cha: 4 },
        savingThrows: { dex: 8, con: 10, wis: 5 },
        skills: { perception: 5, stealth: 8 },
        damageResistances: ["necrotic", "psychic"],
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "understands Abyssal, Elvish, and Undercommon but can't speak",
        cr: 14,
        environment: ["abyss", "underdark"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Faultless Tracker", description: "The retriever is given a quarry by its master. The quarry can be a specific creature or object the master is personally acquainted with, or it can be a general type of creature or object the master has seen before. The retriever knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The retriever can have only one such quarry at a time. The retriever also always knows the location of its master." },
            { name: "Innate Spellcasting", description: "The retriever's innate spellcasting ability is Wisdom (spell save DC 13). The retriever can innately cast the following spells, requiring no material components: 3/day each: plane shift (only self and quarry), web" }
        ],
        actions: [
            { name: "Multiattack", description: "The retriever makes two foreleg attacks and uses its force or paralyzing beam once, if available." },
            { name: "Foreleg", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 15 (2d8+6) slashing damage." },
            { name: "Force Beam", description: "The retriever targets one creature it can see within 60 feet of it. The target must make a DC 16 Dexterity saving throw, taking 27 (5d10) force damage on a failed save, or half as much damage on a successful one." },
            { name: "Paralyzing Beam (Recharge 5-6)", description: "The retriever targets one creature it can see within 60 feet of it. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    }
};

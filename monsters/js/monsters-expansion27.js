// Expansion Pack 27 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION27 = {
    // ===== More Vampires =====
    "vampire": {
        name: "Vampire",
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
        cr: 13,
        environment: ["urban"],
        role: "brute",
        tags: ["undead", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form." },
            { name: "Legendary Resistance (3/Day)", description: "If the vampire fails a saving throw, it can choose to succeed instead." },
            { name: "Misty Escape", description: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed." },
            { name: "Regeneration", description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, and Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8+4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)." },
            { name: "Bite (Bat or Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount." },
            { name: "Charm", description: "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected." },
            { name: "Children of the Night (1/Day)", description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands." }
        ],
        legendaryActions: [
            { name: "Move", description: "The vampire moves up to its speed without provoking opportunity attacks." },
            { name: "Unarmed Strike", description: "The vampire makes one unarmed strike." },
            { name: "Bite (Costs 2 Actions)", description: "The vampire makes one bite attack." }
        ]
    },
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
    "star-spawn-hulk": {
        name: "Star Spawn Hulk",
        source: "MToF",
        size: "large",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d10+65",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 8, con: 21, int: 7, wis: 12, cha: 9 },
        savingThrows: { dex: 3, wis: 5 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Deep Speech",
        cr: 10,
        environment: ["any"],
        role: "brute",
        tags: ["aberration", "star spawn"],
        traits: [
            { name: "Psychic Mirror", description: "If the hulk takes psychic damage, each creature within 10 feet of the hulk takes that damage instead; the hulk takes none of the damage. In addition, the hulk's thoughts and location can't be discerned by magic." }
        ],
        actions: [
            { name: "Multiattack", description: "The hulk makes two slam attacks. If both attacks hit the same target, the target also takes 9 (2d8) psychic damage and must succeed on a DC 17 Constitution saving throw or be stunned until the end of the target's next turn." },
            { name: "Slam", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." },
            { name: "Reaping Arms (Recharge 5-6)", description: "The hulk makes a separate slam attack against each creature within 10 feet of it. Each creature that is hit must also succeed on a DC 17 Dexterity saving throw or be knocked prone." }
        ]
    },
    "star-spawn-seer": {
        name: "Star Spawn Seer",
        source: "MToF",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 12, con: 18, int: 22, wis: 19, cha: 16 },
        savingThrows: { dex: 6, int: 11, wis: 9, cha: 8 },
        skills: { perception: 9 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Deep Speech, Undercommon",
        cr: 13,
        environment: ["any"],
        role: "controller",
        tags: ["aberration", "star spawn"],
        traits: [
            { name: "Out-of-Phase Movement", description: "The seer can move through other creatures and objects as if they were difficult terrain. Each creature it moves through takes 5 (1d10) psychic damage; no creature can take this damage more than once per turn. The seer takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Multiattack", description: "The seer makes two comet staff attacks or uses Psychic Orb twice." },
            { name: "Comet Staff", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d6+6) bludgeoning damage plus 18 (4d8) psychic damage, or 10 (1d8+6) bludgeoning damage plus 18 (4d8) psychic damage if used with two hands, and the target must succeed on a DC 19 Constitution saving throw or be incapacitated until the end of its next turn." },
            { name: "Psychic Orb", description: "Ranged Spell Attack: +11 to hit, range 120 ft., one target. Hit: 27 (5d10) psychic damage." },
            { name: "Collapse Distance (Recharge 6)", description: "The seer warps space around a creature it can see within 30 feet of it. That creature must make a DC 19 Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is magically teleported up to 60 feet to an unoccupied space the seer can see, and all other creatures within 10 feet of the target's original space each take 39 (6d12) psychic damage. On a successful save, the target takes 19 (3d12) psychic damage." }
        ],
        reactions: [
            { name: "Bend Space", description: "When the seer would be hit by an attack, it teleports, exchanging positions with another star spawn it can see within 60 feet of it. The other star spawn is hit by the attack instead." }
        ]
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

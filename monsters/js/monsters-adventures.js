// Adventure Book Monsters
// Curse of Strahd, Tomb of Annihilation, Storm King's Thunder, etc.

const MONSTERS_ADVENTURES = {
    // ===== Curse of Strahd (CoS) =====
    "strahd-von-zarovich": {
        name: "Strahd von Zarovich",
        source: "CoS",
        size: "medium",
        type: "undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 18, con: 18, int: 20, wis: 15, cha: 18 },
        savingThrows: { dex: 9, wis: 7, cha: 9 },
        skills: { arcana: 15, perception: 12, religion: 10, stealth: 14 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, Draconic, Elvish, Giant, Infernal",
        cr: 15,
        environment: ["urban", "castle"],
        role: "leader",
        tags: ["vampire", "legendary", "spellcaster", "shapechanger", "boss"],
        traits: [
            { name: "Shapechanger", description: "If Strahd isn't in running water or sunlight, he can use his action to polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form." },
            { name: "Legendary Resistance (3/Day)", description: "If Strahd fails a saving throw, he can choose to succeed instead." },
            { name: "Misty Escape", description: "When Strahd drops to 0 hit points outside his coffin, he transforms into a cloud of mist instead of falling unconscious, provided that he isn't in running water or sunlight." },
            { name: "Regeneration", description: "Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight." },
            { name: "Spider Climb", description: "Strahd can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "Strahd has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "Strahd makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8+4) bludgeoning damage. Instead of dealing damage, Strahd can grapple the target (escape DC 18)." },
            { name: "Bite (Bat or Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken." },
            { name: "Charm", description: "Strahd targets one humanoid he can see within 30 feet of him. If the target can see Strahd, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by Strahd." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Move", description: "Strahd moves up to his speed without provoking opportunity attacks." },
                { name: "Unarmed Strike", description: "Strahd makes one unarmed strike." },
                { name: "Bite (Costs 2 Actions)", description: "Strahd makes one bite attack." }
            ]
        },
        spellcasting: {
            ability: "int",
            dc: 18,
            attack: 10,
            spells: {
                cantrips: ["mage hand", "prestidigitation", "ray of frost"],
                "1st": { slots: 4, spells: ["comprehend languages", "fog cloud", "sleep"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "gust of wind", "mirror image"] },
                "3rd": { slots: 3, spells: ["animate dead", "fireball", "nondetection"] },
                "4th": { slots: 3, spells: ["blight", "greater invisibility", "polymorph"] },
                "5th": { slots: 1, spells: ["animate objects", "scrying"] }
            }
        }
    },
    
    
    

    // ===== Tomb of Annihilation (ToA) =====
    "acererak": {
        name: "Acererak",
        source: "ToA",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 21,
        acType: "natural armor",
        hp: 285,
        hitDice: "30d8+150",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 16, con: 20, int: 27, wis: 21, cha: 20 },
        savingThrows: { con: 12, int: 15, wis: 12 },
        skills: { arcana: 22, history: 22, insight: 12, perception: 12 },
        damageResistances: ["cold", "lightning"],
        damageImmunities: ["necrotic", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial, Undercommon",
        cr: 23,
        environment: ["dungeon"],
        role: "controller",
        tags: ["lich", "legendary", "spellcaster", "boss", "demilich"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Acererak fails a saving throw, he can choose to succeed instead." },
            { name: "Rejuvenation", description: "Acererak's body turns to dust when he drops to 0 hit points, and his equipment is left behind. He gains a new body after 1d10 days, regaining all his hit points and becoming active again. The new body appears within 5 feet of his phylactery, the location of which is hidden." },
            { name: "Turn Resistance", description: "Acererak has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Paralyzing Touch", description: "Melee Spell Attack: +15 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage, and the target must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute." },
            { name: "Staff (+3 Quarterstaff)", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 10 (3d6) necrotic damage, or 8 (1d8+4) bludgeoning damage plus 10 (3d6) necrotic damage if used with two hands." },
            { name: "Invoke Curse", description: "While holding the Staff of the Forgotten One, Acererak expends 1 charge from it and targets one creature he can see within 60 feet of him. The target must succeed on a DC 23 Constitution saving throw or be cursed." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "At-Will Spell", description: "Acererak casts one of his at-will spells." },
                { name: "Melee Attack", description: "Acererak uses Paralyzing Touch or makes one melee attack with his staff." },
                { name: "Frightening Gaze (Costs 2 Actions)", description: "Acererak fixes his gaze on one creature he can see within 10 feet of him. The target must succeed on a DC 20 Wisdom saving throw against this magic or become frightened for 1 minute." },
                { name: "Talisman of the Sphere (Costs 2 Actions)", description: "Acererak uses his talisman of the sphere to move the sphere of annihilation under his control up to 90 feet." },
                { name: "Disrupt Life (Costs 3 Actions)", description: "Each creature within 20 feet of Acererak must make a DC 20 Constitution saving throw against this magic, taking 42 (12d6) necrotic damage on a failed save, or half as much damage on a successful one." }
            ]
        },
        spellcasting: {
            ability: "int",
            dc: 23,
            attack: 15,
            spells: {
                cantrips: ["mage hand", "ray of frost", "shocking grasp"],
                "1st": { slots: 4, spells: ["ray of sickness", "shield"] },
                "2nd": { slots: 3, spells: ["arcane lock", "knock"] },
                "3rd": { slots: 3, spells: ["animate dead", "counterspell"] },
                "4th": { slots: 3, spells: ["blight", "ice storm", "phantasmal killer"] },
                "5th": { slots: 3, spells: ["cloudkill", "hold monster", "wall of force"] },
                "6th": { slots: 1, spells: ["chain lightning", "circle of death", "disintegrate"] },
                "7th": { slots: 1, spells: ["finger of death", "plane shift"] },
                "8th": { slots: 1, spells: ["maze", "mind blank"] },
                "9th": { slots: 1, spells: ["power word kill", "time stop"] }
            }
        }
    },
    "zombie-tyrannosaurus": {
        name: "Zombie Tyrannosaurus Rex",
        source: "ToA",
        size: "huge",
        type: "undead",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d12+52",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 6, con: 19, int: 2, wis: 6, cha: 5 },
        savingThrows: { wis: 1 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 8,
        environment: ["jungle"],
        role: "brute",
        tags: ["undead", "dinosaur", "zombie"],
        traits: [
            { name: "Disgorge Zombie", description: "As a bonus action, the tyrannosaurus can disgorge a zombie from its gaping maw. The zombie appears in an unoccupied space within 10 feet of the tyrannosaurus." },
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12+7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target or disgorge zombies." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." }
        ]
    },
    "girallon-zombie": {
        name: "Girallon Zombie",
        source: "ToA",
        size: "large",
        type: "undead",
        alignment: "chaotic evil",
        ac: 11,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 12, con: 16, int: 3, wis: 8, cha: 5 },
        skills: { perception: 1, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["jungle"],
        role: "brute",
        tags: ["undead", "zombie", "ape"],
        traits: [
            { name: "Aggressive", description: "As a bonus action, the zombie can move up to its speed toward a hostile creature that it can see." },
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The zombie makes five attacks: one with its bite and four with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4+4) slashing damage." }
        ]
    },

    // ===== Storm King's Thunder (SKT) =====
    "iymrith": {
        name: "Iymrith",
        source: "SKT",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful evil",
        ac: 22,
        acType: "natural armor",
        hp: 481,
        hitDice: "26d20+208",
        speed: { walk: 40, burrow: 40, fly: 80 },
        abilityScores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { history: 11, perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic, Giant",
        cr: 23,
        environment: ["desert"],
        role: "brute",
        tags: ["dragon", "blue", "ancient", "legendary", "boss", "shapechanger"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Iymrith fails a saving throw, she can choose to succeed instead." },
            { name: "Innate Spellcasting", description: "Iymrith's spellcasting ability is Charisma (spell save DC 20). She can innately cast the following spells, requiring no material components: At will: detect magic; 3/day each: dispel magic, minor illusion, stone shape." }
        ],
        actions: [
            { name: "Multiattack", description: "Iymrith can use her Frightful Presence. She then makes three attacks: one with her bite and two with her claws." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) piercing damage plus 11 (2d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8+9) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of Iymrith's choice that is within 120 feet of her and aware of her must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "Iymrith exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "Iymrith makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "Iymrith makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "Iymrith beats her wings. Each creature within 15 feet of her must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone. Iymrith can then fly up to half her flying speed." }
            ]
        }
    },
    
    
    

    // ===== Other Adventure Creatures =====
    
    
    "grung": {
        name: "Grung",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "grung",
        alignment: "lawful evil",
        ac: 12,
        hp: 11,
        hitDice: "2d6+4",
        speed: { walk: 25, climb: 25 },
        abilityScores: { str: 7, dex: 14, con: 15, int: 10, wis: 11, cha: 10 },
        savingThrows: { dex: 4 },
        skills: { athletics: 2, perception: 2, stealth: 4, survival: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: [],
        languages: "Grung",
        cr: 0.25,
        environment: ["forest", "jungle", "swamp"],
        role: "minion",
        tags: ["frog", "poison"],
        traits: [
            { name: "Amphibious", description: "The grung can breathe air and water." },
            { name: "Poisonous Skin", description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Standing Leap", description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage." }
        ]
    },
    "grung-elite-warrior": {
        name: "Grung Elite Warrior",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "grung",
        alignment: "lawful evil",
        ac: 13,
        hp: 49,
        hitDice: "9d6+18",
        speed: { walk: 25, climb: 25 },
        abilityScores: { str: 7, dex: 16, con: 15, int: 10, wis: 11, cha: 12 },
        savingThrows: { dex: 5 },
        skills: { athletics: 2, perception: 2, stealth: 5, survival: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: [],
        languages: "Grung",
        cr: 2,
        environment: ["forest", "jungle", "swamp"],
        role: "skirmisher",
        tags: ["frog", "poison"],
        traits: [
            { name: "Amphibious", description: "The grung can breathe air and water." },
            { name: "Poisonous Skin", description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute." },
            { name: "Standing Leap", description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage." },
            { name: "Mesmerizing Chirr (Recharge 6)", description: "The grung makes a chirring noise to which grungs are immune. Each humanoid or beast that is within 15 feet of the grung and able to hear it must succeed on a DC 12 Wisdom saving throw or be stunned until the end of the grung's next turn." }
        ]
    }
};

// Expansion Pack 33 - More Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION33 = {
    // ===== More Creatures =====
    "ancient-white-dragon": {
        name: "Ancient White Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 20,
        acType: "natural armor",
        hp: 333,
        hitDice: "18d20+144",
        speed: { walk: 40, burrow: 40, fly: 80, swim: 40 },
        abilityScores: { str: 26, dex: 10, con: 26, int: 10, wis: 13, cha: 14 },
        savingThrows: { dex: 6, con: 14, wis: 7, cha: 8 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 20,
        environment: ["arctic"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage plus 9 (2d8) cold damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 90-foot cone. Each creature must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    },
    "ancient-black-dragon": {
        name: "Ancient Black Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 367,
        hitDice: "21d20+147",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 9, con: 14, wis: 9, cha: 11 },
        skills: { perception: 16, stealth: 9 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 21,
        environment: ["swamp"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage plus 9 (2d8) acid damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    },

    // ===== More Misc Creatures =====
    "death-knight": {
        name: "Death Knight",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 20,
        acType: "plate, shield",
        hp: 180,
        hitDice: "19d8+95",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 11, con: 20, int: 12, wis: 16, cha: 18 },
        savingThrows: { dex: 6, wis: 9, cha: 10 },
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common",
        cr: 17,
        environment: ["any"],
        role: "brute",
        tags: ["undead"],
        traits: [
            { name: "Magic Resistance", description: "The death knight has advantage on saving throws against spells and other magical effects." },
            { name: "Marshal Undead", description: "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead." }
        ],
        actions: [
            { name: "Multiattack", description: "The death knight makes three longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) slashing damage, or 10 (1d10+5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage." },
            { name: "Hellfire Orb (1/Day)", description: "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one." }
        ],
        reactions: [
            { name: "Parry", description: "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 18,
            attack: 10,
            spells: {
                "1st": { slots: 4, spells: ["command", "compelled duel", "searing smite"] },
                "2nd": { slots: 3, spells: ["hold person", "magic weapon"] },
                "3rd": { slots: 3, spells: ["dispel magic", "elemental weapon"] },
                "4th": { slots: 3, spells: ["banishment", "staggering smite"] },
                "5th": { slots: 2, spells: ["destructive wave (necrotic)"] }
            }
        }
    },
    "mummy-lord": {
        name: "Mummy Lord",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 20 },
        abilityScores: { str: 18, dex: 10, con: 17, int: 11, wis: 18, cha: 16 },
        savingThrows: { con: 8, int: 5, wis: 9, cha: 8 },
        skills: { history: 5, religion: 5 },
        damageVulnerabilities: ["fire"],
        damageImmunities: ["necrotic", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 15,
        environment: ["desert"],
        role: "controller",
        tags: ["undead", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The mummy lord has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart." }
        ],
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6+4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot." },
            { name: "Dreadful Glare", description: "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours." }
        ],
        legendaryActions: [
            { name: "Attack", description: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare." },
            { name: "Blinding Dust", description: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn." },
            { name: "Blasphemous Word (Costs 2 Actions)", description: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn." },
            { name: "Channel Negative Energy (Costs 2 Actions)", description: "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn." },
            { name: "Whirlwind of Sand (Costs 2 Actions)", description: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "guiding bolt", "shield of faith"] },
                "2nd": { slots: 3, spells: ["hold person", "silence", "spiritual weapon"] },
                "3rd": { slots: 3, spells: ["animate dead", "dispel magic"] },
                "4th": { slots: 3, spells: ["divination", "guardian of faith"] },
                "5th": { slots: 2, spells: ["contagion", "insect plague"] },
                "6th": { slots: 1, spells: ["harm"] }
            }
        }
    },
    "rakshasa": {
        name: "Rakshasa",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: 40 },
        abilityScores: { str: 14, dex: 17, con: 18, int: 13, wis: 16, cha: 20 },
        skills: { deception: 10, insight: 8 },
        damageVulnerabilities: ["piercing from magic weapons wielded by good creatures"],
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Infernal",
        cr: 13,
        environment: ["urban"],
        role: "controller",
        tags: ["fiend", "spellcaster"],
        traits: [
            { name: "Limited Magic Immunity", description: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The rakshasa makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 18,
            attack: 10,
            spells: {
                atWill: ["detect thoughts", "disguise self", "mage hand", "minor illusion"],
                "3/day each": ["charm person", "detect magic", "invisibility", "major image", "suggestion"],
                "1/day each": ["dominate person", "fly", "plane shift", "true seeing"]
            }
        }
    }
};

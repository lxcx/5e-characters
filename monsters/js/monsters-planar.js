// Planar Creatures - Modrons, Slaadi, Others
// Sources: MM, MToF

const MONSTERS_PLANAR = {
    // ===== Modrons =====
    "monodrone": {
        name: "Monodrone",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "lawful neutral",
        ac: 15,
        acType: "natural armor",
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 10, dex: 13, con: 12, int: 4, wis: 10, cha: 5 },
        senses: ["truesight 120 ft."],
        languages: "Modron",
        cr: 0.125,
        environment: ["mechanus"],
        role: "minion",
        tags: ["modron", "construct"],
        traits: [
            { name: "Axiomatic Mind", description: "The monodrone can't be compelled to act in a manner contrary to its nature or its instructions." },
            { name: "Disintegration", description: "If the monodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying." }
        ],
        actions: [
            { name: "Dagger", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 3 (1d6) piercing damage." }
        ]
    },
    "duodrone": {
        name: "Duodrone",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "lawful neutral",
        ac: 15,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 13, con: 12, int: 6, wis: 10, cha: 7 },
        senses: ["truesight 120 ft."],
        languages: "Modron",
        cr: 0.25,
        environment: ["mechanus"],
        role: "minion",
        tags: ["modron", "construct"],
        traits: [
            { name: "Axiomatic Mind", description: "The duodrone can't be compelled to act in a manner contrary to its nature or its instructions." },
            { name: "Disintegration", description: "If the duodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The duodrone makes two fist attacks or two javelin attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 4 (1d6+1) piercing damage." }
        ]
    },
    "tridrone": {
        name: "Tridrone",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "lawful neutral",
        ac: 15,
        acType: "natural armor",
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 13, con: 12, int: 9, wis: 10, cha: 9 },
        senses: ["truesight 120 ft."],
        languages: "Modron",
        cr: 0.5,
        environment: ["mechanus"],
        role: "soldier",
        tags: ["modron", "construct"],
        traits: [
            { name: "Axiomatic Mind", description: "The tridrone can't be compelled to act in a manner contrary to its nature or its instructions." },
            { name: "Disintegration", description: "If the tridrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The tridrone makes three fist attacks or three javelin attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 4 (1d6+1) piercing damage." }
        ]
    },
    "quadrone": {
        name: "Quadrone",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "lawful neutral",
        ac: 16,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 12, dex: 14, con: 12, int: 10, wis: 10, cha: 11 },
        skills: { perception: 2 },
        senses: ["truesight 120 ft."],
        languages: "Modron",
        cr: 1,
        environment: ["mechanus"],
        role: "soldier",
        tags: ["modron", "construct"],
        traits: [
            { name: "Axiomatic Mind", description: "The quadrone can't be compelled to act in a manner contrary to its nature or its instructions." },
            { name: "Disintegration", description: "If the quadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The quadrone makes two fist attacks or four shortbow attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "pentadrone": {
        name: "Pentadrone",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "lawful neutral",
        ac: 16,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d10+5",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 14, con: 12, int: 10, wis: 10, cha: 13 },
        skills: { perception: 4 },
        senses: ["truesight 120 ft."],
        languages: "Modron",
        cr: 2,
        environment: ["mechanus"],
        role: "soldier",
        tags: ["modron", "construct"],
        traits: [
            { name: "Axiomatic Mind", description: "The pentadrone can't be compelled to act in a manner contrary to its nature or its instructions." },
            { name: "Disintegration", description: "If the pentadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying." }
        ],
        actions: [
            { name: "Multiattack", description: "The pentadrone makes five arm attacks." },
            { name: "Arm", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Paralysis Gas (Recharge 5-6)", description: "The pentadrone exhales a 30-foot cone of gas. Each creature in that area must succeed on a DC 11 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },

    // ===== Slaadi =====
    "red-slaad": {
        name: "Red Slaad",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 16, int: 6, wis: 6, cha: 7 },
        skills: { perception: 1 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
        senses: ["darkvision 60 ft."],
        languages: "Slaad, telepathy 60 ft.",
        cr: 5,
        environment: ["limbo"],
        role: "brute",
        tags: ["slaad", "aberration"],
        traits: [
            { name: "Magic Resistance", description: "The slaad has advantage on saving throws against spells and other magical effects." },
            { name: "Regeneration", description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The slaad makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be infected with a disease—a minuscule slaad egg." }
        ]
    },
    "blue-slaad": {
        name: "Blue Slaad",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 15, con: 18, int: 7, wis: 7, cha: 9 },
        skills: { perception: 1 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
        senses: ["darkvision 60 ft."],
        languages: "Slaad, telepathy 60 ft.",
        cr: 7,
        environment: ["limbo"],
        role: "brute",
        tags: ["slaad", "aberration"],
        traits: [
            { name: "Magic Resistance", description: "The slaad has advantage on saving throws against spells and other magical effects." },
            { name: "Regeneration", description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The slaad makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage. If the target is a humanoid, it must succeed on a DC 15 Constitution saving throw or be infected with a disease called chaos phage." }
        ]
    },
    "green-slaad": {
        name: "Green Slaad",
        source: "MM",
        size: "large",
        type: "aberration",
        subtype: "shapechanger",
        alignment: "chaotic neutral",
        ac: 16,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 11, wis: 8, cha: 12 },
        skills: { arcana: 3, perception: 2 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "Slaad, telepathy 60 ft.",
        cr: 8,
        environment: ["limbo"],
        role: "controller",
        tags: ["slaad", "aberration", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form." },
            { name: "Magic Resistance", description: "The slaad has advantage on saving throws against spells and other magical effects." },
            { name: "Regeneration", description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The slaad makes three attacks: one with its bite and two with its claws or staff. Alternatively, it uses its Hurl Flame twice." },
            { name: "Bite (Slaad Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage." },
            { name: "Claw (Slaad Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) slashing damage." },
            { name: "Staff", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +4 to hit, range 60 ft., one target. Hit: 10 (3d6) fire damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["detect magic", "detect thoughts", "mage hand"],
                "2/day each": ["fear", "invisibility (self only)"],
                "1/day": ["fireball"]
            }
        }
    },
    "gray-slaad": {
        name: "Gray Slaad",
        source: "MM",
        size: "medium",
        type: "aberration",
        subtype: "shapechanger",
        alignment: "chaotic neutral",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 17, con: 16, int: 13, wis: 8, cha: 14 },
        skills: { arcana: 5, perception: 6 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Slaad, telepathy 60 ft.",
        cr: 9,
        environment: ["limbo"],
        role: "skirmisher",
        tags: ["slaad", "aberration", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form." },
            { name: "Magic Resistance", description: "The slaad has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The slaad's weapon attacks are magical." },
            { name: "Regeneration", description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The slaad makes three attacks: one with its bite and two with its claws or greatsword." },
            { name: "Bite (Slaad Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Claws (Slaad Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) slashing damage." },
            { name: "Greatsword", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect magic", "detect thoughts", "invisibility (self only)", "mage hand", "major image"],
                "2/day each": ["fear", "fly", "fireball", "tongues"],
                "1/day": ["plane shift (self only)"]
            }
        }
    },
    "death-slaad": {
        name: "Death Slaad",
        source: "MM",
        size: "medium",
        type: "aberration",
        subtype: "shapechanger",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 170,
        hitDice: "20d8+80",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 15, con: 19, int: 15, wis: 10, cha: 16 },
        skills: { arcana: 6, perception: 8 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Slaad, telepathy 60 ft.",
        cr: 10,
        environment: ["limbo"],
        role: "brute",
        tags: ["slaad", "aberration", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form." },
            { name: "Magic Resistance", description: "The slaad has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The slaad's weapon attacks are magical." },
            { name: "Regeneration", description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The slaad makes three attacks: one with its bite and two with its claws or greatsword." },
            { name: "Bite (Slaad Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) piercing damage plus 7 (2d6) necrotic damage." },
            { name: "Claws (Slaad Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) slashing damage plus 7 (2d6) necrotic damage." },
            { name: "Greatsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage plus 7 (2d6) necrotic damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            attack: 7,
            spells: {
                atWill: ["detect magic", "detect thoughts", "invisibility (self only)", "mage hand", "major image"],
                "2/day each": ["fear", "fireball", "fly", "tongues"],
                "1/day each": ["cloudkill", "plane shift"]
            }
        }
    },

    // ===== Nightmares and other Planar =====
    "nightmare": {
        name: "Nightmare",
        source: "MM",
        size: "large",
        type: "fiend",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 60, fly: 90 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "understands Abyssal, Common, and Infernal but can't speak",
        cr: 3,
        environment: ["lower planes"],
        role: "skirmisher",
        tags: ["fiend", "mount"],
        traits: [
            { name: "Confer Fire Resistance", description: "The nightmare can grant resistance to fire damage to anyone riding it." },
            { name: "Illumination", description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage plus 7 (2d6) fire damage." },
            { name: "Ethereal Stride", description: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    },
    "night-hag": {
        name: "Night Hag",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 16, wis: 14, cha: 16 },
        skills: { deception: 7, insight: 6, perception: 6, stealth: 6 },
        damageResistances: ["cold", "fire; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        conditionImmunities: ["charmed"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, Infernal, Primordial",
        cr: 5,
        environment: ["lower planes", "underdark"],
        role: "controller",
        tags: ["hag", "fiend", "shapechanger"],
        traits: [
            { name: "Magic Resistance", description: "The hag has advantage on saving throws against spells and other magical effects." },
            { name: "Night Hag Items", description: "A night hag carries two very rare magic items that she must craft for herself. If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort." }
        ],
        actions: [
            { name: "Claws (Hag Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Change Shape", description: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies." },
            { name: "Etherealness", description: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession." },
            { name: "Nightmare Haunting (1/Day)", description: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            attack: 6,
            spells: {
                atWill: ["detect magic", "magic missile"],
                "2/day each": ["plane shift (self only)", "ray of enfeeblement", "sleep"]
            }
        }
    },
    "cambion": {
        name: "Cambion",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "any evil alignment",
        ac: 19,
        acType: "scale mail",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 18, dex: 18, con: 16, int: 14, wis: 12, cha: 16 },
        savingThrows: { str: 7, con: 6, int: 5, cha: 6 },
        skills: { deception: 6, intimidation: 6, perception: 4, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Infernal",
        cr: 5,
        environment: ["lower planes", "urban"],
        role: "skirmisher",
        tags: ["fiend", "half-fiend"],
        traits: [
            { name: "Fiendish Blessing", description: "The AC of the cambion includes its Charisma bonus." }
        ],
        actions: [
            { name: "Multiattack", description: "The cambion makes two melee attacks or uses its Fire Ray twice." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6+4) piercing damage, or 8 (1d8+4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." },
            { name: "Fire Ray", description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6) fire damage." },
            { name: "Fiendish Charm", description: "One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                "3/day each": ["alter self", "command", "detect magic"],
                "1/day": ["plane shift (self only)"]
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
        tags: ["fiend", "shapechanger", "spellcaster"],
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

// Monster Manual Complete - Part 3 (I-O remaining)
// Source: MM (Monster Manual)

const MONSTERS_MM_COMPLETE3 = {
    // ===== J =====
    "jackal": {
        name: "Jackal",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 40 },
        abilityScores: { str: 8, dex: 15, con: 11, int: 3, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Hearing and Smell", description: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4−1) piercing damage." }
        ]
    },

    // ===== K =====
    "killer-whale": {
        name: "Killer Whale",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d12+12",
        speed: { walk: 0, swim: 60 },
        abilityScores: { str: 19, dex: 10, con: 13, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["blindsight 120 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Echolocation", description: "The whale can't use its blindsight while deafened." },
            { name: "Hold Breath", description: "The whale can hold its breath for 30 minutes." },
            { name: "Keen Hearing", description: "The whale has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6+4) piercing damage." }
        ]
    },
    "kobold": {
        name: "Kobold",
        source: "MM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 5,
        hitDice: "2d6-2",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 0.125,
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Dagger", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    },
    "kuo-toa": {
        name: "Kuo-toa",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor, shield",
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 13, dex: 10, con: 11, int: 11, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 0.25,
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." },
            { name: "Net", description: "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller creature. Hit: The target is restrained. A creature can use its action to make a DC 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net." }
        ]
    },
    "kuo-toa-archpriest": {
        name: "Kuo-toa Archpriest",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 16, dex: 14, con: 16, int: 13, wis: 16, cha: 14 },
        skills: { perception: 9, religion: 7 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 6,
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kuo-toa makes two melee attacks." },
            { name: "Scepter", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage plus 14 (4d6) lightning damage." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["guidance", "sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["detect magic", "sanctuary", "shield of faith"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon"] },
                "3rd": { slots: 3, spells: ["mass healing word", "spirit guardians"] },
                "4th": { slots: 3, spells: ["control water", "divination"] },
                "5th": { slots: 2, spells: ["mass cure wounds", "scrying"] },
                "6th": { slots: 1, spells: ["harm"] }
            }
        }
    },
    "kuo-toa-whip": {
        name: "Kuo-toa Whip",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 11,
        acType: "natural armor",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 14, dex: 10, con: 14, int: 12, wis: 14, cha: 11 },
        skills: { perception: 6, religion: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 1,
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kuo-toa makes two attacks: one with its bite and one with its pincer staff." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Pincer Staff", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 5 (1d6+2) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 14). Until this grapple ends, the kuo-toa can't use its pincer staff on another target." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["sacred flame", "thaumaturgy"],
                "1st": { slots: 3, spells: ["bane", "shield of faith"] },
                "2nd": { slots: 2, spells: ["hold person", "spiritual weapon"] }
            }
        }
    },

    // ===== L =====
    "lamia": {
        name: "Lamia",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d10+26",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 13, con: 15, int: 14, wis: 15, cha: 16 },
        skills: { deception: 7, insight: 4, stealth: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common",
        cr: 4,
        actions: [
            { name: "Multiattack", description: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) slashing damage." },
            { name: "Dagger", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage." },
            { name: "Intoxicating Touch", description: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["disguise self (any humanoid form)", "major image"],
                "3/day each": ["charm person", "mirror image", "scrying", "suggestion"],
                "1/day": ["geas"]
            }
        }
    },
    "lizard": {
        name: "Lizard",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 3 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "lizardfolk": {
        name: "Lizardfolk",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor, shield",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 7, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4, survival: 5 },
        senses: [],
        languages: "Draconic",
        cr: 0.5,
        traits: [
            { name: "Hold Breath", description: "The lizardfolk can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The lizardfolk makes two melee attacks, each one with a different weapon." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Heavy Club", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Spiked Shield", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "lizardfolk-shaman": {
        name: "Lizardfolk Shaman",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 10, wis: 15, cha: 8 },
        skills: { perception: 4, stealth: 4, survival: 6 },
        senses: [],
        languages: "Draconic",
        cr: 2,
        traits: [
            { name: "Hold Breath", description: "The lizardfolk can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Multiattack (Lizardfolk Form Only)", description: "The lizardfolk makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage, or 7 (1d10+2) piercing damage in crocodile form. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the lizardfolk can't bite another target. If the lizardfolk reverts to its true form, the grapple ends." },
            { name: "Claws (Lizardfolk Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." },
            { name: "Change Shape (Recharges after a Short or Long Rest)", description: "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["druidcraft", "produce flame", "thorn whip"],
                "1st": { slots: 4, spells: ["entangle", "fog cloud"] },
                "2nd": { slots: 3, spells: ["heat metal", "spike growth"] },
                "3rd": { slots: 2, spells: ["conjure animals (reptiles only)", "plant growth"] }
            }
        }
    },

    // ===== M =====
    "magma-mephit": {
        name: "Magma Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 8, dex: 12, con: 12, int: 7, wis: 10, cha: 10 },
        skills: { stealth: 3 },
        damageVulnerabilities: ["cold"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan, Terran",
        cr: 0.5,
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4+1) slashing damage plus 2 (1d4) fire damage." },
            { name: "Fire Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 10,
            spells: {
                "1/day": ["heat metal"]
            }
        }
    },
    "manticore": {
        name: "Manticore",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 14,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 30, fly: 50 },
        abilityScores: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 3,
        traits: [
            { name: "Tail Spike Regrowth", description: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest." }
        ],
        actions: [
            { name: "Multiattack", description: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Tail Spike", description: "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8+3) piercing damage." }
        ]
    },
    "mastiff": {
        name: "Mastiff",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 40 },
        abilityScores: { str: 13, dex: 14, con: 12, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Hearing and Smell", description: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ]
    },
    "medusa": {
        name: "Medusa",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 16, int: 12, wis: 13, cha: 15 },
        skills: { deception: 5, insight: 4, perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 6,
        traits: [
            { name: "Petrifying Gaze", description: "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic." }
        ],
        actions: [
            { name: "Multiattack", description: "The medusa makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow." },
            { name: "Snake Hair", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage plus 14 (4d6) poison damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage plus 7 (2d6) poison damage." }
        ]
    },
    "merfolk": {
        name: "Merfolk",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "merfolk",
        alignment: "neutral",
        ac: 11,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 10, swim: 40 },
        abilityScores: { str: 10, dex: 13, con: 12, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2 },
        senses: [],
        languages: "Aquan, Common",
        cr: 0.125,
        traits: [
            { name: "Amphibious", description: "The merfolk can breathe air and water." }
        ],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "merrow": {
        name: "Merrow",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, swim: 40 },
        abilityScores: { str: 18, dex: 10, con: 15, int: 8, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Aquan",
        cr: 2,
        traits: [
            { name: "Amphibious", description: "The merrow can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The merrow makes two attacks: one with its bite and one with its claws or harpoon." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) slashing damage." },
            { name: "Harpoon", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow." }
        ]
    },
    "mule": {
        name: "Mule",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilityScores: { str: 14, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
        senses: [],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Beast of Burden", description: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity." },
            { name: "Sure-Footed", description: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    },

    // ===== N =====
    "naga-bone": {
        name: "Bone Naga",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d10+9",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 16, con: 12, int: 15, wis: 15, cha: 16 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common plus one other language",
        cr: 4,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 10 (2d6+3) piercing damage plus 10 (3d6) poison damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["mage hand", "minor illusion", "ray of frost"],
                "1st": { slots: 4, spells: ["charm person", "sleep"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "hold person"] },
                "3rd": { slots: 2, spells: ["lightning bolt"] }
            }
        }
    },
    "naga-guardian": {
        name: "Guardian Naga",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 18, con: 16, int: 16, wis: 19, cha: 18 },
        savingThrows: { dex: 8, con: 7, int: 7, wis: 8, cha: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Celestial, Common",
        cr: 10,
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8+4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Spit Poison", description: "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 16,
            attack: 8,
            spells: {
                cantrips: ["mending", "sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "cure wounds", "shield of faith"] },
                "2nd": { slots: 3, spells: ["calm emotions", "hold person"] },
                "3rd": { slots: 3, spells: ["bestow curse", "clairvoyance"] },
                "4th": { slots: 3, spells: ["banishment", "freedom of movement"] },
                "5th": { slots: 2, spells: ["flame strike", "geas"] },
                "6th": { slots: 1, spells: ["true seeing"] }
            }
        }
    },
    "naga-spirit": {
        name: "Spirit Naga",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 17, con: 14, int: 16, wis: 15, cha: 16 },
        savingThrows: { dex: 6, con: 5, wis: 5, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common",
        cr: 8,
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6+4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["mage hand", "minor illusion", "ray of frost"],
                "1st": { slots: 4, spells: ["charm person", "detect magic", "sleep"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "hold person"] },
                "3rd": { slots: 3, spells: ["lightning bolt", "water breathing"] },
                "4th": { slots: 3, spells: ["blight", "dimension door"] },
                "5th": { slots: 2, spells: ["dominate person"] }
            }
        }
    },
    "nothic": {
        name: "Nothic",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 16, con: 16, int: 13, wis: 10, cha: 8 },
        skills: { arcana: 3, insight: 4, perception: 2, stealth: 5 },
        senses: ["truesight 120 ft."],
        languages: "Undercommon",
        cr: 2,
        traits: [
            { name: "Keen Sight", description: "The nothic has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The nothic makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Rotting Gaze", description: "The nothic targets one creature it can see within 30 feet of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage." },
            { name: "Weird Insight", description: "The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed." }
        ]
    },

    // ===== O =====
    "ochre-jelly": {
        name: "Ochre Jelly",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 15, dex: 6, con: 14, int: 2, wis: 6, cha: 1 },
        damageResistances: ["acid"],
        damageImmunities: ["lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Amorphous", description: "The jelly can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 3 (1d6) acid damage." }
        ],
        reactions: [
            { name: "Split", description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly." }
        ]
    },
    "octopus": {
        name: "Octopus",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 5, swim: 30 },
        abilityScores: { str: 4, dex: 15, con: 11, int: 3, wis: 10, cha: 4 },
        skills: { perception: 2, stealth: 4 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Hold Breath", description: "While out of water, the octopus can hold its breath for 30 minutes." },
            { name: "Underwater Camouflage", description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater." },
            { name: "Water Breathing", description: "The octopus can breathe only underwater." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target." },
            { name: "Ink Cloud (Recharges after a Short or Long Rest)", description: "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        ]
    },
    "oni": {
        name: "Oni",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "lawful evil",
        ac: 16,
        acType: "chain mail",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 19, dex: 11, con: 16, int: 14, wis: 12, cha: 15 },
        savingThrows: { dex: 3, con: 6, wis: 4, cha: 5 },
        skills: { arcana: 5, deception: 8, perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Giant",
        cr: 7,
        traits: [
            { name: "Magic Weapons", description: "The oni's weapon attacks are magical." },
            { name: "Regeneration", description: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The oni makes two attacks, either with its claws or its glaive." },
            { name: "Claw (Oni Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage." },
            { name: "Glaive", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10+4) slashing damage, or 9 (1d10+4) slashing damage in Small or Medium form." },
            { name: "Change Shape", description: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["darkness", "invisibility"],
                "1/day each": ["charm person", "cone of cold", "gaseous form", "sleep"]
            }
        }
    },
    "orc": {
        name: "Orc",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 13,
        acType: "hide armor",
        hp: 15,
        hitDice: "2d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
        skills: { intimidation: 2 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 0.5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12+3) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "orc-war-chief": {
        name: "Orc War Chief",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 16,
        acType: "chain mail",
        hp: 93,
        hitDice: "11d8+44",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 12, con: 18, int: 11, wis: 11, cha: 16 },
        savingThrows: { str: 6, con: 6, wis: 2 },
        skills: { intimidation: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 4,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
            { name: "Gruumsh's Fury", description: "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks)." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two attacks with its greataxe or its spear." },
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (1d12+4+1d8) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 12 (1d6+4+1d8) piercing damage, or 13 (2d8+4) piercing damage if used with two hands to make a melee attack." },
            { name: "Battle Cry (1/Day)", description: "Each creature of the war chief's choice that is within 30 feet of it, can hear it, and not already affected by Battle Cry gain advantage on attack rolls until the start of the war chief's next turn. The war chief can then make one attack as a bonus action." }
        ]
    },
    "orog": {
        name: "Orog",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 18,
        acType: "plate",
        hp: 42,
        hitDice: "5d8+20",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 12, con: 18, int: 12, wis: 11, cha: 12 },
        skills: { intimidation: 3, survival: 2 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 2,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orog can move up to its speed toward a hostile creature that it can see." }
        ],
        actions: [
            { name: "Multiattack", description: "The orog makes two greataxe attacks." },
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 7 (1d6+4) piercing damage." }
        ]
    },
    "owlbear": {
        name: "Owlbear",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Keen Sight and Smell", description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The owlbear makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." }
        ]
    },
    "owl": {
        name: "Owl",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 5, fly: 60 },
        abilityScores: { str: 3, dex: 13, con: 8, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 3 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ]
    }
};

// Expansion Pack 48 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION48 = {
    // ===== More Humanoids =====
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
        cr: "1/4",
        environment: ["underdark", "underwater"],
        role: "soldier",
        tags: ["humanoid", "kuo-toa"],
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
        ],
        reactions: [
            { name: "Sticky Shield", description: "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding." }
        ]
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
        environment: ["underdark", "underwater"],
        role: "controller",
        tags: ["humanoid", "kuo-toa", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
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
                "1st": { slots: 4, spells: ["bane", "shield of faith"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon"] }
            }
        }
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
        environment: ["underdark", "underwater"],
        role: "leader",
        tags: ["humanoid", "kuo-toa", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
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
                "3rd": { slots: 3, spells: ["spirit guardians", "tongues"] },
                "4th": { slots: 3, spells: ["control water", "divination"] },
                "5th": { slots: 2, spells: ["mass cure wounds", "scrying"] }
            }
        }
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
        cr: "1/8",
        environment: ["underwater", "coastal"],
        role: "minion",
        tags: ["humanoid", "merfolk"],
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
        environment: ["underwater", "coastal"],
        role: "brute",
        tags: ["monstrosity"],
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
        environment: ["underwater", "coastal", "swamp"],
        role: "controller",
        tags: ["fey", "hag"],
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Horrific Appearance", description: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours. Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Death Glare", description: "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised." }
        ]
    },
    "green-hag": {
        name: "Green Hag",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 12, con: 16, int: 13, wis: 14, cha: 14 },
        skills: { arcana: 3, deception: 4, perception: 4, stealth: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic, Sylvan",
        cr: 3,
        environment: ["forest", "swamp", "hill"],
        role: "controller",
        tags: ["fey", "hag", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Mimicry", description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised." },
            { name: "Invisible Passage", description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["dancing lights", "minor illusion", "vicious mockery"]
            }
        }
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
        environment: ["nine hells", "abyss"],
        role: "controller",
        tags: ["fiend", "hag", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The hag has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Claws (Hag Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Change Shape", description: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies." },
            { name: "Etherealness", description: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession." },
            { name: "Nightmare Haunting (1/Day)", description: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect magic", "magic missile"],
                "2/day each": ["plane shift (self only)", "ray of enfeeblement", "sleep"]
            }
        }
    }
};

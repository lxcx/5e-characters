// Aberrations, Fey, Celestials, and Other Creatures
// Source: MM (Monster Manual)

const MONSTERS_MISC = {
    // ===== ABERRATIONS =====
    "aboleth": {
        name: "Aboleth",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hitDice: "18d10+36",
        speed: { walk: 10, swim: 40 },
        abilityScores: { str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18 },
        savingThrows: { con: 6, int: 8, wis: 6 },
        skills: { history: 12, perception: 10 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Amphibious", description: "The aboleth can breathe air and water." },
            { name: "Mucous Cloud", description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater." },
            { name: "Probing Telepathy", description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
        ],
        actions: [
            { name: "Multiattack", description: "The aboleth makes three tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed." },
            { name: "Tail", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6+5) bludgeoning damage." },
            { name: "Enslave (3/Day)", description: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The aboleth makes a Wisdom (Perception) check." },
                { name: "Tail Swipe", description: "The aboleth makes one tail attack." },
                { name: "Psychic Drain (Costs 2 Actions)", description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes." }
            ]
        }
    },
    "cloaker": {
        name: "Cloaker",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 78,
        hitDice: "12d10+12",
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 17, dex: 15, con: 12, int: 13, wis: 12, cha: 14 },
        skills: { stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Deep Speech, Undercommon",
        cr: 8,
        traits: [
            { name: "Damage Transfer", description: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half." },
            { name: "False Appearance", description: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak." },
            { name: "Light Sensitivity", description: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The cloaker makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6+3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check." },
            { name: "Tail", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8+3) slashing damage." },
            { name: "Moan", description: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours." },
            { name: "Phantasms (Recharges after a Short or Long Rest)", description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear." }
        ]
    },
    "gibbering-mouther": {
        name: "Gibbering Mouther",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "neutral",
        ac: 9,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 10, swim: 10 },
        abilityScores: { str: 10, dex: 8, con: 16, int: 3, wis: 10, cha: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Aberrant Ground", description: "The ground in a 10-foot radius around the mouther is dough-like difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn." },
            { name: "Gibbering", description: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle." },
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther." },
            { name: "Blinding Spittle (Recharge 5-6)", description: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn." }
        ]
    },
    "intellect-devourer": {
        name: "Intellect Devourer",
        source: "MM",
        size: "tiny",
        type: "aberration",
        alignment: "lawful evil",
        ac: 12,
        hp: 21,
        hitDice: "6d4+6",
        speed: { walk: 40 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 12, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Deep Speech but can't speak, telepathy 60 ft.",
        cr: 2,
        traits: [
            { name: "Detect Sentience", description: "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell." }
        ],
        actions: [
            { name: "Multiattack", description: "The intellect devourer makes one attack with its claws and uses Devour Intellect." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Devour Intellect", description: "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence." },
            { name: "Body Thief", description: "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body." }
        ]
    },
    "otyugh": {
        name: "Otyugh",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6 },
        savingThrows: { con: 7 },
        senses: ["darkvision 120 ft."],
        languages: "Otyugh",
        cr: 5,
        traits: [
            { name: "Limited Telepathy", description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond." }
        ],
        actions: [
            { name: "Multiattack", description: "The otyugh makes three attacks: one with its bite and two with its tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8+3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target." },
            { name: "Tentacle Slam", description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6+3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned." }
        ]
    },

    // ===== FEY =====
    "dryad": {
        name: "Dryad",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral",
        ac: 11,
        acType: "16 with barkskin",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Elvish, Sylvan",
        cr: 1,
        traits: [
            { name: "Magic Resistance", description: "The dryad has advantage on saving throws against spells and other magical effects." },
            { name: "Speak with Beasts and Plants", description: "The dryad can communicate with beasts and plants as if they shared a language." },
            { name: "Tree Stride", description: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger." }
        ],
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8+4) bludgeoning damage with shillelagh." },
            { name: "Fey Charm", description: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["druidcraft"],
                "3/day each": ["entangle", "goodberry"],
                "1/day each": ["barkskin", "pass without trace", "shillelagh"]
            }
        }
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
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Mimicry", description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies." },
            { name: "Invisible Passage", description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her." }
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
        traits: [
            { name: "Magic Resistance", description: "The hag has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Claws (Hag Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Change Shape", description: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies." },
            { name: "Etherealness", description: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession." },
            { name: "Nightmare Haunting (1/Day)", description: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag." }
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
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Horrific Appearance", description: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Death Glare", description: "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies." }
        ]
    },
    "satyr": {
        name: "Satyr",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 31,
        hitDice: "7d8",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14 },
        skills: { perception: 2, performance: 6, stealth: 5 },
        senses: [],
        languages: "Common, Elvish, Sylvan",
        cr: 0.5,
        traits: [
            { name: "Magic Resistance", description: "The satyr has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) bludgeoning damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "pixie": {
        name: "Pixie",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 2, dex: 20, con: 8, int: 10, wis: 14, cha: 15 },
        skills: { perception: 4, stealth: 7 },
        senses: [],
        languages: "Sylvan",
        cr: 0.25,
        traits: [
            { name: "Magic Resistance", description: "The pixie has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Superior Invisibility", description: "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["druidcraft"],
                "1/day each": ["confusion", "dancing lights", "detect evil and good", "detect thoughts", "dispel magic", "entangle", "fly", "phantasmal force", "polymorph", "sleep"]
            }
        }
    },
    "sprite": {
        name: "Sprite",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        acType: "leather armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 8 },
        senses: [],
        languages: "Common, Elvish, Sylvan",
        cr: 0.25,
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake." },
            { name: "Heart Sight", description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw." },
            { name: "Invisibility", description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it." }
        ]
    },

    // ===== CELESTIALS =====
    "planetar": {
        name: "Planetar",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: 40, fly: 120 },
        abilityScores: { str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25 },
        savingThrows: { con: 12, wis: 11, cha: 12 },
        skills: { perception: 11 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 16,
        traits: [
            { name: "Angelic Weapons", description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The planetar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The planetar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The planetar makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6+7) slashing damage plus 22 (5d8) radiant damage." },
            { name: "Healing Touch (4/Day)", description: "The planetar touches another creature. The target magically regains 30 (6d8+3) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 20,
            spells: {
                atWill: ["detect evil and good", "invisibility (self only)"],
                "3/day each": ["blade barrier", "dispel evil and good", "flame strike", "raise dead"],
                "1/day each": ["commune", "control weather", "insect plague"]
            }
        }
    },
    "deva": {
        name: "Deva",
        source: "MM",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30, fly: 90 },
        abilityScores: { str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20 },
        savingThrows: { wis: 9, cha: 9 },
        skills: { insight: 9, perception: 9 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Angelic Weapons", description: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)." },
            { name: "Magic Resistance", description: "The deva has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The deva makes two melee attacks." },
            { name: "Mace", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 18 (4d8) radiant damage." },
            { name: "Healing Touch (3/Day)", description: "The deva touches another creature. The target magically regains 20 (4d8+2) hit points and is freed from any curse, disease, poison, blindness, or deafness." },
            { name: "Change Shape", description: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice)." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["detect evil and good"],
                "1/day each": ["commune", "raise dead"]
            }
        }
    },
    "couatl": {
        name: "Couatl",
        source: "MM",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30, fly: 90 },
        abilityScores: { str: 16, dex: 20, con: 17, int: 18, wis: 20, cha: 18 },
        savingThrows: { con: 5, wis: 7, cha: 6 },
        damageResistances: ["radiant"],
        damageImmunities: ["psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 4,
        traits: [
            { name: "Magic Weapons", description: "The couatl's weapon attacks are magical." },
            { name: "Shielded Mind", description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6+5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6+3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target." },
            { name: "Change Shape", description: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice)." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect evil and good", "detect magic", "detect thoughts"],
                "3/day each": ["bless", "create food and water", "cure wounds", "lesser restoration", "protection from poison", "sanctuary", "shield"],
                "1/day each": ["dream", "greater restoration", "scrying"]
            }
        }
    },
    "pegasus": {
        name: "Pegasus",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "chaotic good",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 60, fly: 90 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 15, cha: 13 },
        savingThrows: { dex: 4, wis: 4, cha: 3 },
        skills: { perception: 6 },
        senses: [],
        languages: "understands Celestial, Common, Elvish, and Sylvan but can't speak",
        cr: 2,
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },
    "unicorn": {
        name: "Unicorn",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 12,
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 11, wis: 17, cha: 16 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
        cr: 5,
        traits: [
            { name: "Charge", description: "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." },
            { name: "Magic Resistance", description: "The unicorn has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The unicorn's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The unicorn makes two attacks: one with its hooves and one with its horn." },
            { name: "Hooves", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Horn", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Healing Touch (3/Day)", description: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8+2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target." },
            { name: "Teleport (1/Day)", description: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Hooves", description: "The unicorn makes one attack with its hooves." },
                { name: "Shimmering Shield (Costs 2 Actions)", description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn." },
                { name: "Heal Self (Costs 3 Actions)", description: "The unicorn magically regains 11 (2d8+2) hit points." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect evil and good", "druidcraft", "pass without trace"],
                "1/day each": ["calm emotions", "dispel evil and good", "entangle"]
            }
        }
    },

    // ===== OTHER CREATURES =====
    "mimic": {
        name: "Mimic",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 12,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 15 },
        abilityScores: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
        skills: { stealth: 5 },
        damageImmunities: ["acid"],
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Shapechanger", description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Adhesive (Object Form Only)", description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage." },
            { name: "False Appearance (Object Form Only)", description: "While the mimic remains motionless, it is indistinguishable from an ordinary object." },
            { name: "Grappler", description: "The mimic has advantage on attack rolls against any creature grappled by it." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage plus 4 (1d8) acid damage." }
        ]
    },
    "rust-monster": {
        name: "Rust Monster",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 40 },
        abilityScores: { str: 13, dex: 12, con: 13, int: 2, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Iron Scent", description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it." },
            { name: "Rust Metal", description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." },
            { name: "Antennae", description: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch." }
        ]
    },
    "stirge": {
        name: "Stirge",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Blood Drain", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4+3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ]
    },
    "darkmantle": {
        name: "Darkmantle",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 16, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Echolocation", description: "The darkmantle can't use its blindsight while deafened." },
            { name: "False Appearance", description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite." }
        ],
        actions: [
            { name: "Crush", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way." },
            { name: "Darkness Aura (1/Day)", description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled." }
        ]
    },
    "piercer": {
        name: "Piercer",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 5, climb: 5 },
        abilityScores: { str: 10, dex: 13, con: 16, int: 1, wis: 7, cha: 3 },
        skills: { stealth: 5 },
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "False Appearance", description: "While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite." },
            { name: "Spider Climb", description: "The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Drop", description: "Melee Weapon Attack: +3 to hit, one creature directly underneath the piercer. Hit: 3 (1d6) piercing damage per 10 feet fallen, up to 21 (6d6). Miss: The piercer takes half the normal falling damage for the distance fallen." }
        ]
    },
    "roper": {
        name: "Roper",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 18, dex: 8, con: 17, int: 7, wis: 16, cha: 6 },
        skills: { perception: 6, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        traits: [
            { name: "False Appearance", description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite." },
            { name: "Grasping Tendrils", description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it." },
            { name: "Spider Climb", description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8+4) piercing damage." },
            { name: "Tendril", description: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target." },
            { name: "Reel", description: "The roper pulls each creature grappled by it up to 25 feet straight toward it." }
        ]
    }
};

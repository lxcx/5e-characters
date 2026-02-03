// Classic D&D Monsters - Filling remaining gaps
// Sources: MM, VGtM, MToF

const MONSTERS_CLASSICS = {
    // ===== Classic Aberrations =====
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
        environment: ["underdark", "underwater"],
        role: "controller",
        tags: ["aberration", "psionic", "aquatic", "legendary"],
        traits: [
            { name: "Amphibious", description: "The aboleth can breathe air and water." },
            { name: "Mucous Cloud", description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours." },
            { name: "Probing Telepathy", description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
        ],
        actions: [
            { name: "Multiattack", description: "The aboleth makes three tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased." },
            { name: "Tail", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6+5) bludgeoning damage." },
            { name: "Enslave (3/Day)", description: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target." }
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
        environment: ["underdark"],
        role: "lurker",
        tags: ["aberration"],
        traits: [
            { name: "Damage Transfer", description: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half." },
            { name: "False Appearance", description: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak." },
            { name: "Light Sensitivity", description: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The cloaker makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6+3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it." },
            { name: "Tail", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8+3) slashing damage." },
            { name: "Moan", description: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn." },
            { name: "Phantasms (Recharges after a Short or Long Rest)", description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one." }
        ]
    },

    // ===== Classic Constructs =====
    "iron-golem": {
        name: "Iron Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 20,
        acType: "natural armor",
        hp: 210,
        hitDice: "20d10+100",
        speed: { walk: 30 },
        abilityScores: { str: 24, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["fire", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 16,
        environment: ["urban", "dungeon"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Fire Absorption", description: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." },
            { name: "Sword", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10+7) slashing damage." },
            { name: "Poison Breath (Recharge 6)", description: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "stone-golem": {
        name: "Stone Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 30 },
        abilityScores: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 10,
        environment: ["urban", "dungeon"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Slow (Recharge 5-6)", description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn." }
        ]
    },
    "clay-golem": {
        name: "Clay Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 133,
        hitDice: "14d10+56",
        speed: { walk: 20 },
        abilityScores: { str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 1 },
        damageImmunities: ["acid", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 9,
        environment: ["urban", "dungeon"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Acid Absorption", description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt." },
            { name: "Berserk", description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken." },
            { name: "Haste (Recharge 5-6)", description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action." }
        ]
    },
    "flesh-golem": {
        name: "Flesh Golem",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "neutral",
        ac: 9,
        hp: 93,
        hitDice: "11d8+44",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5 },
        damageImmunities: ["lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 5,
        environment: ["urban", "dungeon"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Berserk", description: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk." },
            { name: "Aversion of Fire", description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Lightning Absorption", description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },

    // ===== Classic Monstrosities =====
    "behir": {
        name: "Behir",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d12+64",
        speed: { walk: 50, climb: 40 },
        abilityScores: { str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12 },
        skills: { perception: 6, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["darkvision 90 ft."],
        languages: "Draconic",
        cr: 11,
        environment: ["underdark", "mountain"],
        role: "brute",
        tags: ["monstrosity", "lightning"],
        actions: [
            { name: "Multiattack", description: "The behir makes two attacks: one with its bite and one to constrict." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10+6) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10+6) bludgeoning damage plus 17 (2d10+6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." },
            { name: "Swallow", description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends." }
        ]
    },
    "displacer-beast": {
        name: "Displacer Beast",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["forest"],
        role: "skirmisher",
        tags: ["monstrosity", "fey"],
        traits: [
            { name: "Avoidance", description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Displacement", description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The displacer beast makes two attacks with its tentacles." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 3 (1d6) piercing damage." }
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
        environment: ["underdark", "dungeon"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Iron Scent", description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it." },
            { name: "Rust Metal", description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." },
            { name: "Antennae", description: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch." }
        ]
    },
    "bulette": {
        name: "Bulette",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 94,
        hitDice: "9d10+45",
        speed: { walk: 40, burrow: 40 },
        abilityScores: { str: 19, dex: 11, con: 21, int: 2, wis: 10, cha: 5 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["grassland", "hill"],
        role: "brute",
        tags: ["monstrosity", "burrowing"],
        traits: [
            { name: "Standing Leap", description: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12+4) piercing damage." },
            { name: "Deadly Leap", description: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6+4) bludgeoning damage plus 14 (3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space." }
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
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity", "ambush"],
        traits: [
            { name: "False Appearance", description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite." },
            { name: "Grasping Tendrils", description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn." },
            { name: "Spider Climb", description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8+4) piercing damage." },
            { name: "Tendril", description: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target." },
            { name: "Reel", description: "The roper pulls each creature grappled by it up to 25 feet straight toward it." }
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
        environment: ["underdark", "urban"],
        role: "brute",
        tags: ["aberration"],
        traits: [
            { name: "Limited Telepathy", description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond." }
        ],
        actions: [
            { name: "Multiattack", description: "The otyugh makes three attacks: one with its bite and two with its tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8+3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target." },
            { name: "Tentacle Slam", description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6+3) bludgeoning damage and be stunned until the end of the otyugh's next turn." }
        ]
    },

    // ===== Classic Undead =====
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
        environment: ["desert", "dungeon"],
        role: "leader",
        tags: ["undead", "legendary", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The mummy lord has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart." }
        ],
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6+4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot." },
            { name: "Dreadful Glare", description: "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Attack", description: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare." },
                { name: "Blinding Dust", description: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn." },
                { name: "Blasphemous Word (Costs 2 Actions)", description: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn." },
                { name: "Channel Negative Energy (Costs 2 Actions)", description: "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn." },
                { name: "Whirlwind of Sand (Costs 2 Actions)", description: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned." }
            ]
        },
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
        environment: ["underdark", "urban"],
        role: "leader",
        tags: ["undead", "spellcaster", "legendary"],
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
    "wraith": {
        name: "Wraith",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 0, fly: 60 },
        abilityScores: { str: 6, dex: 16, con: 16, int: 12, wis: 14, cha: 15 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "skirmisher",
        tags: ["undead", "incorporeal"],
        traits: [
            { name: "Incorporeal Movement", description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8+3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Create Specter", description: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control." }
        ]
    },
    "banshee": {
        name: "Banshee",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 58,
        hitDice: "13d8",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17 },
        savingThrows: { wis: 2, cha: 5 },
        damageResistances: ["acid", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish",
        cr: 4,
        environment: ["forest", "urban"],
        role: "artillery",
        tags: ["undead", "incorporeal", "elf"],
        traits: [
            { name: "Detect Life", description: "The banshee can magically sense the presence of creatures up to 5 miles away that aren't undead or constructs." },
            { name: "Incorporeal Movement", description: "The banshee can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Corrupting Touch", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6+2) necrotic damage." },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours." },
            { name: "Wail (1/Day)", description: "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage." }
        ]
    }
};

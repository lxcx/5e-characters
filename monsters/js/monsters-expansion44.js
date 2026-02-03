// Expansion Pack 44 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION44 = {
    // ===== More Classic Monsters =====
    "peryton": {
        name: "Peryton",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 16, dex: 12, con: 13, int: 9, wis: 12, cha: 10 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: [],
        languages: "understands Common and Elvish but can't speak",
        cr: 2,
        environment: ["mountain"],
        role: "skirmisher",
        tags: ["monstrosity"],
        traits: [
            { name: "Dive Attack", description: "If the peryton is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target." },
            { name: "Flyby", description: "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach." },
            { name: "Keen Sight and Smell", description: "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The peryton makes one gore attack and one talon attack." },
            { name: "Gore", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) piercing damage." }
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
        cr: "1/2",
        environment: ["underdark"],
        role: "ambusher",
        tags: ["monstrosity"],
        traits: [
            { name: "Echolocation", description: "The darkmantle can't use its blindsight while deafened." },
            { name: "False Appearance", description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite." }
        ],
        actions: [
            { name: "Crush", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way. While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target. A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement." },
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
        cr: "1/2",
        environment: ["underdark"],
        role: "ambusher",
        tags: ["monstrosity"],
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
        environment: ["underdark"],
        role: "ambusher",
        tags: ["monstrosity"],
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
        role: "ambusher",
        tags: ["aberration"],
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
            { name: "Phantasms (Recharges after a Short or Long Rest)", description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear. Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight. A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears." }
        ]
    },
    "carrion-crawler": {
        name: "Carrion Crawler",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 13, con: 16, int: 1, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Smell", description: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Spider Climb", description: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The carrion crawler makes two attacks: one with its tentacles and one with its bite." },
            { name: "Tentacles", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4+2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage." }
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
        cr: "1/2",
        environment: ["underdark"],
        role: "controller",
        tags: ["monstrosity"],
        traits: [
            { name: "Iron Scent", description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it." },
            { name: "Rust Metal", description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." },
            { name: "Antennae", description: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch. If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait." }
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
        tags: ["monstrosity"],
        traits: [
            { name: "Standing Leap", description: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12+4) piercing damage." },
            { name: "Deadly Leap", description: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6+4) bludgeoning damage plus 14 (3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space." }
        ]
    }
};

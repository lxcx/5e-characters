// Expansion Pack 45 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION45 = {
    // ===== More Classic Monsters =====
    "ankheg": {
        name: "Ankheg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor, 11 while prone",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 30, burrow: 10 },
        abilityScores: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["grassland", "forest"],
        role: "ambusher",
        tags: ["monstrosity"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so." },
            { name: "Acid Spray (Recharge 6)", description: "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "phase-spider": {
        name: "Phase Spider",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d10+5",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 15, dex: 15, con: 12, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Ethereal Jaunt", description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa." },
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "ettercap": {
        name: "Ettercap",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 44,
        hitDice: "8d8+8",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["forest"],
        role: "ambusher",
        tags: ["monstrosity"],
        traits: [
            { name: "Spider Climb", description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The ettercap ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettercap makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage." }
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
        tags: ["monstrosity"],
        traits: [
            { name: "Avoidance", description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Displacement", description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0." }
        ],
        actions: [
            { name: "Multiattack", description: "The displacer beast makes two attacks with its tentacles." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 3 (1d6) piercing damage." }
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
        environment: ["forest"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Sight and Smell", description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The owlbear makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." }
        ]
    },
    "griffon": {
        name: "Griffon",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 30, fly: 80 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 2, wis: 13, cha: 8 },
        skills: { perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["grassland", "hill", "mountain"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Sight", description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The griffon makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
        ]
    },
    "hippogriff": {
        name: "Hippogriff",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
        skills: { perception: 5 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["grassland", "hill", "mountain"],
        role: "skirmisher",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Sight", description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The hippogriff makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
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
        environment: ["grassland", "hill", "mountain"],
        role: "artillery",
        tags: ["monstrosity"],
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
    "wyvern": {
        name: "Wyvern",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 20, fly: 80 },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 6,
        environment: ["mountain", "hill"],
        role: "brute",
        tags: ["dragon"],
        actions: [
            { name: "Multiattack", description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Stinger", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "basilisk": {
        name: "Basilisk",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["desert", "mountain", "underdark"],
        role: "controller",
        tags: ["monstrosity"],
        traits: [
            { name: "Petrifying Gaze", description: "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage plus 7 (2d6) poison damage." }
        ]
    }
};

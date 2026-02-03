// Expansion Pack 23 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION23 = {
    // ===== More Classic Monsters =====
    "kraken": {
        name: "Kraken",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 472,
        hitDice: "27d20+189",
        speed: { walk: 20, swim: 60 },
        abilityScores: { str: 30, dex: 11, con: 25, int: 22, wis: 18, cha: 20 },
        savingThrows: { str: 17, dex: 7, con: 14, int: 13, wis: 11 },
        damageImmunities: ["lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["frightened", "paralyzed"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, Celestial, Infernal, Primordial, telepathy 120 ft. but can't speak",
        cr: 23,
        environment: ["underwater"],
        role: "brute",
        tags: ["monstrosity", "titan"],
        traits: [
            { name: "Amphibious", description: "The kraken can breathe air and water." },
            { name: "Freedom of Movement", description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled." },
            { name: "Siege Monster", description: "The kraken deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8+10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone." },
            { name: "Tentacle", description: "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6+10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target." },
            { name: "Fling", description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone." },
            { name: "Lightning Storm", description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Tentacle Attack or Fling", description: "The kraken makes one tentacle attack or uses its Fling." },
            { name: "Lightning Storm (Costs 2 Actions)", description: "The kraken uses Lightning Storm." },
            { name: "Ink Cloud (Costs 3 Actions)", description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn." }
        ]
    },
    "tarrasque": {
        name: "Tarrasque",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "unaligned",
        ac: 25,
        acType: "natural armor",
        hp: 676,
        hitDice: "33d20+330",
        speed: { walk: 40 },
        abilityScores: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
        savingThrows: { int: 5, wis: 9, cha: 9 },
        damageImmunities: ["fire", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 120 ft."],
        languages: "—",
        cr: 30,
        environment: ["any"],
        role: "brute",
        tags: ["monstrosity", "titan"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the tarrasque fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The tarrasque has advantage on saving throws against spells and other magical effects." },
            { name: "Reflective Carapace", description: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target." },
            { name: "Siege Monster", description: "The tarrasque deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12+10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target." },
            { name: "Claw", description: "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8+10) slashing damage." },
            { name: "Horns", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10+10) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6+10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone." },
            { name: "Frightful Presence", description: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours." },
            { name: "Swallow", description: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone." }
        ],
        legendaryActions: [
            { name: "Attack", description: "The tarrasque makes one claw attack or tail attack." },
            { name: "Move", description: "The tarrasque moves up to half its speed." },
            { name: "Chomp (Costs 2 Actions)", description: "The tarrasque makes one bite attack or uses its Swallow." }
        ]
    },
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
        tags: ["aberration"],
        traits: [
            { name: "Amphibious", description: "The aboleth can breathe air and water." },
            { name: "Mucous Cloud", description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater." },
            { name: "Probing Telepathy", description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
        ],
        actions: [
            { name: "Multiattack", description: "The aboleth makes three tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed." },
            { name: "Tail", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6+5) bludgeoning damage." },
            { name: "Enslave (3/Day)", description: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The aboleth makes a Wisdom (Perception) check." },
            { name: "Tail Swipe", description: "The aboleth makes one tail attack." },
            { name: "Psychic Drain (Costs 2 Actions)", description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes." }
        ]
    },

    // ===== More Giants =====
    "storm-giant-quintessent": {
        name: "Storm Giant Quintessent",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic good",
        ac: 12,
        hp: 230,
        hitDice: "20d12+100",
        speed: { walk: 50, fly: 50, swim: 50 },
        abilityScores: { str: 29, dex: 14, con: 20, int: 17, wis: 20, cha: 19 },
        savingThrows: { str: 14, con: 10, wis: 10, cha: 9 },
        skills: { arcana: 8, history: 8, perception: 10 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "thunder"],
        senses: ["truesight 60 ft."],
        languages: "Common, Giant",
        cr: 16,
        environment: ["coastal", "underwater"],
        role: "artillery",
        tags: ["giant"],
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two Lightning Sword attacks or uses Wind Javelin twice." },
            { name: "Lightning Sword", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 40 (9d6+9) lightning damage." },
            { name: "Wind Javelin", description: "The giant coalesces wind into a javelin-like form and hurls it at a creature it can see within 600 feet of it. The javelin is considered a magic weapon and deals 19 (3d6+9) piercing damage to the target, striking unerringly. The javelin disappears after it hits." }
        ],
        legendaryActions: [
            { name: "Gust", description: "The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around it. The target must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet in any horizontal direction the giant chooses." },
            { name: "Thunderbolt (Costs 2 Actions)", description: "The giant hurls a thunderbolt at a creature it can see within 600 feet of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10) thunder damage on a failed save, or half as much damage on a successful one." },
            { name: "One with the Storm (Costs 3 Actions)", description: "The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair. While dispersed, the giant can't take any actions other than lair actions, and it can't be targeted by attacks, spells, or other effects. The giant can't use this ability outside its lair, nor can it use this ability if another creature is using a control weather spell or similar magic to quell the storm." }
        ]
    },
    "cloud-giant-smiling-one": {
        name: "Cloud Giant Smiling One",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "natural armor",
        hp: 250,
        hitDice: "20d12+120",
        speed: { walk: 40 },
        abilityScores: { str: 26, dex: 12, con: 22, int: 15, wis: 16, cha: 17 },
        savingThrows: { con: 10, int: 6, cha: 7 },
        skills: { deception: 11, insight: 7, perception: 7, sleight: 9 },
        senses: [],
        languages: "Common, Giant",
        cr: 11,
        environment: ["mountain"],
        role: "controller",
        tags: ["giant", "spellcaster"],
        traits: [
            { name: "Keen Smell", description: "The giant has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two attacks with its morningstar." },
            { name: "Morningstar", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) bludgeoning damage. The attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll." },
            { name: "Rock", description: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage. The attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll." },
            { name: "Change Shape", description: "The giant magically polymorphs into a beast or humanoid it has seen, or back into its true form. Any equipment the giant is wearing or carrying is absorbed by the new form. Its statistics, other than its size, are the same in each form. It reverts to its true form if it dies." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["detect magic", "fog cloud", "light", "minor illusion"],
                "3/day each": ["invisibility", "suggestion", "tongues"],
                "1/day each": ["gaseous form", "major image"]
            }
        }
    }
};

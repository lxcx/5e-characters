// Final Additions - Filling remaining gaps
// Sources: MM, VGtM, MToF

const MONSTERS_FINAL = {
    // ===== Lycanthropes =====
    "werewolf": {
        name: "Werewolf",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "chaotic evil",
        ac: 11,
        acType: "12 natural armor in wolf or hybrid form",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30, "walk (wolf)": 40 },
        abilityScores: { str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in wolf form)",
        cr: 3,
        environment: ["forest", "hill"],
        role: "skirmisher",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid." },
            { name: "Keen Hearing and Smell", description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)." },
            { name: "Bite (Wolf or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy." },
            { name: "Claws (Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4+2) slashing damage." },
            { name: "Spear (Humanoid Form Only)", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "wererat": {
        name: "Wererat",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "lawful evil",
        ac: 12,
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8 },
        skills: { perception: 2, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft. (rat form only)"],
        languages: "Common (can't speak in rat form)",
        cr: 2,
        environment: ["urban", "underdark"],
        role: "skirmisher",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid." },
            { name: "Keen Smell", description: "The wererat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wererat makes two attacks, only one of which can be a bite." },
            { name: "Bite (Rat or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy." },
            { name: "Shortsword (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "werebear": {
        name: "Werebear",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral good",
        ac: 10,
        acType: "11 natural armor in bear or hybrid form",
        hp: 135,
        hitDice: "18d8+54",
        speed: { walk: 30, "walk (bear)": 40, climb: 30 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 11, wis: 12, cha: 12 },
        skills: { perception: 7 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in bear form)",
        cr: 5,
        environment: ["forest", "arctic"],
        role: "brute",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid." },
            { name: "Keen Smell", description: "The werebear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid." },
            { name: "Bite (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10+4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy." },
            { name: "Claw (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Greataxe (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) slashing damage." }
        ]
    },
    "wereboar": {
        name: "Wereboar",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral evil",
        ac: 10,
        acType: "11 natural armor in boar or hybrid form",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30, "walk (boar)": 40 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 10, wis: 11, cha: 8 },
        skills: { perception: 2 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in boar form)",
        cr: 4,
        environment: ["forest", "grassland"],
        role: "brute",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid." },
            { name: "Charge (Boar or Hybrid Form Only)", description: "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wereboar makes two attacks, only one of which can be with its tusks." },
            { name: "Maul (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." },
            { name: "Tusks (Boar or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy." }
        ]
    },
    "weretiger": {
        name: "Weretiger",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral",
        ac: 12,
        hp: 120,
        hitDice: "16d8+48",
        speed: { walk: 30, "walk (tiger)": 40 },
        abilityScores: { str: 17, dex: 15, con: 16, int: 10, wis: 13, cha: 11 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft."],
        languages: "Common (can't speak in tiger form)",
        cr: 4,
        environment: ["forest", "grassland", "jungle"],
        role: "skirmisher",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid." },
            { name: "Keen Hearing and Smell", description: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pounce (Tiger or Hybrid Form Only)", description: "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks." },
            { name: "Bite (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy." },
            { name: "Claw (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage." },
            { name: "Scimitar (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Longbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },

    // ===== Classic Creatures =====
    "beholder": {
        name: "Beholder",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
        savingThrows: { int: 8, wis: 7, cha: 8 },
        skills: { perception: 12 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon",
        cr: 13,
        environment: ["underdark"],
        role: "artillery",
        tags: ["aberration", "legendary"],
        traits: [
            { name: "Antimagic Cone", description: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage." },
            { name: "Eye Rays", description: "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it: 1. Charm Ray, 2. Paralyzing Ray, 3. Fear Ray, 4. Slowing Ray, 5. Enervation Ray, 6. Telekinetic Ray, 7. Sleep Ray, 8. Petrification Ray, 9. Disintegration Ray, 10. Death Ray." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Eye Ray", description: "The beholder uses one random eye ray." }
            ]
        }
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
        tags: ["monstrosity", "titan", "legendary"],
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
            { name: "Frightful Presence", description: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Swallow", description: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Attack", description: "The tarrasque makes one claw attack or tail attack." },
                { name: "Move", description: "The tarrasque moves up to half its speed." },
                { name: "Chomp (Costs 2 Actions)", description: "The tarrasque makes one bite attack or uses its Swallow." }
            ]
        }
    },
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
        environment: ["underwater", "coastal"],
        role: "brute",
        tags: ["monstrosity", "titan", "legendary", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The kraken can breathe air and water." },
            { name: "Freedom of Movement", description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained." },
            { name: "Siege Monster", description: "The kraken deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8+10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends." },
            { name: "Tentacle", description: "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6+10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target." },
            { name: "Fling", description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone." },
            { name: "Lightning Storm", description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Tentacle Attack or Fling", description: "The kraken makes one tentacle attack or uses its Fling." },
                { name: "Lightning Storm (Costs 2 Actions)", description: "The kraken uses Lightning Storm." },
                { name: "Ink Cloud (Costs 3 Actions)", description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one." }
            ]
        }
    },

    // ===== Mind Flayers =====
    "mind-flayer": {
        name: "Mind Flayer",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
        savingThrows: { int: 7, wis: 6, cha: 6 },
        skills: { arcana: 7, deception: 6, insight: 6, perception: 6, persuasion: 6, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 7,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration", "psionic"],
        traits: [
            { name: "Magic Resistance", description: "The mind flayer has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10+4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 15,
            spells: {
                atWill: ["detect thoughts", "levitate"],
                "1/day each": ["dominate monster", "plane shift (self only)"]
            }
        }
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
        environment: ["underdark"],
        role: "lurker",
        tags: ["aberration", "mind flayer"],
        traits: [
            { name: "Detect Sentience", description: "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell." }
        ],
        actions: [
            { name: "Multiattack", description: "The intellect devourer makes one attack with its claws and uses Devour Intellect." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Devour Intellect", description: "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence." },
            { name: "Body Thief", description: "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body." }
        ]
    }
};

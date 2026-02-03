// Expansion Pack 1 - More MM Creatures
// Pushing toward 1000 monsters

const MONSTERS_EXPANSION1 = {
    // ===== Dinosaurs =====
    "tyrannosaurus-rex": {
        name: "Tyrannosaurus Rex",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d12+52",
        speed: { walk: 50 },
        abilityScores: { str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 8,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12+7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." }
        ]
    },
    "triceratops": {
        name: "Triceratops",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 95,
        hitDice: "10d12+30",
        speed: { walk: 50 },
        abilityScores: { str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Trampling Charge", description: "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8+6) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10+6) bludgeoning damage." }
        ]
    },
    "plesiosaurus": {
        name: "Plesiosaurus",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 2, wis: 12, cha: 5 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["underwater", "coastal"],
        role: "skirmisher",
        tags: ["dinosaur", "beast", "aquatic"],
        traits: [
            { name: "Hold Breath", description: "The plesiosaurus can hold its breath for 1 hour." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6+4) piercing damage." }
        ]
    },
    "pteranodon": {
        name: "Pteranodon",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 12, dex: 15, con: 10, int: 2, wis: 9, cha: 5 },
        skills: { perception: 1 },
        senses: [],
        languages: "—",
        cr: 0.25,
        environment: ["coastal", "mountain"],
        role: "skirmisher",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Flyby", description: "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) piercing damage." }
        ]
    },
    "allosaurus": {
        name: "Allosaurus",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 60 },
        abilityScores: { str: 19, dex: 13, con: 17, int: 2, wis: 12, cha: 5 },
        skills: { perception: 5 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["jungle", "grassland"],
        role: "skirmisher",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Pounce", description: "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage." }
        ]
    },
    "ankylosaurus": {
        name: "Ankylosaurus",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d12+16",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 11, con: 15, int: 2, wis: 12, cha: 5 },
        senses: [],
        languages: "—",
        cr: 3,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6+4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ]
    },
    "deinonychus": {
        name: "Deinonychus",
        source: "VGtM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 15, con: 14, int: 4, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["jungle", "grassland"],
        role: "skirmisher",
        tags: ["dinosaur", "beast", "pack"],
        traits: [
            { name: "Pounce", description: "If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The deinonychus makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage." }
        ]
    },
    "velociraptor": {
        name: "Velociraptor",
        source: "VGtM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 30 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 4, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0.25,
        environment: ["jungle", "grassland"],
        role: "minion",
        tags: ["dinosaur", "beast", "pack"],
        traits: [
            { name: "Pack Tactics", description: "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The velociraptor makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "quetzalcoatlus": {
        name: "Quetzalcoatlus",
        source: "VGtM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 30,
        hitDice: "4d12+4",
        speed: { walk: 10, fly: 80 },
        abilityScores: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { perception: 2 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["coastal", "mountain", "grassland"],
        role: "skirmisher",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Dive Attack", description: "If the quetzalcoatlus is flying and dives at least 30 feet straight toward a target and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target." },
            { name: "Flyby", description: "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 12 (3d6+2) piercing damage." }
        ]
    },
    "stegosaurus": {
        name: "Stegosaurus",
        source: "VGtM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 76,
        hitDice: "8d12+24",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: [],
        languages: "—",
        cr: 4,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 26 (6d6+5) piercing damage." }
        ]
    },
    "brontosaurus": {
        name: "Brontosaurus",
        source: "VGtM",
        size: "gargantuan",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 121,
        hitDice: "9d20+27",
        speed: { walk: 30 },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        savingThrows: { con: 6 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Stomp", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27 (5d8+5) bludgeoning damage, and the target must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32 (6d8+5) bludgeoning damage." }
        ]
    },

    // ===== More Humanoids =====
    "archmage": {
        name: "Archmage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 99,
        hitDice: "18d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16 },
        savingThrows: { int: 9, wis: 6 },
        skills: { arcana: 13, history: 13 },
        damageResistances: ["damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)"],
        senses: [],
        languages: "any six languages",
        cr: 12,
        environment: ["urban"],
        role: "artillery",
        tags: ["humanoid", "spellcaster", "npc"],
        traits: [
            { name: "Magic Resistance", description: "The archmage has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["fire bolt", "light", "mage hand", "prestidigitation", "shocking grasp"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "mage armor*", "magic missile"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "mirror image", "misty step"] },
                "3rd": { slots: 3, spells: ["counterspell", "fly", "lightning bolt"] },
                "4th": { slots: 3, spells: ["banishment", "fire shield", "stoneskin*"] },
                "5th": { slots: 3, spells: ["cone of cold", "scrying", "wall of force"] },
                "6th": { slots: 1, spells: ["globe of invulnerability"] },
                "7th": { slots: 1, spells: ["teleport"] },
                "8th": { slots: 1, spells: ["mind blank*"] },
                "9th": { slots: 1, spells: ["time stop"] }
            }
        }
    },
    "assassin": {
        name: "Assassin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 15,
        acType: "studded leather",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10 },
        savingThrows: { dex: 6, int: 4 },
        skills: { acrobatics: 6, deception: 3, perception: 3, stealth: 9 },
        damageResistances: ["poison"],
        senses: [],
        languages: "Thieves' cant plus any two languages",
        cr: 8,
        environment: ["urban"],
        role: "lurker",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Assassinate", description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit." },
            { name: "Evasion", description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Sneak Attack (1/Turn)", description: "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The assassin makes two shortsword attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8+3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "gladiator": {
        name: "Gladiator",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather, shield",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 12, cha: 15 },
        savingThrows: { str: 7, dex: 5, con: 6 },
        skills: { athletics: 10, intimidation: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 5,
        environment: ["urban"],
        role: "brute",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Brave", description: "The gladiator has advantage on saving throws against being frightened." },
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The gladiator makes three melee attacks or two ranged attacks." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage, or 13 (2d8+4) piercing damage if used with two hands to make a melee attack." },
            { name: "Shield Bash", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4+4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Parry", description: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon." }
        ]
    },
    "mage": {
        name: "Mage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11 },
        savingThrows: { int: 6, wis: 4 },
        skills: { arcana: 6, history: 6 },
        senses: [],
        languages: "any four languages",
        cr: 6,
        environment: ["urban"],
        role: "artillery",
        tags: ["humanoid", "spellcaster", "npc"],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["fire bolt", "light", "mage hand", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "mage armor", "magic missile", "shield"] },
                "2nd": { slots: 3, spells: ["misty step", "suggestion"] },
                "3rd": { slots: 3, spells: ["counterspell", "fireball", "fly"] },
                "4th": { slots: 3, spells: ["greater invisibility", "ice storm"] },
                "5th": { slots: 1, spells: ["cone of cold"] }
            }
        }
    },
    "priest": {
        name: "Priest",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "chain shirt",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 10, con: 12, int: 13, wis: 16, cha: 13 },
        skills: { medicine: 7, persuasion: 3, religion: 5 },
        senses: [],
        languages: "any two languages",
        cr: 2,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "spellcaster", "npc"],
        traits: [
            { name: "Divine Eminence", description: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st." }
        ],
        actions: [
            { name: "Mace", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["light", "sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["cure wounds", "guiding bolt", "sanctuary"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "spiritual weapon"] },
                "3rd": { slots: 2, spells: ["dispel magic", "spirit guardians"] }
            }
        }
    },
    "knight": {
        name: "Knight",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 14, int: 11, wis: 11, cha: 15 },
        savingThrows: { con: 4, wis: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Brave", description: "The knight has advantage on saving throws against being frightened." }
        ],
        actions: [
            { name: "Multiattack", description: "The knight makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated." }
        ],
        reactions: [
            { name: "Parry", description: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon." }
        ]
    },
    "veteran": {
        name: "Veteran",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 17,
        acType: "splint",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { athletics: 5, perception: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Multiattack", description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10+1) piercing damage." }
        ]
    },

    // ===== Swarms =====
    "swarm-of-beetles": {
        name: "Swarm of Beetles",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, burrow: 5, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-centipedes": {
        name: "Swarm of Centipedes",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer. A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way." }
        ]
    },
    "swarm-of-spiders": {
        name: "Swarm of Spiders",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Spider Climb", description: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The swarm ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-wasps": {
        name: "Swarm of Wasps",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 5, fly: 30 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: [],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "grassland"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Stings", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    }
};

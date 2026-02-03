// Expansion Pack 17 - More Creatures
// Filling remaining gaps

const MONSTERS_EXPANSION17 = {
    // ===== More Classic Monsters =====
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
    },
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
        environment: ["underdark"],
        role: "brute",
        tags: ["monstrosity"],
        actions: [
            { name: "Multiattack", description: "The behir makes two attacks: one with its bite and one to constrict." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10+6) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10+6) bludgeoning damage plus 17 (2d10+6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." },
            { name: "Swallow", description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone." }
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
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6+3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check." },
            { name: "Tail", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8+3) slashing damage." },
            { name: "Moan", description: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours." },
            { name: "Phantasms (Recharges after a Short or Long Rest)", description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear. Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight. A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears." }
        ]
    },

    // ===== More Humanoids =====
    "hobgoblin-captain": {
        name: "Hobgoblin Captain",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 13 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 3,
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "leader",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The hobgoblin makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated." }
        ]
    },
    "hobgoblin-warlord": {
        name: "Hobgoblin Warlord",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 20,
        acType: "plate, shield",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 16, int: 14, wis: 11, cha: 15 },
        savingThrows: { int: 5, wis: 3, cha: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 6,
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "leader",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins." },
            { name: "Longsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Shield Bash", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) bludgeoning damage. If the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated." }
        ],
        reactions: [
            { name: "Parry", description: "The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon." }
        ]
    },
    "bugbear-chief": {
        name: "Bugbear Chief",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 17,
        acType: "chain shirt, shield",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 14, con: 14, int: 11, wis: 12, cha: 11 },
        skills: { intimidation: 2, stealth: 6, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 3,
        environment: ["forest", "grassland", "underdark"],
        role: "brute",
        tags: ["humanoid", "goblinoid"],
        traits: [
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)." },
            { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack." },
            { name: "Heart of Hruggek", description: "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep." }
        ],
        actions: [
            { name: "Multiattack", description: "The bugbear makes two melee attacks." },
            { name: "Morningstar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8+3) piercing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6+3) piercing damage in melee or 5 (1d6+3) piercing damage at range." }
        ]
    },

    // ===== More Misc =====
    "grick-alpha": {
        name: "Grick Alpha",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 16, con: 15, int: 4, wis: 14, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 7,
        environment: ["underdark"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target." },
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8+4) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    "kraken-priest": {
        name: "Kraken Priest",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any evil alignment",
        ac: 10,
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 12, dex: 10, con: 16, int: 10, wis: 15, cha: 14 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: [],
        languages: "any two languages",
        cr: 5,
        environment: ["coastal", "underwater"],
        role: "controller",
        tags: ["humanoid", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The priest can breathe air and water." }
        ],
        actions: [
            { name: "Thunderous Touch", description: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: 27 (5d10) thunder damage." },
            { name: "Voice of the Kraken (Recharges after a Short or Long Rest)", description: "A kraken speaks through the priest with a thunderous voice audible within 300 feet. Creatures of the priest's choice that can hear the kraken's words (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC 14 Charisma saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["guidance", "light", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "create or destroy water"] },
                "2nd": { slots: 3, spells: ["augury", "call lightning", "gust of wind"] },
                "3rd": { slots: 3, spells: ["control water", "water breathing", "water walk"] }
            }
        }
    },
    "nagpa": {
        name: "Nagpa",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "nagpa",
        alignment: "neutral evil",
        ac: 19,
        acType: "natural armor",
        hp: 187,
        hitDice: "34d8+34",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 15, con: 12, int: 23, wis: 18, cha: 21 },
        savingThrows: { int: 12, wis: 10, cha: 11 },
        skills: { arcana: 12, deception: 11, history: 12, insight: 10, perception: 10 },
        senses: ["truesight 120 ft."],
        languages: "Common plus up to five other languages",
        cr: 17,
        environment: ["desert", "swamp", "underdark", "urban"],
        role: "controller",
        tags: ["humanoid", "spellcaster"],
        traits: [
            { name: "Corruption", description: "As a bonus action, the nagpa targets one creature it can see within 90 feet of it. The target must make a DC 20 Charisma saving throw. An evil creature makes the save with disadvantage. On a failed save, the target is charmed by the nagpa until the start of the nagpa's next turn. On a successful save, the target becomes immune to the nagpa's Corruption for the next 24 hours." },
            { name: "Paralysis (Recharge 6)", description: "As a bonus action, the nagpa forces each creature within 30 feet of it to make a DC 20 Wisdom saving throw, excluding undead and constructs. On a failed save, a target is paralyzed for 1 minute. A paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        actions: [
            { name: "Staff", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 24 (7d6) necrotic damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 20,
            attack: 12,
            spells: {
                cantrips: ["chill touch", "fire bolt", "mage hand", "message", "minor illusion"],
                "1st": { slots: 4, spells: ["charm person", "detect magic", "protection from evil and good", "witch bolt"] },
                "2nd": { slots: 3, spells: ["hold person", "ray of enfeeblement", "suggestion"] },
                "3rd": { slots: 3, spells: ["counterspell", "fireball", "fly"] },
                "4th": { slots: 3, spells: ["confusion", "hallucinatory terrain", "wall of fire"] },
                "5th": { slots: 3, spells: ["dominate person", "dream", "geas"] },
                "6th": { slots: 1, spells: ["circle of death", "disintegrate"] },
                "7th": { slots: 1, spells: ["etherealness", "finger of death"] },
                "8th": { slots: 1, spells: ["dominate monster", "feeblemind"] }
            }
        }
    }
};

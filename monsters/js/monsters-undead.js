// Classic Undead and Iconic Monsters
// Source: MM (Monster Manual)

const MONSTERS_UNDEAD = {
    // ===== VAMPIRES =====
    "vampire": {
        name: "Vampire",
        source: "MM",
        size: "medium",
        type: "undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18 },
        savingThrows: { dex: 9, wis: 7, cha: 9 },
        skills: { perception: 7, stealth: 9 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft."],
        languages: "the languages it knew in life",
        cr: 13,
        traits: [
            { name: "Shapechanger", description: "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form." },
            { name: "Legendary Resistance (3/Day)", description: "If the vampire fails a saving throw, it can choose to succeed instead." },
            { name: "Misty Escape", description: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist instead of falling unconscious, provided that it isn't in sunlight or running water." },
            { name: "Regeneration", description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8+4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)." },
            { name: "Bite (Bat or Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount." },
            { name: "Charm", description: "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire." },
            { name: "Children of the Night (1/Day)", description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Move", description: "The vampire moves up to its speed without provoking opportunity attacks." },
                { name: "Unarmed Strike", description: "The vampire makes one unarmed strike." },
                { name: "Bite (Costs 2 Actions)", description: "The vampire makes one bite attack." }
            ]
        }
    },
    "vampire-spawn": {
        name: "Vampire Spawn",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 16, con: 16, int: 11, wis: 10, cha: 12 },
        savingThrows: { dex: 6, wis: 3 },
        skills: { perception: 3, stealth: 6 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        traits: [
            { name: "Regeneration", description: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4+3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6+3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount." }
        ]
    },

    // ===== LICHES =====
    "lich": {
        name: "Lich",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "any evil alignment",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hitDice: "18d8+54",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16 },
        savingThrows: { con: 10, int: 12, wis: 9 },
        skills: { arcana: 19, history: 12, insight: 9, perception: 9 },
        damageResistances: ["cold", "lightning", "necrotic"],
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Common plus up to five other languages",
        cr: 21,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the lich fails a saving throw, it can choose to succeed instead." },
            { name: "Rejuvenation", description: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again." },
            { name: "Turn Resistance", description: "The lich has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Paralyzing Touch", description: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Cantrip", description: "The lich casts a cantrip." },
                { name: "Paralyzing Touch (Costs 2 Actions)", description: "The lich uses its Paralyzing Touch." },
                { name: "Frightening Gaze (Costs 2 Actions)", description: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute." },
                { name: "Disrupt Life (Costs 3 Actions)", description: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one." }
            ]
        },
        spellcasting: {
            ability: "int",
            dc: 20,
            attack: 12,
            spells: {
                cantrips: ["mage hand", "prestidigitation", "ray of frost"],
                "1st": { slots: 4, spells: ["detect magic", "magic missile", "shield", "thunderwave"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "invisibility", "Melf's acid arrow", "mirror image"] },
                "3rd": { slots: 3, spells: ["animate dead", "counterspell", "dispel magic", "fireball"] },
                "4th": { slots: 3, spells: ["blight", "dimension door"] },
                "5th": { slots: 3, spells: ["cloudkill", "scrying"] },
                "6th": { slots: 1, spells: ["disintegrate", "globe of invulnerability"] },
                "7th": { slots: 1, spells: ["finger of death", "plane shift"] },
                "8th": { slots: 1, spells: ["dominate monster", "power word stun"] },
                "9th": { slots: 1, spells: ["power word kill"] }
            }
        }
    },
    "demilich": {
        name: "Demilich",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 80,
        hitDice: "20d4",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 1, dex: 20, con: 10, int: 20, wis: 17, cha: 20 },
        savingThrows: { con: 6, int: 11, wis: 9, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from magic weapons"],
        damageImmunities: ["necrotic", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "prone", "stunned"],
        senses: ["truesight 120 ft."],
        languages: "—",
        cr: 18,
        traits: [
            { name: "Avoidance", description: "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Legendary Resistance (3/Day)", description: "If the demilich fails a saving throw, it can choose to succeed instead." },
            { name: "Turn Immunity", description: "The demilich is immune to effects that turn undead." }
        ],
        actions: [
            { name: "Howl (Recharge 5-6)", description: "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn." },
            { name: "Life Drain", description: "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Flight", description: "The demilich flies up to half its flying speed." },
                { name: "Cloud of Dust", description: "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn." },
                { name: "Energy Drain (Costs 2 Actions)", description: "Each creature within 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies." },
                { name: "Vile Curse (Costs 3 Actions)", description: "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws." }
            ]
        }
    },

    // ===== MUMMIES =====
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
        traits: [
            { name: "Magic Resistance", description: "The mummy lord has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again." }
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
                { name: "Whirlwind of Sand (Costs 2 Actions)", description: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form." }
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
    "mummy": {
        name: "Mummy",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 11,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12 },
        savingThrows: { wis: 2 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 3,
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot." },
            { name: "Dreadful Glare", description: "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn." }
        ]
    },

    // ===== OTHER UNDEAD =====
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
        traits: [
            { name: "Incorporeal Movement", description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8+3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Create Specter", description: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space." }
        ]
    },
    "specter": {
        name: "Specter",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 1,
        traits: [
            { name: "Incorporeal Movement", description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
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
        traits: [
            { name: "Detect Life", description: "The banshee can magically sense the presence of creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations." },
            { name: "Incorporeal Movement", description: "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object." }
        ],
        actions: [
            { name: "Corrupting Touch", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6+2) necrotic damage." },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours." },
            { name: "Wail (1/Day)", description: "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage." }
        ]
    },
    "revenant": {
        name: "Revenant",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral",
        ac: 13,
        acType: "leather armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 13, wis: 16, cha: 18 },
        savingThrows: { str: 7, con: 7, wis: 6, cha: 7 },
        damageResistances: ["necrotic", "psychic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "stunned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        traits: [
            { name: "Regeneration", description: "The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Rejuvenation", description: "When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another humanoid corpse on the same plane of existence and regains all its hit points." },
            { name: "Turn Immunity", description: "The revenant is immune to effects that turn undead." },
            { name: "Vengeful Tracker", description: "The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence." }
        ],
        actions: [
            { name: "Multiattack", description: "The revenant makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage." },
            { name: "Vengeful Glare", description: "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn." }
        ]
    },
    "wight": {
        name: "Wight",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 14,
        acType: "studded leather",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15 },
        skills: { perception: 3, stealth: 4 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 3,
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack." },
            { name: "Life Drain", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control." },
            { name: "Longsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage, or 7 (1d10+2) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "ghost": {
        name: "Ghost",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "any alignment",
        ac: 11,
        hp: 45,
        hitDice: "10d8",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 7, dex: 13, con: 10, int: 10, wis: 12, cha: 17 },
        damageResistances: ["acid", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "any languages it knew in life",
        cr: 4,
        traits: [
            { name: "Ethereal Sight", description: "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa." },
            { name: "Incorporeal Movement", description: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Withering Touch", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6+3) necrotic damage." },
            { name: "Etherealness", description: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane." },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years." },
            { name: "Possession (Recharge 6)", description: "One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body." }
        ]
    },
    "ghast": {
        name: "Ghast",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 13,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 17, con: 10, int: 11, wis: 10, cha: 8 },
        damageResistances: ["necrotic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 2,
        traits: [
            { name: "Stench", description: "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours." },
            { name: "Turn Defiance", description: "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8+3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "ghoul": {
        name: "Ghoul",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 1,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "skeleton": {
        name: "Skeleton",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 13,
        acType: "armor scraps",
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 0.25,
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "zombie": {
        name: "Zombie",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 20 },
        abilityScores: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 0.25,
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage." }
        ]
    },
    "ogre-zombie": {
        name: "Ogre Zombie",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 85,
        hitDice: "9d10+36",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 6, con: 18, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Common and Giant but can't speak",
        cr: 2,
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Morningstar", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },
    "beholder-zombie": {
        name: "Beholder Zombie",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 8, con: 16, int: 3, wis: 8, cha: 5 },
        savingThrows: { wis: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned", "prone"],
        senses: ["darkvision 60 ft."],
        languages: "understands Deep Speech and Undercommon but can't speak",
        cr: 5,
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage." },
            { name: "Eye Ray", description: "The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it. 1. Paralyzing Ray (DC 14 Con save or paralyzed for 1 minute), 2. Fear Ray (DC 14 Wis save or frightened for 1 minute), 3. Enervation Ray (DC 14 Con save or 36 (8d8) necrotic damage, half on success), 4. Disintegration Ray (DC 14 Dex save or 45 (10d8) force damage, disintegrated if reduced to 0 hp)." }
        ]
    },
    "flameskull": {
        name: "Flameskull",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d4+18",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 1, dex: 17, con: 14, int: 16, wis: 10, cha: 11 },
        skills: { arcana: 5, perception: 2 },
        damageResistances: ["lightning", "necrotic", "piercing"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 4,
        traits: [
            { name: "Illumination", description: "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action." },
            { name: "Magic Resistance", description: "The flameskull has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them." }
        ],
        actions: [
            { name: "Multiattack", description: "The flameskull uses Fire Ray twice." },
            { name: "Fire Ray", description: "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["mage hand"],
                "1st": { slots: 3, spells: ["magic missile", "shield"] },
                "2nd": { slots: 2, spells: ["blur", "flaming sphere"] },
                "3rd": { slots: 1, spells: ["fireball"] }
            }
        }
    }
};

// Adventure Book Monsters
// Curse of Strahd, Tomb of Annihilation, Storm King's Thunder, etc.

const MONSTERS_ADVENTURES = {
    // ===== Curse of Strahd (CoS) =====
    "strahd-von-zarovich": {
        name: "Strahd von Zarovich",
        source: "CoS",
        size: "medium",
        type: "undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 18, con: 18, int: 20, wis: 15, cha: 18 },
        savingThrows: { dex: 9, wis: 7, cha: 9 },
        skills: { arcana: 15, perception: 12, religion: 10, stealth: 14 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, Draconic, Elvish, Giant, Infernal",
        cr: 15,
        environment: ["urban", "castle"],
        role: "leader",
        tags: ["vampire", "legendary", "spellcaster", "shapechanger", "boss"],
        traits: [
            { name: "Shapechanger", description: "If Strahd isn't in running water or sunlight, he can use his action to polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form." },
            { name: "Legendary Resistance (3/Day)", description: "If Strahd fails a saving throw, he can choose to succeed instead." },
            { name: "Misty Escape", description: "When Strahd drops to 0 hit points outside his coffin, he transforms into a cloud of mist instead of falling unconscious, provided that he isn't in running water or sunlight." },
            { name: "Regeneration", description: "Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight." },
            { name: "Spider Climb", description: "Strahd can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "Strahd has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "Strahd makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8+4) bludgeoning damage. Instead of dealing damage, Strahd can grapple the target (escape DC 18)." },
            { name: "Bite (Bat or Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken." },
            { name: "Charm", description: "Strahd targets one humanoid he can see within 30 feet of him. If the target can see Strahd, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by Strahd." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Move", description: "Strahd moves up to his speed without provoking opportunity attacks." },
                { name: "Unarmed Strike", description: "Strahd makes one unarmed strike." },
                { name: "Bite (Costs 2 Actions)", description: "Strahd makes one bite attack." }
            ]
        },
        spellcasting: {
            ability: "int",
            dc: 18,
            attack: 10,
            spells: {
                cantrips: ["mage hand", "prestidigitation", "ray of frost"],
                "1st": { slots: 4, spells: ["comprehend languages", "fog cloud", "sleep"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "gust of wind", "mirror image"] },
                "3rd": { slots: 3, spells: ["animate dead", "fireball", "nondetection"] },
                "4th": { slots: 3, spells: ["blight", "greater invisibility", "polymorph"] },
                "5th": { slots: 1, spells: ["animate objects", "scrying"] }
            }
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
        environment: ["urban", "underdark"],
        role: "skirmisher",
        tags: ["vampire", "undead"],
        traits: [
            { name: "Regeneration", description: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4+3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6+3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken." }
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
        environment: ["underdark", "urban", "swamp"],
        role: "soldier",
        tags: ["undead"],
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack." },
            { name: "Life Drain", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken." },
            { name: "Longsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage, or 7 (1d10+2) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
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
        environment: ["any"],
        role: "brute",
        tags: ["undead", "vengeance"],
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

    // ===== Tomb of Annihilation (ToA) =====
    "acererak": {
        name: "Acererak",
        source: "ToA",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 21,
        acType: "natural armor",
        hp: 285,
        hitDice: "30d8+150",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 16, con: 20, int: 27, wis: 21, cha: 20 },
        savingThrows: { con: 12, int: 15, wis: 12 },
        skills: { arcana: 22, history: 22, insight: 12, perception: 12 },
        damageResistances: ["cold", "lightning"],
        damageImmunities: ["necrotic", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial, Undercommon",
        cr: 23,
        environment: ["dungeon"],
        role: "controller",
        tags: ["lich", "legendary", "spellcaster", "boss", "demilich"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Acererak fails a saving throw, he can choose to succeed instead." },
            { name: "Rejuvenation", description: "Acererak's body turns to dust when he drops to 0 hit points, and his equipment is left behind. He gains a new body after 1d10 days, regaining all his hit points and becoming active again. The new body appears within 5 feet of his phylactery, the location of which is hidden." },
            { name: "Turn Resistance", description: "Acererak has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Paralyzing Touch", description: "Melee Spell Attack: +15 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage, and the target must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute." },
            { name: "Staff (+3 Quarterstaff)", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 10 (3d6) necrotic damage, or 8 (1d8+4) bludgeoning damage plus 10 (3d6) necrotic damage if used with two hands." },
            { name: "Invoke Curse", description: "While holding the Staff of the Forgotten One, Acererak expends 1 charge from it and targets one creature he can see within 60 feet of him. The target must succeed on a DC 23 Constitution saving throw or be cursed." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "At-Will Spell", description: "Acererak casts one of his at-will spells." },
                { name: "Melee Attack", description: "Acererak uses Paralyzing Touch or makes one melee attack with his staff." },
                { name: "Frightening Gaze (Costs 2 Actions)", description: "Acererak fixes his gaze on one creature he can see within 10 feet of him. The target must succeed on a DC 20 Wisdom saving throw against this magic or become frightened for 1 minute." },
                { name: "Talisman of the Sphere (Costs 2 Actions)", description: "Acererak uses his talisman of the sphere to move the sphere of annihilation under his control up to 90 feet." },
                { name: "Disrupt Life (Costs 3 Actions)", description: "Each creature within 20 feet of Acererak must make a DC 20 Constitution saving throw against this magic, taking 42 (12d6) necrotic damage on a failed save, or half as much damage on a successful one." }
            ]
        },
        spellcasting: {
            ability: "int",
            dc: 23,
            attack: 15,
            spells: {
                cantrips: ["mage hand", "ray of frost", "shocking grasp"],
                "1st": { slots: 4, spells: ["ray of sickness", "shield"] },
                "2nd": { slots: 3, spells: ["arcane lock", "knock"] },
                "3rd": { slots: 3, spells: ["animate dead", "counterspell"] },
                "4th": { slots: 3, spells: ["blight", "ice storm", "phantasmal killer"] },
                "5th": { slots: 3, spells: ["cloudkill", "hold monster", "wall of force"] },
                "6th": { slots: 1, spells: ["chain lightning", "circle of death", "disintegrate"] },
                "7th": { slots: 1, spells: ["finger of death", "plane shift"] },
                "8th": { slots: 1, spells: ["maze", "mind blank"] },
                "9th": { slots: 1, spells: ["power word kill", "time stop"] }
            }
        }
    },
    "zombie-tyrannosaurus": {
        name: "Zombie Tyrannosaurus Rex",
        source: "ToA",
        size: "huge",
        type: "undead",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d12+52",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 6, con: 19, int: 2, wis: 6, cha: 5 },
        savingThrows: { wis: 1 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 8,
        environment: ["jungle"],
        role: "brute",
        tags: ["undead", "dinosaur", "zombie"],
        traits: [
            { name: "Disgorge Zombie", description: "As a bonus action, the tyrannosaurus can disgorge a zombie from its gaping maw. The zombie appears in an unoccupied space within 10 feet of the tyrannosaurus." },
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12+7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target or disgorge zombies." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." }
        ]
    },
    "girallon-zombie": {
        name: "Girallon Zombie",
        source: "ToA",
        size: "large",
        type: "undead",
        alignment: "chaotic evil",
        ac: 11,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 12, con: 16, int: 3, wis: 8, cha: 5 },
        skills: { perception: 1, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["jungle"],
        role: "brute",
        tags: ["undead", "zombie", "ape"],
        traits: [
            { name: "Aggressive", description: "As a bonus action, the zombie can move up to its speed toward a hostile creature that it can see." },
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The zombie makes five attacks: one with its bite and four with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4+4) slashing damage." }
        ]
    },

    // ===== Storm King's Thunder (SKT) =====
    "iymrith": {
        name: "Iymrith",
        source: "SKT",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful evil",
        ac: 22,
        acType: "natural armor",
        hp: 481,
        hitDice: "26d20+208",
        speed: { walk: 40, burrow: 40, fly: 80 },
        abilityScores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { history: 11, perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic, Giant",
        cr: 23,
        environment: ["desert"],
        role: "brute",
        tags: ["dragon", "blue", "ancient", "legendary", "boss", "shapechanger"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Iymrith fails a saving throw, she can choose to succeed instead." },
            { name: "Innate Spellcasting", description: "Iymrith's spellcasting ability is Charisma (spell save DC 20). She can innately cast the following spells, requiring no material components: At will: detect magic; 3/day each: dispel magic, minor illusion, stone shape." }
        ],
        actions: [
            { name: "Multiattack", description: "Iymrith can use her Frightful Presence. She then makes three attacks: one with her bite and two with her claws." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) piercing damage plus 11 (2d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8+9) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of Iymrith's choice that is within 120 feet of her and aware of her must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "Iymrith exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "Iymrith makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "Iymrith makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "Iymrith beats her wings. Each creature within 15 feet of her must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone. Iymrith can then fly up to half her flying speed." }
            ]
        }
    },
    "frost-giant-everlasting-one": {
        name: "Frost Giant Everlasting One",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 189,
        hitDice: "14d12+98",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 9, con: 24, int: 9, wis: 10, cha: 12 },
        savingThrows: { str: 11, con: 11, wis: 4 },
        skills: { athletics: 11, perception: 4 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Giant",
        cr: 12,
        environment: ["arctic", "mountain"],
        role: "brute",
        tags: ["giant", "frost", "regeneration"],
        traits: [
            { name: "Extra Heads", description: "The giant has a 25 percent chance of having more than one head. If it has more than one, it has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." },
            { name: "Regeneration", description: "The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of its next turn. The giant dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Vaprak's Rage (Recharges after a Short or Long Rest)", description: "As a bonus action, the giant can enter a rage at the start of its turn. The rage lasts for 1 minute or until the giant is incapacitated. While raging, the giant gains the following benefits: It has advantage on Strength checks and Strength saving throws, it deals an extra 4 damage when it hits a target with a melee weapon attack, and it has resistance to bludgeoning, piercing, and slashing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greataxe attacks." },
            { name: "Greataxe", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 26 (3d12+7) slashing damage, or 30 (3d12+11) slashing damage while raging." },
            { name: "Rock", description: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    },
    "fire-giant-dreadnought": {
        name: "Fire Giant Dreadnought",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "lawful evil",
        ac: 21,
        acType: "plate, shields",
        hp: 187,
        hitDice: "15d12+90",
        speed: { walk: 30 },
        abilityScores: { str: 27, dex: 9, con: 23, int: 8, wis: 10, cha: 11 },
        savingThrows: { dex: 4, con: 11, cha: 5 },
        skills: { athletics: 13, perception: 5 },
        damageImmunities: ["fire"],
        senses: ["passive Perception 15"],
        languages: "Giant",
        cr: 14,
        environment: ["mountain", "underdark"],
        role: "soldier",
        tags: ["giant", "fire", "armored"],
        traits: [
            { name: "Dual Shields", description: "The giant carries two shields, each of which is accounted for in the giant's AC. The giant must stow or drop one of its shields to hurl rocks." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two fireshield attacks." },
            { name: "Fireshield", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) bludgeoning damage plus 7 (2d6) fire damage plus 7 (2d6) piercing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +13 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage." },
            { name: "Shield Charge", description: "The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, it makes a fireshield attack against that creature. If the attack hits, the target must also succeed on a DC 21 Strength saving throw or be pushed ahead of the giant for the rest of this move." }
        ]
    },
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
        environment: ["coastal", "mountain", "underwater"],
        role: "controller",
        tags: ["giant", "storm", "elemental"],
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two Lightning Sword attacks or uses Wind Javelin twice." },
            { name: "Lightning Sword", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 40 (9d6+9) lightning damage." },
            { name: "Wind Javelin", description: "The giant coalesces wind into a javelin-like form and hurls it at a creature it can see within 600 feet of it. The javelin is considered a magic weapon and deals 19 (3d6+9) piercing damage to the target, striking unerringly. The javelin disappears after it hits." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Gust", description: "The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around it. The target must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet in any horizontal direction the giant chooses." },
                { name: "Thunderbolt (Costs 2 Actions)", description: "The giant hurls a thunderbolt at a creature it can see within 600 feet of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10) thunder damage on a failed save, or half as much damage on a successful one." },
                { name: "One with the Storm (Costs 3 Actions)", description: "The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair." }
            ]
        }
    },

    // ===== Other Adventure Creatures =====
    "tlincalli": {
        name: "Tlincalli",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilityScores: { str: 16, dex: 13, con: 16, int: 8, wis: 12, cha: 8 },
        skills: { perception: 4, stealth: 4, survival: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Tlincalli",
        cr: 5,
        environment: ["desert"],
        role: "skirmisher",
        tags: ["scorpion", "centaur-like"],
        actions: [
            { name: "Multiattack", description: "The tlincalli makes two attacks: one with its longsword or spiked chain, and one with its sting." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Spiked Chain", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target is grappled (escape DC 11) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the tlincalli can't use its spiked chain against another target." },
            { name: "Sting", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute. If it fails the saving throw by 5 or more, the target is also paralyzed while poisoned. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success." }
        ]
    },
    "yuan-ti-abomination": {
        name: "Yuan-ti Abomination",
        source: "MM",
        size: "large",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 17, int: 17, wis: 15, cha: 18 },
        skills: { perception: 5, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 7,
        environment: ["jungle", "swamp", "underdark", "urban"],
        role: "brute",
        tags: ["yuan-ti", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Abomination Form Only)", description: "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target." },
            { name: "Scimitar (Abomination Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Longbow (Abomination Form Only)", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 12 (2d8+3) piercing damage plus 10 (3d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"],
                "1/day": ["fear"]
            }
        }
    },
    "grung": {
        name: "Grung",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "grung",
        alignment: "lawful evil",
        ac: 12,
        hp: 11,
        hitDice: "2d6+4",
        speed: { walk: 25, climb: 25 },
        abilityScores: { str: 7, dex: 14, con: 15, int: 10, wis: 11, cha: 10 },
        savingThrows: { dex: 4 },
        skills: { athletics: 2, perception: 2, stealth: 4, survival: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: [],
        languages: "Grung",
        cr: 0.25,
        environment: ["forest", "jungle", "swamp"],
        role: "minion",
        tags: ["frog", "poison"],
        traits: [
            { name: "Amphibious", description: "The grung can breathe air and water." },
            { name: "Poisonous Skin", description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Standing Leap", description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage." }
        ]
    },
    "grung-elite-warrior": {
        name: "Grung Elite Warrior",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "grung",
        alignment: "lawful evil",
        ac: 13,
        hp: 49,
        hitDice: "9d6+18",
        speed: { walk: 25, climb: 25 },
        abilityScores: { str: 7, dex: 16, con: 15, int: 10, wis: 11, cha: 12 },
        savingThrows: { dex: 5 },
        skills: { athletics: 2, perception: 2, stealth: 5, survival: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: [],
        languages: "Grung",
        cr: 2,
        environment: ["forest", "jungle", "swamp"],
        role: "skirmisher",
        tags: ["frog", "poison"],
        traits: [
            { name: "Amphibious", description: "The grung can breathe air and water." },
            { name: "Poisonous Skin", description: "Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute." },
            { name: "Standing Leap", description: "The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 5 (2d4) poison damage." },
            { name: "Mesmerizing Chirr (Recharge 6)", description: "The grung makes a chirring noise to which grungs are immune. Each humanoid or beast that is within 15 feet of the grung and able to hear it must succeed on a DC 12 Wisdom saving throw or be stunned until the end of the grung's next turn." }
        ]
    }
};

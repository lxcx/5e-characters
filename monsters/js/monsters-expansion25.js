// Expansion Pack 25 - More Creatures
// Comprehensive coverage continues

const MONSTERS_EXPANSION25 = {
    // ===== More Underdark Creatures =====
    "deep-gnome-svirfneblin": {
        name: "Deep Gnome (Svirfneblin)",
        source: "MM",
        size: "small",
        type: "humanoid",
        subtype: "gnome",
        alignment: "neutral good",
        ac: 15,
        acType: "chain shirt",
        hp: 16,
        hitDice: "3d6+6",
        speed: { walk: 20 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 9 },
        skills: { investigation: 3, perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Gnomish, Terran, Undercommon",
        cr: 0.5,
        environment: ["underdark"],
        role: "soldier",
        tags: ["humanoid", "gnome"],
        traits: [
            { name: "Stone Camouflage", description: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Gnome Cunning", description: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic." }
        ],
        actions: [
            { name: "War Pick", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Poisoned Dart", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 11,
            spells: {
                atWill: ["nondetection (self only)"],
                "1/day each": ["blindness/deafness", "blur", "disguise self"]
            }
        }
    },
    "kuo-toa": {
        name: "Kuo-toa",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor, shield",
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 13, dex: 10, con: 11, int: 11, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 0.25,
        environment: ["underdark", "underwater"],
        role: "soldier",
        tags: ["humanoid"],
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." },
            { name: "Net", description: "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller creature. Hit: The target is restrained. A creature can use its action to make a DC 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net." }
        ],
        reactions: [
            { name: "Sticky Shield", description: "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding." }
        ]
    },
    "kuo-toa-whip": {
        name: "Kuo-toa Whip",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 11,
        acType: "natural armor",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 14, dex: 10, con: 14, int: 12, wis: 14, cha: 11 },
        skills: { perception: 6, religion: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 1,
        environment: ["underdark", "underwater"],
        role: "controller",
        tags: ["humanoid", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kuo-toa makes two attacks: one with its bite and one with its pincer staff." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Pincer Staff", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 5 (1d6+2) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 14). Until this grapple ends, the kuo-toa can't use its pincer staff on another target." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["sacred flame", "thaumaturgy"],
                "1st": { slots: 3, spells: ["bane", "shield of faith"] },
                "2nd": { slots: 2, spells: ["hold person", "spiritual weapon"] }
            }
        }
    },
    "kuo-toa-archpriest": {
        name: "Kuo-toa Archpriest",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 16, dex: 14, con: 16, int: 13, wis: 16, cha: 14 },
        skills: { perception: 9, religion: 6 },
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 6,
        environment: ["underdark", "underwater"],
        role: "leader",
        tags: ["humanoid", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The kuo-toa can breathe air and water." },
            { name: "Otherworldly Perception", description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving." },
            { name: "Slippery", description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kuo-toa makes two melee attacks." },
            { name: "Scepter", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage plus 14 (4d6) lightning damage." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["guidance", "sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["detect magic", "sanctuary", "shield of faith"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon"] },
                "3rd": { slots: 3, spells: ["spirit guardians", "tongues"] },
                "4th": { slots: 3, spells: ["control water", "divination"] },
                "5th": { slots: 2, spells: ["mass cure wounds", "scrying"] }
            }
        }
    },

    // ===== More Creatures =====
    "cave-fisher": {
        name: "Cave Fisher",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 16,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 16, dex: 13, con: 14, int: 3, wis: 10, cha: 3 },
        skills: { perception: 2, stealth: 5 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Adhesive Filament", description: "The cave fisher can use its action to extend a sticky filament up to 60 feet, and the filament adheres to anything that touches it. A creature adhered to the filament is grappled by the cave fisher (escape DC 13), and ability checks made to escape this grapple have disadvantage. A creature can also cut the filament by dealing 5 slashing damage to it (AC 15). The filament deals 0 damage to things stuck to it." },
            { name: "Flammable Blood", description: "If the cave fisher drops to half its hit points or fewer, it gains vulnerability to fire damage." },
            { name: "Spider Climb", description: "The cave fisher can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The cave fisher makes two attacks with its claws." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Filament", description: "One creature grappled by the cave fisher's adhesive filament must make a DC 13 Strength saving throw, provided that the target weighs 200 pounds or less. On a failure, the target is pulled into an unoccupied space within 5 feet of the cave fisher, and the cave fisher makes a claw attack against it as a bonus action. Reeling up the target releases anyone else who was attached to the filament. Until the grapple ends on the target, the cave fisher can't extrude another filament." }
        ]
    },
    "chitine": {
        name: "Chitine",
        source: "VGtM",
        size: "small",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "hide armor",
        hp: 18,
        hitDice: "4d6+4",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 10, dex: 14, con: 12, int: 10, wis: 10, cha: 7 },
        skills: { athletics: 4, stealth: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Undercommon",
        cr: 0.5,
        environment: ["underdark"],
        role: "minion",
        tags: ["monstrosity"],
        traits: [
            { name: "Fey Ancestry", description: "The chitine has advantage on saving throws against being charmed, and magic can't put the chitine to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the chitine has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Sense", description: "While in contact with a web, the chitine knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The chitine ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The chitine makes three attacks with its daggers." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ]
    },
    "choldrith": {
        name: "Choldrith",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 12, dex: 16, con: 12, int: 11, wis: 14, cha: 10 },
        skills: { athletics: 5, religion: 2, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Undercommon",
        cr: 3,
        environment: ["underdark"],
        role: "controller",
        tags: ["monstrosity", "spellcaster"],
        traits: [
            { name: "Fey Ancestry", description: "The choldrith has advantage on saving throws against being charmed, and magic can't put the choldrith to sleep." },
            { name: "Spider Climb", description: "The choldrith can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the choldrith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Sense", description: "While in contact with a web, the choldrith knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The choldrith ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage plus 10 (3d6) poison damage." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one Large or smaller creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 11 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bane", "healing word"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon (dagger)"] }
            }
        }
    },

    // ===== More Misc =====
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
        senses: [],
        languages: "Giant",
        cr: 14,
        environment: ["mountain", "underdark"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Dual Shields", description: "The giant carries two shields, each of which is accounted for in the giant's AC. The giant must stow or drop one of its shields to hurl rocks." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two fireshield attacks." },
            { name: "Fireshield", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) bludgeoning damage plus 7 (2d6) fire damage plus 7 (2d6) piercing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +13 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage." },
            { name: "Shield Charge", description: "The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, that creature must succeed on a DC 21 Strength saving throw or take 36 (8d6+8) bludgeoning damage plus 14 (4d6) fire damage and be pushed up to 30 feet and knocked prone." }
        ]
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
        environment: ["arctic"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Extra Heads", description: "The giant has a 25 percent chance of having more than one head. If it has more than one, it has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." },
            { name: "Regeneration", description: "The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of the giant's next turn. The giant dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Vaprak's Rage (Recharges after a Short or Long Rest)", description: "As a bonus action, the giant can enter a rage at the start of its turn. The rage lasts for 1 minute or until the giant is incapacitated. While raging, the giant gains the following benefits: The giant has advantage on Strength checks and Strength saving throws. When it makes a melee weapon attack, the giant gains a +4 bonus to the damage roll. The giant has resistance to bludgeoning, piercing, and slashing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two attacks with its greataxe." },
            { name: "Greataxe", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 26 (3d12+7) slashing damage, or 30 (3d12+11) slashing damage while raging." },
            { name: "Rock", description: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    }
};

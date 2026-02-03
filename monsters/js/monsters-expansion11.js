// Expansion Pack 11 - Even More Comprehensive
// Filling remaining gaps

const MONSTERS_EXPANSION11 = {
    // ===== More Elementals =====
    "magmin": {
        name: "Magmin",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 12, int: 8, wis: 11, cha: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan",
        cr: 0.5,
        environment: ["mountain", "underdark"],
        role: "minion",
        tags: ["elemental", "fire"],
        traits: [
            { name: "Death Burst", description: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited." },
            { name: "Ignited Illumination", description: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Touch", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns." }
        ]
    },
    "gargoyle": {
        name: "Gargoyle",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 15, dex: 11, con: 16, int: 6, wis: 11, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Terran",
        cr: 2,
        environment: ["urban"],
        role: "soldier",
        tags: ["elemental"],
        traits: [
            { name: "False Appearance", description: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue." }
        ],
        actions: [
            { name: "Multiattack", description: "The gargoyle makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." }
        ]
    },
    "azer": {
        name: "Azer",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor, shield",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 10 },
        savingThrows: { con: 4 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: [],
        languages: "Ignan",
        cr: 2,
        environment: ["elemental planes"],
        role: "soldier",
        tags: ["elemental", "fire"],
        traits: [
            { name: "Heated Body", description: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage." },
            { name: "Heated Weapons", description: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)." },
            { name: "Illumination", description: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Warhammer", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage, or 8 (1d10+3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." }
        ]
    },
    "galeb-duhr": {
        name: "Galeb Duhr",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d8+45",
        speed: { walk: 15, burrow: 15 },
        abilityScores: { str: 20, dex: 14, con: 20, int: 11, wis: 12, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "Terran",
        cr: 6,
        environment: ["hill", "mountain"],
        role: "brute",
        tags: ["elemental", "earth"],
        traits: [
            { name: "False Appearance", description: "While the galeb duhr remains motionless, it is indistinguishable from a normal boulder." },
            { name: "Rolling Charge", description: "If the galeb duhr rolls at least 20 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) bludgeoning damage." },
            { name: "Animate Boulders (1/Day)", description: "The galeb duhr magically animates up to two boulders it can see within 60 feet of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell)." }
        ]
    },
    "invisible-stalker": {
        name: "Invisible Stalker",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 50, fly: 50 },
        abilityScores: { str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11 },
        skills: { perception: 8, stealth: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Auran, understands Common but doesn't speak it",
        cr: 6,
        environment: ["urban"],
        role: "lurker",
        tags: ["elemental", "air"],
        traits: [
            { name: "Invisibility", description: "The stalker is invisible." },
            { name: "Faultless Tracker", description: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner." }
        ],
        actions: [
            { name: "Multiattack", description: "The stalker makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." }
        ]
    },

    // ===== More Fey =====
    "green-hag": {
        name: "Green Hag",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 12, con: 16, int: 13, wis: 14, cha: 14 },
        skills: { arcana: 3, deception: 4, perception: 4, stealth: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic, Sylvan",
        cr: 3,
        environment: ["forest", "swamp", "hill"],
        role: "controller",
        tags: ["fey", "hag"],
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Mimicry", description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies." },
            { name: "Invisible Passage", description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["dancing lights", "minor illusion", "vicious mockery"]
            }
        }
    },
    "sea-hag": {
        name: "Sea Hag",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 16, dex: 13, con: 16, int: 12, wis: 12, cha: 13 },
        senses: ["darkvision 60 ft."],
        languages: "Aquan, Common, Giant",
        cr: 2,
        environment: ["coastal", "underwater"],
        role: "controller",
        tags: ["fey", "hag", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Horrific Appearance", description: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Death Glare", description: "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies." }
        ]
    },
    "annis-hag": {
        name: "Annis Hag",
        source: "VGtM",
        size: "large",
        type: "fey",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 12, con: 14, int: 13, wis: 14, cha: 15 },
        savingThrows: { con: 5 },
        skills: { deception: 5, perception: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Giant, Sylvan",
        cr: 6,
        environment: ["hill", "mountain"],
        role: "brute",
        tags: ["fey", "hag"],
        traits: [
            { name: "Hag Coven", description: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power." }
        ],
        actions: [
            { name: "Multiattack", description: "The annis makes three attacks: one with her bite and two with her claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) slashing damage." },
            { name: "Crushing Hug", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 36 (9d6+5) bludgeoning damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag's turns. The hag can't make attacks while grappling a creature in this way." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                "3/day each": ["disguise self (including the form of a Medium humanoid)", "fog cloud"]
            }
        }
    },
    "bheur-hag": {
        name: "Bheur Hag",
        source: "VGtM",
        size: "medium",
        type: "fey",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 91,
        hitDice: "14d8+28",
        speed: { walk: 30, fly: 50 },
        abilityScores: { str: 13, dex: 16, con: 14, int: 12, wis: 13, cha: 16 },
        savingThrows: { wis: 4 },
        skills: { nature: 4, perception: 4, stealth: 6, survival: 4 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Auran, Common, Giant",
        cr: 7,
        environment: ["arctic"],
        role: "controller",
        tags: ["fey", "hag", "cold"],
        traits: [
            { name: "Graystaff Magic", description: "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her Innate Spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff." },
            { name: "Ice Walk", description: "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost her extra moment." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8+1) bludgeoning damage plus 3 (1d6) cold damage." },
            { name: "Maddening Feast", description: "The hag feasts on the corpse of one enemy within reach that died within the past minute. Each creature of the hag's choice that is within 60 feet of her and able to see her must succeed on a DC 15 Wisdom saving throw or be frightened of her for 1 minute. While frightened in this way, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Maddening Feast for the next 24 hours." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            attack: 6,
            spells: {
                atWill: ["hold person*", "ray of frost"],
                "3/day each": ["cone of cold*", "ice storm*", "wall of ice*"],
                "1/day each": ["control weather"]
            }
        }
    },

    // ===== More Oozes =====
    "ochre-jelly": {
        name: "Ochre Jelly",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 15, dex: 6, con: 14, int: 2, wis: 6, cha: 1 },
        damageResistances: ["acid"],
        damageImmunities: ["lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "brute",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The jelly can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 3 (1d6) acid damage." }
        ],
        reactions: [
            { name: "Split", description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly." }
        ]
    },

    // ===== More Sphinxes =====
    "androsphinx": {
        name: "Androsphinx",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 199,
        hitDice: "19d10+95",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 22, dex: 10, con: 20, int: 16, wis: 18, cha: 23 },
        savingThrows: { dex: 6, con: 11, int: 9, wis: 10 },
        skills: { arcana: 9, perception: 10, religion: 15 },
        damageImmunities: ["psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "Common, Sphinx",
        cr: 17,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity", "sphinx"],
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10+6) slashing damage." },
            { name: "Roar (3/Day)", description: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different. First Roar: frightened for 1 minute, Second Roar: deafened and frightened for 1 minute, Third Roar: 44 (8d10) thunder damage and knocked prone." }
        ],
        legendaryActions: [
            { name: "Claw Attack", description: "The sphinx makes one claw attack." },
            { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 18,
            spells: {
                cantrips: ["sacred flame", "spare the dying", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "detect evil and good", "detect magic"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "zone of truth"] },
                "3rd": { slots: 3, spells: ["dispel magic", "tongues"] },
                "4th": { slots: 3, spells: ["banishment", "freedom of movement"] },
                "5th": { slots: 2, spells: ["flame strike", "greater restoration"] },
                "6th": { slots: 1, spells: ["heroes' feast"] }
            }
        }
    },
    "gynosphinx": {
        name: "Gynosphinx",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 18, wis: 18, cha: 18 },
        skills: { arcana: 12, history: 12, perception: 8, religion: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "Common, Sphinx",
        cr: 11,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity", "sphinx"],
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." }
        ],
        legendaryActions: [
            { name: "Claw Attack", description: "The sphinx makes one claw attack." },
            { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
        ],
        spellcasting: {
            ability: "int",
            dc: 16,
            spells: {
                cantrips: ["mage hand", "minor illusion", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "shield"] },
                "2nd": { slots: 3, spells: ["darkness", "locate object", "suggestion"] },
                "3rd": { slots: 3, spells: ["dispel magic", "remove curse", "tongues"] },
                "4th": { slots: 3, spells: ["banishment", "greater invisibility"] },
                "5th": { slots: 1, spells: ["legend lore"] }
            }
        }
    },

    // ===== More Misc =====
    "minotaur": {
        name: "Minotaur",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 76,
        hitDice: "9d10+27",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 11, con: 16, int: 6, wis: 16, cha: 9 },
        skills: { perception: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal",
        cr: 3,
        environment: ["underdark"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Charge", description: "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone." },
            { name: "Labyrinthine Recall", description: "The minotaur can perfectly recall any path it has traveled." },
            { name: "Reckless", description: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12+4) slashing damage." },
            { name: "Gore", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    "gorgon": {
        name: "Gorgon",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 19,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7 },
        skills: { perception: 4 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["grassland", "forest", "hill"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Trampling Charge", description: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12+5) piercing damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10+5) bludgeoning damage." },
            { name: "Petrifying Breath (Recharge 5-6)", description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic." }
        ]
    },
    "catoblepas": {
        name: "Catoblepas",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 12, con: 21, int: 3, wis: 14, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["swamp"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Smell", description: "The catoblepas has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Stench", description: "Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of any catoblepas for 1 hour." }
        ],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6+4) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be stunned until the start of the catoblepas's next turn." },
            { name: "Death Ray (Recharge 5-6)", description: "The catoblepas targets a creature it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray." }
        ]
    }
};

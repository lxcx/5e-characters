// Expansion Pack 20 - Final Push to 1200+
// More creatures to complete the library

const MONSTERS_EXPANSION20 = {
    // ===== More Elementals =====
    "phoenix": {
        name: "Phoenix",
        source: "MToF",
        size: "gargantuan",
        type: "elemental",
        alignment: "neutral",
        ac: 18,
        hp: 175,
        hitDice: "10d20+70",
        speed: { walk: 20, fly: 120 },
        abilityScores: { str: 19, dex: 26, con: 25, int: 2, wis: 21, cha: 18 },
        savingThrows: { wis: 10, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 16,
        environment: ["elemental planes"],
        role: "brute",
        tags: ["elemental", "fire"],
        traits: [
            { name: "Fiery Death and Rebirth", description: "When the phoenix dies, it explodes. Each creature within 60 feet of it must make a DC 20 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried. The explosion destroys the phoenix's body and leaves behind an egg-shaped cinder that weighs 5 pounds. The cinder is blazing hot, dealing 21 (6d6) fire damage to any creature that touches it, though no more than once per round. The cinder is immune to all damage, and after 1d6 days, it hatches a new phoenix." },
            { name: "Fire Form", description: "The phoenix can move through a space as narrow as 1 inch wide without squeezing. Any creature that touches the phoenix or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the phoenix can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage. With a touch, the phoenix can also ignite flammable objects that aren't worn or carried (no action required)." },
            { name: "Flyby", description: "The phoenix doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Illumination", description: "The phoenix sheds bright light in a 60-foot radius and dim light for an additional 30 feet." },
            { name: "Legendary Resistance (3/Day)", description: "If the phoenix fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The phoenix makes two attacks: one with its beak and one with its fiery talons." },
            { name: "Beak", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 15 (2d6+8) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns." },
            { name: "Fiery Talons", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8+8) fire damage." }
        ],
        legendaryActions: [
            { name: "Peck", description: "The phoenix makes one beak attack." },
            { name: "Move", description: "The phoenix moves up to its speed." },
            { name: "Swoop (Costs 2 Actions)", description: "The phoenix moves up to its speed and attacks with its fiery talons." }
        ]
    },
    "zaratan": {
        name: "Zaratan",
        source: "MToF",
        size: "gargantuan",
        type: "elemental",
        alignment: "neutral",
        ac: 21,
        acType: "natural armor",
        hp: 307,
        hitDice: "15d20+150",
        speed: { walk: 40, swim: 40 },
        abilityScores: { str: 30, dex: 10, con: 30, int: 2, wis: 21, cha: 18 },
        savingThrows: { wis: 12, cha: 11 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 22,
        environment: ["coastal", "desert", "forest", "grassland", "hill", "mountain"],
        role: "brute",
        tags: ["elemental", "earth"],
        traits: [
            { name: "Earth-Shaking Movement", description: "As a bonus action after moving at least 10 feet on the ground, the zaratan can send a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes difficult terrain for 1 minute. Each creature on the ground that is concentrating must succeed on a DC 25 Constitution saving throw or the creature's concentration is broken. The shock wave deals 100 thunder damage to all structures in contact with the ground in the area. If a creature is near a structure that collapses, the creature might be buried; a creature within half the distance of the structure's height must make a DC 25 Dexterity saving throw. On a failed save, the creature takes 17 (5d6) bludgeoning damage, is knocked prone, and is trapped in the rubble." },
            { name: "Legendary Resistance (3/Day)", description: "If the zaratan fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Weapons", description: "The zaratan's weapon attacks are magical." },
            { name: "Siege Monster", description: "The elemental deals double damage to objects and structures (included in Earth-Shaking Movement)." }
        ],
        actions: [
            { name: "Multiattack", description: "The zaratan makes two attacks: one with its bite and one with its stomp." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 28 (4d8+10) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 26 (3d10+10) bludgeoning damage." },
            { name: "Spit Rock", description: "Ranged Weapon Attack: +17 to hit, range 120/240 ft., one target. Hit: 31 (6d6+10) bludgeoning damage." },
            { name: "Swallow", description: "The zaratan makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the zaratan, and takes 28 (8d6) bludgeoning damage at the start of each of the zaratan's turns. A swallowed creature can cut its way free, emerging in a space of its choice within 10 feet of the zaratan, by dealing 30 or more slashing damage in a single turn." }
        ],
        legendaryActions: [
            { name: "Stomp", description: "The zaratan makes one stomp attack." },
            { name: "Move", description: "The zaratan moves up to its speed." },
            { name: "Spit (Costs 2 Actions)", description: "The zaratan uses Spit Rock." },
            { name: "Retract (Costs 2 Actions)", description: "The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is restrained. The next time it takes a legendary action, it must take its Emerge action." },
            { name: "Emerge (Costs 2 Actions)", description: "The zaratan emerges from its shell and uses Earth-Shaking Movement. It can use this action only if it previously used its Retract action." }
        ]
    },
    "leviathan": {
        name: "Leviathan",
        source: "MToF",
        size: "gargantuan",
        type: "elemental",
        alignment: "neutral",
        ac: 17,
        hp: 328,
        hitDice: "16d20+160",
        speed: { walk: 20, swim: 120 },
        abilityScores: { str: 30, dex: 18, con: 30, int: 2, wis: 18, cha: 17 },
        savingThrows: { wis: 10, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 20,
        environment: ["coastal", "underwater"],
        role: "brute",
        tags: ["elemental", "water"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the leviathan fails a saving throw, it can choose to succeed instead." },
            { name: "Partial Freeze", description: "If the leviathan takes 50 cold damage or more during a single turn, the leviathan partially freezes; until the end of its next turn, its speeds are reduced to 20 feet, and it makes attack rolls with disadvantage." },
            { name: "Siege Monster", description: "The leviathan deals double damage to objects and structures." },
            { name: "Water Form", description: "The leviathan can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
        ],
        actions: [
            { name: "Multiattack", description: "The leviathan makes two attacks: one with its slam and one with its tail." },
            { name: "Slam", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 15 (1d10+10) bludgeoning damage plus 5 (1d10) acid damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 16 (1d12+10) bludgeoning damage plus 6 (1d12) acid damage." },
            { name: "Tidal Wave (Recharge 6)", description: "While submerged, the leviathan magically creates a wall of water centered on itself. The wall is up 250 feet long, up to 250 feet high, and up to 50 feet thick, and it lasts until the leviathan's next turn. When the wall appears, all other creatures within its area must each make a DC 24 Strength saving throw. A creature takes 33 (6d10) bludgeoning damage on failed save, or half as much damage on a successful one. At the start of each of the leviathan's turns after the wall appears, the wall, along with any other creatures in it, moves 50 feet away from the leviathan. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a DC 24 Strength saving throw or take 27 (5d10) bludgeoning damage." }
        ],
        legendaryActions: [
            { name: "Slam (Costs 2 Actions)", description: "The leviathan makes one slam attack." },
            { name: "Move", description: "The leviathan moves up to its speed." }
        ]
    },

    // ===== More NPCs =====
    "swashbuckler": {
        name: "Swashbuckler",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 17,
        acType: "leather armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 18, con: 12, int: 14, wis: 11, cha: 15 },
        skills: { acrobatics: 8, athletics: 5, persuasion: 6 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["coastal", "urban"],
        role: "skirmisher",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Lightfooted", description: "The swashbuckler can take the Dash or Disengage action as a bonus action on each of its turns." },
            { name: "Suave Defense", description: "While the swashbuckler is wearing light or no armor and wielding no shield, its AC includes its Charisma modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The swashbuckler makes three attacks: one with a dagger and two with its rapier." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d4+4) piercing damage." },
            { name: "Rapier", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." }
        ]
    },
    "master-thief": {
        name: "Master Thief",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather",
        hp: 84,
        hitDice: "13d8+26",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 18, con: 14, int: 11, wis: 11, cha: 12 },
        savingThrows: { dex: 7, int: 3 },
        skills: { acrobatics: 7, athletics: 3, perception: 3, sleight: 7, stealth: 7 },
        senses: [],
        languages: "any one language (usually Common) plus thieves' cant",
        cr: 5,
        environment: ["urban"],
        role: "lurker",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the thief can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Evasion", description: "If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Sneak Attack (1/Turn)", description: "The thief deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the thief that isn't incapacitated and the thief doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The thief makes three attacks with its shortsword." },
            { name: "Shortsword", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 8 (1d8+4) piercing damage." }
        ],
        reactions: [
            { name: "Uncanny Dodge", description: "The thief halves the damage that it takes from an attack that hits it. The thief must be able to see the attacker." }
        ]
    },
    "bard": {
        name: "Bard",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 15,
        acType: "chain shirt",
        hp: 44,
        hitDice: "8d8+8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 14, con: 12, int: 10, wis: 13, cha: 14 },
        savingThrows: { dex: 4, wis: 3 },
        skills: { acrobatics: 4, perception: 5, performance: 6 },
        senses: [],
        languages: "any two languages",
        cr: 2,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Song of Rest", description: "The bard can perform a song while taking a short rest. Any ally who hears the song regains an extra 1d6 hit points if it spends any Hit Dice to regain hit points at the end of that rest. The bard can confer this benefit on itself as well." },
            { name: "Taunt (2/Day)", description: "The bard can use a bonus action on its turn to target one creature within 30 feet of it. If the target can hear the bard, the target must succeed on a DC 12 Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of the bard's next turn." }
        ],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["friends", "mage hand", "vicious mockery"],
                "1st": { slots: 4, spells: ["charm person", "healing word", "heroism", "sleep", "thunderwave"] },
                "2nd": { slots: 3, spells: ["invisibility", "shatter"] }
            }
        }
    },
    "illusionist": {
        name: "Illusionist",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 13, int: 16, wis: 11, cha: 12 },
        savingThrows: { int: 5, wis: 2 },
        skills: { arcana: 5, history: 5 },
        senses: [],
        languages: "any four languages",
        cr: 3,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Displacement (Recharges after the Illusionist Casts an Illusion Spell of 1st Level or Higher)", description: "As a bonus action, the illusionist projects an illusion that makes the illusionist appear to be standing in a place a few inches from its actual location, causing any creature to have disadvantage on attack rolls against the illusionist. The effect ends if the illusionist takes damage, it is incapacitated, or its speed becomes 0." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["dancing lights", "mage hand", "minor illusion", "poison spray"],
                "1st": { slots: 4, spells: ["color spray", "disguise self", "mage armor", "silent image"] },
                "2nd": { slots: 3, spells: ["invisibility", "mirror image", "phantasmal force"] },
                "3rd": { slots: 3, spells: ["major image", "phantom steed"] },
                "4th": { slots: 1, spells: ["phantasmal killer"] }
            }
        }
    },
    "transmuter": {
        name: "Transmuter",
        source: "VGtM",
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
        cr: 5,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Transmuter's Stone", description: "The transmuter carries a magic stone it crafted that grants its bearer one of the following effects: Darkvision out to a range of 60 feet, An extra 10 feet of speed while the bearer is unencumbered, Proficiency with Constitution saving throws, Resistance to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever the transmuter chooses this benefit). If the transmuter has the stone and casts a transmutation spell of 1st level or higher, it can change the effect of the stone." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["light", "mending", "prestidigitation", "true strike"],
                "1st": { slots: 4, spells: ["chromatic orb", "expeditious retreat", "mage armor"] },
                "2nd": { slots: 3, spells: ["alter self", "hold person", "knock"] },
                "3rd": { slots: 3, spells: ["blink", "fireball", "slow"] },
                "4th": { slots: 3, spells: ["polymorph", "stoneskin"] },
                "5th": { slots: 1, spells: ["telekinesis"] }
            }
        }
    }
};

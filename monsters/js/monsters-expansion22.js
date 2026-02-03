// Expansion Pack 22 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION22 = {
    // ===== More Demons =====
    "dybbuk": {
        name: "Dybbuk",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 14,
        hp: 37,
        hitDice: "5d8+15",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 6, dex: 19, con: 16, int: 16, wis: 15, cha: 14 },
        skills: { deception: 6, intimidation: 4, perception: 4 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, telepathy 120 ft.",
        cr: 4,
        environment: ["abyss"],
        role: "lurker",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Incorporeal Movement", description: "The dybbuk can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Magic Resistance", description: "The dybbuk has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tendril", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) necrotic damage. If the target is a creature, its hit point maximum is also reduced by 3 (1d6). This reduction lasts until the target finishes a short or long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Possess Corpse (Recharge 6)", description: "The dybbuk disappears into an intact corpse it can see within 5 feet of it. The corpse must be Large or smaller and be that of a beast or a humanoid. The dybbuk is now effectively the possessed creature. Its type becomes undead, though it now looks alive, and it gains a number of temporary hit points equal to the corpse's hit point maximum in life. While possessing the corpse, the dybbuk retains its hit points, alignment, Intelligence, Wisdom, Charisma, telepathy, and immunity to poison damage, exhaustion, and being charmed and frightened. It otherwise uses the possessed target's game statistics, gaining access to its knowledge and proficiencies but not its class features, if any. The possession lasts until the temporary hit points are lost (at which point the body becomes combust) or the dybbuk ends its possession using a bonus action. When the possession ends, the dybbuk reappears in an unoccupied space within 5 feet of the corpse." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["dimension door"],
                "3/day": ["fear", "phantasmal force"]
            }
        }
    },
    "maurezhi": {
        name: "Maurezhi",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 88,
        hitDice: "16d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 17, con: 12, int: 11, wis: 12, cha: 15 },
        skills: { deception: 5 },
        damageResistances: ["cold", "fire", "lightning", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Elvish, telepathy 120 ft.",
        cr: 7,
        environment: ["abyss"],
        role: "lurker",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Assume Form", description: "The maurezhi can assume the appearance of any Medium humanoid it has eaten. It remains in this form for 1d6 days, during which time the form gradually decays until, when the effect ends, the form dies and the maurezhi reverts to its true form." },
            { name: "Magic Resistance", description: "The maurezhi has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The maurezhi makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) piercing damage. If the target is a humanoid, its Charisma score is reduced by 1d4. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a ghoul, unless it is revived or its corpse is destroyed." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 12 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Raise Ghoul (Recharge 5-6)", description: "The maurezhi targets one dead ghoul or ghast it can see within 30 feet of it. The target is revived with all its hit points." }
        ]
    },
    "sibriex": {
        name: "Sibriex",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 150,
        hitDice: "12d12+72",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 3, con: 23, int: 25, wis: 24, cha: 25 },
        savingThrows: { int: 13, cha: 13 },
        skills: { arcana: 13, history: 13, perception: 13 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 18,
        environment: ["abyss"],
        role: "controller",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Contamination", description: "The sibriex emits an aura of corruption 30 feet in every direction. Plants that aren't creatures wither in the aura, and the ground in it is difficult terrain for other creatures. Any creature that starts its turn in the aura must succeed on a DC 20 Constitution saving throw or take 14 (4d6) poison damage. A creature that succeeds on the save is immune to this sibriex's Contamination for 24 hours." },
            { name: "Legendary Resistance (3/Day)", description: "If the sibriex fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The sibriex has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The sibriex uses Squirt Bile once and makes three attacks using its chain, bite, or both." },
            { name: "Chain", description: "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 20 (2d12+7) piercing damage." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d8) piercing damage plus 9 (2d8) acid damage." },
            { name: "Squirt Bile", description: "The sibriex targets one creature it can see within 120 feet of it. The target must succeed on a DC 20 Dexterity saving throw or take 35 (10d6) acid damage." },
            { name: "Warp Creature", description: "The sibriex targets up to three creatures it can see within 120 feet of it. Each target must make a DC 20 Constitution saving throw. On a successful save, a creature becomes immune to this sibriex's Warp Creature. On a failed save, the target is poisoned, which causes it to also gain 1 level of exhaustion. While poisoned in this way, the target must repeat the saving throw at the start of each of its turns. Three successful saves against the poison end it, and ending the poison removes any levels of exhaustion caused by it. Each failed save causes the target to suffer another level of exhaustion. Once the target reaches 6 levels of exhaustion, it dies and instantly transforms into a living abyssal wretch under the sibriex's control. The transformation of the body can be undone only by a wish spell." }
        ],
        legendaryActions: [
            { name: "Cast a Spell", description: "The sibriex casts a spell." },
            { name: "Spray Bile", description: "The sibriex uses Squirt Bile." },
            { name: "Warp (Costs 2 Actions)", description: "The sibriex uses Warp Creature." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["charm person", "command", "dispel magic", "hold monster"],
                "3/day": ["feeblemind"]
            }
        }
    },

    // ===== More Celestials =====
    "ki-rin": {
        name: "Ki-rin",
        source: "VGtM",
        size: "huge",
        type: "celestial",
        alignment: "lawful good",
        ac: 20,
        acType: "natural armor",
        hp: 152,
        hitDice: "16d12+48",
        speed: { walk: 60, fly: 120 },
        abilityScores: { str: 21, dex: 16, con: 16, int: 19, wis: 20, cha: 20 },
        skills: { insight: 9, perception: 9, religion: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 12,
        environment: ["coastal", "desert", "grassland", "mountain"],
        role: "controller",
        tags: ["celestial", "spellcaster"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the ki-rin fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The ki-rin has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The ki-rin's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The ki-rin makes three attacks: two with its hooves and one with its horn." },
            { name: "Hoof", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 10 (2d4+5) bludgeoning damage." },
            { name: "Horn", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) piercing damage." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The ki-rin makes a Wisdom (Perception) check or a Wisdom (Insight) check." },
            { name: "Smite", description: "The ki-rin makes a hoof attack or casts sacred flame." },
            { name: "Move", description: "The ki-rin moves up to its half its speed without provoking opportunity attacks." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["gaseous form", "major image", "wind walk"],
                "1/day": ["create food and water"]
            }
        }
    },

    // ===== More Monstrosities =====
    "froghemoth": {
        name: "Froghemoth",
        source: "VGtM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d12+80",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 23, dex: 13, con: 20, int: 2, wis: 12, cha: 5 },
        savingThrows: { con: 9, wis: 5 },
        skills: { perception: 9, stealth: 5 },
        damageResistances: ["fire", "lightning"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 10,
        environment: ["swamp"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Amphibious", description: "The froghemoth can breathe air and water." },
            { name: "Shock Susceptibility", description: "If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both." }
        ],
        actions: [
            { name: "Multiattack", description: "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite." },
            { name: "Tentacle", description: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8+6) bludgeoning damage, and the target is grappled (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth's turns. The froghemoth's gullet can hold up to two creatures at a time. If the froghemoth takes 20 damage or more on a single turn from a creature inside it, the froghemoth must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls prone in a space within 10 feet of the froghemoth. If the froghemoth dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone." },
            { name: "Tongue", description: "The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action." }
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
            { name: "Death Ray (Recharge 5-6)", description: "The catoblepas targets one creature it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray." }
        ]
    },

    // ===== More Dragons =====
    "dragon-turtle": {
        name: "Dragon Turtle",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "neutral",
        ac: 20,
        acType: "natural armor",
        hp: 341,
        hitDice: "22d20+110",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 25, dex: 10, con: 20, int: 10, wis: 12, cha: 12 },
        savingThrows: { dex: 6, con: 11, wis: 7 },
        damageResistances: ["fire"],
        senses: ["darkvision 120 ft."],
        languages: "Aquan, Draconic",
        cr: 17,
        environment: ["coastal", "underwater"],
        role: "brute",
        tags: ["dragon"],
        traits: [
            { name: "Amphibious", description: "The dragon turtle can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12+7) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8+7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12+7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone." },
            { name: "Steam Breath (Recharge 5-6)", description: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage." }
        ]
    }
};

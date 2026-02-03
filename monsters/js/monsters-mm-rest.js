// D&D 5E Monster Manual - Key Monsters H-Z
// Source: Monster Manual (MM)

const monstersMM_Rest = {
    // ===== H =====
    "harpy": {
        name: "Harpy",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 11,
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: "20 ft.", fly: "40 ft." },
        abilityScores: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 },
        senses: ["passive Perception 10"],
        languages: "Common",
        cr: 1,
        actions: [
            { name: "Multiattack", description: "The harpy makes two attacks: one with its claws and one with its club." },
            { name: "Claws", type: "melee", attackBonus: 3, reach: 5, damage: "2d4+1 slashing" },
            { name: "Club", type: "melee", attackBonus: 3, reach: 5, damage: "1d4+1 bludgeoning" },
            { name: "Luring Song", description: "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\n\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 feet away from the harpy, the target must move on its turn toward the harpy by the most direct route, trying to get within 5 feet. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.\n\nA target that successfully saves is immune to this harpy's song for the next 24 hours." }
        ]
    },
    "hell-hound": {
        name: "Hell Hound",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hitDice: "7d8+14",
        speed: { walk: "50 ft." },
        abilityScores: { str: 17, dex: 12, con: 14, int: 6, wis: 13, cha: 6 },
        skills: { perception: 5 },
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: "understands Infernal but can't speak it",
        cr: 3,
        traits: [
            { name: "Keen Hearing and Smell", description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 piercing plus 2d6 fire" },
            { name: "Fire Breath (Recharge 5-6)", description: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "hill-giant": {
        name: "Hill Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 105,
        hitDice: "10d12+40",
        speed: { walk: "40 ft." },
        abilityScores: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
        skills: { perception: 2 },
        senses: ["passive Perception 12"],
        languages: "Giant",
        cr: 5,
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", type: "melee", attackBonus: 8, reach: 10, damage: "3d8+5 bludgeoning" },
            { name: "Rock", type: "ranged", attackBonus: 8, range: "60/240 ft.", damage: "3d10+5 bludgeoning" }
        ]
    },
    "hippogriff": {
        name: "Hippogriff",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: "40 ft.", fly: "60 ft." },
        abilityScores: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
        skills: { perception: 5 },
        senses: ["passive Perception 15"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Sight", description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The hippogriff makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", type: "melee", attackBonus: 5, reach: 5, damage: "1d10+3 piercing" },
            { name: "Claws", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 slashing" }
        ]
    },
    "hobgoblin": {
        name: "Hobgoblin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["goblinoid"],
        alignment: "lawful evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "30 ft." },
        abilityScores: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common, Goblin",
        cr: 0.5,
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Longsword", type: "melee", attackBonus: 3, reach: 5, damage: "1d8+1 slashing (1d10+1 two-handed)" },
            { name: "Longbow", type: "ranged", attackBonus: 3, range: "150/600 ft.", damage: "1d8+1 piercing" }
        ]
    },
    "homunculus": {
        name: "Homunculus",
        source: "MM",
        size: "tiny",
        type: "construct",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 5,
        hitDice: "2d4",
        speed: { walk: "20 ft.", fly: "40 ft." },
        abilityScores: { str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "understands the languages of its creator but can't speak",
        cr: 0,
        traits: [
            { name: "Telepathic Bond", description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1 piercing", additionalText: "The target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way." }
        ]
    },
    "hook-horror": {
        name: "Hook Horror",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 18, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft.", "darkvision 10 ft.", "passive Perception 13"],
        languages: "Hook Horror",
        cr: 3,
        traits: [
            { name: "Echolocation", description: "The hook horror can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Multiattack", description: "The hook horror makes two hook attacks." },
            { name: "Hook", type: "melee", attackBonus: 6, reach: 10, damage: "2d6+4 piercing" }
        ]
    },
    "horned-devil": {
        name: "Horned Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: "20 ft.", fly: "60 ft." },
        abilityScores: { str: 22, dex: 17, con: 21, int: 12, wis: 16, cha: 17 },
        savingThrows: { str: 10, dex: 7, wis: 7, cha: 7 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 11,
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack." },
            { name: "Fork", type: "melee", attackBonus: 10, reach: 10, damage: "2d8+6 piercing" },
            { name: "Tail", type: "melee", attackBonus: 10, reach: 10, damage: "1d8+6 piercing", additionalText: "If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." },
            { name: "Hurl Flame", type: "ranged", attackBonus: 7, range: "150 ft.", damage: "4d6 fire", additionalText: "If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ]
    },
    "hydra": {
        name: "Hydra",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 172,
        hitDice: "15d12+75",
        speed: { walk: "30 ft.", swim: "30 ft." },
        abilityScores: { str: 20, dex: 12, con: 20, int: 2, wis: 10, cha: 7 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 16"],
        languages: "—",
        cr: 8,
        traits: [
            { name: "Hold Breath", description: "The hydra can hold its breath for 1 hour." },
            { name: "Multiple Heads", description: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\n\nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.\n\nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way." },
            { name: "Reactive Heads", description: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks." },
            { name: "Wakeful", description: "While the hydra sleeps, at least one of its heads is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The hydra makes as many bite attacks as it has heads." },
            { name: "Bite", type: "melee", attackBonus: 8, reach: 10, damage: "1d10+5 piercing" }
        ]
    },

    // ===== I-K =====
    "ice-devil": {
        name: "Ice Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: "40 ft." },
        abilityScores: { str: 21, dex: 14, con: 18, int: 18, wis: 15, cha: 18 },
        savingThrows: { dex: 7, con: 9, wis: 7, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 12"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 14,
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail." },
            { name: "Bite", type: "melee", attackBonus: 10, reach: 5, damage: "2d6+5 piercing plus 3d6 cold" },
            { name: "Claws", type: "melee", attackBonus: 10, reach: 5, damage: "2d4+5 slashing plus 3d6 cold" },
            { name: "Tail", type: "melee", attackBonus: 10, reach: 10, damage: "2d6+5 bludgeoning plus 3d6 cold" },
            { name: "Wall of Ice (Recharge 6)", description: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\n\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.\n\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes." }
        ]
    },
    "imp": {
        name: "Imp",
        source: "MM",
        size: "tiny",
        type: "fiend",
        tags: ["devil", "shapechanger"],
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: "20 ft.", fly: "40 ft." },
        abilityScores: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14 },
        skills: { deception: 4, insight: 3, persuasion: 4, stealth: 5 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: "Infernal, Common",
        cr: 1,
        traits: [
            { name: "Shapechanger", description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the imp's darkvision." },
            { name: "Magic Resistance", description: "The imp has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Sting (Bite in Beast Form)", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+3 piercing", additionalText: "The target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Invisibility", description: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it." }
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
        speed: { walk: "50 ft.", fly: "50 ft. (hover)" },
        abilityScores: { str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11 },
        skills: { perception: 8, stealth: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 18"],
        languages: "Auran, understands Common but doesn't speak it",
        cr: 6,
        traits: [
            { name: "Invisibility", description: "The stalker is invisible." },
            { name: "Faultless Tracker", description: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner." }
        ],
        actions: [
            { name: "Multiattack", description: "The stalker makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+3 bludgeoning" }
        ]
    },
    "kobold": {
        name: "Kobold",
        source: "MM",
        size: "small",
        type: "humanoid",
        tags: ["kobold"],
        alignment: "lawful evil",
        ac: 12,
        hp: 5,
        hitDice: "2d6-2",
        speed: { walk: "30 ft." },
        abilityScores: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: "Common, Draconic",
        cr: 0.125,
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Dagger", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing" },
            { name: "Sling", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d4+2 bludgeoning" }
        ]
    },
    "kraken": {
        name: "Kraken",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        tags: ["titan"],
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 472,
        hitDice: "27d20+189",
        speed: { walk: "20 ft.", swim: "60 ft." },
        abilityScores: { str: 30, dex: 11, con: 25, int: 22, wis: 18, cha: 20 },
        savingThrows: { str: 17, dex: 7, con: 14, int: 13, wis: 11 },
        damageImmunities: ["lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["frightened", "paralyzed"],
        senses: ["truesight 120 ft.", "passive Perception 14"],
        languages: "understands Abyssal, Celestial, Infernal, and Primordial but can't speak, telepathy 120 ft.",
        cr: 23,
        traits: [
            { name: "Amphibious", description: "The kraken can breathe air and water." },
            { name: "Freedom of Movement", description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled." },
            { name: "Siege Monster", description: "The kraken deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling." },
            { name: "Bite", type: "melee", attackBonus: 17, reach: 5, damage: "3d8+10 piercing", additionalText: "If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone." },
            { name: "Tentacle", type: "melee", attackBonus: 17, reach: 30, damage: "3d6+10 bludgeoning", additionalText: "The target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target." },
            { name: "Fling", description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone." },
            { name: "Lightning Storm", description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Tentacle Attack or Fling", cost: 1, description: "The kraken makes one tentacle attack or uses its Fling." },
                { name: "Lightning Storm (Costs 2 Actions)", cost: 2, description: "The kraken uses Lightning Storm." },
                { name: "Ink Cloud (Costs 3 Actions)", cost: 3, description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn." }
            ]
        }
    },

    // ===== L-M =====
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16 },
        savingThrows: { con: 10, int: 12, wis: 9 },
        skills: { arcana: 19, history: 12, insight: 9, perception: 9 },
        damageResistances: ["cold", "lightning", "necrotic"],
        damageImmunities: ["poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 19"],
        languages: "Common plus up to five other languages",
        cr: 21,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the lich fails a saving throw, it can choose to succeed instead." },
            { name: "Rejuvenation", description: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery." },
            { name: "Turn Resistance", description: "The lich has advantage on saving throws against any effect that turns undead." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 20,
            attackBonus: 12,
            level: 18,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
            spells: {
                cantrips: ["mage-hand", "prestidigitation", "ray-of-frost"],
                1: ["detect-magic", "magic-missile", "shield", "thunderwave"],
                2: ["detect-thoughts", "invisibility", "melfs-acid-arrow", "mirror-image"],
                3: ["animate-dead", "counterspell", "dispel-magic", "fireball"],
                4: ["blight", "dimension-door"],
                5: ["cloudkill", "scrying"],
                6: ["disintegrate", "globe-of-invulnerability"],
                7: ["finger-of-death", "plane-shift"],
                8: ["dominate-monster", "power-word-stun"],
                9: ["power-word-kill"]
            }
        },
        actions: [
            { name: "Paralyzing Touch", type: "melee", attackBonus: 12, reach: 5, damage: "3d6 cold", additionalText: "The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Cantrip", cost: 1, description: "The lich casts a cantrip." },
                { name: "Paralyzing Touch (Costs 2 Actions)", cost: 2, description: "The lich uses its Paralyzing Touch." },
                { name: "Frightening Gaze (Costs 2 Actions)", cost: 2, description: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours." },
                { name: "Disrupt Life (Costs 3 Actions)", cost: 3, description: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one." }
            ]
        }
    },
    "lion": {
        name: "Lion",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: "50 ft." },
        abilityScores: { str: 17, dex: 15, con: 13, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The lion has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Pounce", description: "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action." },
            { name: "Running Leap", description: "With a 10-foot running start, the lion can long jump up to 25 feet." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 piercing" },
            { name: "Claw", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 slashing" }
        ]
    },
    "mage": {
        name: "Mage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 40,
        hitDice: "9d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11 },
        savingThrows: { int: 6, wis: 4 },
        skills: { arcana: 6, history: 6 },
        senses: ["passive Perception 11"],
        languages: "any four languages",
        cr: 6,
        spellcasting: {
            ability: "int",
            saveDC: 14,
            attackBonus: 6,
            level: 9,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
            spells: {
                cantrips: ["fire-bolt", "light", "mage-hand", "prestidigitation"],
                1: ["detect-magic", "mage-armor", "magic-missile", "shield"],
                2: ["misty-step", "suggestion"],
                3: ["counterspell", "fireball", "fly"],
                4: ["greater-invisibility", "ice-storm"],
                5: ["cone-of-cold"]
            }
        },
        actions: [
            { name: "Dagger", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+2 piercing" }
        ]
    },
    "mammoth": {
        name: "Mammoth",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: "40 ft." },
        abilityScores: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 6,
        traits: [
            { name: "Trampling Charge", description: "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", type: "melee", attackBonus: 10, reach: 10, damage: "4d8+7 piercing" },
            { name: "Stomp", type: "melee", attackBonus: 10, reach: 5, damage: "4d10+7 bludgeoning" }
        ]
    },
    "manticore": {
        name: "Manticore",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 14,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: "30 ft.", fly: "50 ft." },
        abilityScores: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "Common",
        cr: 3,
        traits: [
            { name: "Tail Spike Regrowth", description: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest." }
        ],
        actions: [
            { name: "Multiattack", description: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes." },
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 piercing" },
            { name: "Claw", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 slashing" },
            { name: "Tail Spike", type: "ranged", attackBonus: 5, range: "100/200 ft.", damage: "1d8+3 piercing" }
        ]
    },
    "medusa": {
        name: "Medusa",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 15, con: 16, int: 12, wis: 13, cha: 15 },
        skills: { deception: 5, insight: 4, perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Common",
        cr: 6,
        traits: [
            { name: "Petrifying Gaze", description: "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.\n\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.\n\nIf the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze." }
        ],
        actions: [
            { name: "Multiattack", description: "The medusa makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow." },
            { name: "Snake Hair", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+2 piercing plus 4d6 poison" },
            { name: "Shortsword", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+2 piercing" },
            { name: "Longbow", type: "ranged", attackBonus: 5, range: "150/600 ft.", damage: "1d8+2 piercing plus 2d6 poison" }
        ]
    },
    "merfolk": {
        name: "Merfolk",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["merfolk"],
        alignment: "neutral",
        ac: 11,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "10 ft.", swim: "40 ft." },
        abilityScores: { str: 10, dex: 13, con: 12, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2 },
        senses: ["passive Perception 12"],
        languages: "Aquan, Common",
        cr: 0.125,
        traits: [
            { name: "Amphibious", description: "The merfolk can breathe air and water." }
        ],
        actions: [
            { name: "Spear", type: "melee", attackBonus: 2, reach: 5, damage: "1d6 piercing (1d8 two-handed)" },
            { name: "Spear (Ranged)", type: "ranged", attackBonus: 2, range: "20/60 ft.", damage: "1d6 piercing" }
        ]
    },
    "mimic": {
        name: "Mimic",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        tags: ["shapechanger"],
        alignment: "neutral",
        ac: 12,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: "15 ft." },
        abilityScores: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
        skills: { stealth: 5 },
        damageImmunities: ["acid"],
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Shapechanger", description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Adhesive (Object Form Only)", description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage." },
            { name: "False Appearance (Object Form Only)", description: "While the mimic remains motionless, it is indistinguishable from an ordinary object." },
            { name: "Grappler", description: "The mimic has advantage on attack rolls against any creature grappled by it." }
        ],
        actions: [
            { name: "Pseudopod", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 bludgeoning", additionalText: "If the mimic is in object form, the target is subjected to its Adhesive trait." },
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 piercing plus 1d8 acid" }
        ]
    },
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
        savingThrows: { int: 7, wis: 6, cha: 6 },
        skills: { arcana: 7, deception: 6, insight: 6, perception: 6, persuasion: 6, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 7,
        traits: [
            { name: "Magic Resistance", description: "The mind flayer has advantage on saving throws against spells and other magical effects." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 15,
            innate: true,
            spells: {
                "at will": ["detect-thoughts", "levitate"],
                "1/day each": ["dominate-monster", "plane-shift (self only)"]
            }
        },
        actions: [
            { name: "Tentacles", type: "melee", attackBonus: 7, reach: 5, damage: "2d10+4 psychic", additionalText: "If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
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
        speed: { walk: "40 ft." },
        abilityScores: { str: 18, dex: 11, con: 16, int: 6, wis: 16, cha: 9 },
        skills: { perception: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 17"],
        languages: "Abyssal",
        cr: 3,
        traits: [
            { name: "Charge", description: "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone." },
            { name: "Labyrinthine Recall", description: "The minotaur can perfectly recall any path it has traveled." },
            { name: "Reckless", description: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", type: "melee", attackBonus: 6, reach: 5, damage: "2d12+4 slashing" },
            { name: "Gore", type: "melee", attackBonus: 6, reach: 5, damage: "2d8+4 piercing" }
        ]
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
        speed: { walk: "20 ft." },
        abilityScores: { str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12 },
        savingThrows: { wis: 2 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "the languages it knew in life",
        cr: 3,
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 bludgeoning plus 3d6 necrotic", additionalText: "If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic." },
            { name: "Dreadful Glare", description: "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours." }
        ]
    },

    // ===== N-O =====
    "nightmare": {
        name: "Nightmare",
        source: "MM",
        size: "large",
        type: "fiend",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: "60 ft.", fly: "90 ft." },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15 },
        damageImmunities: ["fire"],
        senses: ["passive Perception 11"],
        languages: "understands Abyssal, Common, and Infernal but can't speak",
        cr: 3,
        traits: [
            { name: "Confer Fire Resistance", description: "The nightmare can grant resistance to fire damage to anyone riding it." },
            { name: "Illumination", description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "2d8+4 bludgeoning plus 2d6 fire" },
            { name: "Ethereal Stride", description: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    },
    "noble": {
        name: "Noble",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 15,
        acType: "breastplate",
        hp: 9,
        hitDice: "2d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 12, con: 11, int: 12, wis: 14, cha: 16 },
        skills: { deception: 5, insight: 4, persuasion: 5 },
        senses: ["passive Perception 12"],
        languages: "any two languages",
        cr: 0.125,
        actions: [
            { name: "Rapier", type: "melee", attackBonus: 3, reach: 5, damage: "1d8+1 piercing" }
        ],
        reactions: [
            { name: "Parry", description: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon." }
        ]
    },
    "ochre-jelly": {
        name: "Ochre Jelly",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: "10 ft.", climb: "10 ft." },
        abilityScores: { str: 15, dex: 6, con: 14, int: 2, wis: 6, cha: 1 },
        damageResistances: ["acid"],
        damageImmunities: ["lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Amorphous", description: "The jelly can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 bludgeoning plus 1d6 acid" }
        ],
        reactions: [
            { name: "Split", description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly." }
        ]
    },
    "ogre": {
        name: "Ogre",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 11,
        acType: "hide armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: "40 ft." },
        abilityScores: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: "Common, Giant",
        cr: 2,
        actions: [
            { name: "Greatclub", type: "melee", attackBonus: 6, reach: 5, damage: "2d8+4 bludgeoning" },
            { name: "Javelin", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 piercing" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 6, range: "30/120 ft.", damage: "2d6+4 piercing" }
        ]
    },
    "oni": {
        name: "Oni",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "lawful evil",
        ac: 16,
        acType: "chain mail",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: "30 ft.", fly: "30 ft." },
        abilityScores: { str: 19, dex: 11, con: 16, int: 14, wis: 12, cha: 15 },
        savingThrows: { dex: 3, con: 6, wis: 4, cha: 5 },
        skills: { arcana: 5, deception: 8, perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Common, Giant",
        cr: 7,
        traits: [
            { name: "Magic Weapons", description: "The oni's weapon attacks are magical." },
            { name: "Regeneration", description: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 13,
            innate: true,
            spells: {
                "at will": ["darkness", "invisibility"],
                "1/day each": ["charm-person", "cone-of-cold", "gaseous-form", "sleep"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The oni makes two attacks, either with its claws or its glaive." },
            { name: "Claw (Oni Form Only)", type: "melee", attackBonus: 7, reach: 5, damage: "1d8+4 slashing" },
            { name: "Glaive", type: "melee", attackBonus: 7, reach: 10, damage: "2d10+4 slashing (1d10+4 in Small or Medium form)" },
            { name: "Change Shape", description: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size." }
        ]
    },
    "orc": {
        name: "Orc",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["orc"],
        alignment: "chaotic evil",
        ac: 13,
        acType: "hide armor",
        hp: 15,
        hitDice: "2d8+6",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
        skills: { intimidation: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common, Orc",
        cr: 0.5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." }
        ],
        actions: [
            { name: "Greataxe", type: "melee", attackBonus: 5, reach: 5, damage: "1d12+3 slashing" },
            { name: "Javelin", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 piercing" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 5, range: "30/120 ft.", damage: "1d6+3 piercing" }
        ]
    },
    "otyugh": {
        name: "Otyugh",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6 },
        savingThrows: { con: 7 },
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: "Otyugh",
        cr: 5,
        traits: [
            { name: "Limited Telepathy", description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond." }
        ],
        actions: [
            { name: "Multiattack", description: "The otyugh makes three attacks: one with its bite and two with its tentacles." },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "2d8+3 piercing", additionalText: "If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured." },
            { name: "Tentacle", type: "melee", attackBonus: 6, reach: 10, damage: "1d8+3 bludgeoning plus 1d8 piercing", additionalText: "If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target." },
            { name: "Tentacle Slam", description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6+3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned." }
        ]
    },
    "owlbear": {
        name: "Owlbear",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: "40 ft." },
        abilityScores: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Keen Sight and Smell", description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The owlbear makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", type: "melee", attackBonus: 7, reach: 5, damage: "1d10+5 piercing" },
            { name: "Claws", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+5 slashing" }
        ]
    },

    // ===== P-R =====
    "pegasus": {
        name: "Pegasus",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "chaotic good",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: "60 ft.", fly: "90 ft." },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 15, cha: 13 },
        savingThrows: { dex: 4, wis: 4, cha: 3 },
        skills: { perception: 6 },
        senses: ["passive Perception 16"],
        languages: "understands Celestial, Common, Elvish, and Sylvan but can't speak",
        cr: 2,
        actions: [
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 bludgeoning" }
        ]
    },
    "phase-spider": {
        name: "Phase Spider",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d10+5",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 15, dex: 15, con: 12, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Ethereal Jaunt", description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa." },
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d10+2 piercing", additionalText: "The target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "pit-fiend": {
        name: "Pit Fiend",
        source: "MM",
        size: "large",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 300,
        hitDice: "24d10+168",
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 24 },
        savingThrows: { dex: 8, con: 13, wis: 10 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 14"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 20,
        traits: [
            { name: "Fear Aura", description: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours." },
            { name: "Magic Resistance", description: "The pit fiend has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The pit fiend's weapon attacks are magical." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 21,
            innate: true,
            spells: {
                "at will": ["detect-magic", "fireball"],
                "3/day each": ["hold-monster", "wall-of-fire"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail." },
            { name: "Bite", type: "melee", attackBonus: 14, reach: 5, damage: "4d6+8 piercing", additionalText: "The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claw", type: "melee", attackBonus: 14, reach: 10, damage: "2d8+8 slashing" },
            { name: "Mace", type: "melee", attackBonus: 14, reach: 10, damage: "2d6+8 bludgeoning plus 6d6 fire" },
            { name: "Tail", type: "melee", attackBonus: 14, reach: 10, damage: "3d10+8 bludgeoning" }
        ]
    },
    "planetar": {
        name: "Planetar",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: "40 ft.", fly: "120 ft." },
        abilityScores: { str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25 },
        savingThrows: { con: 12, wis: 11, cha: 12 },
        skills: { perception: 11 },
        damageResistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["truesight 120 ft.", "passive Perception 21"],
        languages: "all, telepathy 120 ft.",
        cr: 16,
        traits: [
            { name: "Angelic Weapons", description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The planetar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The planetar has advantage on saving throws against spells and other magical effects." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 20,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good", "invisibility (self only)"],
                "3/day each": ["blade-barrier", "dispel-evil-and-good", "flame-strike", "raise-dead"],
                "1/day each": ["commune", "control-weather", "insect-plague"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The planetar makes two melee attacks." },
            { name: "Greatsword", type: "melee", attackBonus: 12, reach: 5, damage: "4d6+7 slashing plus 5d8 radiant" },
            { name: "Healing Touch (4/Day)", description: "The planetar touches another creature. The target magically regains 30 (6d8+3) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ]
    },
    "priest": {
        name: "Priest",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 13,
        acType: "chain shirt",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 10, con: 12, int: 13, wis: 16, cha: 13 },
        skills: { medicine: 7, persuasion: 3, religion: 5 },
        senses: ["passive Perception 13"],
        languages: "any two languages",
        cr: 2,
        traits: [
            { name: "Divine Eminence", description: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st." }
        ],
        spellcasting: {
            ability: "wis",
            saveDC: 13,
            attackBonus: 5,
            level: 5,
            slots: { 1: 4, 2: 3, 3: 2 },
            spells: {
                cantrips: ["light", "sacred-flame", "thaumaturgy"],
                1: ["cure-wounds", "guiding-bolt", "sanctuary"],
                2: ["lesser-restoration", "spiritual-weapon"],
                3: ["dispel-magic", "spirit-guardians"]
            }
        },
        actions: [
            { name: "Mace", type: "melee", attackBonus: 2, reach: 5, damage: "1d6 bludgeoning" }
        ]
    },
    "pseudodragon": {
        name: "Pseudodragon",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "neutral good",
        ac: 13,
        acType: "natural armor",
        hp: 7,
        hitDice: "2d4+2",
        speed: { walk: "15 ft.", fly: "60 ft." },
        abilityScores: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10 },
        skills: { perception: 3, stealth: 4 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 13"],
        languages: "understands Common and Draconic but can't speak",
        cr: 0.25,
        traits: [
            { name: "Keen Senses", description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell." },
            { name: "Magic Resistance", description: "The pseudodragon has advantage on saving throws against spells and other magical effects." },
            { name: "Limited Telepathy", description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing" },
            { name: "Sting", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing", additionalText: "The target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake." }
        ]
    },
    "purple-worm": {
        name: "Purple Worm",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 247,
        hitDice: "15d20+90",
        speed: { walk: "50 ft.", burrow: "30 ft." },
        abilityScores: { str: 28, dex: 7, con: 22, int: 1, wis: 8, cha: 4 },
        savingThrows: { con: 11, wis: 4 },
        senses: ["blindsight 30 ft.", "tremorsense 60 ft.", "passive Perception 9"],
        languages: "—",
        cr: 15,
        traits: [
            { name: "Tunneler", description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake." }
        ],
        actions: [
            { name: "Multiattack", description: "The worm makes two attacks: one with its bite and one with its stinger." },
            { name: "Bite", type: "melee", attackBonus: 14, reach: 10, damage: "3d8+9 piercing", additionalText: "If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.\n\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone." },
            { name: "Tail Stinger", type: "melee", attackBonus: 14, reach: 10, damage: "3d6+9 piercing", additionalText: "The target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "rakshasa": {
        name: "Rakshasa",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: "40 ft." },
        abilityScores: { str: 14, dex: 17, con: 18, int: 13, wis: 16, cha: 20 },
        skills: { deception: 10, insight: 8 },
        damageVulnerabilities: ["piercing from magic weapons wielded by good creatures"],
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "Common, Infernal",
        cr: 13,
        traits: [
            { name: "Limited Magic Immunity", description: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 18,
            attackBonus: 10,
            innate: true,
            spells: {
                "at will": ["detect-thoughts", "disguise-self", "mage-hand", "minor-illusion"],
                "3/day each": ["charm-person", "detect-magic", "invisibility", "major-image", "suggestion"],
                "1/day each": ["dominate-person", "fly", "plane-shift", "true-seeing"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The rakshasa makes two claw attacks." },
            { name: "Claw", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+2 slashing", additionalText: "The target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic." }
        ]
    },
    "remorhaz": {
        name: "Remorhaz",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: "30 ft.", burrow: "20 ft." },
        abilityScores: { str: 24, dex: 13, con: 21, int: 4, wis: 10, cha: 5 },
        damageImmunities: ["cold", "fire"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 11,
        traits: [
            { name: "Heated Body", description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 11, reach: 10, damage: "6d10+7 piercing plus 3d6 fire", additionalText: "If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target." },
            { name: "Swallow", description: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.\n\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone." }
        ]
    },
    "rhinoceros": {
        name: "Rhinoceros",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: "40 ft." },
        abilityScores: { str: 21, dex: 8, con: 15, int: 2, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Gore", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+5 bludgeoning" }
        ]
    },
    "roc": {
        name: "Roc",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 248,
        hitDice: "16d20+80",
        speed: { walk: "20 ft.", fly: "120 ft." },
        abilityScores: { str: 28, dex: 10, con: 20, int: 3, wis: 10, cha: 9 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 3 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "—",
        cr: 11,
        traits: [
            { name: "Keen Sight", description: "The roc has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The roc makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", type: "melee", attackBonus: 13, reach: 10, damage: "4d8+9 piercing" },
            { name: "Talons", type: "melee", attackBonus: 13, reach: 5, damage: "4d6+9 slashing", additionalText: "The target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target." }
        ]
    },
    "roper": {
        name: "Roper",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: "10 ft.", climb: "10 ft." },
        abilityScores: { str: 18, dex: 8, con: 17, int: 7, wis: 16, cha: 6 },
        skills: { perception: 6, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 16"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "False Appearance", description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite." },
            { name: "Grasping Tendrils", description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it." },
            { name: "Spider Climb", description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage." },
            { name: "Tendril", description: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target." },
            { name: "Reel", description: "The roper pulls each creature grappled by it up to 25 feet straight toward it." }
        ]
    }
};

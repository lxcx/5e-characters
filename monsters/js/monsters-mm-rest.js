// D&D 5E Monster Manual - Key Monsters H-Z
// Source: Monster Manual (MM)

const monstersMM_Rest = {
    // ===== H =====
    
    
    
    
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
    
    
    
    

    // ===== I-K =====
    
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
    
    
    

    // ===== L-M =====
    
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
    

    // ===== N-O =====
    
    
    
    
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
    

    // ===== P-R =====
    
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

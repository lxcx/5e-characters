// D&D 5E Monster Manual - Monsters S-Z
// Source: Monster Manual (MM)

const monstersMM_SZ = {
    // ===== S =====
    "sahuagin": {
        name: "Sahuagin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["sahuagin"],
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: "30 ft.", swim: "40 ft." },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9 },
        skills: { perception: 5 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: "Sahuagin",
        cr: 0.5,
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear." },
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "1d4+1 piercing" },
            { name: "Claws", type: "melee", attackBonus: 3, reach: 5, damage: "1d4+1 slashing" },
            { name: "Spear", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 piercing (1d8+1 two-handed)" },
            { name: "Spear (Ranged)", type: "ranged", attackBonus: 3, range: "20/60 ft.", damage: "1d6+1 piercing" }
        ]
    },
    "salamander": {
        name: "Salamander",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 14, con: 15, int: 11, wis: 10, cha: 12 },
        damageVulnerabilities: ["cold"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Ignan",
        cr: 5,
        traits: [
            { name: "Heated Body", description: "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage." },
            { name: "Heated Weapons", description: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The salamander makes two attacks: one with its spear and one with its tail." },
            { name: "Spear", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 piercing plus 1d6 fire" },
            { name: "Tail", type: "melee", attackBonus: 7, reach: 10, damage: "2d6+4 bludgeoning plus 2d6 fire", additionalText: "The target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets." }
        ]
    },
    "satyr": {
        name: "Satyr",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 31,
        hitDice: "7d8",
        speed: { walk: "40 ft." },
        abilityScores: { str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14 },
        skills: { perception: 2, performance: 6, stealth: 5 },
        senses: ["passive Perception 12"],
        languages: "Common, Elvish, Sylvan",
        cr: 0.5,
        traits: [
            { name: "Magic Resistance", description: "The satyr has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Ram", type: "melee", attackBonus: 3, reach: 5, damage: "2d4+1 bludgeoning" },
            { name: "Shortsword", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 piercing" },
            { name: "Shortbow", type: "ranged", attackBonus: 5, range: "80/320 ft.", damage: "1d6+3 piercing" }
        ]
    },
    "scarecrow": {
        name: "Scarecrow",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "chaotic evil",
        ac: 11,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 13, con: 11, int: 10, wis: 10, cha: 13 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "understands the languages of its creator but can't speak",
        cr: 1,
        traits: [
            { name: "False Appearance", description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow." }
        ],
        actions: [
            { name: "Multiattack", description: "The scarecrow makes two claw attacks." },
            { name: "Claw", type: "melee", attackBonus: 3, reach: 5, damage: "2d4+1 slashing" },
            { name: "Terrifying Glare", description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed." }
        ]
    },
    "scorpion": {
        name: "Scorpion",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: "10 ft." },
        abilityScores: { str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2 },
        senses: ["blindsight 10 ft.", "passive Perception 9"],
        languages: "—",
        cr: 0,
        actions: [
            { name: "Sting", type: "melee", attackBonus: 2, reach: 5, damage: "1 piercing", additionalText: "The target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "shadow": {
        name: "Shadow",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: "40 ft." },
        abilityScores: { str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8 },
        skills: { stealth: 4 },
        damageVulnerabilities: ["radiant"],
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Amorphous", description: "The shadow can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the shadow can take the Hide action as a bonus action." },
            { name: "Sunlight Weakness", description: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws." }
        ],
        actions: [
            { name: "Strength Drain", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 necrotic", additionalText: "The target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later." }
        ]
    },
    "shambling-mound": {
        name: "Shambling Mound",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: "20 ft.", swim: "20 ft." },
        abilityScores: { str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        damageResistances: ["cold", "fire"],
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "deafened", "exhaustion"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 10"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Lightning Absorption", description: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt." }
        ],
        actions: [
            { name: "Multiattack", description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it." },
            { name: "Slam", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+4 bludgeoning" },
            { name: "Engulf", description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8+4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time." }
        ]
    },
    "shield-guardian": {
        name: "Shield Guardian",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 10"],
        languages: "understands commands given in any language but can't speak",
        cr: 7,
        traits: [
            { name: "Bound", description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian." },
            { name: "Regeneration", description: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point." },
            { name: "Spell Storing", description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost." }
        ],
        actions: [
            { name: "Multiattack", description: "The guardian makes two fist attacks." },
            { name: "Fist", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 bludgeoning" }
        ],
        reactions: [
            { name: "Shield", description: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer." }
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "understands all languages it knew in life but can't speak",
        cr: 0.25,
        actions: [
            { name: "Shortsword", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Shortbow", type: "ranged", attackBonus: 4, range: "80/320 ft.", damage: "1d6+2 piercing" }
        ]
    },
    "solar": {
        name: "Solar",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 21,
        acType: "natural armor",
        hp: 243,
        hitDice: "18d10+144",
        speed: { walk: "50 ft.", fly: "150 ft." },
        abilityScores: { str: 26, dex: 22, con: 26, int: 25, wis: 25, cha: 30 },
        savingThrows: { int: 14, wis: 14, cha: 17 },
        skills: { perception: 14 },
        damageResistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 24"],
        languages: "all, telepathy 120 ft.",
        cr: 21,
        traits: [
            { name: "Angelic Weapons", description: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The solar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The solar has advantage on saving throws against spells and other magical effects." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 25,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good", "invisibility (self only)"],
                "3/day each": ["blade-barrier", "dispel-evil-and-good", "resurrection"],
                "1/day each": ["commune", "control-weather"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The solar makes two greatsword attacks." },
            { name: "Greatsword", type: "melee", attackBonus: 15, reach: 5, damage: "4d6+8 slashing plus 6d8 radiant" },
            { name: "Slaying Longbow", type: "ranged", attackBonus: 13, range: "150/600 ft.", damage: "2d8+6 piercing plus 6d8 radiant", additionalText: "If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die." },
            { name: "Flying Sword", description: "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies." },
            { name: "Healing Touch (4/Day)", description: "The solar touches another creature. The target magically regains 40 (8d8+4) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Teleport", cost: 1, description: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
                { name: "Searing Burst (Costs 2 Actions)", cost: 2, description: "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one." },
                { name: "Blinding Gaze (Costs 3 Actions)", cost: 3, description: "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness." }
            ]
        }
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
        speed: { walk: "0 ft.", fly: "50 ft. (hover)" },
        abilityScores: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "understands all languages it knew in life but can't speak",
        cr: 1,
        traits: [
            { name: "Incorporeal Movement", description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", type: "melee", attackBonus: 4, reach: 5, damage: "3d6 necrotic", additionalText: "The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
        ]
    },
    "spider": {
        name: "Spider",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: "20 ft.", climb: "20 ft." },
        abilityScores: { str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2 },
        skills: { stealth: 4 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1 piercing", additionalText: "The target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage." }
        ]
    },
    "spirit-naga": {
        name: "Spirit Naga",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: "40 ft." },
        abilityScores: { str: 18, dex: 17, con: 14, int: 16, wis: 15, cha: 16 },
        savingThrows: { dex: 6, con: 5, wis: 5, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "Abyssal, Common",
        cr: 8,
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 14,
            attackBonus: 6,
            level: 10,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
            spells: {
                cantrips: ["mage-hand", "minor-illusion", "ray-of-frost"],
                1: ["charm-person", "detect-magic", "sleep"],
                2: ["detect-thoughts", "hold-person"],
                3: ["lightning-bolt", "water-breathing"],
                4: ["blight", "dimension-door"],
                5: ["dominate-person"]
            }
        },
        actions: [
            { name: "Bite", type: "melee", attackBonus: 7, reach: 10, damage: "1d6+4 piercing plus 7d8 poison" }
        ]
    },
    "sprite": {
        name: "Sprite",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        acType: "leather armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: "10 ft.", fly: "40 ft." },
        abilityScores: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 8 },
        senses: ["passive Perception 13"],
        languages: "Common, Elvish, Sylvan",
        cr: 0.25,
        actions: [
            { name: "Longsword", type: "melee", attackBonus: 2, reach: 5, damage: "1 slashing" },
            { name: "Shortbow", type: "ranged", attackBonus: 6, range: "40/160 ft.", damage: "1 piercing", additionalText: "The target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake." },
            { name: "Heart Sight", description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw." },
            { name: "Invisibility", description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it." }
        ]
    },
    "stirge": {
        name: "Stirge",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: "10 ft.", fly: "40 ft." },
        abilityScores: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Blood Drain", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+3 piercing", additionalText: "The stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4+3) hit points due to blood loss.\n\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ]
    },
    "stone-giant": {
        name: "Stone Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: "40 ft." },
        abilityScores: { str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9 },
        savingThrows: { dex: 5, con: 8, wis: 4 },
        skills: { athletics: 12, perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Giant",
        cr: 7,
        traits: [
            { name: "Stone Camouflage", description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", type: "melee", attackBonus: 9, reach: 15, damage: "3d8+6 bludgeoning" },
            { name: "Rock", type: "ranged", attackBonus: 9, range: "60/240 ft.", damage: "4d10+6 bludgeoning", additionalText: "If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Rock Catching", description: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it." }
        ]
    },
    "stone-golem": {
        name: "Stone Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: "30 ft." },
        abilityScores: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: "understands the languages of its creator but can't speak",
        cr: 10,
        traits: [
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 10, reach: 5, damage: "3d8+6 bludgeoning" },
            { name: "Slow (Recharge 5-6)", description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "storm-giant": {
        name: "Storm Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic good",
        ac: 16,
        acType: "scale mail",
        hp: 230,
        hitDice: "20d12+100",
        speed: { walk: "50 ft.", swim: "50 ft." },
        abilityScores: { str: 29, dex: 14, con: 20, int: 16, wis: 18, cha: 18 },
        savingThrows: { str: 14, con: 10, wis: 9, cha: 9 },
        skills: { arcana: 8, athletics: 14, history: 8, perception: 9 },
        damageResistances: ["cold"],
        damageImmunities: ["lightning", "thunder"],
        senses: ["passive Perception 19"],
        languages: "Common, Giant",
        cr: 13,
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 17,
            innate: true,
            spells: {
                "at will": ["detect-magic", "feather-fall", "levitate", "light"],
                "3/day each": ["control-weather", "water-breathing"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", type: "melee", attackBonus: 14, reach: 10, damage: "6d6+9 slashing" },
            { name: "Rock", type: "ranged", attackBonus: 14, range: "60/240 ft.", damage: "4d12+9 bludgeoning" },
            { name: "Lightning Strike (Recharge 5-6)", description: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "succubus": {
        name: "Succubus/Incubus",
        source: "MM",
        size: "medium",
        type: "fiend",
        tags: ["shapechanger"],
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: "30 ft.", fly: "60 ft." },
        abilityScores: { str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20 },
        skills: { deception: 9, insight: 5, perception: 5, persuasion: 9, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
        cr: 4,
        traits: [
            { name: "Telepathic Bond", description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence." },
            { name: "Shapechanger", description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        actions: [
            { name: "Claw (Fiend Form Only)", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 slashing" },
            { name: "Charm", description: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\n\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends." },
            { name: "Draining Kiss", description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10+5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Etherealness", description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    },

    // ===== T =====
    "tarrasque": {
        name: "Tarrasque",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        tags: ["titan"],
        alignment: "unaligned",
        ac: 25,
        acType: "natural armor",
        hp: 676,
        hitDice: "33d20+330",
        speed: { walk: "40 ft." },
        abilityScores: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
        savingThrows: { int: 5, wis: 9, cha: 9 },
        damageImmunities: ["fire", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 120 ft.", "passive Perception 10"],
        languages: "—",
        cr: 30,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the tarrasque fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The tarrasque has advantage on saving throws against spells and other magical effects." },
            { name: "Reflective Carapace", description: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target." },
            { name: "Siege Monster", description: "The tarrasque deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite." },
            { name: "Bite", type: "melee", attackBonus: 19, reach: 10, damage: "4d12+10 piercing", additionalText: "If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target." },
            { name: "Claw", type: "melee", attackBonus: 19, reach: 15, damage: "4d8+10 slashing" },
            { name: "Horns", type: "melee", attackBonus: 19, reach: 10, damage: "4d10+10 piercing" },
            { name: "Tail", type: "melee", attackBonus: 19, reach: 20, damage: "4d6+10 bludgeoning", additionalText: "If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone." },
            { name: "Frightful Presence", description: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours." },
            { name: "Swallow", description: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\n\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Attack", cost: 1, description: "The tarrasque makes one claw attack or tail attack." },
                { name: "Move", cost: 1, description: "The tarrasque moves up to half its speed." },
                { name: "Chomp (Costs 2 Actions)", cost: 2, description: "The tarrasque makes one bite attack or uses its Swallow." }
            ]
        }
    },
    "thug": {
        name: "Thug",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any non-good alignment",
        ac: 11,
        acType: "leather armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: "30 ft." },
        abilityScores: { str: 15, dex: 11, con: 14, int: 10, wis: 10, cha: 11 },
        skills: { intimidation: 2 },
        senses: ["passive Perception 10"],
        languages: "any one language (usually Common)",
        cr: 0.5,
        traits: [
            { name: "Pack Tactics", description: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The thug makes two melee attacks." },
            { name: "Mace", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 bludgeoning" },
            { name: "Heavy Crossbow", type: "ranged", attackBonus: 2, range: "100/400 ft.", damage: "1d10 piercing" }
        ]
    },
    "tiger": {
        name: "Tiger",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: "40 ft." },
        abilityScores: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "1d10+3 piercing" },
            { name: "Claw", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 slashing" }
        ]
    },
    "treant": {
        name: "Treant",
        source: "MM",
        size: "huge",
        type: "plant",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: "30 ft." },
        abilityScores: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning", "piercing"],
        senses: ["passive Perception 13"],
        languages: "Common, Druidic, Elvish, Sylvan",
        cr: 9,
        traits: [
            { name: "False Appearance", description: "While the treant remains motionless, it is indistinguishable from a normal tree." },
            { name: "Siege Monster", description: "The treant deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The treant makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 10, reach: 5, damage: "3d6+6 bludgeoning" },
            { name: "Rock", type: "ranged", attackBonus: 10, range: "60/180 ft.", damage: "4d10+6 bludgeoning" },
            { name: "Animate Trees (1/Day)", description: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible." }
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
        speed: { walk: "50 ft." },
        abilityScores: { str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Trampling Charge", description: "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", type: "melee", attackBonus: 9, reach: 5, damage: "4d8+6 piercing" },
            { name: "Stomp", type: "melee", attackBonus: 9, reach: 5, damage: "3d10+6 bludgeoning" }
        ]
    },
    "troll": {
        name: "Troll",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7 },
        skills: { perception: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "Giant",
        cr: 5,
        traits: [
            { name: "Keen Smell", description: "The troll has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Regeneration", description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "The troll makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 7, reach: 5, damage: "1d6+4 piercing" },
            { name: "Claw", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 slashing" }
        ]
    },
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
        speed: { walk: "50 ft." },
        abilityScores: { str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "—",
        cr: 8,
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", type: "melee", attackBonus: 10, reach: 10, damage: "4d12+7 piercing", additionalText: "If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target." },
            { name: "Tail", type: "melee", attackBonus: 10, reach: 10, damage: "3d8+7 bludgeoning" }
        ]
    },

    // ===== U-Z =====
    "unicorn": {
        name: "Unicorn",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 12,
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: "50 ft." },
        abilityScores: { str: 18, dex: 14, con: 15, int: 11, wis: 17, cha: 16 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
        cr: 5,
        traits: [
            { name: "Charge", description: "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." },
            { name: "Magic Resistance", description: "The unicorn has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The unicorn's weapon attacks are magical." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 14,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good", "druidcraft", "pass-without-trace"],
                "1/day each": ["calm-emotions", "dispel-evil-and-good", "entangle"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The unicorn makes two attacks: one with its hooves and one with its horn." },
            { name: "Hooves", type: "melee", attackBonus: 7, reach: 5, damage: "2d6+4 bludgeoning" },
            { name: "Horn", type: "melee", attackBonus: 7, reach: 5, damage: "1d8+4 piercing" },
            { name: "Healing Touch (3/Day)", description: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8+2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target." },
            { name: "Teleport (1/Day)", description: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Hooves", cost: 1, description: "The unicorn makes one attack with its hooves." },
                { name: "Shimmering Shield (Costs 2 Actions)", cost: 2, description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn." },
                { name: "Heal Self (Costs 3 Actions)", cost: 3, description: "The unicorn magically regains 11 (2d8+2) hit points." }
            ]
        }
    },
    "vampire": {
        name: "Vampire",
        source: "MM",
        size: "medium",
        type: "undead",
        tags: ["shapechanger"],
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: "30 ft." },
        abilityScores: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18 },
        savingThrows: { dex: 9, wis: 7, cha: 9 },
        skills: { perception: 7, stealth: 9 },
        damageResistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft.", "passive Perception 17"],
        languages: "the languages it knew in life",
        cr: 13,
        traits: [
            { name: "Shapechanger", description: "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form." },
            { name: "Legendary Resistance (3/Day)", description: "If the vampire fails a saving throw, it can choose to succeed instead." },
            { name: "Misty Escape", description: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed." },
            { name: "Regeneration", description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.\nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", type: "melee", attackBonus: 9, reach: 5, damage: "1d8+4 bludgeoning", additionalText: "Instead of dealing damage, the vampire can grapple the target (escape DC 18)." },
            { name: "Bite (Bat or Vampire Form Only)", type: "melee", attackBonus: 9, reach: 5, damage: "1d6+4 piercing plus 3d6 necrotic", additionalText: "The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control." },
            { name: "Charm", description: "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.\n\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect." },
            { name: "Children of the Night (1/Day)", description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Move", cost: 1, description: "The vampire moves up to its speed without provoking opportunity attacks." },
                { name: "Unarmed Strike", cost: 1, description: "The vampire makes one unarmed strike." },
                { name: "Bite (Costs 2 Actions)", cost: 2, description: "The vampire makes one bite attack." }
            ]
        }
    },
    "warhorse": {
        name: "Warhorse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: "60 ft." },
        abilityScores: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Trampling Charge", description: "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 bludgeoning" }
        ]
    },
    "water-elemental": {
        name: "Water Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: "30 ft.", swim: "90 ft." },
        abilityScores: { str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8 },
        damageResistances: ["acid", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Aquan",
        cr: 5,
        traits: [
            { name: "Water Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Freeze", description: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+4 bludgeoning" },
            { name: "Whelm (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8+4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\n\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8+4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength check and succeeding." }
        ]
    },
    "werewolf": {
        name: "Werewolf",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["human", "shapechanger"],
        alignment: "chaotic evil",
        ac: 11,
        acType: "12 in wolf or hybrid form",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: "30 ft. (40 ft. in wolf form)" },
        abilityScores: { str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: ["passive Perception 14"],
        languages: "Common (can't speak in wolf form)",
        cr: 3,
        traits: [
            { name: "Shapechanger", description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)." },
            { name: "Bite (Wolf or Hybrid Form Only)", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing", additionalText: "If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy." },
            { name: "Claws (Hybrid Form Only)", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 slashing" },
            { name: "Spear (Humanoid Form Only)", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing (1d8+2 two-handed)" },
            { name: "Spear (Ranged, Humanoid Form Only)", type: "ranged", attackBonus: 4, range: "20/60 ft.", damage: "1d6+2 piercing" }
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
        speed: { walk: "30 ft." },
        abilityScores: { str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15 },
        skills: { perception: 3, stealth: 4 },
        damageResistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: "the languages it knew in life",
        cr: 3,
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack." },
            { name: "Life Drain", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 necrotic", additionalText: "The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time." },
            { name: "Longsword", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 slashing (1d10+2 two-handed)" },
            { name: "Longbow", type: "ranged", attackBonus: 4, range: "150/600 ft.", damage: "1d8+2 piercing" }
        ]
    },
    "will-o-wisp": {
        name: "Will-o'-Wisp",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "chaotic evil",
        ac: 19,
        hp: 22,
        hitDice: "9d4",
        speed: { walk: "0 ft.", fly: "50 ft. (hover)" },
        abilityScores: { str: 1, dex: 28, con: 10, int: 13, wis: 14, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "necrotic", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "the languages it knew in life",
        cr: 2,
        traits: [
            { name: "Consume Life", description: "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points." },
            { name: "Ephemeral", description: "The will-o'-wisp can't wear or carry anything." },
            { name: "Incorporeal Movement", description: "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Variable Illumination", description: "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action." }
        ],
        actions: [
            { name: "Shock", type: "melee", attackBonus: 4, reach: 5, damage: "2d8 lightning" },
            { name: "Invisibility", description: "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)." }
        ]
    },
    "winter-wolf": {
        name: "Winter Wolf",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: "50 ft." },
        abilityScores: { str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8 },
        skills: { perception: 5, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["passive Perception 15"],
        languages: "Common, Giant, Winter Wolf",
        cr: 3,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Snow Camouflage", description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 piercing", additionalText: "If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Cold Breath (Recharge 5-6)", description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "wolf": {
        name: "Wolf",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "40 ft." },
        abilityScores: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 piercing", additionalText: "If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ]
    },
    "worg": {
        name: "Worg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: "50 ft." },
        abilityScores: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Goblin, Worg",
        cr: 0.5,
        traits: [
            { name: "Keen Hearing and Smell", description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 piercing", additionalText: "If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
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
        speed: { walk: "0 ft.", fly: "60 ft. (hover)" },
        abilityScores: { str: 6, dex: 16, con: 16, int: 12, wis: 14, cha: 15 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "the languages it knew in life",
        cr: 5,
        traits: [
            { name: "Incorporeal Movement", description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", type: "melee", attackBonus: 6, reach: 5, damage: "4d8+3 necrotic", additionalText: "The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Create Specter", description: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time." }
        ]
    },
    "wyvern": {
        name: "Wyvern",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: "20 ft.", fly: "80 ft." },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "—",
        cr: 6,
        actions: [
            { name: "Multiattack", description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack." },
            { name: "Bite", type: "melee", attackBonus: 7, reach: 10, damage: "2d6+4 piercing" },
            { name: "Claws", type: "melee", attackBonus: 7, reach: 5, damage: "2d8+4 slashing" },
            { name: "Stinger", type: "melee", attackBonus: 7, reach: 10, damage: "1d6+4 piercing", additionalText: "The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "xorn": {
        name: "Xorn",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 19,
        acType: "natural armor",
        hp: 73,
        hitDice: "7d8+42",
        speed: { walk: "20 ft.", burrow: "20 ft." },
        abilityScores: { str: 17, dex: 10, con: 22, int: 11, wis: 10, cha: 11 },
        skills: { perception: 6, stealth: 3 },
        damageResistances: ["piercing and slashing from nonmagical attacks that aren't adamantine"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 16"],
        languages: "Terran",
        cr: 5,
        traits: [
            { name: "Earth Glide", description: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through." },
            { name: "Stone Camouflage", description: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Treasure Sense", description: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The xorn makes three claw attacks and one bite attack." },
            { name: "Claw", type: "melee", attackBonus: 6, reach: 5, damage: "1d6+3 slashing" },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "3d6+3 piercing" }
        ]
    },
    "young-red-dragon": {
        name: "Young Red Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: "40 ft.", climb: "40 ft.", fly: "80 ft." },
        abilityScores: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 8 },
        skills: { perception: 8, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 18"],
        languages: "Common, Draconic",
        cr: 10,
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 10, reach: 10, damage: "2d10+6 piercing plus 1d6 fire" },
            { name: "Claw", type: "melee", attackBonus: 10, reach: 5, damage: "2d6+6 slashing" },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one." }
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
        speed: { walk: "20 ft." },
        abilityScores: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: "understands the languages it knew in life but can't speak",
        cr: 0.25,
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Slam", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 bludgeoning" }
        ]
    }
};

// Add to global monsters object
if (typeof allMonsters === 'undefined') {
    var allMonsters = {};
}
Object.assign(allMonsters, monstersMM_SZ);

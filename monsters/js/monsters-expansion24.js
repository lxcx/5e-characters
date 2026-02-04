// Expansion Pack 24 - More Creatures
// Final comprehensive additions

const MONSTERS_EXPANSION24 = {
    // ===== More NPCs =====
    "abjurer": {
        name: "Abjurer",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 84,
        hitDice: "13d8+26",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 14, int: 18, wis: 12, cha: 11 },
        savingThrows: { int: 8, wis: 5 },
        skills: { arcana: 8, history: 8 },
        senses: [],
        languages: "any four languages",
        cr: 9,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Arcane Ward", description: "The abjurer has a magical ward that has 30 hit points. Whenever the abjurer takes damage, the ward takes the damage instead. If the ward is reduced to 0 hit points, the abjurer takes any remaining damage. When the abjurer casts an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 16,
            attack: 8,
            spells: {
                cantrips: ["blade ward", "dancing lights", "mending", "message", "ray of frost"],
                "1st": { slots: 4, spells: ["alarm", "mage armor", "magic missile", "shield"] },
                "2nd": { slots: 3, spells: ["arcane lock", "invisibility"] },
                "3rd": { slots: 3, spells: ["counterspell", "dispel magic", "fireball"] },
                "4th": { slots: 3, spells: ["banishment", "stoneskin"] },
                "5th": { slots: 2, spells: ["cone of cold", "wall of force"] },
                "6th": { slots: 1, spells: ["flesh to stone", "globe of invulnerability"] },
                "7th": { slots: 1, spells: ["symbol", "teleport"] }
            }
        }
    },
    "conjurer": {
        name: "Conjurer",
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
        cr: 6,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Benign Transportation (Recharges after the Conjurer Casts a Conjuration Spell of 1st Level or Higher)", description: "As a bonus action, the conjurer teleports up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["acid splash", "mage hand", "poison spray", "prestidigitation"],
                "1st": { slots: 4, spells: ["mage armor", "magic missile", "unseen servant"] },
                "2nd": { slots: 3, spells: ["cloud of daggers", "misty step", "web"] },
                "3rd": { slots: 3, spells: ["fireball", "stinking cloud"] },
                "4th": { slots: 3, spells: ["Evard's black tentacles", "conjure minor elementals"] },
                "5th": { slots: 1, spells: ["cloudkill", "conjure elemental"] }
            }
        }
    },
    "diviner": {
        name: "Diviner",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 67,
        hitDice: "15d8",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 11, int: 18, wis: 12, cha: 11 },
        savingThrows: { int: 7, wis: 4 },
        skills: { arcana: 7, history: 7 },
        senses: [],
        languages: "any four languages",
        cr: 8,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Portent (Recharges after the Diviner Casts a Divination Spell of 1st Level or Higher)", description: "When the diviner or a creature it can see makes an attack roll, a saving throw, or an ability check, the diviner can roll a d20 and choose to use this roll in place of the attack roll, saving throw, or ability check." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 15,
            attack: 7,
            spells: {
                cantrips: ["fire bolt", "light", "mage hand", "message", "true strike"],
                "1st": { slots: 4, spells: ["detect magic", "feather fall", "mage armor"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "locate object", "scorching ray"] },
                "3rd": { slots: 3, spells: ["clairvoyance", "fly", "fireball"] },
                "4th": { slots: 3, spells: ["arcane eye", "ice storm", "stoneskin"] },
                "5th": { slots: 2, spells: ["Rary's telepathic bond", "seeming"] },
                "6th": { slots: 1, spells: ["mass suggestion", "true seeing"] }
            }
        }
    },
    "enchanter": {
        name: "Enchanter",
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
            { name: "Instinctive Charm (Recharges after the Enchanter Casts an Enchantment Spell of 1st Level or Higher)", description: "The enchanter tries to magically divert an attack made against it, provided that the attacker is within 30 feet of it and visible to it. The enchanter must decide to do so before the attack hits or misses. The attacker must succeed on a DC 14 Wisdom saving throw, or the attacker must target the creature closest to it, other than the enchanter or itself. If multiple creatures are closest, the attacker chooses which one to target." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["friends", "mage hand", "mending", "message"],
                "1st": { slots: 4, spells: ["charm person", "mage armor", "magic missile"] },
                "2nd": { slots: 3, spells: ["hold person", "invisibility", "suggestion"] },
                "3rd": { slots: 3, spells: ["fireball", "haste", "tongues"] },
                "4th": { slots: 3, spells: ["dominate beast", "stoneskin"] },
                "5th": { slots: 1, spells: ["dominate person", "hold monster"] }
            }
        }
    },
    "evoker": {
        name: "Evoker",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 12, int: 17, wis: 12, cha: 11 },
        savingThrows: { int: 7, wis: 5 },
        skills: { arcana: 7, history: 7 },
        senses: [],
        languages: "any four languages",
        cr: 9,
        environment: ["urban"],
        role: "artillery",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Sculpt Spells", description: "When the evoker casts an evocation spell that forces other creatures it can see to make a saving throw, it can choose a number of them equal to 1 + the spell's level. These creatures automatically succeed on their saving throws against the spell. If a successful save means a chosen creature would take half damage from the spell, it instead takes no damage from it." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 15,
            attack: 7,
            spells: {
                cantrips: ["fire bolt", "light", "prestidigitation", "ray of frost"],
                "1st": { slots: 4, spells: ["burning hands", "mage armor", "magic missile"] },
                "2nd": { slots: 3, spells: ["mirror image", "misty step", "shatter"] },
                "3rd": { slots: 3, spells: ["counterspell", "fireball", "lightning bolt"] },
                "4th": { slots: 3, spells: ["ice storm", "stoneskin"] },
                "5th": { slots: 2, spells: ["Bigby's hand", "cone of cold"] },
                "6th": { slots: 1, spells: ["chain lightning", "wall of ice"] }
            }
        }
    },
    "necromancer": {
        name: "Necromancer",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 12, int: 17, wis: 12, cha: 11 },
        savingThrows: { int: 7, wis: 5 },
        skills: { arcana: 7, history: 7 },
        senses: [],
        languages: "any four languages",
        cr: 9,
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "Grim Harvest (1/Turn)", description: "When the necromancer kills a creature that is neither a construct nor undead with a spell of 1st level or higher, the necromancer regains hit points equal to twice the spell's level, or three times if it is a necromancy spell." }
        ],
        actions: [
            { name: "Withering Touch", description: "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 5 (2d4) necrotic damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 15,
            attack: 7,
            spells: {
                cantrips: ["chill touch", "dancing lights", "mage hand", "mending"],
                "1st": { slots: 4, spells: ["false life", "mage armor", "ray of sickness"] },
                "2nd": { slots: 3, spells: ["blindness/deafness", "ray of enfeeblement", "web"] },
                "3rd": { slots: 3, spells: ["animate dead", "bestow curse", "vampiric touch"] },
                "4th": { slots: 3, spells: ["blight", "dimension door", "stoneskin"] },
                "5th": { slots: 2, spells: ["Bigby's hand", "cloudkill"] },
                "6th": { slots: 1, spells: ["circle of death", "create undead"] }
            }
        }
    },

    // ===== More Misc Creatures =====
    
    
};

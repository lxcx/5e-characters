// Expansion Pack 10 - Even More Coverage
// Filling remaining gaps

const MONSTERS_EXPANSION10 = {
    // ===== More Undead =====
    
    
    
    

    // ===== More Classic Monsters =====
    
    
    
    
    
    
    
    

    // ===== Yugoloths =====
    "mezzoloth": {
        name: "Mezzoloth",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 11, con: 16, int: 7, wis: 10, cha: 11 },
        skills: { perception: 3 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Abyssal, Infernal, telepathy 60 ft.",
        cr: 5,
        environment: ["lower planes"],
        role: "soldier",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Magic Resistance", description: "The mezzoloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The mezzoloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The mezzoloth makes two attacks: one with its claws and one with its trident." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) slashing damage." },
            { name: "Trident", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6+4) piercing damage, or 8 (1d8+4) piercing damage when held with two claws and used to make a melee attack." },
            { name: "Teleport", description: "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 11,
            spells: {
                "2/day each": ["darkness", "dispel magic"],
                "1/day": ["cloudkill"]
            }
        }
    },
    "nycaloth": {
        name: "Nycaloth",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 20, dex: 11, con: 19, int: 12, wis: 10, cha: 15 },
        skills: { intimidation: 6, perception: 4, stealth: 4 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Abyssal, Infernal, telepathy 60 ft.",
        cr: 9,
        environment: ["lower planes"],
        role: "skirmisher",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Magic Resistance", description: "The nycaloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The nycaloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack." },
            { name: "Claw", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4)." },
            { name: "Greataxe", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (2d12+5) slashing damage." },
            { name: "Teleport", description: "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["darkness", "detect magic", "dispel magic", "invisibility (self only)", "mirror image"]
            }
        }
    },
    "arcanaloth": {
        name: "Arcanaloth",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 17, dex: 12, con: 14, int: 20, wis: 16, cha: 17 },
        savingThrows: { dex: 5, int: 9, wis: 7, cha: 7 },
        skills: { arcana: 13, deception: 9, insight: 9, perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 12,
        environment: ["lower planes"],
        role: "controller",
        tags: ["fiend", "yugoloth", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The arcanaloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The arcanaloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Teleport", description: "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            ability: "int",
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["fire bolt", "mage hand", "minor illusion", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "shield", "Tenser's floating disk"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "mirror image", "phantasmal force", "suggestion"] },
                "3rd": { slots: 3, spells: ["counterspell", "fear", "fireball"] },
                "4th": { slots: 3, spells: ["banishment", "dimension door"] },
                "5th": { slots: 2, spells: ["contact other plane", "hold monster"] },
                "6th": { slots: 1, spells: ["chain lightning"] },
                "7th": { slots: 1, spells: ["finger of death"] },
                "8th": { slots: 1, spells: ["mind blank"] }
            }
        }
    },
    "ultroloth": {
        name: "Ultroloth",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 19,
        acType: "natural armor",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 16, dex: 16, con: 18, int: 18, wis: 15, cha: 19 },
        savingThrows: { int: 9, wis: 7, cha: 9 },
        skills: { intimidation: 9, perception: 7, stealth: 8 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, Infernal, telepathy 120 ft.",
        cr: 13,
        environment: ["lower planes"],
        role: "leader",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Magic Resistance", description: "The ultroloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The ultroloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The ultroloth can use its Hypnotic Gaze and makes three melee attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Hypnotic Gaze", description: "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours." },
            { name: "Teleport", description: "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["alter self", "clairvoyance", "darkness", "detect magic", "detect thoughts", "dispel magic", "invisibility (self only)", "suggestion"],
                "3/day each": ["dimension door", "fear", "wall of fire"],
                "1/day each": ["fire storm", "mass suggestion"]
            }
        }
    }
};

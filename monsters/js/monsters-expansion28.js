// Expansion Pack 28 - Final additions
// Last comprehensive additions

const MONSTERS_EXPANSION28 = {
    // ===== Remaining Classic Monsters =====
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
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16 },
        savingThrows: { con: 10, int: 12, wis: 9 },
        skills: { arcana: 18, history: 12, insight: 9, perception: 9 },
        damageResistances: ["cold", "lightning", "necrotic"],
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Common plus up to five other languages",
        cr: 21,
        environment: ["any"],
        role: "controller",
        tags: ["undead", "spellcaster"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the lich fails a saving throw, it can choose to succeed instead." },
            { name: "Rejuvenation", description: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery." },
            { name: "Turn Resistance", description: "The lich has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Paralyzing Touch", description: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        legendaryActions: [
            { name: "Cantrip", description: "The lich casts a cantrip." },
            { name: "Paralyzing Touch (Costs 2 Actions)", description: "The lich uses its Paralyzing Touch." },
            { name: "Frightening Gaze (Costs 2 Actions)", description: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Disrupt Life (Costs 3 Actions)", description: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            ability: "int",
            dc: 20,
            attack: 12,
            spells: {
                cantrips: ["mage hand", "prestidigitation", "ray of frost"],
                "1st": { slots: 4, spells: ["detect magic", "magic missile", "shield", "thunderwave"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "invisibility", "Melf's acid arrow", "mirror image"] },
                "3rd": { slots: 3, spells: ["animate dead", "counterspell", "dispel magic", "fireball"] },
                "4th": { slots: 3, spells: ["blight", "dimension door"] },
                "5th": { slots: 3, spells: ["cloudkill", "scrying"] },
                "6th": { slots: 1, spells: ["disintegrate", "globe of invulnerability"] },
                "7th": { slots: 1, spells: ["finger of death", "plane shift"] },
                "8th": { slots: 1, spells: ["dominate monster", "power word stun"] },
                "9th": { slots: 1, spells: ["power word kill"] }
            }
        }
    },
    "demilich": {
        name: "Demilich",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 80,
        hitDice: "32d4",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 1, dex: 20, con: 10, int: 20, wis: 17, cha: 20 },
        savingThrows: { con: 6, int: 11, wis: 9, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from magic weapons"],
        damageImmunities: ["necrotic", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "prone", "stunned"],
        senses: ["truesight 120 ft."],
        languages: "—",
        cr: 18,
        environment: ["any"],
        role: "controller",
        tags: ["undead"],
        traits: [
            { name: "Avoidance", description: "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Legendary Resistance (3/Day)", description: "If the demilich fails a saving throw, it can choose to succeed instead." },
            { name: "Turn Immunity", description: "The demilich is immune to effects that turn undead." }
        ],
        actions: [
            { name: "Howl (Recharge 5-6)", description: "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn." },
            { name: "Life Drain", description: "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets." }
        ],
        legendaryActions: [
            { name: "Flight", description: "The demilich flies up to half its flying speed." },
            { name: "Cloud of Dust", description: "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn." },
            { name: "Energy Drain (Costs 2 Actions)", description: "Each creature within 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If this effect reduces a creature's hit point maximum to 0, the creature dies." },
            { name: "Vile Curse (Costs 3 Actions)", description: "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse is ended, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success." }
        ]
    },
    "empyrean": {
        name: "Empyrean",
        source: "MM",
        size: "huge",
        type: "celestial",
        subtype: "titan",
        alignment: "chaotic good or neutral evil",
        ac: 22,
        acType: "natural armor",
        hp: 313,
        hitDice: "19d12+190",
        speed: { walk: 50, fly: 50, swim: 50 },
        abilityScores: { str: 30, dex: 21, con: 30, int: 21, wis: 22, cha: 27 },
        savingThrows: { str: 17, int: 12, wis: 13, cha: 15 },
        skills: { insight: 13, persuasion: 15 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft."],
        languages: "all",
        cr: 23,
        environment: ["any"],
        role: "brute",
        tags: ["celestial", "titan"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the empyrean fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The empyrean has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The empyrean's weapon attacks are magical." }
        ],
        actions: [
            { name: "Maul", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6+10) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn." },
            { name: "Bolt", description: "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder." }
        ],
        legendaryActions: [
            { name: "Attack", description: "The empyrean makes one attack." },
            { name: "Bolster", description: "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn." },
            { name: "Trembling Strike (Costs 2 Actions)", description: "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 23,
            spells: {
                atWill: ["greater restoration", "pass without trace", "water breathing", "water walk"],
                "1/day each": ["commune", "dispel evil and good", "earthquake", "fire storm", "plane shift (self only)"]
            }
        }
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
        speed: { walk: 50, fly: 150 },
        abilityScores: { str: 26, dex: 22, con: 26, int: 25, wis: 25, cha: 30 },
        savingThrows: { int: 14, wis: 14, cha: 17 },
        skills: { perception: 14 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 21,
        environment: ["any"],
        role: "leader",
        tags: ["celestial", "angel"],
        traits: [
            { name: "Angelic Weapons", description: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The solar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The solar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The solar makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) slashing damage plus 27 (6d8) radiant damage." },
            { name: "Slaying Longbow", description: "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8+6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die." },
            { name: "Flying Sword", description: "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies." },
            { name: "Healing Touch (4/Day)", description: "The solar touches another creature. The target magically regains 40 (8d8+4) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        legendaryActions: [
            { name: "Teleport", description: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Searing Burst (Costs 2 Actions)", description: "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one." },
            { name: "Blinding Gaze (Costs 3 Actions)", description: "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 25,
            spells: {
                atWill: ["detect evil and good", "invisibility (self only)"],
                "3/day each": ["blade barrier", "dispel evil and good", "resurrection"],
                "1/day each": ["commune", "control weather"]
            }
        }
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
        speed: { walk: 40, fly: 120 },
        abilityScores: { str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25 },
        savingThrows: { con: 12, wis: 11, cha: 12 },
        skills: { perception: 11 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 16,
        environment: ["any"],
        role: "soldier",
        tags: ["celestial", "angel"],
        traits: [
            { name: "Angelic Weapons", description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The planetar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The planetar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The planetar makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6+7) slashing damage plus 22 (5d8) radiant damage." },
            { name: "Healing Touch (4/Day)", description: "The planetar touches another creature. The target magically regains 30 (6d8+3) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 20,
            spells: {
                atWill: ["detect evil and good", "invisibility (self only)"],
                "3/day each": ["blade barrier", "dispel evil and good", "flame strike", "raise dead"],
                "1/day each": ["commune", "control weather", "insect plague"]
            }
        }
    }
};

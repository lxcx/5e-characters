// Final Additions - Filling remaining gaps
// Sources: MM, VGtM, MToF

const MONSTERS_FINAL = {
    // ===== Lycanthropes =====
    
    "wererat": {
        name: "Wererat",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "lawful evil",
        ac: 12,
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8 },
        skills: { perception: 2, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft. (rat form only)"],
        languages: "Common (can't speak in rat form)",
        cr: 2,
        environment: ["urban", "underdark"],
        role: "skirmisher",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid." },
            { name: "Keen Smell", description: "The wererat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wererat makes two attacks, only one of which can be a bite." },
            { name: "Bite (Rat or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy." },
            { name: "Shortsword (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "werebear": {
        name: "Werebear",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral good",
        ac: 10,
        acType: "11 natural armor in bear or hybrid form",
        hp: 135,
        hitDice: "18d8+54",
        speed: { walk: 30, "walk (bear)": 40, climb: 30 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 11, wis: 12, cha: 12 },
        skills: { perception: 7 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in bear form)",
        cr: 5,
        environment: ["forest", "arctic"],
        role: "brute",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid." },
            { name: "Keen Smell", description: "The werebear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid." },
            { name: "Bite (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10+4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy." },
            { name: "Claw (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Greataxe (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) slashing damage." }
        ]
    },
    "wereboar": {
        name: "Wereboar",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral evil",
        ac: 10,
        acType: "11 natural armor in boar or hybrid form",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30, "walk (boar)": 40 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 10, wis: 11, cha: 8 },
        skills: { perception: 2 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in boar form)",
        cr: 4,
        environment: ["forest", "grassland"],
        role: "brute",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid." },
            { name: "Charge (Boar or Hybrid Form Only)", description: "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wereboar makes two attacks, only one of which can be with its tusks." },
            { name: "Maul (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." },
            { name: "Tusks (Boar or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy." }
        ]
    },
    "weretiger": {
        name: "Weretiger",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral",
        ac: 12,
        hp: 120,
        hitDice: "16d8+48",
        speed: { walk: 30, "walk (tiger)": 40 },
        abilityScores: { str: 17, dex: 15, con: 16, int: 10, wis: 13, cha: 11 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft."],
        languages: "Common (can't speak in tiger form)",
        cr: 4,
        environment: ["forest", "grassland", "jungle"],
        role: "skirmisher",
        tags: ["lycanthrope", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid." },
            { name: "Keen Hearing and Smell", description: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pounce (Tiger or Hybrid Form Only)", description: "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks." },
            { name: "Bite (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy." },
            { name: "Claw (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage." },
            { name: "Scimitar (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Longbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },

    // ===== Classic Creatures =====
    
    
    

    // ===== Mind Flayers =====
    
    
};

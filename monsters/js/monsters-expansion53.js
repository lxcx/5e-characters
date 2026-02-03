// Expansion Pack 53 - Demon Lords
// The powerful demon lords from MToF

const MONSTERS_EXPANSION53 = {
    "demogorgon": {
        name: "Demogorgon",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 464,
        hitDice: "32d12+256",
        speed: { walk: 50, swim: 50 },
        abilityScores: { str: 29, dex: 14, con: 26, int: 20, wis: 17, cha: 25 },
        savingThrows: { dex: 10, con: 16, wis: 11, cha: 15 },
        skills: { insight: 11, perception: 19 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 26,
        environment: ["abyss"],
        role: "boss",
        tags: ["fiend", "demon", "demon lord", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Demogorgon fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Demogorgon has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Demogorgon's weapon attacks are magical." },
            { name: "Two Heads", description: "Demogorgon has advantage on saving throws against being blinded, deafened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack", description: "Demogorgon makes two tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 28 (3d12+9) bludgeoning damage. If the target is a creature, it must succeed on a DC 23 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0." },
            { name: "Gaze", description: "Demogorgon turns his magical gaze toward one creature he can see within 120 feet. The target must succeed on a DC 23 Wisdom saving throw or suffer one of the following effects (Demogorgon chooses or rolls a d6): Beguiling Gaze (charmed until start of Demogorgon's next turn), Hypnotic Gaze (stunned until start of Demogorgon's next turn), Insanity Gaze (suffer short-term madness), Confusing Gaze (as confusion spell)." }
        ],
        legendaryActions: [
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) bludgeoning damage." },
            { name: "Maddening Gaze", description: "Demogorgon uses his Gaze action, and must choose either the Beguiling Gaze or Insanity Gaze effect." },
            { name: "Cast a Spell (Costs 2 Actions)", description: "Demogorgon casts one spell." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 23,
            spells: {
                atWill: ["detect magic", "major image"],
                "3/day each": ["dispel magic", "fear", "telekinesis"],
                "1/day each": ["feeblemind", "project image"]
            }
        }
    },
    "orcus": {
        name: "Orcus",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor, 20 with Wand of Orcus",
        hp: 405,
        hitDice: "30d12+210",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 27, dex: 14, con: 25, int: 20, wis: 20, cha: 25 },
        savingThrows: { dex: 10, con: 15, wis: 13 },
        skills: { arcana: 13, perception: 13 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["necrotic", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 26,
        environment: ["abyss"],
        role: "boss",
        tags: ["fiend", "demon", "demon lord", "legendary"],
        traits: [
            { name: "Wand of Orcus", description: "The wand has 7 charges, and any of its properties that require a saving throw have a save DC of 18. While holding it, Orcus can use an action to cast animate dead, blight, or speak with dead. Alternatively, he can expend 1 or more charges to cast one of the following spells: circle of death (1 charge), finger of death (1 charge), or power word kill (2 charges)." },
            { name: "Legendary Resistance (3/Day)", description: "If Orcus fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Orcus has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Orcus's weapon attacks are magical." },
            { name: "Master of Undeath", description: "When Orcus casts animate dead or create undead, he chooses the level at which the spell is cast, and the creatures created by the spells remain under his control indefinitely. Additionally, he can cast create undead even when it isn't night." }
        ],
        actions: [
            { name: "Multiattack", description: "Orcus makes two Wand of Orcus attacks." },
            { name: "Wand of Orcus", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) bludgeoning damage plus 13 (2d12) necrotic damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) piercing damage plus 9 (2d8) poison damage." }
        ],
        legendaryActions: [
            { name: "Tail", description: "Orcus makes one tail attack." },
            { name: "A Taste of Undeath", description: "Orcus casts chill touch (17th level)." },
            { name: "Creeping Death (Costs 2 Actions)", description: "Orcus chooses a point on the ground he can see within 100 feet. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 23,
            attack: 15,
            spells: {
                atWill: ["chill touch (17th level)", "detect magic"],
                "3/day": ["create undead"],
                "1/day each": ["time stop"]
            }
        }
    },
    "yeenoghu": {
        name: "Yeenoghu",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 20,
        acType: "natural armor",
        hp: 348,
        hitDice: "24d12+192",
        speed: { walk: 50 },
        abilityScores: { str: 29, dex: 16, con: 26, int: 15, wis: 24, cha: 15 },
        savingThrows: { dex: 10, con: 15, wis: 14 },
        skills: { intimidation: 9, perception: 14 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 24,
        environment: ["abyss"],
        role: "boss",
        tags: ["fiend", "demon", "demon lord", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Yeenoghu fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Yeenoghu has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Yeenoghu's weapon attacks are magical." },
            { name: "Rampage", description: "When Yeenoghu reduces a creature to 0 hit points with a melee attack on his turn, he can take a bonus action to move up to half his speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "Yeenoghu makes three flail attacks. If an attack hits, he can cause it to create an additional effect (each can be used only once per Multiattack): Wound, Move, or Stun." },
            { name: "Flail", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 22 (2d12+9) bludgeoning damage." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 20 (2d10+9) piercing damage." }
        ],
        legendaryActions: [
            { name: "Charge", description: "Yeenoghu moves up to his speed." },
            { name: "Swat Away", description: "Yeenoghu makes a flail attack. If the attack hits, the target must succeed on a DC 24 Strength saving throw or be pushed 15 feet away and knocked prone." },
            { name: "Savage (Costs 2 Actions)", description: "Yeenoghu makes a bite attack against each creature within 10 feet of him." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["detect magic"],
                "3/day each": ["dispel magic", "fear", "invisibility"],
                "1/day": ["teleport"]
            }
        }
    },
    "juiblex": {
        name: "Juiblex",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 350,
        hitDice: "28d12+168",
        speed: { walk: 30 },
        abilityScores: { str: 24, dex: 10, con: 23, int: 20, wis: 20, cha: 16 },
        savingThrows: { dex: 7, con: 13, wis: 12 },
        skills: { perception: 12 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["acid", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned", "unconscious"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 23,
        environment: ["abyss"],
        role: "boss",
        tags: ["fiend", "demon", "demon lord", "legendary"],
        traits: [
            { name: "Foul", description: "Any creature, other than an ooze, that starts its turn within 10 feet of Juiblex must succeed on a DC 21 Constitution saving throw or be poisoned until the start of the creature's next turn." },
            { name: "Legendary Resistance (3/Day)", description: "If Juiblex fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "Juiblex has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Juiblex's weapon attacks are magical." },
            { name: "Regeneration", description: "Juiblex regains 20 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of its next turn. Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Spider Climb", description: "Juiblex can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "Juiblex makes three acid lash attacks." },
            { name: "Acid Lash", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (4d6+7) acid damage. Any creature killed by this attack is drawn into Juiblex's body, and the corpse is obliterated after 1 minute." },
            { name: "Eject Slime (Recharge 5-6)", description: "Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 feet of it. The target must make a DC 21 Dexterity saving throw. On a failure, the target takes 55 (10d10) acid damage. Unless the target avoids taking any of this damage, any metal armor worn by the target takes a permanent -1 penalty to the AC it offers, and any metal weapon it is carrying or wearing takes a permanent -1 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to -5, the object is destroyed." }
        ],
        legendaryActions: [
            { name: "Acid Splash", description: "Juiblex casts acid splash (17th level), targeting up to two creatures within 30 feet of each other." },
            { name: "Attack", description: "Juiblex makes one acid lash attack." },
            { name: "Corrupting Touch (Costs 2 Actions)", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: The target is slimed. Until the slime is scraped off with an action, the target is poisoned, and any creature, other than an ooze, is poisoned while within 10 feet of the target." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 19,
            spells: {
                atWill: ["acid splash (17th level)", "detect magic"],
                "3/day each": ["blight", "contagion", "gaseous form"]
            }
        }
    },
    "zuggtmoy": {
        name: "Zuggtmoy",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 304,
        hitDice: "32d10+128",
        speed: { walk: 30 },
        abilityScores: { str: 22, dex: 15, con: 18, int: 20, wis: 19, cha: 24 },
        savingThrows: { dex: 9, con: 11, wis: 11 },
        skills: { perception: 11 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 23,
        environment: ["abyss"],
        role: "boss",
        tags: ["fiend", "demon", "demon lord", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Zuggtmoy fails a saving throw, she can choose to succeed instead." },
            { name: "Magic Resistance", description: "Zuggtmoy has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Zuggtmoy's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "Zuggtmoy makes three pseudopod attacks." },
            { name: "Pseudopod", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 15 (2d8+6) bludgeoning damage plus 9 (2d8) poison damage." },
            { name: "Infestation Spores (3/Day)", description: "Zuggtmoy releases spores that burst out in a cloud filling a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any flesh-and-blood creature in the cloud when it appears, or that enters it later, must make a DC 19 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy." },
            { name: "Mind Control Spores (Recharge 5-6)", description: "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and beasts in the cloud when it appears, or that enter it later, must make a DC 19 Wisdom saving throw. On a successful save, a creature can't be infected by these spores for 24 hours. On a failed save, the creature is charmed by Zuggtmoy for 1 hour." }
        ],
        legendaryActions: [
            { name: "Attack", description: "Zuggtmoy makes one pseudopod attack." },
            { name: "Exert Will", description: "One creature charmed by Zuggtmoy that she can see must use its reaction to move up to its speed as she directs or to make a weapon attack against a target she designates." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 22,
            spells: {
                atWill: ["detect magic", "locate animals or plants", "ray of sickness"],
                "3/day each": ["dispel magic", "ensnaring strike", "entangle", "plant growth"],
                "1/day each": ["etherealness", "teleport"]
            }
        }
    }
};

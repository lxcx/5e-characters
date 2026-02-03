// Expansion Pack 21 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION21 = {
    // ===== More Constructs =====
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
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "understands commands given in any language but can't speak",
        cr: 7,
        environment: ["urban"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Bound", description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian." },
            { name: "Regeneration", description: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point." },
            { name: "Spell Storing", description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost." }
        ],
        actions: [
            { name: "Multiattack", description: "The guardian makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ],
        reactions: [
            { name: "Shield", description: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer." }
        ]
    },
    "helmed-horror": {
        name: "Helmed Horror",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "unaligned",
        ac: 20,
        acType: "plate, shield",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 18, dex: 13, con: 16, int: 10, wis: 10, cha: 10 },
        skills: { perception: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["force", "necrotic", "poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["blindsight 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 4,
        environment: ["urban"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Magic Resistance", description: "The helmed horror has advantage on saving throws against spells and other magical effects." },
            { name: "Spell Immunity", description: "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt." }
        ],
        actions: [
            { name: "Multiattack", description: "The helmed horror makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." }
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
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 13, con: 11, int: 10, wis: 10, cha: 13 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 1,
        environment: ["farmland", "grassland"],
        role: "lurker",
        tags: ["construct"],
        traits: [
            { name: "False Appearance", description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow." }
        ],
        actions: [
            { name: "Multiattack", description: "The scarecrow makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn." },
            { name: "Terrifying Glare", description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed." }
        ]
    },

    // ===== More Undead =====
    "boneclaw": {
        name: "Boneclaw",
        source: "MToF",
        size: "large",
        type: "undead",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d10+34",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 15, int: 13, wis: 15, cha: 9 },
        savingThrows: { dex: 7, con: 6, wis: 6 },
        skills: { perception: 6, stealth: 7 },
        damageResistances: ["cold", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common plus the main language of its master",
        cr: 12,
        environment: ["urban"],
        role: "lurker",
        tags: ["undead"],
        traits: [
            { name: "Rejuvenation", description: "While its master lives, a destroyed boneclaw gains a new body in 1d10 hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the boneclaw can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The boneclaw makes two claw attacks." },
            { name: "Piercing Claw", description: "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 20 (3d10+4) piercing damage. If the target is a creature, the boneclaw can pull the target up to 10 feet toward itself, and the target is grappled (escape DC 14). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target." },
            { name: "Shadow Jump", description: "If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 5 feet of it must succeed on a DC 14 Constitution saving throw or take 34 (5d12+2) necrotic damage. The boneclaw then magically teleports up to 60 feet to an unoccupied space it can see. It can bring one creature it's grappling, teleporting that creature to an unoccupied space it can see within 5 feet of its destination. The destination spaces of this teleportation must be in dim light or darkness." }
        ],
        reactions: [
            { name: "Deadly Reach", description: "In response to a visible enemy moving into its reach, the boneclaw makes one claw attack against that enemy. If the attack hits, the boneclaw can make a second claw attack against the target." }
        ]
    },
    "nightwalker": {
        name: "Nightwalker",
        source: "MToF",
        size: "huge",
        type: "undead",
        alignment: "chaotic evil",
        ac: 14,
        hp: 297,
        hitDice: "22d12+154",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 22, dex: 19, con: 24, int: 6, wis: 9, cha: 8 },
        savingThrows: { con: 13 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 20,
        environment: ["any"],
        role: "brute",
        tags: ["undead"],
        traits: [
            { name: "Annihilating Aura", description: "Any creature that starts its turn within 30 feet of the nightwalker must succeed on a DC 21 Constitution saving throw or take 14 (4d6) necrotic damage and grant the nightwalker advantage on attack rolls against it until the start of the creature's next turn. Undead are immune to this aura." },
            { name: "Life Eater", description: "A creature reduced to 0 hit points from damage dealt by the nightwalker dies and can't be revived by any means short of a wish spell." }
        ],
        actions: [
            { name: "Multiattack", description: "The nightwalker uses Enervating Focus twice, or it uses Enervating Focus and Finger of Doom, if available." },
            { name: "Enervating Focus", description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 28 (5d8+6) necrotic damage. The target must succeed on a DC 21 Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest." },
            { name: "Finger of Doom (Recharge 6)", description: "The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a DC 21 Wisdom saving throw or take 26 (4d12) necrotic damage and become frightened until the end of the nightwalker's next turn. While frightened in this way, the creature is also paralyzed. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours." }
        ]
    },
    "skull-lord": {
        name: "Skull Lord",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 105,
        hitDice: "14d8+42",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 16, con: 17, int: 16, wis: 15, cha: 21 },
        skills: { athletics: 7, history: 8, perception: 12, stealth: 8 },
        damageResistances: ["cold", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "poisoned", "stunned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "all the languages it knew in life",
        cr: 15,
        environment: ["underdark"],
        role: "leader",
        tags: ["undead", "spellcaster"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the skull lord fails a saving throw, it can choose to succeed instead." },
            { name: "Master of the Grave", description: "While within 30 feet of the skull lord, any undead ally of the skull lord makes saving throws with advantage, and that ally regains 1d6 hit points whenever it starts its turn there." },
            { name: "Evasion", description: "If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." }
        ],
        actions: [
            { name: "Multiattack", description: "The skull lord makes three bone staff attacks." },
            { name: "Bone Staff", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage plus 14 (4d6) necrotic damage." }
        ],
        legendaryActions: [
            { name: "Bone Staff (Costs 2 Actions)", description: "The skull lord makes a bone staff attack." },
            { name: "Cantrip", description: "The skull lord casts a cantrip." },
            { name: "Move", description: "The skull lord moves up to its speed without provoking opportunity attacks." },
            { name: "Summon Undead (Costs 3 Actions)", description: "Up to five skeletons or zombies appear in unoccupied spaces within 30 feet of the skull lord and remain until destroyed. Undead summoned in this way roll initiative and act in the next available turn. The skull lord can have up to five undead summoned by this ability at a time." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 18,
            attack: 10,
            spells: {
                cantrips: ["chill touch", "fire bolt", "mage hand", "poison spray"],
                "1st": { slots: 4, spells: ["magic missile", "expeditious retreat", "thunderwave"] },
                "2nd": { slots: 3, spells: ["mirror image", "scorching ray"] },
                "3rd": { slots: 3, spells: ["fear", "haste"] },
                "4th": { slots: 3, spells: ["dimension door", "ice storm"] },
                "5th": { slots: 2, spells: ["cloudkill", "cone of cold"] },
                "6th": { slots: 1, spells: ["eyebite"] }
            }
        }
    },

    // ===== More Fiends =====
    "moloch": {
        name: "Moloch",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 253,
        hitDice: "22d10+132",
        speed: { walk: 30 },
        abilityScores: { str: 26, dex: 19, con: 22, int: 21, wis: 18, cha: 23 },
        savingThrows: { dex: 11, con: 13, wis: 11, cha: 13 },
        skills: { deception: 13, intimidation: 13, perception: 11 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 21,
        environment: ["nine hells"],
        role: "brute",
        tags: ["fiend", "devil", "archdevil"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Moloch fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Moloch has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Moloch's weapon attacks are magical." },
            { name: "Regeneration", description: "Moloch regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Moloch dies only if he starts his turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "Moloch makes three attacks: one with his bite, one with his claw, and one with his whip." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 26 (4d8+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8+8) slashing damage." },
            { name: "Many-Tailed Whip", description: "Melee Weapon Attack: +15 to hit, reach 30 ft., one target. Hit: 13 (2d4+8) slashing damage plus 11 (2d10) lightning damage. If the target is a creature, it must succeed on a DC 24 Strength saving throw or be pulled up to 30 feet in a straight line toward Moloch." },
            { name: "Breath of Despair (Recharge 5-6)", description: "Moloch exhales in a 30-foot cube. Each creature in that area must succeed on a DC 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever it is holding, and become frightened for 1 minute. While frightened in this way, a creature must take the Dash action and move away from Moloch by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. If the creature ends its turn in a location where it doesn't have line of sight to Moloch, the creature can repeat the saving throw. On a success, the effect ends." }
        ],
        legendaryActions: [
            { name: "Attack", description: "Moloch makes one claw attack or uses his whip." },
            { name: "Teleport", description: "Moloch magically teleports to an unoccupied space he can see within 120 feet of him." },
            { name: "Cast a Spell (Costs 2 Actions)", description: "Moloch uses Spellcasting." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["alter self (can become Medium when using this spell)", "animate dead", "burning hands", "confusion", "detect magic", "fly", "geas", "major image", "stinking cloud", "suggestion", "wall of fire"],
                "1/day": ["flame strike", "symbol (hopelessness only)"]
            }
        }
    },
    "orthon": {
        name: "Orthon",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 105,
        hitDice: "10d10+50",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 22, dex: 16, con: 21, int: 15, wis: 15, cha: 16 },
        savingThrows: { dex: 7, con: 9, wis: 6 },
        skills: { perception: 10, stealth: 11, survival: 10 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 120 ft.", "truesight 30 ft."],
        languages: "Common, Infernal, telepathy 120 ft.",
        cr: 10,
        environment: ["nine hells"],
        role: "lurker",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Invisibility Field", description: "The orthon can use a bonus action to become invisible. Any equipment the orthon wears or carries is also invisible as long as the equipment is on its person. This invisibility ends immediately after the orthon makes an attack roll or is hit by an attack." },
            { name: "Magic Resistance", description: "The orthon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Infernal Dagger", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 11 (2d4+6) slashing damage, and the target must make a DC 17 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is also poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Brass Crossbow", description: "Ranged Weapon Attack: +7 to hit, range 100/400 ft., one target. Hit: 14 (2d10+3) piercing damage, plus one of the following effects: Acid: The target must make a DC 17 Constitution saving throw, taking an additional 17 (5d6) acid damage on a failed save, or half as much damage on a successful one. Blindness: The target takes 5 (1d10) radiant damage. In addition, the target and all other creatures within 20 feet of it must each make a successful DC 17 Dexterity saving throw or be blinded until the end of the orthon's next turn. Concussion: The target and each creature within 20 feet of it must make a DC 17 Constitution saving throw, taking 13 (2d12) thunder damage on a failed save, or half as much damage on a successful one. Entanglement: The target must make a successful DC 17 Dexterity saving throw or be restrained for 1 hour by strands of sticky webbing. A restrained creature can escape by using an action to make a successful DC 17 Dexterity or Strength check. Paralysis (1/Day): The target must make a successful DC 17 Constitution saving throw or be paralyzed for 1 minute. The paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Tracking: For the next 24 hours, the orthon knows the direction and distance to the target, as long as it's on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there." }
        ],
        reactions: [
            { name: "Explosive Retribution", description: "When it is reduced to 15 hit points or fewer, or when it dies, the orthon causes itself to explode. All other creatures within 30 feet of it must each make a DC 17 Dexterity saving throw, taking 9 (2d8) fire damage plus 9 (2d8) thunder damage on a failed save, or half as much damage on a successful one. This explosion destroys the orthon, its infernal dagger, and its brass crossbow." }
        ]
    },
    "narzugon": {
        name: "Narzugon",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 20,
        acType: "plate, shield",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 10, con: 17, int: 16, wis: 14, cha: 19 },
        savingThrows: { dex: 4, con: 7, cha: 8 },
        skills: { perception: 6 },
        damageResistances: ["acid", "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Common, Infernal, telepathy 120 ft.",
        cr: 13,
        environment: ["nine hells"],
        role: "soldier",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Diabolical Sense", description: "The narzugon has advantage on saving throws against spells and other magical effects." },
            { name: "Infernal Tack", description: "The narzugon wears spurs that are part of infernal tack, which allow it to summon its nightmare companion." },
            { name: "Magic Resistance", description: "The narzugon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The narzugon makes three hellfire lance attacks. It also uses Infernal Command or Terrifying Command." },
            { name: "Hellfire Lance", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 11 (1d12+5) piercing damage plus 16 (3d10) fire damage. If this damage kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in 1d4 hours. If the creature isn't revived before then, only a wish spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life. Constructs and devils are immune to this effect." },
            { name: "Infernal Command", description: "Each ally of the narzugon within 60 feet of it can't be charmed or frightened until the end of the narzugon's next turn." },
            { name: "Terrifying Command", description: "Each creature that isn't a fiend within 60 feet of the narzugon that can hear it must succeed on a DC 16 Charisma saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that makes a successful saving throw is immune to this narzugon's Terrifying Command for 24 hours." },
            { name: "Healing (1/Day)", description: "The narzugon, or one creature it touches, regains up to 100 hit points." }
        ]
    }
};

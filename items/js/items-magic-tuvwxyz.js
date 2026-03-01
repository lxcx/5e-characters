// ============================================
// MAGIC ITEMS DATABASE - T, U, V, W, X, Y, Z
// ============================================
// DMG and other sourcebook magic items starting with T through Z

const magicItemsTUVWXYZ = {
    // ============================================
    // T ITEMS
    // ============================================
    
    'talisman-of-pure-good': {
        name: 'Talisman of Pure Good',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '60,000 gp',
        costValue: 6000000,
        attunement: 'creature of good alignment',
        charges: 7,
        description: 'This talisman is a mighty symbol of goodness. A creature that is neither good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman. If you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it. The talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.',
        source: 'DMG'
    },
    'talisman-of-the-sphere': {
        name: 'Talisman of the Sphere',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'any',
        description: 'When you make an Intelligence (Arcana) check to control a sphere of annihilation while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a sphere of annihilation, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 × your Intelligence modifier.',
        source: 'DMG'
    },
    'talisman-of-ultimate-evil': {
        name: 'Talisman of Ultimate Evil',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '60,000 gp',
        costValue: 6000000,
        attunement: 'creature of evil alignment',
        charges: 6,
        description: 'This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman. If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it. The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.',
        source: 'DMG'
    },
    'tome-of-clear-thought': {
        name: 'Tome of Clear Thought',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book\'s contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.',
        source: 'DMG'
    },
    'tome-of-leadership-and-influence': {
        name: 'Tome of Leadership and Influence',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book\'s contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.',
        source: 'DMG'
    },
    'tome-of-the-stilled-tongue': {
        name: 'Tome of the Stilled Tongue',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 5,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'wizard',
        description: 'This thick leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it\'s unknown which one is the original. The grisly cover decoration on the first tome of the stilled tongue once belonged to a treacherous former servant of the lich-Loss, Vecna, and each subsequent17 of the five. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine. If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components. Once used, this property of the tome can\'t be used again until the next dawn. While attuned to the book, you can remove the tongue from the book\'s cover. If you do so, all spells written in the book are permanently erased. Vecna watches anyone using this tome. He can also write cryptic messages in the book.',
        source: 'DMG'
    },
    'tome-of-understanding': {
        name: 'Tome of Understanding',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book\'s contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.',
        source: 'DMG'
    },
    'trident-of-fish-command': {
        name: 'Trident of Fish Command',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'trident',
        rarity: 'uncommon',
        weight: 4,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'any',
        damage: '1d6',
        damageType: 'piercing',
        properties: ['thrown (20/60)', 'versatile (1d8)'],
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },

    // ============================================
    // U ITEMS
    // ============================================
    
    'universal-solvent': {
        name: 'Universal Solvent',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '2,400 gp',
        costValue: 240000,
        attunement: 'none',
        consumable: true,
        description: 'This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue.',
        source: 'DMG'
    },

    // ============================================
    // V ITEMS
    // ============================================
    
    'vicious-weapon': {
        name: 'Vicious Weapon',
        type: 'weapon',
        weaponType: 'any',
        subtype: 'any',
        rarity: 'rare',
        weight: 'varies',
        cost: '3,500 gp',
        costValue: 350000,
        attunement: 'none',
        damage: 'varies',
        damageType: 'varies',
        properties: ['extra damage on 20'],
        description: 'When you roll a 20 on your attack roll with this magic weapon, your critical hit deals an extra 2d6 damage of the weapon\'s type.',
        source: 'DMG'
    },
    'vorpal-sword': {
        name: 'Vorpal Sword',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword that deals slashing damage',
        rarity: 'legendary',
        weight: 3,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'any',
        damage: 'varies +3',
        damageType: 'slashing',
        properties: ['+3 weapon', 'decapitation on 20'],
        description: 'You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage. When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature\'s heads. The creature dies if it can\'t survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn\'t have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.',
        source: 'DMG'
    },

    // ============================================
    // W ITEMS
    // ============================================
    
    'wand-of-binding': {
        name: 'Wand of Binding',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed. Spells. While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges). Assisted Escape. While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.',
        source: 'DMG'
    },
    'wand-of-enemy-detection': {
        name: 'Wand of Enemy Detection',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'any',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-fear': {
        name: 'Wand of Fear',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '7,000 gp',
        costValue: 700000,
        attunement: 'any',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed. Command. While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the Command spell (save DC 15). Fear. While holding the wand, you can use an action to expend 2 charges, causing the wand\'s tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can\'t willingly move to a space within 30 feet of you. It also can\'t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.',
        source: 'DMG'
    },
    'wand-of-fireballs': {
        name: 'Wand of Fireballs',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Fireball spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-lightning-bolts': {
        name: 'Wand of Lightning Bolts',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-magic-detection': {
        name: 'Wand of Magic Detection',
        type: 'wand',
        rarity: 'uncommon',
        weight: 1,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the Detect Magic spell from it. The wand regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'wand-of-magic-missiles': {
        name: 'Wand of Magic Missiles',
        type: 'wand',
        rarity: 'uncommon',
        weight: 1,
        cost: '2,500 gp',
        costValue: 250000,
        attunement: 'none',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-paralysis': {
        name: 'Wand of Paralysis',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target\'s turns, it can repeat the saving throw, ending the effect on itself on a success. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-polymorph': {
        name: 'Wand of Polymorph',
        type: 'wand',
        rarity: 'very-rare',
        weight: 1,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Polymorph spell (save DC 15) from it. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-secrets': {
        name: 'Wand of Secrets',
        type: 'wand',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'wand-of-the-war-mage-plus-1': {
        name: 'Wand of the War Mage +1',
        type: 'wand',
        rarity: 'uncommon',
        weight: 1,
        cost: '1,200 gp',
        costValue: 120000,
        attunement: 'spellcaster',
        description: 'While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.',
        source: 'DMG'
    },
    'wand-of-the-war-mage-plus-2': {
        name: 'Wand of the War Mage +2',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '4,800 gp',
        costValue: 480000,
        attunement: 'spellcaster',
        description: 'While holding this wand, you gain a +2 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.',
        source: 'DMG'
    },
    'wand-of-the-war-mage-plus-3': {
        name: 'Wand of the War Mage +3',
        type: 'wand',
        rarity: 'very-rare',
        weight: 1,
        cost: '19,200 gp',
        costValue: 1920000,
        attunement: 'spellcaster',
        description: 'While holding this wand, you gain a +3 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.',
        source: 'DMG'
    },
    'wand-of-web': {
        name: 'Wand of Web',
        type: 'wand',
        rarity: 'uncommon',
        weight: 1,
        cost: '2,500 gp',
        costValue: 250000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Web spell (save DC 15) from it. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.',
        source: 'DMG'
    },
    'wand-of-wonder': {
        name: 'Wand of Wonder',
        type: 'wand',
        rarity: 'rare',
        weight: 1,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'spellcaster',
        charges: 7,
        recharge: '1d6+1 at dawn',
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n\nd100 Effects:\n01-05. You cast Slow.\n06-10. You cast Faerie Fire.\n11-15. You are stunned until the start of your next turn, believing something awesome just happened.\n16-20. You cast Gust of Wind.\n21-25. You cast Detect Thoughts on the target you chose. If you didn\'t target a creature, you instead take 1d6 psychic damage.\n26-30. You cast Stinking Cloud.\n31-33. Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.\n34-36. An animal appears in the unoccupied space nearest the target. The animal isn\'t under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.\n37-46. You cast Lightning Bolt.\n47-49. A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.\n50-53. You enlarge the target as if you had cast Enlarge/Reduce. If the target can\'t be affected by that spell, or if you didn\'t target a creature, you become the target.\n54-58. You cast Darkness.\n59-62. Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.\n63-65. An object of the DM\'s choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.\n66-69. You shrink yourself as if you had cast Enlarge/Reduce on yourself.\n70-79. You cast Fireball.\n80-84. You cast Invisibility on yourself.\n85-87. Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.\n88-90. A stream of 1d4 × 10 gems, each worth 1 gp, shoots from the wand\'s tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.\n91-95. A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n96-97. The target\'s skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.\n98-00. If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn\'t target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic.',
        source: 'DMG'
    },
    'weapon-plus-1': {
        name: 'Weapon +1',
        type: 'weapon',
        weaponType: 'any',
        subtype: 'any',
        rarity: 'uncommon',
        weight: 'varies',
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        damage: 'varies +1',
        damageType: 'varies',
        description: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.',
        source: 'DMG'
    },
    'weapon-plus-2': {
        name: 'Weapon +2',
        type: 'weapon',
        weaponType: 'any',
        subtype: 'any',
        rarity: 'rare',
        weight: 'varies',
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'none',
        damage: 'varies +2',
        damageType: 'varies',
        description: 'You have a +2 bonus to attack and damage rolls made with this magic weapon.',
        source: 'DMG'
    },
    'weapon-plus-3': {
        name: 'Weapon +3',
        type: 'weapon',
        weaponType: 'any',
        subtype: 'any',
        rarity: 'very-rare',
        weight: 'varies',
        cost: '16,000 gp',
        costValue: 1600000,
        attunement: 'none',
        damage: 'varies +3',
        damageType: 'varies',
        description: 'You have a +3 bonus to attack and damage rolls made with this magic weapon.',
        source: 'DMG'
    },
    'well-of-many-worlds': {
        name: 'Well of Many Worlds',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'none',
        description: 'This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter. You can use an action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can\'t do so again for 1d8 hours.',
        source: 'DMG'
    },
    'wind-fan': {
        name: 'Wind Fan',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        description: 'While holding this fan, you can use an action to cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn\'t be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters.',
        source: 'DMG'
    },
    'winged-boots': {
        name: 'Winged Boots',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        description: 'While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land. The boots regain 2 hours of flying capability for every 12 hours they aren\'t in use.',
        source: 'DMG'
    },
    'wings-of-flying': {
        name: 'Wings of Flying',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 3,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'any',
        description: 'While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can\'t use them again for 1d12 hours.',
        source: 'DMG'
    },

    // ============================================
    // LEGENDARY ARTIFACT WEAPONS
    // ============================================
    
    'blackrazor': {
        name: 'Blackrazor',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'greatsword',
        rarity: 'legendary',
        weight: 6,
        cost: 'priceless',
        costValue: 50000000,
        attunement: 'creature of non-lawful alignment',
        damage: '2d6+3',
        damageType: 'slashing',
        properties: ['+3 weapon', 'heavy', 'two-handed', 'sentient', 'soul devouring'],
        description: 'Hidden in the dungeon of White Plume Mountain, Blackrazor shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of obsidian. You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the following additional properties. Devour Soul: Whenever you use it to reduce a creature to 0 hit points, the sword slays the creature and devours its soul, unless it is a construct or an undead. A creature whose soul has been devoured by Blackrazor can be restored to life only by a wish spell. When it devours a soul, Blackrazor grants you temporary hit points equal to the slain creature\'s hit point maximum. Soul Hunter: While you hold the weapon, you are aware of the presence of Tiny or larger creatures within 60 feet of you that aren\'t constructs or undead. Haste: Once per day, you can use a bonus action to cast the haste spell on yourself.',
        source: 'DMG'
    },
    'wave': {
        name: 'Wave',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'trident',
        rarity: 'legendary',
        weight: 4,
        cost: 'priceless',
        costValue: 50000000,
        attunement: 'creature that worships a god of the sea',
        damage: '1d6+3',
        damageType: 'piercing',
        properties: ['+3 weapon', 'thrown (20/60)', 'versatile (1d8+3)', 'sentient'],
        description: 'Held in the dungeon of White Plume Mountain, this trident is an exquisite weapon engraved with images of waves, shells, and sea creatures. Although you must worship a god of the sea to attune to this weapon, Wave happily accepts new converts. You gain a +3 bonus to attack and damage rolls made with this magic weapon. If you score a critical hit with it, the target takes extra necrotic damage equal to half its hit point maximum. Wave has additional abilities: It can speak, read, and understand Aquan. It allows you to breathe underwater. It grants you a swimming speed of 40 feet. You can use an action to cast Cube of Force. You can use an action to cast Wall of Water.',
        source: 'DMG'
    },
    'whelm': {
        name: 'Whelm',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'warhammer',
        rarity: 'legendary',
        weight: 2,
        cost: 'priceless',
        costValue: 50000000,
        attunement: 'dwarf',
        damage: '1d8+3',
        damageType: 'bludgeoning',
        properties: ['+3 weapon', 'versatile (1d10+3)', 'sentient', 'thrown (20/60)'],
        description: 'Forged by dwarves and once possessed by the dwarven hero Raurlor, Whelm is a fierce weapon that despises orcs, goblins, and creatures that are not dwarves. Although you must be a dwarf to attune to this weapon, Whelm is not above testing lesser creatures, provided they\'re not orcs or goblins. You gain a +3 bonus to attack and damage rolls made with this magic weapon. At the start of each of your turns, Whelm deals 1d6 psychic damage to you until you exterminate 1d4+1 goblins. Whelm has additional abilities: Goblinoid Bane (extra 2d6 bludgeoning vs goblins and orcs). Thrown and returns to hand. Detect giants within 500 feet. Stun giants on hit (DC 15 Con save). You can use an action to cast Shockwave (DC 15, 2d8 thunder, 60-foot radius).',
        source: 'DMG'
    }
};

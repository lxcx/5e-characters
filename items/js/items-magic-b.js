// ============================================
// MAGIC ITEMS DATABASE - B
// ============================================
// DMG and other sourcebook magic items starting with B

const magicItemsB = {
    // ============================================
    // BAG OF BEANS
    // ============================================
    
    'bag-of-beans': {
        name: 'Bag of Beans',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        description: 'Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains. If you dump the bag\'s contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren\'t being worn or carried. If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted.',
        source: 'DMG'
    },

    // ============================================
    // BAG OF DEVOURING
    // ============================================
    
    'bag-of-devouring': {
        name: 'Bag of Devouring',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        description: 'This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice. The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed completely inside the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn\'t pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.',
        source: 'DMG'
    },

    // ============================================
    // BAG OF HOLDING
    // ============================================
    
    'bag-of-holding': {
        name: 'Bag of Holding',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 15,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        capacity: '500 lbs/64 cubic feet',
        description: 'This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action. If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate. Placing a bag of holding inside an extradimensional space created by a Heward\'s handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane.',
        source: 'DMG'
    },

    // ============================================
    // BAG OF TRICKS
    // ============================================
    
    'bag-of-tricks-gray': {
        name: 'Bag of Tricks (Gray)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This ordinary bag, made from gray cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature. Once three fuzzy objects have been pulled from the bag, the bag can\'t be used again until the next dawn. Gray: Weasel, Giant Rat, Badger, Boar, Panther, Giant Badger, Dire Wolf, Giant Elk.',
        source: 'DMG'
    },
    'bag-of-tricks-rust': {
        name: 'Bag of Tricks (Rust)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This ordinary bag, made from rust-colored cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature. Rust: Rat, Owl, Mastiff, Goat, Giant Goat, Giant Boar, Lion, Brown Bear.',
        source: 'DMG'
    },
    'bag-of-tricks-tan': {
        name: 'Bag of Tricks (Tan)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This ordinary bag, made from tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature. Tan: Jackal, Ape, Baboon, Axe Beak, Black Bear, Giant Weasel, Giant Hyena, Tiger.',
        source: 'DMG'
    },

    // ============================================
    // BEAD OF FORCE
    // ============================================
    
    'bead-of-force': {
        name: 'Bead of Force',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '960 gp',
        costValue: 96000,
        attunement: 'none',
        consumable: true,
        description: 'This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 beads of force are found together. You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere\'s wall. No attack or other effect can. An enclosed creature can use its action to push against the sphere\'s wall, moving the sphere up to half the creature\'s walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.',
        source: 'DMG'
    },

    // ============================================
    // BELT OF GIANT STRENGTH
    // ============================================
    
    'belt-of-hill-giant-strength': {
        name: 'Belt of Hill Giant Strength',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '7,000 gp',
        costValue: 700000,
        attunement: 'any',
        description: 'While wearing this belt, your Strength score changes to 21. If your Strength is already equal to or greater than the belt\'s score, the item has no effect on you.',
        source: 'DMG'
    },
    'belt-of-frost-giant-strength': {
        name: 'Belt of Frost Giant Strength',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'any',
        description: 'While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than the belt\'s score, the item has no effect on you.',
        source: 'DMG'
    },
    'belt-of-stone-giant-strength': {
        name: 'Belt of Stone Giant Strength',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'any',
        description: 'While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than the belt\'s score, the item has no effect on you.',
        source: 'DMG'
    },
    'belt-of-fire-giant-strength': {
        name: 'Belt of Fire Giant Strength',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'any',
        description: 'While wearing this belt, your Strength score changes to 25. If your Strength is already equal to or greater than the belt\'s score, the item has no effect on you.',
        source: 'DMG'
    },
    'belt-of-cloud-giant-strength': {
        name: 'Belt of Cloud Giant Strength',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'any',
        description: 'While wearing this belt, your Strength score changes to 27. If your Strength is already equal to or greater than the belt\'s score, the item has no effect on you.',
        source: 'DMG'
    },
    'belt-of-storm-giant-strength': {
        name: 'Belt of Storm Giant Strength',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'any',
        description: 'While wearing this belt, your Strength score changes to 29. If your Strength is already equal to or greater than the belt\'s score, the item has no effect on you.',
        source: 'DMG'
    },

    // ============================================
    // BELT OF DWARVENKIND
    // ============================================
    
    'belt-of-dwarvenkind': {
        name: 'Belt of Dwarvenkind',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        description: 'While wearing this belt, you gain the following benefits: Your Constitution score increases by 2, to a maximum of 20. You have advantage on Charisma (Persuasion) checks made to interact with dwarves. In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you\'re capable of growing one, or a visibly thicker beard if you already have one. If you aren\'t a dwarf, you gain the following additional benefits while wearing the belt: You have advantage on saving throws against poison, and you have resistance against poison damage. You have darkvision out to a range of 60 feet. You can speak, read, and write Dwarvish.',
        source: 'DMG'
    },

    // ============================================
    // BERSERKER AXE
    // ============================================
    
    'berserker-axe': {
        name: 'Berserker Axe',
        type: 'weapon',
        subtype: 'battleaxe',
        rarity: 'rare',
        weight: 4,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        cursed: true,
        properties: ['+1 to attack and damage'],
        damage: '1d8',
        damageType: 'slashing',
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained. Curse: This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear. Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.',
        source: 'DMG'
    },

    // ============================================
    // BOOTS
    // ============================================
    
    'boots-of-elvenkind': {
        name: 'Boots of Elvenkind',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        description: 'While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.',
        source: 'DMG'
    },
    'boots-of-levitation': {
        name: 'Boots of Levitation',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'any',
        description: 'While you wear these boots, you can use an action to cast the Levitate spell on yourself at will.',
        source: 'DMG'
    },
    'boots-of-speed': {
        name: 'Boots of Speed',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'any',
        description: 'While you wear these boots, you can use a bonus action and click the boots\' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect. When the boots\' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.',
        source: 'DMG'
    },
    'boots-of-striding-and-springing': {
        name: 'Boots of Striding and Springing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'any',
        description: 'While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn\'t reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can\'t jump farther than your remaining movement would allow.',
        source: 'DMG'
    },
    'boots-of-the-winterlands': {
        name: 'Boots of the Winterlands',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'any',
        description: 'These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits: You have resistance to cold damage. You ignore difficult terrain created by ice or snow. You can tolerate temperatures as low as −50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as −100 degrees Fahrenheit.',
        source: 'DMG'
    },

    // ============================================
    // BOWL OF COMMANDING WATER ELEMENTALS
    // ============================================
    
    'bowl-of-commanding-water-elementals': {
        name: 'Bowl of Commanding Water Elementals',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 3,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'none',
        description: 'While this bowl is filled with water, you can use an action to speak the bowl\'s command word and summon a water elemental, as if you had cast the Conjure Elemental spell. The bowl can\'t be used this way again until the next dawn. The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.',
        source: 'DMG'
    },

    // ============================================
    // BRACERS
    // ============================================
    
    'bracers-of-archery': {
        name: 'Bracers of Archery',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.',
        source: 'DMG'
    },
    'bracers-of-defense': {
        name: 'Bracers of Defense',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        description: 'While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.',
        source: 'DMG'
    },

    // ============================================
    // BRAZIER OF COMMANDING FIRE ELEMENTALS
    // ============================================
    
    'brazier-of-commanding-fire-elementals': {
        name: 'Brazier of Commanding Fire Elementals',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 5,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'none',
        description: 'While a fire burns in this brass brazier, you can use an action to speak the brazier\'s command word and summon a fire elemental, as if you had cast the Conjure Elemental spell. The brazier can\'t be used this way again until the next dawn. The brazier weighs 5 pounds.',
        source: 'DMG'
    },

    // ============================================
    // BROOCH OF SHIELDING
    // ============================================
    
    'brooch-of-shielding': {
        name: 'Brooch of Shielding',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.',
        source: 'DMG'
    },

    // ============================================
    // BROOM OF FLYING
    // ============================================
    
    'broom-of-flying': {
        name: 'Broom of Flying',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 3,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land. You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.',
        source: 'DMG'
    }
};

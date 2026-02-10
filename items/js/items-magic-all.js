// ============================================
// MAGIC ITEMS DATABASE - ALL ITEMS (A-Z)
// ============================================
// Consolidated DMG and other sourcebook magic items
// Generated from individual item files for faster loading

const allMagicItems = {
// ============================================
    // ADAMANTINE ARMOR
    // ============================================
    
    'adamantine-armor-chain-mail': {
        name: 'Adamantine Chain Mail',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'uncommon',
        weight: 55,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 16,
        strengthReq: 13,
        stealthDisadvantage: true,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-chain-shirt': {
        name: 'Adamantine Chain Shirt',
        type: 'armor',
        subtype: 'medium',
        rarity: 'uncommon',
        weight: 20,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 13,
        maxDex: 2,
        stealthDisadvantage: false,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-breastplate': {
        name: 'Adamantine Breastplate',
        type: 'armor',
        subtype: 'medium',
        rarity: 'uncommon',
        weight: 20,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: false,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-half-plate': {
        name: 'Adamantine Half Plate',
        type: 'armor',
        subtype: 'medium',
        rarity: 'uncommon',
        weight: 40,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 15,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-plate': {
        name: 'Adamantine Plate',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'uncommon',
        weight: 65,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 18,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-ring-mail': {
        name: 'Adamantine Ring Mail',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'uncommon',
        weight: 40,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 14,
        stealthDisadvantage: true,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-scale-mail': {
        name: 'Adamantine Scale Mail',
        type: 'armor',
        subtype: 'medium',
        rarity: 'uncommon',
        weight: 45,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },
    'adamantine-armor-splint': {
        name: 'Adamantine Splint',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'uncommon',
        weight: 60,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        ac: 17,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['adamantine'],
        description: 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.',
        source: 'DMG'
    },

    // ============================================
    // ALCHEMY JUG
    // ============================================
    
    'alchemy-jug': {
        name: 'Alchemy Jug',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 12,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty. You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named. Once the jug starts producing a liquid, it can\'t produce a different one, or more of one that has reached its maximum, until the next dawn. Acid (8 ounces), Basic poison (1/2 ounce), Beer (4 gallons), Honey (1 gallon), Mayonnaise (2 gallons), Oil (1 quart), Vinegar (2 gallons), Water (fresh, 8 gallons), Water (salt, 12 gallons), Wine (1 gallon).',
        source: 'DMG'
    },

    // ============================================
    // AMMUNITION +1/+2/+3
    // ============================================
    
    'ammunition-plus-1': {
        name: 'Ammunition, +1',
        type: 'ammunition',
        rarity: 'uncommon',
        weight: 0,
        cost: '25 gp',
        costValue: 2500,
        attunement: 'none',
        properties: ['+1 to attack and damage'],
        description: 'You have a +1 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.',
        source: 'DMG'
    },
    'ammunition-plus-2': {
        name: 'Ammunition, +2',
        type: 'ammunition',
        rarity: 'rare',
        weight: 0,
        cost: '100 gp',
        costValue: 10000,
        attunement: 'none',
        properties: ['+2 to attack and damage'],
        description: 'You have a +2 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.',
        source: 'DMG'
    },
    'ammunition-plus-3': {
        name: 'Ammunition, +3',
        type: 'ammunition',
        rarity: 'very-rare',
        weight: 0,
        cost: '400 gp',
        costValue: 40000,
        attunement: 'none',
        properties: ['+3 to attack and damage'],
        description: 'You have a +3 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.',
        source: 'DMG'
    },

    // ============================================
    // AMULETS
    // ============================================
    
    'amulet-of-health': {
        name: 'Amulet of Health',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        description: 'Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.',
        source: 'DMG'
    },
    'amulet-of-proof-against-detection-and-location': {
        name: 'Amulet of Proof against Detection and Location',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this amulet, you are hidden from divination magic. You can\'t be targeted by such magic or perceived through magical scrying sensors.',
        source: 'DMG'
    },
    'amulet-of-the-planes': {
        name: 'Amulet of the Planes',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'any',
        description: 'While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the Plane Shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1â€“60, you travel to a random location on the plane you named. On a 61â€“100, you travel to a randomly determined plane of existence.',
        source: 'DMG'
    },

    // ============================================
    // ANIMATED SHIELD
    // ============================================
    
    'animated-shield': {
        name: 'Animated Shield',
        type: 'shield',
        rarity: 'very-rare',
        weight: 6,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        acBonus: 2,
        description: 'While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.',
        source: 'DMG'
    },

    // ============================================
    // APPARATUS OF KWALISH
    // ============================================
    
    'apparatus-of-kwalish': {
        name: 'Apparatus of Kwalish',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 500,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        description: 'This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.',
        source: 'DMG'
    },

    // ============================================
    // ARMOR +1/+2/+3
    // ============================================
    
    'armor-plus-1-leather': {
        name: '+1 Leather Armor',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 12,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-studded-leather': {
        name: '+1 Studded Leather Armor',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 13,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 13,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-chain-shirt': {
        name: '+1 Chain Shirt',
        type: 'armor',
        subtype: 'medium',
        rarity: 'rare',
        weight: 20,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 14,
        maxDex: 2,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-scale-mail': {
        name: '+1 Scale Mail',
        type: 'armor',
        subtype: 'medium',
        rarity: 'rare',
        weight: 45,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 15,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-breastplate': {
        name: '+1 Breastplate',
        type: 'armor',
        subtype: 'medium',
        rarity: 'rare',
        weight: 20,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 15,
        maxDex: 2,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-half-plate': {
        name: '+1 Half Plate',
        type: 'armor',
        subtype: 'medium',
        rarity: 'rare',
        weight: 40,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 16,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-ring-mail': {
        name: '+1 Ring Mail',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'rare',
        weight: 40,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 15,
        stealthDisadvantage: true,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-chain-mail': {
        name: '+1 Chain Mail',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'rare',
        weight: 55,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 17,
        strengthReq: 13,
        stealthDisadvantage: true,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-splint': {
        name: '+1 Splint Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'rare',
        weight: 60,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 18,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-1-plate': {
        name: '+1 Plate Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'rare',
        weight: 65,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: 19,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['+1 AC'],
        description: 'You have a +1 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    
    'armor-plus-2-plate': {
        name: '+2 Plate Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'very-rare',
        weight: 65,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        ac: 20,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['+2 AC'],
        description: 'You have a +2 bonus to AC while wearing this armor.',
        source: 'DMG'
    },
    'armor-plus-3-plate': {
        name: '+3 Plate Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'legendary',
        weight: 65,
        cost: '24,000 gp',
        costValue: 2400000,
        attunement: 'none',
        ac: 21,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['+3 AC'],
        description: 'You have a +3 bonus to AC while wearing this armor.',
        source: 'DMG'
    },

    // ============================================
    // ARMOR OF RESISTANCE
    // ============================================
    
    'armor-of-acid-resistance': {
        name: 'Armor of Acid Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['acid resistance'],
        description: 'You have resistance to acid damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-cold-resistance': {
        name: 'Armor of Cold Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['cold resistance'],
        description: 'You have resistance to cold damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-fire-resistance': {
        name: 'Armor of Fire Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['fire resistance'],
        description: 'You have resistance to fire damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-force-resistance': {
        name: 'Armor of Force Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['force resistance'],
        description: 'You have resistance to force damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-lightning-resistance': {
        name: 'Armor of Lightning Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['lightning resistance'],
        description: 'You have resistance to lightning damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-necrotic-resistance': {
        name: 'Armor of Necrotic Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['necrotic resistance'],
        description: 'You have resistance to necrotic damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-poison-resistance': {
        name: 'Armor of Poison Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['poison resistance'],
        description: 'You have resistance to poison damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-psychic-resistance': {
        name: 'Armor of Psychic Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['psychic resistance'],
        description: 'You have resistance to psychic damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-radiant-resistance': {
        name: 'Armor of Radiant Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['radiant resistance'],
        description: 'You have resistance to radiant damage while you wear this armor.',
        source: 'DMG'
    },
    'armor-of-thunder-resistance': {
        name: 'Armor of Thunder Resistance',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 10,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: 11,
        properties: ['thunder resistance'],
        description: 'You have resistance to thunder damage while you wear this armor.',
        source: 'DMG'
    },

    // ============================================
    // ARMOR OF INVULNERABILITY
    // ============================================
    
    'armor-of-invulnerability': {
        name: 'Armor of Invulnerability',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'legendary',
        weight: 65,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'any',
        ac: 18,
        strengthReq: 15,
        stealthDisadvantage: true,
        description: 'You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can\'t be used again until the next dawn.',
        source: 'DMG'
    },

    // ============================================
    // ARMOR OF VULNERABILITY
    // ============================================
    
    'armor-of-vulnerability': {
        name: 'Armor of Vulnerability',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'rare',
        weight: 65,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'any',
        ac: 18,
        strengthReq: 15,
        stealthDisadvantage: true,
        cursed: true,
        description: 'While wearing this armor, you have resistance to one of the following damage types: bludgeoning, piercing, or slashing. The DM chooses the type or determines it randomly. Curse: This armor is cursed, a fact that is revealed only when an Identify spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While cursed, you have vulnerability to two of the three damage types associated with the armor (not the one to which it grants resistance).',
        source: 'DMG'
    },

    // ============================================
    // ARROW OF SLAYING
    // ============================================
    
    'arrow-of-slaying': {
        name: 'Arrow of Slaying',
        type: 'ammunition',
        rarity: 'very-rare',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        description: 'An arrow of slaying is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both arrows of dragon slaying and arrows of blue dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one. Once an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow.',
        source: 'DMG'
    },
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
        description: 'These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits: You have resistance to cold damage. You ignore difficult terrain created by ice or snow. You can tolerate temperatures as low as âˆ’50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as âˆ’100 degrees Fahrenheit.',
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
    },
// ============================================
    // CANDLE OF INVOCATION
    // ============================================
    
    'candle-of-invocation': {
        name: 'Candle of Invocation',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '8,400 gp',
        costValue: 840000,
        attunement: 'any',
        description: 'This slender taper is dedicated to a deity and shares that deity\'s alignment. The candle\'s alignment can be detected with the Detect Evil and Good spell. The DM chooses the god and associated alignment or determines the alignment randomly. The candle\'s magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle\'s total burn time. While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle\'s can cast 1st-level spells he or she has prepared without expending spell slots, though the spell\'s effect is as if cast with a 1st-level slot. Alternatively, when you light the candle for the first time, you can cast the Gate spell with it. Doing so destroys the candle.',
        source: 'DMG'
    },

    // ============================================
    // CAP OF WATER BREATHING
    // ============================================
    
    'cap-of-water-breathing': {
        name: 'Cap of Water Breathing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '400 gp',
        costValue: 40000,
        attunement: 'none',
        description: 'While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater.',
        source: 'DMG'
    },

    // ============================================
    // CAPE OF THE MOUNTEBANK
    // ============================================
    
    'cape-of-the-mountebank': {
        name: 'Cape of the Mountebank',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'none',
        description: 'This cape smells faintly of brimstone. While wearing it, you can use it to cast the Dimension Door spell as an action. This property of the cape can\'t be used again until the next dawn. When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.',
        source: 'DMG'
    },

    // ============================================
    // CARPET OF FLYING
    // ============================================
    
    'carpet-of-flying-3x5': {
        name: 'Carpet of Flying (3x5)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 10,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'none',
        description: 'You can speak the carpet\'s command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it. A 3 ft. Ã— 5 ft. carpet can carry up to 200 lb. at a flying speed of 80 feet. A carpet can carry up to twice its normal capacity, but it flies at half speed if it carries more than its normal capacity.',
        source: 'DMG'
    },
    'carpet-of-flying-4x6': {
        name: 'Carpet of Flying (4x6)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 15,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'none',
        description: 'You can speak the carpet\'s command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it. A 4 ft. Ã— 6 ft. carpet can carry up to 400 lb. at a flying speed of 60 feet.',
        source: 'DMG'
    },
    'carpet-of-flying-5x7': {
        name: 'Carpet of Flying (5x7)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 20,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'none',
        description: 'You can speak the carpet\'s command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it. A 5 ft. Ã— 7 ft. carpet can carry up to 600 lb. at a flying speed of 40 feet.',
        source: 'DMG'
    },
    'carpet-of-flying-6x9': {
        name: 'Carpet of Flying (6x9)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 25,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'none',
        description: 'You can speak the carpet\'s command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it. A 6 ft. Ã— 9 ft. carpet can carry up to 800 lb. at a flying speed of 30 feet.',
        source: 'DMG'
    },

    // ============================================
    // CENSER OF CONTROLLING AIR ELEMENTALS
    // ============================================
    
    'censer-of-controlling-air-elementals': {
        name: 'Censer of Controlling Air Elementals',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'none',
        description: 'While incense is burning in this censer, you can use an action to speak the censer\'s command word and summon an air elemental, as if you had cast the Conjure Elemental spell. The censer can\'t be used this way again until the next dawn. This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.',
        source: 'DMG'
    },

    // ============================================
    // CHIME OF OPENING
    // ============================================
    
    'chime-of-opening': {
        name: 'Chime of Opening',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        charges: 10,
        description: 'This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can\'t reach the object. If no locks or latches remain, the object itself opens. The chime can be used ten times. After the tenth time, it cracks and becomes useless.',
        source: 'DMG'
    },

    // ============================================
    // CIRCLET OF BLASTING
    // ============================================
    
    'circlet-of-blasting': {
        name: 'Circlet of Blasting',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '400 gp',
        costValue: 40000,
        attunement: 'none',
        description: 'While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell\'s attacks, you do so with an attack bonus of +5. The circlet can\'t be used this way again until the next dawn.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF ARACHNIDA
    // ============================================
    
    'cloak-of-arachnida': {
        name: 'Cloak of Arachnida',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits: You have resistance to poison damage. You have a climbing speed equal to your walking speed. You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You can\'t be caught in webs of any sort and can move through webs as if they were difficult terrain. You can use an action to cast the Web spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can\'t be used again until the next dawn.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF DISPLACEMENT
    // ============================================
    
    'cloak-of-displacement': {
        name: 'Cloak of Displacement',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        description: 'While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF ELVENKIND
    // ============================================
    
    'cloak-of-elvenkind': {
        name: 'Cloak of Elvenkind',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak\'s color shifts to camouflage you. Pulling the hood up or down requires an action.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF INVISIBILITY
    // ============================================
    
    'cloak-of-invisibility': {
        name: 'Cloak of Invisibility',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '80,000 gp',
        costValue: 8000000,
        attunement: 'any',
        description: 'While wearing this cloak, you can pull its hood over your head to cause yourself to become invisible. While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action. Deduct the time you are invisible, in increments of 1 minute, from the cloak\'s maximum duration of 2 hours. After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours the cloak goes unused, it regains 1 hour of duration.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF MANY FASHIONS
    // ============================================
    
    'cloak-of-many-fashions': {
        name: 'Cloak of Many Fashions',
        type: 'wondrous-item',
        rarity: 'common',
        weight: 1,
        cost: '50 gp',
        costValue: 5000,
        attunement: 'none',
        description: 'While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak\'s weight doesn\'t change. Regardless of its appearance, the cloak can\'t be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn\'t gain their magical properties.',
        source: 'XGE'
    },

    // ============================================
    // CLOAK OF PROTECTION
    // ============================================
    
    'cloak-of-protection': {
        name: 'Cloak of Protection',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'You gain a +1 bonus to AC and saving throws while you wear this cloak.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF THE BAT
    // ============================================
    
    'cloak-of-the-bat': {
        name: 'Cloak of the Bat',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        description: 'While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak\'s edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed. While wearing the cloak in an area of dim light or darkness, you can use your action to cast Polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can\'t be used this way again until the next dawn.',
        source: 'DMG'
    },

    // ============================================
    // CLOAK OF THE MANTA RAY
    // ============================================
    
    'cloak-of-the-manta-ray': {
        name: 'Cloak of the Manta Ray',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.',
        source: 'DMG'
    },

    // ============================================
    // CRYSTAL BALL
    // ============================================
    
    'crystal-ball': {
        name: 'Crystal Ball',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 3,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'any',
        description: 'The typical crystal ball, a very rare item, is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it.',
        source: 'DMG'
    },
    'crystal-ball-of-mind-reading': {
        name: 'Crystal Ball of Mind Reading',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 3,
        cost: '80,000 gp',
        costValue: 8000000,
        attunement: 'any',
        description: 'This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it. While scrying with the crystal ball, you can use an action to cast the Detect Thoughts spell (save DC 17) targeting creatures you can see within 30 feet of the spell\'s sensor. You don\'t need to concentrate on this Detect Thoughts to maintain it during its duration, but it ends if Scrying ends.',
        source: 'DMG'
    },
    'crystal-ball-of-telepathy': {
        name: 'Crystal Ball of Telepathy',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 3,
        cost: '80,000 gp',
        costValue: 8000000,
        attunement: 'any',
        description: 'This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it. While scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell\'s sensor. You can also use an action to cast the Suggestion spell (save DC 17) through the sensor on one of those creatures. You don\'t need to concentrate on this suggestion to maintain it during its duration, but it ends if Scrying ends. Once used, the suggestion power of the crystal ball can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'crystal-ball-of-true-seeing': {
        name: 'Crystal Ball of True Seeing',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 3,
        cost: '80,000 gp',
        costValue: 8000000,
        attunement: 'any',
        description: 'This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it. While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell\'s sensor.',
        source: 'DMG'
    },

    // ============================================
    // CUBE OF FORCE
    // ============================================
    
    'cube-of-force': {
        name: 'Cube of Force',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '16,000 gp',
        costValue: 1600000,
        attunement: 'any',
        charges: 36,
        recharge: '1d20 at dawn',
        description: 'This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn. You can use an action to press one of the cube\'s faces, expending a number of charges based on the chosen face. Each face has a different effect.',
        source: 'DMG'
    },

    // ============================================
    // CUBIC GATE
    // ============================================
    
    'cubic-gate': {
        name: 'Cubic Gate',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '40,000 gp',
        costValue: 4000000,
        attunement: 'none',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the DM. You can use an action to press one side of the cube to cast the Gate spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the Plane Shift spell (save DC 17) with the cube and transport the targets to the plane keyed to that side. The cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
// ============================================
    // DAGGER OF VENOM
    // ============================================
    
    'dagger-of-venom': {
        name: 'Dagger of Venom',
        type: 'weapon',
        subtype: 'dagger',
        rarity: 'rare',
        weight: 1,
        cost: '2,500 gp',
        costValue: 250000,
        attunement: 'none',
        damage: '1d4',
        damageType: 'piercing',
        properties: ['+1 to attack and damage', 'finesse', 'light', 'thrown (20/60)'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can\'t be used this way again until the next dawn.',
        source: 'DMG'
    },

    // ============================================
    // DANCING SWORD
    // ============================================
    
    'dancing-sword': {
        name: 'Dancing Sword',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'very-rare',
        weight: 3,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        properties: ['+1 to attack and damage', 'dancing'],
        description: 'You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls. While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it. After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.',
        source: 'DMG'
    },

    // ============================================
    // DECANTER OF ENDLESS WATER
    // ============================================
    
    'decanter-of-endless-water': {
        name: 'Decanter of Endless Water',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds. You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options: "Stream" produces 1 gallon of water. "Fountain" produces 5 gallons of water. "Geyser" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn\'t being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.',
        source: 'DMG'
    },

    // ============================================
    // DECK OF ILLUSIONS
    // ============================================
    
    'deck-of-illusions': {
        name: 'Deck of Illusions',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        description: 'This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 âˆ’ 1 cards. The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you. An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent. The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can\'t be used again.',
        source: 'DMG'
    },

    // ============================================
    // DECK OF MANY THINGS
    // ============================================
    
    'deck-of-many-things': {
        name: 'Deck of Many Things',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'none',
        description: 'Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly. Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once. Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.',
        source: 'DMG'
    },

    // ============================================
    // DEFENDER
    // ============================================
    
    'defender': {
        name: 'Defender',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'legendary',
        weight: 3,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'any',
        properties: ['+3 to attack and damage', 'defender'],
        description: 'You gain a +3 bonus to attack and damage rolls made with this magic weapon. The first time you attack with the sword on each of your turns, you can transfer some or all of the sword\'s bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it.',
        source: 'DMG'
    },

    // ============================================
    // DEMON ARMOR
    // ============================================
    
    'demon-armor': {
        name: 'Demon Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'very-rare',
        weight: 65,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        ac: 19,
        strengthReq: 15,
        stealthDisadvantage: true,
        cursed: true,
        description: 'While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor\'s clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack and damage rolls and a damage die of 1d8. Curse: Once you don this cursed armor, you can\'t doff it unless you are targeted by the Remove Curse spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.',
        source: 'DMG'
    },

    // ============================================
    // DIMENSIONAL SHACKLES
    // ============================================
    
    'dimensional-shackles': {
        name: 'Dimensional Shackles',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 6,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        description: 'You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit a creature of Small to Large size. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don\'t prevent the creature from passing through an interdimensional portal. You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a success, the creature breaks free and destroys the shackles.',
        source: 'DMG'
    },

    // ============================================
    // DRAGON SCALE MAIL
    // ============================================
    
    'dragon-scale-mail-black': {
        name: 'Dragon Scale Mail (Black)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['acid resistance', '+1 AC'],
        description: 'Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to acid damage. Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest black dragon within 30 miles of you. This special action can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'dragon-scale-mail-blue': {
        name: 'Dragon Scale Mail (Blue)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['lightning resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to lightning damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-brass': {
        name: 'Dragon Scale Mail (Brass)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['fire resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-bronze': {
        name: 'Dragon Scale Mail (Bronze)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['lightning resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to lightning damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-copper': {
        name: 'Dragon Scale Mail (Copper)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['acid resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to acid damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-gold': {
        name: 'Dragon Scale Mail (Gold)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['fire resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-green': {
        name: 'Dragon Scale Mail (Green)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['poison resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to poison damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-red': {
        name: 'Dragon Scale Mail (Red)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['fire resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-silver': {
        name: 'Dragon Scale Mail (Silver)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['cold resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to cold damage.',
        source: 'DMG'
    },
    'dragon-scale-mail-white': {
        name: 'Dragon Scale Mail (White)',
        type: 'armor',
        subtype: 'medium',
        rarity: 'very-rare',
        weight: 45,
        cost: '7,500 gp',
        costValue: 750000,
        attunement: 'any',
        ac: 14,
        maxDex: 2,
        stealthDisadvantage: true,
        properties: ['cold resistance', '+1 AC'],
        description: 'While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to cold damage.',
        source: 'DMG'
    },

    // ============================================
    // DRAGON SLAYER
    // ============================================
    
    'dragon-slayer': {
        name: 'Dragon Slayer',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'rare',
        weight: 3,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'none',
        properties: ['+1 to attack and damage'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon\'s type. For the purpose of this weapon, "dragon" refers to any creature with the dragon type, including dragon turtles and wyverns.',
        source: 'DMG'
    },

    // ============================================
    // DRIFTGLOBE
    // ============================================
    
    'driftglobe': {
        name: 'Driftglobe',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '750 gp',
        costValue: 75000,
        attunement: 'none',
        description: 'This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the Light or Daylight spell. Once used, the daylight effect can\'t be used again until the next dawn. You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.',
        source: 'DMG'
    },

    // ============================================
    // DUST OF DISAPPEARANCE
    // ============================================
    
    'dust-of-disappearance': {
        name: 'Dust of Disappearance',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        consumable: true,
        description: 'Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become invisible for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature.',
        source: 'DMG'
    },

    // ============================================
    // DUST OF DRYNESS
    // ============================================
    
    'dust-of-dryness': {
        name: 'Dust of Dryness',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        consumable: true,
        description: 'This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet\'s weight is negligible. Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet\'s magic. An elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 Constitution saving throw, taking 10d6 necrotic damage on a failed save, or half as much damage on a successful one.',
        source: 'DMG'
    },

    // ============================================
    // DUST OF SNEEZING AND CHOKING
    // ============================================
    
    'dust-of-sneezing-and-choking': {
        name: 'Dust of Sneezing and Choking',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        consumable: true,
        description: 'Found in a small container, this powder resembles very fine sand. It appears to be dust of disappearance, and an Identify spell reveals it to be such. There is enough of it for one use. When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe, while sneezing uncontrollably. A creature affected in this way is incapacitated and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The Lesser Restoration spell can also end the effect on a creature.',
        source: 'DMG'
    },

    // ============================================
    // DWARVEN PLATE
    // ============================================
    
    'dwarven-plate': {
        name: 'Dwarven Plate',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'very-rare',
        weight: 65,
        cost: '9,000 gp',
        costValue: 900000,
        attunement: 'none',
        ac: 20,
        strengthReq: 15,
        stealthDisadvantage: true,
        properties: ['+2 AC', 'force reduction'],
        description: 'While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet.',
        source: 'DMG'
    },

    // ============================================
    // DWARVEN THROWER
    // ============================================
    
    'dwarven-thrower': {
        name: 'Dwarven Thrower',
        type: 'weapon',
        subtype: 'warhammer',
        rarity: 'very-rare',
        weight: 2,
        cost: '18,000 gp',
        costValue: 1800000,
        attunement: 'dwarf',
        damage: '1d8',
        damageType: 'bludgeoning',
        properties: ['+3 to attack and damage', 'thrown (20/60)', 'returning'],
        description: 'You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.',
        source: 'DMG'
    },
// ============================================
    // E ITEMS
    // ============================================
    
    'efreeti-bottle': {
        name: 'Efreeti Bottle',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'none',
        description: 'This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an efreeti appears in an unoccupied space within 30 feet of you. The first time the bottle is opened, the DM rolls to determine what happens (d100).',
        source: 'DMG'
    },
    'efreeti-chain': {
        name: 'Efreeti Chain',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'legendary',
        weight: 55,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        ac: 16,
        strengthReq: 13,
        stealthDisadvantage: true,
        properties: ['+3 AC', 'fire immunity'],
        description: 'While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground.',
        source: 'DMG'
    },
    'elemental-gem': {
        name: 'Elemental Gem',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '960 gp',
        costValue: 96000,
        attunement: 'none',
        consumable: true,
        description: 'This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you had cast the Conjure Elemental spell, and the gem\'s magic is lost. The type of gem determines the elemental summoned by the spell.',
        source: 'DMG'
    },
    'elven-chain': {
        name: 'Elven Chain',
        type: 'armor',
        subtype: 'medium',
        rarity: 'rare',
        weight: 20,
        cost: '4,500 gp',
        costValue: 450000,
        attunement: 'none',
        ac: 14,
        maxDex: 2,
        properties: ['+1 AC', 'proficiency not required'],
        description: 'You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor.',
        source: 'DMG'
    },
    'eversmoking-bottle': {
        name: 'Eversmoking Bottle',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud\'s area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet. The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.',
        source: 'DMG'
    },
    'eyes-of-charming': {
        name: 'Eyes of Charming',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn.',
        source: 'DMG'
    },
    'eyes-of-minute-seeing': {
        name: 'Eyes of Minute Seeing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.',
        source: 'DMG'
    },
    'eyes-of-the-eagle': {
        name: 'Eyes of the Eagle',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.',
        source: 'DMG'
    },

    // ============================================
    // F ITEMS
    // ============================================
    
    'feather-token': {
        name: 'Feather Token (Anchor)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '50 gp',
        costValue: 5000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can\'t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.',
        source: 'DMG'
    },
    'feather-token-bird': {
        name: 'Feather Token (Bird)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        consumable: true,
        description: 'You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc, but it obeys your simple commands and can\'t attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day, with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.',
        source: 'DMG'
    },
    'feather-token-fan': {
        name: 'Feather Token (Fan)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.',
        source: 'DMG'
    },
    'feather-token-swan-boat': {
        name: 'Feather Token (Swan Boat)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        consumable: true,
        description: 'You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.',
        source: 'DMG'
    },
    'feather-token-tree': {
        name: 'Feather Token (Tree)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.',
        source: 'DMG'
    },
    'feather-token-whip': {
        name: 'Feather Token (Whip)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 force damage. As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-bronze-griffon': {
        name: 'Figurine of Wondrous Power (Bronze Griffon)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn\'t enough space for the creature, the figurine doesn\'t become a creature. The creature is friendly to you and your companions. Bronze Griffon: When you speak the command word, the figurine becomes a griffon for up to 6 hours. Once it has been used, it can\'t be used again until 5 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-ebony-fly': {
        name: 'Figurine of Wondrous Power (Ebony Fly)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a giant fly for up to 12 hours and can be ridden as a mount. Once it has been used, it can\'t be used again until 2 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-golden-lions': {
        name: 'Figurine of Wondrous Power (Golden Lions)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a lion. If you speak the command word while there are two figurines within 5 feet of each other, each figurine becomes a lion for up to 1 hour. Once a lion has been used, it can\'t be used again until 7 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-ivory-goats': {
        name: 'Figurine of Wondrous Power (Ivory Goats)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'none',
        description: 'These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. The Goat of Traveling can become a Large goat with the same statistics as a riding horse. It can be ridden as a mount and can be used for up to 24 hours (once used, can\'t be used again for 7 days). The Goat of Travail becomes a giant goat for up to 3 hours (once used, can\'t be used again for 30 days). The Goat of Terror becomes a giant goat for up to 3 hours, with a special charge attack (once used, can\'t be used again for 15 days).',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-marble-elephant': {
        name: 'Figurine of Wondrous Power (Marble Elephant)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes an elephant for up to 24 hours. Once it has been used, it can\'t be used again until 7 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-obsidian-steed': {
        name: 'Figurine of Wondrous Power (Obsidian Steed)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a nightmare for up to 24 hours. The nightmare fights only to defend itself. If you have a good alignment, the figurine has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades. Once it has been used, it can\'t be used again until 5 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-onyx-dog': {
        name: 'Figurine of Wondrous Power (Onyx Dog)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a mastiff for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can\'t be used again until 7 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-serpentine-owl': {
        name: 'Figurine of Wondrous Power (Serpentine Owl)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a giant owl for up to 8 hours. Once it has been used, it can\'t be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-silver-raven': {
        name: 'Figurine of Wondrous Power (Silver Raven)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a raven for up to 12 hours. Once it has been used, it can\'t be used again until 2 days have passed. While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.',
        source: 'DMG'
    },
    'flame-tongue': {
        name: 'Flame Tongue',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'rare',
        weight: 3,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        properties: ['flaming'],
        description: 'You can use a bonus action to speak this magic sword\'s command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.',
        source: 'DMG'
    },
    'folding-boat': {
        name: 'Folding Boat',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 4,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'none',
        description: 'This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it. One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep (holds up to 4 Medium creatures). A second command word causes the box to unfold into a ship 24 feet long, 8 feet wide, and 6 feet deep (holds up to 15 Medium creatures). When the box becomes a vessel, its weight becomes that of a normal vessel its size. The third command word causes the folding boat to fold back into a box.',
        source: 'DMG'
    },
    'frost-brand': {
        name: 'Frost Brand',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'very-rare',
        weight: 3,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        properties: ['cold damage', 'fire resistance'],
        description: 'When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage. In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet. When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.',
        source: 'DMG'
    },

    // ============================================
    // G ITEMS
    // ============================================
    
    'gauntlets-of-ogre-power': {
        name: 'Gauntlets of Ogre Power',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher.',
        source: 'DMG'
    },
    'gem-of-brightness': {
        name: 'Gem of Brightness',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        charges: 50,
        description: 'This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects: The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn\'t expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem. The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.',
        source: 'DMG'
    },
    'gem-of-seeing': {
        name: 'Gem of Seeing',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This gem has 3 charges. As an action, you can speak the gem\'s command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 feet when you peer through the gem. The gem regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'giant-slayer': {
        name: 'Giant Slayer',
        type: 'weapon',
        subtype: 'any axe or sword',
        rarity: 'rare',
        weight: 4,
        cost: '7,000 gp',
        costValue: 700000,
        attunement: 'none',
        properties: ['+1 to attack and damage'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon\'s type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, "giant" refers to any creature with the giant type, including ettins and trolls.',
        source: 'DMG'
    },
    'glamoured-studded-leather': {
        name: 'Glamoured Studded Leather',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 13,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        ac: 13,
        properties: ['+1 AC', 'glamour'],
        description: 'While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor\'s command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or remove the armor.',
        source: 'DMG'
    },
    'gloves-of-missile-snaring': {
        name: 'Gloves of Missile Snaring',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you\'re wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand.',
        source: 'DMG'
    },
    'gloves-of-swimming-and-climbing': {
        name: 'Gloves of Swimming and Climbing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing these gloves, climbing and swimming don\'t cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.',
        source: 'DMG'
    },
    'gloves-of-thievery': {
        name: 'Gloves of Thievery',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'These gloves are invisible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.',
        source: 'DMG'
    },
    'goggles-of-night': {
        name: 'Goggles of Night',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.',
        source: 'DMG'
    },

    // ============================================
    // H ITEMS
    // ============================================
    
    'hammer-of-thunderbolts': {
        name: 'Hammer of Thunderbolts',
        type: 'weapon',
        subtype: 'maul',
        rarity: 'legendary',
        weight: 10,
        cost: '16,000 gp',
        costValue: 1600000,
        attunement: 'any',
        damage: '2d6',
        damageType: 'bludgeoning',
        properties: ['+1 to attack and damage'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. Giant\'s Bane: You must be wearing a belt of giant strength (any variety) and gauntlets of ogre power to attune to this weapon. The attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die. The hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be stunned until the end of your next turn.',
        source: 'DMG'
    },
    'handy-haversack': {
        name: 'Handy Haversack',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 5,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        capacity: '120 lbs total',
        description: 'This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents. Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.',
        source: 'DMG'
    },
    'hat-of-disguise': {
        name: 'Hat of Disguise',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this hat, you can use an action to cast the Disguise Self spell from it at will. The spell ends if the hat is removed.',
        source: 'DMG'
    },
    'headband-of-intellect': {
        name: 'Headband of Intellect',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher.',
        source: 'DMG'
    },
    'helm-of-brilliance': {
        name: 'Helm of Brilliance',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 3,
        cost: '17,000 gp',
        costValue: 1700000,
        attunement: 'any',
        description: 'This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic. You gain the following benefits while wearing it: You can use an action to cast one of the following spells (save DC 18), using one of the helm\'s gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm. As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. As long as it has at least one ruby, you have resistance to fire damage. As long as it has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.',
        source: 'DMG'
    },
    'helm-of-comprehending-languages': {
        name: 'Helm of Comprehending Languages',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 3,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.',
        source: 'DMG'
    },
    'helm-of-telepathy': {
        name: 'Helm of Telepathy',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 3,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply â€” using a bonus action to do so â€” while your focus on it continues. While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'helm-of-teleportation': {
        name: 'Helm of Teleportation',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 3,
        cost: '64,000 gp',
        costValue: 6400000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Teleport spell from it. The helm regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'holy-avenger': {
        name: 'Holy Avenger',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'legendary',
        weight: 3,
        cost: '165,000 gp',
        costValue: 16500000,
        attunement: 'paladin',
        properties: ['+3 to attack and damage'],
        description: 'You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage. While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.',
        source: 'DMG'
    },
    'horn-of-blasting': {
        name: 'Horn of Blasting',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '450 gp',
        costValue: 45000,
        attunement: 'none',
        description: 'You can use an action to speak the horn\'s command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn\'t deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6. Each use of the horn\'s magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.',
        source: 'DMG'
    },
    'horn-of-valhalla-silver': {
        name: 'Horn of Valhalla (Silver)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '5,600 gp',
        costValue: 560000,
        attunement: 'none',
        description: 'You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. They use the statistics of a berserker. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can\'t be used again until 7 days have passed. Silver: 2d4+2 berserkers. If you aren\'t proficient with all simple weapons, the berserkers attack you.',
        source: 'DMG'
    },
    'horn-of-valhalla-brass': {
        name: 'Horn of Valhalla (Brass)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '8,400 gp',
        costValue: 840000,
        attunement: 'none',
        description: 'Brass: 3d4+3 berserkers. To use the brass horn, you must be proficient with all simple weapons.',
        source: 'DMG'
    },
    'horn-of-valhalla-bronze': {
        name: 'Horn of Valhalla (Bronze)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 2,
        cost: '11,200 gp',
        costValue: 1120000,
        attunement: 'none',
        description: 'Bronze: 4d4+4 berserkers. To use the bronze horn, you must be proficient with medium armor.',
        source: 'DMG'
    },
    'horn-of-valhalla-iron': {
        name: 'Horn of Valhalla (Iron)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 2,
        cost: '14,000 gp',
        costValue: 1400000,
        attunement: 'none',
        description: 'Iron: 5d4+5 berserkers. To use the iron horn, you must be proficient with all martial weapons.',
        source: 'DMG'
    },
    'horseshoes-of-a-zephyr': {
        name: 'Horseshoes of a Zephyr',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 4,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        description: 'These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march.',
        source: 'DMG'
    },
    'horseshoes-of-speed': {
        name: 'Horseshoes of Speed',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 4,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        description: 'These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature\'s walking speed by 30 feet.',
        source: 'DMG'
    },
// ============================================
    // I ITEMS
    // ============================================
    
    'immovable-rod': {
        name: 'Immovable Rod',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '2,500 gp',
        costValue: 250000,
        attunement: 'none',
        description: 'This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn\'t move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.',
        source: 'DMG'
    },
    'instant-fortress': {
        name: 'Instant Fortress',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '75,000 gp',
        costValue: 7500000,
        attunement: 'none',
        description: 'You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty. The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof.',
        source: 'DMG'
    },
    'instrument-of-the-bards-anstruth-harp': {
        name: 'Instrument of the Bards (Anstruth Harp)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 3,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Anstruth Harp can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Control Weather (1/day), Cure Wounds (5th level), Wall of Thorns.',
        source: 'DMG'
    },
    'instrument-of-the-bards-canaith-mandolin': {
        name: 'Instrument of the Bards (Canaith Mandolin)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Canaith Mandolin can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Cure Wounds (3rd level), Dispel Magic, Protection from Energy (lightning only).',
        source: 'DMG'
    },
    'instrument-of-the-bards-cli-lyre': {
        name: 'Instrument of the Bards (Cli Lyre)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Cli Lyre can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Stone Shape, Wall of Fire, Wind Wall.',
        source: 'DMG'
    },
    'instrument-of-the-bards-doss-lute': {
        name: 'Instrument of the Bards (Doss Lute)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Doss Lute can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Animal Friendship, Protection from Energy (fire only), Protection from Poison.',
        source: 'DMG'
    },
    'instrument-of-the-bards-fochlucan-bandore': {
        name: 'Instrument of the Bards (Fochlucan Bandore)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Fochlucan Bandore can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Entangle, Faerie Fire, Shillelagh, Speak with Animals.',
        source: 'DMG'
    },
    'instrument-of-the-bards-mac-fuirmidh-cittern': {
        name: 'Instrument of the Bards (Mac-Fuirmidh Cittern)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Mac-Fuirmidh Cittern can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Barkskin, Cure Wounds, Fog Cloud.',
        source: 'DMG'
    },
    'instrument-of-the-bards-ollamh-harp': {
        name: 'Instrument of the Bards (Ollamh Harp)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 3,
        cost: '125,000 gp',
        costValue: 12500000,
        attunement: 'bard',
        description: 'An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. If you play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, you can impose disadvantage on the save. The Ollamh Harp can cast: Fly, Invisibility, Levitate, Protection from Evil and Good, Confusion, Control Weather, Fire Storm.',
        source: 'DMG'
    },
    'ioun-stone-absorption': {
        name: 'Ioun Stone (Absorption)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '20,000 gp',
        costValue: 2000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. While this pale lavender ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you. Once the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic.',
        source: 'DMG'
    },
    'ioun-stone-agility': {
        name: 'Ioun Stone (Agility)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this deep red sphere orbits your head, your Dexterity score increases by 2, to a maximum of 20.',
        source: 'DMG'
    },
    'ioun-stone-awareness': {
        name: 'Ioun Stone (Awareness)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this dark blue rhomboid orbits your head, you can\'t be surprised.',
        source: 'DMG'
    },
    'ioun-stone-fortitude': {
        name: 'Ioun Stone (Fortitude)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this pink rhomboid orbits your head, your Constitution score increases by 2, to a maximum of 20.',
        source: 'DMG'
    },
    'ioun-stone-greater-absorption': {
        name: 'Ioun Stone (Greater Absorption)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this marbled lavender and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you. Once the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic.',
        source: 'DMG'
    },
    'ioun-stone-insight': {
        name: 'Ioun Stone (Insight)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this incandescent blue sphere orbits your head, your Wisdom score increases by 2, to a maximum of 20.',
        source: 'DMG'
    },
    'ioun-stone-intellect': {
        name: 'Ioun Stone (Intellect)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this marbled scarlet and blue sphere orbits your head, your Intelligence score increases by 2, to a maximum of 20.',
        source: 'DMG'
    },
    'ioun-stone-leadership': {
        name: 'Ioun Stone (Leadership)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this marbled pink and green sphere orbits your head, your Charisma score increases by 2, to a maximum of 20.',
        source: 'DMG'
    },
    'ioun-stone-mastery': {
        name: 'Ioun Stone (Mastery)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '75,000 gp',
        costValue: 7500000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this pale green prism orbits your head, your proficiency bonus increases by 1.',
        source: 'DMG'
    },
    'ioun-stone-protection': {
        name: 'Ioun Stone (Protection)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this dusty rose prism orbits your head, you have a +1 bonus to AC.',
        source: 'DMG'
    },
    'ioun-stone-regeneration': {
        name: 'Ioun Stone (Regeneration)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '75,000 gp',
        costValue: 7500000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this pearly white spindle orbits your head, you regain 15 hit points at the end of each hour, provided that you have at least 1 hit point.',
        source: 'DMG'
    },
    'ioun-stone-reserve': {
        name: 'Ioun Stone (Reserve)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. When found, it contains 1d4-1 levels of stored spells chosen by the DM.',
        source: 'DMG'
    },
    'ioun-stone-strength': {
        name: 'Ioun Stone (Strength)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this pale blue rhomboid orbits your head, your Strength score increases by 2, to a maximum of 20.',
        source: 'DMG'
    },
    'ioun-stone-sustenance': {
        name: 'Ioun Stone (Sustenance)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '4,500 gp',
        costValue: 450000,
        attunement: 'any',
        description: 'An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. While this clear spindle orbits your head, you don\'t need to eat or drink.',
        source: 'DMG'
    },
    'iron-bands-of-bilarro': {
        name: 'Iron Bands of Bilarro',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'none',
        description: 'This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands. Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. A creature can use its action to make a DC 20 Strength check to try to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts by that creature automatically fail until 24 hours have elapsed. Once used, the bands can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'iron-flask': {
        name: 'Iron Flask',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 1,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'none',
        description: 'This iron bottle has a brass stopper. You can use an action to speak the flask\'s command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you\'re on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. You can use an action to remove the flask\'s stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions.',
        source: 'DMG'
    },

    // ============================================
    // J ITEMS
    // ============================================
    
    'javelin-of-lightning': {
        name: 'Javelin of Lightning',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'javelin',
        rarity: 'uncommon',
        weight: 2,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        damage: '1d6',
        damageType: 'piercing',
        properties: ['thrown (30/120)'],
        description: 'This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage. The javelin\'s property can\'t be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.',
        source: 'DMG'
    },

    // ============================================
    // K ITEMS
    // ============================================
    
    'keoghtoms-ointment': {
        name: 'Keoghtom\'s Ointment',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        consumable: true,
        charges: 5,
        description: 'This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound. As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hit points, ceases to be poisoned, and is cured of any disease.',
        source: 'DMG'
    },

    // ============================================
    // L ITEMS
    // ============================================
    
    'lantern-of-revealing': {
        name: 'Lantern of Revealing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern\'s bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.',
        source: 'DMG'
    },
    'luck-blade': {
        name: 'Luck Blade',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword',
        rarity: 'legendary',
        weight: 3,
        cost: '175,000 gp',
        costValue: 17500000,
        attunement: 'any',
        damage: 'varies',
        damageType: 'slashing',
        properties: ['+1 weapon', 'luck', 'wishes'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws. Luck. If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can\'t be used again until the next dawn. Wish. The sword has 1d4-1 charges. While holding it, you can use an action to expend 1 charge and cast the wish spell from it. This property can\'t be used again until the next dawn. The sword loses this property if it has no charges.',
        source: 'DMG'
    },
    'luck-stone': {
        name: 'Stone of Good Luck (Luckstone)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '4,200 gp',
        costValue: 420000,
        attunement: 'any',
        description: 'While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.',
        source: 'DMG'
    },
'mace-of-disruption': {
        name: 'Mace of Disruption',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'mace',
        rarity: 'rare',
        weight: 4,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        damage: '1d6',
        damageType: 'bludgeoning',
        properties: ['extra radiant damage vs undead/fiends'],
        description: 'When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn. While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.',
        source: 'DMG'
    },
    'mace-of-smiting': {
        name: 'Mace of Smiting',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'mace',
        rarity: 'rare',
        weight: 4,
        cost: '7,000 gp',
        costValue: 700000,
        attunement: 'none',
        damage: '1d6+3',
        damageType: 'bludgeoning',
        properties: ['+3 weapon', 'extra damage vs constructs'],
        description: 'You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you roll a 20 on an attack roll made with this weapon, the target takes an extra 2d6 bludgeoning damage, or 4d6 bludgeoning damage if it\'s a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.',
        source: 'DMG'
    },
    'mace-of-terror': {
        name: 'Mace of Terror',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'mace',
        rarity: 'rare',
        weight: 4,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        damage: '1d6',
        damageType: 'bludgeoning',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can\'t willingly move to a space within 30 feet of you. It also can\'t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.',
        source: 'DMG'
    },
    'mantle-of-spell-resistance': {
        name: 'Mantle of Spell Resistance',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'any',
        description: 'You have advantage on saving throws against spells while you wear this cloak.',
        source: 'DMG'
    },
    'manual-of-bodily-health': {
        name: 'Manual of Bodily Health',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book\'s contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.',
        source: 'DMG'
    },
    'manual-of-gainful-exercise': {
        name: 'Manual of Gainful Exercise',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book\'s contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.',
        source: 'DMG'
    },
    'manual-of-golems': {
        name: 'Manual of Golems',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: 'varies',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. The book is consumed when the golem is completed. Clay Golem: 65,000 gp, 30 days. Flesh Golem: 50,000 gp, 60 days. Iron Golem: 100,000 gp, 120 days. Stone Golem: 80,000 gp, 90 days.',
        source: 'DMG'
    },
    'manual-of-quickness-of-action': {
        name: 'Manual of Quickness of Action',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 5,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        consumable: true,
        description: 'This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book\'s contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.',
        source: 'DMG'
    },
    'marvelous-pigments': {
        name: 'Marvelous Pigments',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'none',
        consumable: true,
        description: 'Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image. Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain featuresâ€”such as a door, a pit, flowers, trees, cells, rooms, or weaponsâ€”that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet.',
        source: 'DMG'
    },
    'medallion-of-thoughts': {
        name: 'Medallion of Thoughts',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'mirror-of-life-trapping': {
        name: 'Mirror of Life Trapping',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 50,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'none',
        description: 'When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds. It can be hung or placed on a surface and then activated by speaking its command word. It remains activated until you use an action to speak the command word again. Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror\'s twelve extradimensional cells.',
        source: 'DMG'
    },
    'mithral-armor': {
        name: 'Mithral Armor',
        type: 'armor',
        subtype: 'any medium or heavy',
        rarity: 'uncommon',
        weight: 'varies (lighter)',
        cost: '800 gp',
        costValue: 80000,
        attunement: 'none',
        description: 'Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn\'t.',
        source: 'DMG'
    },
    'moonblade': {
        name: 'Moonblade',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longsword',
        rarity: 'legendary',
        weight: 3,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'elf or half-elf of neutral good alignment',
        damage: '1d8',
        damageType: 'slashing',
        properties: ['finesse', 'versatile (1d10)', 'sentient'],
        description: 'Of all the magic items created by the elves, one of the most prized and jealously guarded is a moonblade. In ancient times, nearly all combative elven noble houses warded their bloodlines with these sentient, semi-divine blades. Over time, some blades gained the ability to evolve with their wielder through the generations, taking on additional magical properties to meet the challenges facing each new owner. A moonblade has one rune on its blade for each master it has served. A moonblade won\'t serve anyone it regards as craven, erratic, corrupt, or at odds with preserving and protecting elvenkind.',
        source: 'DMG'
    },
// ============================================
    // N ITEMS
    // ============================================
    
    'necklace-of-adaptation': {
        name: 'Necklace of Adaptation',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'any',
        description: 'While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as cloudkill and stinking cloud effects, inhaled poisons, and the breath weapons of some dragons).',
        source: 'DMG'
    },
    'necklace-of-fireballs': {
        name: 'Necklace of Fireballs',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '6,400 gp',
        costValue: 640000,
        attunement: 'none',
        consumable: true,
        description: 'This necklace has 1d6+3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level fireball spell (save DC 15). You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the fireball by 1 for each bead beyond the first.',
        source: 'DMG'
    },
    'necklace-of-prayer-beads': {
        name: 'Necklace of Prayer Beads',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 1,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'cleric, druid, or paladin',
        description: 'This necklace has 1d4+2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic. Each magic bead has a different power: Bead of Blessing (cast Bless), Bead of Curing (cast Cure Wounds 2nd level, Lesser Restoration, or Greater Restoration), Bead of Favor (cast Greater Restoration), Bead of Smiting (cast Branding Smite), Bead of Summons (cast Planar Ally), Bead of Wind Walking (cast Wind Walk).',
        source: 'DMG'
    },
    'nine-lives-stealer': {
        name: 'Nine Lives Stealer',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword',
        rarity: 'very-rare',
        weight: 3,
        cost: '24,000 gp',
        costValue: 2400000,
        attunement: 'any',
        damage: 'varies',
        damageType: 'slashing',
        properties: ['+2 weapon', 'soul stealing'],
        charges: 9,
        description: 'You gain a +2 bonus to attack and damage rolls made with this magic weapon. The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.',
        source: 'DMG'
    },

    // ============================================
    // O ITEMS
    // ============================================
    
    'oathbow': {
        name: 'Oathbow',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longbow',
        rarity: 'very-rare',
        weight: 2,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        damage: '1d8',
        damageType: 'piercing',
        properties: ['ammunition (150/600)', 'heavy', 'two-handed', 'sworn enemy'],
        description: 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn. When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage. While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.',
        source: 'DMG'
    },
    'oil-of-etherealness': {
        name: 'Oil of Etherealness',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '1,920 gp',
        costValue: 192000,
        attunement: 'none',
        consumable: true,
        description: 'Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it\'s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.',
        source: 'DMG'
    },
    'oil-of-sharpness': {
        name: 'Oil of Sharpness',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '3,200 gp',
        costValue: 320000,
        attunement: 'none',
        consumable: true,
        description: 'This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.',
        source: 'DMG'
    },
    'oil-of-slipperiness': {
        name: 'Oil of Slipperiness',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '480 gp',
        costValue: 48000,
        attunement: 'none',
        consumable: true,
        description: 'This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it\'s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a Freedom of Movement spell for 8 hours. Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.',
        source: 'DMG'
    },

    // ============================================
    // P ITEMS
    // ============================================
    
    'pearl-of-power': {
        name: 'Pearl of Power',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'spellcaster',
        description: 'While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you use the pearl, it can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'periapt-of-health': {
        name: 'Periapt of Health',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        description: 'You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed you while you wear the pendant.',
        source: 'DMG'
    },
    'periapt-of-proof-against-poison': {
        name: 'Periapt of Proof against Poison',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        description: 'This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.',
        source: 'DMG'
    },
    'periapt-of-wound-closure': {
        name: 'Periapt of Wound Closure',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.',
        source: 'DMG'
    },
    'philter-of-love': {
        name: 'Philter of Love',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '200 gp',
        costValue: 20000,
        attunement: 'none',
        consumable: true,
        description: 'The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion\'s rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.',
        source: 'DMG'
    },
    'pipes-of-haunting': {
        name: 'Pipes of Haunting',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren\'t hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'pipes-of-the-sewers': {
        name: 'Pipes of the Sewers',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them. The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren\'t enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren\'t under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'plate-armor-of-etherealness': {
        name: 'Plate Armor of Etherealness',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'legendary',
        weight: 65,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'any',
        ac: 18,
        strengthReq: 15,
        stealthDisadvantage: true,
        description: 'While you\'re wearing this armor, you can speak its command word as an action to gain the effect of the Etherealness spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'portable-hole': {
        name: 'Portable Hole',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'none',
        description: 'This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter. You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can\'t be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it. You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what\'s in it, the hole weighs next to nothing.',
        source: 'DMG'
    },
    'potion-of-animal-friendship': {
        name: 'Potion of Animal Friendship',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '200 gp',
        costValue: 20000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you can cast the Animal Friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.',
        source: 'DMG'
    },
    'potion-of-clairvoyance': {
        name: 'Potion of Clairvoyance',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '960 gp',
        costValue: 96000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain the effect of the Clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.',
        source: 'DMG'
    },
    'potion-of-climbing': {
        name: 'Potion of Climbing',
        type: 'potion',
        rarity: 'common',
        weight: 0.5,
        cost: '50 gp',
        costValue: 5000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.',
        source: 'DMG'
    },
    'potion-of-diminution': {
        name: 'Potion of Diminution',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '960 gp',
        costValue: 96000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain the "reduce" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion\'s liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.',
        source: 'DMG'
    },
    'potion-of-fire-breath': {
        name: 'Potion of Fire Breath',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '150 gp',
        costValue: 15000,
        attunement: 'none',
        consumable: true,
        description: 'After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion\'s orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.',
        source: 'DMG'
    },
    'potion-of-flying': {
        name: 'Potion of Flying',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you\'re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion\'s clear liquid floats at the top of its container and has cloudy white impurities drifting in it.',
        source: 'DMG'
    },
    'potion-of-gaseous-form': {
        name: 'Potion of Gaseous Form',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '960 gp',
        costValue: 96000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion\'s container seems to hold fog that moves and pours like water.',
        source: 'DMG'
    },
    'potion-of-giant-strength-cloud': {
        name: 'Potion of Cloud Giant Strength',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a cloud giant.',
        source: 'DMG'
    },
    'potion-of-giant-strength-fire': {
        name: 'Potion of Fire Giant Strength',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a fire giant.',
        source: 'DMG'
    },
    'potion-of-giant-strength-frost': {
        name: 'Potion of Frost Giant Strength',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a frost giant.',
        source: 'DMG'
    },
    'potion-of-giant-strength-hill': {
        name: 'Potion of Hill Giant Strength',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a hill giant.',
        source: 'DMG'
    },
    'potion-of-giant-strength-stone': {
        name: 'Potion of Stone Giant Strength',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a stone giant.',
        source: 'DMG'
    },
    'potion-of-giant-strength-storm': {
        name: 'Potion of Storm Giant Strength',
        type: 'potion',
        rarity: 'legendary',
        weight: 0.5,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a storm giant.',
        source: 'DMG'
    },
    'potion-of-growth': {
        name: 'Potion of Growth',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '270 gp',
        costValue: 27000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain the "enlarge" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion\'s liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.',
        source: 'DMG'
    },
    'potion-of-healing': {
        name: 'Potion of Healing',
        type: 'potion',
        rarity: 'common',
        weight: 0.5,
        cost: '50 gp',
        costValue: 5000,
        attunement: 'none',
        consumable: true,
        healing: '2d4+2',
        description: 'You regain 2d4+2 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },
    'potion-of-greater-healing': {
        name: 'Potion of Greater Healing',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '200 gp',
        costValue: 20000,
        attunement: 'none',
        consumable: true,
        healing: '4d4+4',
        description: 'You regain 4d4+4 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },
    'potion-of-superior-healing': {
        name: 'Potion of Superior Healing',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        consumable: true,
        healing: '8d4+8',
        description: 'You regain 8d4+8 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },
    'potion-of-supreme-healing': {
        name: 'Potion of Supreme Healing',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        consumable: true,
        healing: '10d4+20',
        description: 'You regain 10d4+20 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },
    'potion-of-heroism': {
        name: 'Potion of Heroism',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        consumable: true,
        description: 'For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no concentration required). This blue potion bubbles and steams as if boiling.',
        source: 'DMG'
    },
    'potion-of-invisibility': {
        name: 'Potion of Invisibility',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        consumable: true,
        description: 'This potion\'s container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.',
        source: 'DMG'
    },
    'potion-of-invulnerability': {
        name: 'Potion of Invulnerability',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        consumable: true,
        description: 'For 1 minute after you drink this potion, you have resistance to all damage. The potion\'s syrupy liquid looks like liquified iron.',
        source: 'DMG'
    },
    'potion-of-longevity': {
        name: 'Potion of Longevity',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, your physical age is reduced by 1d6+6 years, to a minimum of 13 years. Each time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by 1d6+6 years. Suspended in this amber liquid are a scorpion\'s tail, an adder\'s fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.',
        source: 'DMG'
    },
    'potion-of-mind-reading': {
        name: 'Potion of Mind Reading',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13). The potion\'s dense, purple liquid has an ovoid cloud of pink floating in it.',
        source: 'DMG'
    },
    'potion-of-poison': {
        name: 'Potion of Poison',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '100 gp',
        costValue: 10000,
        attunement: 'none',
        consumable: true,
        description: 'This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An identify spell reveals its true nature. If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.',
        source: 'DMG'
    },
    'potion-of-resistance': {
        name: 'Potion of Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly from the options below: Acid, Cold, Fire, Force, Lightning, Necrotic, Poison, Psychic, Radiant, Thunder.',
        source: 'DMG'
    },
    'potion-of-speed': {
        name: 'Potion of Speed',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,500 gp',
        costValue: 250000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, you gain the effect of the Haste spell for 1 minute (no concentration required). The potion\'s yellow fluid is streaked with black and swirls on its own.',
        source: 'DMG'
    },
    'potion-of-vitality': {
        name: 'Potion of Vitality',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        consumable: true,
        description: 'When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion\'s crimson liquid regularly pulses with dull light, calling to mind a heartbeat.',
        source: 'DMG'
    },
    'potion-of-water-breathing': {
        name: 'Potion of Water Breathing',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.',
        source: 'DMG'
    },
// ============================================
    // Q ITEMS
    // ============================================
    
    'quaals-feather-token-anchor': {
        name: 'Quaal\'s Feather Token (Anchor)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can\'t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.',
        source: 'DMG'
    },
    'quaals-feather-token-bird': {
        name: 'Quaal\'s Feather Token (Bird)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc but obeys your simple commands and can\'t attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day, with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.',
        source: 'DMG'
    },
    'quaals-feather-token-fan': {
        name: 'Quaal\'s Feather Token (Fan)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.',
        source: 'DMG'
    },
    'quaals-feather-token-swan-boat': {
        name: 'Quaal\'s Feather Token (Swan Boat)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.',
        source: 'DMG'
    },
    'quaals-feather-token-tree': {
        name: 'Quaal\'s Feather Token (Tree)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.',
        source: 'DMG'
    },
    'quaals-feather-token-whip': {
        name: 'Quaal\'s Feather Token (Whip)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6+5 force damage. As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.',
        source: 'DMG'
    },
    'quiver-of-ehlonna': {
        name: 'Quiver of Ehlonna',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 2,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        description: 'Each of the quiver\'s three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears. You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.',
        source: 'DMG'
    },

    // ============================================
    // R ITEMS
    // ============================================
    
    'ring-of-animal-influence': {
        name: 'Ring of Animal Influence',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells: Animal Friendship (save DC 13), Fear (save DC 13) targeting only beasts, Speak with Animals.',
        source: 'DMG'
    },
    'ring-of-djinni-summoning': {
        name: 'Ring of Djinni Summoning',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '200,000 gp',
        costValue: 20000000,
        attunement: 'any',
        description: 'While wearing this ring, you can speak its command word as an action to summon a particular djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane. While summoned, the djinni is friendly to you and your companions. It obeys any commands you give it. If you fail to command it, the djinni defends itself against attackers but takes no other actions. After the djinni departs, it can\'t be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies.',
        source: 'DMG'
    },
    'ring-of-elemental-command-air': {
        name: 'Ring of Air Elemental Command',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '200,000 gp',
        costValue: 20000000,
        attunement: 'any',
        description: 'While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Air and they have disadvantage on attack rolls against you. You can speak and understand Auran. You have resistance to lightning damage. You have a flying speed equal to your walking speed and can hover. You can cast the following spells from the ring, expending the necessary number of charges: Chain Lightning (3 charges), Gust of Wind (2 charges), Wind Wall (1 charge).',
        source: 'DMG'
    },
    'ring-of-elemental-command-earth': {
        name: 'Ring of Earth Elemental Command',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '200,000 gp',
        costValue: 20000000,
        attunement: 'any',
        description: 'While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Earth and they have disadvantage on attack rolls against you. You can speak and understand Terran. You have resistance to acid damage. You can move through solid earth or rock as if those areas were difficult terrain. You can cast the following spells from the ring, expending the necessary number of charges: Stone Shape (2 charges), Stoneskin (3 charges), Wall of Stone (3 charges).',
        source: 'DMG'
    },
    'ring-of-elemental-command-fire': {
        name: 'Ring of Fire Elemental Command',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '200,000 gp',
        costValue: 20000000,
        attunement: 'any',
        description: 'While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Fire and they have disadvantage on attack rolls against you. You can speak and understand Ignan. You have immunity to fire damage. You can cast the following spells from the ring, expending the necessary number of charges: Burning Hands (1 charge), Fireball (2 charges), Wall of Fire (3 charges).',
        source: 'DMG'
    },
    'ring-of-elemental-command-water': {
        name: 'Ring of Water Elemental Command',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '200,000 gp',
        costValue: 20000000,
        attunement: 'any',
        description: 'While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Water and they have disadvantage on attack rolls against you. You can speak and understand Aquan. You have resistance to cold damage. You can breathe underwater and have a swimming speed equal to your walking speed. You can cast the following spells from the ring, expending the necessary number of charges: Create or Destroy Water (1 charge), Control Water (3 charges), Ice Storm (2 charges), Wall of Ice (3 charges).',
        source: 'DMG'
    },
    'ring-of-evasion': {
        name: 'Ring of Evasion',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.',
        source: 'DMG'
    },
    'ring-of-feather-falling': {
        name: 'Ring of Feather Falling',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'any',
        description: 'When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.',
        source: 'DMG'
    },
    'ring-of-free-action': {
        name: 'Ring of Free Action',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'While you wear this ring, difficult terrain doesn\'t cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.',
        source: 'DMG'
    },
    'ring-of-invisibility': {
        name: 'Ring of Invisibility',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '150,000 gp',
        costValue: 15000000,
        attunement: 'any',
        description: 'While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.',
        source: 'DMG'
    },
    'ring-of-jumping': {
        name: 'Ring of Jumping',
        type: 'ring',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.',
        source: 'DMG'
    },
    'ring-of-mind-shielding': {
        name: 'Ring of Mind Shielding',
        type: 'ring',
        rarity: 'uncommon',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'any',
        description: 'While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it. You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die. If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it.',
        source: 'DMG'
    },
    'ring-of-protection': {
        name: 'Ring of Protection',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '3,500 gp',
        costValue: 350000,
        attunement: 'any',
        description: 'You gain a +1 bonus to AC and saving throws while wearing this ring.',
        source: 'DMG'
    },
    'ring-of-regeneration': {
        name: 'Ring of Regeneration',
        type: 'ring',
        rarity: 'very-rare',
        weight: 0,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        description: 'While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6+1 days if you have at least 1 hit point the whole time.',
        source: 'DMG'
    },
    'ring-of-resistance': {
        name: 'Ring of Resistance',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type: Pearl (acid), Tourmaline (cold), Garnet (fire), Sapphire (force), Topaz (lightning), Jet (necrotic), Amethyst (poison), Jade (psychic), Yellow Diamond (radiant), Spinel (thunder).',
        source: 'DMG'
    },
    'ring-of-shooting-stars': {
        name: 'Ring of Shooting Stars',
        type: 'ring',
        rarity: 'very-rare',
        weight: 0,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any in outdoors at night',
        charges: 6,
        recharge: '1d6 at dawn',
        description: 'While wearing this ring in dim light or darkness, you can cast Dancing Lights and Light from the ring at will. The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn. Faerie Fire (1 charge), Ball Lightning (2 charges, creates four 60-foot range spheres dealing 5d4 lightning damage each), Shooting Stars (1 to 3 charges, launches 1-3 stars dealing 5d4 fire damage each in 15-foot cubes).',
        source: 'DMG'
    },
    'ring-of-spell-storing': {
        name: 'Ring of Spell Storing',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '18,000 gp',
        costValue: 1800000,
        attunement: 'any',
        description: 'This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM. Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can\'t hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.',
        source: 'DMG'
    },
    'ring-of-spell-turning': {
        name: 'Ring of Spell Turning',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'any',
        description: 'While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.',
        source: 'DMG'
    },
    'ring-of-swimming': {
        name: 'Ring of Swimming',
        type: 'ring',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'You have a swimming speed of 40 feet while wearing this ring.',
        source: 'DMG'
    },
    'ring-of-telekinesis': {
        name: 'Ring of Telekinesis',
        type: 'ring',
        rarity: 'very-rare',
        weight: 0,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        description: 'While wearing this ring, you can cast the Telekinesis spell at will, but you can target only objects that aren\'t being worn or carried.',
        source: 'DMG'
    },
    'ring-of-the-ram': {
        name: 'Ring of the Ram',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram\'s head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.',
        source: 'DMG'
    },
    'ring-of-three-wishes': {
        name: 'Ring of Three Wishes',
        type: 'ring',
        rarity: 'legendary',
        weight: 0,
        cost: '200,000 gp',
        costValue: 20000000,
        attunement: 'none',
        charges: 3,
        description: 'While wearing this ring, you can use an action to expend 1 of its 3 charges to cast the Wish spell from it. The ring becomes nonmagical when you use the last charge.',
        source: 'DMG'
    },
    'ring-of-warmth': {
        name: 'Ring of Warmth',
        type: 'ring',
        rarity: 'uncommon',
        weight: 0,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'any',
        description: 'While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as âˆ’50 degrees Fahrenheit.',
        source: 'DMG'
    },
    'ring-of-water-walking': {
        name: 'Ring of Water Walking',
        type: 'ring',
        rarity: 'uncommon',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        description: 'While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.',
        source: 'DMG'
    },
    'ring-of-x-ray-vision': {
        name: 'Ring of X-ray Vision',
        type: 'ring',
        rarity: 'rare',
        weight: 0,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a range of 30 feet. To you, solid objects within that range appear transparent and don\'t prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead. Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of exhaustion.',
        source: 'DMG'
    },
    'robe-of-eyes': {
        name: 'Robe of Eyes',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 4,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'any',
        description: 'This robe is adorned with eyelike patterns. While you wear the robe, you gain darkvision out to a range of 120 feet, you can see invisible creatures and objects, and you can see into the Ethereal Plane, all out to a range of 120 feet. The eyes on the robe can\'t be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe. A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the blindness on a success.',
        source: 'DMG'
    },
    'robe-of-scintillating-colors': {
        name: 'Robe of Scintillating Colors',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 4,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe\'s power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends.',
        source: 'DMG'
    },
    'robe-of-stars': {
        name: 'Robe of Stars',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 4,
        cost: '35,000 gp',
        costValue: 3500000,
        attunement: 'any',
        description: 'This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it. Six stars, located on the robe\'s upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe. While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or the nearest unoccupied space if that space is occupied.',
        source: 'DMG'
    },
    'robe-of-the-archmagi': {
        name: 'Robe of the Archmagi',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 4,
        cost: '120,000 gp',
        costValue: 12000000,
        attunement: 'sorcerer, warlock, or wizard',
        description: 'This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. The robe\'s color corresponds to the alignment for which the item was created. A white robe was made for good, gray for neutral, and black for evil. You can\'t attune to a robe of the archmagi that doesn\'t correspond to your alignment. You gain these benefits while wearing the robe: If you aren\'t wearing armor, your base Armor Class is 15 + your Dexterity modifier. You have advantage on saving throws against spells and other magical effects. Your spell save DC and spell attack bonus each increase by 2.',
        source: 'DMG'
    },
    'robe-of-useful-items': {
        name: 'Robe of Useful Items',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 4,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        description: 'This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment. The robe has two of each of the following patches: Dagger, Bullseye lantern (filled and lit), Steel mirror, 10-foot pole, Hempen rope (50 feet coiled), Sack. In addition, the robe has 4d4 other patches determined randomly.',
        source: 'DMG'
    },
    'rod-of-absorption': {
        name: 'Rod of Absorption',
        type: 'rod',
        rarity: 'very-rare',
        weight: 2,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        description: 'While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell\'s effect is canceled, and the spell\'s energyâ€”not the spell itselfâ€”is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can\'t absorb more. If you are targeted by a spell that the rod can\'t store, the rod has no effect on that spell. When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.',
        source: 'DMG'
    },
    'rod-of-alertness': {
        name: 'Rod of Alertness',
        type: 'rod',
        rarity: 'very-rare',
        weight: 2,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        description: 'This rod has a flanged head and the following properties. Alertness. While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative. Spells. While holding the rod, you can use an action to cast one of the following spells from it: Detect Evil and Good, Detect Magic, Detect Poison and Disease, See Invisibility. Protective Aura. As an action, you can plant the haft end of the rod in the ground, whereupon the rod\'s head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.',
        source: 'DMG'
    },
    'rod-of-lordly-might': {
        name: 'Rod of Lordly Might',
        type: 'rod',
        rarity: 'legendary',
        weight: 2,
        cost: '60,000 gp',
        costValue: 6000000,
        attunement: 'any',
        description: 'This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well. Six Buttons: transform into flame tongue sword, transform into +3 battleaxe, transform into +3 spear, drain life (5d4 necrotic), cause terror (DC 17), transform into climbing pole (50 ft). Three Other Properties: paralyzing touch, fear ray, and the ability to know true north.',
        source: 'DMG'
    },
    'rod-of-resurrection': {
        name: 'Rod of Resurrection',
        type: 'rod',
        rarity: 'legendary',
        weight: 2,
        cost: '100,000 gp',
        costValue: 10000000,
        attunement: 'cleric, druid, or paladin',
        charges: 5,
        description: 'The rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it: Heal (expends 1 charge), Resurrection (expends 5 charges). The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.',
        source: 'DMG'
    },
    'rod-of-rulership': {
        name: 'Rod of Rulership',
        type: 'rod',
        rarity: 'rare',
        weight: 2,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        description: 'You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'rod-of-security': {
        name: 'Rod of Security',
        type: 'rod',
        rarity: 'very-rare',
        weight: 2,
        cost: '30,000 gp',
        costValue: 3000000,
        attunement: 'none',
        description: 'While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space. For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don\'t age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down). When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can\'t be used again until ten days have passed.',
        source: 'DMG'
    },
    'rope-of-climbing': {
        name: 'Rope of Climbing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 3,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying. If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it. The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.',
        source: 'DMG'
    },
    'rope-of-entanglement': {
        name: 'Rope of Entanglement',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 3,
        cost: '4,000 gp',
        costValue: 400000,
        attunement: 'none',
        description: 'This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrained. You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target\'s choice). On a success, the creature is no longer restrained by the rope. The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.',
        source: 'DMG'
    },

    // ============================================
    // S ITEMS
    // ============================================
    
    'saddle-of-the-cavalier': {
        name: 'Saddle of the Cavalier',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 25,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        description: 'While in this saddle on a mount, you can\'t be dismounted against your will if you\'re conscious, and attack rolls against the mount have disadvantage.',
        source: 'DMG'
    },
    'scarab-of-protection': {
        name: 'Scarab of Protection',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '60,000 gp',
        costValue: 6000000,
        attunement: 'any',
        charges: 12,
        description: 'If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person: You have advantage on saving throws against spells. The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.',
        source: 'DMG'
    },
    'scimitar-of-speed': {
        name: 'Scimitar of Speed',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'scimitar',
        rarity: 'very-rare',
        weight: 3,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'any',
        damage: '1d6+2',
        damageType: 'slashing',
        properties: ['finesse', 'light', '+2 weapon', 'bonus action attack'],
        description: 'You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.',
        source: 'DMG'
    },
    'sentinel-shield': {
        name: 'Sentinel Shield',
        type: 'armor',
        subtype: 'shield',
        rarity: 'uncommon',
        weight: 6,
        cost: '1,000 gp',
        costValue: 100000,
        attunement: 'none',
        ac: '+2',
        description: 'While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.',
        source: 'DMG'
    },
    'shield-plus-1': {
        name: 'Shield +1',
        type: 'armor',
        subtype: 'shield',
        rarity: 'uncommon',
        weight: 6,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        ac: '+3',
        description: 'While holding this shield, you have a +1 bonus to AC. This bonus is in addition to the shield\'s normal bonus to AC.',
        source: 'DMG'
    },
    'shield-plus-2': {
        name: 'Shield +2',
        type: 'armor',
        subtype: 'shield',
        rarity: 'rare',
        weight: 6,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        ac: '+4',
        description: 'While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shield\'s normal bonus to AC.',
        source: 'DMG'
    },
    'shield-plus-3': {
        name: 'Shield +3',
        type: 'armor',
        subtype: 'shield',
        rarity: 'very-rare',
        weight: 6,
        cost: '24,000 gp',
        costValue: 2400000,
        attunement: 'none',
        ac: '+5',
        description: 'While holding this shield, you have a +3 bonus to AC. This bonus is in addition to the shield\'s normal bonus to AC.',
        source: 'DMG'
    },
    'shield-of-missile-attraction': {
        name: 'Shield of Missile Attraction',
        type: 'armor',
        subtype: 'shield',
        rarity: 'rare',
        weight: 6,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        ac: '+2',
        cursed: true,
        description: 'While holding this shield, you have resistance to damage from ranged weapon attacks. Curse. This shield is cursed. Attuning to it curses you until you are targeted by the Remove Curse spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead.',
        source: 'DMG'
    },
    'slippers-of-spider-climbing': {
        name: 'Slippers of Spider Climbing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        description: 'While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don\'t allow you to move this way on a slippery surface, such as one covered by ice or oil.',
        source: 'DMG'
    },
    'sovereign-glue': {
        name: 'Sovereign Glue',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0.5,
        cost: '2,400 gp',
        costValue: 240000,
        attunement: 'none',
        consumable: true,
        description: 'This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with oil of slipperiness. When found, a container contains 1d6+1 ounces. One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness, or with a wish spell.',
        source: 'DMG'
    },
    'spell-scroll-cantrip': {
        name: 'Spell Scroll (Cantrip)',
        type: 'scroll',
        rarity: 'common',
        weight: 0,
        cost: '15 gp',
        costValue: 1500,
        attunement: 'none',
        consumable: true,
        description: 'A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class\'s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell\'s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. The save DC is 13 and the attack bonus is +5 for a cantrip scroll.',
        source: 'DMG'
    },
    'spell-scroll-1st-level': {
        name: 'Spell Scroll (1st Level)',
        type: 'scroll',
        rarity: 'common',
        weight: 0,
        cost: '60 gp',
        costValue: 6000,
        attunement: 'none',
        consumable: true,
        description: 'A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class\'s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell\'s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. The save DC is 13 and the attack bonus is +5 for a 1st level scroll.',
        source: 'DMG'
    },
    'spell-scroll-2nd-level': {
        name: 'Spell Scroll (2nd Level)',
        type: 'scroll',
        rarity: 'uncommon',
        weight: 0,
        cost: '120 gp',
        costValue: 12000,
        attunement: 'none',
        consumable: true,
        description: 'A spell scroll bears the words of a single spell, written in a mystical cipher. The save DC is 13 and the attack bonus is +5 for a 2nd level scroll.',
        source: 'DMG'
    },
    'spell-scroll-3rd-level': {
        name: 'Spell Scroll (3rd Level)',
        type: 'scroll',
        rarity: 'uncommon',
        weight: 0,
        cost: '200 gp',
        costValue: 20000,
        attunement: 'none',
        consumable: true,
        description: 'A spell scroll bears the words of a single spell, written in a mystical cipher. The save DC is 15 and the attack bonus is +7 for a 3rd level scroll.',
        source: 'DMG'
    },
    'spell-scroll-4th-level': {
        name: 'Spell Scroll (4th Level)',
        type: 'scroll',
        rarity: 'rare',
        weight: 0,
        cost: '320 gp',
        costValue: 32000,
        attunement: 'none',
        consumable: true,
        description: 'A spell scroll bears the words of a single spell, written in a mystical cipher. The save DC is 15 and the attack bonus is +7 for a 4th level scroll.',
        source: 'DMG'
    },
    'spell-scroll-5th-level': {
        name: 'Spell Scroll (5th Level)',
        type: 'scroll',
        rarity: 'rare',
        weight: 0,
        cost: '640 gp',
        costValue: 64000,
        attunement: 'none',
        consumable: true,
        description: 'A spell scroll bears the words of a single spell, written in a mystical cipher. The save DC is 17 and the attack bonus is +9 for a 5th level scroll.',
        source: 'DMG'
    },
    'spellguard-shield': {
        name: 'Spellguard Shield',
        type: 'armor',
        subtype: 'shield',
        rarity: 'very-rare',
        weight: 6,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        ac: '+2',
        description: 'While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.',
        source: 'DMG'
    },
    'sphere-of-annihilation': {
        name: 'Sphere of Annihilation',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 0,
        cost: '90,000 gp',
        costValue: 9000000,
        attunement: 'none',
        description: 'This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it. The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn\'t wholly engulfed and obliterated by it takes 4d10 force damage. The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 Ã— your Intelligence modifier (minimum 5 feet).',
        source: 'DMG'
    },
    'staff-of-charming': {
        name: 'Staff of Charming',
        type: 'staff',
        rarity: 'rare',
        weight: 4,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'bard, cleric, druid, sorcerer, warlock, or wizard',
        charges: 10,
        recharge: '1d8+2 at dawn',
        description: 'While holding this staff, you can use an action to expend 1 of its 10 charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC. The staff can also be used as a magic quarterstaff. If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can\'t use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff\'s intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.',
        source: 'DMG'
    },
    'staff-of-fire': {
        name: 'Staff of Fire',
        type: 'staff',
        rarity: 'very-rare',
        weight: 4,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'druid, sorcerer, warlock, or wizard',
        charges: 10,
        recharge: '1d6+4 at dawn',
        description: 'You have resistance to fire damage while you hold this staff. The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Burning Hands (1 charge), Fireball (3 charges), or Wall of Fire (4 charges). The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.',
        source: 'DMG'
    },
    'staff-of-frost': {
        name: 'Staff of Frost',
        type: 'staff',
        rarity: 'very-rare',
        weight: 4,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'druid, sorcerer, warlock, or wizard',
        charges: 10,
        recharge: '1d6+4 at dawn',
        description: 'You have resistance to cold damage while you hold this staff. The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges). The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.',
        source: 'DMG'
    },
    'staff-of-healing': {
        name: 'Staff of Healing',
        type: 'staff',
        rarity: 'rare',
        weight: 4,
        cost: '13,000 gp',
        costValue: 1300000,
        attunement: 'bard, cleric, or druid',
        charges: 10,
        recharge: '1d6+4 at dawn',
        description: 'This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges). The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.',
        source: 'DMG'
    },
    'staff-of-power': {
        name: 'Staff of Power',
        type: 'staff',
        rarity: 'very-rare',
        weight: 4,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'sorcerer, warlock, or wizard',
        charges: 20,
        recharge: '2d8+4 at dawn',
        damage: '1d6+2',
        damageType: 'bludgeoning',
        description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls. The staff has 20 charges for the following properties. It regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage rolls but loses all other properties. On a 20, the staff regains 1d8+2 charges. Power Strike. When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target. Spells (various charges): Cone of Cold (5), Fireball (5th-level, 5), Globe of Invulnerability (6), Hold Monster (5), Levitate (2), Lightning Bolt (5th-level, 5), Magic Missile (1), Ray of Enfeeblement (1), Wall of Force (5). Retributive Strike. You can break the staff as an action, causing a devastating explosion.',
        source: 'DMG'
    },
    'staff-of-striking': {
        name: 'Staff of Striking',
        type: 'staff',
        rarity: 'very-rare',
        weight: 4,
        cost: '18,000 gp',
        costValue: 1800000,
        attunement: 'any',
        charges: 10,
        recharge: '1d6+4 at dawn',
        damage: '1d6+3',
        damageType: 'bludgeoning',
        description: 'This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.',
        source: 'DMG'
    },
    'staff-of-swarming-insects': {
        name: 'Staff of Swarming Insects',
        type: 'staff',
        rarity: 'rare',
        weight: 4,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'bard, cleric, druid, sorcerer, warlock, or wizard',
        charges: 10,
        recharge: '1d6+4 at dawn',
        description: 'This staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses. Spells. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges). Insect Cloud. While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.',
        source: 'DMG'
    },
    'staff-of-the-magi': {
        name: 'Staff of the Magi',
        type: 'staff',
        rarity: 'legendary',
        weight: 4,
        cost: '350,000 gp',
        costValue: 35000000,
        attunement: 'sorcerer, warlock, or wizard',
        charges: 50,
        recharge: '4d6+2 at dawn',
        description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls. The staff has 50 charges for the following properties. It regains 4d6+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12+1 charges. Spell Absorption. While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell\'s level. However, if doing so brings the staff\'s total number of charges above 50, the staff explodes as if you activated its retributive strike. Spells (various charges): Conjure Elemental (7), Dispel Magic (3), Fireball (7th-level, 7), Flaming Sphere (2), Ice Storm (4), Invisibility (2), Knock (2), Lightning Bolt (7th-level, 7), Passwall (5), Plane Shift (7), Telekinesis (5), Wall of Fire (4), Web (2). Retributive Strike. You can break the staff as an action, causing a devastating explosion.',
        source: 'DMG'
    },
    'staff-of-the-woodlands': {
        name: 'Staff of the Woodlands',
        type: 'staff',
        rarity: 'rare',
        weight: 4,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'druid',
        charges: 10,
        recharge: '1d6+4 at dawn',
        damage: '1d6+2',
        damageType: 'bludgeoning',
        description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls. The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff. Spells. You can use an action to expend 1 or more of the staff\'s charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges). Tree Form. You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.',
        source: 'DMG'
    },
    'staff-of-thunder-and-lightning': {
        name: 'Staff of Thunder and Lightning',
        type: 'staff',
        rarity: 'very-rare',
        weight: 4,
        cost: '25,000 gp',
        costValue: 2500000,
        attunement: 'any',
        damage: '1d6+2',
        damageType: 'bludgeoning',
        description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can\'t be used again until the next dawn. Lightning. When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage. Thunder. When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn. Lightning Strike. You can use an action to cause a bolt of lightning to leap from the staff\'s tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one. Thunderclap. You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn\'t deafened. Thunder and Lightning. You can use an action to use the Lightning Strike and Thunderclap properties at the same time.',
        source: 'DMG'
    },
    'staff-of-withering': {
        name: 'Staff of Withering',
        type: 'staff',
        rarity: 'rare',
        weight: 4,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'cleric, druid, or warlock',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This staff has 3 charges and regains 1d3 expended charges daily at dawn. The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.',
        source: 'DMG'
    },
    'stone-of-controlling-earth-elementals': {
        name: 'Stone of Controlling Earth Elementals',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 5,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'none',
        description: 'If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the Conjure Elemental spell. The stone can\'t be used this way again until the next dawn. The stone weighs 5 pounds.',
        source: 'DMG'
    },
    'sun-blade': {
        name: 'Sun Blade',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longsword',
        rarity: 'rare',
        weight: 3,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'any',
        damage: '1d8+2',
        damageType: 'radiant',
        properties: ['versatile (1d10+2)', 'finesse', '+2 weapon', 'extra damage vs undead'],
        description: 'This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade. You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage. The sword\'s luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.',
        source: 'DMG'
    },
    'sword-of-answering': {
        name: 'Sword of Answering',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longsword',
        rarity: 'legendary',
        weight: 3,
        cost: '75,000 gp',
        costValue: 7500000,
        attunement: 'creature of matching alignment',
        damage: '1d8+3',
        damageType: 'slashing',
        properties: ['versatile (1d10+3)', '+3 weapon', 'answering'],
        description: 'In the world of Greyhawk, only nine of these blades are known to exist. Each is patterned after the legendary sword Fragarach, which is variously translated as "Final Word." Each of the nine swords has its own name and alignment, and each bears a different gem in its pommel. You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealt with this special attack ignores any damage immunity or resistance the target has.',
        source: 'DMG'
    },
    'sword-of-life-stealing': {
        name: 'Sword of Life Stealing',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword',
        rarity: 'rare',
        weight: 3,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        damage: 'varies',
        damageType: 'varies',
        properties: ['life stealing on crit'],
        description: 'When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 3d6 necrotic damage, provided that the target isn\'t a construct or an undead. You gain temporary hit points equal to the extra damage dealt.',
        source: 'DMG'
    },
    'sword-of-sharpness': {
        name: 'Sword of Sharpness',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword that deals slashing damage',
        rarity: 'very-rare',
        weight: 3,
        cost: '18,000 gp',
        costValue: 1800000,
        attunement: 'any',
        damage: 'varies',
        damageType: 'slashing',
        properties: ['extra damage on 20', 'severs limbs'],
        description: 'When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target. When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 4d6 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target\'s limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead. In addition, you can speak the sword\'s command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.',
        source: 'DMG'
    },
    'sword-of-vengeance': {
        name: 'Sword of Vengeance',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword',
        rarity: 'uncommon',
        weight: 3,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'any',
        damage: 'varies +1',
        damageType: 'varies',
        properties: ['+1 weapon', 'cursed'],
        cursed: true,
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. Curse. This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one. In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can\'t reach the creature to make a melee attack against it.',
        source: 'DMG'
    },
    'sword-of-wounding': {
        name: 'Sword of Wounding',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'any sword',
        rarity: 'rare',
        weight: 3,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'any',
        damage: 'varies',
        damageType: 'varies',
        properties: ['wound on hit'],
        description: 'Hit points lost to this weapon\'s damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means. Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature\'s turns, it takes 1d4 necrotic damage for each time you\'ve wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.',
        source: 'DMG'
    },
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
        description: 'When you make an Intelligence (Arcana) check to control a sphere of annihilation while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a sphere of annihilation, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 Ã— your Intelligence modifier.',
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
        description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed. Effects range from summoning creatures, to casting various spells, to strange magical effects.',
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
    },

    // ============================================
    // ARTIFACTS (DMG)
    // ============================================

    'axe-of-the-dwarvish-lords': {
        name: 'Axe of the Dwarvish Lords',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'battleaxe',
        rarity: 'artifact',
        weight: 4,
        cost: 'priceless',
        attunement: 'dwarf',
        damage: '1d8+3',
        damageType: 'slashing',
        properties: ['+3 weapon', 'versatile (1d10+3)', 'thrown (20/60)', 'returns when thrown'],
        description: 'Seeing the peril his people faced, a young dwarf prince came to believe that his people needed something to unite them. Thus, he set out to forge a weapon that would be such a symbol. Aided by Moradin, the prince labored in the fire of his faith for many years. The result was the Axe of the Dwarvish Lords. You gain a +3 bonus to attack and damage rolls with this magic axe. The axe also functions as a belt of dwarvenkind, a dwarven thrower, and a sword of sharpness. Conjure Earth Elemental: Use an action to cast the spell (save DC 17). Travel the Depths: Can teleport to any location within the earth. Summon Dwarf: Once per day, summon a dwarf warrior spirit. Random Properties: 2 minor beneficial, 1 major beneficial, 2 minor detrimental.',
        source: 'DMG'
    },
    'book-of-exalted-deeds': {
        name: 'Book of Exalted Deeds',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 5,
        cost: 'priceless',
        attunement: 'creature of good alignment',
        description: 'The definitive treatise on all that is good in the multiverse, the fabled Book of Exalted Deeds figures prominently in many religions. Rather than being a single tome, the work encompasses many writings by celestial beings. Any non-good creature that tries to read the book takes 24d6 radiant damage. Destroying the book causes the reader to burst into divine radiance. If you spend 80 hours reading and studying the book, your Wisdom score increases by 2 (max 24), and you gain the ability to cast the hallow spell once per day. The book also grants: immunity to charm and fear, advantage on saving throws against spells from evil creatures, and the ability to cast healing word at will. Random Properties: 2 minor beneficial, 2 major beneficial.',
        source: 'DMG'
    },
    'book-of-vile-darkness': {
        name: 'Book of Vile Darkness',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 5,
        cost: 'priceless',
        attunement: 'creature of evil alignment',
        description: 'The contents of this foul manuscript of ineffable wickedness are the meat and drink of those in evil\'s thrall. No mortal was meant to know the secrets it contains, knowledge so vile that to even glimpse the words invites madness. Any non-evil creature that tries to read the book takes 24d6 psychic damage. If you spend 80 hours reading the book, your Constitution score increases by 2 (max 24), and you gain access to its foul magic. You can cast dominate monster (DC 18) once per day, and you command the allegiance of all evil creatures within 1 mile when you call. The book also lets you: create undead at will, remove conditions from yourself, and summon a Night Hag as an advisor. Random Properties: 2 minor beneficial, 1 major beneficial, 3 minor detrimental, 1 major detrimental. Curse: Touching the book makes you unwilling to part with it.',
        source: 'DMG'
    },
    'eye-of-vecna': {
        name: 'Eye of Vecna',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 0,
        cost: 'priceless',
        attunement: 'any',
        description: 'Seldom is the name of Vecna spoken except in a hushed voice. Vecna was, in his time, one of the mightiest of all wizards. Through dark magic and conquest, he forged a terrible empire. For all his power, Vecna couldn\'t escape his own mortality. He began to fear death and take steps to prevent his end. To attune the eye, you must gouge out your own eye and press the artifact into the empty socket. The Eye grafts itself to your head and becomes a golden eye with a slit pupil. While attuned: You have truesight out to 120 feet, you can use an action to see as if wearing a ring of X-ray vision, you can use an action to cast eyebite or clairvoyance. The Eye lets you paralyze or kill creatures you can see (DC 20 Constitution save). X-ray vision: Once per day, 1 minute duration. Random Properties: 1 minor beneficial, 1 major detrimental.',
        source: 'DMG'
    },
    'hand-of-vecna': {
        name: 'Hand of Vecna',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 0,
        cost: 'priceless',
        attunement: 'any',
        description: 'Seldom is the name of Vecna spoken except in a hushed voice. His undead hand is a feared relic. To attune the hand, you must lop off your left hand at the wrist and press the artifact against the stump. The hand grafts itself to your arm and becomes a shriveled, mummified hand with long, claw-like fingernails. While attuned: Your Strength score becomes 20 (unless already higher), any melee spell attack or melee weapon attack with the hand deals an extra 2d8 cold damage, you can use an action to cast finger of death (DC 18), and you can use an action to cast teleport. You can use an action to cast sleep (9th level version). The Hand lets you make a melee attack that instantly kills humanoids on a failed DC 20 Constitution save. Random Properties: 1 minor beneficial, 1 major detrimental.',
        source: 'DMG'
    },
    'orb-of-dragonkind': {
        name: 'Orb of Dragonkind',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'any',
        charges: 7,
        recharge: 'Regains 1d4+3 expended charges daily at dawn',
        description: 'Ages past, elves and humans waged a terrible war against evil dragons. When the world seemed doomed, powerful wizards came together and worked their greatest magic, forging five Orbs of Dragonkind to help them defeat the dragons. Each orb contains the essence of an evil dragon, a presence that resents any attempt to coax magic from it. To use the orb, you must win a contest of wills (DC 15 Charisma check). On failure, you are charmed by the orb. While controlling the orb, you can cast cure wounds (5th level, 3 charges), daylight (1 charge), death ward (2 charges), or scrying (3 charges). You can also cast detect magic at will. Call Dragons: Use an action to issue a telepathic call that extends 40 miles. Evil dragons feel compelled to come to you. Random Properties: 2 minor beneficial, 1 minor detrimental, 1 major detrimental.',
        source: 'DMG'
    },
    'sword-of-kas': {
        name: 'Sword of Kas',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longsword',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'any',
        damage: '2d6+3',
        damageType: 'slashing',
        properties: ['+3 weapon', 'versatile (2d6+3)', 'sentient', 'finesse'],
        description: 'When Vecna grew in power, he appointed an evil and ruthless lieutenant, Kas the Bloody-Handed, to act as his bodyguard and assassin. Kas coveted the Spider Throne and betrayed Vecna, cutting off Vecna\'s hand and plucking out his eye. The battle destroyed both of them, but both their spirits survived. The Sword of Kas was created by Vecna for his lieutenant. You gain a +3 bonus to attack and damage rolls. Critical hits deal an extra 2d10 slashing damage, and the target must make a DC 15 Constitution save or be unable to regain hit points for 1 minute. Spirit of Kas: The sword speaks to you, urging destruction of Vecna and all who serve him. While attuned: You have resistance to necrotic damage, your hit point maximum can\'t be reduced, and you can\'t be frightened. Spells: You can cast call lightning, divine word, or finger of death. Random Properties: 1 minor beneficial, 1 major beneficial, 1 minor detrimental, 1 major detrimental.',
        source: 'DMG'
    },
    'wand-of-orcus': {
        name: 'Wand of Orcus',
        type: 'wand',
        rarity: 'artifact',
        weight: 4,
        cost: 'priceless',
        attunement: 'any',
        charges: 7,
        recharge: 'Regains 1d4+3 expended charges daily at dawn',
        properties: ['+3 to spell attacks'],
        description: 'The ghastly Wand of Orcus rarely leaves Orcus\'s side. The wand is topped with a skull that once belonged to a human hero slain by Orcus. The wand can be wielded as a magic mace that grants a +3 bonus to attack and damage rolls. The wand deals an extra 2d12 necrotic damage to any target it hits. When you hit an undead with this weapon, that creature takes an extra 2d12 necrotic damage as the wand drains its animating force. While holding the wand, you can use an action to conjure up to 500 hit points worth of undead (zombies, skeletons, shadows, ghouls, ghasts, wights, or mummies). Spells (DC 18): animate dead, blight, circle of death (2 charges), finger of death (3 charges), power word kill (4 charges), speak with dead. Random Properties: 2 minor beneficial, 1 major beneficial, 2 minor detrimental, 1 major detrimental. Sentient: Chaotic evil, telepathic, urges you to spread death.',
        source: 'DMG'
    },

    // ============================================
    // ARTIFACTS (Tasha's Cauldron of Everything)
    // ============================================

    'demonomicon-of-iggwilv': {
        name: 'Demonomicon of Iggwilv',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 5,
        cost: 'priceless',
        attunement: 'any',
        description: 'An expansive treatise on the Abyss and the fiends that dwell there, the Demonomicon of Iggwilv was written by the infamous archmage Iggwilv, and duplicated through magical means. Each copy contains everything the original contained, including knowledge that can tear a reader\'s mind apart. Any non-evil creature that reads the book for 1 minute must make a DC 20 Intelligence saving throw. On failure, the creature takes 6d6 psychic damage, and its Intelligence and Wisdom scores become 1 for 30 days. While attuned: You have advantage on Intelligence checks to recall lore about demons, resistance to poison and psychic damage, and immunity to being charmed or frightened by fiends. Spells: You can cast dominate monster (demons only), gate (demons only), magic circle, or banishment. You can also summon a shadow demon once per day.',
        source: 'TCE'
    },
    'mighty-servant-of-leuk-o': {
        name: 'Mighty Servant of Leuk-o',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 0,
        cost: 'priceless',
        attunement: '2 creatures',
        description: 'Named for the warlord who infamously employed it, the Mighty Servant of Leuk-o is a fantastically powerful construct. A 10-foot-tall machine of metal and riveted plates, it requires two attuned creatures to pilot it: one in its head and one in its chest. The Mighty Servant is a Huge construct with AC 22, 310 hit points, and a movement speed of 60 ft. While piloting, you can use its Destructive Fist attack (melee, +14 to hit, 4d12+7 force damage). The Servant has immunity to all conditions, immunity to fire, poison, and psychic damage, and resistance to all other damage. It also has: Helm of Perfect Sight (truesight 120 ft), Crushing Charge (extra 6d12 damage if moving 20+ ft), and Antimagic Cone (60 ft cone from eyes). Flaw: The Servant craves destruction and may rebel. Random Properties: 1 minor beneficial, 1 major detrimental.',
        source: 'TCE'
    },
    'teeth-of-dahlver-nar': {
        name: 'Teeth of Dahlver-Nar',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 0,
        cost: 'priceless',
        attunement: 'any',
        description: 'The Teeth of Dahlver-Nar are the remains of a priest who gathered specimens from all sorts of creatures over his lifetime. A collection of teeth in a tarnished brass box, these artifacts can be implanted in place of your own teeth. When implanting a tooth (a process requiring 1 minute), you gain the benefits of that tooth but also suffer strange afflictions. There are 32 teeth, each with different powers such as: Unicorn Tooth (detect evil and good at will), Planetar Tooth (fly 30 ft), Solar Tooth (searing smite at 5th level), Mind Flayer Tooth (detect thoughts), Vampire Tooth (bite attack dealing 1d6 piercing + 3d6 necrotic), Dragon Tooth (breath weapon), and more. Removing a tooth ends its benefits and afflictions. Random Properties: Varies by tooth. Side Effects: Various madness and physical transformations.',
        source: 'TCE'
    },

    // ============================================
    // ARTIFACTS (Adventure Modules)
    // ============================================

    'ring-of-winter': {
        name: 'Ring of Winter',
        type: 'ring',
        rarity: 'artifact',
        weight: 0,
        cost: 'priceless',
        attunement: 'any',
        description: 'The Ring of Winter is an artifact that was made by an archomental of ice long ago. It is a plain gold band that grows cold when worn. While wearing this ring, you gain the following benefits: You are immune to cold damage. You don\'t age and can\'t be aged magically. You don\'t need food, drink, or air. While the Ring of Winter is on your person, you can cast cone of cold, wall of ice, Otiluke\'s freezing sphere, and sleet storm at will (spell save DC 17). Ice Age: If the ring remains on your finger for 30 days, the area within 1 mile of you becomes a frozen wasteland. Creatures within 120 feet take 2d6 cold damage at the start of each of their turns. Curse: The ring makes you feel cold emotionally, making you indifferent to the suffering of others. Random Properties: 2 minor beneficial, 1 minor detrimental.',
        source: 'TOA'
    },
    'sword-of-zariel': {
        name: 'Sword of Zariel',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longsword',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'creature of good alignment',
        damage: '2d6+3',
        damageType: 'radiant',
        properties: ['+3 weapon', 'holy avenger', 'versatile'],
        description: 'This longsword belonged to the angel Zariel before her fall from grace. It is a celestial weapon of incredible power. You gain a +3 bonus to attack and damage rolls with this sword. The sword deals radiant damage instead of slashing. Against fiends and undead, the sword deals an extra 2d10 radiant damage. While holding the sword, you can use an action to give yourself a flying speed of 90 feet for 1 hour. While you hold the sword, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet. You are immune to the frightened condition. You can use a bonus action to give all creatures of your choice within 30 feet resistance to fire, necrotic, and radiant damage for 1 minute. Random Properties: 2 major beneficial, 1 minor beneficial, 1 major detrimental.',
        source: 'BGDA'
    },
    'mask-of-the-dragon-queen': {
        name: 'Mask of the Dragon Queen',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 1,
        cost: 'priceless',
        attunement: 'any',
        description: 'The Mask of the Dragon Queen is a collection of five Dragon Masks, each representing one of the five chromatic dragon types. When all five masks are combined, they form this single, terrible artifact. While attuned to the Mask, you gain the following benefits: You have immunity to acid, cold, fire, lightning, and poison damage. You can speak and understand Draconic. You have blindsight out to 60 feet. You have advantage on saving throws against being charmed or frightened. Once per day, you can use an action to gain the following benefits for 1 hour: You sprout dragon wings and gain a flying speed of 60 feet. You can use a breath weapon as a bonus action (15d8 damage of any chromatic type, 60-foot cone, DC 18 Dexterity save for half). Legendary Resistance (3/day). The Mask can summon Tiamat under specific circumstances.',
        source: 'ROT'
    },
    'wyrmskull-throne': {
        name: 'Wyrmskull Throne',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 0,
        cost: 'priceless',
        attunement: 'any',
        description: 'Built by dwarves and imbued with the power of dragons, the Wyrmskull Throne is a massive throne carved from obsidian and adorned with dragon skulls. A creature seated on the throne can harness the skulls\' magic. While attuned and seated: You have resistance to cold, fire, lightning, necrotic, and poison damage. You have truesight out to 60 feet. You can cast charm person, mass suggestion, and scrying (all at will), with a spell save DC of 21. The throne can summon an adult white, blue, green, black, or red dragon (your choice) once per day. The dragon is friendly to you and follows your commands for 1 hour. You can use an action to issue a telepathic call that reaches all dragons within 40 miles, who must succeed on a DC 21 Wisdom save or be compelled to come to you. Random Properties: 2 major beneficial, 1 minor detrimental, 1 major detrimental.',
        source: 'SKT'
    },
    'shield-of-the-hidden-lord': {
        name: 'Shield of the Hidden Lord',
        type: 'shield',
        rarity: 'artifact',
        weight: 6,
        cost: 'priceless',
        attunement: 'any',
        ac: 2,
        acBonus: 2,
        properties: ['+2 to AC'],
        description: 'The Shield of the Hidden Lord is a sentient, lawful evil shield that speaks to its wielder telepathically. The shield contains the imprisoned essence of Gargauth, a pit fiend who desires freedom above all else. While holding this shield, you gain a +2 bonus to AC and saving throws. The shield also grants you resistance to fire damage. Gargauth can cast fireball (DC 13) once per day. The shield has truesight out to 60 feet and can sense when someone lies to you. Gargauth constantly attempts to corrupt you, whispering suggestions of evil deeds and offering bargains for greater power. If you fall to his influence, he may possess you or trick you into freeing him.',
        cursed: true,
        curseDescription: 'The pit fiend Gargauth is imprisoned within this shield and constantly whispers temptations. He seeks to corrupt the wielder and eventually gain freedom through any means necessary.',
        source: 'BGDA'
    },

    // ============================================
    // ARTIFACTS (Mythic Odysseys of Theros)
    // ============================================

    'akmon-hammer-of-purphoros': {
        name: 'Akmon, Hammer of Purphoros',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'warhammer',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8+3',
        damageType: 'bludgeoning',
        properties: ['+3 weapon', 'versatile (1d10+3)'],
        description: 'Purphoros, god of the forge, created this mighty hammer to craft the weapons of the gods. The hammer has been known to fall into the hands of mortals who earn Purphoros\'s favor. While attuned to this weapon, you gain a +3 bonus to attack and damage rolls, and attacks deal an extra 3d10 fire damage. You have resistance to fire damage and immunity to exhaustion. You gain proficiency with smith\'s tools if you don\'t already have it, and your proficiency bonus is doubled for checks using them. Blessings of the Forge: Based on your piety level, you gain minor beneficial properties at piety 10+, major beneficial at 25+, and another major beneficial at 50+. Spells (DC 18): animate objects, fabricate, heat metal. Can be used to create magic items as if in Purphoros\'s forge.',
        source: 'MOT'
    },
    'dekella-bident-of-thassa': {
        name: 'Dekella, Bident of Thassa',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'trident',
        rarity: 'artifact',
        weight: 4,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d6+3',
        damageType: 'piercing',
        properties: ['+3 weapon', 'versatile (1d8+3)', 'thrown (20/60)'],
        description: 'Thassa, god of the sea, wields this two-pronged spear to command the oceans. Mortals who prove themselves worthy may find it in their hands. While attuned, you gain a +3 bonus to attack and damage rolls, and attacks deal an extra 2d8 cold damage. You gain a swimming speed of 60 feet and can breathe underwater. Blessings of the Sea: At piety 10+, you gain a minor beneficial property. At 25+, you can command waves within 1 mile. At 50+, you can create or dispel storms. Spells (DC 18): dominate monster (sea creatures only), true polymorph, control water. You can walk on water at will.',
        source: 'MOT'
    },
    'ephixis-bow-of-nylea': {
        name: 'Ephixis, Bow of Nylea',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longbow',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8+3',
        damageType: 'piercing',
        properties: ['+3 weapon', 'ammunition', 'heavy', 'two-handed', 'range (150/600)'],
        description: 'Nylea, god of the hunt, crafted this bow from a living branch of her sacred grove. The bow creates its own arrows when drawn. While attuned, you gain a +3 bonus to attack and damage rolls, and attacks deal an extra 2d8 radiant damage against aberrations, celestials, fey, fiends, and undead. The bow creates magical arrows when you draw it, and you never run out of ammunition. Blessings of the Hunt: At piety 10+, you gain a minor beneficial property. At 25+, creatures can\'t hide from you within 60 feet. At 50+, you can see invisible creatures. Spells (DC 18): conjure animals, tree stride, commune with nature.',
        source: 'MOT'
    },
    'khrusor-spear-of-heliod': {
        name: 'Khrusor, Spear of Heliod',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'spear',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d6+3',
        damageType: 'piercing',
        properties: ['+3 weapon', 'versatile (1d8+3)', 'thrown (20/60)'],
        description: 'Heliod, god of the sun, uses this golden spear to bring light to Theros. Its point gleams with the sun\'s radiance. While attuned, you gain a +3 bonus to attack and damage rolls, and attacks deal an extra 2d8 radiant damage. The spear sheds bright light in a 30-foot radius and dim light for another 30 feet (sunlight). You gain 15 temporary hit points each dawn. Blessings of the Sun: At piety 10+, 25+, and 50+, you gain beneficial properties. Sun\'s Retaliation: When a creature within 5 feet hits you, you can use your reaction to blind it until the start of its next turn. Spells (10 charges, DC 18): guiding bolt (1 charge), daylight (3 charges), sunbeam (6 charges).',
        source: 'MOT'
    },
    'mastix-whip-of-erebos': {
        name: 'Mastix, Whip of Erebos',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'whip',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d4+3',
        damageType: 'necrotic',
        properties: ['+3 weapon', 'finesse', 'reach'],
        description: 'Erebos, god of the dead, uses this whip to drag souls to the Underworld. The whip is crafted from the darkness between stars. While attuned, you gain a +3 bonus to attack and damage rolls. The weapon deals necrotic damage instead of slashing, and deals an extra 2d8 necrotic damage. You regain hit points equal to half the necrotic damage dealt. Once per dusk, you can extend the whip\'s reach to 300 feet. Blessings of the Dead: At piety levels, you gain beneficial and detrimental properties. Spells (once per dusk each, DC 18): circle of death, dominate monster (undead only). Creatures killed by this weapon can\'t be raised except by wish.',
        source: 'MOT'
    },

    // ============================================
    // ARTIFACTS (Explorer's Guide to Wildemount - Arms of the Betrayers)
    // ============================================

    'blade-of-broken-mirrors': {
        name: 'Blade of Broken Mirrors',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'dagger',
        rarity: 'artifact',
        weight: 1,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d4',
        damageType: 'piercing',
        properties: ['finesse', 'light', 'thrown (20/60)', 'returns when thrown'],
        description: 'A weapon of Tharizdun, the Chained Oblivion, this dagger was forged from stone and contains a glabrezu named Ragazuu. The blade constantly shifts and changes appearance. Dormant: +1 weapon, returns when thrown, you learn Abyssal. Awakened: +2, you can cast disguise self at will, advantage on Deception checks. Exalted: +3, you can cast mislead once per long rest, you can become invisible and create an illusory double. The demon within whispers of deception and seeks to spread chaos in Tharizdun\'s name.',
        source: 'EGW'
    },
    'grovelthrash': {
        name: 'Grovelthrash',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'warhammer',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8',
        damageType: 'bludgeoning',
        properties: ['versatile (1d10)'],
        description: 'Created by Torog, the Crawling King, this obsidian warhammer contains an ultraloth named Ciria. It delights in suffering. Dormant: +1 weapon, deal extra damage equal to your proficiency bonus when at half HP or less. Awakened: +2, when you take damage, you can use your reaction to deal equal psychic damage to attacker (30 ft). You can cast earth tremor. Exalted: +3, you gain 30 ft burrow speed through earth/stone, 2d6 extra damage when below half HP. The demon within urges you to embrace pain and suffering.',
        source: 'EGW'
    },
    'lash-of-shadows': {
        name: 'Lash of Shadows',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'whip',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d4',
        damageType: 'slashing',
        properties: ['finesse', 'reach'],
        description: 'Zehir, the Cloaked Serpent, created this five-headed snake whip that contains a marilith named Sizlifeth. Dormant: +1 weapon, deals extra 1d6 poison damage. You can cast poison spray. Awakened: +2, deals extra 2d6 poison damage, you can apply special poisons that cause blindness, paralysis, or 3d6 extra poison. Exalted: +3, deals extra 3d6 poison damage, you can apply petrifying poison (DC 15 Con save). The demon within revels in venom and assassination.',
        source: 'EGW'
    },
    'mace-of-the-black-crown': {
        name: 'Mace of the Black Crown',
        type: 'weapon',
        weaponType: 'simple',
        subtype: 'mace',
        rarity: 'artifact',
        weight: 4,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d6',
        damageType: 'bludgeoning',
        properties: [],
        description: 'Asmodeus, Lord of the Nine Hells, created this mace that contains a pit fiend loyal to him. The mace is a tool of temptation and domination. Dormant: +1 weapon, deals extra 1d6 fire damage, you learn Infernal. Awakened: +2, deals extra 2d6 fire damage, you have resistance to fire and poison damage, you can cast charm person and suggestion. Exalted: +3, deals extra 3d6 fire damage, you can summon a devil once per long rest. The fiend within constantly offers bargains for greater power.',
        source: 'EGW'
    },
    'ruins-wake': {
        name: 'Ruin\'s Wake',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'spear',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d6',
        damageType: 'piercing',
        properties: ['versatile (1d8)', 'thrown (20/60)', 'returns when thrown'],
        description: 'Gruumsh, the Ruiner, created this spear from the bones of an ancient gold dragon. It contains a demon loyal to the god of destruction. Dormant: +1 weapon, returns when thrown, once per short rest you can make a reaction attack when hit. Awakened: +2, thrown as a 60-foot line of lightning (8d6 damage, Dex save for half), can cast haste on yourself once per long rest. Exalted: +3, the lightning line deals 12d6, you can grant allies advantage on attacks as a bonus action. The weapon craves violence and bloodshed.',
        source: 'EGW'
    },
    'silken-spite': {
        name: 'Silken Spite',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'rapier',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8',
        damageType: 'piercing',
        properties: ['finesse'],
        description: 'Lolth, the Spider Queen, wove this rapier from spite itself. It contains a demon that whispers paranoid thoughts. Dormant: +1 weapon, deals extra 1d6 poison, 30 ft climb speed, can cast web once per long rest. Awakened: +2, deals extra 2d6 poison, you can cast darkness, levitate, faerie fire. You can see through magical darkness. Exalted: +3, deals extra 3d6 poison, you can teleport 60 ft through shadows, immune to being restrained. The demon makes you believe everyone plots against you.',
        source: 'EGW'
    },
    'the-bloody-end': {
        name: 'The Bloody End',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'morningstar',
        rarity: 'artifact',
        weight: 4,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8',
        damageType: 'piercing',
        properties: [],
        description: 'Bane, the Strife Emperor, created this morningstar to inspire fear and domination. It contains a demon that craves subjugation. Dormant: +1 weapon, when you reduce a creature to 0 HP, you gain temp HP equal to your Constitution modifier + proficiency bonus. You can cast command. Awakened: +2, you can cast hold person and zone of truth, temp HP doubles when killing. Exalted: +3, you can cast dominate person and compulsion, fear aura (30 ft) when you kill. The demon urges total domination of others.',
        source: 'EGW'
    },
    'will-of-the-talon': {
        name: 'Will of the Talon',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'war pick',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8',
        damageType: 'piercing',
        properties: [],
        description: 'Tiamat, Queen of Evil Dragons, created this war pick from one of her own talons. It contains a demon of greed and destruction. Dormant: +1 weapon, you can speak and understand Draconic, deals extra 1d6 damage of a chromatic type (your choice when you hit). Awakened: +2, 2d6 extra chromatic damage, you can cast command and fear, frightful presence 30 ft. Exalted: +3, 3d6 extra chromatic damage, you gain a breath weapon (60 ft cone, 12d6 chromatic damage, once per long rest). The demon demands you hoard treasure and destroy enemies.',
        source: 'EGW'
    },

    // ============================================
    // ARTIFACTS (Explorer's Guide to Wildemount - Vestiges of Divergence)
    // ============================================

    'mythcarver': {
        name: 'Mythcarver',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longsword',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'bard',
        damage: '1d8',
        damageType: 'slashing',
        properties: ['versatile (1d10)'],
        description: 'This sentient longsword belonged to the legendary White Duke and is imbued with the spirits of heroic bards. Dormant: +1 weapon, you can cast speak with dead once per short rest by touching a corpse with the blade. Awakened: +2, deals extra 1d6 force damage, you learn 3 bard spells of your choice, extra Bardic Inspiration die per long rest. Exalted: +3, deals extra 2d6 force damage, you can cast legend lore at will, when you use Bardic Inspiration, you and target gain 10 temp HP. The sword speaks to you of great heroes and legendary tales.',
        source: 'EGW'
    },
    'fenthras': {
        name: 'Fenthras',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'longbow',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        damage: '1d8',
        damageType: 'piercing',
        properties: ['ammunition', 'heavy', 'two-handed', 'range (150/600)'],
        description: 'This bow is woven from the heartwood of the oldest tree in the Fey Realm, blessed by Melora, the Wildmother. Dormant: +1 weapon, once per turn when you hit, deal extra 1d4 lightning damage. Awakened: +2, extra 1d6 lightning damage, you can cast conjure barrage once per short rest using magical arrows. Exalted: +3, extra 2d6 lightning damage, you can cast lightning arrow at will without expending a spell slot, enemies hit have disadvantage on concentration checks. The bow hums with primordial energy.',
        source: 'EGW'
    },
    'danoths-visor': {
        name: 'Danoth\'s Visor',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 1,
        cost: 'priceless',
        attunement: 'any',
        description: 'This bronze visor was crafted by Danoth, a powerful wizard who sought to see through all deceptions. Dormant: You gain darkvision 60 ft, you have advantage on saves against being blinded, you can cast detect magic at will. Awakened: Darkvision extends to 120 ft, you can see invisible creatures and objects within 60 ft, you can use X-ray vision for 1 minute (1/short rest). Exalted: You gain truesight 60 ft, immunity to being blinded, you can see through illusions automatically, you can identify magic items by looking at them.',
        source: 'EGW'
    },
    'grimoire-infinitus': {
        name: 'Grimoire Infinitus',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 3,
        cost: 'priceless',
        attunement: 'wizard',
        description: 'This spellbook\'s pages seem to contain infinite knowledge, the text shifting and changing as you read. Dormant: The book can hold unlimited spells (no copying cost), you can prepare 1 additional spell per long rest, you can cast one 1st-level spell without expending a slot (1/long rest). Awakened: Prepare 2 additional spells, cast one 2nd-level spell without slot (1/long rest), you can change one prepared spell as an action (1/short rest). Exalted: Prepare 3 additional spells, cast one 3rd-level spell without slot (1/long rest), you can cast identify and detect magic at will, recover spell slots up to 5th level during short rest (1/long rest).',
        source: 'EGW'
    },
    'hide-of-the-feral-guardian': {
        name: 'Hide of the Feral Guardian',
        type: 'armor',
        subtype: 'studded leather',
        rarity: 'artifact',
        weight: 13,
        cost: 'priceless',
        attunement: 'any',
        ac: 12,
        description: 'This studded leather armor is crafted from the hide of a powerful nature spirit, blessed by the Wildmother. Dormant: AC 12 + Dex, you can speak with animals at will, you can cast beast sense once per short rest. Your Wild Shape forms gain +1 AC. Awakened: Your Wild Shape forms gain +2 AC and +2 to attack and damage, you can cast polymorph (beasts only) once per long rest. Exalted: Your Wild Shape forms gain +3 AC, +3 to attack and damage, and resistance to nonmagical attacks. You can cast shapechange (beasts only) once per long rest.',
        source: 'EGW'
    },
    'titanstone-knuckles': {
        name: 'Titanstone Knuckles',
        type: 'wondrous-item',
        rarity: 'artifact',
        weight: 2,
        cost: 'priceless',
        attunement: 'any',
        description: 'These massive stone gauntlets were carved from the core of a mountain titan, granting the strength of giants. Dormant: Your Strength becomes 22 if not already higher, your unarmed strikes deal 1d8 bludgeoning damage, you count as one size larger for grappling. Awakened: Strength becomes 24, unarmed strikes deal 1d10, you can cast enlarge/reduce (self only) once per long rest, you have advantage on Strength checks. Exalted: Strength becomes 26, unarmed strikes deal 1d12, you can cast earthquake once per long rest, when you hit with unarmed strike you can push target 15 feet.',
        source: 'EGW'
    },
    'pyremaul': {
        name: 'Pyremaul',
        type: 'weapon',
        weaponType: 'martial',
        subtype: 'maul',
        rarity: 'artifact',
        weight: 10,
        cost: 'priceless',
        attunement: 'any',
        damage: '2d6',
        damageType: 'bludgeoning',
        properties: ['heavy', 'two-handed'],
        description: 'This massive hammer is forged from volcanic stone and perpetually wreathed in flames. It was created to destroy the undead armies of an ancient lich. Dormant: +1 weapon, deals extra 1d6 fire damage, you have resistance to fire damage. Awakened: +2, deals extra 2d6 fire damage, you can cast burning hands (3rd level) once per short rest, attacks against undead deal extra 1d6 radiant damage. Exalted: +3, deals extra 3d6 fire damage, you can cast fireball (6th level) once per long rest, when you kill an undead creature, you regain 2d6 HP.',
        source: 'EGW'
    }
};

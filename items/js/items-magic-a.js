// ============================================
// MAGIC ITEMS DATABASE - A
// ============================================
// DMG and other sourcebook magic items starting with A

const magicItemsA = {
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
        description: 'While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the Plane Shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1–60, you travel to a random location on the plane you named. On a 61–100, you travel to a randomly determined plane of existence.',
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
    }
};

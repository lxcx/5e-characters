// ============================================
// MAGIC ITEMS DATABASE - D
// ============================================
// DMG and other sourcebook magic items starting with D

const magicItemsD = {
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
        description: 'This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 − 1 cards. The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you. An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent. The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can\'t be used again.',
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
        description: 'Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly. Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once. Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.\n\nThe cards and their effects are:\n\nBalance. Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa.\n\nComet. If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level.\n\nDonjon. You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind. You remain imprisoned until you are found and removed from the sphere. Divination spells can\'t locate you.\n\nEuryale. The card\'s medusa-like visage curses you. You take a −2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.\n\nThe Fates. Reality\'s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card\'s magic as soon as you draw the card or at any other time before you die.\n\nFlames. A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you.\n\nFool. You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.\n\nGem. Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.\n\nIdiot. Permanently reduce your Intelligence by 1d4+1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.\n\nJester. You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.\n\nKey. A rare or rarer magic weapon with which you are proficient appears in your hands. The DM chooses the weapon.\n\nKnight. You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death.\n\nMoon. You are granted the ability to cast the Wish spell 1d3 times.\n\nRogue. A nonplayer character of the DM\'s choice becomes hostile toward you. The identity of your new enemy isn\'t known until the NPC or someone else reveals it.\n\nRuin. All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least.\n\nSkull. You summon an avatar of death—a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM\'s choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. If anyone tries to help you, the helper summons its own avatar of death.\n\nStar. Increase one of your ability scores by 2. The score can exceed 20 but can\'t exceed 24.\n\nSun. You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.\n\nTalons. Every magic item you wear or carry disintegrates. Artifacts in your possession aren\'t destroyed but do vanish.\n\nThrone. You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world.\n\nVizier. At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma.\n\nThe Void. This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the DM\'s choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A Wish spell can\'t restore your soul, but the spell reveals the location of the object that holds it.',
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
    }
};

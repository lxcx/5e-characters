// Monster Expansion 58 - Environment-Specific Creatures
// Monsters organized by their primary environment

const monstersExpansion58 = {
    // Arctic Environment
    'frost-giant-everlasting-one': {
        name: 'Frost Giant Everlasting One',
        source: 'Volo\'s Guide',
        size: 'Huge',
        type: 'giant',
        alignment: 'chaotic evil',
        ac: 15,
        hp: 189,
        hpFormula: '14d12 + 98',
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 9, con: 24, int: 9, wis: 10, cha: 12 },
        savingThrows: { str: 11, con: 11, wis: 4 },
        skills: { athletics: 11, perception: 4 },
        damageImmunities: ['cold'],
        senses: { darkvision: 60 },
        languages: ['Giant'],
        cr: 12,
        environment: ['arctic', 'mountain'],
        role: 'brute',
        tags: ['giant', 'regeneration'],
        traits: [
            { name: 'Extra Heads', description: 'The giant has a 25% chance of having more than one head. If it has more than one, it has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.' },
            { name: 'Regeneration', description: 'The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn\'t function at the start of its next turn. The giant dies only if it starts its turn with 0 hit points and doesn\'t regenerate.' },
            { name: 'Vaprak\'s Rage (Recharges after a Short or Long Rest)', description: 'As a bonus action, the giant can enter a rage that lasts for 1 minute. While raging, the giant gains the following benefits: advantage on Strength checks and Strength saving throws, +4 bonus to melee damage, and resistance to bludgeoning, piercing, and slashing damage.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The giant makes two greataxe attacks.' },
            { name: 'Greataxe', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 26 (3d12 + 7) slashing damage, or 30 (3d12 + 11) slashing damage while raging.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage.' }
        ]
    },
    'ice-mephit': {
        name: 'Ice Mephit',
        source: 'Monster Manual',
        size: 'Small',
        type: 'elemental',
        alignment: 'neutral evil',
        ac: 11,
        hp: 21,
        hpFormula: '6d6',
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 7, dex: 13, con: 10, int: 9, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 3 },
        damageVulnerabilities: ['bludgeoning', 'fire'],
        damageImmunities: ['cold', 'poison'],
        conditionImmunities: ['poisoned'],
        senses: { darkvision: 60 },
        languages: ['Aquan', 'Auran'],
        cr: 0.5,
        environment: ['arctic'],
        role: 'skirmisher',
        tags: ['elemental', 'cold'],
        traits: [
            { name: 'Death Burst', description: 'When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much on a success.' },
            { name: 'False Appearance', description: 'While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.' },
            { name: 'Innate Spellcasting (1/Day)', description: 'The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.' }
        ],
        actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage.' },
            { name: 'Frost Breath (Recharge 6)', description: 'The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much on a success.' }
        ]
    },
    'yeti': {
        name: 'Yeti',
        source: 'Monster Manual',
        size: 'Large',
        type: 'monstrosity',
        alignment: 'chaotic evil',
        ac: 12,
        hp: 51,
        hpFormula: '6d10 + 18',
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 18, dex: 13, con: 16, int: 8, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 3 },
        damageImmunities: ['cold'],
        senses: { darkvision: 60 },
        languages: ['Yeti'],
        cr: 3,
        environment: ['arctic', 'mountain'],
        role: 'brute',
        tags: ['monstrosity', 'cold'],
        traits: [
            { name: 'Fear of Fire', description: 'If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.' },
            { name: 'Keen Smell', description: 'The yeti has advantage on Wisdom (Perception) checks that rely on smell.' },
            { name: 'Snow Camouflage', description: 'The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The yeti can use its Chilling Gaze and makes two claw attacks.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage.' },
            { name: 'Chilling Gaze', description: 'The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }
        ]
    },
    
    // Desert Environment
    'blue-dragon-wyrmling': {
        name: 'Blue Dragon Wyrmling',
        source: 'Monster Manual',
        size: 'Medium',
        type: 'dragon',
        alignment: 'lawful evil',
        ac: 17,
        hp: 52,
        hpFormula: '8d8 + 16',
        speed: { walk: 30, burrow: 15, fly: 60 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ['lightning'],
        senses: { blindsight: 10, darkvision: 60 },
        languages: ['Draconic'],
        cr: 3,
        environment: ['desert', 'coastal'],
        role: 'artillery',
        tags: ['dragon', 'lightning'],
        actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much on a success.' }
        ]
    },
    'dust-mephit': {
        name: 'Dust Mephit',
        source: 'Monster Manual',
        size: 'Small',
        type: 'elemental',
        alignment: 'neutral evil',
        ac: 12,
        hp: 17,
        hpFormula: '5d6',
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageVulnerabilities: ['fire'],
        damageImmunities: ['poison'],
        conditionImmunities: ['poisoned'],
        senses: { darkvision: 60 },
        languages: ['Auran', 'Terran'],
        cr: 0.5,
        environment: ['desert'],
        role: 'skirmisher',
        tags: ['elemental'],
        traits: [
            { name: 'Death Burst', description: 'When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.' },
            { name: 'Innate Spellcasting (1/Day)', description: 'The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.' }
        ],
        actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage.' },
            { name: 'Blinding Breath (Recharge 6)', description: 'The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }
        ]
    },
    'giant-scorpion': {
        name: 'Giant Scorpion',
        source: 'Monster Manual',
        size: 'Large',
        type: 'beast',
        alignment: 'unaligned',
        ac: 15,
        hp: 52,
        hpFormula: '7d10 + 14',
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
        senses: { blindsight: 60 },
        languages: [],
        cr: 3,
        environment: ['desert'],
        role: 'soldier',
        tags: ['beast', 'poison'],
        actions: [
            { name: 'Multiattack', description: 'The scorpion makes three attacks: two with its claws and one with its sting.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.' },
            { name: 'Sting', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much on a success.' }
        ]
    },
    'mummy': {
        name: 'Mummy',
        source: 'Monster Manual',
        size: 'Medium',
        type: 'undead',
        alignment: 'lawful evil',
        ac: 11,
        hp: 58,
        hpFormula: '9d8 + 18',
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12 },
        savingThrows: { wis: 2 },
        damageVulnerabilities: ['fire'],
        damageResistances: ['bludgeoning, piercing, and slashing from nonmagical attacks'],
        damageImmunities: ['necrotic', 'poison'],
        conditionImmunities: ['charmed', 'exhaustion', 'frightened', 'paralyzed', 'poisoned'],
        senses: { darkvision: 60 },
        languages: ['the languages it knew in life'],
        cr: 3,
        environment: ['desert'],
        role: 'soldier',
        tags: ['undead', 'curse'],
        actions: [
            { name: 'Multiattack', description: 'The mummy can use its Dreadful Glare and makes one attack with its rotting fist.' },
            { name: 'Rotting Fist', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot.' },
            { name: 'Dreadful Glare', description: 'The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the mummy\'s next turn. If the target fails by 5 or more, it is also paralyzed for the same duration.' }
        ]
    },
    
    // Forest/Woodland Environment
    'dryad': {
        name: 'Dryad',
        source: 'Monster Manual',
        size: 'Medium',
        type: 'fey',
        alignment: 'neutral',
        ac: 11,
        hp: 22,
        hpFormula: '5d8',
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: { darkvision: 60 },
        languages: ['Elvish', 'Sylvan'],
        cr: 1,
        environment: ['forest'],
        role: 'controller',
        tags: ['fey', 'charm'],
        traits: [
            { name: 'Innate Spellcasting', description: 'The dryad\'s innate spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells: At will: druidcraft; 3/day each: entangle, goodberry; 1/day each: barkskin, pass without trace, shillelagh.' },
            { name: 'Magic Resistance', description: 'The dryad has advantage on saving throws against spells and other magical effects.' },
            { name: 'Speak with Beasts and Plants', description: 'The dryad can communicate with beasts and plants as if they shared a language.' },
            { name: 'Tree Stride', description: 'Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree.' }
        ],
        actions: [
            { name: 'Club', description: 'Melee Weapon Attack: +2 to hit (+6 with shillelagh), reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.' },
            { name: 'Fey Charm', description: 'The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend.' }
        ]
    },
    'owlbear': {
        name: 'Owlbear',
        source: 'Monster Manual',
        size: 'Large',
        type: 'monstrosity',
        alignment: 'unaligned',
        ac: 13,
        hp: 59,
        hpFormula: '7d10 + 21',
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: { darkvision: 60 },
        languages: [],
        cr: 3,
        environment: ['forest'],
        role: 'brute',
        tags: ['monstrosity'],
        traits: [
            { name: 'Keen Sight and Smell', description: 'The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The owlbear makes two attacks: one with its beak and one with its claws.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.' }
        ]
    },
    'treant': {
        name: 'Treant',
        source: 'Monster Manual',
        size: 'Huge',
        type: 'plant',
        alignment: 'chaotic good',
        ac: 16,
        hp: 138,
        hpFormula: '12d12 + 60',
        speed: { walk: 30 },
        abilityScores: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
        damageVulnerabilities: ['fire'],
        damageResistances: ['bludgeoning', 'piercing'],
        senses: {},
        languages: ['Common', 'Druidic', 'Elvish', 'Sylvan'],
        cr: 9,
        environment: ['forest'],
        role: 'brute',
        tags: ['plant'],
        traits: [
            { name: 'False Appearance', description: 'While the treant remains motionless, it is indistinguishable from a normal tree.' },
            { name: 'Siege Monster', description: 'The treant deals double damage to objects and structures.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The treant makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.' },
            { name: 'Animate Trees (1/Day)', description: 'The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can\'t speak, and they have only the Slam action option. An animated tree acts as an ally of the treant.' }
        ]
    },
    
    // Swamp Environment
    'shambling-mound': {
        name: 'Shambling Mound',
        source: 'Monster Manual',
        size: 'Large',
        type: 'plant',
        alignment: 'unaligned',
        ac: 15,
        hp: 136,
        hpFormula: '16d10 + 48',
        speed: { walk: 20, swim: 20 },
        abilityScores: { str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        damageResistances: ['cold', 'fire'],
        damageImmunities: ['lightning'],
        conditionImmunities: ['blinded', 'deafened', 'exhaustion'],
        senses: { blindsight: 60 },
        languages: [],
        cr: 5,
        environment: ['swamp', 'forest'],
        role: 'brute',
        tags: ['plant'],
        traits: [
            { name: 'Lightning Absorption', description: 'Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' },
            { name: 'Engulf', description: 'The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound\'s turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.' }
        ]
    },
    'lizardfolk': {
        name: 'Lizardfolk',
        source: 'Monster Manual',
        size: 'Medium',
        type: 'humanoid (lizardfolk)',
        alignment: 'neutral',
        ac: 15,
        hp: 22,
        hpFormula: '4d8 + 4',
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 7, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4, survival: 5 },
        senses: {},
        languages: ['Draconic'],
        cr: 0.5,
        environment: ['swamp'],
        role: 'soldier',
        tags: ['humanoid'],
        traits: [
            { name: 'Hold Breath', description: 'The lizardfolk can hold its breath for 15 minutes.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The lizardfolk makes two melee attacks, each one with a different weapon.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Heavy Club', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Spiked Shield', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }
        ]
    },
    'will-o-wisp': {
        name: 'Will-o\'-Wisp',
        source: 'Monster Manual',
        size: 'Tiny',
        type: 'undead',
        alignment: 'chaotic evil',
        ac: 19,
        hp: 22,
        hpFormula: '9d4',
        speed: { walk: 0, fly: 50, hover: true },
        abilityScores: { str: 1, dex: 28, con: 10, int: 13, wis: 14, cha: 11 },
        damageResistances: ['acid', 'cold', 'fire', 'necrotic', 'thunder', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        damageImmunities: ['lightning', 'poison'],
        conditionImmunities: ['exhaustion', 'grappled', 'paralyzed', 'poisoned', 'prone', 'restrained', 'unconscious'],
        senses: { darkvision: 120 },
        languages: ['the languages it knew in life'],
        cr: 2,
        environment: ['swamp', 'forest'],
        role: 'lurker',
        tags: ['undead'],
        traits: [
            { name: 'Consume Life', description: 'As a bonus action, the will-o\'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o\'-wisp regains 10 (3d6) hit points.' },
            { name: 'Ephemeral', description: 'The will-o\'-wisp can\'t wear or carry anything.' },
            { name: 'Incorporeal Movement', description: 'The will-o\'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.' },
            { name: 'Variable Illumination', description: 'The will-o\'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o\'-wisp can alter the radius as a bonus action.' }
        ],
        actions: [
            { name: 'Shock', description: 'Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage.' },
            { name: 'Invisibility', description: 'The will-o\'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).' }
        ]
    },
    
    // Underground/Underdark Environment
    'hook-horror': {
        name: 'Hook Horror',
        source: 'Monster Manual',
        size: 'Large',
        type: 'monstrosity',
        alignment: 'neutral',
        ac: 15,
        hp: 75,
        hpFormula: '10d10 + 20',
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: { blindsight: 60, darkvision: 10 },
        languages: ['Hook Horror'],
        cr: 3,
        environment: ['underdark'],
        role: 'brute',
        tags: ['monstrosity'],
        traits: [
            { name: 'Echolocation', description: 'The hook horror can\'t use its blindsight while deafened.' },
            { name: 'Keen Hearing', description: 'The hook horror has advantage on Wisdom (Perception) checks that rely on hearing.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The hook horror makes two hook attacks.' },
            { name: 'Hook', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) piercing damage.' }
        ]
    },
    'drider': {
        name: 'Drider',
        source: 'Monster Manual',
        size: 'Large',
        type: 'monstrosity',
        alignment: 'chaotic evil',
        ac: 19,
        hp: 123,
        hpFormula: '13d10 + 52',
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12 },
        skills: { perception: 5, stealth: 9 },
        senses: { darkvision: 120 },
        languages: ['Elvish', 'Undercommon'],
        cr: 6,
        environment: ['underdark'],
        role: 'soldier',
        tags: ['monstrosity', 'drow'],
        traits: [
            { name: 'Fey Ancestry', description: 'The drider has advantage on saving throws against being charmed, and magic can\'t put the drider to sleep.' },
            { name: 'Innate Spellcasting', description: 'The drider\'s innate spellcasting ability is Wisdom (spell save DC 13). It can innately cast the following spells: At will: dancing lights; 1/day each: darkness, faerie fire.' },
            { name: 'Spider Climb', description: 'The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.' },
            { name: 'Sunlight Sensitivity', description: 'While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.' },
            { name: 'Web Walker', description: 'The drider ignores movement restrictions caused by webbing.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.' }
        ]
    },
    'umber-hulk': {
        name: 'Umber Hulk',
        source: 'Monster Manual',
        size: 'Large',
        type: 'monstrosity',
        alignment: 'chaotic evil',
        ac: 18,
        hp: 93,
        hpFormula: '11d10 + 33',
        speed: { walk: 30, burrow: 20 },
        abilityScores: { str: 20, dex: 13, con: 16, int: 9, wis: 10, cha: 10 },
        senses: { darkvision: 120, tremorsense: 60 },
        languages: ['Umber Hulk'],
        cr: 5,
        environment: ['underdark'],
        role: 'brute',
        tags: ['monstrosity'],
        traits: [
            { name: 'Confusing Gaze', description: 'When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk\'s eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated. On a failed saving throw, the creature can\'t take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn.' },
            { name: 'Tunneler', description: 'The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The umber hulk makes three attacks: two with its claws and one with its mandibles.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage.' },
            { name: 'Mandibles', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.' }
        ]
    },
    
    // Coastal/Aquatic Environment
    'sea-hag': {
        name: 'Sea Hag',
        source: 'Monster Manual',
        size: 'Medium',
        type: 'fey',
        alignment: 'chaotic evil',
        ac: 14,
        hp: 52,
        hpFormula: '7d8 + 21',
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 16, dex: 13, con: 16, int: 12, wis: 12, cha: 13 },
        senses: { darkvision: 60 },
        languages: ['Aquan', 'Common', 'Giant'],
        cr: 2,
        environment: ['coastal', 'underwater'],
        role: 'controller',
        tags: ['fey', 'hag'],
        traits: [
            { name: 'Amphibious', description: 'The hag can breathe air and water.' },
            { name: 'Horrific Appearance', description: 'Any humanoid that starts its turn within 30 feet of the hag and can see the hag\'s true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success.' }
        ],
        actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.' },
            { name: 'Death Glare', description: 'The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points.' },
            { name: 'Illusory Appearance', description: 'The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.' }
        ]
    },
    'sahuagin': {
        name: 'Sahuagin',
        source: 'Monster Manual',
        size: 'Medium',
        type: 'humanoid (sahuagin)',
        alignment: 'lawful evil',
        ac: 12,
        hp: 22,
        hpFormula: '4d8 + 4',
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9 },
        skills: { perception: 5 },
        senses: { darkvision: 120 },
        languages: ['Sahuagin'],
        cr: 0.5,
        environment: ['coastal', 'underwater'],
        role: 'soldier',
        tags: ['humanoid', 'aquatic'],
        traits: [
            { name: 'Blood Frenzy', description: 'The sahuagin has advantage on melee attack rolls against any creature that doesn\'t have all its hit points.' },
            { name: 'Limited Amphibiousness', description: 'The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.' },
            { name: 'Shark Telepathy', description: 'The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.' },
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.' }
        ]
    },
    'merrow': {
        name: 'Merrow',
        source: 'Monster Manual',
        size: 'Large',
        type: 'monstrosity',
        alignment: 'chaotic evil',
        ac: 13,
        hp: 45,
        hpFormula: '6d10 + 12',
        speed: { walk: 10, swim: 40 },
        abilityScores: { str: 18, dex: 10, con: 15, int: 8, wis: 10, cha: 9 },
        senses: { darkvision: 60 },
        languages: ['Abyssal', 'Aquan'],
        cr: 2,
        environment: ['coastal', 'underwater'],
        role: 'brute',
        tags: ['monstrosity', 'aquatic'],
        traits: [
            { name: 'Amphibious', description: 'The merrow can breathe air and water.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The merrow makes two attacks: one with its bite and one with its claws or harpoon.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.' },
            { name: 'Harpoon', description: 'Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.' }
        ]
    }
};

// Register with the global monster library
if (typeof allMonsters !== 'undefined') {
    Object.assign(allMonsters, monstersExpansion58);
}

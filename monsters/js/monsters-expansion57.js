// ============================================
// ICONIC MONSTERS EXPANSION
// ============================================
// Missing legendary creatures, demon lords, archdevils, and iconic monsters

const monstersExpansion57 = {
    // ============================================
    // THE TARRASQUE - CR 30
    // ============================================
    'tarrasque': {
        name: 'Tarrasque',
        source: 'MM',
        size: 'gargantuan',
        type: 'monstrosity',
        alignment: 'unaligned',
        ac: 25,
        acType: 'natural armor',
        hp: 676,
        hitDice: '33d20+330',
        speed: { walk: '40 ft.' },
        abilityScores: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
        savingThrows: { int: 5, wis: 9, cha: 9 },
        damageImmunities: ['fire', 'poison', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        conditionImmunities: ['charmed', 'frightened', 'paralyzed', 'poisoned'],
        senses: ['blindsight 120 ft.', 'passive Perception 10'],
        languages: '—',
        cr: 30,
        environment: ['any'],
        tags: ['titan', 'legendary'],
        traits: [
            { name: 'Legendary Resistance (3/Day)', description: 'If the tarrasque fails a saving throw, it can choose to succeed instead.' },
            { name: 'Magic Resistance', description: 'The tarrasque has advantage on saving throws against spells and other magical effects.' },
            { name: 'Reflective Carapace', description: 'Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.' },
            { name: 'Siege Monster', description: 'The tarrasque deals double damage to objects and structures.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can\'t bite another target.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage.' },
            { name: 'Horns', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.' },
            { name: 'Frightful Presence', description: 'Each creature of the tarrasque\'s choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the tarrasque\'s Frightful Presence for the next 24 hours.' },
            { name: 'Swallow', description: 'The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite\'s damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque\'s turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.' }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: 'Attack', cost: 1, description: 'The tarrasque makes one claw attack or tail attack.' },
                { name: 'Move', cost: 1, description: 'The tarrasque moves up to half its speed.' },
                { name: 'Chomp (Costs 2 Actions)', cost: 2, description: 'The tarrasque makes one bite attack or uses its Swallow.' }
            ]
        },
        visualDescription: 'A towering reptilian nightmare the size of a mountain, with thick brown-gray scales that shimmer with an oily iridescence. Two massive horns crown its head, and rows of teeth like sword blades fill its cavernous maw. Its powerful tail ends in a club-like mass of bone, and its claws can tear through castle walls.'
    },

    // ============================================
    // DEMON LORDS
    // ============================================
    'demogorgon': {
        name: 'Demogorgon',
        source: 'MM',
        size: 'huge',
        type: 'fiend',
        subtype: 'demon',
        alignment: 'chaotic evil',
        ac: 22,
        acType: 'natural armor',
        hp: 464,
        hitDice: '32d12+256',
        speed: { walk: '50 ft.', swim: '50 ft.' },
        abilityScores: { str: 29, dex: 14, con: 26, int: 20, wis: 17, cha: 25 },
        savingThrows: { dex: 10, con: 16, wis: 11, cha: 15 },
        skills: { insight: 11, perception: 19 },
        damageResistances: ['cold', 'fire', 'lightning'],
        damageImmunities: ['poison', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        conditionImmunities: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
        senses: ['truesight 120 ft.', 'passive Perception 29'],
        languages: 'all, telepathy 120 ft.',
        cr: 26,
        environment: ['abyss'],
        tags: ['demon lord', 'legendary'],
        traits: [
            { name: 'Legendary Resistance (3/Day)', description: 'If Demogorgon fails a saving throw, he can choose to succeed instead.' },
            { name: 'Magic Resistance', description: 'Demogorgon has advantage on saving throws against spells and other magical effects.' },
            { name: 'Magic Weapons', description: 'Demogorgon\'s weapon attacks are magical.' },
            { name: 'Two Heads', description: 'Demogorgon has advantage on saving throws against being blinded, deafened, stunned, and knocked unconscious.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'Demogorgon makes two tentacle attacks.' },
            { name: 'Tentacle', description: 'Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 28 (3d12 + 9) bludgeoning damage. If the target is a creature, it must succeed on a DC 23 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.' },
            { name: 'Gaze', description: 'Demogorgon turns his magical gaze toward one creature that he can see within 120 feet of him. That target must make a DC 23 Wisdom saving throw. Unless the target is incapacitated, it can avert its eyes to avoid the gaze and to automatically succeed on the save. If the target does so, it can\'t see Demogorgon until the start of his next turn. If the target looks at him in the meantime, it must immediately make the save. If the target fails the save, the target suffers one of the following effects of Demogorgon\'s choice or at random: Beguiling Gaze (target is stunned until start of Demogorgon\'s next turn or until he is no longer in line of sight) or Hypnotic Gaze (target is charmed until start of next turn).' }
        ],
        legendaryActions: {
            perRound: 2,
            actions: [
                { name: 'Tail', cost: 1, description: 'Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) bludgeoning damage.' },
                { name: 'Maddening Gaze', cost: 1, description: 'Demogorgon uses his Gaze action, and must choose either the Beguiling Gaze or the Insanity Gaze effect.' }
            ]
        },
        spellcasting: {
            innate: true,
            ability: 'cha',
            dc: 23,
            spells: {
                atWill: ['detect magic', 'major image'],
                '3/day': ['dispel magic', 'fear', 'telekinesis'],
                '1/day': ['feeblemind', 'project image']
            }
        },
        visualDescription: 'A towering, eighteen-foot-tall demon with two mandrill-like heads atop serpentine necks, each filled with madness and malice. His body is that of a massive humanoid covered in blue-green scales, with a forked tail and two long tentacles instead of arms. The Prince of Demons exudes an aura of primordial chaos.'
    },

    'orcus': {
        name: 'Orcus',
        source: 'MM',
        size: 'huge',
        type: 'fiend',
        subtype: 'demon',
        alignment: 'chaotic evil',
        ac: 17,
        acType: 'natural armor',
        hp: 405,
        hitDice: '30d12+210',
        speed: { walk: '40 ft.', fly: '40 ft.' },
        abilityScores: { str: 27, dex: 14, con: 25, int: 20, wis: 20, cha: 25 },
        savingThrows: { dex: 10, con: 15, wis: 13 },
        skills: { arcana: 13, perception: 13 },
        damageResistances: ['cold', 'fire', 'lightning'],
        damageImmunities: ['necrotic', 'poison', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        conditionImmunities: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
        senses: ['truesight 120 ft.', 'passive Perception 23'],
        languages: 'all, telepathy 120 ft.',
        cr: 26,
        environment: ['abyss'],
        tags: ['demon lord', 'legendary'],
        traits: [
            { name: 'Legendary Resistance (3/Day)', description: 'If Orcus fails a saving throw, he can choose to succeed instead.' },
            { name: 'Magic Resistance', description: 'Orcus has advantage on saving throws against spells and other magical effects.' },
            { name: 'Magic Weapons', description: 'Orcus\'s weapon attacks are magical.' },
            { name: 'Master of Undead', description: 'When Orcus casts animate dead or create undead, he chooses the level at which the spell is cast, and the creatures created by the spells remain under his control indefinitely. Additionally, he can cast create undead even when it isn\'t night.' },
            { name: 'Wand of Orcus', description: 'Orcus wields the legendary Wand of Orcus. The wand has 7 charges and regains 1d4 + 3 charges daily at dawn.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'Orcus makes two Wand of Orcus attacks.' },
            { name: 'Wand of Orcus', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) bludgeoning damage plus 13 (2d12) necrotic damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage plus 9 (2d8) poison damage.' }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: 'Tail', cost: 1, description: 'Orcus makes one tail attack.' },
                { name: 'A Taste of Undeath', cost: 2, description: 'Orcus casts chill touch (17th level).' },
                { name: 'Creeping Death (Costs 3 Actions)', cost: 3, description: 'Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus\'s next turn. Creatures in that area have vulnerability to necrotic damage.' }
            ]
        },
        spellcasting: {
            innate: true,
            ability: 'cha',
            dc: 23,
            spells: {
                atWill: ['chill touch (17th level)', 'detect magic'],
                '3/day': ['create undead', 'dispel magic'],
                '1/day': ['time stop']
            }
        },
        visualDescription: 'A bloated, goat-headed demon standing fifteen feet tall with massive bat wings and a long poisonous tail. His corpulent gray body is covered in goatish fur, and his face is a twisted skull-like visage with curved ram horns. In his hand he holds the legendary Wand of Orcus, topped with a skull.'
    },

    // ============================================
    // ARCHDEVILS
    // ============================================
    'asmodeus': {
        name: 'Asmodeus',
        source: 'MTF',
        size: 'large',
        type: 'fiend',
        subtype: 'devil',
        alignment: 'lawful evil',
        ac: 22,
        acType: 'natural armor',
        hp: 725,
        hitDice: '50d10+450',
        speed: { walk: '30 ft.', fly: '120 ft.' },
        abilityScores: { str: 30, dex: 21, con: 28, int: 30, wis: 28, cha: 30 },
        savingThrows: { str: 19, dex: 14, int: 19, wis: 18, cha: 19 },
        skills: { arcana: 19, deception: 19, history: 19, insight: 18, intimidation: 19, perception: 18, persuasion: 19, religion: 19 },
        damageResistances: ['cold'],
        damageImmunities: ['fire', 'poison', 'bludgeoning, piercing, and slashing from nonmagical attacks that aren\'t silvered'],
        conditionImmunities: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
        senses: ['truesight 120 ft.', 'passive Perception 28'],
        languages: 'all, telepathy 120 ft.',
        cr: 30,
        environment: ['nine hells'],
        tags: ['archdevil', 'legendary'],
        traits: [
            { name: 'Legendary Resistance (5/Day)', description: 'If Asmodeus fails a saving throw, he can choose to succeed instead.' },
            { name: 'Magic Resistance', description: 'Asmodeus has advantage on saving throws against spells and other magical effects.' },
            { name: 'Magic Weapons', description: 'Asmodeus\'s weapon attacks are magical.' },
            { name: 'Regeneration', description: 'Asmodeus regains 40 hit points at the start of his turn. If he takes radiant damage, this trait doesn\'t function at the start of his next turn. Asmodeus dies only if he starts his turn with 0 hit points and doesn\'t regenerate.' },
            { name: 'Lord of the Nine', description: 'Asmodeus can\'t be surprised, and no creature can read his thoughts or determine if he is lying unless he allows it.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'Asmodeus uses his Frightful Presence, then makes three attacks with his Ruby Rod.' },
            { name: 'Ruby Rod', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage plus 36 (8d8) fire damage.' },
            { name: 'Frightful Presence', description: 'Each creature of Asmodeus\'s choice within 120 feet of him and aware of him must succeed on a DC 27 Wisdom saving throw or become frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to Asmodeus\'s Frightful Presence for the next 24 hours.' },
            { name: 'Hellfire', description: 'Asmodeus creates a 40-foot-radius sphere of hellfire centered on a point he can see within 300 feet of him. Each creature in that area must make a DC 27 Dexterity saving throw, taking 63 (18d6) fire damage plus 63 (18d6) necrotic damage on a failed save, or half as much damage on a successful one. The fire spreads around corners and ignores resistance and immunity to fire damage.' }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: 'Attack', cost: 1, description: 'Asmodeus makes one Ruby Rod attack.' },
                { name: 'Teleport', cost: 1, description: 'Asmodeus teleports up to 120 feet to an unoccupied space he can see.' },
                { name: 'Call Underling (Costs 3 Actions)', cost: 3, description: 'Asmodeus summons a pit fiend in an unoccupied space he can see within 60 feet of him. The pit fiend acts as his ally and remains for 1 minute or until Asmodeus dismisses it.' }
            ]
        },
        spellcasting: {
            innate: true,
            ability: 'cha',
            dc: 27,
            spells: {
                atWill: ['alter self', 'detect magic', 'detect thoughts', 'invisibility (self only)'],
                '3/day': ['dominate monster', 'mass suggestion', 'wall of fire'],
                '1/day': ['divine word', 'symbol (hopelessness only)', 'wish']
            }
        },
        visualDescription: 'An impossibly handsome humanoid with red skin, standing thirteen feet tall with the bearing of absolute authority. His eyes burn with infernal fire, and small horns crown his brow. He wears regal vestments of black and red, and carries the Ruby Rod, a staff topped with a massive glowing ruby.'
    },

    'zariel': {
        name: 'Zariel',
        source: 'MTF',
        size: 'large',
        type: 'fiend',
        subtype: 'devil',
        alignment: 'lawful evil',
        ac: 21,
        acType: 'natural armor',
        hp: 580,
        hitDice: '40d10+360',
        speed: { walk: '50 ft.', fly: '150 ft.' },
        abilityScores: { str: 27, dex: 24, con: 28, int: 26, wis: 27, cha: 30 },
        savingThrows: { int: 16, wis: 16, cha: 18 },
        skills: { intimidation: 18, perception: 16 },
        damageResistances: ['cold', 'bludgeoning, piercing, and slashing from nonmagical attacks that aren\'t silvered'],
        damageImmunities: ['fire', 'poison'],
        conditionImmunities: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
        senses: ['darkvision 120 ft.', 'passive Perception 26'],
        languages: 'all, telepathy 120 ft.',
        cr: 26,
        environment: ['nine hells', 'avernus'],
        tags: ['archdevil', 'legendary'],
        traits: [
            { name: 'Legendary Resistance (3/Day)', description: 'If Zariel fails a saving throw, she can choose to succeed instead.' },
            { name: 'Magic Resistance', description: 'Zariel has advantage on saving throws against spells and other magical effects.' },
            { name: 'Magic Weapons', description: 'Zariel\'s weapon attacks are magical.' },
            { name: 'Regeneration', description: 'Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn\'t function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn\'t regenerate.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'Zariel makes three attacks with her flail or her longsword. She can substitute Horrid Touch for one of these attacks.' },
            { name: 'Flail', description: 'Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage plus 36 (8d8) fire damage.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) slashing damage, or 19 (2d10 + 8) slashing damage when used with two hands, plus 36 (8d8) fire damage.' },
            { name: 'Horrid Touch (Recharge 5-6)', description: 'Zariel touches one creature within 10 feet of her. The target must succeed on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and be poisoned for 1 minute. While poisoned in this way, the target is also blinded and deafened. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Teleport', description: 'Zariel magically teleports, along with any equipment she is wearing and carrying, up to 120 feet to an unoccupied space she can see.' }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: 'Teleport', cost: 1, description: 'Zariel uses her Teleport action.' },
                { name: 'Immolating Gaze (Costs 2 Actions)', cost: 2, description: 'Zariel turns her magical gaze toward one creature she can see within 120 feet of her and commands it to combust. The target must succeed on a DC 26 Wisdom saving throw or take 22 (4d10) fire damage.' }
            ]
        },
        spellcasting: {
            innate: true,
            ability: 'cha',
            dc: 26,
            spells: {
                atWill: ['alter self (can become Medium when using this spell)', 'detect evil and good', 'fireball', 'invisibility (self only)', 'wall of fire'],
                '3/day': ['blade barrier', 'dispel evil and good', 'finger of death']
            }
        },
        visualDescription: 'A fallen angel with burning wings of fire, her once-radiant form now scarred by eons of infernal warfare. Her armor is blackened and battle-worn, and her eyes blaze with righteous fury twisted by damnation. She wields a flaming sword in one hand and a spiked flail in the other.'
    },

    // ============================================
    // MORE LOW-CR COMMON MONSTERS
    // ============================================
    'bandit-captain': {
        name: 'Bandit Captain',
        source: 'MM',
        size: 'medium',
        type: 'humanoid',
        subtype: 'any race',
        alignment: 'any non-lawful',
        ac: 15,
        acType: 'studded leather',
        hp: 65,
        hitDice: '10d8+20',
        speed: { walk: '30 ft.' },
        abilityScores: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14 },
        savingThrows: { str: 4, dex: 5, wis: 2 },
        skills: { athletics: 4, deception: 4 },
        senses: ['passive Perception 10'],
        languages: 'any two languages',
        cr: 2,
        environment: ['forest', 'urban', 'hill'],
        tags: ['npc', 'humanoid'],
        actions: [
            { name: 'Multiattack', description: 'The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.' },
            { name: 'Scimitar', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' },
            { name: 'Dagger', description: 'Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.' }
        ],
        reactions: [
            { name: 'Parry', description: 'The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.' }
        ],
        visualDescription: 'A battle-scarred rogue with a confident sneer, wearing well-maintained studded leather armor. Multiple daggers are strapped across their chest, and a curved scimitar hangs at their hip. Their eyes constantly scan for threats and opportunities alike.'
    },

    'dire-wolf': {
        name: 'Dire Wolf',
        source: 'MM',
        size: 'large',
        type: 'beast',
        alignment: 'unaligned',
        ac: 14,
        acType: 'natural armor',
        hp: 37,
        hitDice: '5d10+10',
        speed: { walk: '50 ft.' },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: ['passive Perception 13'],
        languages: '—',
        cr: 1,
        environment: ['forest', 'hill', 'grassland'],
        tags: ['beast'],
        traits: [
            { name: 'Keen Hearing and Smell', description: 'The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.' },
            { name: 'Pack Tactics', description: 'The wolf has advantage on attack rolls against a creature if at least one of the wolf\'s allies is within 5 feet of the creature and the ally isn\'t incapacitated.' }
        ],
        actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.' }
        ],
        visualDescription: 'A massive wolf the size of a horse, with thick gray fur and intelligent, predatory eyes. Its jaws are filled with teeth like daggers, and its breath fogs in the cold air as it stalks its prey.'
    },

    'giant-spider': {
        name: 'Giant Spider',
        source: 'MM',
        size: 'large',
        type: 'beast',
        alignment: 'unaligned',
        ac: 14,
        acType: 'natural armor',
        hp: 26,
        hitDice: '4d10+4',
        speed: { walk: '30 ft.', climb: '30 ft.' },
        abilityScores: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
        skills: { stealth: 7 },
        senses: ['blindsight 10 ft.', 'darkvision 60 ft.', 'passive Perception 10'],
        languages: '—',
        cr: 1,
        environment: ['forest', 'underdark', 'swamp'],
        tags: ['beast'],
        traits: [
            { name: 'Spider Climb', description: 'The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.' },
            { name: 'Web Sense', description: 'While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.' },
            { name: 'Web Walker', description: 'The spider ignores movement restrictions caused by webbing.' }
        ],
        actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.' },
            { name: 'Web (Recharge 5-6)', description: 'Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).' }
        ],
        visualDescription: 'A spider the size of a large dog, with bristly black legs and multiple gleaming eyes. Its fangs drip with venom, and strands of sticky webbing trail from its spinnerets.'
    },

    'worg': {
        name: 'Worg',
        source: 'MM',
        size: 'large',
        type: 'monstrosity',
        alignment: 'neutral evil',
        ac: 13,
        acType: 'natural armor',
        hp: 26,
        hitDice: '4d10+4',
        speed: { walk: '50 ft.' },
        abilityScores: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8 },
        skills: { perception: 4 },
        senses: ['darkvision 60 ft.', 'passive Perception 14'],
        languages: 'Goblin, Worg',
        cr: 0.5,
        environment: ['forest', 'grassland', 'hill'],
        tags: ['monstrosity'],
        traits: [
            { name: 'Keen Hearing and Smell', description: 'The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.' }
        ],
        actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.' }
        ],
        visualDescription: 'A massive wolf-like creature with matted dark fur and baleful yellow eyes that gleam with malevolent intelligence. Unlike natural wolves, worgs are cunning hunters that can speak and often serve as mounts for goblins.'
    },

    'orc-war-chief': {
        name: 'Orc War Chief',
        source: 'MM',
        size: 'medium',
        type: 'humanoid',
        subtype: 'orc',
        alignment: 'chaotic evil',
        ac: 16,
        acType: 'chain mail',
        hp: 93,
        hitDice: '11d8+44',
        speed: { walk: '30 ft.' },
        abilityScores: { str: 18, dex: 12, con: 18, int: 11, wis: 11, cha: 16 },
        savingThrows: { str: 6, con: 6, wis: 2 },
        skills: { intimidation: 5 },
        senses: ['darkvision 60 ft.', 'passive Perception 10'],
        languages: 'Common, Orc',
        cr: 4,
        environment: ['mountain', 'forest', 'hill', 'underdark'],
        tags: ['humanoid', 'orc'],
        traits: [
            { name: 'Aggressive', description: 'As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.' },
            { name: 'Gruumsh\'s Fury', description: 'The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks).' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The orc makes two attacks with its greataxe or its spear.' },
            { name: 'Greataxe', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (1d12 + 4 plus 1d8) slashing damage.' },
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 12 (1d6 + 4 plus 1d8) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.' },
            { name: 'Battle Cry (1/Day)', description: 'Each creature of the war chief\'s choice that is within 30 feet of it, can hear it, and not already affected by Battle Cry gain advantage on attack rolls until the start of the war chief\'s next turn. The war chief can then make one attack as a bonus action.' }
        ],
        visualDescription: 'A hulking orc covered in ritual scars and war paint, wearing blood-stained chain mail. A single red eye burns with Gruumsh\'s blessing, and they wield a massive greataxe etched with orcish runes. Trophies from fallen enemies hang from their belt.'
    },

    'ogre': {
        name: 'Ogre',
        source: 'MM',
        size: 'large',
        type: 'giant',
        alignment: 'chaotic evil',
        ac: 11,
        acType: 'hide armor',
        hp: 59,
        hitDice: '7d10+21',
        speed: { walk: '40 ft.' },
        abilityScores: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
        senses: ['darkvision 60 ft.', 'passive Perception 8'],
        languages: 'Common, Giant',
        cr: 2,
        environment: ['forest', 'grassland', 'hill', 'mountain', 'swamp'],
        tags: ['giant'],
        actions: [
            { name: 'Greatclub', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage.' }
        ],
        visualDescription: 'A nine-foot-tall humanoid with a potbelly, thick arms, and a face that looks like it was beaten with a rock. Its skin is yellowish-brown, covered in warts and scars. It wears crude hide armor and carries a massive club.'
    },

    'troll': {
        name: 'Troll',
        source: 'MM',
        size: 'large',
        type: 'giant',
        alignment: 'chaotic evil',
        ac: 15,
        acType: 'natural armor',
        hp: 84,
        hitDice: '8d10+40',
        speed: { walk: '30 ft.' },
        abilityScores: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7 },
        skills: { perception: 2 },
        senses: ['darkvision 60 ft.', 'passive Perception 12'],
        languages: 'Giant',
        cr: 5,
        environment: ['forest', 'hill', 'mountain', 'swamp', 'underdark'],
        tags: ['giant'],
        traits: [
            { name: 'Keen Smell', description: 'The troll has advantage on Wisdom (Perception) checks that rely on smell.' },
            { name: 'Regeneration', description: 'The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn\'t function at the start of the troll\'s next turn. The troll dies only if it starts its turn with 0 hit points and doesn\'t regenerate.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'The troll makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' }
        ],
        visualDescription: 'A lanky, nine-foot-tall creature with rubbery green skin and long arms ending in wicked claws. Its face is a mass of warts and its nose is elongated like a snout. Wounds close before your eyes as the creature\'s flesh knits itself back together.'
    },

    'basilisk': {
        name: 'Basilisk',
        source: 'MM',
        size: 'medium',
        type: 'monstrosity',
        alignment: 'unaligned',
        ac: 15,
        acType: 'natural armor',
        hp: 52,
        hitDice: '8d8+16',
        speed: { walk: '20 ft.' },
        abilityScores: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
        senses: ['darkvision 60 ft.', 'passive Perception 9'],
        languages: '—',
        cr: 3,
        environment: ['desert', 'mountain', 'underdark'],
        tags: ['monstrosity'],
        traits: [
            { name: 'Petrifying Gaze', description: 'If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn\'t incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn\'t surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can\'t see the basilisk until the start of its next turn. If it looks at the basilisk in the meantime, it must immediately make the save.' }
        ],
        actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.' }
        ],
        visualDescription: 'An eight-legged reptile with dull brown scales and glowing pale green eyes that can turn flesh to stone. Its body is low and squat, like a massive lizard, and its gaze holds an unnatural stillness that makes looking at it deeply unsettling.'
    }
};

// Merge with allMonsters
if (typeof allMonsters !== 'undefined') {
    Object.assign(allMonsters, monstersExpansion57);
}

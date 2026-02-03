// Monster Visual Descriptions for Image Generation
// This file adds physical appearance descriptions to existing monsters

const MONSTER_DESCRIPTIONS = {
    // ===== A =====
    "aarakocra": "Bird-like humanoid with colorful feathered wings, sharp talons, and a hooked beak. Lean build with feathers covering the body in shades of red, orange, or blue.",
    "aboleth": "Massive eel-like creature with slimy blue-green skin, three red eyes stacked vertically, four long tentacles, and a lamprey-like mouth with rows of teeth.",
    "acolyte": "Robed humanoid in simple religious vestments, carrying a holy symbol and prayer book.",
    "adult-black-dragon": "Sleek dragon with glossy black scales, curved horns sweeping back, and acid-scarred flesh. Skeletal, serpentine build with tattered wing membranes.",
    "adult-blue-dragon": "Majestic dragon with deep blue scales, single large horn on the snout, and frilled ears. Muscular build with crackling electricity between its teeth.",
    "adult-brass-dragon": "Warm-colored dragon with brass-tinted scales, twin horns curving backward, and a friendly demeanor. Broad wings and a ridge of small spines down the back.",
    "adult-bronze-dragon": "Noble dragon with bronze scales that shimmer blue-green, ribbed wings, and webbed feet. Dignified bearing with a beaked snout.",
    "adult-copper-dragon": "Playful-looking dragon with reddish-copper scales, short horns, and back-swept cheek ridges. Compact build with a mischievous glint in the eyes.",
    "adult-gold-dragon": "Magnificent dragon with brilliant golden scales, twin horns, and whisker-like tendrils. Regal bearing with a wise, ancient gaze.",
    "adult-green-dragon": "Cunning dragon with dark forest-green scales, single sharp horn, and a crest of hornlets. Long neck, sinuous body, and venomous-looking fangs.",
    "adult-red-dragon": "Fearsome dragon with crimson scales, swept-back horns, and a frilled neck. Massive, muscular build with smoke curling from the nostrils.",
    "adult-silver-dragon": "Elegant dragon with gleaming silver scales, twin horns, and a ruff around the head. Noble features with a gentle but powerful presence.",
    "adult-white-dragon": "Feral-looking dragon with ice-white scales, spiny ridges, and cold blue eyes. Lean, predatory build adapted for arctic hunting.",
    "air-elemental": "Swirling vortex of wind and cloud, vaguely humanoid in shape, with debris and leaves caught in the constant motion.",
    "ancient-black-dragon": "Colossal dragon with jet-black scales corroded by age, massive curved horns, and eyes burning with malice. Skeletal wings span an enormous distance.",
    "ancient-blue-dragon": "Titanic dragon with midnight-blue scales, a massive horn crackling with lightning, and an aura of supreme arrogance.",
    "ancient-red-dragon": "Gargantuan dragon with blood-red scales, enormous swept horns, and a body wreathed in heat shimmer. The ultimate apex predator.",
    "animated-armor": "Empty suit of plate armor that moves on its own, helmet visor revealing only darkness within, floating slightly above the ground.",
    "ankheg": "Giant insect with a brown chitinous shell, massive mandibles, and multiple legs. Acid drips from its maw.",
    "ape": "Large primate with black fur, powerful arms, and an intelligent but fierce expression.",
    "archmage": "Elderly robed figure radiating magical power, carrying a staff, with arcane symbols glowing faintly around them.",
    "assassin": "Shadowy figure in dark leather armor, face hidden by a hood and mask, carrying poisoned blades.",
    
    // ===== B =====
    "balor": "Towering demon with red-black skin, massive bat wings wreathed in fire, horns curling from the head, and wielding a flaming whip and sword.",
    "bandit": "Rough-looking humanoid in mismatched armor and worn clothing, carrying crude weapons.",
    "bandit-captain": "Weathered warrior in quality leather armor, bearing scars and a commanding presence, with better-maintained weapons.",
    "banshee": "Ghostly female figure with flowing ethereal hair, hollow eyes, and a mouth open in an eternal scream. Translucent and glowing faintly.",
    "basilisk": "Eight-legged reptile with dull brown scales, a body like a serpent with legs, and deadly petrifying eyes that glow faintly green.",
    "behir": "Massive serpentine creature with twelve legs, dark blue scales with lighter underbelly, and a crocodilian head crackling with lightning.",
    "beholder": "Floating spherical body covered in leathery skin, with one massive central eye and ten smaller eyes on writhing stalks. Wide mouth filled with sharp teeth.",
    "berserker": "Wild-eyed warrior with ritual scars, wearing minimal armor, and wielding a greataxe with bloodthirsty intensity.",
    "black-pudding": "Amorphous blob of pure darkness, viscous and tar-like, that flows across surfaces dissolving everything it touches.",
    "blink-dog": "Sleek canine with golden-brown fur, intelligent eyes, and a shimmering quality suggesting its teleportation ability.",
    "bugbear": "Large goblinoid with yellow-brown fur covering a muscular frame, flat nose, and long arms ending in clawed hands. Stealthy despite its size.",
    "bulette": "Armored land shark with gray-blue plates, massive jaws, and powerful digging claws. Triangular head and small, beady eyes.",
    
    // ===== C =====
    "cambion": "Fiendish humanoid with small horns, leathery wings, and devilishly handsome features marred by an aura of corruption.",
    "carrion-crawler": "Giant centipede-like creature with a ring of paralytic tentacles around its mouth, green chitinous segments, and many skittering legs.",
    "centaur": "Upper body of a muscular humanoid attached to the body of a horse. Wild hair, often carrying a bow or spear.",
    "chain-devil": "Gaunt humanoid wrapped in animated chains that writhe and attack independently. Pale skin and burning eyes.",
    "chimera": "Three-headed monster with the front of a lion, a goat head growing from its back, and a dragon head on a serpentine tail. Bat-like wings.",
    "chuul": "Lobster-like aberration with a hard shell, massive pincers, and tentacles around its mouth. Amphibious horror.",
    "clay-golem": "Massive humanoid figure sculpted from clay, with crude features and cracks showing throughout its earthen body.",
    "cloaker": "Manta ray-like creature that disguises itself as a cloak, with a pale underside, black back, red eyes, and a tail with a barbed tip.",
    "cloud-giant": "Enormous humanoid with pale bluish-white skin, regal bearing, and fine clothing. Hair like wisps of cloud.",
    "cockatrice": "Rooster-like creature with bat wings, a serpentine tail, and deadly petrifying gaze.",
    "couatl": "Feathered serpent with brilliant rainbow-colored plumage, radiant wings, and a benevolent, wise expression.",
    "crawling-claw": "Severed humanoid hand animated by dark magic, scuttling on its fingers like a spider.",
    "cyclops": "One-eyed giant with rough skin, primitive clothing, and a single massive eye dominating its brutish face.",
    
    // ===== D =====
    "darkmantle": "Octopus-like creature that clings to ceilings, with a rocky exterior for camouflage and tentacles that wrap around prey.",
    "death-knight": "Skeletal warrior in ornate black plate armor, eyes burning with hellfire, wielding a greatsword wreathed in necrotic energy.",
    "death-tyrant": "Decayed beholder zombie with rotting flesh, damaged eyestalks, and a central eye that glows with necrotic power.",
    "deva": "Angelic being with bronze skin, white-feathered wings, and an aura of divine light. Carries a celestial mace.",
    "dire-wolf": "Massive wolf the size of a horse, with thick gray fur, intelligent predatory eyes, and enormous fangs.",
    "displacer-beast": "Six-legged panther-like creature with black fur and two tentacles ending in spiked pads growing from its shoulders. Appears slightly displaced from its actual position.",
    "doppelganger": "Gray-skinned humanoid with blank features, large eyes, and the ability to perfectly mimic any humanoid form.",
    "dragon-turtle": "Colossal turtle with a dragon's head, steam venting from its nostrils, and a shell like a small island. Massive flippers and a spiked tail.",
    "dretch": "Small, bloated demon with pale, rubbery skin, long arms, and a face twisted in perpetual misery.",
    "drider": "Dark elf from the waist up attached to a giant spider's body. Usually female with white hair and cruel features.",
    "drow": "Dark elf with obsidian-black skin, white or silver hair, and red eyes. Elegant features with a cruel bearing.",
    "dryad": "Beautiful fey woman appearing to be made of living wood and leaves, with bark-like skin and hair of vines and flowers.",
    "duergar": "Gray-skinned dwarf with bald head, white beard, and eyes adapted to darkness. Dour expression and iron equipment.",
    
    // ===== E =====
    "earth-elemental": "Humanoid shape formed of rock, earth, and gemstones. Craggy features with glowing mineral eyes.",
    "efreeti": "Towering genie with crimson skin, flames for hair, and brass jewelry. Lower body dissolves into smoke and fire.",
    "erinyes": "Fallen angel with black feathered wings, beautiful but cold features, and armor of hellish design. Carries a bow.",
    "ettercap": "Spider-like humanoid with gray skin, multiple eyes, and spinnerets. Hunched posture with elongated limbs.",
    "ettin": "Two-headed giant with misshapen body, each head having its own personality. Dirty and brutish appearance.",
    
    // ===== F =====
    "fire-elemental": "Humanoid shape of living flame, constantly shifting and flickering, with eyes of white-hot intensity.",
    "fire-giant": "Massive humanoid with coal-black skin, flaming orange hair, and a body built like a blacksmith. Wears armor of dark iron.",
    "flameskull": "Floating humanoid skull wreathed in green flames, with glowing eye sockets and cackling jaw.",
    "flesh-golem": "Humanoid constructed from stitched-together body parts, with visible seams, metal bolts, and mismatched skin tones.",
    "flumph": "Floating jellyfish-like creature with a flat body, eye stalks, and dangling tentacles. Peaceful and cute appearance.",
    "frost-giant": "Enormous humanoid with pale blue skin, white or blonde hair, and ice-blue eyes. Wears furs and carries weapons of ice.",
    
    // ===== G =====
    "gargoyle": "Stone creature resembling a winged demon, with horns, fangs, and clawed hands. Gray stone skin that provides perfect camouflage.",
    "gelatinous-cube": "Perfectly cube-shaped transparent ooze, ten feet on each side, with visible bones and equipment of dissolved victims floating within.",
    "ghost": "Translucent apparition of a humanoid, features twisted by death, floating and trailing ectoplasmic wisps.",
    "ghoul": "Undead humanoid with gray leathery skin, long claws, sharp teeth, and hungry, feral eyes.",
    "giant-ape": "Enormous primate with silver-black fur, intelligent eyes, and arms capable of crushing boulders.",
    "giant-spider": "House-sized arachnid with hairy legs, multiple gleaming eyes, and dripping fangs.",
    "githyanki-warrior": "Gaunt humanoid with yellow-green skin, pointed ears, and ornate armor. Carries a silver sword.",
    "githzerai-monk": "Ascetic humanoid with yellow-brown skin, calm features, and simple robes. Radiates mental discipline.",
    "glabrezu": "Massive demon with the torso of a humanoid, four arms (two ending in massive pincers), dog-like head, and goat legs.",
    "gnoll": "Hyena-headed humanoid with spotted fur, hunched posture, and a perpetual hungry snarl.",
    "goblin": "Small green-skinned humanoid with pointed ears, sharp teeth, and a mischievous or cowardly demeanor.",
    "gorgon": "Bull-like creature covered in iron plates instead of hide, with glowing eyes and breath that turns flesh to stone.",
    "gray-ooze": "Pool of gray sludge that looks like wet stone, with no discernible features except when it moves.",
    "green-hag": "Withered crone with sickly green skin, long stringy hair, and warts. Bent posture with long clawed fingers.",
    "grick": "Worm-like creature with a rubbery body, beak-like mouth surrounded by tentacles, and grasping limbs.",
    "griffon": "Majestic creature with an eagle's head, wings, and forelegs combined with a lion's body and hindquarters.",
    "grimlock": "Blind humanoid with gray skin, no eyes, and overdeveloped other senses. Muscular with sharp teeth.",
    "guard": "Armored humanoid soldier in standard military equipment, alert and disciplined.",
    
    // ===== H =====
    "half-dragon": "Humanoid with draconic features including scales, horns, and possibly wings matching their dragon heritage color.",
    "harpy": "Creature with the upper body of a woman and the wings and lower body of a vulture. Matted feathers and cruel features.",
    "hell-hound": "Large dog-like creature with red-black fur, glowing red eyes, and flames licking from its mouth and paws.",
    "hezrou": "Toad-like demon with slimy skin, massive clawed hands, and a stench of rot. Bloated, muscular body.",
    "hill-giant": "Dull-faced giant with ruddy skin, tangled hair, and a gut hanging over a crude loincloth. Carries a massive club.",
    "hippogriff": "Creature with an eagle's head, wings, and forelegs combined with a horse's body and hindquarters.",
    "hobgoblin": "Militaristic goblinoid with orange-red skin, flat nose, and disciplined bearing. Wears well-maintained armor.",
    "homunculus": "Tiny winged humanoid created by alchemy, with leathery skin and bat-like wings.",
    "hook-horror": "Vulture-headed aberration with a hard exoskeleton and arms ending in massive hooks instead of hands.",
    "horned-devil": "Tall devil with red skin, massive wings, a long tail, and large curving horns. Carries a barbed fork.",
    "hydra": "Multi-headed serpentine creature with a massive body and multiple long necks each ending in a fanged head.",
    
    // ===== I-K =====
    "ice-devil": "Insectoid devil with white carapace, mandibles, and a long tail ending in a stinger. Radiates supernatural cold.",
    "imp": "Tiny red devil with small horns, bat wings, and a scorpion-like tail. Mischievous and cunning expression.",
    "intellect-devourer": "Brain on four legs, walking on stumpy limbs, with a small tail. Glistening, pulsing brain matter exposed.",
    "invisible-stalker": "Vaguely humanoid shape made of swirling air, only visible by the dust and debris it disturbs.",
    "iron-golem": "Massive humanoid constructed of solid iron, with industrial features and incredible weight evident in every step.",
    "kenku": "Raven-headed humanoid with black feathers, a beak, and wing-like arms. Hunched posture and mimicking mannerisms.",
    "kobold": "Small reptilian humanoid with scales ranging from rusty red to black, a long tail, and small horns. Timid but cunning.",
    "kraken": "Titanic squid-like creature with a mass of tentacles, two huge eyes, and a beak capable of crushing ships.",
    "kuo-toa": "Fish-headed humanoid with slimy gray skin, bulging eyes, and webbed appendages. Mad and devoted to strange gods.",
    
    // ===== L =====
    "lamia": "Upper body of a beautiful woman attached to the body of a lion. Seductive appearance hiding predatory nature.",
    "lemure": "Blob-like devil made of melted flesh, with vaguely humanoid features constantly shifting and reforming.",
    "lich": "Skeletal spellcaster in ornate robes, with burning points of light in empty eye sockets and an aura of death magic.",
    "lizardfolk": "Reptilian humanoid with scales, a tail, and a snout filled with sharp teeth. Cold, calculating eyes.",
    
    // ===== M =====
    "mage": "Robed spellcaster carrying a staff or wand, with arcane components and a scholarly appearance.",
    "magmin": "Small humanoid made of molten rock, constantly glowing with internal fire and leaving scorch marks.",
    "mammoth": "Massive woolly elephant with long curved tusks and shaggy brown fur.",
    "manticore": "Lion-bodied creature with a human-like face, bat wings, and a tail covered in deadly spikes.",
    "marilith": "Six-armed female demon from the waist up, with a massive serpent body below. Wields six different weapons.",
    "medusa": "Woman with snakes instead of hair, scales on her skin, and eyes that turn victims to stone. Tragic beauty.",
    "merfolk": "Humanoid with a fish tail instead of legs, fins, and gills. Often beautiful with shimmering scales.",
    "merrow": "Monstrous aquatic humanoid with green scales, webbed hands, sharp claws, and a fish-like face.",
    "mimic": "Amorphous creature currently shaped like a treasure chest, with wood-textured skin and adhesive pseudopods.",
    "mind-flayer": "Octopus-headed humanoid with purple skin, four facial tentacles, and milky white eyes. Wears elegant robes.",
    "minotaur": "Bull-headed humanoid with a massive muscular body, hooves, and large horns. Often carries a greataxe.",
    "mummy": "Undead wrapped in ancient bandages, with withered flesh visible beneath, and glowing eyes of hatred.",
    "mummy-lord": "Royal mummy in ornate wrappings with gold and jewels, radiating an aura of ancient power and curses.",
    
    // ===== N-O =====
    "nalfeshnee": "Massive demon with the body of an ape, the head of a boar, and small feathered wings. Grotesquely fat.",
    "nightmare": "Horse made of shadow and flame, with a burning mane and tail, and hooves that leave fire in their wake.",
    "night-hag": "Hideous crone with blue-purple skin, deep-set eyes, and iron-like nails. Stench of decay.",
    "noble": "Finely dressed humanoid of obvious wealth and breeding, with expensive jewelry and confident bearing.",
    "nothic": "Hunched creature with one massive eye, long claws, and rotting flesh. Once a wizard, now cursed.",
    "ochre-jelly": "Large blob of ochre-yellow slime that flows like thick pudding, dissolving organic matter on contact.",
    "ogre": "Hulking humanoid with yellowish skin, small eyes, and a stupid brutal expression. Nine feet of muscle and fat.",
    "oni": "Blue-skinned ogre-like creature with horns, tusks, and wild hair. Can change shape and fly.",
    "orc": "Pig-faced humanoid with gray-green skin, tusks, and a muscular build. Aggressive and warlike bearing.",
    "orog": "Elite orc with darker gray skin, more intelligent eyes, and superior equipment and bearing.",
    "otyugh": "Three-legged aberration with a massive mouth, two tentacles with spiked ends, and an eye on a stalk. Lives in filth.",
    "owlbear": "Bear-like creature with an owl's head, feathers mixed with fur, and a hooked beak.",
    
    // ===== P-Q =====
    "pegasus": "Magnificent white horse with large feathered wings and a noble, intelligent bearing.",
    "phase-spider": "Giant spider that flickers in and out of visibility, with long legs and massive fangs dripping venom.",
    "pit-fiend": "Massive devil with red skin, bat wings, horns, and a body wreathed in flame. Pinnacle of devilkind.",
    "planetar": "Powerful angel with green skin, white wings, and a muscular build. Carries a greatsword of light.",
    "plesiosaurus": "Long-necked aquatic dinosaur with flippers and a small head filled with sharp teeth.",
    "poltergeist": "Invisible spirit that manifests only through the objects it throws and the chaos it causes.",
    "priest": "Robed religious figure carrying a holy symbol, with an aura of divine connection.",
    "pseudodragon": "Tiny dragon the size of a cat, with reddish-brown scales, wings, and a stinger-tipped tail. Cute and intelligent.",
    "pteranodon": "Flying reptile with a large head crest, long beak, and leathery wings.",
    "purple-worm": "Gargantuan burrowing worm with purple-gray hide, a circular mouth filled with grinding teeth, and a poison stinger tail.",
    "quasit": "Tiny demon with green skin, small horns, and bat wings. Can change into a bat, centipede, or toad.",
    
    // ===== R =====
    "rakshasa": "Tiger-headed humanoid with hands that bend backward, wearing fine silks and an expression of cruel sophistication.",
    "remorhaz": "Massive arctic centipede with a blue carapace, internal fire glowing through segments, and massive mandibles.",
    "revenant": "Undead driven by vengeance, appearing as a corpse in the condition of death, with burning eyes of hatred.",
    "roc": "Gigantic bird of prey large enough to carry elephants, with brown feathers and a wingspan blocking out the sun.",
    "roper": "Stalagmite-like creature with a single eye, toothy maw, and multiple grasping tendrils disguised as cave formations.",
    "rust-monster": "Insect-like creature with a propeller-shaped tail, feathery antennae, and a taste for metal.",
    
    // ===== S =====
    "sahuagin": "Shark-like humanoid with green scales, webbed hands and feet, and multiple rows of sharp teeth.",
    "salamander": "Serpentine fire creature with the upper body of a humanoid, burning orange skin, and a tail of living flame.",
    "satyr": "Goat-legged humanoid with small horns, a mischievous face, and often carrying pan pipes.",
    "scarecrow": "Animated scarecrow with a burlap face, straw body, and an unnervingly intelligent gleam in button eyes.",
    "scorpion": "Giant arachnid with massive pincers, eight legs, and a curving stinger tail dripping venom.",
    "sea-hag": "Hideous aquatic crone with slimy green skin, seaweed-like hair, and cold dead eyes.",
    "shadow": "Two-dimensional creature of pure darkness, vaguely humanoid, that drains the life from living things.",
    "shambling-mound": "Animated heap of rotting vegetation, vaguely humanoid in shape, with vine-like tendrils.",
    "shield-guardian": "Massive construct bound to an amulet, with runes carved into its stone body and a protective stance.",
    "shrieker": "Mushroom-like fungus creature that emits piercing screams when disturbed.",
    "skeleton": "Animated humanoid skeleton with empty eye sockets, wielding rusty weapons and wearing tattered armor.",
    "solar": "The mightiest angel, with bronze skin, white wings, and an aura of blinding divine radiance. Carries a legendary bow.",
    "specter": "Ghostly humanoid consumed by rage, with features twisted by hatred and trailing wisps of darkness.",
    "sphinx": "Lion-bodied creature with wings and either a human face (androsphinx) or female human head (gynosphinx). Ancient and wise.",
    "spider": "Large arachnid with eight hairy legs, multiple eyes, and venomous fangs.",
    "spirit-naga": "Serpent with a humanoid face, scales of purple and black, and an evil intelligence in its eyes.",
    "sprite": "Tiny winged fey with features like a miniature elf, often carrying a tiny sword and bow.",
    "steam-mephit": "Small elemental of steam and water vapor, with a hissing voice and scalding presence.",
    "stirge": "Mosquito-like creature the size of a cat, with leathery wings, four legs, and a long proboscis for blood-draining.",
    "stone-giant": "Gray-skinned giant with features like weathered rock, wearing stone jewelry and carrying boulder-sized stones.",
    "stone-golem": "Massive humanoid carved from stone, with simplified features and joints that grind when moving.",
    "storm-giant": "Enormous giant with purple-blue skin, wild hair crackling with lightning, and eyes like storm clouds.",
    "succubus": "Fiendish beauty with horns, bat wings, and a tail. Supernaturally attractive with a predatory gleam.",
    
    // ===== T =====
    "tarrasque": "The most feared monster in existence - a towering beast with a spiked carapace, massive jaws, horns, and a tail like a siege weapon.",
    "thri-kreen": "Insectoid humanoid with a mantis-like head, four arms, and a chitinous exoskeleton. Carries multiple weapons.",
    "tiger": "Massive orange and black striped feline, powerful and graceful with piercing predator eyes.",
    "treant": "Living tree with a humanoid face in the bark, branch-like arms, and roots for legs. Ancient and wise.",
    "triceratops": "Large dinosaur with three horns, a bony frill, and a massive body built for charging.",
    "troll": "Tall, lanky humanoid with green rubbery skin, long arms with claws, and a face with a long nose. Constantly regenerating.",
    "tyrannosaurus-rex": "Massive bipedal dinosaur with tiny arms, enormous jaws filled with teeth, and a thunderous presence.",
    
    // ===== U-V =====
    "umber-hulk": "Massive insectoid with iron-hard mandibles, confusion-inducing eyes, and powerful digging claws.",
    "unicorn": "Magnificent white horse with a spiraling horn of pure light, representing ultimate goodness and purity.",
    "vampire": "Pale-skinned undead with sharp fangs, red eyes, and an aura of dark charisma. Dressed elegantly.",
    "vampire-spawn": "Lesser vampire with pale skin, fangs, and feral hunger. Less refined than a true vampire.",
    "veteran": "Scarred warrior in well-worn but maintained armor, with the bearing of someone who has seen many battles.",
    "violet-fungus": "Mushroom creature with four purple tentacles that rot flesh on contact.",
    "vrock": "Vulture-headed demon with wings, a hunched body covered in feathers, and taloned feet.",
    
    // ===== W =====
    "warhorse": "Large, muscular horse bred for battle, with armor barding and a fierce temperament.",
    "water-elemental": "Humanoid shape of living water, constantly flowing and reforming, with waves for features.",
    "werebear": "Humanoid that transforms into a massive bear, or a hybrid with ursine features. Usually good-natured.",
    "wereboar": "Humanoid that transforms into a boar, or a hybrid with tusks and coarse hair. Ill-tempered.",
    "wererat": "Humanoid that transforms into a giant rat, or a hybrid with rat features. Sneaky and disease-carrying.",
    "weretiger": "Humanoid that transforms into a tiger, or a hybrid with feline grace and stripes. Proud and territorial.",
    "werewolf": "Humanoid that transforms into a wolf, or a hybrid with lupine features. Savage and pack-oriented.",
    "wight": "Undead warrior with gray skin, burning eyes, and ancient armor. Drains life force with its touch.",
    "will-o-wisp": "Floating ball of pale light that lures travelers to their doom in swamps and marshes.",
    "winter-wolf": "Massive white wolf with ice-blue eyes and breath that freezes solid.",
    "wolf": "Gray-furred canine predator with yellow eyes and sharp teeth, hunting in packs.",
    "wraith": "Incorporeal undead of pure darkness, with a vaguely humanoid shape and hatred for all living things.",
    "wyvern": "Dragon-like creature with wings instead of forelegs, two hind legs, and a venomous stinger tail.",
    
    // ===== X-Z =====
    "xorn": "Three-armed aberration with a body like a boulder, three eyes, and a large mouth on top of its head. Eats gems and metal.",
    "yeti": "Large ape-like creature covered in white fur, with blue eyes and claws of ice. Adapted to arctic environments.",
    "young-black-dragon": "Sleek black dragon with emerging horns and acidic breath, smaller but already deadly.",
    "young-blue-dragon": "Blue-scaled dragon with a growing horn, crackling with electrical energy.",
    "young-green-dragon": "Forest-green dragon with developing horns and toxic breath, cunning despite its youth.",
    "young-red-dragon": "Crimson dragon with swept-back horns, already fearsome with fire breath.",
    "young-white-dragon": "Ice-white dragon with spiny ridges, feral and adapted for cold.",
    "yuan-ti-abomination": "Serpentine creature with a snake's body from the waist down and snake head. Most monstrous yuan-ti.",
    "yuan-ti-malison": "Humanoid with significant snake features like a snake head or snake arms.",
    "yuan-ti-pureblood": "Nearly human yuan-ti with only subtle snake features like slit pupils or patches of scales.",
    "zombie": "Shambling undead with rotting flesh, vacant eyes, and jerky movements. Mindless hunger for the living."
};

// Apply descriptions to allMonsters
function applyMonsterDescriptions() {
    if (typeof allMonsters === 'undefined') return;

    for (const [key, description] of Object.entries(MONSTER_DESCRIPTIONS)) {
        if (allMonsters[key] && !allMonsters[key].visualDescription) {
            allMonsters[key].visualDescription = description;
        }
    }
    console.log(`Applied visual descriptions to ${Object.keys(MONSTER_DESCRIPTIONS).length} monsters`);
}

// Run when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyMonsterDescriptions);
    } else {
        setTimeout(applyMonsterDescriptions, 100);
    }
}

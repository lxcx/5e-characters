// Monster Visual Descriptions for Image Generation
// This file adds physical appearance descriptions to existing monsters

const MONSTER_DESCRIPTIONS = {
    // ===== A =====
    "aarakocra": "Bird-like humanoid with colorful feathered wings, sharp talons, and a hooked beak. Lean build with feathers covering the body in shades of red, orange, or blue.",
    "abjurer": "Wizard specializing in protective magic, often surrounded by faint shimmering wards.",
    "aboleth": "Massive eel-like creature with slimy blue-green skin, three red eyes stacked vertically, four long tentacles, and a lamprey-like mouth with rows of teeth.",
    "abominable-yeti": "Massive yeti twice the size of normal, an alpha predator of the frozen wastes with terrible strength.",
    "acolyte": "Robed humanoid in simple religious vestments, carrying a holy symbol and prayer book.",
    "adult-oblex": "Ooze that has consumed enough minds to project false humanoid forms, trailing sulfurous slime.",
    "alkilith": "Demon appearing as a living wound in reality, a fungal membrane across a doorway or passage.",
    "allosaurus": "Large bipedal carnivorous dinosaur with powerful jaws and clawed hands.",
    "androsphinx": "Male sphinx with a human male face, massive mane, lion's body, and great wings. Poses deadly challenges.",
    "animated-table": "A table animated by magic, attacking with legs and body slams.",
    "ankylosaurus": "Armored dinosaur with a club-like tail, bony plates, and a low, tanklike body.",
    "autumn-eladrin": "Fey elf embodying autumn - hair of red and gold leaves, melancholic expression, aura of peaceful endings.",
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
    "air-elemental": "Living tornado - a swirling vortex of wind, cloud, and mist in a loose humanoid silhouette. No face, no solid features, just flowing currents of air. Wispy and translucent with debris and leaves caught in the constant motion. NOT a creature with a body, just animated wind taking rough shape.",
    "ancient-black-dragon": "Colossal dragon with jet-black scales corroded by age, massive curved horns, and eyes burning with malice. Skeletal wings span an enormous distance.",
    "ancient-blue-dragon": "Titanic dragon with midnight-blue scales, a massive horn crackling with lightning, and an aura of supreme arrogance.",
    "ancient-red-dragon": "Gargantuan dragon with blood-red scales, enormous swept horns, and a body wreathed in heat shimmer. The ultimate apex predator.",
    "animated-armor": "Empty suit of plate armor that moves on its own, helmet visor revealing only darkness within, floating slightly above the ground.",
    "ankheg": "Giant insect with a brown chitinous shell, massive mandibles, and multiple legs. Acid drips from its maw.",
    "ape": "Large primate with black fur, powerful arms, and an intelligent but fierce expression.",
    "archmage": "Elderly robed figure radiating magical power, carrying a staff, with arcane symbols glowing faintly around them.",
    "archer": "Skilled humanoid in light leather armor, carrying a longbow and quiver of arrows. Sharp eyes and steady hands.",
    "assassin": "Shadowy figure in dark leather armor, face hidden by a hood and mask, carrying poisoned blades.",
    "astral-dreadnought": "Gargantuan creature of the Astral Plane with a massive lamprey-like mouth, two huge pincers, and a single enormous eye. Silvery-gray body trailing ethereal mist.",
    "azer": "Dwarf-like elemental with skin of burnished bronze and a beard and hair of living flame. Wears minimal armor of brass and carries a warhammer.",
    "axe-beak": "Large flightless bird with a sharp, axe-shaped beak. Covered in dull feathers with powerful legs built for running.",
    
    // ===== B =====
    "babau": "Tall, gaunt demon with dark leathery skin, a single curved horn, and claws dripping acidic slime. Hunched posture and cruel intelligence.",
    "baboon": "Medium-sized primate with a dog-like muzzle, prominent canine teeth, and a colorful face. Aggressive demeanor.",
    "badger": "Small burrowing mammal with black and white striped face, stocky body, and sharp claws.",
    "balor": "Towering demon with red-black skin, massive bat wings wreathed in fire, horns curling from the head, and wielding a flaming whip and sword.",
    "banderhobb": "Large frog-like shadow creature with rubbery black skin, massive mouth, and long grasping tongue. Created by hags to kidnap victims.",
    "bandit": "Rough-looking humanoid in mismatched armor and worn clothing, carrying crude weapons.",
    "bard": "Charismatic performer in colorful clothing, carrying a musical instrument. Quick wit and charming smile.",
    "barghest": "Goblin-wolf shapeshifter - in true form, a large goblin with wolfish features and burning eyes. Can assume wolf or goblin form.",
    "bat": "Small flying mammal with leathery wings, large ears, and echolocation. Nocturnal hunter.",
    "bandit-captain": "Weathered warrior in quality leather armor, bearing scars and a commanding presence, with better-maintained weapons.",
    "banshee": "Ghostly female figure with flowing ethereal hair, hollow eyes, and a mouth open in an eternal scream. Translucent and glowing faintly.",
    "basilisk": "Eight-legged reptile with dull brown scales, a body like a serpent with legs, and deadly petrifying eyes that glow faintly green.",
    "behir": "Massive serpentine creature with twelve legs, dark blue scales with lighter underbelly, and a crocodilian head crackling with lightning.",
    "berbalang": "Gaunt humanoid with bat-like wings, long claws, and the ability to project astral duplicates. Gray skin and hollow eyes.",
    "black-bear": "Medium-sized bear with thick black fur, rounded ears, and a brown muzzle. Omnivorous forest dweller.",
    "black-dragon-wyrmling": "Young black dragon, cat-sized with glossy black scales, small curved horns, and eyes already gleaming with cruelty.",
    "blackguard": "Fallen paladin in dark plate armor, wielding an unholy weapon. Radiates an aura of dread and malevolence.",
    "blood-hawk": "Aggressive raptor with red-tinged plumage, sharp talons, and a hooked beak. Hunts in flocks.",
    "blue-dragon-wyrmling": "Young blue dragon with deep blue scales, a small horn beginning to form, and sparks dancing between its teeth.",
    "boar": "Stocky wild pig with coarse bristly fur, curved tusks, and a muscular body. Aggressive when threatened.",
    "boggle": "Small fey creature with oily blue skin, long arms, and the ability to create dimensional rifts. Mischievous trickster.",
    "booyahg-booyahg-booyahg": "Goblin wild magic sorcerer with chaotic energy crackling around them. Unpredictable and dangerous, even to allies.",
    "brass-dragon-wyrmling": "Young brass dragon with warm-toned scales, small backward-curving horns, and an eager, friendly expression.",
    "brontosaurus": "Massive long-necked dinosaur with a whip-like tail, small head, and columnar legs. Gentle herbivore.",
    "bronze-dragon-wyrmling": "Young bronze dragon with shimmering scales, developing webbed features, and an inquisitive nature.",
    "brown-bear": "Large bear with thick brown fur, powerful build, and formidable claws. Can stand on hind legs.",
    "bullywug": "Frog-like humanoid with mottled green skin, bulging eyes, and a croaking voice. Wears crude armor and carries a spear.",
    "beholder": "Floating spherical body covered in leathery skin, with one massive central eye and ten smaller eyes on writhing stalks. Wide mouth filled with sharp teeth.",
    "berserker": "Wild-eyed warrior with ritual scars, wearing minimal armor, and wielding a greataxe with bloodthirsty intensity.",
    "black-pudding": "Amorphous blob of pure darkness, viscous and tar-like, that flows across surfaces dissolving everything it touches.",
    "blink-dog": "Sleek canine with golden-brown fur, intelligent eyes, and a shimmering quality suggesting its teleportation ability.",
    "bugbear": "Large goblinoid with yellow-brown fur covering a muscular frame, flat nose, and long arms ending in clawed hands. Stealthy despite its size.",
    "bulette": "Armored land shark with gray-blue plates, massive jaws, and powerful digging claws. Triangular head and small, beady eyes.",
    
    // ===== C =====
    "camel": "Large desert mammal with one or two humps, long legs, and a patient expression. Adapted for arid climates.",
    "cambion": "Fiendish humanoid with small horns, leathery wings, and devilishly handsome features marred by an aura of corruption.",
    "carrion-crawler": "Giant centipede-like creature with a ring of paralytic tentacles around its mouth, green chitinous segments, and many skittering legs.",
    "cat": "Small feline with soft fur, pointed ears, and reflective eyes. Agile and independent.",
    "cave-bear": "Enormous prehistoric bear with shaggy fur, massive claws, and a powerful build adapted for underground life.",
    "cave-fisher": "Lobster-like creature clinging to cave ceilings, with a long sticky filament it uses to snare prey.",
    "champion": "Elite warrior in masterwork armor, bearing the scars and confidence of countless victories.",
    "chitine": "Spider-like humanoid with four arms, mandibles, and the ability to climb walls. Created by Lolth.",
    "choldrith": "Chitine priestess of Lolth with additional spider features and divine power. Commands other chitines.",
    "commoner": "Ordinary humanoid peasant or townsperson in simple clothing. The common folk of the realm.",
    "conjurer": "Wizard specializing in summoning magic, often with minor extraplanar creatures nearby. Robed with arcane focus.",
    "constrictor-snake": "Large non-venomous snake with powerful coils designed to crush prey. Patterned scales.",
    "copper-dragon-wyrmling": "Young copper dragon with reddish scales, small horns, and an impish, playful demeanor.",
    "crab": "Small crustacean with a hard shell, pincers, and sideways movement.",
    "cranium-rat": "Small rat with an exposed, enlarged brain that glows faintly. Gains intelligence in swarms.",
    "crocodile": "Large reptile with armored scales, powerful jaws, and a long tail. Ambush predator.",
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
    "earth-elemental": "Living mound of rock and soil in a rough humanoid shape. Craggy boulder body with no distinct face, just darker crevices suggesting features. Stones, dirt, and crystals forming a massive lumbering form. A walking landslide, not a creature.",
    "efreeti": "Towering genie with crimson skin, flames for hair, and brass jewelry. Lower body dissolves into smoke and fire.",
    "erinyes": "Fallen angel with black feathered wings, beautiful but cold features, and armor of hellish design. Carries a bow.",
    "ettercap": "Spider-like humanoid with gray skin, multiple eyes, and spinnerets. Hunched posture with elongated limbs.",
    "ettin": "Two-headed giant with misshapen body, each head having its own personality. Dirty and brutish appearance.",
    
    // ===== E =====
    "eagle": "Large bird of prey with brown feathers, white head, sharp talons, and keen eyesight. Symbol of freedom.",
    "eladrin-autumn": "Fey elf embodying autumn - hair of red and gold leaves, melancholic expression, aura of peaceful endings.",
    "eladrin-spring": "Fey elf of spring - vibrant green hair with flowers blooming, youthful energy, and infectious joy.",
    "eladrin-summer": "Fey elf of summer - golden skin, fiery temperament, radiating heat and passion.",
    "eladrin-winter": "Fey elf of winter - pale blue skin, white hair like frost, cold demeanor and icy magic.",
    "elder-oblex": "Massive ooze that has consumed many minds, projecting multiple false humanoid forms simultaneously. Sulfurous smell.",
    "elder-tempest": "Gargantuan living storm - a cloud of lightning, wind, and rain in vaguely bird-like form. The storm itself given consciousness.",
    "elephant": "Massive gray mammal with trunk, tusks, and large flapping ears. Intelligent and social.",
    "elk": "Large deer with impressive antlers, brown coat, and proud bearing. Majestic forest dweller.",
    "enchanter": "Wizard specializing in mind magic, with an unsettling gaze and honeyed words.",
    "evoker": "Wizard specializing in destructive magic, often with singed robes and the smell of ozone.",
    
    // ===== F =====
    "faerie-dragon": "Tiny dragon with butterfly wings, iridescent scales, and a mischievous personality. Color changes with age.",
    "faerie-dragon-red": "Mature faerie dragon with red scales, full magical abilities, and centuries of pranking experience.",
    "fire-elemental": "Living bonfire in a loose humanoid silhouette. Constantly shifting flames with no solid body, just fire taking rough shape. Bright orange and yellow with white-hot core. No face, just flickering tongues of flame. A walking inferno, not a creature with features.",
    "fire-giant": "Massive humanoid with coal-black skin, flaming orange hair, and a body built like a blacksmith. Wears armor of dark iron.",
    "fire-snake": "Serpent made of living fire, slithering through the air and leaving trails of flame.",
    "firenewt-warlock-of-imix": "Firenewt spellcaster devoted to the fire lord Imix, with glowing runes and enhanced flame powers.",
    "firenewt-warrior": "Lizard-like humanoid with red-orange scales, adapted to volcanic environments. Wields heated weapons.",
    "flail-snail": "Giant snail with a shell of scintillating colors and flail-like tentacles. Antimagic properties.",
    "flying-snake": "Colorful serpent with wing-like fins allowing gliding flight. Found in jungles.",
    "flying-sword": "Animated blade that hovers and attacks independently. Enchanted steel with no visible wielder.",
    "fomorian": "Hideously deformed giant with asymmetrical features, one eye larger than the other, and twisted limbs. Cursed by the fey.",
    "frog": "Small amphibian with moist skin, bulging eyes, and powerful jumping legs.",
    "flameskull": "Floating humanoid skull wreathed in green flames, with glowing eye sockets and cackling jaw.",
    "flesh-golem": "Humanoid constructed from stitched-together body parts, with visible seams, metal bolts, and mismatched skin tones.",
    "flumph": "Floating jellyfish-like creature with a flat body, eye stalks, and dangling tentacles. Peaceful and cute appearance.",
    "frost-giant": "Enormous humanoid with pale blue skin, white or blonde hair, and ice-blue eyes. Wears furs and carries weapons of ice.",
    
    // ===== G =====
    "galeb-duhr": "Animated boulder with a crude face, stubby limbs, and the ability to animate other stones. Earth elemental kin.",
    "gargoyle": "Stone creature resembling a winged demon, with horns, fangs, and clawed hands. Gray stone skin that provides perfect camouflage.",
    "gazer": "Tiny beholder-kin, a floating orb with four eyestalks and a central eye. Created from beholder dreams.",
    "gelatinous-cube": "Perfectly cube-shaped transparent ooze, ten feet on each side, with visible bones and equipment of dissolved victims floating within.",
    "genie-dao": "Earth genie with stone-like skin, muscular build, and lower body dissolving into swirling earth.",
    "genie-djinni": "Air genie with blue skin, noble bearing, and lower body trailing into mist and cloud.",
    "genie-efreeti": "Fire genie with crimson skin, flames for hair, and a body of living fire below the waist.",
    "genie-marid": "Water genie with blue-green skin, aquatic features, and a lower body of churning water.",
    "ghast": "More powerful ghoul with a stench of death, retaining some intelligence and cunning.",
    "ghost": "Translucent apparition of a humanoid, features twisted by death, floating and trailing ectoplasmic wisps.",
    "ghoul": "Undead humanoid with gray leathery skin, long claws, sharp teeth, and hungry, feral eyes.",
    "giant-ape": "Enormous primate with silver-black fur, intelligent eyes, and arms capable of crushing boulders.",
    "giant-badger": "Badger the size of a large dog, with powerful claws and aggressive temperament.",
    "giant-bat": "Bat with a six-foot wingspan, echolocation, and a taste for blood.",
    "giant-boar": "Massive wild pig with tusks like swords and a foul temper.",
    "giant-centipede": "Centipede three feet long with venomous mandibles and countless skittering legs.",
    "giant-constrictor-snake": "Enormous snake thirty feet long, capable of crushing prey with its coils.",
    "giant-crab": "Crab the size of a horse with crushing pincers and armored shell.",
    "giant-crocodile": "Crocodile twenty feet long, an ancient predator capable of taking down elephants.",
    "giant-eagle": "Eagle with a twenty-foot wingspan, intelligent and sometimes allied with good creatures.",
    "giant-elk": "Massive elk with antlers spanning ten feet, ridden by fey or forest guardians.",
    "giant-fire-beetle": "Large beetle with glowing glands that produce light. Harmless but useful.",
    "giant-frog": "Frog the size of a dog with a sticky tongue and voracious appetite.",
    "giant-goat": "Mountain goat of unusual size with powerful horns and sure footing.",
    "giant-hyena": "Hyena the size of a horse, even more aggressive than its smaller kin.",
    "giant-lizard": "Lizard six feet long, sometimes used as a mount by smaller humanoids.",
    "giant-octopus": "Octopus with tentacles reaching fifteen feet, intelligent and adaptable.",
    "giant-owl": "Owl with a fifteen-foot wingspan, wise and sometimes willing to serve as a mount.",
    "giant-poisonous-snake": "Venomous snake ten feet long with deadly fangs.",
    "giant-rat": "Rat the size of a dog, often diseased and found in swarms.",
    "giant-scorpion": "Scorpion ten feet long with crushing pincers and a venomous tail stinger.",
    "giant-sea-horse": "Sea horse large enough to serve as an underwater mount.",
    "giant-shark": "Shark thirty feet long, an apex predator of the deep.",
    "giant-spider": "Spider the size of a horse with venomous fangs and web-spinning ability.",
    "giant-toad": "Toad large enough to swallow a halfling whole.",
    "giant-vulture": "Vulture with an enormous wingspan, patient and always watching for death.",
    "giant-wasp": "Wasp the size of a dog with a painful venomous sting.",
    "giant-weasel": "Weasel the size of a large dog, quick and bloodthirsty.",
    "giant-wolf-spider": "Hunting spider that doesn't spin webs, instead pursuing prey with speed.",
    "giff": "Hippopotamus-headed humanoid with a military bearing and love of firearms. Dressed in colonial military uniform.",
    "girallon-zombie": "Undead massive four-armed ape with matted, rotting white fur and savage features. Gray decaying flesh visible through patches of missing fur. Still possesses terrible strength, moving with unnatural jerking motions.",
    "githyanki-gish": "Githyanki warrior-wizard combining martial prowess with arcane power. Yellow skin, pointed ears.",
    "githyanki-kithrak": "Elite githyanki cavalry, riding red dragons into battle.",
    "githyanki-knight": "Githyanki warrior in ornate armor, wielding a silver sword capable of severing astral cords.",
    "githyanki-supreme-commander": "Highest-ranking githyanki military leader, second only to the lich-queen.",
    "githzerai-anarch": "Githzerai master of mental discipline, capable of reshaping reality through pure will.",
    "githzerai-enlightened": "Githzerai who has achieved profound mental mastery and psionic power.",
    "githzerai-zerth": "Githzerai warrior-monk combining martial arts with time manipulation.",
    "gladiator": "Professional arena fighter with scarred body, honed muscles, and showman's flair.",
    "gloom-weaver": "Shadar-kai spellcaster who draws power from the Shadowfell. Pale, with shadow magic.",
    "giant-spider": "House-sized arachnid with hairy legs, multiple gleaming eyes, and dripping fangs.",
    "githyanki-warrior": "Gaunt humanoid with yellow-green skin, pointed ears, and ornate armor. Carries a silver sword.",
    "githzerai-monk": "Ascetic humanoid with yellow-brown skin, calm features, and simple robes. Radiates mental discipline.",
    "glabrezu": "Massive demon with the torso of a humanoid, four arms (two ending in massive pincers), dog-like head, and goat legs.",
    "gnoll": "Hyena-headed humanoid with spotted fur, hunched posture, and a perpetual hungry snarl.",
    "gnoll-flesh-gnawer": "Gnoll that has gorged on humanoid flesh, larger and more savage than others.",
    "gnoll-hunter": "Stealthy gnoll scout with keen senses and tracking abilities.",
    "gnoll-witherling": "Animated skeleton of a hyena-headed humanoid with elongated canine skull, hunched bone structure, and clawed hands. Burns with Yeenoghu's dark power, mindlessly hunting the living.",
    "goat": "Small hoofed mammal with curved horns and a stubborn temperament.",
    "goblin": "Small green-skinned humanoid with pointed ears, sharp teeth, and a mischievous or cowardly demeanor.",
    "gold-dragon-wyrmling": "Young gold dragon with brilliant scales and wise eyes beyond its age.",
    "golem-clay": "Humanoid figure sculpted from clay, crude features, sacred words inscribed on its forehead.",
    "golem-flesh": "Construct stitched together from corpse parts, resembling Frankenstein's monster.",
    "golem-iron": "Massive humanoid of solid iron, weighing tons, with crude but powerful features.",
    "golem-stone": "Carved stone humanoid, often resembling temple guardians or statuary come to life.",
    "gray-render": "Hulking gray-skinned beast with powerful claws and a protective nature toward its bonded creature.",
    "green-dragon-wyrmling": "Young green dragon with forest-colored scales and a cunning beyond its years.",
    "grick-alpha": "Larger, more powerful grick with a brighter coloration and dominant position in the pack.",
    "grung": "Small frog-like humanoid with poisonous skin in vibrant colors indicating caste.",
    "grung-elite-warrior": "Grung warrior of high caste, more vibrantly colored and martially skilled.",
    "guard-drake": "Wingless dragon bred for guard duty, loyal and territorial.",
    "gynosphinx": "Female sphinx with the body of a lion, wings of an eagle, and humanoid face. Poses riddles.",
    "gorgon": "Bull-like creature covered in iron plates instead of hide, with glowing eyes and breath that turns flesh to stone.",
    "gray-ooze": "Pool of gray sludge that looks like wet stone, with no discernible features except when it moves.",
    "green-hag": "Withered crone with sickly green skin, long stringy hair, and warts. Bent posture with long clawed fingers.",
    "grick": "Worm-like creature with a rubbery body, beak-like mouth surrounded by tentacles, and grasping limbs.",
    "griffon": "Majestic creature with an eagle's head, wings, and forelegs combined with a lion's body and hindquarters.",
    "grimlock": "Blind humanoid with gray skin, no eyes, and overdeveloped other senses. Muscular with sharp teeth.",
    "guard": "Armored humanoid soldier in standard military equipment, alert and disciplined.",
    
    // ===== H =====
    "hadrosaurus": "Duck-billed dinosaur that can walk on two or four legs. Herbivorous and relatively docile.",
    "half-dragon": "Humanoid with draconic features including scales, horns, and possibly wings matching their dragon heritage color.",
    "harpy": "Creature with the upper body of a woman and the wings and lower body of a vulture. Matted feathers and cruel features.",
    "hawk": "Small bird of prey with keen eyesight, sharp talons, and swift flight.",
    "hell-hound": "Large dog-like creature with red-black fur, glowing red eyes, and flames licking from its mouth and paws.",
    "hellfire-engine": "Infernal war machine - a construct of black iron powered by hellfire, with weapons and grinding wheels.",
    "helmed-horror": "Animated suit of plate armor, more sophisticated than animated armor, capable of flight and spell resistance.",
    "hezrou": "Toad-like demon with slimy skin, massive clawed hands, and a stench of rot. Bloated, muscular body.",
    "hill-giant": "Dull-faced giant with ruddy skin, tangled hair, and a gut hanging over a crude loincloth. Carries a massive club.",
    "hippogriff": "Creature with an eagle's head, wings, and forelegs combined with a horse's body and hindquarters.",
    "hobgoblin": "Militaristic goblinoid with orange-red skin, flat nose, and disciplined bearing. Wears well-maintained armor.",
    "hobgoblin-devastator": "Hobgoblin war mage trained in destructive evocation. Wears robes over light armor.",
    "hobgoblin-iron-shadow": "Hobgoblin monk-assassin, blending shadow magic with martial arts. Moves in silence.",
    "homunculus": "Tiny winged humanoid created by alchemy, with leathery skin and bat-like wings.",
    "hook-horror": "Vulture-headed aberration with a hard exoskeleton and arms ending in massive hooks instead of hands.",
    "howler": "Fiendish predator with a lean, hunted body covered in quills. Its howl causes fear.",
    "hunter-shark": "Large aggressive shark, ten feet long, common predator of coastal waters.",
    "hyena": "Dog-like scavenger with spotted fur, powerful jaws, and a distinctive laughing call.",
    "horned-devil": "Tall devil with red skin, massive wings, a long tail, and large curving horns. Carries a barbed fork.",
    "hydra": "Multi-headed serpentine creature with a massive body and multiple long necks each ending in a fanged head.",
    
    // ===== I-K =====
    "ice-devil": "Insectoid devil with white carapace, mandibles, and a long tail ending in a stinger. Radiates supernatural cold.",
    // ===== I =====
    "ice-mephit": "Small elemental of ice and cold, with a body of jagged ice and a frosty breath.",
    "illusionist": "Wizard specializing in illusion magic, often with a theatrical flair and deceptive appearance.",
    "imp": "Tiny red devil with small horns, bat wings, and a scorpion-like tail. Mischievous and cunning expression.",
    "intellect-devourer": "Brain on four legs, walking on stumpy limbs, with a small tail. Glistening, pulsing brain matter exposed.",
    "invisible-stalker": "Vaguely humanoid shape made of swirling air, only visible by the dust and debris it disturbs.",
    "iron-golem": "Massive humanoid constructed of solid iron, with industrial features and incredible weight evident in every step.",
    
    // ===== J =====
    "jackal": "Small wild canine with tan fur, large ears, and a cunning nature. Scavenger of desert regions.",
    
    // ===== K =====
    "kenku": "Raven-headed humanoid with black feathers, a beak, and wing-like arms. Hunched posture and mimicking mannerisms.",
    "killer-whale": "Large ocean predator with distinctive black and white coloring. Intelligent pack hunter.",
    "knight": "Armored warrior of noble bearing, mounted or on foot, bound by codes of honor.",
    "kobold": "Small reptilian humanoid with scales ranging from rusty red to black, a long tail, and small horns. Timid but cunning.",
    "kobold-dragonshield": "Elite kobold warrior with better armor and weapons, often blessed by a dragon patron.",
    "kobold-inventor": "Kobold tinkerer with makeshift gadgets, traps, and contraptions. Creativity born of necessity.",
    "kobold-scale-sorcerer": "Kobold born with innate draconic magic, scales often colored to match their dragon bloodline.",
    "korred": "Small fey with stone-gray skin, wild hair that can animate, and a love of dancing in stone circles.",
    "kraken": "Titanic squid-like creature with a mass of tentacles, two huge eyes, and a beak capable of crushing ships.",
    "kraken-priest": "Humanoid cultist devoted to a kraken, granted divine magic by their tentacled master.",
    "kuo-toa": "Fish-headed humanoid with slimy gray skin, bulging eyes, and webbed appendages. Mad and devoted to strange gods.",
    "kuo-toa-archpriest": "Kuo-toa high priest with greater divine power, leading worship of their manifested gods.",
    "kuo-toa-whip": "Kuo-toa overseer wielding a pincer staff, enforcing the will of their priests.",
    
    // ===== L =====
    "lamia": "Upper body of a beautiful woman attached to the body of a lion. Seductive appearance hiding predatory nature.",
    "lemure": "Blob-like devil made of melted flesh, with vaguely humanoid features constantly shifting and reforming.",
    "leviathan": "Gargantuan primordial water elemental - a living tidal wave of immense power, shaped like a serpent of pure ocean.",
    "lich": "Skeletal spellcaster in ornate robes, with burning points of light in empty eye sockets and an aura of death magic.",
    "lion": "Large feline predator with tawny fur and, in males, a magnificent mane. Apex predator of the savanna.",
    "lizard": "Small reptile with scaly skin, a long tail, and cold blood. Common throughout warm climates.",
    "lizardfolk": "Reptilian humanoid with scales, a tail, and a snout filled with sharp teeth. Cold, calculating eyes.",
    "lizardfolk-shaman": "Lizardfolk priest communing with primal spirits, adorned with fetishes and ritual markings.",
    
    // ===== M =====
    "mage": "Robed spellcaster carrying a staff or wand, with arcane components and a scholarly appearance.",
    "magma-mephit": "Small elemental of molten rock, dripping lava and radiating heat.",
    "magmin": "Small humanoid made of molten rock, constantly glowing with internal fire and leaving scorch marks.",
    "manes": "The lowest form of demon - misshapen humanoid of pale flesh, mindless and driven only by hunger.",
    "martial-arts-adept": "Disciplined monk trained in unarmed combat, with a centered calm and honed reflexes.",
    "master-thief": "Elite rogue with decades of experience, able to bypass any lock or trap.",
    "mastiff": "Large domesticated dog bred for hunting and guarding. Loyal and powerful.",
    "maw-demon": "Bloated demon that is mostly a massive, fanged mouth with stubby legs. Insatiable hunger incarnate.",
    "meenlock": "Small fey of shadow and fear, with insectoid features and the ability to spread terror.",
    "mephit-dust": "Small elemental of powdered earth, dusty and irritating.",
    "mephit-ice": "Small elemental of frozen water, crystalline and cold.",
    "mephit-magma": "Small elemental of molten rock, dripping fire.",
    "mephit-mud": "Small elemental of wet earth, slimy and squelching.",
    "mephit-smoke": "Small elemental of ash and smoke, choking and obscuring.",
    "mephit-steam": "Small elemental of hot water vapor, scalding and hissing.",
    "mammoth": "Massive woolly elephant with long curved tusks and shaggy brown fur.",
    "manticore": "Lion-bodied creature with a human-like face, bat wings, and a tail covered in deadly spikes.",
    "marilith": "Six-armed female demon from the waist up, with a massive serpent body below. Wields six different weapons.",
    "medusa": "Woman with snakes instead of hair, scales on her skin, and eyes that turn victims to stone. Tragic beauty.",
    "merfolk": "Humanoid with a fish tail instead of legs, fins, and gills. Often beautiful with shimmering scales.",
    "merrow": "Monstrous aquatic humanoid with green scales, webbed hands, sharp claws, and a fish-like face.",
    "mimic": "Amorphous creature currently shaped like a treasure chest, with wood-textured skin and adhesive pseudopods.",
    "mind-flayer": "Octopus-headed humanoid with purple skin, four facial tentacles, and milky white eyes. Wears elegant robes.",
    "mind-flayer-arcanist": "Rare mind flayer that has developed arcane spellcasting in addition to psionics.",
    "mind-flayer-lich": "Illithilich - a mind flayer that has achieved undeath. Tentacles withered, eyes burning with dark power.",
    "mind-witness": "A beholder transformed by mind flayers - central eye replaced with tentacle mass, now a telepathic relay.",
    "minotaur": "Bull-headed humanoid with a massive muscular body, hooves, and large horns. Often carries a greataxe.",
    "minotaur-skeleton": "Animated skeleton of a bull-headed humanoid with massive bone structure, large curved horns on its skull, and hooved feet. Wields a greataxe with undead fury, eye sockets burning with necromantic light.",
    "morkoth": "Aberration resembling a humanoid fish with hypnotic eyes and tentacles, dwelling in maze-like lairs.",
    "mud-mephit": "Small elemental of wet earth, constantly squelching and dripping.",
    "mule": "Domesticated hybrid of horse and donkey. Stubborn but strong pack animal.",
    "mummy": "Undead wrapped in ancient bandages, with withered flesh visible beneath, and glowing eyes of hatred.",
    "myconid-sprout": "Young mushroom creature, small and cap-headed, communicating through spores.",
    "mummy-lord": "Royal mummy in ornate wrappings with gold and jewels, radiating an aura of ancient power and curses.",
    
    // ===== N-O =====
    "nalfeshnee": "Massive demon with the body of an ape, the head of a boar, and small feathered wings. Grotesquely fat.",
    "naga-bone": "Undead serpent with a humanoid skull for a head, animated by yuan-ti magic.",
    "naga-guardian": "Benevolent naga with golden-green scales and a humanoid face, protecting sacred places.",
    "naga-spirit": "Evil naga with purple-black scales, plotting from jungle temples.",
    "nagpa": "Vulture-headed undead creature cursed by the Raven Queen, wrapped in tattered robes.",
    "necromancer": "Wizard specializing in death magic, often pale and gaunt from traffic with dark forces.",
    "needle-blight": "Plant creature resembling a humanoid cactus, launching needle volleys at prey.",
    "neogi": "Small spider-like aberration with an eel-like neck and head. Slavers and tyrants.",
    "neogi-hatchling": "Young neogi, more spiderlike and feral than adults.",
    "neogi-master": "Old neogi grown fat and bloated, commanding lesser neogi through psychic domination.",
    "nightmare": "Horse made of shadow and flame, with a burning mane and tail, and hooves that leave fire in their wake.",
    "night-hag": "Hideous crone with blue-purple skin, deep-set eyes, and iron-like nails. Stench of decay.",
    "nightwalker": "Gargantuan shadow from the Negative Energy Plane - a vaguely humanoid silhouette of absolute darkness, thirty feet tall.",
    "noble": "Finely dressed humanoid of obvious wealth and breeding, with expensive jewelry and confident bearing.",
    "nothic": "Hunched creature with one massive eye, long claws, and rotting flesh. Once a wizard, now cursed.",
    "ochre-jelly": "Large blob of ochre-yellow slime that flows like thick pudding, dissolving organic matter on contact.",
    "oblex-adult": "Ooze that has consumed enough memories to form a central mass with projected simulacra.",
    "oblex-elder": "Massive oblex projecting multiple false humanoids, trailing sulfurous slime.",
    "oblex-spawn": "Young oblex, a small translucent ooze beginning to collect memories.",
    "octopus": "Eight-armed cephalopod with a soft body, camouflage ability, and surprising intelligence.",
    "ogre": "Hulking humanoid with yellowish skin, small eyes, and a stupid brutal expression. Nine feet of muscle and fat.",
    "ogre-zombie": "Undead hulking nine-foot humanoid with rotting yellowish-gray skin, clouded small eyes, and decaying flesh hanging from its massive frame. Shambles forward with tremendous strength but no intelligence.",
    "oinoloth": "Yugoloth of disease and plague, withered and skeletal, spreading pestilence.",
    "oni": "Blue-skinned ogre-like creature with horns, tusks, and wild hair. Can change shape and fly.",
    "orc": "Pig-faced humanoid with gray-green skin, tusks, and a muscular build. Aggressive and warlike bearing.",
    "orc-blade-of-ilneval": "Orc champion devoted to the war god, bearing blessed weapons and ritual scars.",
    "orc-claw-of-luthic": "Orc priest of the cave mother, wielding divine healing and protective magic.",
    "orc-hand-of-yurtrus": "Orc priest of the death god with hands painted white, spreading disease.",
    "orc-nurtured-one-of-yurtrus": "Orc blessed by the death god, transformed into a disease-ridden horror.",
    "orc-red-fang-of-shargaas": "Orc assassin of the night god, moving in darkness and silence.",
    "orog": "Elite orc with darker gray skin, more intelligent eyes, and superior equipment and bearing.",
    "owl": "Nocturnal bird of prey with large eyes, silent flight, and rotating head.",
    "otyugh": "Three-legged aberration with a massive mouth, two tentacles with spiked ends, and an eye on a stalk. Lives in filth.",
    "owlbear": "Bear-like creature with an owl's head, feathers mixed with fur, and a hooked beak.",
    
    // ===== P =====
    "panther": "Sleek black cat with powerful muscles, golden eyes, and silent movement. Jungle predator.",
    "pegasus": "Magnificent white horse with large feathered wings and a noble, intelligent bearing.",
    "phoenix": "Legendary bird of fire with brilliant red and gold plumage, wreathed in purifying flames. Reborn from ashes.",
    "pirate-captain": "Weathered sailor in sea-stained clothing, bearing multiple weapons and an air of dangerous authority.",
    "pixie": "Tiny winged fey with delicate features, gossamer wings, and mischievous nature. Glows faintly.",
    "poisonous-snake": "Small venomous serpent with distinctive markings warning of deadly venom.",
    "polar-bear": "Massive white-furred bear adapted to arctic conditions. Powerful swimmer and hunter.",
    "pony": "Small horse, sturdy and good-natured. Often ridden by smaller humanoids.",
    "phase-spider": "Giant spider that flickers in and out of visibility, with long legs and massive fangs dripping venom.",
    "pit-fiend": "Massive devil with red skin, bat wings, horns, and a body wreathed in flame. Pinnacle of devilkind.",
    "planetar": "Powerful angel with green skin, white wings, and a muscular build. Carries a greatsword of light.",
    "plesiosaurus": "Long-necked aquatic dinosaur with flippers and a small head filled with sharp teeth.",
    "poltergeist": "Invisible spirit that manifests only through the objects it throws and the chaos it causes.",
    "priest": "Robed religious figure carrying a holy symbol, with an aura of divine connection.",
    "pseudodragon": "Tiny dragon the size of a cat, with reddish-brown scales, wings, and a stinger-tipped tail. Cute and intelligent.",
    "pteranodon": "Flying reptile with a large head crest, long beak, and leathery wings.",
    "purple-worm": "Gargantuan burrowing worm with purple-gray hide, a circular mouth filled with grinding teeth, and a poison stinger tail.",
    "quaggoth": "White-furred apelike humanoid with claws and a bestial nature. Enslaved by drow or driven mad.",
    "quasit": "Tiny demon with green skin, small horns, and bat wings. Can change into a bat, centipede, or toad.",
    "quetzalcoatlus": "Enormous flying reptile with a wingspan of fifty feet and a long pointed beak.",
    "quickling": "Incredibly fast tiny fey, appearing as a blur of motion. Mean-spirited pranksters.",
    "quipper": "Small carnivorous fish with razor-sharp teeth. Dangerous in schools.",
    
    // ===== R =====
    "rat": "Small rodent common in urban areas. Carries disease and nibbles at everything.",
    "raven": "Black bird associated with omens and death. Intelligent and capable of mimicry.",
    "rakshasa": "Tiger-headed humanoid with hands that bend backward, wearing fine silks and an expression of cruel sophistication.",
    "remorhaz": "Massive arctic centipede with a blue carapace, internal fire glowing through segments, and massive mandibles.",
    "red-dragon-wyrmling": "Young red dragon with crimson scales, small horns, and already-proud bearing. Smoke wisps from nostrils.",
    "redcap": "Evil fey dwarf with iron boots, a wickedly curved sickle, and a cap dyed red with victims' blood.",
    "reef-shark": "Common shark of coastal waters, about six feet long. Opportunistic hunter.",
    "revenant": "Undead driven by vengeance, appearing as a corpse in the condition of death, with burning eyes of hatred.",
    "rhinoceros": "Large thick-skinned mammal with one or two horns. Charges threats with devastating force.",
    "riding-horse": "Domesticated horse bred for riding. Obedient and trained for travel.",
    "roc": "Gigantic bird of prey large enough to carry elephants, with brown feathers and a wingspan blocking out the sun.",
    "rug-of-smothering": "Animated rug that wraps around victims to suffocate them. Appears ordinary until triggered.",
    "roper": "Stalagmite-like creature with a single eye, toothy maw, and multiple grasping tendrils disguised as cave formations.",
    "rust-monster": "Insect-like creature with a propeller-shaped tail, feathery antennae, and a taste for metal.",
    
    // ===== S =====
    "saber-toothed-tiger": "Prehistoric cat with enormous curved fangs and powerful build. Apex predator of ancient times.",
    "sahuagin": "Shark-like humanoid with green scales, webbed hands and feet, and multiple rows of sharp teeth.",
    "sahuagin-baron": "Four-armed sahuagin nobility, larger and more fearsome than common sea devils.",
    "sahuagin-priestess": "Sahuagin cleric of the shark god, wielding divine magic of the deep.",
    "salamander": "Serpentine fire creature with the upper body of a humanoid, burning orange skin, and a tail of living flame.",
    "satyr": "Goat-legged humanoid with small horns, a mischievous face, and often carrying pan pipes.",
    "scarecrow": "Animated scarecrow with a burlap face, straw body, and an unnervingly intelligent gleam in button eyes.",
    "scout": "Light-footed tracker and spy in practical wilderness gear. Expert in survival.",
    "sea-horse": "Small aquatic creature with a curled tail and horse-like head.",
    "sea-lion": "Large aquatic mammal with flippers, whiskers, and a playful nature.",
    "sea-spawn": "Humanoid transformed by undersea powers into a hybrid horror with aquatic mutations.",
    "scorpion": "Giant arachnid with massive pincers, eight legs, and a curving stinger tail dripping venom.",
    "sea-hag": "Hideous aquatic crone with slimy green skin, seaweed-like hair, and cold dead eyes.",
    "shadar-kai-gloom-weaver": "Shadar-kai spellcaster drawing power from shadow, with pale skin and dark magic.",
    "shadar-kai-shadow-dancer": "Shadar-kai warrior who blends martial prowess with shadow teleportation.",
    "shadar-kai-soul-monger": "Shadar-kai that collects souls for the Raven Queen, radiating deathly energy.",
    "shadow": "Two-dimensional creature of pure darkness, vaguely humanoid, that drains the life from living things.",
    "shadow-dancer": "Warrior who has mastered shadow magic, teleporting through darkness.",
    "shadow-mastiff": "Large hound from the Shadowfell, black as midnight with red eyes.",
    "shadow-mastiff-alpha": "Pack leader of shadow mastiffs, larger and more dangerous.",
    "shambling-mound": "Animated heap of rotting vegetation, vaguely humanoid in shape, with vine-like tendrils.",
    "shoosuva": "Demonic hyena granted to favored gnolls by Yeenoghu, with a venomous tail stinger.",
    "shield-guardian": "Massive construct bound to an amulet, with runes carved into its stone body and a protective stance.",
    "shrieker": "Mushroom-like fungus creature that emits piercing screams when disturbed.",
    "silver-dragon-wyrmling": "Young silver dragon with gleaming scales, noble bearing, and gentle curiosity.",
    "skeleton": "Animated humanoid skeleton with empty eye sockets, wielding rusty weapons and wearing tattered armor.",
    "skull-lord": "Undead warlord with three skulls floating above its shoulders, each retaining partial consciousness.",
    "slithering-tracker": "Transparent ooze that can assume a fluid, almost liquid humanoid form to track prey.",
    "smoke-mephit": "Small elemental of smoke and ash, choking and difficult to see clearly.",
    "solar": "The mightiest angel, with bronze skin, white wings, and an aura of blinding divine radiance. Carries a legendary bow.",
    "sorrowsworn-angry": "Shadowfell creature embodying rage, a mass of clawed limbs and fury.",
    "sorrowsworn-hungry": "Shadowfell creature of starvation, gaunt beyond reason, with an endless gullet.",
    "sorrowsworn-lonely": "Shadowfell creature seeking connection, grasping and desperate.",
    "sorrowsworn-lost": "Shadowfell creature of confusion, leading others astray.",
    "sorrowsworn-wretched": "Smallest sorrowsworn, embodying misery and self-loathing.",
    "soul-monger": "Creature that harvests souls, either for a dark master or its own power.",
    "spawn-of-kyuss": "Undead corpse infested with green worms that writhe from its eye sockets and mouth.",
    "spectator": "Lesser beholder-kin with four eyestalks, bound to guard a location. More reasonable than true beholders.",
    "specter": "Ghostly humanoid consumed by rage, with features twisted by hatred and trailing wisps of darkness.",
    "sphinx": "Lion-bodied creature with wings and either a human face (androsphinx) or female human head (gynosphinx). Ancient and wise.",
    "sphinx-andro": "Male sphinx with a human male face, massive mane, and divine purpose. Poses deadly challenges.",
    "sphinx-gyno": "Female sphinx with a woman's face, keeper of secrets and riddles.",
    "spider": "Large arachnid with eight hairy legs, multiple eyes, and venomous fangs.",
    "spring-eladrin": "Fey elf of spring - vibrant green hair with flowers, youthful energy, and joy.",
    "spy": "Professional infiltrator and information gatherer, nondescript by design.",
    "spirit-naga": "Serpent with a humanoid face, scales of purple and black, and an evil intelligence in its eyes.",
    "sprite": "Tiny winged fey with features like a miniature elf, often carrying a tiny sword and bow.",
    "star-spawn-mangler": "Aberration with too many joints, moving in wrong ways, with bladed limbs.",
    "steam-mephit": "Small elemental of steam and water vapor, with a hissing voice and scalding presence.",
    "stegosaurus": "Armored dinosaur with rows of bony plates along its back and a spiked tail.",
    "stirge": "Mosquito-like creature the size of a cat, with leathery wings, four legs, and a long proboscis for blood-draining.",
    "stone-cursed": "Humanoid slowly turning to stone, partially petrified and in agony.",
    "stone-giant": "Gray-skinned giant with features like weathered rock, wearing stone jewelry and carrying boulder-sized stones.",
    "stone-golem": "Massive humanoid carved from stone, with simplified features and joints that grind when moving.",
    "storm-giant": "Enormous giant with purple-blue skin, wild hair crackling with lightning, and eyes like storm clouds.",
    "succubus": "Fiendish beauty with horns, bat wings, and a tail. Supernaturally attractive with a predatory gleam.",
    "succubus-incubus": "Shapeshifting fiend that can appear male or female, draining life through intimate contact.",
    "summer-eladrin": "Fey elf of summer - golden skin, fiery temperament, radiating heat and passion.",
    "swarm-of-beetles": "Mass of crawling beetles moving with collective purpose.",
    "swarm-of-centipedes": "Tide of venomous centipedes writhing over each other.",
    "swarm-of-cranium-rats": "Swarm of rats with exposed brains that gains intelligence as it grows.",
    "swarm-of-rot-grubs": "Mass of pale larvae that burrow into flesh.",
    "swarm-of-spiders": "Carpet of spiders large and small, crawling over everything.",
    "swarm-of-wasps": "Angry cloud of stinging wasps attacking as one.",
    "swashbuckler": "Dashing duelist with a rapier, cape, and theatrical flair.",
    "sword-wraith-warrior": "Ghostly soldier still fighting an eternal battle, wielding spectral weapons.",
    
    // ===== T =====
    "tarrasque": "The most feared monster in existence - a towering beast with a spiked carapace, massive jaws, horns, and a tail like a siege weapon.",
    "thri-kreen": "Insectoid humanoid with a mantis-like head, four arms, and a chitinous exoskeleton. Carries multiple weapons.",
    "thorny": "Plant creature covered in sharp thorns, vaguely humanoid, created by blights.",
    "thug": "Muscle for hire with a scarred face, crude weapons, and a menacing demeanor.",
    "tiger": "Massive orange and black striped feline, powerful and graceful with piercing predator eyes.",
    "tlincalli": "Scorpion-folk with a humanoid torso on a scorpion body. Four arms, tail stinger, desert hunters.",
    "transmuter": "Wizard specializing in transformation magic, often with shifting features.",
    "trapper": "Living floor creature that lies flat and wraps around prey. Looks like stone until activated.",
    "tribal-warrior": "Warrior of a primitive culture, painted and fierce, fighting with traditional weapons.",
    "troglodyte": "Reptilian humanoid with gray scaly skin and a horrible stench. Cave dweller.",
    "twig-blight": "Small plant creature resembling a bundle of dead branches, scratching and clawing.",
    "treant": "Living tree with a humanoid face in the bark, branch-like arms, and roots for legs. Ancient and wise.",
    "triceratops": "Large dinosaur with three horns, a bony frill, and a massive body built for charging.",
    "troll": "Tall, lanky humanoid with green rubbery skin, long arms with claws, and a face with a long nose. Constantly regenerating.",
    "tyrannosaurus-rex": "Massive bipedal dinosaur with tiny arms, enormous jaws filled with teeth, and a thunderous presence.",
    
    // ===== U-V =====
    "umber-hulk": "Massive insectoid with iron-hard mandibles, confusion-inducing eyes, and powerful digging claws.",
    "unicorn": "Magnificent white horse with a spiraling horn of pure light, representing ultimate goodness and purity.",
    "vampire": "Pale-skinned undead with sharp fangs, red eyes, and an aura of dark charisma. Dressed elegantly.",
    "vampire-spawn": "Lesser vampire with pale skin, fangs, and feral hunger. Less refined than a true vampire.",
    "vampire-spellcaster": "Vampire who retained arcane knowledge in undeath, combining blood magic with learned spells.",
    "vargouille": "Flying fiend head with bat wings, long tongue, and a kiss that transforms victims into more of its kind.",
    "vegepygmy-chief": "Leader of vegepygmy tribe, larger and more cunning, with elaborate thorny growths.",
    "velociraptor": "Small feathered dinosaur with a curved killing claw, pack hunter of deadly cunning.",
    "vine-blight": "Plant creature of tangled vines, strangling and grasping, mobile but slow.",
    "vulture": "Bald-headed scavenger bird, patient and waiting for death.",
    "veteran": "Scarred warrior in well-worn but maintained armor, with the bearing of someone who has seen many battles.",
    "violet-fungus": "Mushroom creature with four purple tentacles that rot flesh on contact.",
    "vrock": "Vulture-headed demon with wings, a hunched body covered in feathers, and taloned feet.",
    
    // ===== W =====
    "warhorse": "Large, muscular horse bred for battle, with armor barding and a fierce temperament.",
    "water-elemental": "Living wave in a rough humanoid silhouette. Translucent flowing water constantly churning and reshaping. No solid features, just currents and eddies suggesting a form. Blue-green and clear like ocean water. A walking tidal surge, not a creature with a face.",
    "werebear": "Humanoid that transforms into a massive bear, or a hybrid with ursine features. Usually good-natured.",
    "wereboar": "Humanoid that transforms into a boar, or a hybrid with tusks and coarse hair. Ill-tempered.",
    "wererat": "Humanoid that transforms into a giant rat, or a hybrid with rat features. Sneaky and disease-carrying.",
    "weretiger": "Humanoid that transforms into a tiger, or a hybrid with feline grace and stripes. Proud and territorial.",
    "werewolf": "Humanoid that transforms into a wolf, or a hybrid with lupine features. Savage and pack-oriented.",
    "war-priest": "Militant cleric in heavy armor, wielding divine magic for warfare.",
    "warhorse-skeleton": "Skeletal horse animated for undead cavalry, tireless and fearless.",
    "warlock-of-the-fiend": "Spellcaster who has bargained with a devil or demon for arcane power.",
    "warlord": "Brilliant military commander who leads armies through tactical genius.",
    "water-weird": "Serpentine elemental of living water, often bound to protect pools or fountains.",
    "weasel": "Small, long-bodied carnivore with quick reflexes and bloodthirst.",
    "white-dragon-wyrmling": "Young white dragon with ice-white scales and feral hunting instincts.",
    "wight": "Undead warrior with gray skin, burning eyes, and ancient armor. Drains life force with its touch.",
    "will-o-wisp": "Floating ball of pale light that lures travelers to their doom in swamps and marshes.",
    "winter-eladrin": "Fey elf of winter - pale blue skin, white hair like frost, cold demeanor and icy magic.",
    "winter-wolf": "Massive white wolf with ice-blue eyes and breath that freezes solid.",
    "wolf": "Gray-furred canine predator with yellow eyes and sharp teeth, hunting in packs.",
    "worg": "Evil wolf of unusual size and intelligence, often ridden by goblins.",
    "wraith": "Incorporeal undead of pure darkness, with a vaguely humanoid shape and hatred for all living things.",
    "wyvern": "Dragon-like creature with wings instead of forelegs, two hind legs, and a venomous stinger tail.",
    "xvart": "Small blue-skinned humanoid related to goblins, worshipping the demon lord Raxivort.",
    
    // ===== X-Z =====
    "xorn": "Three-armed aberration with a body like a boulder, three eyes, and a large mouth on top of its head. Eats gems and metal.",
    "yeth-hound": "Headless hound from the Shadowfell that terrifies victims with its baying.",
    "yeti": "Large ape-like creature covered in white fur, with blue eyes and claws of ice. Adapted to arctic environments.",
    "young-black-dragon": "Sleek black dragon with emerging horns and acidic breath, smaller but already deadly.",
    "young-brass-dragon": "Friendly young dragon with brass-colored scales, eager to converse.",
    "young-bronze-dragon": "Noble young dragon with bronze scales and a sense of justice.",
    "young-copper-dragon": "Mischievous young dragon with copper scales and a love of pranks.",
    "young-gold-dragon": "Majestic young dragon with golden scales and a protective nature.",
    "young-remorhaz": "Younger arctic centipede, still dangerous with internal fire and crushing mandibles.",
    "young-silver-dragon": "Gentle young dragon with silver scales and a desire to help others.",
    "young-blue-dragon": "Blue-scaled dragon with a growing horn, crackling with electrical energy.",
    "young-green-dragon": "Forest-green dragon with developing horns and toxic breath, cunning despite its youth.",
    "young-red-dragon": "Crimson dragon with swept-back horns, already fearsome with fire breath.",
    "young-white-dragon": "Ice-white dragon with spiny ridges, feral and adapted for cold.",
    "yuan-ti-abomination": "Serpentine creature with a snake's body from the waist down and snake head. Most monstrous yuan-ti.",
    "yuan-ti-broodguard": "Humanoid transformed into a yuan-ti servant through ritual, with scales and fangs.",
    "yuan-ti-malison": "Humanoid with significant snake features like a snake head or snake arms.",
    "yuan-ti-mind-whisperer": "Yuan-ti psionic who plants suggestions and controls minds.",
    "yuan-ti-nightmare-speaker": "Yuan-ti warlock drawing power from Dendar the Night Serpent.",
    "yuan-ti-pit-master": "Yuan-ti leader who commands a temple or settlement, wielding considerable power.",
    "yuan-ti-pureblood": "Nearly human yuan-ti with only subtle snake features like slit pupils or patches of scales.",
    "zaratan": "Colossal turtle elemental, an island-sized creature of living earth.",
    "zombie": "Shambling undead with rotting flesh, vacant eyes, and jerky movements. Mindless hunger for the living.",
    "zombie-tyrannosaurus": "Undead massive bipedal dinosaur with rotting scales, exposed bones, and a huge skull filled with decaying teeth. Tiny arms hang uselessly as the reanimated predator lurches forward with terrifying power despite chunks of flesh missing from its body.",

    // ===== LEGENDARY CREATURES - EXTRA DETAILED =====
    
    // Tiamat - Queen of Evil Dragons
    "tiamat": "The five-headed dragon goddess of evil. A colossal dragon with five heads - one white with icy blue eyes, one black dripping acid, one green with venomous fangs, one blue crackling with lightning, and one red wreathed in flames. Each head on a long serpentine neck. Massive body covered in multicolored scales, enormous bat-like wings that block out the sky, and a presence of overwhelming divine malevolence. Crown of horns adorns each head. The ultimate dragon deity.",
    
    // Strahd von Zarovich - The First Vampire
    "strahd-von-zarovich": "Count Strahd von Zarovich, the first and most powerful vampire. A tall, gaunt nobleman with pale alabaster skin, slicked-back black hair with a prominent widow's peak, and burning red eyes that reflect centuries of torment and evil. Sharp aristocratic features with high cheekbones, a aquiline nose, and thin cruel lips hiding elongated fangs. Wears elegant black and red noble attire with a high collar and flowing cape lined with crimson silk. A signet ring bearing the crest of Barovia. His presence exudes both tragic romance and absolute terror. Master of Castle Ravenloft.",
    
    // Acererak - The Devourer
    "acererak": "Acererak the Devourer, the legendary archlich. A floating skull wreathed in sickly green necromantic flames, with gems embedded in eye sockets and teeth - a ruby, an emerald, and a sapphire gleam with trapped souls. When manifesting fully, a skeletal figure in tattered black robes covered in arcane symbols, wielding a staff topped with a skull. Phylactery hidden, radiating immense magical power. Creator of the Tomb of Horrors, collector of souls.",
    
    // Vecna - The Whispered One  
    "vecna": "Vecna the Whispered One, god of secrets and undeath. A lich of terrible power with a skeletal form wrapped in rotting robes and arcane vestments. Missing his left hand and left eye - the Hand and Eye of Vecna are separate artifacts. Remaining eye socket burns with green fire. Crowned with a circlet of black iron. Emanates an aura of forbidden knowledge and dread secrets. One of the most powerful beings to ever achieve lichdom.",
    
    // Demogorgon - Prince of Demons
    "demogorgon": "Demogorgon, Prince of Demons and the Sibilant Beast. An 18-foot tall abomination with two baboon heads on serpentine necks, each head having its own personality - Aameul and Hethradiah. Blue-green reptilian body covered in scales and matted fur, with a forked tail and tentacles instead of arms that drain life. Walks on two legs with webbed, clawed feet. The two heads constantly argue yet work in terrible unison. Radiates madness and primal chaos.",
    
    // Orcus - Prince of Undeath
    "orcus": "Orcus, Demon Prince of Undeath. A bloated, corpulent demon standing 15 feet tall with gray, decaying flesh. Goat-like head with curling ram horns, red glowing eyes, and a mouth filled with fangs. Massive bat wings too small for his body yet still functional. Goat legs ending in hooves. Wields the Wand of Orcus - a skull-topped rod of obsidian that can slay with a touch. Surrounded by an aura of death and decay. Lord of the undead.",
    
    // Yeenoghu - Prince of Gnolls
    "yeenoghu": "Yeenoghu, the Beast of Butchery and demon lord of gnolls. A 14-foot tall hyena-headed demon with mangy yellow fur, a spine ridged with bony protrusions, and a perpetual bloody froth at the mouth. Lean, muscular body built for savage violence. Wields a triple-headed flail that howls when swung. Eyes burn with insatiable hunger. Surrounded by ghostly hyenas. The embodiment of senseless slaughter and carnage.",
    
    // Juiblex - The Faceless Lord
    "juiblex": "Juiblex, the Faceless Lord, demon prince of oozes and slimes. A towering mass of living slime and corruption, constantly shifting between shapes. Acidic green and black with countless eyes and mouths forming and dissolving within its mass. Pseudopods emerge to grab prey. Smells of rot and chemical decay. The most alien of demon lords, with no comprehensible goals beyond consumption.",
    
    // Zuggtmoy - Lady of Fungi
    "zuggtmoy": "Zuggtmoy, the Lady of Fungi and demon queen of decay. A towering fungal horror with a feminine humanoid form made entirely of mushrooms, molds, and rot. Her 'head' is a massive toadstool cap, with a 'face' of bioluminescent spots. Tendrils of mycelium trail from her form. Releases clouds of spores. Weirdly beautiful in her alien way, with colors of purple, blue, and sickly green. Surrounded by smaller fungal servants.",
    
    // Archdevils
    "zariel": "Zariel, Archduke of Avernus and fallen angel. A powerful female figure with bronze skin, once-beautiful features now scarred by eons of war. Burning wings of fire and radiant energy. Wears battered but magnificent plate armor. One eye replaced with a glowing ember. Wields a flaming sword. Her halo is cracked and burning. Tragic and terrifying - an angel who fell through her own pride and bloodlust.",
    
    "bael": "Bael, Duke of Hell and general of the infernal armies. A humanoid devil with the head of a toad, body of a spider, and a second human head that speaks honeyed lies. Wears elaborate military regalia. Commands legions with tactical brilliance. Master of invisibility and deception.",
    
    "geryon": "Geryon, the Wild Beast and former archdevil of Stygia. A massive three-bodied giant fused at the waist, with serpentine tails. Three torsos, three heads with curved horns, and three sets of arms. Covered in ice and wielding a massive horn that summons minotaurs. Bestial and savage, fallen from grace.",
    
    // Beholders
    "death-tyrant": "An undead beholder - a decayed sphere with rotting flesh, damaged eyestalks leaking necrotic energy, and a central eye that glows with deathly power instead of antimagic. Bones visible through holes in decomposing skin. Even more paranoid and hateful than living beholders.",
    
    "beholder-zombie": "Undead floating spherical body covered in rotting leathery skin, with one massive clouded central eye and ten smaller eyes on limp, decaying stalks. Wide mouth filled with yellowed teeth. The once-proud aberration now shambles through the air with jerking, unnatural motions, controlled by dark magic.",
    
    // More Fiends
    "moloch": "Moloch, former archdevil cast down from power. A massive humanoid devil with the head of a bull, covered in burning coals and ash. Horns of iron, hooves that scorch the ground. Once proud, now bitter and seeking to regain lost glory. Wields weapons of black iron heated to glowing.",
    
    "hutijin": "Hutijin, pit fiend general and Duke of Cania. A massive pit fiend even larger than most, with frost-covered wings and ice-blue flames. Serves Mephistopheles with absolute loyalty. Tactical genius encased in diabolic might.",
    
    "titivilus": "Titivilus, the Scribe of Hell. A handsome male devil with small horns, well-groomed appearance, and an ever-present quill and scroll. Silver-tongued and manipulative. Corrupts through bureaucracy and fine print.",
    
    // Mind Flayers
    "ulitharid": "A noble mind flayer, larger than common illithids with six facial tentacles instead of four. Purple skin with an elongated cranium. Wears elaborate robes. Commands other mind flayers through powerful psionic might. Future elder brain.",
    
    "elder-brain": "The elder brain - a massive brain floating in a pool of brine, ten feet across and covered in pulsing veins. Tentacle-like ganglia extend into the pool. The collective consciousness of a mind flayer colony, ancient and scheming. Telepathic presence fills the area.",
    
    "alhoon": "A mind flayer lich - an illithid that has achieved undeath through forbidden arcane magic rather than psionics. Purple skin now grey and dessicated, tentacles withered. Glowing eyes in a gaunt skull-like face. Outcast from illithid society.",
    
    // Giants Extended  
    "fire-giant-dreadnought": "Elite fire giant encased in heavy black iron armor that glows with internal heat. Massive shield and axe. Hotter and more armored than standard fire giants, bred for war.",
    
    "frost-giant-everlasting-one": "A frost giant blessed by Vaprak with regeneration. Covered in ritual scars that heal before your eyes. Wilder, more savage than other frost giants. Trophy bones woven into hair.",
    
    "storm-giant-quintessent": "A storm giant who has begun transforming into pure elemental storm. Semi-transparent, with lightning crackling through a body that shifts between solid and cloud. Eyes are miniature storms.",
    
    "mouth-of-grolantor": "A degenerate hill giant, bloated even beyond normal, with a distended jaw capable of swallowing creatures whole. Driven by insatiable hunger, covered in filth and old food.",
    
    // Yugoloths
    "arcanaloth": "A yugoloth resembling a robed humanoid jackal, with elegant vestments and an aura of dark intellect. Long fingers end in black claws that write in infernal script. Keeper of contracts and dark bargains.",
    
    "ultroloth": "The masterminds of yugoloth kind - faceless humanoids with smooth gray skin, large oval eyes of pure white, and an aura of cold calculation. Wears fine dark robes. Telepathic and utterly ruthless.",
    
    "mezzoloth": "Insectoid yugoloth foot soldier with a chitinous exoskeleton, compound eyes, and wielding a trident. Clicks and buzzes when communicating. Expendable and numerous.",
    
    "nycaloth": "Winged yugoloth with green skin, massive bat wings, and clawed hands. Horned head with bestial features. Elite soldiers and enforcers of yugoloth contracts.",
    
    // Slaadi
    "red-slaad": "Large frog-like aberration with red skin, sharp claws, and a chaotic, unpredictable demeanor. Implants eggs in victims with its claws.",
    
    "blue-slaad": "Larger than red slaadi, with blue skin and massive bone claws. More intelligent and vicious. Transforms victims into red slaadi.",
    
    "green-slaad": "Cunning slaad with green skin and shapeshifting abilities. Can assume humanoid forms. More calculating than its lesser kin.",
    
    "gray-slaad": "Gaunt slaad with gray skin and immense psionic power. Reclusive and dangerous. Often served by lesser slaadi.",
    
    "death-slaad": "The most powerful slaad, with jet black skin and the ability to assume any form. Masters of magic and manipulation. Schemes span centuries.",
    
    // Modrons
    "monodrone": "Spherical construct with a single eye, two arms, two legs, and small wings. The simplest modron, following basic orders without question.",
    
    "duodrone": "Rectangular modron with two eyes, two arms, and two legs. Slightly more capable than monodrones, can relay orders.",
    
    "tridrone": "Triangular modron with three eyes, three arms, and three legs. Mid-level workers capable of simple problem solving.",
    
    "quadrone": "Cube-shaped modron with four eyes, four arms, and four wings. Capable fighters and administrators of lower modrons.",
    
    "pentadrone": "Flat, star-shaped modron with five eyes and five arms. Police and enforcers of Mechanus. Can communicate complex ideas.",
    
    // Star Spawn
    "star-spawn-hulk": "Massive aberration from the Far Realm, with gray rubbery skin, multiple limbs, and a body covered in unblinking eyes. Psychic static surrounds it.",
    
    "star-spawn-seer": "Robed aberration with an elongated head and three eyes arranged vertically. Speaks prophecy in alien tongues. Reality warps around it.",
    
    "star-spawn-larva-mage": "A spellcaster transformed by contact with the Far Realm - humanoid but with writhing tentacles emerging from eye sockets and mouth. Casts warped magic.",
    
    // More Undead
    "demilich": "A lich reduced to just its skull and a few gems containing its essence. Floats silently, covered in dust. The gems in eye sockets and teeth glow with trapped souls. Despite small size, incredibly dangerous.",
    
    "sword-wraith-commander": "Ghostly warrior in ancient armor, wielding a spectral greatsword. Commands lesser sword wraiths. Eyes burn with unfinished battle lust.",
    
    "boneclaw": "Undead horror with an emaciated humanoid body and arms that end in ten-foot long bone claws. Bound to a living master. Can teleport through shadows.",
    
    "bodak": "Undead created by exposure to absolute evil. Gaunt humanoid with gray skin, empty eye sockets that cause death, and a constant expression of despair.",
    
    "allip": "Incorporeal undead driven mad by forbidden knowledge. A ghostly figure clutching its head, surrounded by whispers of secrets. Maddening babble.",
    
    // Constructs Extended
    "marut": "Inevitable construct of divine law - a massive golden humanoid inscribed with contract runes. Face is a mask of gold. Inexorable enforcer of cosmic agreements.",
    
    "retriever": "Spider-like construct built by demons, with a body of black metal and four eye-beams. Created to hunt and retrieve targets across planes.",
    
    "cadaver-collector": "Massive war construct that wades through battlefields collecting corpses. Humanoid torso atop spider legs, with impaled bodies decorating its frame.",
    
    "steel-predator": "Modron-built hunter construct resembling a metal panther with bladed limbs. Tracks targets across planes with relentless precision.",
    
    // Aberrations Extended
    "neothelid": "Gargantuan worm-like aberration, the result of a mind flayer colony without an elder brain. Blind, covered in slime, with a massive tentacle-ringed maw. Radiates psionic terror.",
    
    "star-spawn-grue": "Small aberration with too many limbs and mouths. Exists in psychic static, hard to perceive directly. Feeds on fear and confusion.",
    
    "mindwitness": "A beholder transformed by mind flayers - its central eye replaced with a mass of tentacles, now serving as a living telepathic hub.",
    
    "sibriex": "Floating mass of flesh, eyes, and chains, dripping disease. Demon lord of mutation and corruption. Can reshape flesh with a thought.",
    
    // Named NPCs Extended
    "iymrith": "Iymrith the Doom of the Desert, an ancient blue dragon who has infiltrated giant society. In dragon form - massive blue scales, enormous horn crackling with lightning, eyes gleaming with cunning and contempt for lesser beings.",
    
    // Lycanthropes Extended
    "werewolf-lord": "Alpha werewolf, larger than others in hybrid form. Silver-streaked fur, intelligent yellow eyes, commanding presence. Scars from many battles for dominance.",
    
    // Hags
    "bheur-hag": "Winter hag with blue-white skin, icicles for hair, and eyes like frozen pools. Wrapped in tattered furs. Rides a giant snowflake. Radiates supernatural cold.",
    
    "annis-hag": "Massive hag standing eight feet tall with iron-hard blue-black skin, claws that can rend metal, and a face of pure malevolence. The strongest of hags physically.",
    
    // ===== MORE DRAGONS =====
    "ancient-brass-dragon": "Titanic brass dragon with scales burnished by millennia, massive swept-back horns, and eyes twinkling with ancient mischief. Friendly despite overwhelming power.",
    "ancient-bronze-dragon": "Colossal bronze dragon with scales that shimmer like the sea, regal bearing, and webbed appendages. A champion of justice with the wisdom of ages.",
    "ancient-copper-dragon": "Enormous copper dragon with reddish scales turned verdigris with age, a wry expression, and an aura of playful danger. A prankster with world-ending power.",
    "ancient-gold-dragon": "The most magnificent of dragons - a gargantuan golden serpent with twin horns, whisker tendrils, and an aura of divine wisdom. Radiates benevolent power.",
    "ancient-silver-dragon": "Massive silver dragon with scales like mirrors, a noble countenance, and a protective demeanor. Often found in humanoid form among those it guards.",
    "ancient-green-dragon": "Titanic forest-green dragon with a crest of hornlets, sinuous body, and eyes gleaming with centuries of schemes. Master manipulator.",
    "ancient-white-dragon": "Colossal white dragon with spiny ridges, bestial cunning, and an aura of supernatural cold. The most feral of ancient dragons.",
    "dragon-wyrmling-black": "Small black dragon, cat-sized, with glossy scales and oversized horns. Already cruel despite youth.",
    "dragon-wyrmling-red": "Small red dragon with crimson scales, smoking nostrils, and a proud bearing even at this young age.",
    "dragon-wyrmling-gold": "Small golden dragon wyrmling with shimmering scales and wise eyes beyond its age. Curious and noble.",
    
    // ===== ELEMENTAL MYRMIDONS =====
    "air-elemental-myrmidon": "Suit of armor animated by bound air elemental energy, with wind swirling through joints and visor. Wields a flail of solidified wind.",
    "earth-elemental-myrmidon": "Heavy stone armor with an earth elemental bound within. Cracks reveal glowing earth. Carries a massive maul.",
    "fire-elemental-myrmidon": "Plate armor wreathed in flames with a fire elemental trapped inside. Heat radiates from every joint. Wields a flaming sword.",
    "water-elemental-myrmidon": "Armor filled with churning water and a bound water elemental. Water seeps from joints. Fights with a trident.",
    
    // ===== GENIES =====
    "dao": "Earth genie with skin of polite stone, muscular build, and jewelry of precious gems. Lower body dissolves into swirling earth and sand. Arrogant and greedy.",
    "djinni": "Air genie with blue skin, regal bearing, and lower body trailing into mist and cloud. Wears silks and gold. Proud but often honorable.",
    "efreeti": "Fire genie with crimson skin, flames for hair, and a body of living fire below the waist. Cruel and arrogant, dripping with brass jewelry.",
    "marid": "Water genie with blue-green skin, aquatic features, and a lower body of churning water. The most powerful and capricious of genies.",
    
    // ===== BEASTKIN & THERIANTHROPES =====
    "werebear": "In hybrid form - massive humanoid with bear features, brown fur, and powerful claws. Usually good-natured despite fearsome appearance.",
    "wereboar": "In hybrid form - humanoid with a boar's head, tusks, and coarse hair. Ill-tempered and aggressive.",
    "wererat": "In hybrid form - humanoid with rat features, a pointed snout, and a long tail. Sneaky and disease-carrying.",
    "weretiger": "In hybrid form - humanoid with tiger features, orange and black striped fur, and feline grace. Proud and territorial.",
    "jackalwere": "Jackal that can assume human form - in true form, a large jackal with intelligent eyes. Serves lamias.",
    
    // ===== NAGA =====
    "guardian-naga": "Serpent with an iridescent humanoid face, wise and protective. Golden and green scales. Serves good deities.",
    "spirit-naga": "Evil serpent with a humanoid face twisted by malice. Dark purple scales. Schemes from jungle temples.",
    "bone-naga": "Undead serpentine skeleton - a long coiling snake skeleton with a humanoid-like skull, fanged jaws, and green necromantic fire burning in empty eye sockets. Created by yuan-ti dark magic.",
    
    // ===== YUAN-TI =====
    "yuan-ti-pureblood": "Nearly human yuan-ti with only subtle snake features - slit pupils, patches of scales, forked tongue. Infiltrators.",
    "yuan-ti-malison": "Yuan-ti with significant snake features - perhaps a snake head on human body, or snake arms. Type varies.",
    "yuan-ti-abomination": "Most monstrous yuan-ti - snake body from the waist down, humanoid torso, and a serpent head. Priests and leaders.",
    "yuan-ti-anathema": "Massive yuan-ti abomination of divine power - six snake heads on a coiled serpent body. Avatar of Merrshaulk.",
    
    // ===== DROW =====
    "drow-elite-warrior": "Dark elf in ornate black armor with house insignia. White hair, red eyes, and superior demeanor. Exceptional blade skills.",
    "drow-mage": "Drow wizard in elegant robes, carrying a staff topped with a spider motif. Manipulates shadow and poison.",
    "drow-priestess-of-lolth": "Drow cleric in spider-themed vestments, carrying a snake-headed whip. Fanatic devotee of the Spider Queen.",
    "drider": "Dark elf from waist up, giant spider from waist down. Usually female, cursed by Lolth. White hair, multiple spider eyes.",
    "darkling-elder": "Taller darkling with more defined features and greater magical power. Still wreathed in shadow.",
    "darklings": "Small shadow fey with pitch-black skin that absorbs light. Burns brightly when killed.",
    "death-dog": "Two-headed mastiff with black fur, each head capable of independent thought. Spreads disease.",
    "death-kiss": "Beholder-kin with blood-draining tentacles instead of eyestalks, ending in lamprey-like mouths. No central eye beam.",
    "deathlock": "Undead warlock - skeletal figure in tattered robes, still bound to its patron in undeath. Glowing eyes.",
    "deathlock-mastermind": "Powerful deathlock with greater magical ability and intelligence. Commands lesser undead.",
    "deep-gnome": "Svirfneblin - small gnome with gray skin, bald head, and large dark eyes adapted for underground life.",
    "deep-gnome-svirfneblin": "Svirfneblin deep gnome with stone-gray skin, bald pate, and expert knowledge of the Underdark.",
    "deep-scion": "Hybrid creature - humanoid on the surface but with hidden aquatic monstrous features. Infiltrators for undersea powers.",
    "deer": "Graceful hoofed mammal with slender legs and, in males, branching antlers.",
    "deinonychus": "Agile raptor dinosaur with a large curved claw on each foot, feathered body, and pack hunting instincts.",
    "devourer": "Massive undead with a ribcage that imprisons souls, feeding on trapped spirits. Skeletal and towering.",
    "diviner": "Wizard specializing in seeing the future, often with unfocused eyes that see beyond the present.",
    "draco-lich": "A dragon that has undergone the transformation to lichdom. Skeletal dragon with glowing eye sockets and necromantic power.",
    "draegloth": "Half-demon drow - massive creature with four arms, demonic features, and white mane. Birthed by drow priestesses.",
    "draft-horse": "Large, muscular horse bred for heavy labor. Calm temperament and massive hooves.",
    "druid": "Nature priest in simple garb, often with a wooden staff and wild, leaf-tangled hair.",
    "duergar-despot": "Duergar tyrant enlarged to giant size by psionics, clad in spiked armor and radiating mental power.",
    "duergar-hammerer": "Duergar in a mechanical construct frame, wielding massive pneumatic hammers.",
    "duergar-kavalrachni": "Duergar cavalry riding giant spiders, wielding lances and mounted combat weapons.",
    "duergar-screamer": "Duergar operating a war machine that emits devastating sonic attacks.",
    "duergar-soulblade": "Duergar assassin wielding a blade of pure psychic energy. Stealthy and lethal.",
    "duergar-stone-guard": "Elite duergar warrior in heavy armor, trained to hold defensive positions.",
    "duergar-warlord": "Duergar military commander in ornate armor, bearing insignia of rank and authority.",
    "duergar-xarrorn": "Duergar flame-keeper wielding fire-based weapons and pyrotechnic devices.",
    "dust-devil": "Small air elemental mixed with earth, appearing as a whirling column of dust and debris.",
    "dust-mephit": "Small elemental creature of powdered earth, with a dusty appearance and irritating presence.",
    
    // ===== GOBLINOIDS =====
    "goblin-boss": "Larger goblin in better equipment, usually a stolen crown or trophy. Commands through cruelty and cunning.",
    "hobgoblin-captain": "Hobgoblin officer in polished armor with house insignia. Disciplined and tactically minded.",
    "hobgoblin-warlord": "Hobgoblin general in elaborate armor, scarred from many campaigns. Commands respect through proven victory.",
    "bugbear-chief": "Largest bugbear with the most elaborate trophies, leading through intimidation and violence.",
    "nilbog": "Goblin possessed by a trickster spirit, with manic behavior and reality-warping powers. Others treat it as blessed.",
    
    // ===== ORCS =====
    "orc-war-chief": "Massive orc in heavy armor decorated with trophies, wielding a greataxe. Leads through strength.",
    "orc-eye-of-gruumsh": "Orc shaman with one eye ritually removed, devoted to Gruumsh. Covered in ritual scars and war paint.",
    "orog": "Elite orc with gray skin, more intelligent bearing, and superior equipment. Bred for war leadership.",
    "tanarukk": "Orc-demon hybrid with red skin, horns, and claws. Fiendish rage in orc form.",
    
    // ===== GNOLLS =====
    "gnoll-pack-lord": "Larger gnoll with better equipment and more kills to its name. Alpha of a warband.",
    "gnoll-fang-of-yeenoghu": "Gnoll blessed by their demon lord, with a maddened gleam and ability to create more gnolls from kills.",
    "flind": "Gnoll champion wielding a magical three-headed flail. Larger and more cunning than other gnolls.",
    
    // ===== GIANTS EXTENDED =====
    "cloud-giant-smiling-one": "Rogue cloud giant who has embraced trickery, with an unsettling permanent smile and chaotic magic.",
    "stone-giant-dreamwalker": "Stone giant lost in waking dreams, surrounded by floating stones and glimpses of other realities.",
    
    // ===== DEMONS EXTENDED =====
    "shadow-demon": "Incorporeal demon of pure darkness, vaguely humanoid, with claws that drain warmth and light.",
    "barlgura": "Ape-like demon with orange fur, massive fangs, and incredible strength. Leaps into combat with savage fury.",
    "chasme": "Fly-headed demon with insectoid features, constantly droning. Tormentor of the Abyss.",
    "maurezhi": "Ghoul-like demon that consumes the dead to assume their memories and appearance.",
    "nabassu": "Gargoyle-like demon with gray skin and death-drinking gaze. Consumes souls.",
    "rutterkin": "Deformed, misshapen demon covered in boils and sores. The lowest of demonkind.",
    "bulezau": "Demon with a ram's head and bloated, diseased body. Spreads plague and pestilence.",
    "dybbuk": "Possessing demon that animates corpses, making them speak and move unnaturally.",
    "armanite": "Centaur-like demon with a horse's body, humanoid torso, and a head like a fanged skull.",
    "goristro": "Massive minotaur demon, 20 feet tall with iron-hard skin and horns. Living siege weapon.",
    "molydeus": "Two-headed demon - one wolf, one snake - serving as executioner for demon lords. Wields a massive axe.",
    
    // ===== DEVILS EXTENDED =====
    "merregon": "Faceless devil foot soldier, covered in scars, wielding a halberd. Utterly expendable and obedient.",
    "nupperibo": "Blind, bloated devil - failed souls twisted into lemure-like forms. Constantly regenerating.",
    "spined-devil": "Small devil with bat wings and a body covered in poisonous spines. Aerial scouts of Hell.",
    "bearded-devil": "Devil with a beard of writhing tendrils that cause bleeding wounds. Savage shock troops.",
    "barbed-devil": "Devil covered in sharp barbs and spines, grasping victims to impale them. Cruel guards.",
    "bone-devil": "Skeletal devil with a scorpion tail, commanding lesser devils. Calculating and patient.",
    "orthon": "Devil assassin and bounty hunter, able to change appearance. Utterly relentless.",
    "narzugon": "Devil cavalry mounted on nightmare steeds, in black armor with hellfire lances.",
    "amnizu": "Bloated devil with tiny wings, commanding pit fiend armies. Genius strategists of Avernus.",
    
    // ===== CELESTIALS =====
    "ki-rin": "Celestial creature with a horse's body covered in golden scales, stag-like horns, and a lion's mane. Walks on clouds.",
    "empyrean": "Titan child of a god, standing 30 feet tall with perfect humanoid features and an aura of divine power.",
    "unicorn": "Pure white horse with a spiraling horn of light, representing ultimate goodness and purity.",
    "pegasus": "Magnificent white horse with large feathered wings and noble bearing.",
    "couatl": "Feathered serpent with rainbow plumage, radiant wings, and benevolent wisdom.",
    
    // ===== PLANTS =====
    "shambling-mound": "Heap of rotting vegetation roughly humanoid in shape. Vines and roots form limbs.",
    "treant": "Living tree with a face in the bark, branch arms, and root legs. Ancient and wise protector.",
    "awakened-tree": "Ordinary tree given consciousness by magic. Moves slowly but with purpose.",
    "awakened-shrub": "Small bush brought to awareness. Often confused and frightened by its new existence.",
    "myconid-adult": "Mushroom creature standing four feet tall, communicating through spores. Peaceful and communal.",
    "myconid-sovereign": "Large myconid leader with a wide cap, releasing clouds of rapport spores.",
    "vegepygmy": "Small plant creatures grown from russet mold. Thorn-covered with wooden features.",
    "wood-woad": "Forest guardian - a humanoid of living wood and bark, sworn to protect a sacred site.",
    "corpse-flower": "Horrific plant that grows from buried corpses, animating zombies from its mass.",
    
    // ===== SWARMS =====
    "swarm-of-bats": "Cloud of hundreds of bats moving as one, chittering and biting.",
    "swarm-of-rats": "Tide of rats flowing across surfaces, driven by hunger.",
    "swarm-of-insects": "Mass of crawling insects - beetles, roaches, centipedes - moving with hive purpose.",
    "swarm-of-poisonous-snakes": "Writhing mass of venomous serpents.",
    "swarm-of-ravens": "Murder of ravens attacking in coordinated fury.",
    "swarm-of-quippers": "Churning water filled with razor-toothed fish in feeding frenzy.",
    
    // ===== MISC CREATURES =====
    "flumph": "Floating jellyfish creature with eye stalks and dangling tentacles. Surprisingly cute and benevolent.",
    "gas-spore": "Fungus that looks exactly like a beholder - a deadly trap that explodes in spores.",
    "gibbering-mouther": "Mass of eyes, mouths, and liquefied flesh that babbles constantly. Maddening horror.",
    "grell": "Floating brain with a beak and ten dangling tentacles. Hunts from above.",
    "rust-monster": "Insect creature with feathery antennae and a propeller tail. Corrodes metal on touch.",
    "piercer": "Stalactite-shaped creature that drops on prey. Basically a living stone spike.",
    "roper": "Looks like a stalagmite until it opens its single eye and extends grasping tendrils.",
    "darkmantle": "Cave creature that resembles rock until it drops onto prey, enveloping their head.",
    "cloaker": "Looks like a black cloak until it wraps around victims with its manta ray-like body.",
    "cult-fanatic": "Wild-eyed humanoid in ritual robes, bearing unholy symbols and fanatical devotion.",
    "cultist": "Hooded humanoid in dark robes with cult symbols, devoted to dark powers.",
    "girallon": "Four-armed ape of massive size with white fur and savage temperament.",
    "froghemoth": "Enormous frog-like creature with tentacles instead of a tongue. Swamp horror.",
    "catoblepas": "Wildebeest-like creature with a long neck and a death-gaze. Stench of decay.",
    "gorgon": "Bull covered in iron plates instead of hide, with breath that petrifies.",
    "leucrotta": "Badger-headed deer with a bony ridge instead of teeth. Mimics voices.",
    "peryton": "Eagle-headed stag with wings, casting a humanoid shadow. Eats hearts.",
    "displacer-beast": "Six-legged panther with shoulder tentacles, appearing offset from its true location."
};

// Apply descriptions to allMonsters
function applyMonsterDescriptions() {
    if (typeof allMonsters === 'undefined') {
        console.warn('Monster descriptions: allMonsters not yet defined');
        return false;
    }

    let applied = 0;
    for (const [key, description] of Object.entries(MONSTER_DESCRIPTIONS)) {
        if (allMonsters[key] && !allMonsters[key].visualDescription) {
            allMonsters[key].visualDescription = description;
            applied++;
        }
    }
    console.log(`Applied visual descriptions to ${applied} of ${Object.keys(MONSTER_DESCRIPTIONS).length} monsters`);
    return true;
}

// Run immediately since allMonsters should already exist (monsters-index.js loads before this)
applyMonsterDescriptions();

// Also run on DOMContentLoaded as fallback in case of timing issues
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', applyMonsterDescriptions);
}

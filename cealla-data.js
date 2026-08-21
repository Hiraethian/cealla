/* ============================================================
   cealla-data.js — shared content for the Cealla widgets.
   Loaded by the hex map, the environment index, and the
   adversary index. Entries carrying col/row also become
   lit hexes on the map.
   Generated 2026-08-21 by the Cealla Data Forge.
   ============================================================ */
window.CEALLA_DATA = {

  linkBase: "/environments",
  mapPage: "/cities/ardenfell",

  entries: [
    { name: "Rhoc & A Hard Place", slug: "rhoc-a-hard-place",
      kind: "wild", tier: 1, envType: "Event",
      col: 16, row: 17, px: 1861, py: 1681,
      flavor: "A coastal cabin and a well-loved dock that's perfect for a fisherman to enjoy their days...",
      impulses: "Welcome the weary, Teach a man to fish",
      difficulty: 10, adversaries: "Tiyruuks, Dire Wolves",
      features: [
        { name: "Teach A Man to Fish & It Might Feed on Him for His Lifetime", type: "Action", text: "Rhoc’s quite the talented fisherman, and he loves to share his passion. Catching fish is quite a simple endeavor with Rhoc. Something about him when he fishes seems to lure fish from far and wide. \n<br>\n<br>\n\nHe will provide each party member a fishing rod free of charge in exchange for their first common or uncommon catch. Rhoc will fish with the party for two rounds and continue to fish for consecutive rounds for each successful <b>Presence Roll</b> they make to provide him tales of the outside world.\n<br>\n<br>\n\nMake an <b>Action Roll</b>, then reference the list below and use the result to determine what fish was caught. Additionally, while Rhoc will take your first Common or Uncommon catch, there are plenty more fish in the sea as long as he is kept entertained. \n<br>\n<br>\n\n<b>1 to 5 = Common Fish</b>\nBluegill Perch (1d4 + 1 lbs.)\nCommon Seabream (1d4 + 1 lbs.)\n<br>\n<b>6 to 9 = Uncommon Fish</b>\nOarsend Swai (1d6 + 2 lbs.)\nLendy Herring (1d6 + 2 lbs.)\n<br>\n<b>10 to 12 = Rare Fish</b>\nGhost Sea Trout (1d10 + 4 lbs.)\n<br>\n<b>Critical Success = Exotic Fish</b>\nSilverfed Swordfish (1d20 + 8 lbs)\n<br>\n<br>\n\nWhy are fish drawn to Rhoc? Do fish not fear him? What is his secret?" },
        { name: "Prepare For the Road Ahead", type: "Passive", text: "Roc's cabin is well equipped with the tools needed to prepare meat and provisions acquired in this environment, but Rhoc has to eat too! He will trade some of his tools for preserving food for longer term storage and travel. For every three pounds of fish given to him, he will provide the party with one of Rhoc's Special Travel Rations. \n<br>\n<br>\n\nWhen used as a consumable during a Short or Long Rest, Rhoc's Special Travel Rations allows a creature who ingested it to <b>Tend to their Wounds</b> without having to use a Downtime Move to do so.\n" },
        { name: "History Became Legend", type: "Passive", text: "Rhoc’s fishing talent isn’t natural, and those with the sense for the magical or especially keen hearing will notice every time he casts his line something is off. Rhoc uses a weird cube-like object as a bobber for his fishing hook. It doesn’t sink, and truly perceptive ears will hear a faint dull resonance ripple through the water every time the bobber touches the water.  \n<br>\n<br>\n\nThis cube is a key to a nearby Abandoned Relay Station that predates the Creation of Man. It is semi-sentient and is waiting until it comes across a creature knowledgeable enough for it to bond with, relinquishing its solid form and melding with an individual capable enough to help it complete its purpose. \n<br>\n<br>\n\nShould a party member with <b>+2 Knowledge</b> or better touch the cube at any point it will meld with their being and provide the following <b>Passive Effects</b> until it’s used as a key to open the nearby Relay Station. \n<br>\n<br>\n\n1. Fishfinder +2 Experience in fish and fishing related activities. \n2. Innate understanding of how to locate & access the Abandoned Relay Station in Phereo. \n" }
      ] },

    { name: "Ardenfell", slug: "ardenfell", link: "/cities/ardenfell",
      kind: "city", tier: 2, envType: "Social",
      col: 14, row: 15, px: 1729, py: 1518,
      flavor: " Beneath the city's  beautiful stained glass exterior are the shards of something very, very sinister...",
      impulses: "Perfect your craft, Hide something sinister",
      difficulty: 12, adversaries: "Undead Mass, Molten Glass Elemental, The Candlemaker",
      features: [
        { name: "Floating Market: Unexpected Find", type: "Action", text: "Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key." },
        { name: "Glasswork Hollow: Unrelenting Excellence", type: "Passive", text: "Once per scene, each PC can <b>mark a Stress</B> in order to turn a result with Fear into a result with Hope.  " },
        { name: "Harborfront: Crowd Closes In", type: "Passive", text: "When a PC splits from the party, the density and flow of the crowd shifts to cut them off completely from the rest of their party members.   " },
        { name: "Scholar's Enclave: Centuries of Knowledge", type: "Passive", text: "A PC can investigate the library and observatory and make a <b>Knowledge Roll</b> to learn information related to arcana, local history, and the Draugr Court’s plans." },
        { name: "Greyhook: What's the Talk of the Town?", type: "Passive", text: " A PC can ask the bartender, staff, or patrons about local events, rumors, and potential work with a <b>Presence Roll</b>. On a success, they can pick two of the below details to learn—or three if they critically succeed. On a failure, they can pick one and <b>mark a Stress</b> as the local carries on about something irrelevant.\n<br>\n<br>\n1. A fascinating rumor with a connection to a PC's background\n<br>\n2. A promising job for the party involving a nearby threat\n<br>\n3. Local folklore that relates to something they've seen\n<br>\n4. Town gossip that hints at a community problem" },
        { name: "Riverside Glen: Eyes Everywhere", type: "Reaction", text: "On a result with Fear, you can spend a Fear to have someone loyal to the Courtiers overhear the party’s plans to defeat them. A PC must succeed on an Instinct <b>Reaction Roll</b> to notice that the group has been overheard so they can try to intercept the witness before the PCs are exposed." },
        { name: "Castle Heights: Someone Comes to Town", type: "Action", text: "Introduce a significant NPC who wants to hire the party for something or who relates to a PC’s background.   " },
        { name: "The Warrens: It’d Be A Shame If Something Happened To Your Store", type: "Passive", text: "The PCs witness as enforcers of the Thornshard Syndicate shake down a local general goods store." }
      ] },

    { name: "Coral Palace Ambush", slug: "coral-palace-ambush",
      kind: "city", tier: 1, envType: "Event",
      flavor: "The Coral Palace Curios has a strange air about it as an undead horde descends upon Magda’s shop...",
      impulses: "Kill the Witch, Overwhelm the Living",
      difficulty: 11, adversaries: "Undead Mass, Sunken Skeleton",
      features: [
        { name: "Unending Horde", type: "Action", text: "The dead can only be halted through Magda's ritual being completed. After a horde of Sunken Skeletons have been defeated, the GM can Spend a Fear in order to  summon two more Sunken Skeletons who  rise from the dark waters and begin boarding the  deck of Magda's ship." },
        { name: "Data Waters", type: "Passive", text: "The waters around Magda's shop are dark and turbulent as dozens of summoned undead thrash just \nbeneath the surface as they try to get above deck and to Magda. Creatures that fall in the water or choose to enter it should be considered Restrained, and will take 1d4+2 physical damage  until they end the condition." }
      ] },

    { name: "The Saluting Sardelle", slug: "the-saluting-sardelle",
      kind: "wild", tier: 2, envType: "Event",
      col: 15, row: 16,
      flavor: "A famed chain of roadside taverns owned by the same family of the southern Lendymirl Region is the host for an murder mystery...",
      impulses: "Welcome All, Give Rest to the Weary, A Port in the Storm",
      difficulty: 14, adversaries: " Tsurada Assassin",
      features: [
        { name: "The Dead Bard", type: "Action", text: "Just as the party arrives outside the tavern, a scream is heard from the tavern owner's wife. The bard Nayvus, a regular of the establishment, was found dead in his room. The tavern owner has detained everyone who was staying at the tavern, and implores the party to help them uncover the killer. " },
        { name: "Meet the Cast", type: "Passive", text: "Roadside taverns and inns are well-known for attracting a unique cast of visitors, and PCs will find that tonight is no different. One of the following individuals killed Nayvus, though all may have their reasons...\n<br>\n<br>\n<b>The Traveling Merchant</b> - Arrived earlier that day, but has had bad blood with Nayvus since the last time they were together at this tavern, a brawl between them ensued.\n<br>\n<br> \n<b>The Local Farmer</b> - They arrived just before Nayvus did, and it is rumored they once had a more intimate relationship with the bard before things soured unexpectedly.\n<br>\n<br> \n<b>The Rival Performer</b> - They got to the Saluting Sardelle half a day after Nayvus, and seemed quite irate that they would be unable to fund their travel since Nayvus was already booked for the next few days.\n<br>\n<br> \n<b>The Quiet Mercenary</b> - A person of few words, they claim to have been hired to protect Nayvus once before, but when it was time to pay up he fled in the night. \n<br>\n<br> \n<b>The Tavern Owner</b> - A frequent host for Nayvus who initiated this investigation, the others believe they killed him over a long overdue tab, and they are trying to pin it on one of the travelers. \n<br>\n<br> \n<b>The Tavern Owner's Wife</b> - The one who found Nayvus dead, the Local Farmer believe Nayvus left them to pursue the Tavern Owner's Wife who feared their affair being discovered. " },
        { name: "Countdown to Discovery", type: "Reaction", text: "As PCs begin their investigation, they will need to perform <b>Action Rolls (17)</b> to figure out who the killer actually is. In reality, it is a Tsurada Assassin posing as one of the six individuals above that killed Nayvus but is trying to make it seem to have not been a hired killing. Before the investigation begins, roll a 1d6 (or choose) to determine which NPC above has actually been replaced by the Tsurada Assassin. \n<br>\n<br> \nNext, set an <b>Escape Countdown (4)</b> which increases by one everytime PCs fail an Action Roll (or by two on a critical failure) to search for clues about who committed the murder. After two failures, infighting amongst the  people within the tavern will begin. At four failures, roll 2d6 (or choose) to select two of  the NPCs above to get into an altercation where one of them is killed in the fight. In this confusion, the actual killer will escape and become untraceable by the PCs. \n<br>\n<br> \nShould the PCs be able to succeed on four Action Rolls before failing the Escape Countdown, they will discover proof that the killer is actually a paid assassin posing as one of the NPCs above. They can then either attempt to kill or subdue the assassin, and prove the innocence of all the others present. " }
      ] }
  ],

  adversaries: [
    { name: "Undead Mass", slug: "undead-mass",
      tier: 1, advType: "Leader",
      flavor: "A horrid collection of bloated corpses that is held together with a mixture of \nnecromantic magic and undersea wreckage",
      motives: "Tear Down Walls, Crush the Living, Kill the Witch",
      difficulty: 12, thresholds: "8/15", hp: 10, stress: 4, atk: "+3",
      attack: { name: "Slam", range: "Very Close", damage: "1d10+2" },
      location: "Created by necromantic magic and given limited sentience; it follows simple commands but innately desires to grow as large as possible.",
      features: [
        { name: "Undying Assault", type: "Passive", text: "The Undead Mass cannot drop below 2 HP until  Magda's Ritual is completed. Upon completion  of the ritual, \nthe creature can lose its last 2 HP  and be defeated." },
        { name: "Consume the Dead", type: "Reaction", text: "The Undead Mass consumes all undead within Close range of itself, using a Stress to do so.  For every \nHorde of Sunken Skeletons or undead absorbed, the Undead Mass increases its size,  which is represented by the recovery of 2 HP  and gaining +1 Difficulty. This ability can be  performed multiple times." },
        { name: "Hurl", type: "Action", text: "Mark a Stress to hurl a part of it’s absorbed self  at a creature or structure. Creatures hit by or in the path of a Hurled mass must make an Agility Reaction Roll (12). If they fail, the target takes 2d10+4 Phy and take a Stress as they are knocked over. If the attack targets a wooden structure, the Break on Through countdown is increased by 2." },
        { name: "Crushing Blow", type: "Reaction", text: "When the Undead Mass succeeds on a Slam attack, it may mark a Stress to convert it to a Crushing Blow. The target then has the temporary condition of Restrained until they  make a Strength Action Roll (12) to end it, or they are Hurled." }
      ] },

    { name: "Sunken Skeleton", slug: "sunken-skeleton",
      tier: 1, advType: "Horde",
      flavor: "Corpses that were not able to bind themselves to the Undead Mass, they move as a pack hoping to become part of their Leader",
      motives: "Be Consumed, Overwhelm Enemies, Kill the Witch",
      difficulty: 10, thresholds: "6/12", hp: 6, stress: 2, atk: "+1",
      attack: { name: "Rend", range: "Melee", damage: "1d6+2 phy" },
      location: "Created by necromantic magic, or in areas where malevolent energy is allowed to fester in or around a body of water.",
      features: [
        { name: "Group Attack", type: "Action", text: "Choose a target that is currently Restrained and  spotlight all other Sunken Skeletons in Close  range, having them move either into melee  range with the target, or moving into melee with  the Undead Mass." },
        { name: "Clawing Grasp", type: "Reaction", text: "When the Sunken Skeleton succeeds on an  attack, they can spend a Stress to temporarily  Restrain the target, forcing them to take a Stress." }
      ] },

    { name: " Tsurada Assassin", slug: "tsurada-assassin",
      tier: 2, advType: "Skulk",
      flavor: "A member of the assassination cult known as Tsurada, who specializes in infiltration and subterfuge for the execution of their killings.",
      motives: "Remain Hidden, Identify the Target, Go Undiscovered",
      difficulty: 14, thresholds: "8/15", hp: 5, stress: 4, atk: "+3",
      attack: { name: "Serrated Dirk", range: "Melee", damage: "2d8+2" },
      experience: "Hide in Plain Sight +2",
      location: "Cealla-wide. The headquarters of the Tsurada is currently unknown. ",
      features: [
        { name: "Neutralize the Target", type: "Passive", text: "When the Tsurada Assassin is hidden, they deal direct damage to the target. If the target is an NPC, they deal damage equal to the NPC's total health, killing them instantly. " },
        { name: "False Persona", type: "Passive", text: "A PC who rolls less than a 17 on an action roll to discover the Assassin's true identity must mark a Stress. " },
        { name: "Tactical Retreat", type: "Reaction", text: "If the Assassin  realizes they have been discovered, they mark a Stress to release a caustic smoke that fills the space, Disoriented all targets in the area. Disoriented characters have disadvantage on action rolls to find or track the Assassin until the condition is cleared.  " }
      ] },

    { name: "Tiyruuk", slug: "tiyruuk",
      tier: 2, advType: "Skulk",
      flavor: "A reptilian bird of prey which looks like a mix of a velociraptor and falcon.",
      motives: "Hunt Prey, Hit & Run, Always Moving",
      difficulty: 14, thresholds: "8/16", hp: 5, stress: 4, atk: "+2",
      attack: { name: "Teeth & Talons", range: "Very Close", damage: "2d6+2" },
      location: "Found throughout Cealla, typically inhabiting mountainous regions or oceanic cliffsides.",
      features: [
        { name: "Master of the Sky", type: "Passive", text: "While the Tiyruuk is airborne, its Difficulty is increased by +2. " },
        { name: "Peregrine Dive", type: "Action", text: "<b>Spend a Fear</b> to have the Tiyruuk attack a target within Far range. If successful, the Tiyruuk deals 2d10+2 physical damage and forces the target to to make an Agility Reaction Roll or become <i>Restrained</i>. If the target fails the reaction roll, the Tiyruuk immediately sinks its talons into the target and takes back off to Far range once more. " },
        { name: "Smash On the Rocks", type: "Action", text: "While airborne, the Tiyruuk can release a Restrained target to be smashed upon the rocks or the ground from the fall. If their falling isn't halted before their next action, the target takes 2d12+4 physical damage." }
      ] }
  ]
};

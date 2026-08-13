/* ============================================================
   cealla-data.js — shared content for the Cealla widgets.
   Loaded by the hex map, the environment index, and the
   adversary index. Entries carrying col/row also become
   lit hexes on the map.
   Generated 2026-08-13 by the Cealla Data Forge.
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
      ] }
  ],

  adversaries: [
  ]
};

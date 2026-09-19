/* ============================================================
   cealla-cities.js — city gazetteer data for the Cealla
   city map widgets: cities, districts, locales.
   Owned by the City Forge. The main Data Forge never touches
   this file, and this tool never touches cealla-data.js.
   If a page loads both files, load cealla-data.js FIRST.
   Generated 2026-09-19 by the Cealla City Forge.
   ============================================================ */
window.CEALLA_DATA = window.CEALLA_DATA || {};
window.CEALLA_DATA.cities = [
    { name: "Ardenfell", slug: "ardenfell",
      image: "https://images.squarespace-cdn.com/content/v1/673f340165a71b0fc817fb27/b8b81c6e-b5d6-45ef-872a-74a8c8ff108e/Page+4.png?format=2500w",
      w: 2500, h: 3233,
      districts: [
        { name: "Arden Floating Market", slug: "arden-floating-market", link: "/ardenfell-store/p/arden-floating-market-setting-guide" },
        { name: "Glasswork Hollow", slug: "glasswork-hollow" },
        { name: "Harborfront", slug: "harborfront" },
        { name: "Scholar's Enclave", slug: "scholars-enclave" },
        { name: "Greyhook", slug: "greyhook" },
        { name: "Riverside Glen", slug: "riverside-glen" },
        { name: "Castle Heights", slug: "castle-heights" },
        { name: "The Warrens", slug: "the-warrens" }
      ],
      pois: [
        { name: "The Unending Auction", slug: "the-unending-auction",
          district: "arden-floating-market", locType: "Market",
          x: 1125, y: 1535,
          flavor: "The Unending Auction is the beating heart of the Floating Market and a constant source of excitement. The auction house itself is built atop the former deck of a large galleon beached on the edge of the Lendymirl River. Its walls are adorned with rare finds from all over the world, and nearly anything you could want can be found inside" },

        { name: "Coral Palace Curios", slug: "coral-palace-curios",
          district: "arden-floating-market", locType: "Workshop",
          x: 1171, y: 1656,
          flavor: "A mysterious shop where the most esoteric of items can be found. Its shelves are lined with arcane objects that hum with latent magic. Visitors find themselves surrounded by an eclectic collection of trinkets from strange compasses that point towards booze to broken glass that shows distant images." },

        { name: "Traders' Grotto", slug: "traders-grotto",
          district: "arden-floating-market", locType: "Tavern",
          x: 1390, y: 1417,
          flavor: "The Traders’ Grotto is a large tavern that has been converted to look like the owner’s previous transport ship. The tavern is famed for its collection of spirits, and for its signature passtime ‘Merchant’s Mettle; a mug-based market manipulation game played by many of the regulars of the tavern." },

        { name: "The Emerald Bridge", slug: "the-emerald-bridge",
          district: "arden-floating-market", locType: "Landmark",
          x: 1501, y: 1503,
          flavor: "A bridge that spans the Lendymirl River, serving as the primary connection of the Floating Market to the rest of Ardenfell. The bridge is made of a combination of stone and glasswork, adorned with hand-carved designs that sparkle like jewels in the  mid-day sun." },

        { name: "The Floating Gardens", slug: "the-floating-gardens",
          district: "arden-floating-market", locType: "Landmark",
          x: 1194, y: 1465 },

        { name: "Artisan's cathedral", slug: "artisan-s-cathedral",
          district: "glasswork-hollow", locType: "Landmark",
          x: 841, y: 1469,
          flavor: "A shared guild hall for the city's largest guilds and most skilled artisans. It represents Ardenfell's dedication to artistry with its imposing size and design, and is one of the most well known architectural features in the city by those who visit or have studied the city." },

        { name: "The Glassworks", slug: "the-glassworks",
          district: "glasswork-hollow", locType: "Workshop",
          x: 967, y: 1400,
          flavor: "A chaotic sprawl of workshops and boutique crafting halls, the Glassworks is where every one of the city's greatest crafters got their start in one way or another. No one leaves the Glassworks without getting some sand underneath \ntheir fingernails." },

        { name: "The Stained Market", slug: "the-stained-market",
          district: "glasswork-hollow", locType: "Market",
          x: 900, y: 1523,
          flavor: "The seamless transition space that connects the Floating Market to the Glasswork Hollow. It's here that vendors proudly display the works of their friend or client-crafters, their voices melding into a cacophony of intense bartering and unbeatable deals." },

        { name: "Glisten Street", slug: "glisten-street",
          district: "glasswork-hollow", locType: "Street",
          x: 1139, y: 1383,
          flavor: "Where the neighborhood's artisans and locals come to unwind, or try their hand at other kinds of artistry. It trades taverns for cafes and unique eateries, and is a favorite place for performers and cooks who are dedicated to their craft to share \ntheir artistic stylings." },

        { name: "The Hollow's Inn", slug: "the-hollow-s-inn",
          district: "glasswork-hollow", locType: "Tavern",
          x: 883, y: 1386,
          flavor: "A surprisingly sleepy tavern that is lodged between Greyhook and the Hollow. It was once something of a favored tavern in the neighborhood, though it has recently fallen on hard times after being acquired by a former adventurer." }
      ] }
];

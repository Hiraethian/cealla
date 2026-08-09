/* ============================================================
   cealla-cities.js — city gazetteer data for the Cealla
   city map widgets: cities, districts, locales.
   Owned by the City Forge. The main Data Forge never touches
   this file, and this tool never touches cealla-data.js.
   If a page loads both files, load cealla-data.js FIRST.
   Generated 2026-08-09 by the Cealla City Forge.
   ============================================================ */
window.CEALLA_DATA = window.CEALLA_DATA || {};
window.CEALLA_DATA.cities = [
    { name: "Ardenfell", slug: "ardenfell",
      image: "https://images.squarespace-cdn.com/content/v1/673f340165a71b0fc817fb27/b8b81c6e-b5d6-45ef-872a-74a8c8ff108e/Page+4.png?format=2500w",
      w: 2500, h: 3233,
      districts: [
        { name: "Arden Floating Market", slug: "arden-floating-market", link: "/cities/ardenfell/floating-market" },
        { name: "Glasswork Hollow", slug: "glasswork-hollow", link: "/cities/ardenfell/glasswork-hollow" },
        { name: "Harborfront", slug: "harborfront", link: "/cities/ardenfell/harborfront" },
        { name: "Scholar's Enclave", slug: "scholars-enclave", link: "/cities/ardenfell/scholars-enclave" },
        { name: "Greyhook", slug: "greyhook", link: "/cities/ardenfell/greyhook" },
        { name: "Riverside Glen", slug: "riverside-glen", link: "/cities/ardenfell/riverside-glen" },
        { name: "Castle Heights", slug: "castle-heights", link: "/cities/ardenfell/castle-heights" },
        { name: "The Warrens", slug: "the-warrens", link: "/cities/ardenfell/warrens" }
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
          x: 1194, y: 1465 }
      ] }
];

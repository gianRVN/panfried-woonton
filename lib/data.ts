export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string;
  image: string;
  url?: string;
  inDevelopment?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Next Gen Drought Index",
    description:
      "Drought index exploration dashboard for risk finance applications with improved transparency and control.",
    tags: "Worldbank • React • TypeScript",
    image: "/ndgi.png",
    url: "https://nextgen-drought-wrd-prod.eu.mike-cloud.com/",
  },
  {
    id: 2,
    title: "Freshwater Ecosystems Explorer",
    description:
      "Help decision-makers see where freshwater ecosystems are being lost or degraded.",
    tags: "UNEP • React • TypeScript",
    image: "/freshwater.png",
    url: "https://sdg-freshwater-wrd-prod.eu.mike-cloud.com/",
  },
  {
    id: 3,
    title: "Assam Flood Early Warning",
    description:
      "Provides location-specific alerts using satellite, GIS, and hydrological models to help mitigate flood impacts across the state.",
    tags: "Assam • React • TypeScript",
    image: "/assam.png",
    url: "https://waterdss.mike-cloud.com/workspaces/a4135b2f-188b-4cc8-a84b-9b84ade701bb",
  },
  {
    id: 4,
    title: "Volta Basin Decision Support System",
    description:
      "Decision Support System (DSS) for water resources planning and management in the Volta Basin.",
    tags: "Volta • React • TypeScript",
    image: "/volta.png",
    url: "https://waterdss.mike-cloud.com/workspaces/32e0203d-7057-4412-b46f-205f902784c1",
  },
  {
    id: 5,
    title: "Generation Restoration Urban NbS Tool",
    description:
      "Supporting nature-based solutions to climate change in your city.",
    tags: "Geospatial • React • TypeScript",
    image: "/nbs.png",
    url: "https://waterdss.mike-cloud.com/workspaces/d75891f8-2662-4196-a1a2-6d9574bcdacc",
  },
  {
    id: 6,
    title: "SDG Water Quality Hub",
    description:
      "Designed for those tasked with reporting on this indicator for quality of rivers, lakes and aquifers globally.",
    tags: "UNEP • React • TypeScript",
    image: "/waterquality.png",
    url: "https://sdg-waterquality-wrd-prod.eu.mike-cloud.com/",
  },
  {
    id: 7,
    title: "Mekari Flex",
    description:
      "Benefit reporting dashboards for Mekari Flex, Mekari's employee benefits platform.",
    tags: "Fintech • Nuxt • Vue",
    image: "/mekariflex.png",
    url: "https://mekari.com/produk/flex/",
  },
  {
    id: 8,
    title: "Water Tools Portal",
    description:
      "Interactive toolkit for environmental researchers to simulate watershed scenarios and environmental impacts.",
    tags: "Geospatial • React • TypeScript",
    image: "/wtp.png",
    url: "https://waterdss.mike-cloud.com/projects",
  },
  {
    id: 9,
    title: "Teman Sharing Beroda",
    description: "Inline Skate Community Website",
    tags: "Astro",
    image: "/temansharingberoda.png",
    inDevelopment: true,
    url: "https://temansharingberoda.com",
  },
  {
    id: 10,
    title: "Nutrifood Health Campaign Spatial Analysis",
    description:
      "Python dashboard using Google Maps to map coffee shop locations and identify target areas for Nutrifood's health campaigns.",
    tags: "Python • Spatial Analysis • Google Maps",
    image: "/coffee-shop.png",
    url: "https://medium.com/@gianrvn/discover-best-coffee-shops-in-town-google-maps-data-scrapping-for-health-campaign-collaboration-1821045e681f",
  },
  {
    id: 11,
    title: "Traditional Market Segmentation in Cilacap",
    description:
      "Categorize traditional markets based on their proximity to residential areas, market size, google reviews",
    tags: "Python • ArcGIS • Google Maps",
    image: "/market-segmentation.png",
    url: "https://medium.com/@gianrvn/traditional-market-segmentation-finding-suitable-market-and-visualize-it-through-maps-4ab20f1caaaf",
  },
  {
    id: 12,
    title: "Kang Bang Task Management Tool",
    description:
      "a web-based single page application (SPA), similar to the Kanban board, that organize your to-do-list into online boards.",
    tags: "NodeJs • Vue • Firebase",
    image: "/kang-bang.png",
    inDevelopment: true,
    url: "https://kang-bang.web.app/",
  },
  {
    id: 13,
    title: "Gardara E-Commerce",
    description:
      "a web-based single page application (SPA) for selling-buying activities on vintage fashion style",
    tags: "NodeJs • Vue • Firebase",
    image: "/gardara.png",
    inDevelopment: true,
    url: "https://the-gardara.web.app/",
  },
  {
    id: 14,
    title: "GameSHACK",
    description:
      "a web-based single page application (SPA) for showing DOTA heroes public API",
    tags: "NodeJs • React • Firebase",
    image: "/gameshack.png",
    inDevelopment: true,
    url: "https://gameshark1997.web.app/",
  },
  {
    id: 15,
    title: "AniSeed",
    description:
      "a web-based single page application (SPA) for showing Anime public API",
    tags: "NodeJs • React",
    image: "/aniseed.png",
    inDevelopment: true,
    url: "https://aniseed-1997.netlify.app/",
  },
];

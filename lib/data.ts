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
    tags: "Geospatial • React • TypeScript",
    image: "/ndgi.png",
    url: "https://nextgen-drought-wrd-prod.eu.mike-cloud.com/",
  },
  {
    id: 2,
    title: "Mekari Flex",
    description:
      "Benefit reporting dashboards for Mekari Flex, Mekari's employee benefits platform.",
    tags: "Fintech • Nuxt • Vue",
    image: "/mekariflex.png",
    url: "https://mekari.com/produk/flex/",
  },
  {
    id: 3,
    title: "Water Tools Portal",
    description:
      "Interactive toolkit for environmental researchers to simulate watershed scenarios and environmental impacts.",
    tags: "Geospatial • React • TypeScript",
    image: "/wtp.png",
    url: "https://waterdss.mike-cloud.com/projects",
  },
  {
    id: 4,
    title: "Teman Sharing Beroda",
    description: "Inline Skate Community Website",
    tags: "Astro",
    image: "/temansharingberoda.png",
    inDevelopment: true,
    url: "https://dev.temansharingberoda.com",
  },
  {
    id: 5,
    title: "Nutrifood Health Campaign Spatial Analysis",
    description:
      "Python dashboard using Google Maps to map coffee shop locations and identify target areas for Nutrifood's health campaigns.",
    tags: "Python • Spatial Analysis • Google Maps",
    image: "/coffee-shop.png",
    url: "https://medium.com/@gianrvn/discover-best-coffee-shops-in-town-google-maps-data-scrapping-for-health-campaign-collaboration-1821045e681f",
  },
  {
    id: 7,
    title: "Traditional Market Segmentation in Cilacap",
    description:
      "Categorize traditional markets based on their proximity to residential areas, market size, google reviews",
    tags: "Python • ArcGIS • Google Maps",
    image: "/market-segmentation.png",
    url: "https://medium.com/@gianrvn/traditional-market-segmentation-finding-suitable-market-and-visualize-it-through-maps-4ab20f1caaaf",
  },
  {
    id: 8,
    title: "Kang Bang Task Management Tool",
    description:
      "a web-based single page application (SPA), similar to the Kanban board, that organize your to-do-list into online boards.",
    tags: "NodeJs • Vue • Firebase",
    image: "/kang-bang.png",
    inDevelopment: true,
    url: "https://kang-bang.web.app/",
  },
  {
    id: 9,
    title: "Gardara E-Commerce",
    description:
      "a web-based single page application (SPA) for selling-buying activities on vintage fashion style",
    tags: "NodeJs • Vue • Firebase",
    image: "/gardara.png",
    inDevelopment: true,
    url: "https://the-gardara.web.app/",
  },
  {
    id: 10,
    title: "GameSHACK",
    description:
      "a web-based single page application (SPA) for showing DOTA heroes public API",
    tags: "NodeJs • React • Firebase",
    image: "/gameshack.png",
    inDevelopment: true,
    url: "https://gameshark1997.web.app/",
  },
  {
    id: 11,
    title: "AniSeed",
    description:
      "a web-based single page application (SPA) for showing Anime public API",
    tags: "NodeJs • React",
    image: "/aniseed.png",
    inDevelopment: true,
    url: "https://aniseed-1997.netlify.app/",
  },
];

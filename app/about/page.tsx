import MainShell from "@/components/MainShell";

export const metadata = {
  title: "About — Gian Mohammad Arvin",
};

export default function AboutPage() {
  return (
    <MainShell>
      {/* Hero */}
      <section className="mb-24 text-center md:text-left relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#a0cdfc]/20 rounded-full blur-3xl -z-5" />
        <h2 className="font-headline text-4xl md:text-5xl mt-10 mb-6 leading-tight tracking-tight text-[#303330]">
          "Frontend Engineer. Geospatial{" "}
          <span className="serif-italic">Nerd</span>"
        </h2>
      </section>
      {/* Existing intro */}
      <div className="max-w-2xl mb-20">
        <p className="font-headline text-xl leading-relaxed text-[#303330] mb-8">
          I&apos;m a Frontend Engineer & Geospatial Visualizer with 5 years of
          experience building web applications at Mekari (fintech) and DHI
          (water-environmental).
        </p>
        <p className="text-[#5d605c] leading-relaxed mb-6">
          I build map-heavy interfaces and data dashboards from HRIS financial
          reporting at Mekari to geospatial and timeseries monitoring at DHI.
          Based in Indonesia, I collaborate with teams across Southeast Asia and
          beyond, specialising in React, TypeScript, Mapbox GL.
        </p>
      </div>

      {/* Skills */}
      <section className="mt-20 mb-16">
        <h2 className="font-headline text-3xl mb-12 text-[#303330]">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              category: "Frontend",
              skills: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Vue.js",
                "Redux",
                "Zustand",
                "Next.js",
                "EChart",
                "ReactQuery",
                "Material UI",
                "Chakra UI",
                "SCSS",
                "Webpack",
              ],
            },
            {
              category: "Testing",
              skills: ["Jest", "Playwright"],
            },
            {
              category: "Build & Deployment",
              skills: ["Nx Monorepo", "Azure DevOps", "Jenkins", "CI/CD"],
            },
            {
              category: "Backend",
              skills: ["Node.js", "Express.js", "SQL"],
            },
            {
              category: "Tools",
              skills: ["Git", "Yarn", "NPM", "Figma", "Storybook"],
            },
            {
              category: "GIS",
              skills: ["Mapbox", "Deck.gl", "Leaflet", "ArcGIS"],
            },
            {
              category: "Soft Skills",
              skills: [
                "Mentorship",
                "Frontend Ownership",
                "Cross-functional Team",
                "Technical Documentation",
              ],
            },
            {
              category: "Languages",
              skills: ["English (IELTS 7.5)", "Bahasa Indonesia (Native)"],
            },
          ].map(({ category, skills }) => (
            <div key={category}>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-widest text-[#5d605c] mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#e1e3df] rounded-full text-xs text-[#475838] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainShell>
  );
}

import MainShell from "@/components/MainShell";

export const metadata = {
  title: "Journey — Gian Mohammad Arvin",
};

export default function JourneyPage() {
  return (
    <MainShell>
      {/* Hero */}
      <section className="mb-24 relative topo-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pt-4">
          <div>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
              Field Journal Entry 01
            </span>
            <p className="text-[#5d605c] max-w-md text-lg leading-relaxed">
              I studied how to measure the Earth. Then ended up building
              interfaces that visualize it.
            </p>
          </div>
          <div className="flex justify-end lg:pr-12">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-tertiary-container/20 rounded-full blur-3xl" />
              <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/10 backdrop-blur-sm relative z-5">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">
                  explore
                </span>
                <div className="font-mono text-xs text-[#5d605c] space-y-1">
                  <p>LAT: 6.9175° S</p>
                  <p>LONG: 107.6191° E</p>
                  <p>ELEV: 768m ASL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winding Path Timeline */}
      <section className="relative pb-40">
        {/* SVG Path Decorator */}
        <div className="absolute top-[120px] left-0 right-0 bottom-0 pointer-events-none opacity-20 hidden md:block">
          <svg
            className="w-full"
            fill="none"
            height="100%"
            viewBox="0 0 800 1600"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-primary organic-path"
              d="M400 0 C 400 200, 100 300, 150 500 C 200 700, 700 800, 650 1100 C 600 1300, 400 1400, 400 1600"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Waypoint 1: 2015–2019 */}
        <div className="relative mb-40 md:ml-12 lg:ml-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 pt-2">
              <span className="font-headline italic text-2xl text-secondary">
                2015—2019
              </span>
              <div className="h-[1px] w-12 bg-[#b1b2af]/30 my-4" />
              <p className="font-mono text-[10px] tracking-widest text-[#5d605c] uppercase">
                Coordinate Origin
              </p>
            </div>
            <div className="md:w-2/3 p-8 bg-white rounded-xl border border-[#b1b2af]/5 shadow-sm hover:-translate-y-2 transition-transform duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline text-3xl text-primary">
                  Geodesy &amp; Geomatics Engineering
                </h3>
                <span className="material-symbols-outlined text-[#b1b2af] group-hover:text-primary transition-colors">
                  architecture
                </span>
              </div>
              <p className="text-[#5d605c] leading-relaxed mb-6">
                Four years at Institut Teknologi Bandung (ITB), learning GIS,
                remote sensing, spatial analysis. Research thesis on Borobudur
                Land Use - Land Cover Identification.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-1 bg-[#eeeeea] text-xs rounded-full">
                  GIS
                </span>
                <span className="px-4 py-1 bg-[#eeeeea] text-xs rounded-full">
                  Spatial Data
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connector: Waypoint 1 → 2 */}
        <div className="hidden md:flex justify-center -mt-32 mb-8">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#b1b2af]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#b1b2af]/50" />
            <div className="w-px h-10 bg-gradient-to-b from-[#b1b2af]/40 to-transparent" />
          </div>
        </div>

        {/* Waypoint 2: 2019–2021 */}
        <div className="relative mb-40 md:mr-12 lg:mr-24 md:flex md:justify-end">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start md:text-right">
            <div className="md:w-1/3 pt-2">
              <span className="font-headline italic text-2xl text-secondary">
                2019—2021
              </span>
              <div className="h-[1px] w-12 bg-[#b1b2af]/30 my-4 md:ml-auto" />
              <p className="font-mono text-[10px] tracking-widest text-[#5d605c] uppercase">
                The Scenic Route
              </p>
            </div>
            <div className="md:w-2/3 p-8 bg-surface-container-low rounded-xl border border-[#b1b2af]/5 shadow-sm hover:-translate-y-2 transition-transform duration-500 group text-left">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline text-3xl text-primary">
                  Professional Journey (Nutrifood &amp; Ministry of Public
                  Works)
                </h3>
                <span className="material-symbols-outlined text-[#b1b2af] group-hover:text-secondary transition-colors">
                  moving
                </span>
              </div>
              <p className="text-[#5d605c] leading-relaxed mb-6">
                GIS work for the Ministry of Public Works on validating road
                construction data, then distribution analytics at Nutrifood
                (market segmentation and territory mapping).
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-1 bg-surface-container-high text-xs rounded-full">
                  Non-IT Exploration
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Waypoint 3: 2021–2023 — Mekari */}
        <div className="relative mb-40 md:ml-12 lg:ml-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 pt-2">
              <span className="font-headline italic text-2xl text-secondary">
                2021—2023
              </span>
              <div className="h-[1px] w-12 bg-[#b1b2af]/30 my-4" />
              <p className="font-mono text-[10px] tracking-widest text-[#5d605c] uppercase">
                Settlement Plateau
              </p>
            </div>
            <div className="md:w-2/3 p-8 bg-white rounded-xl border border-[#b1b2af]/5 shadow-sm hover:-translate-y-2 transition-transform duration-500 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline text-3xl text-primary">
                    Mekari
                  </h3>
                  <p className="text-secondary italic">
                    Software Engineer (Frontend)
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#b1b2af] group-hover:text-primary transition-colors">
                  dashboard_customize
                </span>
              </div>
              <p className="text-[#5d605c] leading-relaxed mb-6">
                My first proper frontend role. I built HRIS using Vue, Nuxt, and
                Jest. Left with test coverage up 90%.
              </p>
            </div>
          </div>
        </div>

        {/* Waypoint 5: 2022–2024 — The Delta */}
        <div className="relative mb-40 md:mr-12 lg:mr-24 md:flex md:justify-end">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start md:text-right">
            <div className="md:w-1/3 pt-2">
              <span className="font-headline italic text-2xl text-secondary">
                2022—2024
              </span>
              <div className="h-[1px] w-12 bg-[#b1b2af]/30 my-4 md:ml-auto" />
              <p className="font-mono text-[10px] tracking-widest text-[#5d605c] uppercase">
                The Delta
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-tertiary-container/10 rounded-xl border border-tertiary/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-tertiary mb-3 block">
                  groups
                </span>
                <h4 className="font-bold text-[#0d456d] mb-2">
                  Rakamin Academy
                </h4>
                <p className="text-sm text-[#5d605c]">
                  Ran a 14-week fullstack JavaScript program for 10 students.
                  Also wrote 50 assessment questions for Rakamin's frontend
                  developer track.
                </p>
              </div>
              <div className="p-6 bg-secondary-container/10 rounded-xl border border-secondary/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-secondary mb-3 block">
                  school
                </span>
                <h4 className="font-bold text-[#75453c] mb-2">
                  Generasi Gigih
                </h4>
                <p className="text-sm text-[#5d605c]">
                  Mentored 15 students at GoTo's Generasi Gigih program on
                  building responsive Next.js apps with public APIs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Waypoint 6: 2023–Present — DHI */}
        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-[#edffd8] mb-8 shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <span className="font-headline italic text-3xl text-primary mb-2">
              2023—Present
            </span>
            <h3 className="font-headline text-5xl text-[#303330] mb-6">
              DHI Water &amp; Environment
            </h3>
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-8">
              Current Elevation: Frontend Engineer
            </p>
            <div className="max-w-xl p-8 bg-surface-container-high rounded-3xl border border-primary/10 relative">
              <div className="absolute -top-4 -left-4 p-2 bg-white rounded-lg border border-[#b1b2af]/20 shadow-sm">
                <span className="material-symbols-outlined text-primary text-sm">
                  pin_drop
                </span>
              </div>
              <p className="text-[#5d605c] leading-relaxed">
                I'm the sole frontend engineer on a platform that models flood,
                water quality, and climate data. Creating product mostly for
                NGO, UN, and Worldbank. The team spans Europe, Africa, and
                Southeast Asia. I work in Mapbox, Deck.gl, and React.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainShell>
  );
}

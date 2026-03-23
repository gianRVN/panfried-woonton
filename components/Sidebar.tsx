"use client";

import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="relative w-full lg:w-96 lg:fixed lg:left-0 lg:top-0 lg:h-screen flex flex-col bg-[#faf9f6] z-50 border-b lg:border-b-0 lg:border-r border-[#e1e3df]/20">
      {/* Large portrait — desktop only, overlapping right edge near CTA */}
      <div className="hidden lg:block absolute top-10 right-[-20px] w-30 pointer-events-none">
        <img
          alt="Line art portrait"
          className="w-full h-auto object-contain"
          src="/portrait.png"
        />
      </div>

      <div className="flex flex-col lg:h-full py-8 px-8 lg:py-10 lg:px-10">
        {/* Brand section */}
        <div className="relative mb-6">
          <div className="flex flex-col gap-5">
            {/* Name row */}
            <div>
              <h1 className="font-headline text-3xl font-bold text-primary tracking-tighter leading-tight">
                Gian Mohammad Arvin
              </h1>
              <p className="font-label text-xs uppercase tracking-widest text-[#5d605c] mt-2 font-bold">
                Frontend Engineer &amp; Geospatial Visualizer
              </p>
            </div>

            {/* Bio */}
            <p className="font-headline text-base leading-relaxed text-[#303330]">
              I build map-heavy interfaces and data dashboards. 5 years in,
              currently at DHI working on water simulation tools.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                className="flex items-center gap-3 text-primary font-medium hover:text-[#475838] transition-colors group"
                href="mailto:gianmohar@gmail.com"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                <span className="border-b border-transparent group-hover:border-primary text-sm">
                  gianmohar@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-[#5d605c] text-sm">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
                <span>Indonesia</span>
              </div>
              <a
                className="flex items-center gap-3 text-secondary font-medium hover:text-[#77463d] transition-colors text-sm"
                href="https://www.linkedin.com/in/gianmarvin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">link</span>
                <span>LinkedIn</span>
              </a>
              <a
                className="flex items-center gap-3 text-secondary font-medium hover:text-[#77463d] transition-colors text-sm"
                href="https://github.com/gianRVN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">code</span>
                <span>GitHub</span>
              </a>
              <a
                className="flex items-center gap-3 text-secondary font-medium hover:text-[#77463d] transition-colors text-sm"
                href="https://medium.com/@gianrvn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">
                  article
                </span>
                <span>Medium</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile portrait */}
        <div className="lg:hidden w-32 my-4">
          <img
            alt="Line art portrait"
            className="w-full h-auto object-contain"
            src="/portrait.png"
          />
        </div>

        {/* CTA */}
        {pathname !== "/connect" && (
          <div className="lg:mt-auto mt-8 pt-6 pb-6 border-t border-[#e1e3df]/30">
            <a
              href="/connect"
              className="w-full py-3 px-5 bg-primary text-[#edffd8] rounded-full font-bold text-sm tracking-tight flex items-center justify-center gap-2 hover:bg-[#475838] transition-all duration-300 transform hover:-translate-y-1"
            >
              Open to Projects
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}

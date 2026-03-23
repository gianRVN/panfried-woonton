import MainShell from "@/components/MainShell";
import ConnectForm from "@/components/ConnectForm";

export const metadata = {
  title: "Connect — Gian Mohammad Arvin",
};

export default function ConnectPage() {
  return (
    <MainShell>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left narrative column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Available for Freelance
              </span>
            </div>
            <span className="block text-secondary font-medium tracking-widest uppercase text-xs">
              Stay in touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-headline leading-tight text-[#303330]">
              Got a project in mind?
              <span className="italic text-primary">Let's talk</span>.
            </h2>
            <p className="text-[#5d605c] text-lg leading-relaxed max-w-md">
              If you’ve got a geospatial problem or a frontend idea, feel free
              to reach out.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 p-5 bg-[#f4f4f0] rounded-2xl hover:bg-[#e8e8e4] transition-colors duration-500">
              <div className="w-10 h-10 rounded-full bg-[#a0cdfc] flex items-center justify-center text-[#0d456d]">
                <span className="material-symbols-outlined text-xl">
                  location_on
                </span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#5d605c] font-bold">
                  Location
                </p>
                <p className="text-base font-medium">Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-[#f4f4f0] rounded-2xl hover:bg-[#e8e8e4] transition-colors duration-500">
              <div className="w-10 h-10 rounded-full bg-[#ffdad4] flex items-center justify-center text-[#75453c]">
                <span className="material-symbols-outlined text-xl">
                  alternate_email
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-[#5d605c] font-bold">
                  Find me at
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gianmarvin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-secondary transition-colors underline underline-offset-4 decoration-[#ffdad4]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/gianRVN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-secondary transition-colors underline underline-offset-4 decoration-[#ffdad4]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right form column */}
        <div className="lg:col-span-7">
          <ConnectForm />
        </div>
      </section>
    </MainShell>
  );
}

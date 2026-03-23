import MainHeader from './MainHeader'

export default function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 lg:ml-96 lg:h-screen lg:overflow-y-auto bg-[#faf9f6] relative">
      {/* Organic background blobs */}
      <div className="fixed top-[-10%] right-[-5%] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-[#d5e9bf]/20 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-5%] left-[20%] lg:left-[40%] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-[#a0cdfc]/15 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none -z-10" />

      <MainHeader />

      <div className="px-8 pb-16 md:px-12 lg:px-20">
        {children}
        <footer className="mt-32 pb-16 border-t border-[#e1e3df]/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#5d605c] font-medium text-sm">
            © 2026 Gian Mohammad Arvin.
          </p>
          <div className="flex gap-8">
            <a
              className="text-[#303330] hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              href="https://www.linkedin.com/in/gianmarvin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-[#303330] hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              href="https://github.com/gianRVN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="text-[#303330] hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              href="https://medium.com/@gianrvn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}

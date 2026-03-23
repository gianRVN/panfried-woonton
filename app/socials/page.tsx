import MainShell from '@/components/MainShell'

export const metadata = {
  title: 'Socials — Gian Mohammad Arvin',
}

const socials = [
  { label: 'LinkedIn', handle: 'linkedin.com/in/gianmarvin', icon: 'link', href: 'https://www.linkedin.com/in/gianmarvin/' },
  { label: 'GitHub', handle: 'github.com/gianRVN', icon: 'code', href: 'https://github.com/gianRVN' },
  { label: 'Medium', handle: 'medium.com/@gianrvn', icon: 'article', href: 'https://medium.com/@gianrvn' },
]

export default function SocialsPage() {
  return (
    <MainShell>
      <div className="flex flex-col gap-6 max-w-sm">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="material-symbols-outlined text-2xl text-primary">
              {s.icon}
            </span>
            <div>
              <p className="font-label font-bold text-[#303330] group-hover:text-primary transition-colors">
                {s.label}
              </p>
              <p className="text-sm text-[#5d605c]">{s.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </MainShell>
  )
}

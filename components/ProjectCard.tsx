import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : null;

  const ImageWrapper = ({ children }: { children: React.ReactNode }) =>
    linkProps ? <Link {...linkProps}>{children}</Link> : <>{children}</>;

  return (
    <div className="group flex flex-col space-y-5">
      <ImageWrapper>
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#e8e8e4] transition-all duration-500 group-hover:translate-y-[-8px]">
          {project.inDevelopment && (
            <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest bg-[#303330] text-[#e8e8e4] px-2.5 py-1 rounded-full">
              In Development
            </span>
          )}
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={750}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
        </div>
      </ImageWrapper>
      <div className="px-2">
        {linkProps ? (
          <Link {...linkProps}>
            <h3 className="font-headline text-2xl font-bold text-[#303330] mb-2 hover:underline">
              {project.title}
            </h3>
          </Link>
        ) : (
          <h3 className="font-headline text-2xl font-bold text-[#303330] mb-2">
            {project.title}
          </h3>
        )}
        <p className="text-[#5d605c] text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {project.tags}
        </span>
      </div>
    </div>
  );
}

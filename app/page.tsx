import MainShell from "@/components/MainShell";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <MainShell>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </MainShell>
  );
}

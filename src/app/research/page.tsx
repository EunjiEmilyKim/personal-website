
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { researchProjects } from "@/data/research";

export default function Research() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-24 pb-24">
        <h1 className="text-4xl font-semibold tracking-tight">Research</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          My research examines how technological change reshapes governance,
          institutions, and society. I study the development, implementation,
          and consequences of technology policy using computational social
          science, text analysis, and mixed-methods research designs.
        </p>

        <section className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Research Pipeline
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="text-sm text-neutral-500">Completed</p>
              <h3 className="mt-3 text-xl font-medium">AI Policy Formation</h3>
              <p className="mt-3 leading-7 text-neutral-700">
                Dissertation research on U.S. state AI legislation, policy
                framing, and legislative outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="text-sm text-neutral-500">Current</p>
              <h3 className="mt-3 text-xl font-medium">
                AI Governance in Practice
              </h3>
              <p className="mt-3 leading-7 text-neutral-700">
                Ongoing work on legislation, organizations, productivity, and
                democratic governance in the age of AI.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="text-sm text-neutral-500">Future</p>
              <h3 className="mt-3 text-xl font-medium">Technology and Society</h3>
              <p className="mt-3 leading-7 text-neutral-700">
                A broader research agenda on how technological change reshapes
                institutions, public policy, and social life.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Research Projects
          </h2>

          <div className="mt-8">
            {researchProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Publications
          </h2>

          <p className="mt-8 leading-7 text-neutral-700">
            Selected publications will be added here.
          </p>
        </section>
      </section>
    </main>
  );
}
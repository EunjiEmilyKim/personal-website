
import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "U.S. AI Legislation",
    status: "Manuscript in progress",
    description:
      "A research stream examining how U.S. state governments define, frame, and govern artificial intelligence through legislation.",
  },
  {
    title: "AI Impact on Research and Productivity",
    status: "Ongoing project",
    description:
      "A project studying how artificial intelligence affects research practices, knowledge production, and productivity across scientific fields.",
  },
  {
    title: "AI & Democracy",
    status: "Developing project",
    description:
      "A research agenda on how artificial intelligence intersects with democratic institutions, political communication, and public accountability.",
  },
];

export default function Research() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-24 pb-24">
        <h1 className="text-4xl font-semibold tracking-tight">Research</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          My research examines how emerging technologies interact with
          institutions, governance, and society. I am especially interested in
          artificial intelligence, technology governance, and computational
          policy analysis.
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
              <h3 className="mt-3 text-xl font-medium">AI Governance in Practice</h3>
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
            Current Projects
          </h2>

          <div className="mt-8 space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border-t border-neutral-200 pt-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{project.status}</p>
                </div>
                <p className="mt-3 max-w-3xl leading-7 text-neutral-700">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Publications
          </h2>

          <ul className="mt-8 space-y-5 leading-7 text-neutral-700">
            <li>
              <span className="font-medium text-neutral-900">
                Artificial Intelligence Policy under Uncertainty.
              </span>{" "}
              Dissertation, Georgia Institute of Technology.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                U.S. State AI Legislation and Policy Diffusion.
              </span>{" "}
              Working paper.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
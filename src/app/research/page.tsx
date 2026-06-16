import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { researchProjects } from "@/data/research";


export default function Research() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-24">
        <div className="mx-auto max-w-5xl"></div>
        <h1 className="text-4xl font-semibold tracking-tight">Research</h1>

        <p className="mt-6 max-w-6xl text-md leading-8 text-neutral-700">
          My research examines how technological change reshapes governance,
          institutions, and society. I study the development, implementation,
          and consequences of technology policy using computational social
          science, text analysis, and mixed-methods research designs.
        </p>

        <section className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Research Pipeline
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <Image
              src="/research-pipeline.png"
              alt="Research pipeline diagram showing the relationship between emerging technologies, technology governance, societal responses, and research methods"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
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

  <div className="mt-8 space-y-6">
    {[
      {
        year: "2026",
        title:
          "Strategic Interdependence: How Combatants Manage Collective Institutions During War",
        authors: [
          "Nadiya Kostyuk",
          "Jon Lindsay",
          "Eunji Emily Kim",
          "Aniket Anand",
          "Zachary Bischof",
          "Amanda Meng",
          "Alberto Dainotti",
        ],
        venue: "British Journal of Political Science",
        details: "56 (2026): e17. Web.",
        readArticle: "https://doi.org/10.1017/S0007123426101379",
      },
      {
        year: "2025",
        title:
          "Ethical Standards and Governance for Human-Centered AI (HCAI): Challenges and Opportunities",
        authors: ["Eunji Emily Kim"],
        venue: "Handbook of Human-Centered Artificial Intelligence",
        details: "Edited by Wei Xu. Springer Nature.",
        readArticle: "https://doi.org/10.1007/978-981-97-8440-0",
      },
      {
        year: "2021",
        title:
          "Policy Design for COVID-19: Worldwide Evidence on the Efficacies of Early Mask Mandates and Other Policy Interventions",
        authors: [
          "Brian Y. An",
          "Simon Porcher",
          "Shui-Yan Tang",
          "Eunji Emily Kim",
        ],
        venue: "Public Administration Review",
        details: "81(6): 1157–1182.",
        readArticle: "https://doi.org/10.1111/puar.13426",
      },
      {
        year: "2021",
        title:
          "South Korea’s Arctic Policy: Political Motivations for 21st Century Global Engagements",
        authors: ["Eunji Kim", "Anna Stenport"],
        venue: "The Polar Journal",
        details: "11(1): 11–29.",
        readArticle: "https://doi.org/10.1080/2154896X.2021.1917088",
      },
    ].map((publication) => (
      <article
        key={publication.title}
        className="border-t border-neutral-200 pt-6"
      >
        <p className="text-sm text-neutral-500">{publication.year}</p>

        <h3 className="mt-2 text-xl font-medium tracking-tight">
          {publication.title}
        </h3>

        <p className="mt-2 leading-7 text-neutral-700">
          {publication.authors.map((author, index) => (
            <span key={author}>
              <span
                className={
                  author === "Eunji Emily Kim" || author === "Eunji Kim"
                    ? "font-semibold text-neutral-900"
                    : ""
                }
              >
                {author}
              </span>
              {index < publication.authors.length - 2
                ? ", "
                : index === publication.authors.length - 2
                  ? ", and "
                  : ""}
            </span>
          ))}
        </p>

        <p className="mt-1 leading-7 text-neutral-700">
          <span className="italic">{publication.venue}</span>
          {publication.details ? `, ${publication.details}` : ""}
        </p>

        <a
          href={publication.readArticle}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-950"
        >
          Read at: {publication.venue}
        </a>
      </article>
    ))}
  </div>
</section>
      </section>
    </main>
  );
}
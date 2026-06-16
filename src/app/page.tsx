
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <nav className="mx-auto flex max-w-5xl justify-end px-6 py-7 text-[15px]">
        <div className="flex gap-7 text-neutral-600">
          <a href="/cv.pdf" className="hover:text-neutral-950">CV</a>
          <a href="/research" className="hover:text-neutral-950">Research</a>
          <a href="/teaching" className="hover:text-neutral-950">Teaching</a>
          <a href="#" className="hover:text-neutral-950">Google Scholar</a>
          <a href="mailto:emilykim721@gmail.com" className="hover:text-neutral-950">Contact</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 pt-24 md:grid-cols-[220px_1fr] md:pt-32">
        <div className="h-52 w-52 rounded-2xl bg-neutral-200" />

        <div className="max-w-3xl">
          <h1 className="text-[42px] font-semibold tracking-[-0.03em] md:text-[46px]">
            Eunji Emily Kim
          </h1>

          <p className="mt-4 text-[18px] text-neutral-700">
            Postdoctoral Scholar, University of California San Diego
          </p>

          <div className="mt-9 space-y-5 text-[18px] leading-8 text-neutral-700">
            <p>
              I am a Postdoctoral Scholar at the University of California Institute on Global Conflict and Cooperation (IGCC), where I study how public institutions govern emerging technologies. My research integrates computational social science, public policy, and science and technology studies to examine the development, diffusion, and implementation of artificial intelligence policy.
            </p>

            <p>
              My work combines large-scale legislative text analysis, machine learning, and mixed methods to understand how governments respond to technological uncertainty. More broadly, I am interested in technology governance, public institutions, and evidence-informed policymaking.
            </p>
          </div>

          <div className="mt-8 text-[15px] text-neutral-700">
            <a
              href="mailto:emilykim721@gmail.com"
              className="border-b border-neutral-400 hover:border-neutral-900 hover:text-neutral-950"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
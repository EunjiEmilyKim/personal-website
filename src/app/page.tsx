
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

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
             I am a Postdoctoral Scholar at the University of California Institute on Global Conflict and Cooperation (IGCC). My research examines how emerging technologies interact with institutions, governance, and society, with particular interests in artificial intelligence, technology governance, and computational policy analysis.
            </p>

            <p>
              I study how technological change shapes policy processes and organizational behavior, and how public and private actors respond to emerging technologies across diverse institutional settings. My work integrates computational text analysis, machine learning, and qualitative inquiry to generate scalable yet interpretable evidence for technology governance.
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
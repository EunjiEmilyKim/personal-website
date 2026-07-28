
import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 pt-24 md:grid-cols-[220px_1fr] md:pt-32">
        <div className="flex justify-center md:justify-start">
  <Image
    src="/profile.jpg"
    alt="Eunji Emily Kim"
    width={210}
    height={210}
    priority
    className="h-52 w-52 rounded-2xl object-cover border border-neutral-200"
  />
</div>

        <div className="max-w-3xl">
          <h1 className="text-[30px] font-semibold tracking-[-0.03em] md:text-[30px]">
            Eunji Emily Kim
          </h1>

          <p className="mt-4 text-[16px] text-neutral-700">
            <span className="block">Postdoctoral Fellow</span>
            <span className="block">
            University of California Institute on Global Conflict and Cooperation (IGCC)
  </span>
          </p>

          <div className="mt-9 space-y-5 text-[16px] leading-8 text-neutral-700">
            <p className="leading-8">
              I am a Postdoctoral Scholar at the{" "}
              <a
              href="https://ucigcc.org/people/eunji-emily-kim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-800 transition-colors"
              >
              IGCC
            </a> 
             . My research explores how governments and organizations adapt to emerging technologies. Across legislative institutions, scientific research, and high-risk organizations, I examine how new technologies reshape governance, decision-making, and organizational practices.
            </p>

            <p>
              My current work focuses on artificial intelligence, digital infrastructure, and technology governance. Using computational text analysis, statistical modeling, and mixed methods, I examine legislative behavior, organizational decision-making, and technology policy.
            </p>
          </div>

          <div className="mt-8 text-[16px] text-neutral-700">
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
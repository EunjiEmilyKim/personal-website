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
            className="h-52 w-52 rounded-2xl border border-neutral-200 object-cover"
          />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-[30px] font-semibold tracking-[-0.03em] md:text-[30px]">
            Eunji Emily Kim
          </h1>

          <p className="mt-4 text-[16px] text-neutral-700">
            <span className="block">Postdoctoral Scholar</span>
            <span className="block">
              University of California Institute on Global Conflict and Cooperation (IGCC)
            </span>
          </p>

          <div className="mt-9 space-y-5 text-[16px] leading-8 text-neutral-700">
            <p>
              <strong className="font-medium text-neutral-900">
                Welcome!
              </strong>{" "}
              I'm a Postdoctoral Scholar at the{" "}
              <a
                href="https://ucigcc.org/people/eunji-emily-kim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 transition-colors hover:text-blue-800"
              >
                UC Institute on Global Conflict and Cooperation (IGCC)
              </a>
              . My research explores how governments and organizations adapt to technological change. Across legislative institutions, scientific research, and high-risk organizations, I examine how new technologies reshape governance, decision-making, and organizational practices.
            </p>

            <p>
              My current work focuses on artificial intelligence governance, digital infrastructure, and technology policy. Using computational text analysis, statistical modeling, and mixed methods, I study legislative behavior, organizational adaptation, and public decision-making under technological change.
            </p>

            <p>
              Before joining IGCC, I received a Ph.D. in Public Policy and an M.S. in Statistics from the Georgia Institute of Technology, an M.A. in International Relations from Seoul National University, and a B.A. in Political Science from Sungkyunkwan University. I was also a Visiting Scholar at the Institute for Future Initiatives, University of Tokyo, and previously worked at the Korea Institute of S&T 
              Evaluation and Planning (KISTEP) .

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

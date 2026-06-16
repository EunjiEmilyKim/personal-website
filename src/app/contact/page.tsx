
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-24">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>

        <p className="mt-6 text-lg text-neutral-700">
          Email:{" "}
          <a
            href="mailto:emilykim721@gmail.com"
            className="border-b border-neutral-400 hover:border-neutral-900"
          >
            emilykim721@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
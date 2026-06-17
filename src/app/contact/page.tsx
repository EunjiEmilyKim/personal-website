
import Navbar from "@/components/Navbar";

const emails = [
  {
    label: "University Email",
    value: "euk028@ucsd.edu",
  },
  {
    label: "Personal Email",
    value: "emilykim721@gmail.com",
  },
  {
    label: "Georgia Tech Email",
    value: "emily.kim@gatech.edu",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-24">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
              Email
            </h2>

            <div className="mt-6 space-y-5">
              {emails.map((email) => (
                <div key={email.label}>
                  <p className="text-sm text-neutral-500">{email.label}</p>
                  <a
                    href={`mailto:${email.value}`}
                    className="text-lg text-neutral-800 hover:text-neutral-950"
                  >
                    {email.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
              Affiliation
            </h2>

            <p className="mt-6 text-lg text-neutral-800">
              Institute on Global Conflict and Cooperation
              <br />
              University of California in Washington, DC
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
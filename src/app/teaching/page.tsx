
import Navbar from "@/components/Navbar";

const courses = [
  {
    code: "PHIL 3109",
    title: "Engineering Ethics",
    role: "Recitation Instructor",
  },
  {
    code: "PUBP 6120",
    title: "Cost-Benefit Analysis",
    role: "Teaching Assistant",
  },
  {
    code: "PHIL 4176",
    title: "Environmental Ethics",
    role: "Teaching Assistant",
  },
];

export default function Teaching() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-24">
        <h1 className="text-4xl font-semibold tracking-tight">Teaching</h1>

        <div className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            Georgia Institute of Technology
          </h2>

          <div className="mt-8 space-y-8">
            {courses.map((course) => (
              <div key={course.code}>
                <h3 className="text-lg font-medium">
                  {course.code} — {course.title}
                </h3>
                <p className="mt-1 text-neutral-600">{course.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
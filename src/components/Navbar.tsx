
export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-5xl justify-end px-6 py-7 text-[15px]">
      <div className="flex gap-7 text-neutral-600">
        <a href="/cv.pdf" className="hover:text-neutral-950">
          CV
        </a>
        <a href="/research" className="hover:text-neutral-950">
          Research
        </a>
        <a href="/teaching" className="hover:text-neutral-950">
          Teaching
        </a>
        <a href="#" className="hover:text-neutral-950">
          Google Scholar
        </a>
        <a href="mailto:emilykim721@gmail.com" className="hover:text-neutral-950">
          Contact
        </a>
      </div>
    </nav>
  );
}
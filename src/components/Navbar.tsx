import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-5xl justify-end px-6 py-7 text-[15px]">
      <div className="flex gap-7 text-neutral-600">
        <Link href="/" className="hover:text-neutral-950">
          Home
        </Link>
        <Link href="/cv.pdf" className="hover:text-neutral-950">
          CV
        </Link>
        <Link href="/research" className="hover:text-neutral-950">
          Research
        </Link>
        <Link href="/teaching" className="hover:text-neutral-950">
          Teaching
        </Link>
        <Link
          href="https://scholar.google.com/citations?user=qEht2YwAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-950"
        >
          Google Scholar
        </Link>
        <Link href="/contact" className="hover:text-neutral-950">
          Contact
        </Link>
      </div>
    </nav>
  );
}
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#003366] text-white shadow-sm">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand text is short and bold so it is easy to read on small phones. */}
        <Link href="/" className="text-base font-semibold tracking-wide sm:text-lg">
          Paraspect • Storybook
        </Link>

        {/* Simple nav links keep the header clean and parent-friendly. */}
        <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
          <Link href="/" className="transition hover:opacity-80">
            Home
          </Link>
          <Link href="/create" className="transition hover:opacity-80">
            Create
          </Link>
        </div>
      </nav>
    </header>
  );
}

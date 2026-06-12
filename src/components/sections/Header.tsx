"use client";

const navLinks = [
  { label: "01. // HERO", href: "#hero" },
  { label: "02. // WORK", href: "#work" },
  { label: "03. // SKILLS", href: "#skills" },
  { label: "04. // TEAM", href: "#team" },
];

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-gridline"
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <div className="w-8 h-8 bg-forest flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="5" height="5" fill="#9EFFBF" />
              <rect x="9" y="2" width="5" height="5" fill="#F7F7F5" />
              <rect x="2" y="9" width="5" height="5" fill="#F7F7F5" />
              <rect x="9" y="9" width="5" height="5" fill="#FF8C69" />
            </svg>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] tracking-widest uppercase text-forest hover:text-coral transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status badge */}
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-forest">
          <span
            className="w-2 h-2 bg-mint animate-blink flex-shrink-0"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">STATUS // ACTIVE_IN_BENGALURU</span>
          <span className="sm:hidden">ACTIVE</span>
        </div>
      </div>
    </header>
  );
}

const tags = [
  { label: "CO-BUILDER // SYSTEMS COMPILATION", accent: "mint" },
  { label: "STACK // EMBEDDED_LOGIC", accent: "coral" },
  { label: "ROLE // PARALLEL_EXECUTION", accent: "gold" },
  { label: "NODE // ENGINEERING_SYNC", accent: "mint" },
] as const;

const accentBorder: Record<string, string> = {
  mint: "border-mint",
  coral: "border-coral",
  gold: "border-gold",
};

const links = [
  {
    label: "GITHUB // prathvicodes07",
    href: "https://github.com/prathvicodes07",
    external: true,
  },
  {
    label: "LINKEDIN // prathviraj-godbole",
    href: "https://www.linkedin.com/in/prathviraj-godbole-63177a385/",
    external: true,
  },
];

export default function Team() {
  return (
    <section id="team" className="relative border-b border-gridline">
      <div className="px-6 md:px-10 py-6 border-b border-gridline">
        <p className="font-mono text-[10px] tracking-widest uppercase text-forest/50">
          04. // TEAM_INDEX
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Profile block */}
        <article
          className="project-block relative lg:col-span-2 p-6 md:p-10 bg-paper border-b lg:border-b-0 border-gridline lg:border-r border-gridline min-h-[320px] flex flex-col"
        >
          <div className="absolute top-0 left-0 w-1 h-full border-l-4 border-l-mint" aria-hidden="true" />

          <span className="font-mono text-[10px] tracking-widest uppercase text-mint">
            [COLLABORATOR // PROFILE_BLOCK]
          </span>

          <h2
            className="mt-4 font-display font-bold text-forest tracking-tight leading-[0.9] text-[clamp(2rem,5vw,3.5rem)]"
          >
            PRITHVIRAJ
            <br />
            GODBOLE
          </h2>

          <p className="mt-4 font-mono text-[10px] tracking-widest uppercase text-forest/50 max-w-md">
            ENGINEERING TEAMMATE // CO-DEPLOYMENT ON IOT & MECHANICAL SYSTEM
            FRAMES
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`font-mono text-[10px] tracking-widest uppercase px-3 py-2 border bg-paper text-forest ${accentBorder[tag.accent]}`}
              >
                [{tag.label}]
              </span>
            ))}
          </div>

          <div className="mt-auto pt-8 font-mono text-[10px] tracking-widest uppercase text-forest/30">
            REF // COLLAB_001 // LINK_STATUS: ACTIVE
          </div>
        </article>

        {/* Links + diagnostics panel */}
        <div className="flex flex-col border-b border-gridline lg:border-b-0">
          <div className="p-6 md:p-8 border-b border-gridline flex-1">
            <p className="font-mono text-[10px] tracking-widest uppercase text-forest/50 mb-6">
              EXTERNAL_ENDPOINTS
            </p>

            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 border border-gridline bg-paper hover:border-mint transition-colors duration-150"
                >
                  <span
                    className="w-2 h-2 bg-coral group-hover:bg-mint transition-colors duration-150 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-forest group-hover:text-forest">
                    {link.label}
                  </span>
                  <span
                    className="ml-auto font-mono text-[10px] tracking-widest uppercase text-forest/30 group-hover:text-mint transition-colors duration-150"
                  >
                    OPEN ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 font-mono text-[10px] tracking-widest uppercase text-forest/40 leading-relaxed">
            <div className="flex gap-2">
              <span className="text-coral/60">&gt;</span>
              <span>SYNC_STATE: LOCKED</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-coral/60">&gt;</span>
              <span>BUILD_PHASE: INTEGRATION</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-coral/60">&gt;</span>
              <span>UPTIME: CONTINUOUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

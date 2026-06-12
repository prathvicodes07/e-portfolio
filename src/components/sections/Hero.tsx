const certifications = [
  { label: "IBM // AI_FOUNDATIONS", accent: "mint" },
  { label: "IBM // DATA_SCIENCE", accent: "coral" },
  { label: "IBM // IOT_DEVELOPER", accent: "gold" },
] as const;

const accentBorder: Record<string, string> = {
  mint: "border-mint",
  coral: "border-coral",
  gold: "border-gold",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative border-b border-gridline min-h-[calc(100vh-4rem)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left column */}
        <div className="flex flex-col justify-center px-6 md:px-10 py-16 lg:border-r border-gridline">
          <h1
            className="font-display font-bold text-forest tracking-tight leading-[0.9] text-[clamp(2.5rem,8vw,5.5rem)]"
          >
            PRATHVIRAJ
            <br />
            GODBOLE
          </h1>

          <div className="mt-8 flex items-stretch gap-3">
            <div className="w-px bg-gridline self-stretch min-h-[1.5rem]" />
            <p className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-forest/70">
              BTECH CSE (AIML) // REVA UNIVERSITY
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert.label}
                className={`font-mono text-[10px] tracking-widest uppercase px-3 py-2 border bg-paper text-forest ${accentBorder[cert.accent]}`}
              >
                [{cert.label}]
              </span>
            ))}
          </div>
        </div>

        {/* Right column — network topology */}
        <div className="flex items-center justify-center px-6 md:px-10 py-16 border-t lg:border-t-0 border-gridline">
          <div className="relative w-[300px] h-[300px]">
            {/* Orbital ring — 140px radius */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div
                className="w-[280px] h-[280px] border border-dashed border-forest/20"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div
                className="w-[200px] h-[200px] border border-dashed border-forest/15"
                style={{ borderRadius: "50%" }}
              />
            </div>

            {/* Structural lines from center to orbit path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              aria-hidden="true"
            >
              <line
                x1="160"
                y1="160"
                x2="160"
                y2="20"
                stroke="rgba(58, 58, 56, 0.2)"
                strokeWidth="1"
              />
              <line
                x1="160"
                y1="160"
                x2="300"
                y2="160"
                stroke="rgba(58, 58, 56, 0.2)"
                strokeWidth="1"
              />
              <line
                x1="160"
                y1="160"
                x2="40"
                y2="240"
                stroke="rgba(58, 58, 56, 0.2)"
                strokeWidth="1"
              />
            </svg>

            {/* Central node */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-forest z-10"
              aria-hidden="true"
            />

            {/* Orbiting nodes */}
            <div
              className="absolute inset-0 flex items-center justify-center animate-orbit"
              aria-hidden="true"
            >
              <div className="relative w-[280px] h-[280px]">
                {/* Node 1 — top */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-forest bg-paper"
                />
                {/* Node 2 — right */}
                <div
                  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-coral bg-paper"
                />
                {/* Node 3 — bottom-left */}
                <div
                  className="absolute bottom-[15%] left-[8%] w-3 h-3 border border-mint bg-paper"
                />
              </div>
            </div>

            <p
              className="absolute bottom-2 left-0 font-mono text-[10px] tracking-widest uppercase text-forest/40"
            >
              NET_TOPO // ACTIVE_NODES: 3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

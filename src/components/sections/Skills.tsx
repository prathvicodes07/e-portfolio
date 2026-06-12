function SkillMeter({ percent }: { percent: number }) {
  const filled = Math.round(percent / 10);
  const empty = 10 - filled;
  const bar = "[" + "█".repeat(filled) + "░".repeat(empty) + "]";

  return (
    <div className="font-mono text-[10px] tracking-widest text-forest/60 mt-2">
      {bar} {percent}%
    </div>
  );
}

const skillGroups = [
  {
    category: "CORE SOFTWARE",
    skills: [
      { name: "C PROGRAMMING", percent: 85 },
      { name: "PYTHON PROGRAMMING", percent: 90 },
    ],
  },
  {
    category: "PHYSICAL ENGINEERING",
    skills: [
      { name: "IOT ENGINEERING", percent: 88 },
      { name: "MECHANICAL ENGINEERING", percent: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="px-6 md:px-10 py-6 border-b border-gridline">
        <p className="font-mono text-[10px] tracking-widest uppercase text-forest/50">
          03. // SKILLS_MATRIX
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            className={`p-6 md:p-10 border-b border-gridline ${
              groupIndex % 2 === 0 ? "md:border-r" : ""
            } border-gridline`}
          >
            <h3
              className="font-mono text-[10px] tracking-widest uppercase text-forest/50 mb-8"
            >
              {group.category}
            </h3>

            <div className="space-y-6">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <p
                    className="font-mono text-xs tracking-widest uppercase text-forest"
                  >
                    {skill.name}
                  </p>
                  <SkillMeter percent={skill.percent} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-10 py-4 border-t border-gridline font-mono text-[10px] tracking-widest uppercase text-forest/30">
        DIAGNOSTICS // LEDGER_V1.0 // ALL_SYSTEMS_NOMINAL
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

function IoTTelemetry() {
  const [lines, setLines] = useState([
    "FLOW_RATE: 0.82L/s",
    "VALVE_STATUS: SECURE",
    "SYS_METRIC: NOMINAL",
    "TEMP_SENSOR: 24.3°C",
    "PRESSURE: 1.02 bar",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const flow = (0.75 + Math.random() * 0.15).toFixed(2);
      const temp = (23 + Math.random() * 3).toFixed(1);
      setLines([
        `FLOW_RATE: ${flow}L/s`,
        "VALVE_STATUS: SECURE",
        "SYS_METRIC: NOMINAL",
        `TEMP_SENSOR: ${temp}°C`,
        `PRESSURE: ${(1 + Math.random() * 0.05).toFixed(2)} bar`,
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 p-3 border border-gridline bg-paper font-mono text-[10px] tracking-wider leading-relaxed text-forest/80">
      {lines.map((line, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-coral/60">&gt;</span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  );
}

function TurbineSchematic() {
  return (
    <div className="mt-4 flex flex-col items-center">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        className="animate-turbine"
        aria-hidden="true"
      >
        {/* Tower */}
        <line
          x1="80"
          y1="80"
          x2="80"
          y2="140"
          stroke="#1A3C2B"
          strokeWidth="2"
        />
        {/* Hub */}
        <circle cx="80" cy="80" r="6" fill="#1A3C2B" />
        {/* Blades */}
        {[0, 120, 240].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 80 + Math.cos(rad) * 50;
          const y2 = 80 + Math.sin(rad) * 50;
          return (
            <line
              key={angle}
              x1="80"
              y1="80"
              x2={x2}
              y2={y2}
              stroke="#1A3C2B"
              strokeWidth="2"
            />
          );
        })}
        {/* Blade tips */}
        {[0, 120, 240].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 80 + Math.cos(rad) * 50;
          const cy = 80 + Math.sin(rad) * 50;
          return <circle key={angle} cx={cx} cy={cy} r="3" fill="#F4D35E" />;
        })}
        {/* Base */}
        <rect x="65" y="140" width="30" height="4" fill="#1A3C2B" />
      </svg>
      <div className="mt-3 flex gap-2 font-mono text-[10px] tracking-widest uppercase">
        <span className="px-2 py-1 border border-gold text-forest">
          [GEN_OUTPUT: 5V]
        </span>
        <span className="px-2 py-1 border border-mint text-forest">
          [LED_ACTIVE]
        </span>
      </div>
    </div>
  );
}

const projects = [
  {
    id: "iot",
    title: "Smart Household Water Management System",
    frame: "IoT Frame",
    accentClass: "text-coral",
    accentBorder: "border-l-coral",
    content: <IoTTelemetry />,
  },
  {
    id: "mechanical",
    title: "Wind Turbine Generator Electrical System",
    frame: "Mechanical Frame",
    accentClass: "text-gold",
    accentBorder: "border-l-gold",
    content: <TurbineSchematic />,
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative border-b border-gridline">
      <div className="px-6 md:px-10 py-6 border-b border-gridline">
        <p className="font-mono text-[10px] tracking-widest uppercase text-forest/50">
          02. // WORK_INDEX
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`project-block group relative p-6 md:p-8 bg-paper border-b border-gridline ${
              index % 2 === 0 ? "md:border-r" : ""
            } border-gridline min-h-[420px] flex flex-col transition-colors duration-200`}
          >
            {/* Accent anchor label */}
            <div
              className={`absolute top-0 left-0 w-1 h-full ${project.accentBorder} border-l-4`}
              aria-hidden="true"
            />

            <div className="group-hover:opacity-100 opacity-90 mix-blend-luminosity transition-all duration-300 group-hover:mix-blend-normal">
              <span
                className={`font-mono text-[10px] tracking-widest uppercase ${project.accentClass}`}
              >
                [{project.frame}]
              </span>

              <h3
                className="mt-3 font-display font-bold text-forest tracking-tight text-xl md:text-2xl leading-tight"
              >
                {project.title}
              </h3>

              {project.content}
            </div>

            <div className="mt-auto pt-6 font-mono text-[10px] tracking-widest uppercase text-forest/40">
              REF // {project.id.toUpperCase()}_001
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useCallback, useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import MosaicBackground from "@/components/ui/MosaicBackground";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Team from "@/components/sections/Team";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      <CustomCursor />
      <MosaicBackground />

      {showLoader && <LoadingScreen onComplete={handleLoaderComplete} />}

      <div className="relative z-10">
        <Header />
        <main className="pt-16">
          <Hero />
          <Projects />
          <Skills />
          <Team />
        </main>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particleOptions from "./ParticlesOptions.tsx";

const ParticlesComponent: React.FC<{}> = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return <Particles id="tsparticles" options={particleOptions} />;
};

export default ParticlesComponent;

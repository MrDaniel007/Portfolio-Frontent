import React from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const ParticlesBg = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000000" } }, // черный фон
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: { enable: false },
          collisions: { enable: false },
          move: {
            direction: "bottom",
            enable: true,
            outModes: { default: "out" },
            speed: 1,
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
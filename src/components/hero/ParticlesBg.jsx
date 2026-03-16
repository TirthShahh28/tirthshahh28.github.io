import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: ['#06b6d4', '#8b5cf6', '#ffffff'] },
          links: {
            color: '#06b6d4',
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          number: {
            density: { enable: true, area: 900 },
            value: 50,
          },
          opacity: {
            value: { min: 0.2, max: 0.5 },
            animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.3 } },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

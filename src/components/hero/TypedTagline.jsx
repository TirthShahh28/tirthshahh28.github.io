import { TypeAnimation } from 'react-type-animation'

export default function TypedTagline() {
  return (
    <TypeAnimation
      sequence={[
        'AI Engineer',
        2000,
        'ML Researcher',
        2000,
        'Deep Learning Enthusiast',
        2000,
        'Full-Stack Developer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-cyan-400"
    />
  )
}

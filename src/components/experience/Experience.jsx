import Section from '../layout/Section'
import TimelineItem from '../education/TimelineItem'
import { experience } from '../../assets/data/experience'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-2xl mx-auto">
        {experience.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.role}
            subtitle={item.company}
            description={item.description}
            tags={item.tags}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}

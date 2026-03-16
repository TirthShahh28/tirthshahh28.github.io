import Section from '../layout/Section'
import TimelineItem from './TimelineItem'
import { education } from '../../assets/data/education'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-2xl mx-auto">
        {education.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.degree}
            subtitle={`${item.school} — ${item.gpa}`}
            description={item.description}
            tags={item.coursework}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}

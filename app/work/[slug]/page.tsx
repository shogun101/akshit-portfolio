import CaseStudyClient from './CaseStudyClient'

const projects: Record<string, { title: string; oneliner: string }> = {
  'prompt-objects': { title: 'Prompt Objects', oneliner: 'An AI product design exploration.' },
  'brandsprint': { title: 'BrandSprint', oneliner: 'Brand identity in 30 minutes, powered by AI.' },
}

export function generateStaticParams() {
  return [{ slug: 'prompt-objects' }, { slug: 'brandsprint' }]
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects[params.slug] ?? { title: params.slug, oneliner: '' }
  return <CaseStudyClient title={project.title} oneliner={project.oneliner} />
}

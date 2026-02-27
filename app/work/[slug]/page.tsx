import CaseStudyClient from './CaseStudyClient'

export function generateStaticParams() {
  return [
    { slug: 'prompt-archive' },
    { slug: 'brandsprint' },
    { slug: 'gloww' },
  ]
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  return <CaseStudyClient slug={params.slug} />
}

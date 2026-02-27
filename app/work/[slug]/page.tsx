import CaseStudyClient from './CaseStudyClient'

export function generateStaticParams() {
  return [
    { slug: 'prompt-archive' },
    { slug: 'brandsprint' },
    { slug: 'gloww' },
  ]
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <CaseStudyClient slug={slug} />
}

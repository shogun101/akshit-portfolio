export default function Contact() {
  return (
    <section className="px-6 md:px-12 py-24">
      <p className="text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--text-secondary)' }}>
        Contact
      </p>
      <div className="flex flex-wrap gap-6 text-base md:text-lg">
        <a
          href="mailto:akshit@gloww.design"
          className="underline-offset-4 hover:underline transition-all"
          style={{ color: 'var(--text-primary)' }}
        >
          akshit@gloww.design
        </a>
        <span style={{ color: 'var(--border)' }}>/</span>
        <a
          href="https://x.com/akshitvrma"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline transition-all"
          style={{ color: 'var(--text-primary)' }}
        >
          x.com/akshitvrma
        </a>
      </div>
    </section>
  )
}

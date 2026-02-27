export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6" style={{ background: 'var(--bg)' }}>
      <span className="text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
        Akshit Vrma
      </span>
      <a
        href="https://x.com/akshitvrma"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm transition-opacity hover:opacity-60"
        style={{ color: 'var(--text-secondary)' }}
      >
        x.com/akshitvrma
      </a>
    </header>
  )
}

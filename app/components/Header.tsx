export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5" style={{ background: 'var(--bg)' }}>
      <span className="text-sm tracking-tight" style={{ color: 'var(--text-primary)', fontWeight: 450 }}>
        Akshit Vrma
      </span>
      <a
        href="https://x.com/akshitvrma"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm transition-opacity hover:opacity-50"
        style={{ color: 'var(--text-secondary)' }}
      >
        @akshitvrma
      </a>
    </header>
  )
}

import type { NextConfig } from 'next'
import { execSync } from 'child_process'

let lastUpdated = ''
try {
  const commitDate = execSync('git log -1 --format=%ci').toString().trim()
  const date = new Date(commitDate)
  const diffDays = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
  lastUpdated = diffDays === 0 ? 'today' : diffDays === 1 ? '1d ago' : `${diffDays}d ago`
} catch {
  lastUpdated = 'recently'
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
}

export default nextConfig

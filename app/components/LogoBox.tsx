'use client'
import { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

interface LogoBoxProps {
  name: string
  tooltip?: string
  italic?: boolean
}

export default function LogoBox({ name, tooltip, italic }: LogoBoxProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: '96px',
              height: '56px',
              border: '1px solid #E8E8E6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
              transition: 'opacity 150ms ease, transform 150ms ease, filter 150ms ease',
              opacity: hovered ? 1 : 0.4,
              filter: hovered ? 'grayscale(0)' : 'grayscale(1)',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          >
            {/* Placeholder — replace with SVG when assets arrive */}
            <span
              style={{
                fontSize: '11px',
                color: '#6B6B6B',
                fontWeight: 450,
                fontStyle: italic ? 'italic' : 'normal',
                textAlign: 'center',
                padding: '0 8px',
              }}
            >
              {name}
            </span>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            sideOffset={6}
            className="animate-in fade-in-0 zoom-in-95 slide-in-from-top-1"
            style={{
              background: '#0A0A0A',
              color: '#FAFAF9',
              fontSize: '12px',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: 450,
            }}
          >
            {tooltip ?? name}
            <Tooltip.Arrow style={{ fill: '#0A0A0A' }} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

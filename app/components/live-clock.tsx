'use client'
import { useState, useEffect } from 'react'

export function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).toLowerCase().replace(' ', '')
      setTime(`${t} in Delhi, IN`)
    }
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])

  return <>{time}</>
}

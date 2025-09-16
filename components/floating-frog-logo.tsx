"use client"

import { useEffect, useState } from "react"
import { FrogLogo } from "./frog-logo"

export function FloatingFrogLogo() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
      style={{
        transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl sm:blur-2xl animate-pulse-glow" />
        <FrogLogo
          size={80} // Reduced from 120 for better mobile experience
          className="relative animate-float opacity-20 sm:opacity-30 hover:opacity-60 transition-opacity duration-500 sm:w-[120px] sm:h-[120px]"
        />
      </div>
    </div>
  )
}

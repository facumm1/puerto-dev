"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"
import { Avatar, AvatarImage } from "./ui/avatar"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = getTranslations(language)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "services", label: t.nav.services },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Avatar className="animate-pulse-glow">
              <AvatarImage src="/logo.jpg" alt="Avatar"  />
            </Avatar>

            <span className="text-2xl font-bold text-primary font-sans">Puerto Dev</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground/80 hover:text-black"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

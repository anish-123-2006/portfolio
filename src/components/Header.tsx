import { useState } from 'react'
import { FiMail, FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
  scrollY: number
}

export default function Header({ activeSection, setActiveSection, scrollY }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'portfolio' },
    { label: 'About', id: 'about' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          {/* <span className="logo-text">ANISH AGRAWAL</span> */}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="cta-button" aria-label="Contact">
          <FiMail size={18} />
        </a>
      </div>
    </header>
  )
}

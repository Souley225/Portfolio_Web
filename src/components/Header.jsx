import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/projets', label: 'Projets' },
    { path: '/experience', label: 'Expérience' },
    { path: '/competences', label: 'Compétences' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/articles', label: 'Articles' },
    { path: '/contact', label: 'Contact' },
]

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="header">
            <div className="container header-container">
                <NavLink to="/" className="header-logo" onClick={closeMenu}>
                    <span className="logo-icon">SS</span>
                    <span className="logo-text">Souleymane Sall</span>
                </NavLink>

                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header

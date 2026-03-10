import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(e.target as Node) && 
        hamburgerRef.current && 
        !hamburgerRef.current.contains(e.target as Node) && 
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo — links to main website */}
        <a href="https://www.regalisrealtymedia.com" className="nav-logo">
          <img src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/677588ce72f981235e0deeb9_Regalis%20Realty%20Logo%20Symbol.png" alt="Regalis Realty Media" className="nav-logo-img" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links" id="navLinks">
          <a href="https://www.regalisrealtymedia.com" className="nav-link">Home</a>
          <a href="https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/" className="nav-link" target="_blank" rel="noreferrer">Portfolio</a>
          <a href="https://pricing.regalisrealtymedia.com" className="nav-link" id="nav-pricing">Pricing</a>
          <a href="https://calculator.regalisrealtymedia.com" className="nav-link" id="nav-calculator">Calculator</a>
          <a href="https://catalog.regalisrealtymedia.com" className="nav-link" id="nav-catalog">Catalog</a>
          <a href="https://branding.regalisrealtymedia.com" className="nav-link" id="nav-branding">Branding</a>
          <a href="https://portalguide.regalisrealtymedia.com" className="nav-link active" id="nav-portal">Portal</a>
          <a href="https://www.regalisrealtymedia.com/calendar" className="nav-link">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          ref={hamburgerRef}
          className="nav-hamburger" 
          id="navHamburger" 
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span 
            className="hamburger-line"
            style={isOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}
          ></span>
          <span 
            className="hamburger-line"
            style={isOpen ? { opacity: 0 } : {}}
          ></span>
          <span 
            className="hamburger-line"
            style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className={`mobile-menu ${isOpen ? 'open' : ''}`} 
        id="mobileMenu"
      >
        <a href="https://www.regalisrealtymedia.com" className="mobile-link" onClick={closeMenu}>Home</a>
        <a href="https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/" className="mobile-link" target="_blank" rel="noreferrer" onClick={closeMenu}>Portfolio</a>
        <a href="https://pricing.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-pricing" onClick={closeMenu}>Pricing</a>
        <a href="https://calculator.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-calculator" onClick={closeMenu}>Calculator</a>
        <a href="https://catalog.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-catalog" onClick={closeMenu}>Catalog</a>
        <a href="https://branding.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-branding" onClick={closeMenu}>Branding</a>
        <a href="https://portalguide.regalisrealtymedia.com" className="mobile-link active" id="mobile-nav-portal" onClick={closeMenu}>Portal</a>
        <a href="https://www.regalisrealtymedia.com/calendar" className="mobile-link" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}

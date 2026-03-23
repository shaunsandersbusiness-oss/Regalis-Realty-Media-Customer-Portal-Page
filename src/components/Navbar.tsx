import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', url: 'https://www.regalisrealtymedia.com', target: '_self' },
    { label: 'Portfolio', url: 'https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/', target: '_blank' },
    { label: 'Pricing', url: 'https://pricing.regalisrealtymedia.com', target: '_self' },
    { label: 'Calculator', url: 'https://calculator.regalisrealtymedia.com', target: '_self' },
    { label: 'Catalog', url: 'https://catalog.regalisrealtymedia.com', target: '_self' },
    { label: 'Branding', url: 'https://branding.regalisrealtymedia.com', target: '_self' },
    { label: 'Portal', url: 'https://portal.regalisrealtymedia.com', target: '_self', active: true },
    { label: 'Contact', url: 'https://www.regalisrealtymedia.com/calendar', target: '_self' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[70px] bg-black/85 backdrop-blur-md z-[1000] border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="https://www.regalisrealtymedia.com" className="flex-shrink-0 flex items-center mx-auto md:mx-0">
            <img 
              src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" 
              alt="Regalis Realty Media" 
              className="h-[32px] md:h-[38px] w-auto"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.target}
                className={`px-3 py-2 text-[14px] font-medium transition-colors ${
                  link.active 
                    ? 'text-brand-gold border-b-2 border-brand-gold' 
                    : 'text-brand-text hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-brand-text hover:text-white focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[1001] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#0a0a0a]/97 backdrop-blur-xl z-[1002] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 border-b border-brand-border">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-brand-text hover:text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.target}
              className={`block px-6 py-4 text-[18px] border-b border-brand-border ${
                link.active 
                  ? 'text-brand-gold border-l-4 border-l-brand-gold bg-brand-gold/5' 
                  : 'text-brand-text hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

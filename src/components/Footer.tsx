import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-card text-center py-12 px-6 mt-20 relative z-10 border-t border-brand-border">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <img 
          src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" 
          alt="Regalis Realty Media" 
          className="max-w-[180px] mb-3"
          referrerPolicy="no-referrer"
        />
        <p className="text-[14px] text-brand-gold mb-2 font-sans">Regalis Realty Media</p>
        <p className="text-[13px] text-brand-muted mb-2">
          <a href="mailto:contact@regalisrealtymedia.com" className="text-brand-muted no-underline transition-colors duration-200 hover:text-brand-gold">
            contact@regalisrealtymedia.com
          </a>
          {' · '}
          <a href="tel:9176838034" className="text-brand-muted no-underline transition-colors duration-200 hover:text-brand-gold">
            (917) 683-8034
          </a>
        </p>
        <p className="text-[12px] text-[#666]">All rights reserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

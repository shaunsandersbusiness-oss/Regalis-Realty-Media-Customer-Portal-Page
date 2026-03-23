import React from 'react';

export default function NeedHelp() {
  return (
    <section className="py-[48px] md:py-[80px] relative z-10 fade-in-section">
      <div className="max-w-[700px] mx-auto px-4">
        <div className="bg-brand-card border border-brand-gold/15 rounded-2xl p-7 md:p-10 text-center">
          <h2 className="text-[28px] font-bold text-white mb-2">Need Help?</h2>
          <p className="text-[16px] text-brand-muted mb-7">If you get stuck or want a personal walkthrough, reach out anytime.</p>
          
          <div className="flex flex-col gap-3">
            <a href="https://portalguide.regalisrealtymedia.com" className="flex items-center gap-4 p-4 bg-white/2 border border-brand-border rounded-xl no-underline transition-all duration-200 text-left hover:border-brand-gold/30 hover:bg-brand-gold/5">
              <span className="text-2xl shrink-0">📖</span>
              <div className="flex-1">
                <strong className="block text-[15px] text-white font-semibold">Step-by-Step Guide</strong>
                <span className="text-[13px] text-brand-muted">Written guide with screenshots</span>
              </div>
              <span className="text-brand-gold text-lg shrink-0">→</span>
            </a>
            
            <a href="tel:9176838034" className="flex items-center gap-4 p-4 bg-white/2 border border-brand-border rounded-xl no-underline transition-all duration-200 text-left hover:border-brand-gold/30 hover:bg-brand-gold/5">
              <span className="text-2xl shrink-0">📞</span>
              <div className="flex-1">
                <strong className="block text-[15px] text-white font-semibold">Call or Text Shaun</strong>
                <span className="text-[13px] text-brand-muted">(917) 683-8034</span>
              </div>
              <span className="text-brand-gold text-lg shrink-0">→</span>
            </a>
            
            <a href="mailto:contact@regalisrealtymedia.com" className="flex items-center gap-4 p-4 bg-white/2 border border-brand-border rounded-xl no-underline transition-all duration-200 text-left hover:border-brand-gold/30 hover:bg-brand-gold/5">
              <span className="text-2xl shrink-0">✉️</span>
              <div className="flex-1">
                <strong className="block text-[15px] text-white font-semibold">Email Us</strong>
                <span className="text-[13px] text-brand-muted">contact@regalisrealtymedia.com</span>
              </div>
              <span className="text-brand-gold text-lg shrink-0">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <section className="pt-[150px] pb-[80px] md:pt-[180px] md:pb-[100px] px-4 relative z-10 flex flex-col items-center text-center fade-in-section">
      <div className="max-w-[700px] mx-auto">
        <p className="text-[12px] text-brand-gold uppercase tracking-[3px] font-semibold mb-4">
          YOUR MEDIA HUB
        </p>
        <h1 className="text-[40px] md:text-[52px] text-white font-bold leading-tight mb-6">
          Your Listing Media, All in One Place
        </h1>
        <p className="text-[18px] text-[#D4D4D4] max-w-[560px] mx-auto leading-[1.7] mb-8">
          Download photos, access videos and 3D tours, create marketing materials, place new orders, and track leads — all from your Regalis customer portal.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <a 
            href="https://app.aryeo.com/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-black text-[16px] font-bold rounded-lg no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] hover:-translate-y-[1px] w-full max-w-[320px] md:w-auto"
          >
            Log Into Your Portal →
          </a>
          <a 
            href="#videoGuide" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#333] text-[#D4D4D4] text-[16px] font-semibold rounded-lg no-underline transition-all duration-300 hover:border-brand-gold/40 hover:text-brand-gold w-full max-w-[320px] md:w-auto"
          >
            Watch the Video Guide ↓
          </a>
        </div>
        
        <p className="text-[13px] text-brand-muted">
          First time? Watch the walkthrough below or read the step-by-step guide.
        </p>
      </div>
    </section>
  );
}

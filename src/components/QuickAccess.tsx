import React from 'react';

export default function QuickAccess() {
  const cards = [
    {
      icon: '📸',
      title: 'Download Listing Media',
      description: 'Access all your photos, videos, floor plans, and 3D tours. Choose print quality for brochures or MLS quality for online uploads.'
    },
    {
      icon: '🎬',
      title: 'Videos & 3D Tours',
      description: 'Stream or download your listing videos, virtual tours, and drone footage. Share directly to social media or embed on your website.'
    },
    {
      icon: '📋',
      title: 'Marketing Materials',
      description: 'Create branded social media posts, flyers, postcards, and Instagram stories. Everything auto-populates with your listing details.'
    },
    {
      icon: '🌐',
      title: 'Property Websites',
      description: 'Every listing gets a custom single-property website. View analytics, edit details, and see how it looks on mobile and desktop.'
    },
    {
      icon: '📊',
      title: 'Lead Center',
      description: 'Track every inquiry from your property website. See who reached out, what they asked, and their contact information.'
    },
    {
      icon: '📅',
      title: 'Place New Orders',
      description: 'Book your next shoot directly from the portal. Select services, choose your square footage, pick a date and time.'
    }
  ];

  return (
    <section className="py-[48px] md:py-[80px] relative z-10 fade-in-section">
      <div className="text-center mb-10 px-4">
        <h2 className="text-[28px] text-white font-bold mb-2">Everything in Your Portal</h2>
        <p className="text-[15px] text-brand-muted">Here's what's waiting for you inside</p>
      </div>

      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <div key={index} className="feature-card bg-brand-card border border-brand-border rounded-xl p-6">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-[16px] text-white font-bold mb-2">{card.title}</h3>
              <p className="text-[14px] text-[#D4D4D4] leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://app.aryeo.com/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-black text-[16px] font-bold rounded-lg no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] hover:-translate-y-[1px] w-full max-w-[320px]"
          >
            Log Into Your Portal →
          </a>
        </div>
      </div>
    </section>
  );
}

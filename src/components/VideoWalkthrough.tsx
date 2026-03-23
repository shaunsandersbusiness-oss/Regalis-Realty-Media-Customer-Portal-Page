import React, { useRef } from 'react';

export default function VideoWalkthrough() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const seekTo = (seconds: number) => {
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.loom.com/embed/1ae9743295564b1c85a5badafd923e0c?t=${seconds}`;
      
      const videoSection = document.getElementById('videoGuide');
      if (videoSection) {
        const yOffset = -90;
        const y = videoSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const timestamps = [
    { time: '0:00', seconds: 0, label: 'Intro & Welcome' },
    { time: '0:43', seconds: 43, label: 'Accessing the Portal' },
    { time: '0:50', seconds: 50, label: 'Creating an Account' },
    { time: '1:09', seconds: 69, label: 'Setting Up Your Profile' },
    { time: '1:21', seconds: 81, label: 'Adding Social Links' },
    { time: '1:31', seconds: 91, label: 'Setting Up Teams' },
    { time: '1:53', seconds: 113, label: 'Viewing Your Listings' },
    { time: '2:02', seconds: 122, label: 'Inside a Listing' },
    { time: '2:23', seconds: 143, label: 'Marketing Materials' },
    { time: '2:41', seconds: 161, label: 'Lead Center' },
    { time: '3:16', seconds: 196, label: 'Downloading Media' },
    { time: '3:32', seconds: 212, label: 'Print vs. MLS Downloads' },
    { time: '3:51', seconds: 231, label: 'Placing a New Order' },
    { time: '4:18', seconds: 258, label: 'Filling Out an Order' },
    { time: '5:12', seconds: 312, label: 'Scheduling an Appointment' },
    { time: '5:38', seconds: 338, label: 'Wrap-Up & Contact' },
  ];

  return (
    <section id="videoGuide" className="py-[48px] md:py-[80px] relative z-10 fade-in-section">
      <div className="text-center mb-10 px-4">
        <h2 className="text-[28px] text-white font-bold mb-2">Portal Walkthrough</h2>
        <p className="text-[15px] text-brand-muted">6-minute video — everything you need to know</p>
      </div>

      <div className="max-w-[800px] mx-auto px-4">
        <div className="bg-brand-card border border-brand-gold/15 rounded-2xl p-2 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              ref={iframeRef}
              src="https://www.loom.com/embed/1ae9743295564b1c85a5badafd923e0c" 
              frameBorder="0" 
              allowFullScreen 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mt-8 px-4">
        <h3 className="text-[16px] font-semibold text-white mb-4">Jump to a Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {timestamps.map((ts) => (
            <button 
              key={ts.seconds}
              onClick={() => seekTo(ts.seconds)}
              className="flex items-center gap-3 p-3 bg-brand-card border border-brand-border rounded-lg cursor-pointer transition-all duration-200 text-left hover:border-brand-gold/30 hover:bg-brand-gold/5"
            >
              <span className="text-[13px] font-semibold text-brand-gold whitespace-nowrap min-w-[36px]">
                {ts.time}
              </span>
              <span className="text-[14px] text-[#D4D4D4]">
                {ts.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

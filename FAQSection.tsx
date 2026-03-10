import { useEffect, useState } from 'react';

export default function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
      {/* Layer 1: Gradient Base */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.03) 0%, rgba(26,26,46,0.04) 40%, transparent 70%)'
        }}
      />

      {/* Layer 2: Floating Glow Orbs */}
      <div className="absolute inset-0 z-[2]">
        {/* Orb 1 */}
        <div 
          className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#c9a84c] opacity-[0.03] blur-[180px] animate-float-1"
        />
        {/* Orb 2 */}
        <div 
          className="absolute top-[60%] right-[20%] w-[600px] h-[600px] rounded-full bg-[#1a1a2e] opacity-[0.06] blur-[180px] animate-float-2"
        />
        {/* Orb 3 (Desktop only) */}
        {!isMobile && (
          <div 
            className="absolute top-[30%] left-[60%] w-[700px] h-[700px] rounded-full bg-[#c9a84c] opacity-[0.04] blur-[180px] animate-float-3"
          />
        )}
      </div>

      {/* Layer 3: Gold Dust Particles */}
      <div className="absolute inset-0 z-[3]">
        {Array.from({ length: isMobile ? 6 : 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-[#c9a84c] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `rise-particle ${17 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Layer 4: Horizon Shimmer Line (Desktop only) */}
      {!isMobile && (
        <div 
          className="absolute top-[35%] left-0 right-0 h-[1px] z-[4] animate-shimmer"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.1) 50%, transparent 100%)'
          }}
        />
      )}
    </div>
  );
}

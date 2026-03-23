import React, { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<{ id: number; delay: number; duration: number; left: number; driftX: number }[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Generate particles
    const particleCount = window.innerWidth < 768 ? 6 : 15;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      delay: Math.random() * 15,
      duration: 17 + Math.random() * 10,
      left: Math.random() * 100,
      driftX: -30 + Math.random() * 60,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Layer 1: Gradient Base */}
      <div className="absolute inset-0 bg-layer-1"></div>

      {/* Layer 2: Glow Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2" style={{ width: isMobile ? '400px' : '700px', height: isMobile ? '400px' : '700px' }}></div>
      {!isMobile && <div className="glow-orb orb-3"></div>}

      {/* Layer 3: Gold Dust Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="gold-particle"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            animation: `floatParticle ${p.duration}s linear ${p.delay}s infinite`,
            '--drift-x': `${p.driftX}px`,
          } as React.CSSProperties}
        ></div>
      ))}

      {/* Layer 4: Horizon Shimmer Line */}
      {!isMobile && <div className="shimmer-line"></div>}
    </div>
  );
}

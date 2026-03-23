import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './components/Hero';
import VideoWalkthrough from './components/VideoWalkthrough';
import QuickAccess from './components/QuickAccess';
import NeedHelp from './components/NeedHelp';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(function(el) {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundAnimation />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <VideoWalkthrough />
        <QuickAccess />
        <NeedHelp />
      </main>
      
      <Footer />
    </div>
  );
}

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import GuidesSection from './components/GuidesSection';
import FAQSection from './components/FAQSection';
import HelpCTA from './components/HelpCTA';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <SectionWrapper>
          <VideoSection />
        </SectionWrapper>
        
        <SectionWrapper>
          <GuidesSection />
        </SectionWrapper>
        
        <SectionWrapper>
          <FAQSection />
        </SectionWrapper>
        
        <SectionWrapper>
          <HelpCTA />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

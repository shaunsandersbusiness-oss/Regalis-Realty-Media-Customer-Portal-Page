import { motion } from 'motion/react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar (70px) + some padding
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-[150px] pb-12 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[800px] mx-auto"
      >
        <h1 className="text-[48px] font-bold text-white mb-4 leading-tight">
          Your Customer Portal Guide
        </h1>
        <p className="text-[18px] text-[#D4D4D4] max-w-[600px] mx-auto mb-10 leading-relaxed">
          Everything you need to access, download, and use your listing media. Watch the walkthrough or jump to any section below.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => scrollToSection('video')}
            className="px-5 py-2.5 rounded-full bg-[#0a0a0a] border border-[#c9a84c] text-[#c9a84c] text-[14px] font-medium transition-all hover:bg-[#c9a84c] hover:text-black"
          >
            ▶ Video Walkthrough
          </button>
          <button 
            onClick={() => scrollToSection('guides')}
            className="px-5 py-2.5 rounded-full bg-[#0a0a0a] border border-[#c9a84c] text-[#c9a84c] text-[14px] font-medium transition-all hover:bg-[#c9a84c] hover:text-black"
          >
            📖 Step-by-Step Guides
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="px-5 py-2.5 rounded-full bg-[#0a0a0a] border border-[#c9a84c] text-[#c9a84c] text-[14px] font-medium transition-all hover:bg-[#c9a84c] hover:text-black"
          >
            ❓ FAQ & Troubleshooting
          </button>
        </div>
      </motion.div>
    </section>
  );
}

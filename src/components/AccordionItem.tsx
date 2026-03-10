import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  compact?: boolean;
}

export default function AccordionItem({ title, children, defaultOpen = false, compact = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`guide-card guide-card-glow relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden mb-3 transition-colors duration-300 ${isOpen ? 'border-[#c9a84c]/20' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-left transition-colors duration-200 hover:bg-[#0d0d0d] relative z-10 ${compact ? 'p-4 px-5' : 'p-5 px-6'}`}
      >
        <h3 className={`font-semibold text-white ${compact ? 'text-[15px]' : 'text-[17px]'}`}>
          {title}
        </h3>
        <ChevronDown 
          className={`text-[#c9a84c] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={compact ? 14 : 16}
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <div className={`text-[#D4D4D4] leading-relaxed ${compact ? 'px-5 pb-5 text-[14px]' : 'px-6 pb-6 text-[15px]'}`}>
              <div className="guide-content">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

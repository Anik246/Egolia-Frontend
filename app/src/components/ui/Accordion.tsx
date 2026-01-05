'use client';

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext(): AccordionContextValue {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Accordion components must be used within an Accordion');
  return context;
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  allowMultiple = false,
  defaultOpen = [],
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={cn('space-y-3', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({
  id,
  children,
  className,
}) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(id);

  return (
    <div
      className={cn(
        'rounded-xl border transition-colors duration-200',
        isOpen ? 'border-[#f6c453]/25 bg-white/[0.03]' : 'border-white/10 bg-black/25',
        className
      )}
    >
      {children}
    </div>
  );
};

export const AccordionTrigger: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({
  id,
  children,
  className,
}) => {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.includes(id);

  return (
    <button
      type="button"
      onClick={() => toggleItem(id)}
      className={cn(
        'flex w-full items-center justify-between px-6 py-4 text-left',
        'text-white font-medium',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c453]/35',
        'transition-colors duration-200',
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <ChevronDown className="h-5 w-5 text-gray-400" />
      </motion.div>
    </button>
  );
};

export const AccordionContent: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({
  id,
  children,
  className,
}) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(id);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className={cn('px-6 pb-4 text-gray-300/80', className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

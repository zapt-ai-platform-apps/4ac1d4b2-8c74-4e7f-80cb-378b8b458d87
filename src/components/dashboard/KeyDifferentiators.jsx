import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function KeyDifferentiators() {
  const { selectedStartup } = useAppContext();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading 
        title="Key Differentiators" 
        subtitle="What sets this startup apart in the market"
      />
      <Card>
        <motion.ul 
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {selectedStartup.keyDifferentiators.map((item, index) => (
            <motion.li key={index} className="flex items-start" variants={item}>
              <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white rounded-full font-semibold text-sm">
                {index + 1}
              </span>
              <span className="pt-1">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Card>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function TeamBenchmark() {
  const { selectedStartup } = useAppContext();
  const { teamBenchmarks } = selectedStartup;
  
  if (!teamBenchmarks) {
    return null;
  }
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading 
        title="Team Benchmark Analysis" 
        subtitle="Comparing founder quality to successful leaders in related spaces"
      />
      <Card>
        <motion.div 
          className="space-y-5"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {teamBenchmarks.map((benchmark, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-100 last:border-0 pb-5 last:pb-0"
              variants={item}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-primary-800 text-lg">{benchmark.name}</h3>
                <span className="text-sm bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full border border-secondary-100">
                  Benchmark
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1 italic bg-gray-50 p-2 rounded">"{benchmark.background}"</p>
              <p className="text-sm text-gray-700 mt-3">
                <span className="font-medium">Relevance:</span> {benchmark.relevance}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </motion.div>
  );
}
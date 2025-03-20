import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/shared/Card';

export default function NarrativePreview({ startup, narrative }) {
  const hasContent = Object.values(narrative).some(value => value.trim() !== '');
  
  if (!hasContent) {
    return (
      <Card>
        <motion.div 
          className="text-center py-12 text-gray-500 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <p>Fill in the narrative sections to see your investment story preview here.</p>
        </motion.div>
      </Card>
    );
  }
  
  return (
    <Card>
      <motion.div 
        className="prose max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 pb-2 border-b border-gray-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {startup.name}: Investment Narrative
        </motion.h3>
        
        {narrative.marketInsight && (
          <motion.div 
            className="mb-5 bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Market Insight</h4>
            <p className="text-gray-700">{narrative.marketInsight}</p>
          </motion.div>
        )}
        
        {narrative.competitiveAdvantage && (
          <motion.div 
            className="mb-5 bg-primary-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-primary-800 mb-2">Our Competitive Advantage</h4>
            <p className="text-gray-700">{narrative.competitiveAdvantage}</p>
          </motion.div>
        )}
        
        {narrative.executionStrategy && (
          <motion.div 
            className="mb-5 bg-secondary-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-secondary-800 mb-2">Execution Strategy</h4>
            <p className="text-gray-700">{narrative.executionStrategy}</p>
          </motion.div>
        )}
        
        {narrative.teamStrengths && (
          <motion.div 
            className="mb-5 bg-accent-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-accent-800 mb-2">Team Strengths</h4>
            <p className="text-gray-700">{narrative.teamStrengths}</p>
          </motion.div>
        )}
      </motion.div>
    </Card>
  );
}
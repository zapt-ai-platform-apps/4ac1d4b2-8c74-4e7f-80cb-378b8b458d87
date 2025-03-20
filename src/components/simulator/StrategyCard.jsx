import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/shared/Card';

export default function StrategyCard({ competitor, response, counterStrategy }) {
  return (
    <Card>
      <motion.div 
        className="border-b border-gray-200 pb-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{competitor}'s Response</h3>
        <div className="bg-red-50 text-gray-700 p-4 rounded-lg border-l-4 border-red-300">
          <p>{response}</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h4 className="text-md font-medium text-gray-700 mb-2">Your Counter-Strategy</h4>
        <div className="bg-primary-50 text-gray-700 p-4 rounded-lg border-l-4 border-primary-300">
          <p>{counterStrategy}</p>
        </div>
      </motion.div>
    </Card>
  );
}
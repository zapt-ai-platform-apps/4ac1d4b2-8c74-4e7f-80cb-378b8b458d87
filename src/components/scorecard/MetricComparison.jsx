import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

export default function MetricComparison({ metric, startup }) {
  const isEarlyStage = ['pre-seed', 'seed'].includes(startup.stage);
  const competitors = isEarlyStage 
    ? startup.indirectCompetitors || [] 
    : startup.competitors || [];
  
  // Function to get bar width percentage
  const getBarWidth = (value) => {
    return `${(value / 10) * 100}%`;
  };
  
  // Function to get bar color
  const getBarColor = (value) => {
    if (value >= 8) return 'bg-gradient-to-r from-green-400 to-green-500';
    if (value >= 6) return 'bg-gradient-to-r from-primary-400 to-primary-500';
    if (value >= 4) return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
    return 'bg-gradient-to-r from-red-400 to-red-500';
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{metric.label}</h3>
        <p className="text-sm text-gray-600">{metric.description}</p>
      </div>
      
      <div className="space-y-4">
        {/* Startup bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-base font-medium text-gray-800 flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-primary-500 mr-2"></span>
              {startup.name}
            </span>
            <span className="text-sm font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded-full">
              {startup.metrics[metric.key]}/10
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div 
              className={`h-3 rounded-full ${getBarColor(startup.metrics[metric.key])}`}
              initial={{ width: 0 }}
              animate={{ width: getBarWidth(startup.metrics[metric.key]) }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>
        
        {/* Competitor bars */}
        {competitors.map((competitor, index) => (
          <motion.div 
            key={index}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-base font-medium text-gray-800 flex items-center">
                <span className={`inline-block h-3 w-3 rounded-full mr-2 ${
                  index % 3 === 0 ? 'bg-red-500' : index % 3 === 1 ? 'bg-green-500' : 'bg-yellow-500'
                }`}></span>
                {competitor.name}
                {isEarlyStage && competitor.category && (
                  <span className="text-xs text-gray-500 ml-2 bg-gray-100 px-2 py-0.5 rounded-full">
                    {competitor.category}
                  </span>
                )}
              </span>
              <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                {competitor.metrics[metric.key]}/10
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div 
                className={`h-3 rounded-full ${getBarColor(competitor.metrics[metric.key])}`}
                initial={{ width: 0 }}
                animate={{ width: getBarWidth(competitor.metrics[metric.key]) }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function RatingBar({ value }) {
  // Convert the value (0-10) to a percentage
  const percentage = (value / 10) * 100;
  
  // Determine color based on value
  let colorClass = 'bg-gray-300'; // Default
  
  if (value >= 8) {
    colorClass = 'bg-gradient-to-r from-green-400 to-green-500';
  } else if (value >= 6) {
    colorClass = 'bg-gradient-to-r from-primary-400 to-primary-500';
  } else if (value >= 4) {
    colorClass = 'bg-gradient-to-r from-yellow-400 to-yellow-500';
  } else {
    colorClass = 'bg-gradient-to-r from-red-400 to-red-500';
  }
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <motion.div 
        className={`h-3 rounded-full ${colorClass}`}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
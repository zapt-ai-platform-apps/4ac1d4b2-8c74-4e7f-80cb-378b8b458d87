import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ title, children, className = '' }) {
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}
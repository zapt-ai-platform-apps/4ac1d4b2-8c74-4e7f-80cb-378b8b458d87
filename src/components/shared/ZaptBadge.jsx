import React from 'react';
import { motion } from 'framer-motion';

export default function ZaptBadge() {
  return (
    <motion.a
      href="https://www.zapt.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-primary-700 px-3 py-1 rounded-full bg-primary-50 text-xs font-medium hover:bg-primary-100 transition-colors border border-primary-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Made on ZAPT
    </motion.a>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

export default function StartupSelector() {
  const { startupsData, selectedStartup, setSelectedStartup } = useAppContext();
  
  const handleChange = (e) => {
    const startupId = parseInt(e.target.value);
    const startup = startupsData.find(s => s.id === startupId);
    if (startup) {
      setSelectedStartup(startup);
    }
  };
  
  return (
    <motion.div 
      className="w-full mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center">
        <label htmlFor="startup-selector" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-0 sm:mr-4 sm:w-40">
          Select Startup:
        </label>
        <div className="relative flex-1">
          <select
            id="startup-selector"
            className="w-full p-3 pr-10 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 box-border cursor-pointer bg-white appearance-none"
            value={selectedStartup.id}
            onChange={handleChange}
          >
            {startupsData.map(startup => (
              <option key={startup.id} value={startup.id}>
                {startup.name} - {startup.description}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
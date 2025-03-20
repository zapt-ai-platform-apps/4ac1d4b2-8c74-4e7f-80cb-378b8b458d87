import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function MarketGapVisualization() {
  const { selectedStartup } = useAppContext();
  const { marketGap } = selectedStartup;
  
  if (!marketGap) {
    return null;
  }
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading 
        title="Market Gap Analysis" 
        subtitle="Where this startup fits in the existing landscape"
      />
      <Card>
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2 text-lg">Opportunity Space</h3>
          <motion.p 
            className="text-gray-700 bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {marketGap.description}
          </motion.p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 text-lg">Current Solution Limitations</h3>
          <motion.div 
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {marketGap.currentSolutions.map((solution, index) => (
              <motion.div 
                key={index} 
                className="flex items-start bg-red-50 p-4 rounded-lg border border-red-100"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{solution.category}</div>
                  <div className="text-sm text-gray-600 mt-1">{solution.limitations}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 text-lg">Opportunity Areas</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {marketGap.opportunityAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100 rounded-lg p-4 text-primary-800 shadow-sm"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              >
                {area}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
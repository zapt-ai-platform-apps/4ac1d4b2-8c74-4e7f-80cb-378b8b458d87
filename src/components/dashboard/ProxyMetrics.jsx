import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function ProxyMetrics() {
  const { selectedStartup } = useAppContext();
  const { proxyMetrics } = selectedStartup;
  
  if (!proxyMetrics) {
    return null;
  }
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading 
        title="Growth Potential Proxies" 
        subtitle="Using analogous markets and companies to estimate growth potential"
      />
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 border border-primary-100 shadow-sm"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Market Growth Potential</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-4xl font-bold text-primary-600">
                <CountUp end={proxyMetrics.marketGrowth.annualGrowthRate} duration={2.5} suffix="%" />
              </span>
              <span className="text-sm text-gray-500">annual growth</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Based on {proxyMetrics.marketGrowth.analogousMarket} market, {proxyMetrics.marketGrowth.timeframe}
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-5 border border-secondary-100 shadow-sm"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Customer Acquisition</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-4xl font-bold text-secondary-600">
                <CountUp end={proxyMetrics.customerAcquisition.metricValue} duration={2.5} />
              </span>
              <span className="text-sm text-gray-500">{proxyMetrics.customerAcquisition.unit}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Based on {proxyMetrics.customerAcquisition.analogousCompany} as comparable
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-5 border border-accent-100 shadow-sm"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Expected Retention</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-4xl font-bold text-accent-600">
                <CountUp end={proxyMetrics.retention.metricValue} duration={2.5} suffix="%" />
              </span>
              <span className="text-sm text-gray-500">{proxyMetrics.retention.unit}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Based on {proxyMetrics.retention.analogousCompany} as comparable
            </p>
          </motion.div>
        </div>
        <div className="mt-5 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <p className="italic">Note: For early-stage companies without sufficient historical data, we use analogous markets and comparable companies as proxies.</p>
        </div>
      </Card>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import StartupSelector from '@/components/shared/StartupSelector';
import SectionHeading from '@/components/shared/SectionHeading';
import CompetitorComparison from '@/components/dashboard/CompetitorComparison';
import KeyDifferentiators from '@/components/dashboard/KeyDifferentiators';
import ExecutionAdvantages from '@/components/dashboard/ExecutionAdvantages';
import MarketGapVisualization from '@/components/dashboard/MarketGapVisualization';
import TeamBenchmark from '@/components/dashboard/TeamBenchmark';
import ProxyMetrics from '@/components/dashboard/ProxyMetrics';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function DashboardPage() {
  const { selectedStartup } = useAppContext();
  const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
  
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient font-display">Market Positioning Dashboard</h1>
        <p className="text-xl text-gray-600 mt-3">
          Analyze how startups at any stage position themselves in competitive markets.
        </p>
      </motion.div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title="Company Overview" 
            subtitle="Key information about the selected startup"
          />
          <Card className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-card-hover">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gradient mb-3">{selectedStartup.name}</h2>
              <p className="text-gray-700 mb-5 text-lg">{selectedStartup.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                  whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-gray-600 block mb-1 text-sm">Founded:</span> 
                  <span className="font-semibold text-lg text-gray-800">{selectedStartup.founded}</span>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                  whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-gray-600 block mb-1 text-sm">Total Funding:</span> 
                  <span className="font-semibold text-lg text-gray-800">${selectedStartup.funding}</span>
                </motion.div>
                
                <motion.div 
                  className="col-span-2 bg-primary-50 rounded-lg p-3 border border-primary-100"
                  whileHover={{ y: -3, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-gray-600 block mb-1 text-sm">Stage:</span> 
                  <span className="font-semibold text-lg text-primary-700 capitalize">{selectedStartup.stage}</span>
                </motion.div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title={isEarlyStage ? "Adjacent Solutions" : "Competitive Landscape"} 
            subtitle={isEarlyStage ? "Solutions solving similar problems" : "Overview of main competitors"}
          />
          <Card className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-card-hover">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {isEarlyStage && selectedStartup.indirectCompetitors ? (
                selectedStartup.indirectCompetitors.map((competitor, index) => (
                  <motion.div 
                    key={competitor.id} 
                    className="pb-4 border-b border-gray-100 last:border-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-800">{competitor.name}</h3>
                      <span className="text-xs bg-secondary-50 text-secondary-700 px-2 py-1 rounded-full border border-secondary-100">
                        {competitor.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Founded: {competitor.founded}</p>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Strength Areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {competitor.strengthAreas.map((strength, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                selectedStartup.competitors?.map((competitor, index) => (
                  <motion.div 
                    key={competitor.id} 
                    className="pb-4 border-b border-gray-100 last:border-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  >
                    <h3 className="font-semibold text-gray-800">{competitor.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">Founded: {competitor.founded}</p>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Strength Areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {competitor.strengthAreas.map((strength, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </Card>
        </motion.div>
      </div>
      
      {isEarlyStage && selectedStartup.marketGap && (
        <div className="mb-10">
          <MarketGapVisualization />
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <KeyDifferentiators />
        <ExecutionAdvantages />
      </div>
      
      {isEarlyStage && selectedStartup.teamBenchmarks && (
        <div className="mb-10">
          <TeamBenchmark />
        </div>
      )}
      
      <CompetitorComparison />
      
      {isEarlyStage && selectedStartup.proxyMetrics && (
        <div className="mt-10">
          <ProxyMetrics />
        </div>
      )}
    </div>
  );
}
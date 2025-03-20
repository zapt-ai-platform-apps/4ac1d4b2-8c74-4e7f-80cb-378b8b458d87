import React from 'react';
import { motion } from 'framer-motion';
import StartupSelector from '@/components/shared/StartupSelector';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import RatingBar from '@/components/scorecard/RatingBar';
import MetricComparison from '@/components/scorecard/MetricComparison';
import { useAppContext } from '@/context/AppContext';

export default function DifferentiationScorecard() {
  const { selectedStartup } = useAppContext();
  const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
  
  const metrics = [
    { key: 'teamStrength', label: 'Team Strength', description: 'Quality and experience of the founding and leadership team' },
    { key: 'technology', label: 'Technology', description: 'Technical innovation and infrastructure robustness' },
    { key: 'goToMarket', label: 'Go-to-Market', description: 'Sales, marketing, and distribution effectiveness' },
    { key: 'customerExperience', label: 'Customer Experience', description: 'Quality of product and support experience' },
    { key: 'marketFit', label: 'Market Fit', description: 'Alignment between product offering and market needs' }
  ];
  
  // Calculate the average score for the selected startup
  const avgScore = Object.values(selectedStartup.metrics).reduce((a, b) => a + b, 0) / 
                 Object.values(selectedStartup.metrics).length;
  
  const competitors = isEarlyStage 
    ? selectedStartup.indirectCompetitors || [] 
    : selectedStartup.competitors || [];
  
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient font-display">Differentiation Scorecard</h1>
        <p className="text-xl text-gray-600 mt-3">
          Visual representation of how startups rate against {isEarlyStage ? 'adjacent solutions' : 'competitors'} across key metrics.
        </p>
      </motion.div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title="Overall Rating" 
            subtitle={`${selectedStartup.name}'s competitive position`}
          />
          <Card>
            <motion.div 
              className="text-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 mb-4 relative">
                <svg viewBox="0 0 36 36" className="w-32 h-32 absolute">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E0F2FE"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <motion.path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray={`${avgScore * 10}, 100`}
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: `${avgScore * 10}, 100` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-4xl font-bold text-primary-700 z-10">{avgScore.toFixed(1)}</span>
              </div>
              <h3 className="text-xl font-semibold text-gradient">{selectedStartup.name}</h3>
              <p className="text-sm text-gray-600">Overall Competitive Score</p>
            </motion.div>
            
            <motion.div 
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {metrics.map((metric, index) => (
                <motion.div 
                  key={metric.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className="text-sm font-medium text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                      {selectedStartup.metrics[metric.key]}/10
                    </span>
                  </div>
                  <RatingBar value={selectedStartup.metrics[metric.key]} />
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title={isEarlyStage ? "Comparison with Adjacent Solutions" : "Competitive Comparison"} 
            subtitle={`How you compare to ${isEarlyStage ? 'similar solutions' : 'competitors'} across key metrics`}
          />
          <Card>
            <div className="space-y-10">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={metric.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <MetricComparison 
                    metric={metric}
                    startup={selectedStartup}
                  />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SectionHeading 
          title="Differentiation Insights" 
          subtitle="Key takeaways from the competitive analysis"
        />
        <Card>
          <div className="space-y-5">
            <motion.div 
              className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
                Focus on execution excellence
              </h4>
              <p className="text-gray-700">
                The data shows that successful startups like {selectedStartup.name} don't necessarily win by being first or unique in their market. Instead, they excel at execution across key dimensions like team quality, technology implementation, and customer experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-primary-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1h12z" clipRule="evenodd"></path>
                </svg>
                Identify your strength areas
              </h4>
              <p className="text-gray-700">
                {selectedStartup.name}'s highest scores are in 
                {Object.entries(selectedStartup.metrics)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 2)
                  .map(([key]) => {
                    const metricLabel = metrics.find(m => m.key === key)?.label;
                    return ` ${metricLabel}`;
                  })
                  .join(' and')
                }. These areas represent your strongest competitive advantages and should be emphasized in your investor narrative.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-gradient-to-br from-yellow-50 to-white rounded-lg border border-yellow-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h4 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                Address improvement opportunities
              </h4>
              <p className="text-gray-700">
                The analysis indicates potential to strengthen 
                {Object.entries(selectedStartup.metrics)
                  .sort(([, a], [, b]) => a - b)
                  .slice(0, 1)
                  .map(([key]) => {
                    const metricLabel = metrics.find(m => m.key === key)?.label;
                    return ` ${metricLabel}`;
                  })
                }. Consider allocating resources to improve this dimension of your competitive positioning.
              </p>
            </motion.div>
            
            {competitors.length > 0 && (
              <motion.div 
                className="p-4 bg-gradient-to-br from-secondary-50 to-white rounded-lg border border-secondary-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h4 className="text-lg font-semibold text-secondary-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-secondary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
                  </svg>
                  {isEarlyStage ? "Differentiation from adjacent solutions" : "Leverage competitive differentiation"}
                </h4>
                <p className="text-gray-700">
                  Against {competitors[0].name}, your most significant advantages are in 
                  {Object.keys(selectedStartup.metrics)
                    .filter(key => selectedStartup.metrics[key] > competitors[0].metrics[key])
                    .sort((a, b) => 
                      (selectedStartup.metrics[b] - competitors[0].metrics[b]) - 
                      (selectedStartup.metrics[a] - competitors[0].metrics[a])
                    )
                    .slice(0, 2)
                    .map(key => {
                      const metricLabel = metrics.find(m => m.key === key)?.label;
                      return ` ${metricLabel}`;
                    })
                    .join(' and')
                  }. These should be central to your competitive positioning strategy.
                </p>
              </motion.div>
            )}
            
            {isEarlyStage && (
              <motion.div 
                className="p-4 bg-gradient-to-br from-accent-50 to-white rounded-lg border border-accent-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <h4 className="text-lg font-semibold text-accent-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                  Early-stage advantage
                </h4>
                <p className="text-gray-700">
                  As an early-stage company, your ability to quickly adapt to market feedback gives you an edge against more established solutions that may be slower to change. Focus on emphasizing your specialized approach to the problem compared to the more generalized solutions currently available.
                </p>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
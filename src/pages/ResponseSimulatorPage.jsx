import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StartupSelector from '@/components/shared/StartupSelector';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import StrategyCard from '@/components/simulator/StrategyCard';
import { useAppContext } from '@/context/AppContext';

export default function ResponseSimulatorPage() {
  const { selectedStartup } = useAppContext();
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
  
  const handleStrategySelect = (strategy) => {
    setSelectedStrategy(strategy);
  };
  
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient font-display">Competitive Response Simulator</h1>
        <p className="text-xl text-gray-600 mt-3">
          Anticipate how {isEarlyStage ? 'adjacent solutions' : 'competitors'} might respond to your strategic moves and prepare effective counter-strategies.
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
            title="Strategic Moves" 
            subtitle="Select a potential strategy to explore"
          />
          <div className="space-y-4">
            {selectedStartup.possibleMoves.map((strategy, index) => (
              <motion.div 
                key={strategy.id}
                onClick={() => handleStrategySelect(strategy)}
                className={`bg-white rounded-xl shadow-sm p-5 cursor-pointer transition-all duration-300
                  ${selectedStrategy?.id === strategy.id 
                    ? 'border-2 border-primary-500 shadow-md transform scale-[1.02]' 
                    : 'border border-gray-200 hover:border-primary-300 hover:shadow-md'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">{strategy.strategy}</h3>
                <p className="text-gray-600">{strategy.description}</p>
                
                {selectedStrategy?.id === strategy.id && (
                  <motion.div 
                    className="mt-3 pt-3 border-t border-gray-100 text-primary-600 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    View competitor responses →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title={isEarlyStage ? "Adjacent Solution Responses" : "Competitor Responses"} 
            subtitle={`See how ${isEarlyStage ? 'similar solutions' : 'competitors'} might react and plan your counter-strategy`}
          />
          
          {selectedStrategy ? (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {selectedStrategy.competitorResponses.map((response, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                >
                  <StrategyCard 
                    competitor={response.competitor}
                    response={response.response}
                    counterStrategy={response.counterStrategy}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <Card>
              <motion.div 
                className="text-center py-16 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                </svg>
                <p className="text-lg">Select a strategic move from the left panel to see potential {isEarlyStage ? 'solution provider' : 'competitor'} responses.</p>
              </motion.div>
            </Card>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <SectionHeading 
          title="Strategy Planning Tips" 
          subtitle={`Best practices for ${isEarlyStage ? 'early-stage companies' : 'established startups'} anticipating market responses`}
        />
        <Card>
          {isEarlyStage ? (
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[
                { title: "Identify market gaps", content: "Focus on areas where current solutions fall short rather than trying to compete head-on." },
                { title: "Leverage agility", content: "Your advantage as a small company is the ability to pivot quickly as the market evolves and incumbent solutions respond." },
                { title: "Focus on underserved segments", content: "Identify specific customer segments that larger adjacent solutions are overlooking or serving poorly." },
                { title: "Build strategic partnerships", content: "Partner with complementary solutions rather than competing directly with established players." },
                { title: "Emphasize domain expertise", content: "Highlight your team's specialized knowledge in your targeted problem space versus generalist solutions." }
              ].map((tip, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                >
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white rounded-full font-semibold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.content}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[
                { title: "Think like your competitor", content: "Consider their resources, constraints, and strategic priorities when anticipating responses." },
                { title: "Evaluate timing", content: "Some competitive responses will be immediate, while others might take months or years to implement." },
                { title: "Consider multiple scenarios", content: "Develop plans for best-case, worst-case, and most likely competitive responses." },
                { title: "Focus on execution advantages", content: "Your counter-strategy should leverage areas where you can outexecute competitors." },
                { title: "Plan for resource allocation", content: "Ensure you have the necessary resources to execute your counter-strategy effectively." }
              ].map((tip, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                >
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white rounded-full font-semibold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.content}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
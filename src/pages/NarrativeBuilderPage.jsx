import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StartupSelector from '@/components/shared/StartupSelector';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import NarrativeTemplate from '@/components/narrative/NarrativeTemplate';
import NarrativePreview from '@/components/narrative/NarrativePreview';
import { useAppContext } from '@/context/AppContext';

export default function NarrativeBuilderPage() {
  const { selectedStartup } = useAppContext();
  const [narrative, setNarrative] = useState({
    marketInsight: '',
    competitiveAdvantage: '',
    executionStrategy: '',
    teamStrengths: ''
  });
  
  const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
  const placeholders = {
    marketInsight: isEarlyStage 
      ? "Describe the market gap you've identified and why current solutions are insufficient..." 
      : "Describe your understanding of the market problem and opportunity...",
    competitiveAdvantage: isEarlyStage
      ? "What specific advantages do you have over adjacent solutions in this space?"
      : "What specific advantages do you have over direct competitors?",
    executionStrategy: isEarlyStage
      ? "How will you execute better than established players in adjacent spaces?"
      : "How will you execute better than the competition?",
    teamStrengths: isEarlyStage
      ? "What unique expertise does your team bring that established teams in similar spaces lack?"
      : "What makes your team uniquely qualified to execute on this vision?"
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNarrative(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient font-display">Investment Narrative Builder</h1>
        <p className="text-xl text-gray-600 mt-3">
          Craft a compelling competitive story for investors focused on execution advantages{isEarlyStage ? " for early-stage startups" : ""}.
        </p>
      </motion.div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title="Build Your Narrative" 
            subtitle="Complete the sections below to create your investment story"
          />
          <Card>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="marketInsight" className="block text-sm font-medium text-gray-700 mb-2">
                  Market Insight
                </label>
                <textarea
                  id="marketInsight"
                  name="marketInsight"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg box-border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-800"
                  placeholder={placeholders.marketInsight}
                  value={narrative.marketInsight}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="competitiveAdvantage" className="block text-sm font-medium text-gray-700 mb-2">
                  {isEarlyStage ? "Solution Advantage" : "Competitive Advantage"}
                </label>
                <textarea
                  id="competitiveAdvantage"
                  name="competitiveAdvantage"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg box-border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-800"
                  placeholder={placeholders.competitiveAdvantage}
                  value={narrative.competitiveAdvantage}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="executionStrategy" className="block text-sm font-medium text-gray-700 mb-2">
                  Execution Strategy
                </label>
                <textarea
                  id="executionStrategy"
                  name="executionStrategy"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg box-border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-800"
                  placeholder={placeholders.executionStrategy}
                  value={narrative.executionStrategy}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="teamStrengths" className="block text-sm font-medium text-gray-700 mb-2">
                  Team Strengths
                </label>
                <textarea
                  id="teamStrengths"
                  name="teamStrengths"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg box-border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-800"
                  placeholder={placeholders.teamStrengths}
                  value={narrative.teamStrengths}
                  onChange={handleChange}
                />
              </motion.div>
            </form>
          </Card>
          
          {isEarlyStage && (
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-gradient mb-3">Early-Stage Narrative Tips</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <motion.li 
                    className="flex items-start bg-gray-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">1</span>
                    <span>Focus on the market gap you're addressing, not just product features</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start bg-primary-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-primary-200 text-primary-700 rounded-full text-xs font-semibold">2</span>
                    <span>Emphasize team credentials compared to successful founders in related spaces</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start bg-secondary-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                  >
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-secondary-200 text-secondary-700 rounded-full text-xs font-semibold">3</span>
                    <span>Highlight why incumbents can't easily solve the problem you're addressing</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start bg-accent-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  >
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-accent-200 text-accent-700 rounded-full text-xs font-semibold">4</span>
                    <span>Use analogous markets to demonstrate growth potential</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start bg-yellow-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                  >
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-yellow-200 text-yellow-700 rounded-full text-xs font-semibold">5</span>
                    <span>Articulate a clear "why now" thesis for your timing in the market</span>
                  </motion.li>
                </ul>
              </Card>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading 
            title="Narrative Preview" 
            subtitle="See how your story comes together"
          />
          <NarrativePreview 
            startup={selectedStartup} 
            narrative={narrative}
          />
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SectionHeading 
              title="Example Templates" 
              subtitle="Use these as inspiration for your narrative"
            />
            <NarrativeTemplate startup={selectedStartup} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
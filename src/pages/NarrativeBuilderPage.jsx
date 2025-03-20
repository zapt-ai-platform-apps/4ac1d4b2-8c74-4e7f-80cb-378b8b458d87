import React, { useState } from 'react';
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Investment Narrative Builder</h1>
        <p className="text-gray-600 mt-2">
          Craft a compelling competitive story for investors focused on execution advantages{isEarlyStage ? " for early-stage startups" : ""}.
        </p>
      </div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <SectionHeading 
            title="Build Your Narrative" 
            subtitle="Complete the sections below to create your investment story"
          />
          <Card>
            <form className="space-y-6">
              <div>
                <label htmlFor="marketInsight" className="block text-sm font-medium text-gray-700 mb-1">
                  Market Insight
                </label>
                <textarea
                  id="marketInsight"
                  name="marketInsight"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md box-border"
                  placeholder={placeholders.marketInsight}
                  value={narrative.marketInsight}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="competitiveAdvantage" className="block text-sm font-medium text-gray-700 mb-1">
                  {isEarlyStage ? "Solution Advantage" : "Competitive Advantage"}
                </label>
                <textarea
                  id="competitiveAdvantage"
                  name="competitiveAdvantage"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md box-border"
                  placeholder={placeholders.competitiveAdvantage}
                  value={narrative.competitiveAdvantage}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="executionStrategy" className="block text-sm font-medium text-gray-700 mb-1">
                  Execution Strategy
                </label>
                <textarea
                  id="executionStrategy"
                  name="executionStrategy"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md box-border"
                  placeholder={placeholders.executionStrategy}
                  value={narrative.executionStrategy}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="teamStrengths" className="block text-sm font-medium text-gray-700 mb-1">
                  Team Strengths
                </label>
                <textarea
                  id="teamStrengths"
                  name="teamStrengths"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md box-border"
                  placeholder={placeholders.teamStrengths}
                  value={narrative.teamStrengths}
                  onChange={handleChange}
                />
              </div>
            </form>
          </Card>
          
          {isEarlyStage && (
            <div className="mt-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Early-Stage Narrative Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Focus on the market gap you're addressing, not just product features</li>
                  <li>• Emphasize team credentials compared to successful founders in related spaces</li>
                  <li>• Highlight why incumbents can't easily solve the problem you're addressing</li>
                  <li>• Use analogous markets to demonstrate growth potential</li>
                  <li>• Articulate a clear "why now" thesis for your timing in the market</li>
                </ul>
              </Card>
            </div>
          )}
        </div>
        
        <div>
          <SectionHeading 
            title="Narrative Preview" 
            subtitle="See how your story comes together"
          />
          <NarrativePreview 
            startup={selectedStartup} 
            narrative={narrative}
          />
          
          <div className="mt-6">
            <SectionHeading 
              title="Example Templates" 
              subtitle="Use these as inspiration for your narrative"
            />
            <NarrativeTemplate startup={selectedStartup} />
          </div>
        </div>
      </div>
    </div>
  );
}
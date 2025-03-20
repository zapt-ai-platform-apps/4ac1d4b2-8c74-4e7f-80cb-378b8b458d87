import React from 'react';
import Card from '@/components/shared/Card';

export default function NarrativePreview({ startup, narrative }) {
  const hasContent = Object.values(narrative).some(value => value.trim() !== '');
  
  if (!hasContent) {
    return (
      <Card>
        <div className="text-center py-8 text-gray-500">
          <p>Fill in the narrative sections to see your investment story preview here.</p>
        </div>
      </Card>
    );
  }
  
  return (
    <Card>
      <div className="prose max-w-none">
        <h3 className="text-xl font-bold text-blue-800">{startup.name}: Investment Narrative</h3>
        
        {narrative.marketInsight && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Market Insight</h4>
            <p>{narrative.marketInsight}</p>
          </div>
        )}
        
        {narrative.competitiveAdvantage && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Our Competitive Advantage</h4>
            <p>{narrative.competitiveAdvantage}</p>
          </div>
        )}
        
        {narrative.executionStrategy && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Execution Strategy</h4>
            <p>{narrative.executionStrategy}</p>
          </div>
        )}
        
        {narrative.teamStrengths && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Team Strengths</h4>
            <p>{narrative.teamStrengths}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
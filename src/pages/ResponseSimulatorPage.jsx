import React, { useState } from 'react';
import StartupSelector from '@/components/shared/StartupSelector';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import StrategyCard from '@/components/simulator/StrategyCard';
import { useAppContext } from '@/context/AppContext';

export default function ResponseSimulatorPage() {
  const { selectedStartup } = useAppContext();
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  
  const handleStrategySelect = (strategy) => {
    setSelectedStrategy(strategy);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Competitive Response Simulator</h1>
        <p className="text-gray-600 mt-2">
          Anticipate how competitors might respond to your strategic moves and prepare effective counter-strategies.
        </p>
      </div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <SectionHeading 
            title="Strategic Moves" 
            subtitle="Select a potential strategy to explore"
          />
          <div className="space-y-4">
            {selectedStartup.possibleMoves.map(strategy => (
              <div 
                key={strategy.id}
                onClick={() => handleStrategySelect(strategy)}
                className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all
                  ${selectedStrategy?.id === strategy.id 
                    ? 'border-2 border-blue-500' 
                    : 'border border-gray-200 hover:border-blue-300'}`}
              >
                <h3 className="font-semibold text-gray-800">{strategy.strategy}</h3>
                <p className="text-sm text-gray-600 mt-1">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <SectionHeading 
            title="Competitor Responses" 
            subtitle="See how competitors might react and plan your counter-strategy"
          />
          
          {selectedStrategy ? (
            <div className="space-y-6">
              {selectedStrategy.competitorResponses.map((response, index) => (
                <StrategyCard 
                  key={index}
                  competitor={response.competitor}
                  response={response.response}
                  counterStrategy={response.counterStrategy}
                />
              ))}
            </div>
          ) : (
            <Card>
              <div className="text-center py-12 text-gray-500">
                <p>Select a strategic move from the left panel to see potential competitor responses.</p>
              </div>
            </Card>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <SectionHeading 
          title="Strategy Planning Tips" 
          subtitle="Best practices for anticipating and countering competitive responses"
        />
        <Card>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-blue-100 text-blue-600 rounded-full">1</span>
              <span><strong>Think like your competitor:</strong> Consider their resources, constraints, and strategic priorities when anticipating responses.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-blue-100 text-blue-600 rounded-full">2</span>
              <span><strong>Evaluate timing:</strong> Some competitive responses will be immediate, while others might take months or years to implement.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-blue-100 text-blue-600 rounded-full">3</span>
              <span><strong>Consider multiple scenarios:</strong> Develop plans for best-case, worst-case, and most likely competitive responses.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-blue-100 text-blue-600 rounded-full">4</span>
              <span><strong>Focus on execution advantages:</strong> Your counter-strategy should leverage areas where you can outexecute competitors.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-blue-100 text-blue-600 rounded-full">5</span>
              <span><strong>Plan for resource allocation:</strong> Ensure you have the necessary resources to execute your counter-strategy effectively.</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
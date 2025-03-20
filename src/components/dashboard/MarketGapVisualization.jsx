import React from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function MarketGapVisualization() {
  const { selectedStartup } = useAppContext();
  const { marketGap } = selectedStartup;
  
  if (!marketGap) {
    return null;
  }
  
  return (
    <div>
      <SectionHeading 
        title="Market Gap Analysis" 
        subtitle="Where this startup fits in the existing landscape"
      />
      <Card>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Opportunity Space</h3>
          <p className="text-gray-700">{marketGap.description}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Current Solution Limitations</h3>
          <div className="space-y-2">
            {marketGap.currentSolutions.map((solution, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-1">
                  <div className="font-medium text-gray-700">{solution.category}</div>
                  <div className="text-sm text-gray-600">{solution.limitations}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Opportunity Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {marketGap.opportunityAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-md p-3 text-blue-800"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
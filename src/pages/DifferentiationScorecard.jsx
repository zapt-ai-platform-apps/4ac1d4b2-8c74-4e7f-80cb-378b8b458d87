import React from 'react';
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Differentiation Scorecard</h1>
        <p className="text-gray-600 mt-2">
          Visual representation of how startups rate against {isEarlyStage ? 'adjacent solutions' : 'competitors'} across key metrics.
        </p>
      </div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <SectionHeading 
            title="Overall Rating" 
            subtitle={`${selectedStartup.name}'s competitive position`}
          />
          <Card>
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-800 mb-2">
                <span className="text-3xl font-bold">{avgScore.toFixed(1)}</span>
              </div>
              <h3 className="text-xl font-semibold">{selectedStartup.name}</h3>
              <p className="text-sm text-gray-600">Overall Competitive Score</p>
            </div>
            
            <div className="space-y-4">
              {metrics.map(metric => (
                <div key={metric.key}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className="text-sm font-medium text-gray-700">{selectedStartup.metrics[metric.key]}/10</span>
                  </div>
                  <RatingBar value={selectedStartup.metrics[metric.key]} />
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <SectionHeading 
            title={isEarlyStage ? "Comparison with Adjacent Solutions" : "Competitive Comparison"} 
            subtitle={`How you compare to ${isEarlyStage ? 'similar solutions' : 'competitors'} across key metrics`}
          />
          <Card>
            <div className="space-y-8">
              {metrics.map(metric => (
                <MetricComparison 
                  key={metric.key}
                  metric={metric}
                  startup={selectedStartup}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      <div className="mb-8">
        <SectionHeading 
          title="Differentiation Insights" 
          subtitle="Key takeaways from the competitive analysis"
        />
        <Card>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Focus on execution excellence:</strong> The data shows that successful startups like {selectedStartup.name} don't necessarily win by being first or unique in their market. Instead, they excel at execution across key dimensions like team quality, technology implementation, and customer experience.
            </p>
            
            <p className="text-gray-700">
              <strong>Identify your strength areas:</strong> {selectedStartup.name}'s highest scores are in 
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
            
            <p className="text-gray-700">
              <strong>Address improvement opportunities:</strong> The analysis indicates potential to strengthen 
              {Object.entries(selectedStartup.metrics)
                .sort(([, a], [, b]) => a - b)
                .slice(0, 1)
                .map(([key]) => {
                  const metricLabel = metrics.find(m => m.key === key)?.label;
                  return ` ${metricLabel}`;
                })
              }. Consider allocating resources to improve this dimension of your competitive positioning.
            </p>
            
            {competitors.length > 0 && (
              <p className="text-gray-700">
                <strong>{isEarlyStage ? "Differentiation from adjacent solutions" : "Leverage competitive differentiation"}:</strong> Against {competitors[0].name}, your most significant advantages are in 
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
            )}
            
            {isEarlyStage && (
              <p className="text-gray-700">
                <strong>Early-stage advantage:</strong> As an early-stage company, your ability to quickly adapt to market feedback gives you an edge against more established solutions that may be slower to change. Focus on emphasizing your specialized approach to the problem compared to the more generalized solutions currently available.
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
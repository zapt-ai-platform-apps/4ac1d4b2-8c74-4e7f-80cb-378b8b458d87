import React from 'react';
import { useAppContext } from '@/context/AppContext';

export default function MetricComparison({ metric, startup }) {
  const isEarlyStage = ['pre-seed', 'seed'].includes(startup.stage);
  const competitors = isEarlyStage 
    ? startup.indirectCompetitors || [] 
    : startup.competitors || [];
  
  // Function to get bar width percentage
  const getBarWidth = (value) => {
    return `${(value / 10) * 100}%`;
  };
  
  // Function to get bar color
  const getBarColor = (value) => {
    if (value >= 8) return 'bg-green-500';
    if (value >= 6) return 'bg-blue-500';
    if (value >= 4) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{metric.label}</h3>
        <p className="text-sm text-gray-600">{metric.description}</p>
      </div>
      
      <div className="space-y-3">
        {/* Startup bar */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">{startup.name}</span>
            <span className="text-sm font-medium text-gray-700">{startup.metrics[metric.key]}/10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${getBarColor(startup.metrics[metric.key])}`}
              style={{ width: getBarWidth(startup.metrics[metric.key]) }}
            />
          </div>
        </div>
        
        {/* Competitor bars */}
        {competitors.map((competitor, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">
                {competitor.name}
                {isEarlyStage && competitor.category && (
                  <span className="text-xs text-gray-500 ml-1">({competitor.category})</span>
                )}
              </span>
              <span className="text-sm font-medium text-gray-700">{competitor.metrics[metric.key]}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${getBarColor(competitor.metrics[metric.key])}`}
                style={{ width: getBarWidth(competitor.metrics[metric.key]) }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
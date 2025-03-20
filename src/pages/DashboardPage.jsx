import React from 'react';
import StartupSelector from '@/components/shared/StartupSelector';
import SectionHeading from '@/components/shared/SectionHeading';
import CompetitorComparison from '@/components/dashboard/CompetitorComparison';
import KeyDifferentiators from '@/components/dashboard/KeyDifferentiators';
import ExecutionAdvantages from '@/components/dashboard/ExecutionAdvantages';
import MarketGapVisualization from '@/components/dashboard/MarketGapVisualization';
import TeamBenchmark from '@/components/dashboard/TeamBenchmark';
import ProxyMetrics from '@/components/dashboard/ProxyMetrics';
import { useAppContext } from '@/context/AppContext';

export default function DashboardPage() {
  const { selectedStartup } = useAppContext();
  const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Market Positioning Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Analyze how startups at any stage position themselves in competitive markets.
        </p>
      </div>
      
      <StartupSelector />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SectionHeading 
            title="Company Overview" 
            subtitle="Key information about the selected startup"
          />
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{selectedStartup.name}</h2>
            <p className="text-gray-700 mb-4">{selectedStartup.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Founded:</span> 
                <span className="font-medium ml-1">{selectedStartup.founded}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Funding:</span> 
                <span className="font-medium ml-1">${selectedStartup.funding}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-600">Stage:</span> 
                <span className="font-medium ml-1 capitalize">{selectedStartup.stage}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <SectionHeading 
            title={isEarlyStage ? "Adjacent Solutions" : "Competitive Landscape"} 
            subtitle={isEarlyStage ? "Solutions solving similar problems" : "Overview of main competitors"}
          />
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {isEarlyStage && selectedStartup.indirectCompetitors ? (
                selectedStartup.indirectCompetitors.map(competitor => (
                  <div key={competitor.id} className="pb-3 border-b border-gray-200 last:border-0">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-800">{competitor.name}</h3>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {competitor.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Founded: {competitor.founded}</p>
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Strength Areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {competitor.strengthAreas.map((strength, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                selectedStartup.competitors?.map(competitor => (
                  <div key={competitor.id} className="pb-3 border-b border-gray-200 last:border-0">
                    <h3 className="font-semibold text-gray-800">{competitor.name}</h3>
                    <p className="text-sm text-gray-600">Founded: {competitor.founded}</p>
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Strength Areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {competitor.strengthAreas.map((strength, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      {isEarlyStage && selectedStartup.marketGap && (
        <div className="mb-8">
          <MarketGapVisualization />
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <KeyDifferentiators />
        <ExecutionAdvantages />
      </div>
      
      {isEarlyStage && selectedStartup.teamBenchmarks && (
        <div className="mb-8">
          <TeamBenchmark />
        </div>
      )}
      
      <CompetitorComparison />
      
      {isEarlyStage && selectedStartup.proxyMetrics && (
        <div className="mt-8">
          <ProxyMetrics />
        </div>
      )}
    </div>
  );
}
import React from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function TeamBenchmark() {
  const { selectedStartup } = useAppContext();
  const { teamBenchmarks } = selectedStartup;
  
  if (!teamBenchmarks) {
    return null;
  }
  
  return (
    <div>
      <SectionHeading 
        title="Team Benchmark Analysis" 
        subtitle="Comparing founder quality to successful leaders in related spaces"
      />
      <Card>
        <div className="space-y-4">
          {teamBenchmarks.map((benchmark, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">{benchmark.name}</h3>
                <span className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Benchmark</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{benchmark.background}</p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Relevance:</span> {benchmark.relevance}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
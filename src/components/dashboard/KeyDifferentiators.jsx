import React from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function KeyDifferentiators() {
  const { selectedStartup } = useAppContext();
  
  return (
    <div>
      <SectionHeading 
        title="Key Differentiators" 
        subtitle="What sets this startup apart in the market"
      />
      <Card>
        <ul className="space-y-3">
          {selectedStartup.keyDifferentiators.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-blue-100 text-blue-600 rounded-full">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
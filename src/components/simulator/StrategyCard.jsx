import React from 'react';
import Card from '@/components/shared/Card';

export default function StrategyCard({ competitor, response, counterStrategy }) {
  return (
    <Card>
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{competitor}'s Response</h3>
        <p className="text-gray-600 mt-1">{response}</p>
      </div>
      
      <div>
        <h4 className="text-md font-medium text-gray-700">Your Counter-Strategy</h4>
        <p className="text-gray-600 mt-1">{counterStrategy}</p>
      </div>
    </Card>
  );
}
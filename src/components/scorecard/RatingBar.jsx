import React from 'react';

export default function RatingBar({ value }) {
  // Convert the value (0-10) to a percentage
  const percentage = (value / 10) * 100;
  
  // Determine color based on value
  let colorClass = 'bg-gray-300'; // Default
  
  if (value >= 8) {
    colorClass = 'bg-green-500';
  } else if (value >= 6) {
    colorClass = 'bg-blue-500';
  } else if (value >= 4) {
    colorClass = 'bg-yellow-500';
  } else {
    colorClass = 'bg-red-500';
  }
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${colorClass}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
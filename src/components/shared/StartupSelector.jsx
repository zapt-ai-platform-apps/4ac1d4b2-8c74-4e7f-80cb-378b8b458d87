import React from 'react';
import { useAppContext } from '@/context/AppContext';

export default function StartupSelector() {
  const { startupsData, selectedStartup, setSelectedStartup } = useAppContext();
  
  const handleChange = (e) => {
    const startupId = parseInt(e.target.value);
    const startup = startupsData.find(s => s.id === startupId);
    if (startup) {
      setSelectedStartup(startup);
    }
  };
  
  return (
    <div className="w-full mb-6">
      <label htmlFor="startup-selector" className="block text-sm font-medium text-gray-700 mb-1">
        Select Startup
      </label>
      <select
        id="startup-selector"
        className="w-full p-2 border border-gray-300 rounded-md box-border cursor-pointer bg-white"
        value={selectedStartup.id}
        onChange={handleChange}
      >
        {startupsData.map(startup => (
          <option key={startup.id} value={startup.id}>
            {startup.name} - {startup.description}
          </option>
        ))}
      </select>
    </div>
  );
}
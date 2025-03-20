import React, { createContext, useContext, useState } from 'react';
import { startupsData } from '@/data/startupsData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedStartup, setSelectedStartup] = useState(startupsData[0]);
  const [selectedCompetitors, setSelectedCompetitors] = useState(startupsData[0].competitors);

  const value = {
    startupsData,
    selectedStartup,
    setSelectedStartup,
    selectedCompetitors,
    setSelectedCompetitors,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
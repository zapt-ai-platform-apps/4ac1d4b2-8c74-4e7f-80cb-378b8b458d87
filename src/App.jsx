import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from '@/pages/DashboardPage';
import NarrativeBuilderPage from '@/pages/NarrativeBuilderPage';
import ResponseSimulatorPage from '@/pages/ResponseSimulatorPage';
import DifferentiationScorecard from '@/pages/DifferentiationScorecard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AppProvider } from '@/context/AppContext';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <AppProvider>
        <Router>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/narrative-builder" element={<NarrativeBuilderPage />} />
              <Route path="/response-simulator" element={<ResponseSimulatorPage />} />
              <Route path="/differentiation-scorecard" element={<DifferentiationScorecard />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardPage from '@/pages/DashboardPage';
import NarrativeBuilderPage from '@/pages/NarrativeBuilderPage';
import ResponseSimulatorPage from '@/pages/ResponseSimulatorPage';
import DifferentiationScorecard from '@/pages/DifferentiationScorecard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AppProvider } from '@/context/AppContext';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <AppProvider>
        <Router>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DashboardPage />
                  </motion.div>
                } />
                <Route path="/narrative-builder" element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <NarrativeBuilderPage />
                  </motion.div>
                } />
                <Route path="/response-simulator" element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ResponseSimulatorPage />
                  </motion.div>
                } />
                <Route path="/differentiation-scorecard" element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DifferentiationScorecard />
                  </motion.div>
                } />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
}
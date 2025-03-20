import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

// Register required Chart.js components
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

export default function CompetitorComparison() {
  const { selectedStartup } = useAppContext();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Prepare data for the chart
    const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
    const competitors = isEarlyStage 
      ? selectedStartup.indirectCompetitors || [] 
      : selectedStartup.competitors || [];
    
    const metrics = [
      'teamStrength',
      'technology',
      'goToMarket',
      'customerExperience',
      'marketFit'
    ];
    
    const labels = [
      'Team Strength',
      'Technology',
      'Go-to-Market',
      'Customer Experience',
      'Market Fit'
    ];
    
    const datasets = [
      {
        label: selectedStartup.name,
        data: metrics.map(metric => selectedStartup.metrics[metric]),
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        borderColor: 'rgba(14, 165, 233, 1)',
        pointBackgroundColor: 'rgba(14, 165, 233, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 2,
      },
      ...competitors.map((competitor, index) => {
        const colors = [
          { border: 'rgba(239, 68, 68, 1)', bg: 'rgba(239, 68, 68, 0.2)' },
          { border: 'rgba(16, 185, 129, 1)', bg: 'rgba(16, 185, 129, 0.2)' },
          { border: 'rgba(217, 119, 6, 1)', bg: 'rgba(217, 119, 6, 0.2)' },
          { border: 'rgba(139, 92, 246, 1)', bg: 'rgba(139, 92, 246, 0.2)' },
        ];
        return {
          label: competitor.name + (isEarlyStage && competitor.category ? ` (${competitor.category})` : ''),
          data: metrics.map(metric => competitor.metrics[metric]),
          backgroundColor: colors[index % colors.length].bg,
          borderColor: colors[index % colors.length].border,
          pointBackgroundColor: colors[index % colors.length].border,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: colors[index % colors.length].border,
          borderWidth: 2,
        };
      })
    ];
    
    // Delay chart creation for animation effect
    const timer = setTimeout(() => {
      if (chartRef.current) {
        // Create new chart
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: { labels, datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                min: 0,
                max: 10,
                ticks: {
                  stepSize: 2,
                  backdropColor: 'transparent',
                  color: 'rgba(107, 114, 128, 0.8)',
                  font: {
                    family: "'Inter var', sans-serif",
                    size: 10
                  }
                },
                grid: {
                  color: 'rgba(107, 114, 128, 0.2)'
                },
                angleLines: {
                  color: 'rgba(107, 114, 128, 0.2)'
                },
                pointLabels: {
                  color: 'rgba(17, 24, 39, 0.9)',
                  font: {
                    family: "'Inter var', sans-serif",
                    size: 12,
                    weight: '500'
                  }
                }
              }
            },
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: {
                    family: "'Inter var', sans-serif",
                    size: 12
                  },
                  usePointStyle: true,
                  padding: 20
                }
              },
              tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#111827',
                bodyColor: '#4B5563',
                borderColor: 'rgba(229, 231, 235, 1)',
                borderWidth: 1,
                padding: 12,
                boxWidth: 10,
                usePointStyle: true,
                boxHeight: 10,
                bodyFont: {
                  family: "'Inter var', sans-serif",
                  size: 12
                },
                titleFont: {
                  family: "'Inter var', sans-serif",
                  size: 14,
                  weight: 'bold'
                },
                callbacks: {
                  label: function(context) {
                    return `${context.dataset.label}: ${context.raw}/10`;
                  }
                }
              }
            },
            elements: {
              line: {
                tension: 0.3
              }
            },
            animation: {
              duration: 1500,
              easing: 'easeOutQuart'
            }
          }
        });
      }
    }, 400);
    
    return () => {
      clearTimeout(timer);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedStartup]);
  
  const isEarlyStage = ['pre-seed', 'seed'].includes(selectedStartup.stage);
  const subtitle = isEarlyStage 
    ? "Performance metrics against adjacent solutions in related spaces"
    : "Performance metrics against key competitors";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <SectionHeading 
        title={isEarlyStage ? "Indirect Competitor Comparison" : "Competitive Comparison"}
        subtitle={subtitle}
      />
      <Card className="h-[450px]">
        <canvas ref={chartRef} />
      </Card>
      {isEarlyStage && (
        <motion.div 
          className="mt-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="italic">Note: For early-stage companies, we analyze adjacent solutions that solve similar problems rather than direct competitors.</p>
        </motion.div>
      )}
    </motion.div>
  );
}
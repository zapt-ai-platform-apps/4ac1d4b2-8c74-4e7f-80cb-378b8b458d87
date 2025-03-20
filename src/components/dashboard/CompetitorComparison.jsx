import React, { useEffect, useRef } from 'react';
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
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      },
      ...competitors.map((competitor, index) => {
        const colors = [
          { border: 'rgba(239, 68, 68, 1)', bg: 'rgba(239, 68, 68, 0.2)' },
          { border: 'rgba(16, 185, 129, 1)', bg: 'rgba(16, 185, 129, 0.2)' },
          { border: 'rgba(217, 119, 6, 1)', bg: 'rgba(217, 119, 6, 0.2)' }
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
        };
      })
    ];
    
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
              backdropColor: 'transparent'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.raw}/10`;
              }
            }
          }
        }
      }
    });
    
    return () => {
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
    <div>
      <SectionHeading 
        title={isEarlyStage ? "Indirect Competitor Comparison" : "Competitive Comparison"}
        subtitle={subtitle}
      />
      <Card className="h-96">
        <canvas ref={chartRef} />
      </Card>
      {isEarlyStage && (
        <div className="mt-2 text-sm text-gray-600">
          <p>Note: For early-stage companies, we analyze adjacent solutions that solve similar problems rather than direct competitors.</p>
        </div>
      )}
    </div>
  );
}
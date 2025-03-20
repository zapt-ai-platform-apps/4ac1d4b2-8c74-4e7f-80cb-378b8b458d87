import React from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/shared/Card';
import { useAppContext } from '@/context/AppContext';

export default function ProxyMetrics() {
  const { selectedStartup } = useAppContext();
  const { proxyMetrics } = selectedStartup;
  
  if (!proxyMetrics) {
    return null;
  }
  
  return (
    <div>
      <SectionHeading 
        title="Growth Potential Proxies" 
        subtitle="Using analogous markets and companies to estimate growth potential"
      />
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Market Growth Potential</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-3xl font-bold text-blue-700">{proxyMetrics.marketGrowth.annualGrowthRate}%</span>
              <span className="text-sm text-gray-500">annual growth</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on {proxyMetrics.marketGrowth.analogousMarket} market, {proxyMetrics.marketGrowth.timeframe}
            </p>
          </div>
          
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Customer Acquisition</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-3xl font-bold text-blue-700">{proxyMetrics.customerAcquisition.metricValue}</span>
              <span className="text-sm text-gray-500">{proxyMetrics.customerAcquisition.unit}</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on {proxyMetrics.customerAcquisition.analogousCompany} as comparable
            </p>
          </div>
          
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Expected Retention</h3>
            <div className="flex items-end justify-between mb-2">
              <span className="text-3xl font-bold text-blue-700">{proxyMetrics.retention.metricValue}%</span>
              <span className="text-sm text-gray-500">{proxyMetrics.retention.unit}</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on {proxyMetrics.retention.analogousCompany} as comparable
            </p>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Note: For early-stage companies without sufficient historical data, we use analogous markets and comparable companies as proxies.</p>
        </div>
      </Card>
    </div>
  );
}
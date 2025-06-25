import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LineChartSection from '@/components/Dashboard/LineChartSection';
import ProfitLossTable from '@/components/Dashboard/ProfitLossTable';
import RevenueBreakdown from '@/components/Dashboard/RevenueBreakdown';
import StatCardGrid from '@/components/Dashboard/StatCardGrid';

/**
 * The main dashboard overview page.
 * 
 * This page serves as the central hub for the financial dashboard, composing
 * various data visualization and summary components within a consistent application layout.
 * It follows a modular approach, where each major section of the dashboard
 * (e.g., stats, charts, tables) is a self-contained component.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Section 1: Key Performance Indicator (KPI) Cards */}
        <StatCardGrid />

        {/* Section 2: Monthly Profit/Loss Analysis Chart */}
        <LineChartSection />

        {/* Section 3: Revenue Breakdown by Type and Top Clients */}
        <RevenueBreakdown />

        {/* Section 4: Detailed Monthly Profit & Loss Statement Table */}
        <ProfitLossTable />
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;

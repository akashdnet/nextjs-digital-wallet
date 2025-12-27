"use client";

import OverviewCards from "./OverviewCards";
import OverviewCharts from "./OverviewCharts";
import TransactionHistory from "./TransactionHistory";

export default function UserDashboardOverview() {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-4xl font-bold mb-12 text-center shadow p-4 sticky top-0 z-10 bg-white">Overview</h2>
            <OverviewCards />
            <OverviewCharts />
            <TransactionHistory />
        </div>
    );
}

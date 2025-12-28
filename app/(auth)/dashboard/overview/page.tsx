
import { BASE_URL } from "@/app/servers/data";
import { overviewData } from "@/app/servers/user";
import OverviewCards from "./OverviewCards";
import OverviewCharts from "./OverviewCharts";
import TransactionHistory from "./TransactionHistory";
import { OverviewData } from "./type";

export default async function UserDashboardOverview() {
    const res = await overviewData();
    const data: OverviewData = res?.data;

    console.log(`
        
        
        
        base url`, BASE_URL)

    if (!data) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-red-600">Failed to load overview data</h2>
                <p className="text-gray-500">Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-4xl font-bold mb-12 text-center shadow p-4 sticky top-0 z-10 bg-white">Overview</h2>
            <OverviewCards data={data} />
            <OverviewCharts data={data} />
            <TransactionHistory data={data} />
        </div>
    );
}

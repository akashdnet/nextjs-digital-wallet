"use client";

import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { lineData, pieData } from "./overviewData";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function OverviewCharts() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center mx-auto gap-6 ">
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Monthly Spending Trend</h2>
                <Line data={lineData} />
            </div>
            <div className="bg-white p-4  rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Expense Distribution</h2>
                <Pie data={pieData} />
            </div>
        </div>
    );
}

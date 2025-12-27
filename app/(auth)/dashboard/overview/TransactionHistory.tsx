"use client";

import { Button } from "@/components/ui/button";
import { transactions } from "./overviewData";

export default function TransactionHistory() {
    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Transaction History</h2>
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Method</th>
                        <th className="text-left py-2">To</th>
                        <th className="text-left py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx) => (
                        <tr key={tx.id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{tx.date}</td>
                            <td className="py-2">{tx.Method}</td>
                            <td className="py-2">{tx.To}</td>
                            <td className="py-2">৳ {tx.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <Button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
                    View All
                </Button>
            </div>
        </div>
    );
}

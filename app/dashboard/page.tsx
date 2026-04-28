"use client";

import Navbar from "../../components/Navbar";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const savingsData = [
    { year: "2018", savings: 200000 },
    { year: "2019", savings: 400000 },
    { year: "2020", savings: 800000 },
    { year: "2021", savings: 1200000 },
    { year: "2022", savings: 1600000 }
];

const efficiencyData = [
    { year: "2018", efficiency: 10 },
    { year: "2019", efficiency: 15 },
    { year: "2020", efficiency: 20 },
    { year: "2021", efficiency: 25 },
    { year: "2022", efficiency: 30 }
];

export default function Dashboard() {
    return (
        <main className="bg-[#0B0F19] text-white min-h-screen">

            <Navbar />

            <section className="px-10 py-20 max-w-6xl mx-auto">

                <h1 className="text-5xl font-bold mb-12">
                    Impact Dashboard
                </h1>

                {/* KPI CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <p className="text-gray-400">Total Savings</p>
                        <h2 className="text-2xl font-bold">$1.6M+</h2>
                    </div>
                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <p className="text-gray-400">Efficiency Gain</p>
                        <h2 className="text-2xl font-bold">30%</h2>
                    </div>
                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <p className="text-gray-400">FTE Managed</p>
                        <h2 className="text-2xl font-bold">1200+</h2>
                    </div>
                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <p className="text-gray-400">Processes Automated</p>
                        <h2 className="text-2xl font-bold">80%+</h2>
                    </div>
                </div>

                {/* CHARTS */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Savings Chart */}
                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <h2 className="text-xl mb-4">Cost Savings</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={savingsData}>
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="savings" stroke="#3B82F6" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Efficiency Chart */}
                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <h2 className="text-xl mb-4">Efficiency Improvement</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={efficiencyData}>
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="efficiency" fill="#10B981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </section>

        </main>
    );
}
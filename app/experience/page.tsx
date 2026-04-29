"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
const experiences = [
    {
        company: "HSBC",
        role: "AVP – Business Management (CIB COO)",
        period: "2015 – 2025",
        details: [
            "Managed 1200+ FTE across global markets",
            "Delivered $1.6M+ cost savings",
            "Built KPI/KRI governance frameworks",
            "Led AI & automation-driven reporting transformation"
        ]
    },
    {
        company: "American Express",
        role: "Analyst",
        period: "2014 – 2015",
        details: [
            "Managed VIP customer portfolios",
            "Built performance reporting dashboards",
            "Analyzed trends and service metrics"
        ]
    },
    {
        company: "Dell",
        role: "Accounts Receivable Associate",
        period: "2012 – 2014",
        details: [
            "Managed enterprise financial portfolios",
            "Performed credit analysis and billing optimization"
        ]
    }
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617] text-white min-h-screen">
            <Navbar />

            <section className="px-10 py-20 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold mb-12">Experience</h1>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] p-6 rounded-2xl cursor-pointer hover:border hover:border-blue-500 transition"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <h2 className="text-2xl font-semibold">{exp.role}</h2>
                            <p className="text-gray-400">
                                {exp.company} • {exp.period}
                            </p>

                            {openIndex === index && (
                                <ul className="mt-4 space-y-2 text-gray-300">
                                    {exp.details.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
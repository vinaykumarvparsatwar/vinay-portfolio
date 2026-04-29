"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";

const experiences = [
    {
        company: "HSBC",
        role: "AVP – Business Management (CIB COO)",
        period: "2015 – 2025",
        details: [
            "Managed 1200+ FTE across global markets",
            "Delivered $1.9M total cost savings ($1.6M headcount + $300K infra)",
            "Built KPI/KRI governance frameworks",
            "Improved reporting efficiency by 30%",
            "Developed unified headcount dashboard",
            "Led AI & automation-driven reporting transformation",
        ],
    },
    {
        company: "American Express",
        role: "Analyst",
        period: "2014 – 2015",
        details: [
            "Managed VIP customer portfolios",
            "Built performance reporting dashboards",
            "Analyzed trends and service metrics",
        ],
    },
    {
        company: "Dell",
        role: "Accounts Receivable Associate",
        period: "2012 – 2014",
        details: [
            "Managed enterprise financial portfolios",
            "Performed credit analysis and billing optimization",
        ],
    },
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617] text-white min-h-screen">
            <Navbar />

            <section className="px-10 py-20 max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold mb-12">Experience</h1>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <FadeIn key={index}>
                            <div
                                className="border-l-4 border-blue-500 pl-6 py-6 relative cursor-pointer hover:translate-x-2 transition-all duration-300"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-3 top-6 w-4 h-4 bg-blue-500 rounded-full"></span>

                                {/* Role */}
                                <h2 className="text-2xl font-semibold">{exp.role}</h2>

                                {/* Company */}
                                <p className="text-gray-400">
                                    {exp.company} • {exp.period}
                                </p>

                                {/* Expandable Details */}
                                {openIndex === index && (
                                    <ul className="mt-4 space-y-2 text-gray-300">
                                        {exp.details.map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </main>
    );
}
"use client";

import Navbar from "../../components/Navbar";

const experiences = [
    {
        company: "HSBC",
        logo: "/hsbc.png",
        roles: [
            {
                title: "AVP – Business Management",
                period: "2024 – 2025",
                highlights: [
                    "$1.9M cost savings delivered",
                    "Led 1200+ FTE across global markets",
                    "Built KPI/KRI governance frameworks",
                    "AI-enabled reporting transformation",
                ],
            },
            {
                title: "Business Analyst",
                period: "2022 – 2024",
                highlights: [
                    "Zero-revert change delivery",
                    "Led BRD/FRD & process design",
                    "Improved testing efficiency",
                ],
            },
            {
                title: "Business Manager",
                period: "2021 – 2022",
                highlights: [
                    "Managed 600+ FTE",
                    "100% billing accuracy",
                    "Automated billing process",
                ],
            },
            {
                title: "Assistant Manager",
                period: "2015 – 2021",
                highlights: [
                    "Reduced rework 34% → 14%",
                    "Built LMS system",
                    "Led AML/KYC/FCC compliance",
                ],
            },
        ],
    },
];

export default function Experience() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <section className="px-10 py-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-10">Experience</h1>

                {experiences.map((company, index) => (
                    <div key={index} className="mb-12">

                        {/* Company Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={company.logo}
                                className="w-12 h-12 bg-white p-1 rounded"
                                alt={company.company}
                            />
                            <h2 className="text-2xl font-bold">
                                {company.company}
                            </h2>
                        </div>

                        {/* Timeline */}
                        <div className="border-l-2 border-gray-700 pl-6 space-y-6">
                            {company.roles.map((role, i) => (
                                <div key={i} className="relative">

                                    {/* Dot */}
                                    <span className="absolute -left-3 top-2 w-3 h-3 bg-blue-500 rounded-full"></span>

                                    <h3 className="text-xl font-semibold">
                                        {role.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {role.period}
                                    </p>

                                    <ul className="mt-2 text-gray-300 space-y-1">
                                        {role.highlights.map((item, j) => (
                                            <li key={j}>• {item}</li>
                                        ))}
                                    </ul>

                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </section>
        </main>
    );
}
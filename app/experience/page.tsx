"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";

const experiences = [
    {
        company: "HSBC",
        logo: "/hsbc.png",
        roles: [
            {
                title: "AVP – Business Management",
                period: "2024 – 2025",
                highlights: [
                    "$1.9M cost savings delivered across workforce & infrastructure",
                    "Led 1200+ FTE across global markets (India, China, Poland, Egypt, Malaysia)",
                    "Built enterprise KPI/KRI governance frameworks",
                    "Led AI-enabled reporting & automation transformation",
                ],
            },
            {
                title: "Business Analyst",
                period: "2022 – 2024",
                highlights: [
                    "Delivered zero-rework change implementations",
                    "Led BRD/FRD documentation and process redesign",
                    "Improved SIT/UAT efficiency and delivery quality",
                ],
            },
            {
                title: "Business Manager",
                period: "2021 – 2022",
                highlights: [
                    "Managed 600+ FTE workforce and financial governance",
                    "Achieved 100% billing accuracy across operations",
                    "Automated billing workflows saving 7+ hours/month",
                ],
            },
            {
                title: "Assistant Manager",
                period: "2015 – 2021",
                highlights: [
                    "Reduced rework from 34% to 14%",
                    "Built Leave Management System adopted org-wide",
                    "Led AML/KYC/FCC compliance and audit readiness",
                ],
            },
        ],
    },
];

export default function Experience() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <section className="px-6 md:px-10 py-20 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-16">
                    Experience
                </h1>

                {experiences.map((company, index) => (
                    <div key={index} className="mb-20">

                        {/* 🔷 Company Header */}
                        <div className="flex items-center gap-5 mb-12">
                            <div className="bg-white p-3 rounded-xl shadow-lg">
                                <Image
                                    src={company.logo}
                                    alt={company.company}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">
                                    {company.company}
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    Global Banking & Financial Services
                                </p>
                            </div>
                        </div>

                        {/* 🔷 Timeline */}
                        <div className="relative pl-8 space-y-12">

                            {/* Vertical Line */}
                            <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

                            {company.roles.map((role, i) => (
                                <div key={i} className="relative group">

                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[14px] top-3 w-4 h-4 bg-blue-500 rounded-full border-4 border-black group-hover:scale-125 transition"></div>

                                    {/* Card */}
                                    <div className="bg-gradient-to-br from-[#111827] to-[#020617] p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">

                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl md:text-2xl font-semibold">
                                                {role.title}
                                            </h3>
                                            <span className="text-sm text-gray-400">
                                                {role.period}
                                            </span>
                                        </div>

                                        <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                                            {role.highlights.map((item, j) => (
                                                <li key={j} className="flex gap-2">
                                                    <span className="text-blue-400">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
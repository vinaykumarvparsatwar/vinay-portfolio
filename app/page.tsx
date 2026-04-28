import KPI from "../components/KPI";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      <Navbar />

      <section className="px-10 py-20 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Vinay Kumar Parsatwar
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mb-8">
          Governance & Transformation Leader | AI-Driven Operations |
          Banking & COO Strategy
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            View Experience
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-xl">
            Download Resume
          </button>
        </div>
      </section>

      <section className="px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <KPI title="Experience" value="15+ Years" />
          <KPI title="FTE Managed" value="1200+" />
          <KPI title="Cost Savings" value="$1.6M+" />
          <KPI title="Efficiency Gain" value="30%" />
        </div>
      </section>

    </main>
  );
}
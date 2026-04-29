import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />
      <div className="absolute top-20 left-10 flex gap-3 text-xs z-10">
        <span className="border px-3 py-1 rounded-full">Governance</span>
        <span className="border px-3 py-1 rounded-full">AI Ops</span>
        <span className="border px-3 py-1 rounded-full">COO Strategy</span>
      </div>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <Image
          src="/profile.jpg"
          alt="Vinay"
          fill
          priority
          className="object-contain"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10 animate-fadeIn">

          <h1 className="text-[90px] md:text-[140px] font-extrabold tracking-tight leading-none">
            <span className="block">VINAY</span>
            <span className="block text-gray-400">PARSATWAR</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Delivered $1.9M+ cost savings • Led 1200+ FTE across global markets •
            Built AI-enabled governance, KPI frameworks, and real-time reporting systems
          </p>

        </div>

      </section>
      <section className="px-10 py-16 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-3xl font-bold">1200+</h2>
            <p className="text-gray-400">FTE Managed</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">$1.9M+</h2>
            <p className="text-gray-400">Cost Savings Delivered</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">30%</h2>
            <p className="text-gray-400">Reporting Efficiency Gain</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="text-gray-400">Years Experience</p>
          </div>

        </div>
      </section>
    </main>
  );
}
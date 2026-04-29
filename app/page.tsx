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
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10 animate-fadeIn">

          <h1 className="text-[90px] md:text-[140px] font-extrabold tracking-tight leading-none">
            <span className="block">VINAY</span>
            <span className="block text-gray-400">PARSATWAR</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Governance Leader • AI-Driven Operations • COO Strategy
          </p>

        </div>

      </section>

    </main>
  );
}
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <img
          src="/profile.jpg"
          alt="Vinay"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10">

          <h1 className="text-[80px] md:text-[120px] font-bold leading-none">
            VINAY
          </h1>

          <h1 className="text-[80px] md:text-[120px] font-bold leading-none text-gray-300">
            PARSATWAR
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Governance Leader • AI-Driven Operations • COO Strategy
          </p>

        </div>

      </section>

    </main>
  );
}
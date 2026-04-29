import Navbar from "../../components/Navbar";

export default function About() {
    return (
        <main className="bg-[#0B0F19] text-white min-h-screen">

            <Navbar />

            <section className="px-10 py-20 max-w-5xl mx-auto">

                <h1 className="text-5xl font-bold mb-8">
                    About Me
                </h1>

                <p className="text-gray-400 leading-8 mb-6">
                    I am a governance and transformation leader with over 15 years of
                    experience across global banking operations, specializing in
                    building scalable operating models, KPI-driven performance systems,
                    and enterprise governance frameworks.
                </p>

                <p className="text-gray-400 leading-8 mb-6">
                    My work spans multi-market environments including India, China,
                    Poland, Malaysia, and Egypt, where I have led large-scale teams
                    and driven strategic initiatives across compliance, financial
                    management, and operational excellence.
                </p>

                <p className="text-gray-400 leading-8 mb-6">
                    I combine governance discipline with modern AI and automation tools
                    to enhance decision-making, improve transparency, and deliver
                    measurable business impact.
                </p>

            </section>

            <section className="px-10 pb-20 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-2">
                            Leadership
                        </h3>
                        <p className="text-gray-400">
                            Led global teams of 1200+ FTEs across multiple regions.
                        </p>
                    </div>

                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-2">
                            Transformation
                        </h3>
                        <p className="text-gray-400">
                            Delivered $1.6M+ cost optimization and efficiency gains.
                        </p>
                    </div>

                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-2">
                            Governance
                        </h3>
                        <p className="text-gray-400">
                            Built enterprise KPI/KRI and reporting frameworks.
                        </p>
                    </div>

                    <div className="bg-[#111827] p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-2">
                            AI & Automation
                        </h3>
                        <p className="text-gray-400">
                            Integrated AI tools into operational workflows.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
            <h1 className="text-sm md:text-base font-semibold tracking-wide">
                Vinay Parsatwar
                <span className="hidden md:inline text-gray-400">
                    {" "}• CAISA • AIRS • PMA • SFC™
                </span>
            </h1>

            <div className="flex gap-8 text-gray-400">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/experience">Experience</a>
                <a href="/dashboard">Dashboard</a>
            </div>
        </nav>
    );
}
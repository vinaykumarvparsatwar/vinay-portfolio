export default function KPI({ title, value }: any) {
    return (
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-sm">{title}</p>
            <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>
    );
}
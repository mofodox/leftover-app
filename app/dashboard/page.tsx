import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex justify-between items-center max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Link href="/dashboard/create">Add Bill</Link>
        </div>
    )
}
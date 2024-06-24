export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 max-w-2xl mx-auto border-b border-b-slate-500 sticky top-0 z-10 bg-black">
            <div className="brand">
                <a href="/">Leftover</a>
            </div>
            <div className="nav-links flex gap-4">
                <a href="/about">Log in / Sign up</a>
            </div>
        </nav>
    )
}
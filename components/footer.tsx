'use client'

import React, {useState} from 'react'

export default function Footer() {
    const [year, setYear] = useState(new Date())

    return (
        <footer className="flex p-4 absolute bottom-0 justify-center max-w-2xl m-auto left-0 right-0 text-center border-t border-t-slate-500">
            <p className="text-sm">© {year.getFullYear()} designed &amp; developed by Khairul Akmal. Read FAQs.</p>
        </footer>
    )
}
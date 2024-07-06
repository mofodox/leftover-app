import Image from "next/image";
import Link from "next/link";

import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

import DialogDrawer from "./DialogDrawer";

export default async function Navbar() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    return (
        <nav className="flex justify-between items-center p-4 max-w-2xl mx-auto border-b border-b-slate-500 sticky top-0 z-10 bg-black">
            <div className="brand">
                <Link href="/">Leftover</Link>
            </div>
            <div className="nav-links flex gap-4">
                {user ? (
                    <div className="flex justify-center items-center gap-4">
                        <Link href="/dashboard">Dashboard</Link>
                        <DialogDrawer userImage={user.picture!}/>
                    </div>
                ):(
                    <>
                        <LoginLink>Log in</LoginLink>
                        <RegisterLink>Sign up</RegisterLink>
                    </>
                )}
            </div>
        </nav>
    )
}
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
    const {getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        <main className="flex max-w-2xl m-auto flex-col">
            <div className="content flex flex-col p-4 gap-4">
                <h1 className="text-2xl font-bold">
                    Leftover is a simple money management which calculates for you on how much left in your disposal to
                    spend.
                </h1>

                <p className="text-lg">
                    You tell it what is your income each month, together with what you have spent and it will tell you how
                    much you have left.
                </p>

                <p className="text-lg">
                    It tells you nice and clearly whether you’re <span className="bg-yellow-400">safe</span>, at <span className="bg-orange-500">risk</span>, or <span className="bg-red-500">spending too much</span>.
                </p>

                <p className="text-lg">
                    We do not connect to any financial institutions and your data will be saved on our servers.
                </p>
                {!user ? (
                    <LoginLink className="md:w-40 bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-center py-2 px-4 rounded">Sign in</LoginLink>
                ) : (
                    <Link className="md:w-48 bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-center py-2 px-4 rounded" href={"/dashboard"}>Go to Dashboard</Link>
                )}
            </div>
        </main>
    );
}

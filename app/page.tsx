export default function Home() {
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

            <a href="#"
               className="md:w-40 bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-center py-2 px-4 rounded"
               role="button"
            >
                Log in / Sign up
            </a>
        </div>
    </main>
  );
}

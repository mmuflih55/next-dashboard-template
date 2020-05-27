import Head from "next/head";
import { useUser } from "Utils/auth/hooks";
import Report from "@/modules/Report";

export default function Home() {
  const user = useUser({ redirectTo: "/login" });

  return (
    <div className="container">
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Report page={1} />
      </main>
    </div>
  );
}

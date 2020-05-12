import Head from "next/head";
import useAuth from "Utils/firebase/helper";
import Dashboard from "@/modules/Dashboard";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{useAuth(Dashboard)}</main>
    </div>
  );
}

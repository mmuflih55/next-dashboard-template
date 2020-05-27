import Head from "next/head";
import { useUser } from "Utils/auth/hooks";
import Dashboard from "@/modules/Dashboard";
import { useToken } from "../utils/auth/hooks";

export default function Home() {
  const user = useUser({ redirectTo: "/login" });
  // const [tokenExist] = useToken("/login");
  return (
    <div className="container">
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{user && <Dashboard />}</main>
      {/* <main>{<Dashboard />}</main> */}
    </div>
  );
}

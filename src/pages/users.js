import Head from "next/head";
import { useUser } from "Utils/auth/hooks";
import Users from "@/modules/Users";

export default function UsersPage() {
  const user = useUser({ redirectTo: "/login" });

  return (
    <div className="container">
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{user && <Users />}</main>
    </div>
  );
}

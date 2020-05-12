import Head from "next/head";
import useAuth from "Utils/firebase/helper";
import Users from "@/modules/Users";

export default function UsersPage() {
  return (
    <div className="container">
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{useAuth(Users)}</main>
    </div>
  );
}

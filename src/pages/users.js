import Head from "next/head";
import { Container } from "@material-ui/core";
import useAuth from "Utils/firebase/helper";
import Users from "@/modules/Users";

export default function Home() {
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

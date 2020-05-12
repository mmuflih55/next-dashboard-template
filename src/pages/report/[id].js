import Head from "next/head";
import useAuth from "Utils/firebase/helper";
import Report from "@/modules/Report";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Next Template Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{useAuth(Report, { id: id })}</main>
    </div>
  );
}

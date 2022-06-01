import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Page.module.css";
import Link from "next/link";

interface DummyData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getServerSideProps() {
  console.log("Fetching server side generated content");

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await res.json();

  return { props: { data } };
}

interface Props {
  data: DummyData;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - {data.title}</title>
        <meta name="description" content="Some orders description ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Server side rendered orders page 🤘!</h1>
        <p className={styles.description}>
          <Link href="/">Go back</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;

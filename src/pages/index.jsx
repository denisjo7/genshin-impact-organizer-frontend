import Head from "next/head";
import { useContext } from "react";
import Header from "../components/Header";
import OrganizedByStars from "../components/OrganizedByStars";
import OrganizedByElements from "../components/OrganizedByElements";
import AppContext from "../context/AppContext";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  const { organizeBy } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Genshin Impact Account Organizer</title>
        <meta name="description" content="Genshin Impact account organizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main-section"]}>
        <Header />

        {organizeBy === "stars" && <OrganizedByStars />}

        {organizeBy === "elements" && <OrganizedByElements />}
      </main>

      <Footer />
    </div>
  );
}

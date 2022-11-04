import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import Header from "../components/Header";
import OrganizedByStars from "../components/OrganizedByStars";
import OrganizedByElements from "../components/OrganizedByElements";
import AppContext from "../context/AppContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {
    accountName,
    accountLevel,
    allCharacters,
    obtainedCharacters,
    organizeBy,
    hanldeToggleLayout
  } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Genshin Impact Account Organizer</title>
        <meta name="description" content="Genshin Impact account organizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main-section"]}>
        <Header />

        <div className={styles["account-section"]}>
          <p>
            <span>Conta</span>: {accountName}
          </p>

          <p>
            <span>AR</span>: {accountLevel}
          </p>

          <p>
            <span>Personagens obtidos</span>: {`${obtainedCharacters.length}/${allCharacters.length}`}
          </p>
        </div>

        <div>
          <select
            id="select-organization"
            onChange={hanldeToggleLayout}
          >
            <option value="stars">Organizar por estrelas</option>
            <option value="elements">Organizar por elemento</option>
          </select>
        </div>

        {organizeBy === "stars" && <OrganizedByStars />}

        {organizeBy === "elements" && <OrganizedByElements />}
      </main>

      <footer>
        <Link
          href="https://github.com/denisjo7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with 💜 by <span className="text-teal-600 font-semibold">Denis Jonathan</span>
        </Link>
      </footer>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OrganizedByStars from "../components/OrganizedByStars";
import OrganizedByElements from "../components/OrganizedByElements";
import getCsvContent from "../utils/getCsvContent";

export default function Home() {
  const [accountName, setAccountName] = useState("Fulano");
  const [accountLevel, setAccountLevel] = useState("45");
  const [allCharacters, setAllCharacters] = useState([]);
  const [obtainedCharacters, setObtainedCharacters] = useState([]);
  const [organizeBy, setOrganizeBy] = useState("stars");

  useEffect(() => {
    (async () => await getCsvContent(setAllCharacters))();
  }, []);

  function handleToggleCharacter(event) {
    const characterName = event.target.closest("button").id;

    if (obtainedCharacters.includes(characterName)) {
      const filteredNames = obtainedCharacters.filter((name) => name !== characterName);

      setObtainedCharacters([...filteredNames]);
    } else {
      setObtainedCharacters([...obtainedCharacters, characterName]);
    }
  }

  function hanldeToggleLayout(event) {
    const { value } = event.target;

    setOrganizeBy(value);
  }

  return (
    <div>
      <Head>
        <title>Genshin Impact Account Organizer</title>
        <meta name="description" content="Genshin Impact account organizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div>
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

        {organizeBy === "stars" ? (
          <OrganizedByStars
            allCharacters={allCharacters}
            obtainedCharacters={obtainedCharacters}
            handleToggleCharacter={handleToggleCharacter}
          />
        ) : (
          <OrganizedByElements />
        )}
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

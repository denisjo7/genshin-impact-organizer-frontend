import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OrganizeByElements from "../components/OrganizeByElements";
import OrganizeByStars from "../components/OrganizeByStars";
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
    <div className="w-full h-full flex flex-col items-center">
      <Head>
        <title>Genshin Impact Account Organizer</title>
        <meta name="description" content="Genshin Impact account organizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-[100vh] flex flex-col self-center items-center">
        <Header />

        <div className="w-full flex justify-evenly pt-3 mb-6 text-2xl">
          <p>
            <span className="font-semibold">Conta</span>: {accountName}
          </p>

          <p>
            <span className="font-semibold">AR</span>: {accountLevel}
          </p>

          <p>
            <span className="font-semibold">Personagens obtidos</span>: {`${obtainedCharacters.length}/${allCharacters.length}`}
          </p>
        </div>

        <div className="w-2/5 mb-4">
          <select
            className="bg-gray-50 border text-center pr-5 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="select-organization"
            onChange={hanldeToggleLayout}
          >
            <option value="stars">Organizar por estrelas</option>
            <option value="elements">Organizar por elemento</option>
          </select>
        </div>

        {organizeBy === "stars" ? (
          <OrganizeByStars
            allCharacters={allCharacters}
            obtainedCharacters={obtainedCharacters}
            handleToggleCharacter={handleToggleCharacter}
          />
        ) : (
          <OrganizeByElements />
        )}

      </main>

      <footer className="w-full flex justify-center whitespace-normal">
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

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import getCsvContent from "../utils/getCsvContent";

export default function Home() {
  const [accountName, setAccountName] = useState("Fulano");
  const [accountLevel, setAccountLevel] = useState("45");
  const [allCharacters, setAllCharacters] = useState([]);
  const [obtainedCharacters, setObtainedCharacters] = useState([]);

  const backgroundTypes = {
    "Anemo": "bg-[#3fb1b5]",
    "Cryo": "bg-[#79d0e3]",
    "Dendro": "bg-[#73a53b]",
    "Electro": "bg-[#8556b7]",
    "Geo": "bg-[#be964a]",
    "Hydro": "bg-[#3f6fb4]",
    "Pyro": "bg-[#c06544]"
  };

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

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <Head>
        <title>Genshin Impact Account Organizer</title>
        <meta name="description" content="Genshin Impact account organizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-4/5 h-full flex flex-col self-center items-center">
        <h1 className="mb-8 text-center text-3xl font-semibold">
          Genshin Impact Account Organizer
        </h1>

        <div className="w-4/5 flex justify-evenly mb-6 text-xl">
          <p>
            <span className="font-semibold">Conta</span>: {accountName}
          </p>

          <p>
            <span className="font-semibold">AR</span>: {accountLevel}
          </p>
        </div>

        <div className="w-full mb-4 text-center text-2xl">
          <p>
            Personagens obtidos: {`${obtainedCharacters.length}/${allCharacters.length}`}
          </p>
        </div>

        <div className="w-full max-w-[1000px] flex flex-wrap justify-center">
          {allCharacters
            .map(({ name, imgUrl, type }) => {
              const checkObtained = obtainedCharacters.includes(name);
              const applySaturate = !checkObtained && "saturate-0";

              return (
                <button
                  className={`${backgroundTypes[type]} ${applySaturate} m-3 cursor-pointer border border-yellow-500 rounded shadow-custom hover:scale-125 transition-transform`}
                  id={name}
                  key={imgUrl}
                  onClick={handleToggleCharacter}
                  title={name}
                  type="button"
                >
                  <Image
                    alt={`Imagem do(a) personagem ${name}`}
                    className={`${applySaturate}`}
                    height={70}
                    src={imgUrl}
                    width={70}
                  />
                </button>
              );
            })}
        </div>
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

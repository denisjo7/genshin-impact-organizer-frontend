import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const charactersImagesUrls = [
  { "name": "Albedo", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Albedo.png" },
  { "name": "Aloy", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Aloy.png" },
  { "name": "Amber", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Amber.png" },
  { "name": "Ayaka", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Ayaka.png" },
  { "name": "Ayato", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Ayato.png" },
  { "name": "Barbara", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Barbara.png" },
  { "name": "Beidou", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Beidou.png" },
  { "name": "Bennett", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Bennett.png" },
  { "name": "Candace", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Candace.png" },
  { "name": "Childe", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Childe.png" },
  { "name": "Chongyun", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Chongyun.png" },
  { "name": "Collei", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Collei.png" },
  { "name": "Cyno", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Cyno.png" },
  { "name": "Diluc", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Diluc.png" },
  { "name": "Diona", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Diona.png" },
  { "name": "Dori", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Dori.png" },
  { "name": "Eula", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Eula.png" },
  { "name": "Fischl", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Fischl.png" },
  { "name": "Ganyu", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Ganyu.png" },
  { "name": "Gorou", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Gorou.png" },
  { "name": "Heizou", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Heizou.png" },
  { "name": "Hu Tao", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Hu Tao.png" },
  { "name": "Itto", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Itto.png" },
  { "name": "Jean", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Jean.png" },
  { "name": "Kaeya", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Kaeya.png" },
  { "name": "Kazuha", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Kazuha.png" },
  { "name": "Keqing", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Keqing.png" },
  { "name": "Klee", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Klee.png" },
  { "name": "Kokomi", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Kokomi.png" },
  { "name": "Kuki Shinobu", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Kuki Shinobu.png" },
  { "name": "Lisa", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Lisa.png" },
  { "name": "Mona", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Mona.png" },
  { "name": "Nilou", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Nilou.png" },
  { "name": "Ningguang", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Ningguang.png" },
  { "name": "Noelle", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Noelle.png" },
  { "name": "Qiqi", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Qiqi.png" },
  { "name": "Raiden", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Raiden.png" },
  { "name": "Razor", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Razor.png" },
  { "name": "Rosaria", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Rosaria.png" },
  { "name": "Sara", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Sara.png" },
  { "name": "Sayu", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Sayu.png" },
  { "name": "Shenhe", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Shenhe.png" },
  { "name": "Sucrose", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Sucrose.png" },
  { "name": "Thoma", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Thoma.png" },
  { "name": "Tighnari", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Tighnari.png" },
  { "name": "Traveler", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Traveler (Anemo).png" },
  { "name": "Venti", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Venti.png" },
  { "name": "Xiangling", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Xiangling.png" },
  { "name": "Xiao", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Xiao.png" },
  { "name": "Xingqiu", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Xingqiu.png" },
  { "name": "Xinyan", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Xinyan.png" },
  { "name": "Yae Miko", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Yae Miko.png" },
  { "name": "Yanfei", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Yanfei.png" },
  { "name": "Yelan", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Yelan.png" },
  { "name": "Yoimiya", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Yoimiya.png" },
  { "name": "Yun Jin", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Yun Jin.png" },
  { "name": "Zhongli", "img_url": "https://rerollcdn.com/GENSHIN/Characters/Zhongli.png" }
];

export default function Home() {
  const [accountName, setAccountName] = useState("Fulano");
  const [accountLevel, setAccountLevel] = useState("45");
  const [allCharacters, setAllCharacters] = useState([]);
  const [obtainedCharacters, setObtainedCharacters] = useState([]);

  useEffect(() => {
    setAllCharacters([...charactersImagesUrls]);
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

      <main className="w-4/5 h-full flex flex-col self-center">
        <h1 className="mb-8 text-center text-3xl font-semibold">
          Genshin Impact Account Organizer
        </h1>

        <div className="w-full flex justify-evenly mb-6 text-xl">
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

        <div className="w-full flex flex-wrap justify-center gap-4">
          {charactersImagesUrls
            .map(({ name, img_url }) => (
              <button
                className='bg-zinc-300 cursor-pointer border border-yellow-500 rounded shadow-custom hover:scale-125 transition-transform'
                id={name}
                key={img_url}
                onClick={handleToggleCharacter}
                title={name}
                type="button"
              >
                <Image
                  alt={`Imagem do(a) personagem ${name}`}
                  height={70}
                  src={img_url}
                  width={70}
                />
              </button>
            ))}
        </div>
      </main>

      <footer className="w-full flex justify-center whitespace-normal">
        <a
          href="https://github.com/denisjo7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with 💜 by <span className="text-teal-600 font-semibold">Denis Jonathan</span>
        </a>
      </footer>
    </div>
  );
}

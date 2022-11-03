import Image from "next/image";
import backgroundTypes from "../utils/backgroundTypes";

function OrganizeByStars({ allCharacters, obtainedCharacters, handleToggleCharacter }) {
  return (
    <div className="w-full max-w-[1000px] flex flex-wrap justify-center">
      {allCharacters
        .map(({ name, imgUrl, type }) => {
          const checkObtained = obtainedCharacters.includes(name);
          const applySaturate = !checkObtained && "saturate-0";

          return (
            <button
              className={`${backgroundTypes[type]} ${applySaturate} h-full overflow-scroll m-3 cursor-pointer border border-yellow-500 rounded-full shadow-custom hover:scale-125 transition-transform`}
              id={name}
              key={imgUrl}
              onClick={handleToggleCharacter}
              title={name}
              type="button"
            >
              <Image
                alt={`Imagem do(a) personagem ${name}`}
                className={`${applySaturate} rounded-full`}
                height={100}
                src={imgUrl}
                width={100}
              />
            </button>
          );
        })}
    </div>
  );
}

export default OrganizeByStars;

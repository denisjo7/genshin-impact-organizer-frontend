import Image from "next/image";
import backgroundTypes from "../../utils/backgroundTypes";
import styles from "./styles.module.css";

function OrganizedByStars({ allCharacters, obtainedCharacters, handleToggleCharacter }) {
  return (
    <div className={styles.temp}>
      {allCharacters
        .map(({ name, imgUrl, type }) => {
          const checkObtained = obtainedCharacters.includes(name);
          const applySaturate = !checkObtained && "saturate-0";

          return (
            <button
              id={name}
              key={imgUrl}
              onClick={handleToggleCharacter}
              title={name}
              type="button"
            >
              <Image
                alt={`Imagem do(a) personagem ${name}`}
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

export default OrganizedByStars;

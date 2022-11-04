import Image from "next/image";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import styles from "./styles.module.css";

function OrganizedByStars() {
  const { allCharacters, handleToggleCharacter } = useContext(AppContext);

  return (
    <div className={styles.temp}>
      {allCharacters
        .map(({ name, imgUrl }) => {
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

import Image from "next/image";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import styles from "./styles.module.css";

function CharacterCard({ name, imgUrl, type }) {
  const { handleToggleCharacter, obtainedCharacters } = useContext(AppContext);

  const checkCharacter = obtainedCharacters.includes(name);
  const lowerType = type.toLowerCase();

  return (
    <button
      className={styles.card}
      id={name}
      key={imgUrl}
      onClick={handleToggleCharacter}
      title={name}
      type="button"
    >
      <Image
        alt={`Imagem do(a) personagem ${name}`}
        className={
          `${styles["card-img"]}
          ${styles[lowerType]}
          ${!checkCharacter ? styles["card-gray"] : ""}`}
        height={120}
        src={imgUrl}
        width={120}
      />
    </button>
  );
}

export default CharacterCard;

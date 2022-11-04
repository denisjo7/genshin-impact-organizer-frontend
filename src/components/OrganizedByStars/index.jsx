import { useContext } from "react";
import AppContext from "../../context/AppContext";
import charactersStars from "../../utils/charactersStars";
import CharacterCard from "../CharacterCard";
import styles from "./styles.module.css";

function OrganizedByStars() {
  const { allCharacters } = useContext(AppContext);

  const { five, four } = charactersStars;
  const fiveStarsChars = allCharacters.filter(({ name }) => five.includes(name));
  const fourStarsChars = allCharacters.filter(({ name }) => four.includes(name));

  return (
    <div className={styles.container}>
      <div className={styles["five-stars"]}>
        <div className={styles["title-container"]}>
          <span className={styles.title}>⭐⭐⭐⭐⭐</span>
        </div>

        <div className={styles["cards-container"]}>
          {fiveStarsChars
            .map(({ name, imgUrl, type }, index) => (
              <CharacterCard
                key={`${name}__${index}`}
                imgUrl={imgUrl}
                name={name}
                type={type}
              />
            ))}
        </div>
      </div>

      <div className={styles["five-stars"]}>
        <div className={styles["title-container"]}>
          <span className={styles.title}>⭐⭐⭐⭐</span>
        </div>

        <div className={styles["cards-container"]}>
          {fourStarsChars
            .map(({ name, imgUrl, type }, index) => (
              <CharacterCard
                key={`${name}__${index}`}
                imgUrl={imgUrl}
                name={name}
                type={type}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OrganizedByStars;

import { List, UserCircle } from "phosphor-react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import styles from "./styles.module.css";

function Header() {
  const {
    accountName,
    accountLevel,
    obtainedCharacters,
    allCharacters,
    hanldeToggleLayout
  } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles["menu-and-account"]}>
        <List size={60} />

        <UserCircle size={70} />
      </div>

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

      <div className={styles["select-container"]}>
        <select
          className={styles.select}
          id="select-organization"
          onChange={hanldeToggleLayout}
        >
          <option value="stars">⭐ Organizar por estrelas ⭐</option>
          <option value="elements">❄️ Organizar por elemento ❄️</option>
        </select>
      </div>
    </div>
  );
}

export default Header;

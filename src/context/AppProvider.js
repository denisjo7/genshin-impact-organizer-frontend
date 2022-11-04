import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getCsvContent from "../utils/getCsvContent";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [accountName, setAccountName] = useState("Fulano");
  const [accountLevel, setAccountLevel] = useState("45");
  const [allCharacters, setAllCharacters] = useState([]);
  const [obtainedCharacters, setObtainedCharacters] = useState([]);
  const [organizeBy, setOrganizeBy] = useState("stars");

  useEffect(() => {
    (async () => await getCsvContent(setAllCharacters))();
  }, []);

  function hanldeToggleLayout(event) {
    const { value } = event.target;

    setOrganizeBy(value);
  }

  function handleToggleCharacter(event) {
    const characterName = event.target.closest("button").id;

    if (obtainedCharacters.includes(characterName)) {
      const filteredNames = obtainedCharacters.filter((name) => name !== characterName);

      setObtainedCharacters([...filteredNames]);
    } else {
      setObtainedCharacters([...obtainedCharacters, characterName]);
    }
  }

  const context = {
    accountName,
    setAccountName,
    accountLevel,
    setAccountLevel,
    allCharacters,
    setAllCharacters,
    obtainedCharacters,
    setObtainedCharacters,
    organizeBy,
    setOrganizeBy,
    hanldeToggleLayout,
    handleToggleCharacter
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;

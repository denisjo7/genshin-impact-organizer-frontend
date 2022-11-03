import parseCsv from "./parseCsv";

export default async function getCsvContent(setAllCharacters) {
  try {
    const response = await fetch("all_characters.csv");
    const data = await response.text();
    const characters = parseCsv(data);

    setAllCharacters([...characters]);
  } catch (error) {
    console.log("Algo deu errado ao tentar buscar os dados no arquivo .csv", error.message);
  }
}

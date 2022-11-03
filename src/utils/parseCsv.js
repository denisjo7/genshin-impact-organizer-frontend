export default function parseCsv(csvContent) {
  const characters = [];

  const [_, ...content] = csvContent.split("\n");

  content.forEach((char) => {
    const [name, imgUrl, type, typeIcon, weaponType, weaponIcon] = char.split(",");

    if (name) {
      characters.push({
        name,
        imgUrl,
        type,
        typeIcon,
        weaponType,
        weaponIcon
      });
    }
  });

  return characters;
}

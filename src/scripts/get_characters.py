from urllib.request import urlopen
from urllib.error import HTTPError, URLError
from bs4 import BeautifulSoup
import csv


def get_characters_infos():
    try:
        page = urlopen("https://genshin.gg/")
    except HTTPError as error:
        print(error)
    except URLError as error:
        print(error)
    else:
        html = BeautifulSoup(page.read(), "html.parser")

        characters_source = html.find_all("a", {"class": "character-portrait"})

        characters = []

        for char in characters_source:
            char_type = char.find("img", {"class": "character-type"}).get(
                "alt"
            )

            char_type_icon = char.find("img", {"class": "character-type"}).get(
                "src"
            )

            char_name = (
                char.find("img", {"class": "character-icon"})
                .get("alt")
            )

            char_img_url = char.find("img", {"class": "character-icon"}).get(
                "src"
            )

            char_weapon_type = char.find(
                "img", {"class": "character-weapon"}
            ).get("alt")

            char_weapon_icon = char.find(
                "img", {"class": "character-weapon"}
            ).get("src")

            char_infos = {
                "name": char_name,
                "img_url": char_img_url,
                "type": char_type,
                "type_icon": char_type_icon,
                "weapon_type": char_weapon_type,
                "weapon_icon": char_weapon_icon,
            }

            check_name = char_name.startswith('Traveler')

            if check_name == False:
                characters.append(char_infos)

        csv_file_name = "public/all_characters.csv"

        with open(csv_file_name, "w") as csv_file:
            file_writer = csv.writer(csv_file)

            file_writer.writerow(
                [
                    "name",
                    "img_url",
                    "type",
                    "type_icon",
                    "weapon_type",
                    "weapon_icon",
                ]
            )

            for char in characters:
                file_writer.writerow(
                    [
                        char["name"],
                        char["img_url"],
                        char["type"],
                        char["type_icon"],
                        char["weapon_type"],
                        char["weapon_icon"],
                    ]
                )

        print(f'Arquivo "{csv_file_name}" gerado com sucesso!')

        return characters


if __name__ == "__main__":
    get_characters_infos()

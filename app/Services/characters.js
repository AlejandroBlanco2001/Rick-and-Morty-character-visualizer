import { queryCharacter, queryAllCharacters } from "../Utils";

export const fetchCharacter = async (id) => {
    const res = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: queryCharacter,
            variables: {
                id: id,
            },
        }),
    });

    const data = await res.json();

    const temp = {
        ...data.data.character,
        episode: data.data.character.episode.slice(0, 4),
    };

    for (const key in temp) {
        if (temp[key] === null || temp[key] === "") {
            temp[key] = "Unkown";
        }
    }

    return temp;
};

export const fetchCharacters = async (props) => {
    const { page, name, species, gender, status } = props;

    const res = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: queryAllCharacters,
            variables: {
                page: page,
                name: name,
                species: species,
                gender: gender,
                status: status,
            },
        }),
    });
    const data = await res.json();
    return data.data.characters.results;
};

import CharacterCard from "./components/CharacterCard";

const fetchCharacter = async () => {
    const res = await fetch("https://rickandmortyapi.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                    query GetCharacters($page: Int!, $name: String, $species: String, $gender: String, $status: String) {
                        characters(page: $page, filter: {name: $name, species: $species, gender: $gender, status: $status}) {
                            info {
                                next
                                prev
                                pages
                            }
                            results{
                                id
                                name
                                species
                                image
                            }
                        }
                    }
                `,
                variables: {
                    page: 1,
                    name: "",
                    species: "",
                    gender: "",
                    status: "",
                },
            }),
        })
        const data = await res.json()
        return data.data.characters.results;
}

export async function ListOfCharacters() {
    const characters = await fetchCharacter();
    
    return ( 
        <div className="pt-10 flex justify-center gap-5 lg:flex-col md:flex-row flex-wrap">
            {characters.map(character => 
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    species={character.species}
                />
            )}
        </div>
    )
}
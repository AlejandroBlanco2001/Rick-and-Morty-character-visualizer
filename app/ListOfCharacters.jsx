"use client";
import CharacterCard from "./components/UI/CharacterCard";
import { useEffect, useState } from "react";

const fetchCharacter = async (page) => {
    const res = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
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
                page: page,
                name: "",
                species: "",
                gender: "",
                status: "",
            },
        }),
    });
    const data = await res.json();
    return data.data.characters.results;
};

export function ListOfCharacters() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [current, setCurrent] = useState(8);

    useEffect(() => {
        fetchCharacter(page).then((res) => {
            setCharacters([...characters, ...res]);
        });
    }, [page]);

    const loadMore = () => {
        if (current % 20 === 0) {
            setPage(page + 1);
        }
        setCurrent(current + 4);
    };
    return (
        <div className="mt-10 flex flex-col justify-center items-center gap-5 lg:flex-row flex-wrap lg:px-40 lg:mt-0">
            {characters.slice(0, current).map((character) => (
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    species={character.species}
                />
            ))}
            <button
                className="mt-10 flex justify-center items-center w-40 h-10 load-btn bg-[#F2F9FE] border rounded"
                onClick={loadMore}
            >
                <span className="text-[#2196F3]">Load More</span>
            </button>
        </div>
    );
}

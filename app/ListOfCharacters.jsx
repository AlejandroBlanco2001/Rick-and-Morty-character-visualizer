"use client";
import CharacterCard from "./components/UI/CharacterCard";
import { useEffect, useState } from "react";
import { queryAllCharacters } from "./Utils";
import { useGlobalContext } from "./Context/FilterContext";

const fetchCharacter = async (props) => {
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

export function ListOfCharacters() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [current, setCurrent] = useState(8);
    const { state } = useGlobalContext();

    const { name, species, gender, status } = state;

    useEffect(() => {
        fetchCharacter({ page: page, ...state }).then((res) => {
            setCharacters([...characters, ...res]);
        });
    }, [page]);

    useEffect(() => {
        setPage(1);
        setCurrent(8);
        fetchCharacter({ page: page, ...state }).then((res) => {
            setCharacters(res);
        });
    }, [name, species, gender, status]);

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

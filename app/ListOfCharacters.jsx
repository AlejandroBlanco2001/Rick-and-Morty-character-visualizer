"use client";
import CharacterCard from "./components/UI/CharacterCard";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context/FilterContext";
import Loader from "./components/UI/Loader";
import { fetchCharacters } from "./Services/characters";

export default function ListOfCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stateChange, setStateChange] = useState(true);
    const [page, setPage] = useState(1);
    const [current, setCurrent] = useState(
        typeof window === "undefined" ? 8 : visualViewport < 768 ? 2 : 8
    );
    const { state } = useGlobalContext();

    const { name, species, gender, status } = state;

    useEffect(() => {
        setLoading(true);
        setPage(1);
        setStateChange(true);
        if (typeof window !== "undefined") {
            visualViewport.width < 768 ? setCurrent(2) : setCurrent(8);
        }
        fetchCharacters({ page: 1, ...state }).then((res) => {
            setCharacters(() => res);
            setLoading(false);
            setStateChange(false);
        });
    }, [name, species, gender, status]);

    useEffect(() => {
        if (stateChange) return;
        setLoading(true);
        fetchCharacters({ page: page, ...state }).then((res) => {
            if (res.length === 0) return setLoading(false);
            setCharacters((prevCharacters) => [...prevCharacters, ...res]);
            setLoading(false);
        });
    }, [page]);

    const loadMore = () => {
        if (current % 20 === 0) {
            setPage(page + 1);
        }
        if (typeof window !== "undefined") {
            visualViewport.width < 768
                ? setCurrent(current + 2)
                : setCurrent(current + 4);
        }
    };

    return (
        <>
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
            </div>
            <div className="flex justify-center w-full">
                <button
                    className="mt-10 flex justify-center items-center w-40 h-10 load-btn bg-[#F2F9FE] border rounded"
                    onClick={loadMore}
                >
                    <span className="text-[#2196F3]">Load More</span>
                </button>
            </div>
            {loading ? <Loader /> : null}
        </>
    );
}

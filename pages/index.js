import { useState, useEffect, useReducer } from "react";
import { filterReducer, INITIAL_STATE } from "@/filterReducer";
import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";
import header from "../assets/navbar-rick-morty.png";
import logo from "../assets/logo-rick-morty.png";

export default function Home() {
    const [filter, dispacth] = useReducer(filterReducer, INITIAL_STATE);

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState({
        next: null,
        prev: null,
        pages: null,
    });

    useEffect(() => {
        fetch("https://rickandmortyapi.com/graphql", {
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
                    name: filter.name,
                    species: filter.species,
                    gender: filter.gender,
                    status: filter.status,
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setPage(data.data.characters.info.next);
                setCharacters(data.data.characters.results);
            });
    }, []);

    return (
        <>
            <header className="h-16 w-full pl-5 py-1">
                <Image 
                className="h-full w-10" 
                src={header} 
                alt="rick-morty-shadow-image"/>
            </header>
            <div className="main-bar">
                <Image 
                className="pt-10 px-5"
                src={logo}
                alt="rick-morty-show-logo" />
                <div className="pt-10 flex flex-col justify-center items-center">
                    <input
                        placeholder="Filter by name..."
                        className="border border-gray-300 rounded-lg w-80 h-10"
                        onChange={() => {
                            dispacth({
                                type: "SET_NAME",
                                payload: e.target.value,
                            });
                        }}
                    ></input>
                    <button>ADVANCED FILTERS</button>
                </div>
            </div>
            <div className="pt-10 flex justify-center gap-5 lg:flex-col md:flex-row flex-wrap">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        species={character.species}
                    />
                ))}
            </div>
            <footer>
                <p>Rick and Morty</p>
            </footer>
        </>
    );
}

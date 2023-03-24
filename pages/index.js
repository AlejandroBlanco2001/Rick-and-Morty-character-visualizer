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
            <header className="header">
                <Image src={header} alt="rick-morty-shadow-image" />
            </header>
            <div className="main-bar">
                <Image src={logo} alt="rick-morty-show-logo" />
                <div className="flex flex-col justify-center items-center">
                    <input
                        placeholder="Filter by name..."
                        className="filter"
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
            <div className="flex justify-center gap-5 lg:flex-col md:flex-row flex-wrap">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
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

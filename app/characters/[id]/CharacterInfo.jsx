"use client";

import InformationCard from "../../components/UI/InformationCard";
import Icon from "../../components/Icons";
import { useEffect, useState } from "react";
import Loader from "../../components/UI/Loader";
import { fetchCharacter } from "../../Services/characters";

export default function CharacterInfo(params) {
    const { id } = params;

    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCharacter(id).then((res) => {
            setCharacter(res);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? null : (
                <div className="flex flex-col w-full items-start mt-5 lg:px-40">
                    <div className="w-full">
                        <div>
                            <a
                                className="flex items-center back-button font-karla font-bold text-lg"
                                href="/"
                            >
                                <Icon name="arrow-left" />
                                Go Back
                            </a>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col items-center">
                            <img
                                className="rounded-full w-36 h-36 border-4 lg:w-1/6 lg:h-1/6"
                                src={character.image}
                                alt="character image"
                            ></img>
                            <h2 className="font-normal text-3xl text-blue-black lg:text-5xl lg:mt-2">
                                {character.name}
                            </h2>
                        </div>
                        <div className="flex flex-col lg:flex-row w-full justify-evenly">
                            <div className="w-1/2">
                                <h3 className="text-translucid-gray text-xl mt-10 font-medium">
                                    Informations
                                </h3>
                                <div className="flex flex-col gap-2 pl-5 pt-5">
                                    <InformationCard
                                        title="Gender"
                                        info={character.gender}
                                    />
                                    <InformationCard
                                        title="Status"
                                        info={character.status}
                                    />
                                    <InformationCard
                                        title="Specie"
                                        info={character.species}
                                    />
                                    <InformationCard
                                        title="Origin"
                                        info={character.origin.name}
                                    />
                                    <InformationCard
                                        title="Type"
                                        info={character.type}
                                    />
                                    <InformationCard
                                        title="Location"
                                        info={character.location.name}
                                    />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-translucid-gray text-xl font-medium mt-8 lg:mt-10">
                                    Episodes
                                </h3>
                                <div className="flex flex-col gap-2 pl-5 pt-5">
                                    {character.episode.map((episode) => (
                                        <InformationCard
                                            key={episode.episode}
                                            title={episode.episode}
                                            info={episode.name}
                                            subtitle={episode.air_date}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {loading ? <Loader /> : null}
        </>
    );
}

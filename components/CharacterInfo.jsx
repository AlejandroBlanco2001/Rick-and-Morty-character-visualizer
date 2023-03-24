import Image from "next/image";
import { useEffect, useState } from "react";
import InformationCard from "./InformationCard";

const CharacterInfo = (props) => {

    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(`/api/character?id=${props.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json()
            console.log(data)
            setCharacter(data)
            setLoading(false)
        }
        fetchData();
    }, [])

    return (
        loading ? <div>Loading...</div> : 
        <div>
            <div className="">
                <img
                className="rounded-full"
                src={character.image}
                alt="character-image"/>
                <h2>{character.name}</h2>
            </div>
            <h4>Information</h4>
            <div>
                <InformationCard 
                title="Gender"
                info={character.gender || "Unknown"}
                />
                <InformationCard 
                title="Status"
                info={character.status || "Unknown"}
                />
                <InformationCard 
                title="Specie"
                info={character.species || "Unknown"}
                />
                <InformationCard 
                title="Origin"
                info={character.origin?.name || "Unknown"}
                />
                <InformationCard 
                title="Type"
                info={character.type || "Unknown"}
                />
                <InformationCard 
                title="location"
                info={character.location?.name || "Unknown"}
                />
            </div>
            <h4>Episodes</h4>
            <div>
                {character.episode && character.episode.map((episode) => {
                    return (
                        <div>
                            <InformationCard
                            title={episode.episode}
                            info={episode?.name}
                            subtitle={episode.air_date}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharacterInfo;
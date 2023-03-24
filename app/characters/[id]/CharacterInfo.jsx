import InformationCard from "@/app/components/InformationCard";

const fetchCharacter = async (id) => {
    const query = `
        query GetCharacter($id: ID!){
            character(id: $id){
                name,
                status,
                species,
                type,
                gender,
                image,
                origin {
                    name,
                },
                location{
                    name
                }
                episode{
                    episode,
                    name,
                    air_date
                }
            }
        }              
    `;

    const res = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({query, variables: { id: id }}),
    })
    
    const data = await res.json();

    const temp = {
        ...data.data.character,
        episode: data.data.character.episode.slice(0,4)
    }

    for (const key in temp) {
        if (temp[key] === null || temp[key] === "") {
            temp[key] = "Unkown";
        }
    }

    return temp
}

export async function CharacterInfo(params) {
    
    const character = await fetchCharacter(params.id);
    
    return (
        <div className="flex flex-col w-full items-start pl-5">
            <div className="w-full">
                <a href="/">Go Back</a>
            </div>
            <div className="w-full">
                <div className="flex flex-col items-center">
                    <img className="rounded-full w-36 h-36" src={character.image} alt="character image"></img>
                    <h2 className="font-normal text-3xl">{character.name}</h2>
                </div>
                <h3>Informations</h3>
                <div className="pl-5 pt-5">
                    <InformationCard title="Gender" info={character.gender}/>
                    <InformationCard title="Status" info={character.status}/>
                    <InformationCard title="Specie" info={character.species}/>
                    <InformationCard title="Origin" info={character.origin.name}/>
                    <InformationCard title="Type" info={character.type}/>
                    <InformationCard title="Location" info={character.location.name}/>
                </div>
                <h3 className="pt-8">Episodes</h3>
                <div className="pl-5 pt-5">
                    {character.episode.map(episode => 
                        <InformationCard 
                        key={episode.episode}
                        title={episode.episode} 
                        info={episode.name} 
                        subtitle={episode.air_date}
                        />
                    )}
                </div>
            </div>
        </div>  
    )
}

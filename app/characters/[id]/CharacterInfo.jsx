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
        body: JSON.stringify({ query, variables: { id: id } }),
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

export async function CharacterInfo(params) {
    const character = await fetchCharacter(params.id);

    return (
        <div className="flex flex-col w-full items-start pl-6 mt-5">
            <div className="w-full">
                <div>
                    <a
                        className="flex items-center back-button font-karla font-bold text-lg"
                        href="/"
                    >
                        <svg
                            className="h-6 w-6 text-black"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <line x1="5" y1="12" x2="19" y2="12" />{" "}
                            <line x1="5" y1="12" x2="11" y2="18" />{" "}
                            <line x1="5" y1="12" x2="11" y2="6" />
                        </svg>
                        Go Back
                    </a>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col items-center">
                    <img
                        className="rounded-full w-36 h-36 border-4"
                        src={character.image}
                        alt="character image"
                    ></img>
                    <h2 className="font-normal text-3xl text-blue-black">
                        {character.name}
                    </h2>
                </div>
                <h3 className="text-translucid-gray text-xl mt-10 font-medium">
                    Informations
                </h3>
                <div className="flex flex-col gap-2 pl-5 pt-5">
                    <InformationCard title="Gender" info={character.gender} />
                    <InformationCard title="Status" info={character.status} />
                    <InformationCard title="Specie" info={character.species} />
                    <InformationCard
                        title="Origin"
                        info={character.origin.name}
                    />
                    <InformationCard title="Type" info={character.type} />
                    <InformationCard
                        title="Location"
                        info={character.location.name}
                    />
                </div>
                <h3 className="text-translucid-gray text-xl font-medium pt-8">
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
    );
}

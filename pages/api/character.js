async function getCharacter(id) {
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

    const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({query, variables: { id: id }}),
    });

    if(!response.ok) throw new Error(`Failed to fetch character with id ${id}.`);

    const {data} = await response.json();

    return data.character;
}

export default async function handler(req, res) {
    const { id } = req.query;
    try{
        const character = await getCharacter(id);
        res.status(200).json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
}
  
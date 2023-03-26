export const queryAllCharacters = `
                    query GetCharacters($page: Int, $name: String, $species: String, $gender: String, $status: String) {
                        characters(page: $page, filter: {name: $name, species: $species, gender: $gender, status: $status}) {
                            results{
                                id
                                name
                                species
                                image
                            }
                        }
                    }
                `;

export const queryCharacter = `
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

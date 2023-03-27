import CharacterInfo from "./CharacterInfo";

export default function CharacterPage({ params }) {
    const { id } = params;

    return (
        <div>
            <CharacterInfo id={id} />
        </div>
    );
}

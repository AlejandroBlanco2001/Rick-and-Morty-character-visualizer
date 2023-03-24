import CharacterInfo from "../../components/CharacterInfo";
const { useRouter } = require("next/router");

const Character = ({slug}) => {
    
    return (
        <div>
            <CharacterInfo id={1}></CharacterInfo>
        </div>
    )
};

export default Character;
const CharacterCard = (props) => {
    return (
        <div>
            <div className="card-image">
                <img src={props.image} alt="character-image"></img>
            </div>
            <div className="card-text">
                <h2>{props.name}</h2>
                <p>{props.species}</p>
            </div>
        </div>
    );
};

export default CharacterCard;

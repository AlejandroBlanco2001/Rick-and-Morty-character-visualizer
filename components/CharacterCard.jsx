const CharacterCard = (props) => {
    return (
        <div className="characater-card flex w-80 overflow-hidden rounded-md flex-col justify-center items-start">
            <img
                className="h-5/8 w-full"
                src={props.image}
                alt="character-image"
            ></img>
            <div className="flex flex-col items-start justify-center h-20 pl-5">
                <h2 className="font-bold text-xl">{props.name}</h2>
                <span className="text-slate-500 text-sm pt-2">
                    {props.species}
                </span>
            </div>
        </div>
    );
};

export default CharacterCard;

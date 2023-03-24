import Link from "next/link";

const CharacterCard = (props) => {
    const href = "/characters/[id]"
    const as = `/characters/${props.id}`

    return (
        <Link href={href} as={as}>
            <div className="characater-card flex w-80 overflow-hidden rounded-sm flex-col justify-center items-start">
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
        </Link>
    );
};

export default CharacterCard;

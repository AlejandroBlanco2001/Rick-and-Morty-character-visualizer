import Link from "next/link";

const CharacterCard = (props) => {
    const href = "/characters/[id]";
    const as = `/characters/${props.id}`;

    return (
        <div className="characater-card flex w-80 overflow-hidden rounded-sm flex-col justify-center lg:w-100">
            <Link href={href} as={as}>
                <img
                    className="h-5/8 w-full lg:h-60 lg:object-cover"
                    src={props.image}
                    alt="character-image"
                ></img>
                <div className="flex flex-col items-start justify-center h-20 pl-5">
                    <h6 className="font-bold text-xl text-neutral-900">
                        {props.name}
                    </h6>
                    <span className="text-neutral-600 text-sm pt-2">
                        {props.species}
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default CharacterCard;

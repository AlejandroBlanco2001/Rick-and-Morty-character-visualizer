export default function InformationCard(props) {
    return (
        <div className="flex flex-col">
            <h3 className="font-bold text-blue-black">{props.title}</h3>
            <p className="text-blue-gray text-">{props.info}</p>
            <span className="text-translucid-gray text-xs">
                {props.subtitle}
            </span>
            <hr className="mt-2"></hr>
        </div>
    );
}

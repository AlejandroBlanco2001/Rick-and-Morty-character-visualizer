const InformationCard = (props) => {
    return(
        <div>
            <h3 className="font-bold">{props.title}</h3>
            <p>{props.info}</p>
            <span>{props.subtitle}</span>
            <hr></hr>
        </div>
    )
}

export default InformationCard;
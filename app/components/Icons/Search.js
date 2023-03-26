const SVG = ({
    className = "h-5 w-5 text-black",
    width = "24",
    height = "24",
    viewBox = "0 0 24 24",
    strokeWidth = "2",
    stroke = "currentColor",
    fill = "none",
    strokeLinecap = "round",
    strokeLinejoin = "round",
}) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
    >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="10" cy="10" r="7" />{" "}
        <line x1="21" y1="21" x2="15" y2="15" />
    </svg>
);

export default SVG;

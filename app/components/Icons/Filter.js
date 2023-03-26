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
        <line x1="4" y1="6" x2="20" y2="6" />{" "}
        <line x1="8" y1="12" x2="16" y2="12" />{" "}
        <line x1="6" y1="18" x2="18" y2="18" />
    </svg>
);

export default SVG;

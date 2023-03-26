const SVG = ({
    className = "h-6 w-6 text-black",
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
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <line x1="5" y1="12" x2="19" y2="12" />{" "}
        <line x1="5" y1="12" x2="11" y2="18" />{" "}
        <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
);

export default SVG;

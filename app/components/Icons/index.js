import ArrowLeft from "./ArrowLeft";
import Filter from "./Filter";
import Search from "./Search";
import Cross from "./Cross";

const Icon = (props) => {
    switch (props.name) {
        case "arrow-left":
            return <ArrowLeft {...props} />;
        case "filter":
            return <Filter {...props} />;
        case "search":
            return <Search {...props} />;
        case "cross":
            return <Cross {...props} />;
        default:
            return null;
    }
};

export default Icon;

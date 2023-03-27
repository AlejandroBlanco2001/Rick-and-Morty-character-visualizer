import Loading from "../../../assets/Loading-component.png";

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-[rgba(0,0,0,0.5)]">
            <img
                className="h-1/2 animate-spin"
                src={Loading.src}
                alt="Loading"
            />
        </div>
    );
}

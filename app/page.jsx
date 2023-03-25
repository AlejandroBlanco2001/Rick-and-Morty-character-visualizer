import Image from "next/image";
import logo from "../assets/logo-rick-morty.png";
import { ListOfCharacters } from "./ListOfCharacters";

export default function HomePage() {
    return (
        <>
            <div className="main-bar">
                <Image
                    className="pt-10 px-5"
                    src={logo}
                    alt="rick-morty-show-logo"
                />
                <div className="pt-10 flex flex-col justify-center items-center">
                    <input
                        placeholder="Filter by name..."
                        className="border border-gray-300 rounded-lg w-80 h-10"
                    ></input>
                    <button>ADVANCED FILTERS</button>
                </div>
            </div>
            <ListOfCharacters />
        </>
    );
}

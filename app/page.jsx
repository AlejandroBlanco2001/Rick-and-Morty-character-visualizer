"use client";
import Image from "next/image";
import logo from "../assets/logo-rick-morty.png";
import ListOfCharacters from "./ListOfCharacters";
import FilterBar from "./components/UI/FilterBar";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Image
                    className="pt-10 px-5"
                    src={logo}
                    alt="rick-morty-show-logo"
                />
                <FilterBar />
            </div>
            <ListOfCharacters />
        </>
    );
}

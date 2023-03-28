import Image from "next/image";
import { GlobalContextProvider } from "./Context/FilterContext";
import header from "../assets/navbar-rick-morty.png";
import "../styles/globals.css";

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Rick and Morty API</title>
            </head>
            <body>
                <GlobalContextProvider>
                    <header className="h-16 w-full pl-5 py-1">
                        <Image
                            className="p-1 h-full w-14 lg:ml-40"
                            src={header}
                            alt="rick-morty-shadow-image"
                        />
                    </header>
                    {children}
                    <footer className="mt-10 flex justify-center items-center h-16 w-full bg-white">
                        <p className="font-karla font-bold text-color-[#212121]">
                            Rick and Morty
                        </p>
                    </footer>
                </GlobalContextProvider>
            </body>
        </html>
    );
}

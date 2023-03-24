import Image from 'next/image';
import header from "../assets/navbar-rick-morty.png";
import "../styles/globals.css"

export default function RootLayout({children}){
    return(
        <html>
            <head>
                <title>Rick and Morty API</title>
            </head>
            <body>
            <header className="h-16 w-full pl-5 py-1">
                <Image 
                className="h-full w-10" 
                src={header} 
                alt="rick-morty-shadow-image"/>
            </header>
                {children}
            <footer>
                <p>Rick and Morty</p>
            </footer>
            </body>
        </html>
    )
}
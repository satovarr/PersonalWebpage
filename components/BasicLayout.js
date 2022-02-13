import Navbar from "./navbar"
import Head from "next/head";
import { useEffect } from "react"
import {useRouter} from "next/router"
import { route } from "next/dist/server/router";

const BasicLayout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => console.log(url)

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
           router.events.off('routeChangeStart', handleRouteChange)
        }
    }, []);

    return(
        <>
            <Navbar />
            <main className="container py-5">
                {children}
            </main>

            <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h1>&copy; Ryan Ray Poerfolio</h1>
                    
                </div>
            </footer>

        </>
    )
}
export default BasicLayout;
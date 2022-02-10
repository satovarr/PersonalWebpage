import Navbar from "./navbar"
import Head from "next/head";

const BasicLayout = ({children}) => (
    <>
        <Navbar/>
        <main className="container py-5">
            {children}
        </main>
        
    </>
)

export default BasicLayout;
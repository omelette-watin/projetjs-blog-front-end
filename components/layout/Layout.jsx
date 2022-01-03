import Head from "next/head"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { useUser } from "../user"

function Layout({ children, title }) {
    const { user } = useUser()
    return (
        <div>
            <Head>
                <title>{title ?  title + " - " : null} Unicorn's Blog </title>
            </Head>
            <Navbar user={user} active={title} />
            <main className={"bg-lightGray"}>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout
import Head from "next/head"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { useUser } from "../user"

function Layout({ children, title = "" }) {
    const { user } = useUser()
    return (
        <div>
            <Head>
                <title>Unicorn's Blog {title}</title>
            </Head>
            <Navbar user={user} />
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout
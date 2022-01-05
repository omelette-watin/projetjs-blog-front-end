import Head from "next/head"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { useUser } from "../user"
import styles from './Layout.module.css'

function Layout({ children, title }) {
    const { user } = useUser()
    return (
        <div>
            <Head>
                <title>{title ?  title + " - " : null} Unicorn's Blog </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.dev_wrapper}>
                👷 <span>Ce site est encore en développement</span> 👷
            </div>
            <Navbar user={user} active={title} />
            <main style={{minHeight: '60vh'}}>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout
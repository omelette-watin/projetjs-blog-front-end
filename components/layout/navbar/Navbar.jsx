import styles from './Navbar.module.css'
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { RiCloseLine, RiMenuLine, RiLogoutBoxLine} from "react-icons/ri"


const Navbar = ({user, active}) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const router = useRouter()

    const logout = async () => {
        localStorage.removeItem("token")
        await router.replace("/login")
    }

    const links = (
        <>
            <li>
                <Link href={"/"}>
                    <a className={(active === undefined) ? styles.active : null}>Accueil</a>
                </Link>
            </li>
            <li>
                <Link href={"/posts"}>
                    <a className={(active === "Blog") ? styles.active : null}>Blog</a>
                </Link>
            </li>
            <li>
                <Link href={"/users"}>
                    <a className={(active === "Utilisateurs") ? styles.active : null}>Utilisateurs</a>
                </Link>
            </li>
            {
                user ?
                    <li>
                        <Link href={"/dashboard"}>
                            <a className={(active === "Dashboard") ? styles.active : null}>Dashboard</a>
                        </Link>
                    </li>

                    : null
            }
            <li>
                <Link href={"/about"}>
                    <a className={(active === "À propos") ? styles.active : null}>À propos</a>
                </Link>
            </li>
        </>
    )

    return (
        <header className={styles.header}>
            <nav className={`${styles.navbar} flex ai-c jc-sb container p-x`}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        <a><img src={"/images/logo.svg"} alt="Unicorn's logo"/></a>
                    </Link>
                </div>
                <ul className={styles.links}>
                    {links}
                </ul>
                {
                    user ?

                        <div className={styles.sign}>
                            <a onClick={logout} className={styles.little}>Se déconnecter</a>
                        </div>

                        :

                        <div className={styles.sign}>
                            <Link href={"/login"}>
                                <a className={styles.little}>Se connecter</a>
                            </Link>
                            <Link href={"/register"} >
                                <a className={`btn gradient`}>S'inscrire</a>
                            </Link>
                        </div>
                }
                <div className={styles.mobile_menu}>
                    {
                        user ?

                            <div className={styles.pad_sign}>
                                <a onClick={logout} className={styles.little}>
                                    Se déconnecter
                                </a>
                            </div>

                            :

                            <div className={styles.pad_sign}>
                                <Link href={"/login"}>
                                    <a className={styles.little}>Se connecter</a>
                                </Link>
                                <Link href={"/register"} >
                                    <a className={`btn gradient`}>S'inscrire</a>
                                </Link>
                            </div>
                    }
                    {toggleMenu
                        ? <RiCloseLine color={"var(--darkBlue)"} size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenuLine color={"var(--darkBlue)"} size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className={styles.mobile_menu_container}>
                            <ul className={styles.mobile_links}>
                                {links}
                            </ul>
                            {
                                user ?

                                <div className={styles.mobile_sign}>
                                    <a onClick={logout} className={`${styles.little} ${styles.dc}`}>
                                        <RiLogoutBoxLine color={"var(--darkblue)"} size={27}/>
                                        <p>Se déconnecter</p>
                                    </a>
                                </div>

                                :

                                <div className={styles.mobile_sign}>
                                    <Link href={"/login"}>
                                        <a className={styles.little}>Se connecter</a>
                                    </Link>
                                    <Link href={"/register"} >
                                        <a className={`btn gradient`}>S'inscrire</a>
                                    </Link>
                                </div>
                            }
                        </div>
                    )}

                </div>
            </nav>
        </header>
    )
}

export default Navbar
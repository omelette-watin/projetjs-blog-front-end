import styles from './Navbar.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = ({user, active}) => {
    const router = useRouter()
    const logout = async () => {
        localStorage.removeItem("token")
        await router.replace("/login")
    }
    return (
        <div className={styles.header}>
            <nav className={`${styles.navbar} flex ai-c jc-sb container p-x`}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        <a><img src={"/images/unicorns-logo.png"} alt="Unicorn's logo"/></a>
                    </Link>
                </div>
                <ul className={styles.links}>
                    <li>
                        <Link href={"/posts"}>
                            <a className={(active === "Articles") ? styles.active : null}>Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/users"}>
                            <a  className={(active === "Utilisateurs") ? styles.active : null}>Utilisateurs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#about"}>
                            <a>À propos</a>
                        </Link>
                    </li>
                    {
                        user ?
                            <li>
                                <Link href={"/dashboard"}>
                                    <a>Dashboard</a>
                                </Link>
                            </li>

                            : null
                    }
                </ul>
                {
                    user ?

                        <div className={styles.sign}>
                            <a onClick={logout}>Se déconnecter</a>
                        </div>

                        :

                        <div className={styles.sign}>

                            <Link href={"/login"}>
                                <a>Se connecter</a>
                            </Link>
                            <Link href={"/register"} >
                                <a className={"btn big-btn gradient"}>S'inscrire</a>
                            </Link>
                        </div>
                }
            </nav>
        </div>
    )
}

export default Navbar
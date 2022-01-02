import styles from './Navbar.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = ({user}) => {
    const router = useRouter()
    const logout = async () => {
        localStorage.removeItem("token")
        await router.replace("/login")
    }
    return (
        <>
            <nav className={styles.navbar}>

                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <Link href={"/"}>
                            <a>Unicorn's Blog</a>
                        </Link>
                    </div>

                    <ul className={styles.links}>
                        <li>
                            <Link href={"/posts"}>
                                <a>Articles</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/users"}>
                                <a>Utilisateurs</a>
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
                </div>
                {
                    user ?

                        <div className={styles.sign}>

                            <button onClick={logout}>Se déconnecter</button>
                        </div>

                        :

                        <div className={styles.sign}>

                            <Link href={"/login"}>
                                <a>Se connecter</a>
                            </Link>
                            <Link href={"/register"}>
                                <a>S'inscrire</a>
                            </Link>
                        </div>
                }
            </nav>
        </>
    )
}

export default Navbar
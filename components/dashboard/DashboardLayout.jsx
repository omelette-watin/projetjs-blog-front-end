import styles from './Dashboard.module.css'
import Link from "next/link"
import {useUser} from "../user";
import {RiUser3Fill, RiArticleLine, RiDraftLine, RiArrowLeftLine, RiMenuUnfoldFill} from "react-icons/ri"
import {FaPray, FaRegComments, FaUsers, FaCog, FaHouseUser} from "react-icons/fa"
import {useState} from "react";


const DashboardLayout = ({ children, secondTitle }) => {
    const { user } = useUser()
    const [toggleMenu, setToggleMenu] = useState(false)

    const links = (
        <>
            <h2>
                <Link href={"/dashboard"}>
                    <a>Dashboard</a>
                </Link>
            </h2>

            <ul>
                <p><FaHouseUser/> Moi</p>
                <li>
                    <Link href={"/dashboard/my/account"}>
                        <a className={(secondTitle === "Mon Compte") ? styles.active : null}>
                            <RiUser3Fill/> Mon Compte
                        </a>
                    </Link>
                </li>
                {(user.role === "admin" || user.role === "author")
                &&
                <>
                    <li>
                        <Link href={"/dashboard/my/posts"}>
                            <a className={(secondTitle === "Mes Articles") ? styles.active : null}>
                                <RiArticleLine/> Mes Articles
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/my/drafts"}>
                            <a className={(secondTitle === "Mes Articles") ? styles.active : null}>
                                <RiDraftLine/> Mes Brouillons
                            </a>
                        </Link>
                    </li>
                </>
                }
                <li>
                    <Link href={"/dashboard/my/comments"}>
                        <a className={(secondTitle === "Mes Commentaires") ? styles.active : null}>
                            <FaRegComments/> Mes Commentaires
                        </a>
                    </Link>
                </li>
            </ul>
            {(user.role === "admin" || user.role === "author")
                &&
                <ul>
                    <p><FaCog/> Gérer</p>
                    {(user.role === "admin")
                        &&
                        <>
                            <li>
                                <Link href={"/dashboard/users"}>
                                    <a className={(secondTitle === "Gérer les utilisateurs") ? styles.active : null}>
                                        <FaUsers/> Utilisateurs
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/dashboard/requests"}>
                                    <a className={(secondTitle === "Gérer les requêtes") ? styles.active : null}>
                                        <FaPray/> Requêtes
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/dashboards/posts"}>
                                    <a className={(secondTitle === "Gérer les articles") ? styles.active : null}>
                                        <RiArticleLine/> Posts
                                    </a>
                                </Link>
                            </li>
                        </>
                    }
                    <li>
                        <Link href={"/dashboards/comments"}>
                            <a className={(secondTitle === "Gérer les commentaires") ? styles.active : null}>
                                <FaRegComments/> Commentaires
                            </a>
                        </Link>
                    </li>
                </ul>
            }

        </>
    )

    return (
        <div className={styles.dashboard_wrapper}>
            <div className={`${styles.dashboard_container} container p-all`}>
                <div className={`${styles.menu} ${toggleMenu && styles.closed}`}>
                    {links}
                </div>
                <div className={styles.children_container}>
                    <div className={styles.toggler_desktop}>
                        {toggleMenu
                            ?
                            <RiMenuUnfoldFill size={28} color={"var(--colorDarkBlue)"} onClick={() => {setToggleMenu(false)}}/>
                            :
                            <RiArrowLeftLine size={32} color={"var(--colorDarkBlue)"} onClick={() => {setToggleMenu(true)}}/>
                        }
                    </div>
                    <div className={styles.toggler_mobile}>
                        {toggleMenu
                            ?
                            <RiArrowLeftLine size={32} color={"var(--colorDarkBlue)"} onClick={() => {setToggleMenu(false)}}/>
                            :
                            <RiMenuUnfoldFill size={28} color={"var(--colorDarkBlue)"} onClick={() => {setToggleMenu(true)}}/>
                        }
                    </div>


                    {children}
                </div>
            </div>
        </div>
    )
}


export default DashboardLayout
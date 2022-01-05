import styles from "./SignForms.module.css"
import { useRouter } from 'next/router'
import { useState } from "react"
import Link from "next/link"
import loginUser from "../../services/users/loginUser"

const LoginForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        error: "",
        isLoading: false,
        bounce: false
    })

    const handleSubmit = async (e) => {

        e.preventDefault()

        setFormData({ ...formData, isLoading: true, bounce: false })

        loginUser({
            username: formData.username,
            password: formData.password
        })
            .then((res) => {
                const token = res.data.token
                localStorage.setItem("token", token)

                router.replace("/dashboard")
            })
            .catch((e) => {
                setFormData({
                    ...formData,
                    password: "",
                    error: e.response.data.message || e.message,
                    isLoading: false,
                    bounce: true
                })
            })
    }

    return (
        <div className={styles.form_wrapper}>
            <div className={styles.logo_mobile}>
                <img src="/images/logo.svg" alt=""/>
                <h3>Your <strong>Opinion</strong> matters !</h3>
            </div>
            <div className={styles.logo_desktop}>
                <img src="/images/logo.svg" alt=""/>
                <h3>Your <strong>Opinion</strong> matters !</h3>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.form} p-x`}>
                <div className={styles.headings}>
                    <h2>Connection</h2>
                </div>


                {formData.error && <div id={"error"} className={`${formData.bounce ? "bounce" : null } ${styles.error}`}>{formData.error}</div>}

                <input
                    className={formData.error ? styles.red_input : null}
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    type="text"
                    name="username"
                    id="username"
                    required={true}
                    placeholder={"Adresse e-mail ou nom d'utilisateur"}
                    autoComplete={"username"}
                />


                <input
                    className={formData.error ? styles.red_input : null}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    type="password"
                    name="password"
                    id="password"
                    required={true}
                    placeholder={"Mot de passe"}
                    autoComplete={"password"}

                />

                <div className={styles.links}>
                    <button disabled={formData.isLoading} type="submit" className={`${styles.login_btn} btn`}>
                        {formData.isLoading ? "Envoi ..." : "Se connecter"}
                    </button>
                    <p>
                        Pas encore de compte ?
                        <Link href={"/register"}>
                            <a>Créez-en un !</a>
                        </Link>
                    </p>
                </div>
                <div className={styles.home}>
                    <Link href={"/"}>
                        <a>Revenir sur le site</a>
                    </Link>
                </div>
            </form>
            <div className={`${styles.circle} ${styles.large}`}>
            </div>
            <div className={`${styles.circle} ${styles.small}`}>
            </div>
        </div>
    )
}

export default LoginForm
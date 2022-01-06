import styles from "./SignForms.module.css"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useState } from "react"
import registerUser from "../../services/auth/registerUser"

const eightChar = new RegExp("(?=.{8,})")


const RegisterForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        testPasswordMsg: "",
        testConfirmMsg: "",
        testUsername: "",
        testEmail: "",
        error: "",
        isLoading: false,
        bounce: false
    })


    const handleSubmit = async (e) => {

        e.preventDefault()

        setFormData({ ...formData, isLoading: true, bounce: false })

        if (!eightChar.test(formData.password)){
            setFormData({
                ...formData,
                isLoading: false,
                testPasswordMsg: "Utilisez 8 caractères ou plus"
            })
            return null
        }

        if (formData.password !== formData.confirmPassword) {
            setFormData({
                ...formData,
                isLoading: false,
                testConfirmMsg: "Les mots de passe ne correspondent pas"
            })
            return null
        }

        registerUser({
            username: formData.username,
            email: formData.email,
            password: formData.password
        })
            .then((res) => {
                const token = res.data.token
                localStorage.setItem("token", token)

                router.replace("/dashboard")
            })
            .catch((e) => {
                if (e.response.data.message.includes("utilisateur")) {
                    setFormData({
                        ...formData,
                        isLoading: false,
                        testUsername: e.response.data.message
                    })
                } else if (e.response.data.message.includes("mail")) {
                    setFormData({
                        ...formData,
                        isLoading: false,
                        testEmail: e.response.data.message
                    })
                } else {
                    setFormData({
                        ...formData,
                        password: "",
                        confirmPassword: "",
                        error: e.response.data.message || e.message,
                        isLoading: false,
                        bounce: true
                    })
                }
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
                    <h2>Inscription</h2>
                </div>

                {formData.error && <div id={"error"} className={`${formData.bounce ? "bounce" : null } ${styles.error}`}>{formData.error}</div>}

                <input
                    className={formData.testUsername ? styles.red_input : null}
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value, testUsername: ""})}
                    type="text"
                    name={"username"}
                    id={"username"}
                    required={true}
                    placeholder={"Nom d'utilisateur (visible)"}
                />
                {formData.testUsername ? <p className={`bounce ${styles.error_msg}`}>{formData.testUsername}</p> : null}

                <input
                    className={formData.testEmail ? styles.red_input : null}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value, testEmail: ""})}
                    type="email"
                    name={"email"}
                    id={"email"}
                    required={true}
                    placeholder={"Adresse e-mail"}
                />
                {formData.testEmail ? <p className={`bounce ${styles.error_msg}`}>{formData.testEmail}</p> : null}

                <input
                    className={formData.testPasswordMsg ? styles.red_input : null}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value, testPasswordMsg: ""})}
                    type="password"
                    name={"password"}
                    id={"password"}
                    required={true}
                    placeholder={"Mot de passe"}
                />
                {formData.testPasswordMsg ? <p className={`bounce ${styles.error_msg}`}>{formData.testPasswordMsg}</p> : null}

                <input
                    className={formData.testConfirmMsg ? styles.red_input : null}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value, testConfirmMsg: ""})}
                    type="password"
                    name={"confirmPassword"}
                    id={"confirmPassword"}
                    required={true}
                    placeholder={"Confirmer le mot de passe"}
                />
                {formData.testConfirmMsg ? <p className={`bounce ${styles.error_msg}`}>{formData.testConfirmMsg}</p> : null}

                <div className={styles.links}>
                    <button disabled={formData.isLoading} type="submit" className={`${styles.login_btn} btn`}>
                        {formData.isLoading ? "Envoi ..." : "Créer mon compte"}
                    </button>
                    <p>
                        Vous avez déjà un compte ?
                        <Link href={"/login"}>
                            <a>Connectez-vous !</a>
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

export default RegisterForm
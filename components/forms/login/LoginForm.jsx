import styles from './LoginForm.module.css'
import { useRouter } from 'next/router'
import { useState } from "react"
import loginUser from "../../../services/loginUser"

const LoginForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        error: "",
        isLoading: false,
    })

    const handleSubmit = async (e) => {

        e.preventDefault()

        setFormData({ ...formData, isLoading: true })

        loginUser(formData)
            .then((res) => {
                const token = res.data.token
                console.log(token)
                localStorage.setItem("token", token)

                router.back()
            })
            .catch((e) => {
                console.log(e)
                setFormData({
                    ...formData,
                    error: e.response.data.message || e.message,
                    isLoading: false
                })
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            {formData.error && <div>{formData.error}</div>}

            <label htmlFor="username">Nom d'utilisateur</label>
            <input
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                type="text"
                name="username"
                id="username"
                required={true}
            />


            <label htmlFor="password">Mot de passe</label>
            <input
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password"
                name="password"
                id="password"
                required={true}
            />

            <button disabled={formData.isLoading} type="submit">
                {formData.isLoading ? "Sending" : "Se connecter"}
            </button>
        </form>
    )


}

export default LoginForm
import Layout from "../components/layout/Layout"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { UserContext } from "../components/user"
import verifyToken from "../services/users/verifyToken"
import '../styles/globals.css'
import '../styles/helpers.css'
import AuthorizationError from "../components/errors/authorization/AuthorizationError";

function App({ Component, pageProps }) {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const userCheck = async () => {
        const token = localStorage.getItem("token")

        if (token) {
            const verifiedUser = await verifyToken(token)

            if (verifiedUser) {
                setUser(verifiedUser)
            } else {
                localStorage.removeItem("token")
                setUser(null)
            }
        } else {
            setUser(null)
        }
    }

    useEffect(async () => {
        await userCheck()
    }, [])

    useEffect(() => {
        router.events.on('routeChangeStart', userCheck)
    }, [])

    if (pageProps.protected && !user) {
        return <Layout><AuthorizationError/></Layout>
    }

    if (pageProps.protected && user && pageProps.userTypes && pageProps.userTypes.indexOf(user.role) === -1) {
        return <Layout><AuthorizationError/></Layout>
    }

    if (pageProps.layout === false) {
        return <Component {...pageProps} />
    }

    return (
        <UserContext.Provider value={user}>
            <Layout title={pageProps.title}><Component {...pageProps} /></Layout>
        </UserContext.Provider>
    )
}

export default App
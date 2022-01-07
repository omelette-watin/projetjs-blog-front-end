import Layout from "../components/layout/Layout"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { UserContext } from "../components/user"
import verifyToken from "../services/auth/verifyToken"
import '../styles/globals.css'
import '../styles/helpers.css'
import AuthorizationError from "../components/errors/authorization/AuthorizationError"
import { ThemeProvider } from "next-themes"

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
        return  <ThemeProvider><Layout><AuthorizationError/></Layout></ThemeProvider>
    }

    if (pageProps.protected && user && pageProps.userTypes && pageProps.userTypes.indexOf(user.role) === -1) {
        return (
            <UserContext.Provider value={user}>
                <ThemeProvider><Layout><AuthorizationError/></Layout></ThemeProvider>
            </UserContext.Provider>
       )
    }

    if (pageProps.layout === false) {
        return (
            <UserContext.Provider value={user}>
                <ThemeProvider><Layout><Component {...pageProps} /></Layout></ThemeProvider>
            </UserContext.Provider>
        )
    }

    return (
        <UserContext.Provider value={user}>
            <ThemeProvider disableTransitionOnChange={true}>
                <Layout title={pageProps.title}><Component {...pageProps} /></Layout>
            </ThemeProvider>
        </UserContext.Provider>
    )
}

export default App
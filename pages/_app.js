import Layout from "../components/layout/Layout"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { UserContext } from "../components/user"
import verifyToken from "../services/verifyToken"


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
        return <Layout><div>pd</div></Layout>
    }

    return (
        <UserContext.Provider value={user}>
            <Layout><Component {...pageProps} /></Layout>
        </UserContext.Provider>
    )
}

export default App
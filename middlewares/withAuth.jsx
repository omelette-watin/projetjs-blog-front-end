import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import verifyToken from "../services/verifyToken"

const withAuth = (WrappedComponent) => {
    return (props) => {
        const Router = useRouter()
        const [user, setUser] = useState(false)

        useEffect(async () => {
            const token = localStorage.getItem("token")

            if (!token) {
                await Router.replace("/login")
            } else {
                const verifiedUser = await verifyToken(token)

                if (verifiedUser) {
                    setUser(verifiedUser)
                } else {
                    localStorage.removeItem("token")
                    await Router.replace("/")
                }
            }
        }, [])

        if (user) {
            return <WrappedComponent {...props} user={user}/>
        } else {
            return null
        }
    }
}

export default withAuth
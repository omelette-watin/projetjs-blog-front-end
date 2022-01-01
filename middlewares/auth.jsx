import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"

const auth = (WrappedComponent) => {
    return (props) => {
        const Router = useRouter()
        const [verified, setVerified] = useState(false)

        useEffect(async () => {
            const accessToken = localStorage.getItem("token")

            if (!accessToken) {
                await Router.replace("/login")
            } else {
                const res = await axios.get("http://localhost:3001/api/auth")
            }
        })


        // if (typeof window !== "undefined") {
        //     const Router = useRouter()
        //
        //     const accessToken = localStorage.getItem("token")
        //
        //     if (!accessToken) {
        //         Router.replace("/login")
        //         return null;
        //     }
        //
        //     return <WrappedComponent {...props} />
        // }
        //
        // return null
    }
}

export default auth
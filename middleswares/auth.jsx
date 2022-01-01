import { useRouter } from "next/router"

const auth = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter()

            const accessToken = localStorage.getItem("token")

            if (!accessToken) {
                Router.replace("/login")
                return null;
            }

            return <WrappedComponent {...props} />
        }

        return null
    }
}
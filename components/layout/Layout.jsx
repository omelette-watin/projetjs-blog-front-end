import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useUser } from "../user";

function Layout({ children }) {
    const { user } = useUser()
    return (
        <div>
            <Navbar user={user} />
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout
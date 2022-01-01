import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout
import {countAllUser} from "../services/users/countUsers";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import About from "../components/home/About";
import LastPosts from "../components/home/LastPosts";

const Home = ({ countUser }) => {
    return (
        <div>
            <Hero countUser={countUser}/>
            <Features/>
            <About/>
            <LastPosts/>
        </div>
    )
}

export async function getStaticProps(context){
    const countUser = await countAllUser()
    return {
        props: {
            countUser
        }
    }
}

export default Home


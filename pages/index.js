import HomePage from "../components/home/index"

const Home = () => {
    return (
        <HomePage />
    )
}

export async function getStaticProps(context){
    return {
        props: {

        }
    }
}

export default Home


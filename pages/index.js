const Home = () => {
    return (
        <div>
            <h1>Bienvenue sur le Blog Unicorn's</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {

        }
    }
}

export default Home


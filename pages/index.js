function Home() {
    return (
        <div>
            <h1>Welcome to Unicorn's Blog</h1>
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
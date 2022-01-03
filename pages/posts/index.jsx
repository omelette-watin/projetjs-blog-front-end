
const Posts = () => {
    return (
        <div>
            <h1>Tous les articles</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Articles"
        }
    }
}

export default Posts
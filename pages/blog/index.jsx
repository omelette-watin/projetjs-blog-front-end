
const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Blog"
        }
    }
}

export default Blog
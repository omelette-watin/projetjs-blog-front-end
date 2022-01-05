import Incoming from "../../components/Incoming"

const Blog = ({ title }) => {
    return (
        <div>
            <Incoming page={title} />
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
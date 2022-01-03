const Doc = () => {
    return (
        <div>
            <h1>Documentation</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Documentation"
        }
    }
}

export default Doc
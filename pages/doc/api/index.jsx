const Api = () => {
    return (
        <div>
            <h1>API Reference</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "API Reference"
        }
    }
}

export default Api
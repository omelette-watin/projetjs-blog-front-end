function Users() {
    return (
        <div>
            <h1>Tous les utilisateurs</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Utilisateurs"
        }
    }
}

export default Users
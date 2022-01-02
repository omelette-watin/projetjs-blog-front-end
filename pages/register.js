function Register() {
    return (
        <div>
            <h1>S'inscrire</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "| Inscription"
        }
    }
}

export default Register
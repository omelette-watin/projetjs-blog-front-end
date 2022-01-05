import LoginForm from '../components/forms/LoginForm'

const Login = () => {

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Connexion",
            layout: false
        }
    }
}

export default Login
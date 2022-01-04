import LoginForm from '../components/forms/login/LoginForm'

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
        }
    }
}

export default Login
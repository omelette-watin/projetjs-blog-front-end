import LoginForm from '../components/forms/LoginForm'
import Head from "next/head"

const Login = ({ title }) => {

    return (
        <div>
            <Head>
                <title>{title ?  title + " - " : null} Unicorn's Blog </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
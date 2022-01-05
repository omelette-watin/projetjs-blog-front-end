import RegisterForm from "../components/forms/RegisterForm"
import Head from "next/head";

const Register = ({ title }) => {
    return (
        <div>
            <Head>
                <title>{title ?  title + " - " : null} Unicorn's Blog </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <RegisterForm/>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Inscription",
            layout: false
        }
    }
}

export default Register
import RegisterForm from "../components/forms/register/RegisterForm"

const Register = () => {
    return (
        <div>
            <RegisterForm/>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Inscription"
        }
    }
}

export default Register
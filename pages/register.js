import RegisterForm from "../components/forms/RegisterForm"

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
            title: "Inscription",
            layout: false
        }
    }
}

export default Register
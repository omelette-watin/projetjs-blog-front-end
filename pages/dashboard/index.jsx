import { useUser } from "../../components/user"

const Dashboard = () => {
    const { user } = useUser()
    return (
        <div>
            <h1>Dashboard de {user.username}</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            protected: true
        }
    }
}

export default Dashboard
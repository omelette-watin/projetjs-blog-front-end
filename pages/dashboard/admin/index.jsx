import { useUser } from "../../../components/user"

const AdminDashboard = () => {
    const { user } = useUser()
    return (
        <div>
            <h1>Admin Dashboard de {user.username}</h1>
            <p>{user.role}</p>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            protected: true,
            title: "| Dashboard",
            userTypes: ['admin']
        }
    }
}


export default AdminDashboard
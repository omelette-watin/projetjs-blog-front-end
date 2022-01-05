import { useUser } from "../../../components/user"
import Incoming from "../../../components/Incoming"

const AdminDashboard = ({ title }) => {
    const { user } = useUser()
    return (
        <div>
            <Incoming page={title} />
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            protected: true,
            title: "Dashboard Admin",
            userTypes: ['admin']
        }
    }
}


export default AdminDashboard
import { useUser } from "../../components/user"
import Incoming from "../../components/Incoming"
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Dashboard = ({ title }) => {
    const { user } = useUser()

    if (user.role === "admin") {
        return (
            <DashboardLayout>
            </DashboardLayout>
        )
    }
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
            title: "Dashboard"
        }
    }
}

export default Dashboard
import { useUser } from "../../components/user"
import Incoming from "../../components/Incoming"
import ReaderDashboard from "../../components/dashboard/reader/ReaderDashboard"

const Dashboard = ({ title }) => {
    const { user } = useUser()

    if (user.role === "reader") {
        return (
            <ReaderDashboard />
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
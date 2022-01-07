import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout>
        </DashboardLayout>
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
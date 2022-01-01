import withAuth from "../../middlewares/withAuth"

const Dashboard = ({ user }) => {
    return (
        <div>
            <h1>Dashboard de {user.username}</h1>
        </div>
    )
}

export default withAuth(Dashboard)
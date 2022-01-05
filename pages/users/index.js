import Incoming from "../../components/Incoming";

const Users = ({ title }) => {
    return (
        <div>
            <Incoming page={title} />
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "Utilisateurs"
        }
    }
}

export default Users
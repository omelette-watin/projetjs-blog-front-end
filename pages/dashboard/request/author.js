import { useUser } from "../../../components/user"
import Incoming from "../../../components/Incoming"

const RequestAuthor = ({ title }) => {
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
            title: "Devenir auteur",
            userTypes: ['reader']
        }
    }
}


export default RequestAuthor
import { useUser } from "../../../components/user"
import Incoming from "../../../components/Incoming"

const RequestAdmin = ({ title }) => {
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
            title: "Devenir administrateur",
            userTypes: ['author']
        }
    }
}


export default RequestAdmin
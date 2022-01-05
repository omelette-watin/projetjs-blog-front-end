import axios from "axios";
import domain from "../domain"

const verifyToken = async (token) => {
    const res = await axios.get(`${domain}/auth/verifytoken`,
        {
            headers:{
                "x-access-token": token
            }
        })
    return res.data
}

export default verifyToken
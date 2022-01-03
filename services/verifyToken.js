import axios from "axios";

const verifyToken = async (token) => {

    // const res = await axios.get("http://localhost:3001/api/auth/verifytoken",
    const res = await axios.get("http://localhost:3001/api/auth/verifytoken",
        {
            headers:{
                "x-access-token": token
            }
        })
    return res.data
}

export default verifyToken
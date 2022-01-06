import api from "../api";

const verifyToken = async (token) => {
    const res = await api.post('/auth/verifytoken',
        {
            headers:{
                "x-access-token": token
            }
        })
    return res.data
}

export default verifyToken
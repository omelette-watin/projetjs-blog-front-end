import api from "../api";

const loginUser = async (data) => {
    return await api.post('/auth/login', data)
}

export default loginUser
import api from "../api";

const registerUser = async (data) => {
    return await api.post('/auth/signup', data)
}

export default registerUser
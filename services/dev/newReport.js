import api from "../api"

const newReport = async (data) => {
    return await api.post('/reports', data)
}

export default newReport
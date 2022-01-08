import api from "../api"

export const getAllCommentsByUserId = async (id) => {
    const { data } = await api.get(`/comments/user/${id}`)
    return data
}


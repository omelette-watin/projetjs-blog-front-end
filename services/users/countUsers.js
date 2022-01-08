import api from "../api"

export const countAllUser = async () => {
    const { data } = await api.get("/users/count")
    return data
}

export const countAuthors = async () => {
    const { data } = await api.get("/users/authors/count")
    return data
}

export const countAdmins = async () => {
    const { data } = await api.get("/users/admins/count")
    return data
}
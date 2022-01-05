import axios from "axios";
import domain from "../domain"

const registerUser = async (data) => {
    return  await axios.post(`${domain}/auth/signup`, data)
}

export default registerUser
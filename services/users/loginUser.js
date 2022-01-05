import axios from "axios";
import domain from "../domain"

const loginUser = async (data) => {
    return  await axios.post(`${domain}/auth/login`, data)
}

export default loginUser
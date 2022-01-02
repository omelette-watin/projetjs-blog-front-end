import axios from "axios";

const loginUser = async (data) => {
    return  await axios.post("http://localhost:3001/api/auth/login", data)
}

export default loginUser
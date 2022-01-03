import axios from "axios";

const loginUser = async (data) => {
    return  await axios.post("http://localhost:3001/api/auth/login", data)
    // return  await axios.post("http://192.168.1.72:3001/api/auth/login", data)

}

export default loginUser
import axios from "axios";

const registerUser = async (data) => {
    // return  await axios.post("http://localhost:3001/api/auth/signup", data)
    return  await axios.post("http://192.168.1.72:3001/api/auth/signup", data)

}

export default registerUser
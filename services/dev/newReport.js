import axios from "axios";
import domain from "../domain"

const newReport = async (data) => {
    return  await axios.post(`${domain}/reports`, data)
}

export default newReport
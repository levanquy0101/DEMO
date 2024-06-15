import axios from "axios";

export const getAll = async () => {
    try {
        // const temp = await axios.get("http://localhost:8080/api/role");
        const temp = ''
        return temp.data;
    } catch (e) {
        console.log(e)
        return [];
    }
}
import axios from "axios";

const API = {
    insertInfo : (saveObj) => {
    console.log("inserting info util api")
    return axios.post("/api/database", saveObj)
    },
    findInfo : () => {
        console.log("finding info in util api")
        return axios.get("/api/answersKey")
    }

}
export default API;
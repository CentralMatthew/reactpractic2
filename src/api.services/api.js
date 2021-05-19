import axios from "axios";

let link = {
    baseURL: "https://reqres.in/api"
}

let axiosInstance = axios.create(link)


async  function getUsers() {
    return await axiosInstance.get('/users?page=2')
}

export {getUsers, axiosInstance}
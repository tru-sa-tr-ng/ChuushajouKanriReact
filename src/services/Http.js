import axios from "axios";
import { BASE_API } from "../shares/constants/app";

export const Http = axios.create({
    baseURL: BASE_API,
})
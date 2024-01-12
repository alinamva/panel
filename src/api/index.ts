import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({ baseURL: baseURL });

const getData = async (url: string) => (await instance.get(url)).data;

export { instance, getData };

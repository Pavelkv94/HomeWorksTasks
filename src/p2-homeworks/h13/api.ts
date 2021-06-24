import axios, { ResponseType } from "axios";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/",
});

export const api = {

    success(value: boolean) {
        const promise = instance.post('test', { success: value })
        return promise
    },

};
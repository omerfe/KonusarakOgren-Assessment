import { BASE_URL } from "../env/config";

const baseManager = {

    getAll: async (url) => {
        let responseData = [];

        await fetch(BASE_URL + url)
            .then(res => res.json())
            .then((data) => {
                responseData = data;
            })
            
        return responseData;
    },

    getEntityById: async (url, id) => {
        let responseData = {};

        await fetch(BASE_URL + url + "/" + id)
            .then(res => res.json())
            .then((data) => {
                responseData = data;
            })

        return responseData;
    },

}

export default baseManager;
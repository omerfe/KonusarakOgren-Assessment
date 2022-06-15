import { API_URL } from "../env/config";

const baseManager = {
  getAll: async (url) => {
    let responseData = {};

    await fetch(API_URL + url)
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    return responseData;
  },

  getEntityById: async (url, id) => {
    let responseData = {};

    await fetch(API_URL + url + "/" + id)
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    return responseData;
  },

  getEntitiesByIds: async (url, ids = []) => {
    let responseData = [];
    let idQuery = API_URL + url + "/";
    ids.forEach((id) => {
      idQuery += id + ",";
    });

    await fetch(idQuery)
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    return responseData;
  },
};

export default baseManager;

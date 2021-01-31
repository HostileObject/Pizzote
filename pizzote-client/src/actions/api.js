import axios from 'axios';

const baseUrl = 'http://178.79.144.117:4000/';

const pizzaApi = {
    pizzaData(url = baseUrl + 'pizzaData/') {
        return {
            fetchAll: () => axios.get(url),
            fetchByID: (id) => axios.get(url + id),
            create: (newRecord) => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: (id) => axios.delete(url + id),
        };
    },
};

export default pizzaApi;

import client_api from "../api-common";

class AirplaneDataService {
    get(id) {
        return client_api.post(`/airplane/search`, { id: id });
    }

    create(data) {
        return client_api.post('/airplane/create', { data });
    }

    update(data) {
        return client_api.post('/airplane/update', { data });
    }

    delete(id) {
        return client_api.post(`/airplane/delete`, { id: id });
    }
}

var AuxVariable = new AirplaneDataService()
export default AuxVariable;

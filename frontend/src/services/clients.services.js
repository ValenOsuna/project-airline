import client_api from "../api-common";


class ClientsDataService{
    get(id){
        return client_api.post(`/passenger/search`,{id:id})
    }
    create(id){
        return client_api.post('/passenger/create',{id:id})
    }
}

export default new ClientsDataService();


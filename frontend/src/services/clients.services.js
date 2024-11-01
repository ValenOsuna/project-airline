import client_api from "../api-common";


class ClientsDataService{
    get(id){
        return client_api.post(`/passenger/search`,{id:id})
    }
    create(data){
        return client_api.post('/passenger/create',{data})
    }
    update(data){
        return client_api.post('/passenger/update',{data})
    }
}

export default new ClientsDataService();


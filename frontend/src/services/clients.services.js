import client_api from "../api-common";


class ClientsDataService{
    get(id){
        return client_api.post(`/pasenger/search`,{id:1})
    }
}

export default new ClientsDataService();
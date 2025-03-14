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
    getClient(){
        return client_api.get(`/passenger/list`,{params:{name:"Gonza"}})
    }
    delete(id){
        return client_api.post(`/passenger/delete`,{id:id})
    }
    getPassengerByPassport(id){
        return client_api.post(`/passenger/search-passport`,{id:id})
    }
}

var AuxVariable  = new ClientsDataService()

export default AuxVariable;


import client_api from "../api-common";


class TicketsDataService{
    get(id){
        return client_api.post(`/ticket/search`,{id:id})
    }
    create(data){
        return client_api.post('/ticket/create',{data})
    }
    update(data){
        return client_api.post('/ticket/update',{data})
    }
}

var AuxVariable  = new TicketsDataService()
export default AuxVariable;
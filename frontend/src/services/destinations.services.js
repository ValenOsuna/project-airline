import client_api from "../api-common";


class DestinationsDataService{
    get(id){
        return client_api.post(`/destination/search`,{id:id})
    }
    create(data){
        return client_api.post('/destination/create',{data})
    }
    update(data){
        return client_api.post('/destination/update',{data})
    }
    getDestinations(){
        return client_api.get(`/destination/list`)
    }
    
}

var AuxVariable  = new DestinationsDataService()

export default AuxVariable;
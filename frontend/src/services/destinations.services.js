import client_api from "../api-common";


class DestinationsDataService{
    get(id){
        return client_api.post(`/destination/search`,{id:id})
    }
    create(data){
        return client_api.post('/destination/create',{data})
    }
}

export default new DestinationsDataService();
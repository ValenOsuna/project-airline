import destinations_api from "../api-common";


class DestinationsDataService{
    get(id){
        return destinations_api.post(`/destination/search`,{id:id})
    }
    create(data){
        return destinations_api.post('/destination/create',{data})
    }
}

export default new DestinationsDataService();
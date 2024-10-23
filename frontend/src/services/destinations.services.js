import destinations_api from "../api-common";


class DestinationsDataService{
    get(id){
        return destinations_api.post(`/destination/search`,{id:id})
    }
}

export default new DestinationsDataService();
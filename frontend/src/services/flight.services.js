import client_api from "../api-common";


class FlightDataService{
    get(id){
        return client_api.post(`/flight/search`,{id:id})
    }
    create(data){
        return client_api.post(`/flight/create`,{data})
    }
}

export default new FlightDataService();
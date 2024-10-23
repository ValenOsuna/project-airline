import client_api from "../api-common";


class FlightDataService{
    get(id){
        return client_api.post(`/flight/search`,{id:id})
    }
}

export default new FlightDataService();
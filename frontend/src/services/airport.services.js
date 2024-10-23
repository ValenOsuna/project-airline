import client_api from "../api-common";


class AirportDataService{
    get(id){
        return client_api.post(`/airport/search`,{id:id})
    }
}

export default new AirportDataService();
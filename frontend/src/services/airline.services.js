import client_api from "../api-common";


class AirlinetDataService{
    get(id){
        return client_api.post(`/airline/search`,{id:id})
    }
}

export default new AirlinetDataService();
import client_api from "../api-common";


class AirportDataService{
    get(id){
        return client_api.post(`/airport/search`,{id:id})
    }
    create(data){
          return client_api.post('/airport/create',{data})
    }
}

export default new AirportDataService();
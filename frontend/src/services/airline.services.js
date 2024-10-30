import client_api from "../api-common";


class AirlinetDataService{
    get(id){
        return client_api.post(`/airline/search`,{id:id})
    }

    create(data){
        return client_api.post('/airline/create',{data})
    }

   
}

export default new AirlinetDataService();
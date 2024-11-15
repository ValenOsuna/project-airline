import client_api from "../api-common";


class AirlinetDataService{
    get(id){
        return client_api.post(`/airline/search`,{id:id})
    }

    create(data){
        return client_api.post('/airline/create',{data})
    
    }
    update(data){
        return client_api.post('/airline/update',{data})
    }
    getAirline(){
        return client_api.get(`/airline/list`,{params:{name:"argentina"}})
    }

   
}

export default new AirlinetDataService();
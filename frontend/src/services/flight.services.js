import client_api from "../api-common";


class FlightDataService{
    get(id){
        return client_api.post(`/flight/search`,{id:id})
    }
    create(data){
        return client_api.post(`/flight/create`,{data})
    }
    update(data){
        return client_api.patch(`/flight/update`,{data})
    }
    getflights(){
        return client_api.get(`/flight/list`,{params:{date:"2024-09-16"}})
    }
}


export default new FlightDataService();
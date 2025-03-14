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
    getFlights(date){
        return client_api.get(`/flight/list`,{params:{date}})
    }
    getflightsbyorigin(origin, destination){
        return client_api.get(`/flight/list-origin`,{params:{origin, destination}})
    }
    getFlightFare(id){
        return client_api.get(`/flight/fare`,{params:{id}})
    }
}
var AuxVariable  = new FlightDataService()

export default AuxVariable;

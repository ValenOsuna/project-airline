import client_api from "../api-common";


class SeatDataService{

    getSeats(id,fare){
        return client_api.post(`/seat/search`,{id:id, fare:fare})
    }
}

var AuxVariable  = new SeatDataService()

export default AuxVariable;
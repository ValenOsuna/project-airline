import client_api from "../api-common";

class SeatDataService{

    getSeats(id){
        return client_api.post(`/seat/search`,{id:id})
    }
}

export default new SeatDataService();
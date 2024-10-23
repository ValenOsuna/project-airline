import tickets_api from "../api-common";


class TicketsDataService{
    get(id){
        return tickets_api.post(`/ticket/search`,{id:id})
    }
}

export default new TicketsDataService();
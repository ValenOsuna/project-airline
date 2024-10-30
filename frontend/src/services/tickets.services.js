import tickets_api from "../api-common";


class TicketsDataService{
    get(id){
        return tickets_api.post(`/ticket/search`,{id:id})
    }
    create(data){
        return tickets_api.post('/ticket/create',{data})
    }
}

export default new TicketsDataService();
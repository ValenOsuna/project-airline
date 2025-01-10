import client_api from "../api-common";


class SaleDataService{
    get(id){
        return client_api.post(`/sale/search`,{id:id})
    }

    create(data){
        return client_api.post(`/sale/create`,{data})
    }

    update(data){
        return client_api.put(`/sale/update`,{data})
    }

    getSales(){
        return client_api.get(`/sale/list`,{params:{issue_date:"22-11-04"}})
    }
    getSalesPrice(wantedFare, flight_price){
        return client_api.post(`/sale/price`,{wantedFare, flight_price})
    }
}

export default new SaleDataService();
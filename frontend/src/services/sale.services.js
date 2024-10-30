import client_api from "../api-common";


class SaleDataService{
    get(id){
        return client_api.post(`/sale/search`,{id:id})
    }

    create(data){
        return client_api.post(`/sale/create`,{data})
    }
}

export default new SaleDataService();
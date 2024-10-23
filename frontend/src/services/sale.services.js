import client_api from "../api-common";


class SaleDataService{
    get(id){
        return client_api.post(`/sale/search`,{id:id})
    }
}

export default new SaleDataService();
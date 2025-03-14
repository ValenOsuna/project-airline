import client_api from "../api-common";


class AirportDataService{
    get(id){
        return client_api.post(`/airport/search`, { id:id })
    }
    create(data){
          return client_api.post('/airport/create', { data })
    }
    update(data){
        return client_api.post('/airport/update', { data })
    }
    getAirport(){
        return client_api.get('/airport/list')
    }
    delete(id){
        console.log(id)
        return client_api.post(`/airport/delete`, { id:id })
    }
}


var AuxVariable  = new AirportDataService()

export default AuxVariable;
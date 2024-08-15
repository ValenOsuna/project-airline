from .vueloController import createFlight, deleteFlight, updateFlight, readFlight
from flask import Blueprint , request

flight = Blueprint("flight",__name__)


@flight.route("/create", methods=['POST'])
def Create():
        Data = request.get_json()
        return createFlight(Data)     
    
    
@flight.route("/search", methods=['POST'])
def Buscar():
    id = request.get_json().get("id")
    return readFlight(id)


@flight.route("/update", methods=['PUT' , 'PATCH'])
def Actualizar():
    Data = request.get_json()
    return updateFlight(**Data)


@flight.route("/delete", methods=['DELETE'])
def Borrar():
    id = request.get_json().get("id")
    return deleteFlight(id)

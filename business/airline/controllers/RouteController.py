from flask import Blueprint, request
#from business import crear_datos_aerolinea
from .AerolineaController import crear_datos_aerolinea, Modificar_aerolinea, borrar_aerolinea,buscar_aerolinea,descomprimir_obj

airline = Blueprint("airline",__name__)


@airline.route("/create", methods=['POST'])
def createAirline():
    try:
        Data = request.get_json()  
        crear_datos_aerolinea(Data)

        return {"msg" : "datos de aerolinea cargados "}
    
    except:
        return {"msg": "No se encuentran datos de aerolinea "}


@airline.route("/buscar", methods=['POST'])
def query_aerolinea():
    Data = request.get_json().get("id") 
    return descomprimir_obj(buscar_aerolinea(Data))


@airline.route("/borrar", methods=['POST'])
def delete_aerolinea():
    Data = request.get_json().get("id")
    return borrar_aerolinea(Data)


@airline.route("/actualizar", methods=['POST'])
def actualizacion_aerolinea():
    data = request.get_json()
    id = request.get_json().get("id")
    return Modificar_aerolinea(**data)
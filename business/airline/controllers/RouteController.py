from flask import Blueprint, request
#from business import crear_datos_aerolinea
from .AerolineaController import crear_datos_aerolinea


airline = Blueprint("airline",__name__)

# Routes
@airline.route("/create", methods=['POST'])
def create():
    try:
        Data = request.get_json()  #le deje la misma variable de arriba, por que no estaba seguro si podia modificar
        crear_datos_aerolinea(Data)

        return {"msg" : "datos de aerolinea cargados "}
    
    except:
        return {"msg": "No se encuentran datos de aerolinea "}
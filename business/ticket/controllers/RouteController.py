from flask import Blueprint, request
from .BoletosController import create_boletos, update_boletos, search_boletos, delete_boletos, descomprimir_obj


ticket = Blueprint("ticket", __name__)


@ticket.route("/create_ticket", methods=["POST"])
def creamos_boletos():
    response = request.get_json()
    create_boletos(response)
    return response


@ticket.route("/ticket-delete", methods=["POST"])
def borrar_boletos():
    response = request.get_json().get("id")
    delete_boletos(response)
    return ("El boleto ha sido cancelado exitosamente")


@ticket.route("/ticket-update", methods=["POST"])
def ajustar_boletos():
    dato = request.get_json()
    id = request.get_json().get("id")
    update_boletos(id, dato)
    return ("El boleto se ha modificado con exito")



@ticket.route("/search-boletos", methods=["POST"])
def consultar_boletos():
    response = request.get_json().get("id")
    return descomprimir_obj(search_boletos(response))

from db import Cursor
from ..models.BoletosClass import Boletos
from pprint import pprint


def search_boletos(id):
    boleto = Cursor.query(Boletos).where(Boletos.id == id)
    if boleto != None:
            pprint(vars(boleto[0]))
            return boleto[0]
    else:
        return "El boleto no se encontro paper"


def descomprimir_obj(Boleto):
    if Boleto != None:
        fac = {"precio": f"{Boleto.precio}",
               "gate": f"{Boleto.gate}",
               "aerolinea": f"{Boleto.aerolinea}",
               "terminal": f"{Boleto.terminal}",
               "asiento": f"{Boleto.asiento}"}
        return fac
    else:
        return "Puede fallar dijo tusan"


def create_boletos(response):
    boleto = Boletos()
    boleto.cargar_boleto(response)
    boleto.save()
    pprint(vars(boleto))


def update_boletos(id, response):
    boleto = search_boletos(id)
    if boleto != None:
        boleto.gate = response["gate"]
        boleto.aerolinea = response["aerolinea"]
        boleto.terminal = response["terminal"]
        boleto.asiento = response["asiento"]
        boleto.precio = response["precio"]
        boleto.save()
    else:
        return "Boleto que desea actualizar no se encuentra..."


def delete_boletos(id):
    boleto = search_boletos(id)
    if boleto != None:
        Cursor.delete(boleto)
        Cursor.commit()
    else:
        return "No se encuentra el boleto que desea borrar"

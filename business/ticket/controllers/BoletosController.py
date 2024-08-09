from db import Cursor
from Core import Boletos
from pprint import pprint


def query_boletos(id):
    boleto = Cursor.query(Boletos).where(Boletos.id == id)
    pprint(vars(boleto[0]))
    return boleto[0]


def descomprimir_obj(Boleto):
    return vars(Boleto)


def crear_boletos(response):
    boleto = Boletos()
    boleto.cargar_boleto(response)
    boleto.save()


def actualizar_boletos(id, response):
    boleto = query_boletos(id)
    boleto.gate = response["gate"]
    boleto.aerolinea = response["aerolinea"]
    boleto.terminal = response["terminal"]
    boleto.asiento = response["asiento"]
    boleto.precio = response["precio"]
    boleto.save()


def borrar_boletos(id):
    boleto = query_boletos(id)
    Cursor.delete(boleto)
    Cursor.commit()

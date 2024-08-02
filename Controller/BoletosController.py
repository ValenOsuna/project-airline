from db import Cursor
from Core import Boletos
from pprint import pprint


def query_boletos(id):
    boleto = Cursor.query(Boletos).where(Boletos.id == id)
    pprint(vars(boleto[0]))
    return boleto[0]


def cear_boletos():
    boleto = Boletos()
    boleto.cargar_boleto()
    boleto.save()


def actualizar_boletos():
    boleto = query_boletos(int(input("Ingrese el ID a modificar: ")))
    boleto.gate = input("Ingrese el gate de destino: ")
    boleto.aerolinea = input("Ingrese la aerolinea de destino: ")
    boleto.terminal = int(input("Ingrese su terminal: "))
    boleto.asiento = int(input("Ingrese su nro de asiento: "))
    boleto.precio = float(input("Ingrese el precio del boleto:$ "))
    boleto.save()


def borrar_boleto():
    boleto = query_boletos(int(input("Ingrese el id: ")))
    Cursor.delete(boleto)
    Cursor.commit()

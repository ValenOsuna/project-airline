from .airline.controllers.AerolineaController import crear_datos_aerolinea,buscar_aerolinea,Modificar_aerolinea,borrar_aerolinea
from .flight.controllers.vueloController import createFlight , updateFlight , deleteFlight , readFlight
from .ticket.controllers.BoletosController import create_boletos, delete_boletos, search_boletos, update_boletos

from .airline.controllers.RouteController import airline
from .flight.controllers.RouteController import flight
from .ticket.controllers.RouteController import ticket

from .airline.controllers.AerolineaController import create, search, delete, descomprimir_obj, update
from .flight.controllers.vueloController import createFlight , updateFlight , deleteFlight , readFlight
from .ticket.controllers.TicketController import create_ticket, delete_ticket, search_ticket, update_ticket

from .airline.controllers.RouteController import airlines
from .flight.controllers.RouteController import flight
from .ticket.controllers.RouteController import ticket

from .flight.models.VueloClass import Flight
from .airline.models.AeroliniaClass import Airlines
from .ticket.models.TicketClass import Ticket

from .airline.controllers.airlineController import create, search, delete, descomprimir_obj, update
from .flight.controllers.flightController import createFlight , updateFlight , deleteFlight , readFlight
from .ticket.controllers.TicketController import create_ticket, delete_ticket, search_ticket, update_ticket

from .airline.controllers.RouteController import airline
from .flight.controllers.RouteController import flight
from .ticket.controllers.RouteController import ticket

from .flight.models.flightClass import Flights
from .airline.models.airlineClass import Airlines
from .ticket.models.TicketClass import Ticket

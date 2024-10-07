import ast
from business import search_airplane_by_id , search_flight_by_id , search_seats  , search_ticket_by_id , search_sale_by_reservation
from business.ticket.controllers.TicketController import ticket_to_dict
from business.seat.controllers.seatController import search_seat_return_objet



flight = search_flight_by_id(1)
#print(vars(flight))


print(((search_sale_by_reservation(123456789).flightDetail.destinationDetail.airportDetail.gates)))
#print(ticket_to_dict(search_ticket_by_id(3)))
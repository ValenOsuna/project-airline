from business import Seat
from db import Session

def seatCheck(airplane, fare, seat, flight):
   # session = Session()
    if len(airplane.fare) == 4:
        if fare == "FC":
            return seatFC(seat)

        elif fare == "BC":
            return seatBC(seat)

        elif fare == "PC":
            return seatPC(seat)

            
        elif fare == "EC":
            return seatEC(seat, flight)
        
    elif airplane.fare == ['BC','PC','EC']:
        if fare == "BC":
            return seatBC(seat)

        elif fare == "PC":
            return seatPC(seat)

            
        elif fare == "EC":
            return seatEC(seat, flight)
            

#['FC','BC','PC','EC']

def defineSeat(seat, flight ):
    if (seat[:2] > 0 and seat[:2]  <= 6) and (seat[:3] == "A" or seat[:3] == "B") and search_seat(seat):
        return True
    
    if (seat[:2] > 6 and seat[:2] <= 12)   and (seat[:3] == "A" or seat[:3] == "B" or seat[:3] == "C") and search_seat(seat):
        return True

    if(seat[:2] > 12 and seat[:2] <= 21) and (seat[:3] == "A" or seat[:3] == "B" or seat[:3] == "C" or seat[:3] == "D") and search_seat(seat):
        return True
    
    if (seat[:2] > 21 and seat[:2] <= flight.column) and (seat[:3] == "A" or seat[:3] == "B" or seat[:3] == "C" or seat[:3] == "D") and search_seat(seat):
        return True
    

def seatFC(seat):
    if seat[:2] <= 6 and (seat[:3] == "A" or seat[:3] == "B") and search_seat(seat):
        return True
    else:
        return False
    

def seatBC(seat):
    if (seat[:2] > 6 and seat[:2] <= 12)   and (seat[:3] == "A" or seat[:3] == "B" or seat[:3] == "C") and search_seat(seat):
        return True
    else:
        return False

def seatPC(seat):
    if(seat[:2] > 12 and seat[:2] <= 21) and (seat[:3] == "A" or seat[:3] == "B" or seat[:3] == "C" or seat[:3] == "D") and search_seat(seat):
        return True
    else:
        return False
    
def seatEC(seat, flight):
    if (seat[:2] > 21 and seat[:2] <= flight.column) and (seat[:3] == "A" or seat[:3] == "B" or seat[:3] == "C" or seat[:3] == "D") and search_seat(seat):
        return True
    else:
        return False
                

def search_seat(wantedSeat):
    session = Session()
    search = session.query(Seat).filter_by(seat=wantedSeat).first()
    session.close()
    if search :
        return False
    else: 
        return True



"""
Debido que cada avion posee determinadas Fare's (clases).

En caso de contener las siguientes clases debe tenerse en cuenta:
1ra Clase: Equivale a 3 asientos ( equivale a filas ABC) y 
maximo 2 filas si el avion lo permite, es decir, la matriz en un avion de 6 filas es (A y B)  | Columnas : 6

Ejecutivo: Equivale a 2 asientos (equivale a filas AB) y maximo 3 filas,
 si el avion lo permite, es decir, la matriz  en un avion de 6 filas es (A, B, C) | Columnas: 6

Premiun: Equivale a 1 1/2 asientos (equivales a filas A B/2) maximo 4 filas,
sí el avion lo permite, es decir, la matriz en un avion de 6 filas es (A, B, C, D) | Columnas: 8

Economy: Equivale a 1 asiento, adopta la cantidad de filas definidas del avion | Columndas: resto 
"""

    #session.close()
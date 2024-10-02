import ast
from business import search_airplane_by_id , search_flight_by_id
from business.seat.controllers.seatController import search_seat_return_objet



airplane = search_airplane_by_id(4)
wantedFare = "BC"
seat = "A15"
flight = search_flight_by_id(1)

seatPerClass = {
    "FC" : ["A" , "B"],
    "BC" : ["A" , "B" , "C"],
    "PC" : ["A" , "B" , "C"],
    "EC" : ast.literal_eval(flight.row) # type: ignore
}



def seatCheck(airplane, wantedFare, seat, flight):
    if search_seat_return_objet(seat) != None:
        raise ValueError("seat not avaliable")
    
    airplane = ast.literal_eval(airplane.fare)
    
    return seatCheckConditional(seat, airplane , wantedFare)


def seatCheckConditional(seat , airplane , wantedFare):
    condition = False

    seatNumber = int(seat[1:3])
    seatRow = seat[0:1]

    startRange , endRange =  checkSeatRange(airplane, wantedFare, flight)


    if (seatNumber > startRange and seatNumber <= endRange) and (seatRow in seatPerClass[wantedFare]):
        condition = True
    
    return condition

def checkSeatRange(airplane , wantedFare, flight):
    seatRangesAux = {
        "FC" : 6,
        "BC" : 6,
        "PC" : 8,
        "EC" : flight.column
    }

    start = 0
    for airplaneFare in airplane:
        if airplaneFare == wantedFare:
            end = start + seatRangesAux[airplaneFare]
            break
        else: 
            start += seatRangesAux[airplaneFare]

    if end > seatRangesAux["EC"]:
        end = seatRangesAux["EC"]

    return start , end




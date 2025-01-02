import React from "react";
import Seat from "./seat.component";


const Row = ({seatList, airplaneFare}) => {
    console.log(airplaneFare)
    return (
    <div className="container col">  
        {airplaneFare === "FC" &&(
        <div className="row col-md-6">
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    />
            )) }
        </div>
        )}
        {airplaneFare === "BC" &&(
        <div className="row col-md-12">
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    />
            )) }
        </div>
        )}
        {airplaneFare === "PC" &&(
        <div className="row col-md-12">
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    />
            )) }
        </div>
        )}
        {airplaneFare === "EC" &&(
        <div className="row col-md-12">
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    />
            )) }
        </div>
        )}
    </div>
    );
};

export default Row;
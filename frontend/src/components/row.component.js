import React from "react";
import Seat from "./seat.component";



const Row = ({seatList, airplaneFare}) => { 
    return (
    <div className="col">  
        <div className="row">
            
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    /> 
               
            )) }

        </div>
    </div>
    );
};

export default Row;
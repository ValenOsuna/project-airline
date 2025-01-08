import React from "react";
import Seat from "./seat.component";



const Row = ({seatList, onChangeSelected}) => { 
    return (
    <div className="col">  
        <div className="row">
            
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    onChangeSelected={onChangeSelected}
                
                    /> 
               
            )) }

        </div>
    </div>
    );
};

export default Row;
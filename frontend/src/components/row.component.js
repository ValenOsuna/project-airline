import React from "react";
import Seat from "./seat.component";



const Row = ({seatList, onChangeSelected, numberOfSales}) => { 
    return (
    <div className="col">  
        <div className="row">
            
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                
                    /> 
               
            )) }

        </div>
    </div>
    );
};

export default Row;
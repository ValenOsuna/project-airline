import React from "react";
import Seat from "./seat.component";


const Row = ({seatList}) => {
    console.log("row")
    console.log(seatList)
    return (
        <div className="row">
            {seatList.map((seat) =>(
                <Seat
                    key={seat.seat}
                    id={seat.seat}
                    status={seat.occupied}
                    />
            )) }
        </div>
    );
};

export default Row;
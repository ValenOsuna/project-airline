import React from "react";
import Seat from "./seat.component";


const Row = ({seatList}) => {
    return (
        <div className="row col-md-6">
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
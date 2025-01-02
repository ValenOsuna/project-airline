import React from "react";
import Row from "./row.component";


const Section = ({response, fare}) => {
    console.log("class:")
    console.log(response)
    return (
        <div className="container mt-5">
            <div className="row">
                
            {Object.keys(response).map((row) => (
                    <Row
                        key={row}
                        airplaneFare={fare}
                        seatList={response[row]}
                    /> 
                )
            )}</div>
        </div>
    );
};

export default Section;
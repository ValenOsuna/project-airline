import React from "react";
import Row from "./row.component";


const Section = ({response}) => {
    console.log("class:")
    console.log(response)
    return (
        <div className="container mt-5">
            <div className="row">
                
            {Object.keys(response).map((row) => (
                    <Row
                        key={row}
                        seatList={response[row]}
                    /> 
                )
            )}</div>
        </div>
    );
};

export default Section;
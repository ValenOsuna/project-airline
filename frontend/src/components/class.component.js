import React from "react";
import Row from "./row.component";


const Section = ({response, onChangeSelected,numberOfSales}) => {
    console.log("class:")
    console.log(response)
    return (
        <div className="container mt-5 ml-2">
            <div className="row">
                
            {Object.keys(response).map((row) => (
                    <Row
                        key={row}
                        onChangeSelected={onChangeSelected}
                        seatList={response[row]}
                        numberOfSales = {numberOfSales}
                    /> 
                )
            )}</div>
        </div>
    );
};

export default Section;
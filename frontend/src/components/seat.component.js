import React from "react";
import Render from "./schema-aux.component";

const seat = ({id, status}) => {
    return ( 
    
        <div className="row">
        {id.includes("A") && (
            <Render id = {id}/> 
        
        )}

        {id.includes("B") && (
            <Render id = {id}/> 
        
        )}

    </div>
    
      
    );
};

export default seat;
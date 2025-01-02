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

        {id.includes("C") && (
                    <Render id = {id}/> 
                
                )}

        {id.includes("D") && (
                    <Render id = {id}/> 
                
                )}

        {id.includes("F") && (
                    <Render id = {id}/> 
                
                )}

        {id.includes("G") && (
                    <Render id = {id}/> 
                
                )}

    </div>
    
      
    );
};

export default seat;
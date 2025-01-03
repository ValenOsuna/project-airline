import React from "react";
import Render from "./schema-aux.component";

const seat = ({id, status}) => {
    return ( 
    
        <div className="row">
        {id.includes("A") && (
            <Render
             id = {id}
             status={status}
            
            /> 
        
        )}

        {id.includes("B") && (
            <Render
            id = {id}
            status={status}
           
           /> 
        
        )}

        {id.includes("C") && (
                    <Render 
                    id = {id}
                    status={status}
           
                    />  
                
                )}

        {id.includes("D") && (
                    <Render 
                    id = {id}
                    status={status}
                    /> 
                
                )}

        {id.includes("F") && (
                    <Render 
                    id = {id}
                    status={status}
                    /> 
                
                )}

        {id.includes("G") && (
                    <Render 
                    id = {id}
                    status={status}
                    /> 
                
                )}

    </div>
    
      
    );
};

export default seat;
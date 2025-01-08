import React from "react";
import Render from "./schema-aux.component";

const seat = ({id, status, onChangeSelected}) => {
    return ( 
    
        <div className="row">
        {id.includes("A") && (
            <Render
             id = {id}
             status={status}
             onChangeSelected={onChangeSelected}
            
            /> 
        
        )}

        {id.includes("B") && (
            <Render
            id = {id}
            status={status}
            onChangeSelected={onChangeSelected}
           
           /> 
        
        )}

        {id.includes("C") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                   
                   />   
                
                )}

        {id.includes("D") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                   
                   />  
                
                )}

        {id.includes("F") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                   
                   />  
                
                )}

        {id.includes("G") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                   
                   />  
                
                )}

    </div>
    
      
    );
};

export default seat;
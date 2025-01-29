import React from "react";
import Render from "./schema-aux.component";

const seat = ({id, status, onChangeSelected, numberOfSales, fare}) => {
    return ( 
    
        <div className="row">
        {id.includes("A") && (
            <Render
             id = {id}
             status={status}
             onChangeSelected={onChangeSelected}
             numberOfSales = {numberOfSales}
             fare = {fare}
            
            /> 
        
        )}

        {id.includes("B") && (
            <Render
            id = {id}
            status={status}
            onChangeSelected={onChangeSelected}
            numberOfSales = {numberOfSales}
           
           /> 
        
        )}

        {id.includes("C") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                   
                   />  
                
                )}

        {id.includes("D") && (
                   <Render
                   id = {id}
                   status={status}
                   onChangeSelected={onChangeSelected}
                   numberOfSales = {numberOfSales}
                  
                  />  
                
                )}

        {id.includes("F") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                   
                   /> 
                
                )}

        {id.includes("G") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                   
                   /> 
                
                )}

    </div>
    
      
    );
};

export default seat;
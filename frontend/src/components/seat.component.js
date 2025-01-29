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
            fare = {fare}
           
           /> 
        
        )}

        {id.includes("C") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                    fare = {fare}
                   
                   /> 
                
                )}

        {id.includes("D") && (
                   <Render
                   id = {id}
                   status={status}
                   onChangeSelected={onChangeSelected}
                   numberOfSales = {numberOfSales}
                   fare = {fare}
                  
                  /> 
                
                )}

        {id.includes("F") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                    fare = {fare}
                   
                   /> 
                
                )}

        {id.includes("G") && (
                    <Render
                    id = {id}
                    status={status}
                    onChangeSelected={onChangeSelected}
                    numberOfSales = {numberOfSales}
                    fare = {fare}
                   
                   /> 
                
                )}

    </div>
    
      
    );
};

export default seat;
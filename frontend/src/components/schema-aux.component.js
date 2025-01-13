import React, { useState } from "react";

var seatsArray = []


function FixedButton(id) {
    document.getElementById(id).classList.add("selected");
    };

    for (var i = 0; i < seatsArray.length; i++){
        FixedButton(seatsArray[i])
        console.log(seatsArray[i])
    }

const Render = ({id, status, onChangeSelected, numberOfSales}) => {
        const [isClicked, setIsClicked] = useState(false);
        const handleClick = (key) => {
            if (seatsArray.length < numberOfSales){
                setIsClicked(!isClicked)
                seatsArray.push(id)
            }
            else {
                setIsClicked(isClicked)
            }   seatsArray.splice(id)
            
            onChangeSelected(seatsArray)            
        };
    
    return ( 
        
        <div key={id}>
            <div id={id} tabIndex={0}  
            className={`seat  ${status ? "cross" : `avaliable ${isClicked ? 'selected' : ''}` } `} 
            onClick={handleClick}>

                {id}
            </div>
        </div>
    );
};

    export default Render;
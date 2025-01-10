import React, { useState } from "react";

var seatsArray = []

function defineArray (key, onChangeSelected, numberOfSales){
    var keyID = key.target.getAttribute('id')
    
    if (seatsArray.includes(keyID)){
        seatsArray.splice(seatsArray.indexOf(keyID), 1)

        
    }
    else { if  (seatsArray.length < numberOfSales) {
        seatsArray.push(keyID)}
        
        
       
    }

    
    onChangeSelected(seatsArray)
    console.log(seatsArray)
    
}

function FixedButton(id) {
    document.getElementById(id).classList.add("selected");
    };

const Render = ({id, status, onChangeSelected, numberOfSales}) => {
        const [isClicked, setIsClicked] = useState(false);
        const handleClick = (key) => {
            setIsClicked(!isClicked)

            defineArray(key, onChangeSelected, numberOfSales)
            for (var i = 0; i < seatsArray.length; i++){
                FixedButton(seatsArray[i])
                console.log(seatsArray[i])
            }
            
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
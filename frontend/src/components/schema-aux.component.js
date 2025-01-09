import React, { useState } from "react";

var seatsArray = []

function defineArray (key, onChangeSelected){
    var keyID = key.target.getAttribute('id')
    
    if (seatsArray.includes(keyID)){
        seatsArray.splice(seatsArray.indexOf(keyID), 1)

        
    }
    else {seatsArray.push(keyID)
       
    }

    
    onChangeSelected(seatsArray)
    
}

function FixedButton(id) {
    document.getElementById(id).classList.add("selected");
    };

const Render = ({id, status, onChangeSelected}) => {
        const [isClicked, setIsClicked] = useState(false);
        const handleClick = (key) => {
            setIsClicked(!isClicked)

            defineArray(key, onChangeSelected)
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
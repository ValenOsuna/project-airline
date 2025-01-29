import React, { useState } from "react";

var seatsArray = [];

function PushArray(key) {
  seatsArray.push(key);
}

function spliceArray(key) {
  
  for(var i = 0; i < seatsArray.length ; i++){
    if (seatsArray[i].seat === key.seat ){
      seatsArray.splice(i , 1)
    }
  }
  
  
}

const Render = ({ id, status, onChangeSelected, numberOfSales, fare }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (key) => {
    const keyID = key.target.getAttribute("id");
    var currentSeatJson = { 
      "seat" : keyID ,
      "fare" : fare
    }
    
  
    if (seatsArray.some(seat => seat.seat === currentSeatJson.seat && seat.fare === currentSeatJson.fare)) {
      setIsClicked(false);
      spliceArray(currentSeatJson);
    } else {
      if (seatsArray.length < numberOfSales && status !== true )  {
        setIsClicked(true);
        PushArray(currentSeatJson);
      }
    }

    onChangeSelected(seatsArray);
    console.log(seatsArray)
  };

  return (
    <div key={id}>
      <div
        id={id}
        tabIndex={0}
        className={`seat ${status ? "cross" : `available ${isClicked ? "selected" : ""}`}`}
        onClick={handleClick}
      >
        {id}
      </div>
    </div>
  );
};  export default Render;

export function FixedButton(array) {
  for (var i = 0; i < array.length; i++) {
    document.getElementById(array[i]).classList.add("selected");
   
    
  }
}



import React, { useState } from "react";

var seatsArray = [];

function PushArray(key) { 
  seatsArray.push(key);
}

function spliceArray(key) {
  if (seatsArray.includes(key)) {
    seatsArray.splice(seatsArray.indexOf(key), 1);
  } 
}

const Render = ({ id, status, onChangeSelected, numberOfSales }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (key) => {
    const keyID = key.target.getAttribute("id");

    if (seatsArray.includes(keyID)) {
      setIsClicked(false);
      spliceArray(keyID);

    } else {

      if (seatsArray.length < numberOfSales) {
        setIsClicked(true);
        PushArray(keyID);
      }
    }

    console.log(seatsArray)
    onChangeSelected(seatsArray);
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
};

export default Render;

export function FixedButton(array) {

    for (var i = 0; i < array.length; i++){
        document.getElementById(array[i]).classList.add("selected");
        console.log(array[i])
    }
}
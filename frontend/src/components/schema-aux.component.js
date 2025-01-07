import React, { useState } from "react";
import SaleMake from "./sale-make.component";

var seatsArray = []
const Render = ({id, status}) => {
        const [isClicked, setIsClicked] = useState(false);
        const handleClick = (key) => {
            setIsClicked(!isClicked)
            seatsArray.push(key.target.getAttribute('id'))
            SaleMake.onChangeSelected(seatsArray)
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
import React, { useState } from "react";


const Render = ({id, status}) => {
        const [isClicked, setIsClicked] = useState(false);
        const handleClick = () => {
            setIsClicked(!isClicked)
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
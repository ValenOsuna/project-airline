import React, { useState , useEffect} from "react";

const AlertMessage = ({visible, message, type}) => {
    const [isVisible, setVisible] = useState({visible});

    useEffect(() => {
        
        if (visible) {
            setVisible(true);
                const timer = setTimeout(() => {
                   setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
        

    }, [visible]);

    if(!isVisible) return null;
    
    return (
    <div className={`alert alert-${type} alert-dismissible fade show mt-3 `} role="alert">
        {message}
    </div>);

};  
export default AlertMessage;
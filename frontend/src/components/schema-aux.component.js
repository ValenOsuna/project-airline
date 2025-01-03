const Render = ({id, status}) => {
    console.log("status")
    console.log(id , status)
    return ( 
    
        <div key={id}>
            <div className="seat">{id}</div>
        </div>
    );
};

    export default Render;
const Render = ({id, status}) => {
    return ( 
        <div key={id}>
            <div className="seat">{id}</div>
        </div>
    );
};

    export default Render;
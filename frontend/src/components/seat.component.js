import React from "react";

const seat = ({id, status}) => {
    return (
        <><React.Fragment key={id}>
            <div className="col-md-6">
                {id.includes("A") && (
                    <>
                        <div className="row">
                            <div
                                className="col-md-6"
                                key={id}
                            >
                                <div className="seat">
                                    {id}
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </React.Fragment>
        <div />
        <React.Fragment key={id}>
                <div className="col-md-6">
                    {id.includes("B") && (
                        <>
                            <div className="row">
                                <div
                                    className="col-md-6"
                                    key={id}
                                >
                                    <div className="seat">
                                        {id}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </React.Fragment>
            </>
    );
};

export default seat;
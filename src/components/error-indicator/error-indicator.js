import React from "react";

const ErrorIndicator = () => {
    return (
        <React.Fragment>
            <div className="alert alert-danger">Something went wrong.</div>
            <button className="btn"><a href="localhost">To home page</a></button>
        </React.Fragment>
    )
}

export default ErrorIndicator;
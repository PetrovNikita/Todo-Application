import React
//, {useState} 
from "react";
import './loading-indicator.css';

const LoadingIndicator = () => {

    /*const [ progress, setProgress ] = useState(0);
    
    setTimeout( () => setProgress(100), 700);

    const style = {
        width: progress + '%'
    }
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style} />
        </div>
    ) */
    return <div>Loading ...</div>
}

export default LoadingIndicator;
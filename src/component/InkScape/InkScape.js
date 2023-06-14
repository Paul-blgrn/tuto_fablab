import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './InkScape.css';

import data from '../../data/lorem.json';

const InkScape = () => {
    // change page title here
    useEffect(() => {
        document.title = 'InkScape - Tutoriels';
    }, []);
    let pageTitle = "InkScape"

    // return to "/"
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };
    
    return(
        <div className="Tutos-Container">
            <div>
                <button className="Tutos-buttonBack" onClick={handleGoHome}>Go Home</button>
            </div>
            <h1>{pageTitle}</h1>
            <p>
                {data.lorem}
            </p>
        </div>
    );
}

export default InkScape;
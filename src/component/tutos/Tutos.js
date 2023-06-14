import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './tutos.css';

const Tutos = () => {
    // change page title here
    useEffect(() => {
        document.title = 'FabLab - Tutoriels';
    }, []);

    // navigation to return back
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // new line
    };
    
    return(
        <div className="Tutos-Container">
            <div>
                <button className="Tutos-buttonBack" onClick={handleGoBack}>Go Back</button>
            </div>
            <h1>FabLab - Tutoriels</h1>
        </div>
    );
}

export default Tutos;
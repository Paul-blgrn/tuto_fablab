import React, { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import parse from 'html-react-parser';

import './TutoPage.css';

const Tutopage = (props) => {
    const {tutoDetail } = props;
    
    // return to "/"
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };

    // close current window
    const closeWindow = () => {
        window.close();
    };

    useEffect(() => {
        document.title = tutoDetail.name;
    }, [tutoDetail.name]);

    return(
        <div className="Tuto-Container">
            <div className="Tuto-button-container">
                <button 
                    className="Tuto-buttonBack" 
                    onClick={handleGoHome}
                >
                    Retour à l'accueil
                </button>

                <button 
                    className="Tuto-buttonBack" 
                    onClick={closeWindow}
                >
                    Fermer L'onglet
                </button>
            </div>

            <h2 
                className="Tuto-Title2"
            >
                {parse(tutoDetail.name)}
            </h2>

            <div
                className="Tuto-Content"
            >
                {parse(tutoDetail.content)}
            </div>
        </div>
    );
}

export default Tutopage;
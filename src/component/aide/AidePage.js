import React, { useEffect } from "react";
import { useNavigate, Link  } from "react-router-dom";
import parse from 'html-react-parser'
import './AidePage.css';

const Tuto = (props) => {
    //const { id } = useParams();

    const { infoDetail } = props;

    // return to "/"
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };

    const closeWindow = () => {
        window.close();
    };

    useEffect(() => {
        document.title = infoDetail.name;
    }, [infoDetail.name]);
    
    return(
        <div className="Aide-Container">
            <div className="Aide-button-container-top">
                <button className="Aide-buttonBack" onClick={handleGoHome}>Retour à l'accueil</button>
                <button className="Aide-buttonBack" onClick={closeWindow}>Fermer L'onglet</button>
            </div>

            <h1 className="Aide-Title2">{infoDetail.name}</h1>

            <div className="Aide-Content">
                {parse(infoDetail.description)}
            </div>

            <div className="Aide-button-container-bottom">
                {
                    infoDetail.subButtons.map((subButtons) => {
                        return (
                            <Link 
                                to={subButtons.route + infoDetail.id + "/" + subButtons.id}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="Aide-button"
                                key={subButtons.id}
                            >
                                {subButtons.name}
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tuto;
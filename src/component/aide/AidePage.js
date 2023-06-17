import React, { useEffect } from "react";
import { Link  } from "react-router-dom";
import parse from 'html-react-parser'
import './AidePage.css';

const Tuto = (props) => {
    //const { id } = useParams();

    const { infoDetail } = props;

    const closeWindow = () => {
        window.close();
    };

    useEffect(() => {
        document.title = infoDetail.name;
    }, [infoDetail.name]);
    
    return(
        <div className="Aide-Container">
            <div className="Aide-button-container-top">
                <button className="Aide-buttonBack" onClick={closeWindow}>Fermer L'onglet</button>
            </div>

            <h1 className="Aide-Title2">{infoDetail.name}</h1>

            <div className="Aide-Description">
                {parse(infoDetail.description)}
            </div>

            <div className="Aide-button-container-bottom">
                {
                    Object.keys(infoDetail.subButtons).length === 0 
                    ? 
                    
                    <h3 className="Aide-Empty">Aucun tutoriel à afficher pour le moment.</h3>
                    
                    :
                    infoDetail.subButtons.map((subButtons) => {
                        return (
                            <Link 
                                to={subButtons.route + infoDetail.id + "/" + subButtons.id}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="Aide-buttons"
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
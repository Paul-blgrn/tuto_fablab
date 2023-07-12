import React, { useEffect } from "react";
//import { useParams  } from "react-router-dom";
import parse from 'html-react-parser';

import './TutoPage.css';

import Index from './tutoriels/index.jsx';

const Tutopage = (props) => {
    const {tutoDetail } = props;

    // get id in adress bar
    //const { id1, id2 } = useParams();
    //console.log("URL ID(1) = " + id1 + "\nURL ID(2) = " + id2)

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
                <div>
                    <Index content={tutoDetail.content} />
                </div>
            </div>
        </div>
    );
}

export default Tutopage;
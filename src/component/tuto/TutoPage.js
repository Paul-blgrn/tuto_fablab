import { useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import parse from 'html-react-parser'
import './TutoPage.css';

const Tuto = (props) => {
    const { infoDetail } = props;

    // return to "/"
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };
    
    return(
        <div className="Tuto-Container">
            <button className="Tuto-buttonBack" onClick={handleGoHome}>Retour à l'accueil</button>
            <h1 className="Tuto-Title2">{infoDetail.name}</h1>
            <div className="Tuto-Content">
                {parse(infoDetail.description)}
            </div>
        </div>
    );
}

export default Tuto;
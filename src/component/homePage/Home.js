import React, { useEffect } from "react";
import { Link  } from "react-router-dom";
import './home.css';

const Home = () => {
    // change page title here
    useEffect(() => {
        document.title = 'FabLab - Accueil';
      }, []);
    return(
        <div className="Home-container">
            <Link to="/tutos" className="Home-button">
                Tutoriels
            </Link>
            <h1>FabLab - Accueil</h1>
        </div>
    );
}

export default Home;
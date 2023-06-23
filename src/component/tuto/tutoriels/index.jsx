import React from 'react';

// editez le style des tutoriels sur ce fichier
import './Tutoriels.css';
import './Keyboard.css';

import Save from './Sauvegarder.jsx';
import Zoom from './Zoom.jsx';
import Vectoriser from './Vectoriser.jsx';

const indexHtml = (props) => {

    const { content } = props;

    return (
        (
            // Si la valeur content dans le fichier json est égale a "save" on affiche la page Sauvegarder.jsx
            content === "save" ? "save" && (
                <Save />
            // Si la valeur de ce meme fichier json est égale à "zoom" on affiche la page Zoom.jsx
            ) : content === "zoom" ? "zoom" && (
                <Zoom />
            // Si la valeur de ce meme fichier json est égale à "vectoriser" on affiche la page Vectoriser.jsx
            ) : content === "vectoriser" ? "vectoriser" && (
                <Vectoriser />
            // si la valeur "content" du fichier json est égale a aucune des valeurs ci-dessus 
            // on affiche une petite phrase qui indique que c'est pas bon
            ) : (
                <h3 className="Empty-Tutorial">404 - Not Found</h3>
            )
        )
    );
}
export default indexHtml;
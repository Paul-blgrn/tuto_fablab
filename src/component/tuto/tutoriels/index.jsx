import './Tutoriels.css';
import './Keyboard.css';

import InkScapeSave from './InkScape/Sauvegarder';
import InkScapeZoom from './InkScape/Zoom';
import InkScapeVectoriser from './InkScape/Vectoriser';
import InkScapeUndo from './InkScape/CancelAction';
import InkScapeRedo from './InkScape/RedoAction';
import InkScapeSelectObject from './InkScape/SelectObject';
import InkScapeCopy from './InkScape/Copy';
import InkScapePaste from './InkScape/Paste';
import InkScapeImport from './InkScape/Import';

const IndexHtml = (props) => {

    const { content } = props;
    return (
        (
            // Si la valeur content dans le fichier json est égale a "save" on affiche la page Sauvegarder.jsx
            content === "inkscape_save" ? "inkscape_save" && (
                <InkScapeSave />
            // Si la valeur de ce meme fichier json est égale à "zoom" on affiche la page Zoom.jsx
            ) : content === "inkscape_zoom" ? "inkscape_zoom" && (
                <InkScapeZoom />
            // Si la valeur de ce meme fichier json est égale à "vectoriser" on affiche la page Vectoriser.jsx
            ) : content === "inkscape_vectoriser" ? "inkscape_vectoriser" && (
                <InkScapeVectoriser />
            // si la valeur "content" du fichier json est égale a aucune des valeurs ci-dessus 
            // on affiche une petite phrase qui indique que c'est pas bon
            ) : content === "inkscape_undo" ? "inkscape_undo" && (
                <InkScapeUndo />
            ) : content === "inkscape_redo" ? "inkscape_redo" && (
                <InkScapeRedo />
            ) : content === "inkscape_selectObject" ? "inkscape_selectObject" && (
                <InkScapeSelectObject/>
            ) : content === "inkscape_copy" ? "inkscape_copy" && (
                <InkScapeCopy />
            ) : content === "inkscape_paste" ? "inkscape_paste" && (
                <InkScapePaste />
            ) : content === "inkscape_import" ? "inkscape_import" && (
                <InkScapeImport />
            ) : (
                <h3 className="Empty_Tutorial">404 - Not Found</h3>
            )
        )
    );
}
export default IndexHtml;
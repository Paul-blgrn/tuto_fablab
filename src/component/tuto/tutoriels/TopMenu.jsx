import React, { useEffect, useState, useRef } from 'react';
import './Keyboard.css';

function usePrevious(value) {
    // create a new reference
    const ref = useRef();
  
    // store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // only re-run if value changes
  
    // return previous value (happens before update in useEffect above)
    return ref.current;
}

const TopMenu = (props) => {
    const { id, topMenu, subMenu } = props;
    //console.log(topMenu)

    const [topmenu, settopmenu] = useState([]);
    const [submenu, setsubmenu] = useState([]);

    const getData = async () => {
		const results = topMenu;
        settopmenu(results);
    };

    const getSubData = async () => {
		const results2 = subMenu;
        setsubmenu(results2);
    };

    useEffect(() => {
        getData().catch((err) => console.log(err));
        getSubData().catch((err) => console.log(err));
    })

    const prevTopMenu = usePrevious(topmenu);
    const prevSubMenu = usePrevious(submenu);

    useEffect(() => {
        prevTopMenu && prevTopMenu.map ((key) => {
            const topMenuID = document.getElementById("menu-top-" + id)
            const topMenu2 = document.getElementById("menu-top2-" + id)
            return(
                //console.log(key),

                // delete hide class
                topMenu2.classList.add("no-top-menu"),

                // remove animation class
                topMenuID
                    .getElementsByTagName('div')
                    .namedItem(key)
                    .classList
                    .remove("top-menu-animate")
            );
        })

        topmenu && topmenu.map((key) => {
            //console.log(key)
            const topMenuID = document.getElementById("menu-top-" + id)
            const topMenu2 = document.getElementById("menu-top2-" + id)
            return(
                //console.log(topMenuID),

                // delete hide class
                topMenu2.classList.remove("no-top-menu"),

                // add animation class
                topMenuID
                    .getElementsByTagName('div')
                    .namedItem(key)
                    .classList
                    .add("top-menu-animate")
            );
        })

        prevSubMenu && prevSubMenu.map((key) => {
            const menuSub = document.getElementById("submenu" + id);
            const menuElement = menuSub.getElementsByTagName('div').namedItem(key);
            const subAnim = menuSub.getElementsByTagName('div').namedItem(key);
            return(
                //console.log(key),
                // hide menu
                menuElement
                    .parentElement
                    .classList
                    .add("no-sub-menu"),
                subAnim.classList.remove("top-menu-animate")
            );
        })

        submenu && submenu.map((key) => {
            const menuSub = document.getElementById("submenu" + id);
            const menuElement = menuSub.getElementsByTagName('div').namedItem(key);
            const subAnim = menuSub.getElementsByTagName('div').namedItem(key);
            return(
                //console.log(key),
                // remove invisible class on content
                menuElement
                    .parentElement
                    .classList
                    .remove("no-sub-menu"),

                    // add animation
                    subAnim.classList.add("top-menu-animate")
            );
        })
    
    }, [id, prevTopMenu, topmenu, prevSubMenu, submenu])

    return(
        <div id={"menu-top2-" + id} className="no-top-menu">
            <div className="menu-top-title">
                <div id="fichier" className="menu-top-title-text">Fichier</div>
                <div id="edition" className="menu-top-title-text">Edition</div>
                <div id="affichage" className="menu-top-title-text">Affichage</div>
                <div id="calque" className="menu-top-title-text">Calque</div>
                <div id="objet" className="menu-top-title-text">object</div>
                <div id="chemin" className="menu-top-title-text">Chemin</div>
                <div id="texte" className="menu-top-title-text">Texte</div>
                <div id="filtres" className="menu-top-title-text">Filtres</div>
                <div id="extensions" className="menu-top-title-text">Extensions</div>
                <div id="aide" className="menu-top-title-text">Aide</div>
            </div>

            <div id={"submenu" + id} className="submenu-top">

                <div id="submenu-fichier" className="submenu-list submenu-fichier no-sub-menu">
                    <div id="nouveau" className="submenu-texte">Nouveau</div>
                    <div id="nouveau-modele" className="submenu-texte">Nouveau à partir d'un modèle</div>
                    <div id="ouvrir" className="submenu-texte">Ouvrir...</div>
                    <div id="recents" className="submenu-texte">Documents récents</div>
                    <hr className="topmenu-hr" />
                    <div id="recharger" className="submenu-texte">Recharger</div>
                    <div id="enregistrer" className="submenu-texte">Enregistrer</div>
                    <div id="enregistrer-sous" className="submenu-texte">Enregistrer sous...</div>
                    <div id="enregistrer-copie" className="submenu-texte">Enregistrer une copie..</div>
                    <div id="enregistrer-modele" className="submenu-texte">Enregistrer un modèle...</div>
                    <hr className="topmenu-hr" />
                    <div id="importer" className="submenu-texte">Importer...</div>
                    <div id="importer-image" className="submenu-texte">Importer une image du web...</div>
                    <div id="exporter" className="submenu-texte">Exporter...</div>
                    <hr className="topmenu-hr" />
                    <div id="nettoyer" className="submenu-texte">Nettoyer le document</div>
                    <hr className="topmenu-hr" />
                    <div id="proprietes" className="submenu-texte">Propriétés du document...</div>
                    <hr className="topmenu-hr" />
                    <div id="fermer" className="submenu-texte">Fermer</div>
                    <div id="quitter" className="submenu-texte">Quitter</div>
                </div>

                <div id="submenu-edition" className="submenu-list submenu-edition no-sub-menu">
                    <div id="annuler" className="submenu-texte">Annuler</div>
                    <div id="retablir" className="submenu-texte">Rétablir</div>
                    <div id="historique-annulations" className="submenu-texte">Historique des annulations</div>
                    <hr className="topmenu-hr" />
                    <div id="couper" className="submenu-texte">Couper</div>
                    <div id="copier" className="submenu-texte">Copier</div>
                    <div id="coller" className="submenu-texte">Coller</div>
                    <div id="coller-sur-place" className="submenu-texte">Coller sur place</div>
                    <div id="coller-style" className="submenu-texte">Coller le style</div>
                    <div id="coller-dimensions" className="submenu-texte">Coller les dimensions</div>
                    <hr className="topmenu-hr" />
                    <div id="rechercher" className="submenu-texte">Rechercher/remplacer</div>
                    <hr className="topmenu-hr" />
                    <div id="dupliquer" className="submenu-texte">Dupliquer</div>
                    <div id="cloner" className="submenu-texte">Cloner</div>
                    <div id="creer-copie" className="submenu-texte">Créer une copie matricielle</div>
                    <hr className="topmenu-hr" />
                    <div id="supprimer" className="submenu-texte">Supprimer</div>
                    <hr className="topmenu-hr" />
                    <div id="selectionner-tout" className="submenu-texte">Sélectionner tout</div>
                    <div id="selectionner-tout-calques" className="submenu-fichier-texte">Tout sélectionner dans tous les calques</div>
                    <div id="selectionner-meme" className="submenu-texte">Sélectionner même</div>
                    <div id="inverser-selection" className="submenu-texte">Inverser la sélection</div>
                    <div id="deselectionner" className="submenu-texte">Désélectionner</div>
                    <hr className="topmenu-hr" />
                    <div id="ajuster-taille-page" className="submenu-texte">Ajuster la taille de la page à la sélection</div>
                    <hr className="topmenu-hr" />
                    <div id="creer-guide" className="submenu-texte">Créer des guides autour de la page</div>
                    <div id="verouiller-guide" className="submenu-texte">Verrouiller tous les guides</div>
                    <div id="supprimer-guide" className="submenu-texte">Supprimer tous les guides</div>
                    <hr className="topmenu-hr" />
                    <div id="editeur-xml" className="submenu-texte">Editeur XML...</div>
                    <hr className="topmenu-hr" />
                    <div id="peripherique-saisie" className="submenu-texte">Périphériques de saisie...</div>
                    <div id="preferences" className="submenu-texte">Préférences</div>
                </div>
            
            </div>
        </div>
    );
}

export default TopMenu;
import React, { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    const { id, topMenu } = props;
    //console.log(topMenu)

    const [topmenu, settopmenu] = useState([]);

    const getData = async () => {
		const results = topMenu;
        settopmenu(results);
    };

    useEffect(() => {
        getData().catch((err) => console.log(err));
    })

    const prevTopMenu = usePrevious(topmenu);

    useEffect(() => {
        prevTopMenu && prevTopMenu.map ((key) => {
            const topMenuID = document.getElementById("menu-top-" + id)
            const topMenu2 = document.getElementById("menu-top2-" + id)
            
            const menuSub = document.getElementById("submenu" + id);
            const targetSubMenu = menuSub.getElementsByTagName('div').namedItem("submenu-" + key)

            const topAnim = topMenuID.getElementsByTagName('div').namedItem(key)
            const subAnim = menuSub.getElementsByTagName('div').namedItem(key);
            return(
                //console.log(key),

                // delete hide class
                topMenu2 && topMenu2.classList.add("no-top-menu"),

                // hide menu
                targetSubMenu && targetSubMenu.classList.add("no-sub-menu"),

                // remove animation class topmenu
                topAnim && topAnim.classList.remove("top-menu-animate"),

                // remove animation class submenu
                subAnim && subAnim.classList.remove("top-menu-animate")
            );
        })

        topmenu && topmenu.map((key) => {
            //console.log(key)
            const topMenuID = document.getElementById("menu-top-" + id);
            const topMenu2 = document.getElementById("menu-top2-" + id);

            const menuSub = document.getElementById("submenu" + id);
            const targetSubMenu = menuSub.getElementsByTagName('div').namedItem("submenu-" + key)

            const topAnim = topMenuID.getElementsByTagName('div').namedItem(key)
            const subAnim = menuSub.getElementsByTagName('div').namedItem(key);
            return(
                //console.log(topMenuID),

                // delete hide class
                topMenu2 && topMenu2.classList.remove("no-top-menu"),

                // show menu
                targetSubMenu && targetSubMenu.classList.remove("no-sub-menu"),

                // add animation class
                topAnim && topAnim.classList.add("top-menu-animate"),

                // remove animation class submenu
                subAnim && subAnim.classList.add("top-menu-animate")
                
            );
        })
    
    }, [id, prevTopMenu, topmenu])

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

                { /* MENU FICHIER */}
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

                { /* MENU EDITION */}
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
                    <div id="selectionner-tout-calques" className="submenu-texte">Tout sélectionner dans tous les calques</div>
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

                { /* MENU AFFICHAGE */}
                <div id="submenu-affichage" className="submenu-list submenu-affichage no-sub-menu">
                    <div id="zoom" className="submenu-texte">Zoom</div>
                    <div id="orientation" className="submenu-texte">Orientation</div>
                    <div id="mode-affichage" className="submenu-texte">Mode d'affichage</div>
                    <div id="mode-affichage-scinde" className="submenu-texte">Mode d'affichage scindé</div>
                    <hr className="topmenu-hr" />
                    <div id="niveaux-gris" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Niveaux de gris</div>
                    <div id="gestion-couleur" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Gestion de la couleur</div>
                    <div id="grille" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Grille</div>
                    <div id="guides" className="submenu-texte">{<FontAwesomeIcon icon={["far", "check-square"]} />} Guides</div>
                    <hr className="topmenu-hr" />
                    <div id="afficher" className="submenu-texte">Afficher/cacher</div>
                    <div id="afficher-boites-dialogue" className="submenu-texte">Afficher/cacher les boîtes de dialogue</div>
                    <div id="palette-commandes" className="submenu-texte">Palette de commandes</div>
                    <hr className="topmenu-hr" />
                    <div id="palettes" className="submenu-texte">Palettes...</div>
                    <div id="messages" className="submenu-texte">Messages...</div>
                    <hr className="topmenu-hr" />
                    <div id="fenetre-precedente" className="submenu-texte">Fenêtre précédente</div>
                    <div id="fenetre-suivante" className="submenu-texte">Fenêtre suivante</div>
                    <hr className="topmenu-hr" />
                    <div id="apercu-icone" className="submenu-texte">Aperçu d'icône</div>
                    <div id="dupliquer-fenetre" className="submenu-texte">Dupliquer la fenêtre</div>
                    <hr className="topmenu-hr" />
                    <div id="plen-ecran" className="submenu-texte">Plein écran</div>
                    <hr className="topmenu-hr" />
                    <div id="ecran-large" className="submenu-texte">{<FontAwesomeIcon icon={["far", "check-square"]} />} Ecran large</div>
                </div>
            
            </div>
        </div>
    );
}

export default TopMenu;
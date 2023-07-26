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
                    <div id="fichier-1" className="submenu-texte">Nouveau</div>
                    <div id="fichier-2" className="submenu-texte">Nouveau à partir d'un modèle</div>
                    <div id="fichier-3" className="submenu-texte">Ouvrir...</div>
                    <div id="fichier-4" className="submenu-texte">Documents récents</div>
                    <hr className="topmenu-hr" />
                    <div id="fichier-5" className="submenu-texte">Recharger</div>
                    <div id="fichier-6" className="submenu-texte">Enregistrer</div>
                    <div id="fichier-7" className="submenu-texte">Enregistrer sous...</div>
                    <div id="fichier-8" className="submenu-texte">Enregistrer une copie..</div>
                    <div id="fichier-9" className="submenu-texte">Enregistrer un modèle...</div>
                    <hr className="topmenu-hr" />
                    <div id="fichier-10" className="submenu-texte">Importer...</div>
                    <div id="fichier-11" className="submenu-texte">Importer une image du web...</div>
                    <div id="fichier-12" className="submenu-texte">Exporter...</div>
                    <hr className="topmenu-hr" />
                    <div id="fichier-13" className="submenu-texte">Nettoyer le document</div>
                    <hr className="topmenu-hr" />
                    <div id="fichier-14" className="submenu-texte">Propriétés du document...</div>
                    <hr className="topmenu-hr" />
                    <div id="fichier-15" className="submenu-texte">Fermer</div>
                    <div id="fichier-16" className="submenu-texte">Quitter</div>
                </div>

                { /* MENU EDITION */}
                <div id="submenu-edition" className="submenu-list submenu-edition no-sub-menu">
                    <div id="edition-1" className="submenu-texte">Annuler</div>
                    <div id="edition-2" className="submenu-texte">Rétablir</div>
                    <div id="edition-3" className="submenu-texte">Historique des annulations</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-4" className="submenu-texte">Couper</div>
                    <div id="edition-5" className="submenu-texte">Copier</div>
                    <div id="edition-6" className="submenu-texte">Coller</div>
                    <div id="edition-7" className="submenu-texte">Coller sur place</div>
                    <div id="edition-8" className="submenu-texte">Coller le style</div>
                    <div id="edition-9" className="submenu-texte">Coller les dimensions</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-10" className="submenu-texte">Rechercher/remplacer</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-11" className="submenu-texte">Dupliquer</div>
                    <div id="edition-12" className="submenu-texte">Cloner</div>
                    <div id="edition-13" className="submenu-texte">Créer une copie matricielle</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-14" className="submenu-texte">Supprimer</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-15" className="submenu-texte">Sélectionner tout</div>
                    <div id="edition-16" className="submenu-texte">Tout sélectionner dans tous les calques</div>
                    <div id="edition-17" className="submenu-texte">Sélectionner même</div>
                    <div id="edition-18" className="submenu-texte">Inverser la sélection</div>
                    <div id="edition-19" className="submenu-texte">Désélectionner</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-20" className="submenu-texte">Ajuster la taille de la page à la sélection</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-21" className="submenu-texte">Créer des guides autour de la page</div>
                    <div id="edition-22" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Verrouiller tous les guides</div>
                    <div id="edition-23" className="submenu-texte">Supprimer tous les guides</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-24" className="submenu-texte">Editeur XML...</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-25" className="submenu-texte">Périphériques de saisie...</div>
                    <div id="edition-26" className="submenu-texte">Préférences</div>
                </div>

                { /* MENU AFFICHAGE */}
                <div id="submenu-affichage" className="submenu-list submenu-affichage no-sub-menu">
                    <div id="affichage-1" className="submenu-texte">Zoom</div>
                    <div id="affichage-2" className="submenu-texte">Orientation</div>
                    <div id="affichage-3" className="submenu-texte">Mode d'affichage</div>
                    <div id="affichage-4" className="submenu-texte">Mode d'affichage scindé</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-5" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Niveaux de gris</div>
                    <div id="affichage-6" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Gestion de la couleur</div>
                    <div id="affichage-7" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Grille</div>
                    <div id="affichage-8" className="submenu-texte">{<FontAwesomeIcon icon={["far", "check-square"]} />} Guides</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-9" className="submenu-texte">Afficher/cacher</div>
                    <div id="affichage-10" className="submenu-texte">Afficher/cacher les boîtes de dialogue</div>
                    <div id="affichage-11" className="submenu-texte">Palette de commandes</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-12" className="submenu-texte">Palettes...</div>
                    <div id="affichage-13" className="submenu-texte">Messages...</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-14" className="submenu-texte">Fenêtre précédente</div>
                    <div id="affichage-15" className="submenu-texte">Fenêtre suivante</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-16" className="submenu-texte">Aperçu d'icône</div>
                    <div id="affichage-17" className="submenu-texte">Dupliquer la fenêtre</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-18" className="submenu-texte">Plein écran</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-19" className="submenu-texte">{<FontAwesomeIcon icon={["far", "check-square"]} />} Ecran large</div>
                </div>

                { /* MENU CALQUE */}
                <div id="submenu-calque" className="submenu-list submenu-calque no-sub-menu">
                    <div id="calque-1" className="submenu-texte">Calques et objets...</div>
                    <hr className="topmenu-hr" />
                    <div id="calque-2" className="submenu-texte">Ajouter un calque...</div>
                    <div id="calque-3" className="submenu-texte">Renommer le calque...</div>
                    <hr className="topmenu-hr" />
                    <div id="calque-4" className="submenu-texte">Afficher/masquer le calque actif</div>
                    <div id="calque-5" className="submenu-texte">Verrouiller/déverrouiller le calque actif</div>
                    <hr className="topmenu-hr" />
                    <div id="calque-6" className="submenu-texte">Passer au calque supérieur</div>
                    <div id="calque-7" className="submenu-texte">Passer au calque inférieur</div>
                    <hr className="topmenu-hr" />
                    <div id="calque-8" className="submenu-texte">Déplacer la sélection au calque supérieur</div>
                    <div id="calque-9" className="submenu-texte">Déplacer la sélection au calque inférieur</div>
                    <div id="calque-10" className="submenu-texte">Déplacer la délection vers le calque...</div>
                    <hr className="topmenu-hr" />
                    <div id="calque-11" className="submenu-texte">Calque au premier plan</div>
                    <div id="calque-12" className="submenu-texte">Monter le calque</div>
                    <div id="calque-13" className="submenu-texte">Descendre le calque</div>
                    <div id="calque-14" className="submenu-texte">Calque à l'arrière-plan</div>
                    <hr className="topmenu-hr" />
                    <div id="calque-15" className="submenu-texte">Dupliquer le calque actif</div>
                    <div id="calque-16" className="submenu-texte">Supprimer le calque actif</div>
                </div>

                { /* MENU OBJET */}
                <div id="submenu-objet" className="submenu-list submenu-objet no-sub-menu">
                    <div id="objet-1" className="submenu-texte"></div>    
                    <hr className="topmenu-hr" />
                </div>

                { /* MENU CHEMIN */}
                <div id="submenu-chemin" className="submenu-list submenu-chemin no-sub-menu">
                    <div id="chemin-1" className="submenu-texte"></div> 
                    <hr className="topmenu-hr" />
                </div>

                { /* MENU TEXTE */}
                <div id="submenu-texte" className="submenu-list submenu-texte2 no-sub-menu">
                    <div id="texte-1" className="submenu-texte"></div> 
                    <hr className="topmenu-hr" />
                </div>

                { /* MENU FILTRES */}
                <div id="submenu-filtres" className="submenu-list submenu-filtres no-sub-menu">
                    <div id="filtres-1" className="submenu-texte"></div> 
                    <hr className="topmenu-hr" />
                </div>

                { /* MENU EXTENSIONS */}
                <div id="submenu-extensions" className="submenu-list submenu-extensions no-sub-menu">
                    <div id="extensions-1" className="submenu-texte"></div> 
                    <hr className="topmenu-hr" />
                </div>

                { /* MENU AIDE */}
                <div id="submenu-aide" className="submenu-list submenu-aide no-sub-menu">
                    <div id="aide-1" className="submenu-texte">Manuel d'inkscape</div>
                    <div id="aide-2" className="submenu-texte">Référence des raccourcis clavier et souris</div>
                    <div id="aide-3" className="submenu-texte">Poser une question</div>
                    <div id="aide-4" className="submenu-texte">Didacticiels</div>
                    <div id="aide-5" className="submenu-texte">Option de la ligne de commande</div>
                    <div id="aide-6" className="submenu-texte">FAQ</div>
                    <div id="aide-7" className="submenu-texte">Nouveautés de cette version</div>
                    <div id="aide-8" className="submenu-texte">Signaler un problème</div>
                    <div id="aide-9" className="submenu-texte">Faire un don</div>
                    <div id="aide-10" className="submenu-texte">Spécification de SVG 1.1</div>
                    <div id="aide-11" className="submenu-texte">Spécification de SVG 2</div>
                    <hr className="topmenu-hr" />
                    <div id="aide-12" className="submenu-texte">Gestion de la mémoire</div>
                    <div id="aide-13" className="submenu-texte">À propos d'inkscape</div>
                </div>
            
            </div>
        </div>
    );
}

export default TopMenu;
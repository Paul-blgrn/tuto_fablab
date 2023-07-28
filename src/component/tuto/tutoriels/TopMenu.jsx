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
            const topMenuID = document.getElementById("menu-top-" + id);
            const topMenu2ID = document.getElementById("menu-top2-" + id);

            const menuSub = document.getElementById("submenu" + id);
            const targetSubMenu = menuSub.getElementsByTagName('div').namedItem("submenu-" + key)

            const topAnim = topMenuID.getElementsByTagName('div').namedItem(key)
            const subAnim = menuSub.getElementsByTagName('div').namedItem(key);

            const miniMenu = document.getElementById("submenu-" + key)
            return(
                //console.log(key),

                // delete hide class
                topMenu2ID && topMenu2ID.classList.add("no-top-menu"),

                // submenu of a submenu (show content if selected)
                miniMenu && miniMenu.classList.add("no-sub-menu"),

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
            const topMenu2ID = document.getElementById("menu-top2-" + id);

            const menuSub = document.getElementById("submenu" + id);
            const targetSubMenu = menuSub.getElementsByTagName('div').namedItem("submenu-" + key)

            const topAnim = topMenuID.getElementsByTagName('div').namedItem(key)
            const subAnim = menuSub.getElementsByTagName('div').namedItem(key);

            const miniMenu = document.getElementById("submenu-" + key)
            return(
                //targetMiniMenu && console.log(targetMiniMenu),

                // delete hide class
                topMenu2ID && topMenu2ID.classList.remove("no-top-menu"),

                // show menu
                targetSubMenu && targetSubMenu.classList.remove("no-sub-menu"),

                // submenu of a submenu (show content if selected)
                miniMenu && miniMenu.classList.remove("no-sub-menu"),

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
                    <div id="fichier-4" className="submenu-texte">
                        Documents récents 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>
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
                    <div id="edition-9" className="submenu-texte">
                        Coller les dimensions
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>
                    <hr className="topmenu-hr" />
                    <div id="edition-10" className="submenu-texte">Rechercher/remplacer</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-11" className="submenu-texte">Dupliquer</div>
                    <div id="edition-12" className="submenu-texte">
                        Cloner
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>
                    <div id="edition-13" className="submenu-texte">Créer une copie matricielle</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-14" className="submenu-texte">Supprimer</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-15" className="submenu-texte">Sélectionner tout</div>
                    <div id="edition-16" className="submenu-texte">Tout sélectionner dans tous les calques</div>
                    <div id="edition-17" className="submenu-texte">
                        Sélectionner même
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>
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
                    <div id="affichage-1" className="submenu-texte">
                        Zoom 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-zoom" className="submenu-list submenu-zoom no-sub-menu">
                            <div id="zoom-1" className="submenu-texte">Zoomer</div>
                            <div id="zoom-2" className="submenu-texte">Dézoomer</div>
                            <hr className="submenu-hr" />
                            <div id="zoom-3" className="submenu-texte">Zoomer à 1:1</div>
                            <div id="zoom-4" className="submenu-texte">Zoomer à 1:2</div>
                            <div id="zoom-5" className="submenu-texte">Zoomer à 2:1</div>
                            <hr className="submenu-hr" />
                            <div id="zoom-6" className="submenu-texte">Sélection</div>
                            <div id="zoom-7" className="submenu-texte">Dessin</div>
                            <div id="zoom-8" className="submenu-texte">Page</div>
                            <div id="zoom-9" className="submenu-texte">Lageur de la page</div>
                            <div id="zoom-10" className="submenu-texte">Centrer la page</div>
                            <hr className="submenu-hr" />
                            <div id="zoom-11" className="submenu-texte">Zoom précédent</div>
                            <div id="zoom-12" className="submenu-texte">Zoom suivant</div>
                        </div>

                        <div id="submenu-orientation" className="submenu-list submenu-orientation no-sub-menu">
                            <hr className="submenu-hr" />
                        </div>
                    </div>
                    <div id="affichage-2" className="submenu-texte">Orientation {<FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />}</div>
                    <div id="affichage-3" className="submenu-texte">Mode d'affichage {<FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />}</div>
                    <div id="affichage-4" className="submenu-texte">Mode d'affichage scindé {<FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />}</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-5" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Niveaux de gris</div>
                    <div id="affichage-6" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Gestion de la couleur</div>
                    <div id="affichage-7" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Grille</div>
                    <div id="affichage-8" className="submenu-texte">{<FontAwesomeIcon icon={["far", "check-square"]} />} Guides</div>
                    <hr className="topmenu-hr" />
                    <div id="affichage-9" className="submenu-texte">Afficher/cacher {<FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />}</div>
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
                    <div id="objet-1" className="submenu-texte">Calques et objets...</div>    
                    <div id="objet-2" className="submenu-texte">Fond et contour..</div>    
                    <div id="objet-3" className="submenu-texte">Propriétés de l'objet...</div>    
                    <div id="objet-4" className="submenu-texte">Symboles...</div>    
                    <div id="objet-5" className="submenu-texte">Serveurs d'imprimés...</div>    
                    <div id="objet-6" className="submenu-texte">Sélecteurs et CSS...</div>
                    <hr className="topmenu-hr" />    
                    <div id="objet-7" className="submenu-texte">Grouper</div>    
                    <div id="objet-8" className="submenu-texte">Dégrouper</div>    
                    <div id="objet-9" className="submenu-texte">Sortir les objets sélectionnés du groupe</div> 
                    <hr className="topmenu-hr" />   
                    <div id="objet-10" className="submenu-texte">
                        Découpe
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>    
                    <div id="objet-11" className="submenu-texte">
                        Masque
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>    
                    <div id="objet-12" className="submenu-texte">
                        Motif
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>
                    <hr className="topmenu-hr" />    
                    <div id="objet-13" className="submenu-texte">Objets en marqueur</div>    
                    <div id="objet-14" className="submenu-texte">Objets en guides</div>
                    <hr className="topmenu-hr" />    
                    <div id="objet-15" className="submenu-texte">Monter au premier plan</div>    
                    <div id="objet-16" className="submenu-texte">Monter</div>    
                    <div id="objet-17" className="submenu-texte">Descendre</div>    
                    <div id="objet-18" className="submenu-texte">Descendre à l'arrière-plan</div>
                    <hr className="topmenu-hr" />    
                    <div id="objet-19" className="submenu-texte">Tourner de 90° dans le sens horaire</div>    
                    <div id="objet-20" className="submenu-texte">Tourner de 90° dans le sens anti-horaire</div>    
                    <div id="objet-21" className="submenu-texte">Retourner horizontalement</div>    
                    <div id="objet-22" className="submenu-texte">Retourner verticalement</div>
                    <hr className="topmenu-hr" />    
                    <div id="objet-23" className="submenu-texte">Montrer tout</div>    
                    <div id="objet-24" className="submenu-texte">Déverouiller tout</div>
                    <hr className="topmenu-hr" />    
                    <div id="objet-25" className="submenu-texte">Transformer...</div>    
                    <div id="objet-26" className="submenu-texte">Aligner et distribuer...</div>    
                </div>

                { /* MENU CHEMIN */}
                <div id="submenu-chemin" className="submenu-list submenu-chemin no-sub-menu">
                    <div id="chemin-1" className="submenu-texte">Objet en chemin</div> 
                    <div id="chemin-2" className="submenu-texte">Contour en chemin</div> 
                    <div id="chemin-3" className="submenu-texte">Vectoriser un objet matriciel...</div>
                    <hr className="topmenu-hr" /> 
                    <div id="chemin-4" className="submenu-texte">Union</div> 
                    <div id="chemin-5" className="submenu-texte">Différence</div> 
                    <div id="chemin-6" className="submenu-texte">Intersection</div> 
                    <div id="chemin-7" className="submenu-texte">Exclusion</div> 
                    <div id="chemin-8" className="submenu-texte">Division</div> 
                    <div id="chemin-9" className="submenu-texte">Découper le chemin</div>
                    <hr className="topmenu-hr" /> 
                    <div id="chemin-10" className="submenu-texte">Combiner</div> 
                    <div id="chemin-11" className="submenu-texte">Séparer</div> 
                    <div id="chemin-12" className="submenu-texte">Découper le chemin</div>
                    <hr className="topmenu-hr" /> 
                    <div id="chemin-13" className="submenu-texte">Eroder</div> 
                    <div id="chemin-14" className="submenu-texte">Dilater</div> 
                    <div id="chemin-15" className="submenu-texte">Décalage dynamique</div> 
                    <div id="chemin-16" className="submenu-texte">Décalage lié</div>
                    <hr className="topmenu-hr" /> 
                    <div id="chemin-17" className="submenu-texte">Remplir entre les chemins</div>
                    <hr className="topmenu-hr" /> 
                    <div id="chemin-18" className="submenu-texte">Simplifier</div> 
                    <div id="chemin-19" className="submenu-texte">Inverser</div>
                    <hr className="topmenu-hr" /> 
                    <div id="chemin-20" className="submenu-texte">Effet de chemin...</div> 
                    <div id="chemin-21" className="submenu-texte">Coller l'effet de chemin</div> 
                    <div id="chemin-22" className="submenu-texte">Supprimer l'effet de chemin</div> 
                </div>

                { /* MENU TEXTE */}
                <div id="submenu-texte" className="submenu-list submenu-texte2 no-sub-menu">
                    <div id="texte-1" className="submenu-texte">Texte et police...</div> 
                    <div id="texte-2" className="submenu-texte">Editeur de fontes SVG...</div> 
                    <div id="texte-3" className="submenu-texte">Caractères Unicode...</div> 
                    <hr className="topmenu-hr" />
                    <div id="texte4-" className="submenu-texte">Mettre suivant un chemin</div> 
                    <div id="texte-5" className="submenu-texte">Retirer du chemin</div>
                    <hr className="topmenu-hr" /> 
                    <div id="texte-6" className="submenu-texte">Encadrer</div> 
                    <div id="texte-7" className="submenu-texte">Définir des zones de soustraction</div> 
                    <div id="texte-8" className="submenu-texte">Désencadrer</div> 
                    <div id="texte-9" className="submenu-texte">Convertir en texte</div>
                    <hr className="topmenu-hr" /> 
                    <div id="texte-10" className="submenu-texte">Retirer les crénages manuels</div>
                    <hr className="topmenu-hr" /> 
                    <div id="texte-11" className="submenu-texte">Vérifier l'orthographe...</div> 
                </div>

                { /* MENU FILTRES */}
                <div id="submenu-filtres" className="submenu-list submenu-filtres no-sub-menu">
                    <div id="filtres-1" className="submenu-texte">
                        Biseaux
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-2" className="submenu-texte">
                        Bosselage
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-3" className="submenu-texte">
                        Couleur
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-4" className="submenu-texte">
                        Crêtes
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-5" className="submenu-texte">
                        Déformation
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-6" className="submenu-texte">
                        Dessin et peinture d'image
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-7" className="submenu-texte">
                        Effets d'image
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-8" className="submenu-texte">
                        Eparpiller
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-9" className="submenu-texte">
                        Flous
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-10" className="submenu-texte">
                        Fond et transparence
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-11" className="submenu-texte">
                        Matières
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-12" className="submenu-texte">
                        Morphologie
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-13" className="submenu-texte">
                        Ombrages 3D non réalistes
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-14" className="submenu-texte">
                        Ombres et lueurs
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-15" className="submenu-texte">
                        Outils pixel
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-16" className="submenu-texte">
                        Protubérances
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-17" className="submenu-texte">
                        Superpositions
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="filtres-18" className="submenu-texte">
                        Textures
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <hr className="topmenu-hr" />
                    <div id="filtres-19" className="submenu-texte">Editeur de filtres...</div> 
                    <div id="filtres-20" className="submenu-texte">Supprimer les filtres</div> 
                </div>

                { /* MENU EXTENSIONS */}
                <div id="submenu-extensions" className="submenu-list submenu-extensions no-sub-menu">
                    <div id="extensions-1" className="submenu-texte">Extension précédente</div> 
                    <div id="extensions-2" className="submenu-texte">Paramètre de l'extension précédente...</div> 
                    <hr className="topmenu-hr" />
                    <div id="extensions-3" className="submenu-texte">
                        Couleur
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-4" className="submenu-texte">
                        Document
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-5" className="submenu-texte">
                        Exporter
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-6" className="submenu-texte">
                        Feuille de style
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-7" className="submenu-texte">
                        Gcodetools
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-8" className="submenu-texte">
                        Générer à partir du chemin
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-9" className="submenu-texte">
                        Images
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-10" className="submenu-texte">
                        Images matricielles
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-11" className="submenu-texte">
                        Ink/Stitch
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-12" className="submenu-texte">
                        JessyInk
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-13" className="submenu-texte">
                        Modifier les chemins
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-14" className="submenu-texte">
                        Organiser
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-15" className="submenu-texte">
                        Rendu
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-16" className="submenu-texte"> 
                        Texte
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-17" className="submenu-texte">
                        Typographie
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-18" className="submenu-texte">
                        Visualisation de chemin
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <div id="extensions-19" className="submenu-texte">
                        Web
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 
                    <hr className="topmenu-hr" />
                    <div id="extensions-20" className="submenu-texte">Gérer les extensions...</div> 
                </div>

                { /* MENU AIDE */}
                <div id="submenu-aide" className="submenu-list submenu-aide no-sub-menu">
                    <div id="aide-1" className="submenu-texte">Manuel d'inkscape</div>
                    <div id="aide-2" className="submenu-texte">Référence des raccourcis clavier et souris</div>
                    <div id="aide-3" className="submenu-texte">Poser une question</div>
                    <div id="aide-4" className="submenu-texte">
                        Didacticiels
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div>
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
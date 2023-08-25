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
            const targetMiniMenu = menuSub.getElementsByTagName('div').namedItem("minimenu-" + key)

            //const miniMenuID = document.getElementById("minimenu-" + key);
            const selectMinimenuID = topMenuID.getElementsByTagName('div').namedItem(key)
            return(
                // delete hide class
                topMenu2ID && topMenu2ID.classList.add("no-top-menu"),

                // show menu
                targetSubMenu && targetSubMenu.classList.add("no-sub-menu"),
                targetMiniMenu && targetMiniMenu.classList.add("no-sub-menu"),

                selectMinimenuID && selectMinimenuID.classList.remove("top-menu-animate")
            );
        })

        topmenu && topmenu.map((key) => {
            //console.log(key)

            // return menu ID (keyboard side)
            const topMenuID = document.getElementById("menu-top-" + id);
            
            // return topmenu ID (menu side)
            const topMenu2ID = document.getElementById("menu-top2-" + id);

            const menuSub = document.getElementById("submenu" + id);
            const targetSubMenu = menuSub.getElementsByTagName('div').namedItem("submenu-" + key)
            const targetMiniMenu = menuSub.getElementsByTagName('div').namedItem("minimenu-" + key)

            const selectMinimenuID = topMenuID.getElementsByTagName('div').namedItem(key)
            
            return(
                // delete hide class
                topMenu2ID && topMenu2ID.classList.remove("no-top-menu"),

                // show menu
                targetSubMenu && targetSubMenu.classList.remove("no-sub-menu"),
                targetMiniMenu && targetMiniMenu.classList.remove("no-sub-menu"),

                selectMinimenuID && selectMinimenuID.classList.add("top-menu-animate")
                //selectMinimenuID && console.log(key)       
            );
        })
    
    }, [id, prevTopMenu, topmenu])

    return(
        <div id={"menu-top2-" + id} className="no-top-menu">
            <div className="menu-top-title">
                <div id="fichier" className="menu-top-title-text">Fichier</div>
                <div id="edition" className="menu-top-title-text">Édition</div>
                <div id="affichage" className="menu-top-title-text">Affichage</div>
                <div id="calque" className="menu-top-title-text">Calque</div>
                <div id="objet" className="menu-top-title-text">Objet</div>
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

                    {/* SUBMENU FICHIER RECENTS */}
                    <div id="fichier-4" className="submenu-texte">
                        Documents récents 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-fichier-recents" className="submenu-listsub submenu-fichier-recents no-sub-menu">
                            <div id="fichier-recents-1" className="submenu-texte">
                                VotreFichier.svg
                            </div>
                            <div id="fichier-recents-2" className="submenu-texte">
                                VotreFichier2.svg
                            </div>
                            <div id="fichier-recents-3" className="submenu-texte">
                                VotreFichier3.svg
                            </div>
                            <div id="fichier-recents-4" className="submenu-texte">
                                VotreFichier4.svg
                            </div>
                        </div>
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
                    <div id="edition-1" className="submenu-texte submenu-iconspace">Annuler</div>
                    <div id="edition-2" className="submenu-texte submenu-iconspace">Rétablir</div>
                    <div id="edition-3" className="submenu-texte submenu-iconspace">Historique des annulations</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-4" className="submenu-texte submenu-iconspace">Couper</div>
                    <div id="edition-5" className="submenu-texte submenu-iconspace">Copier</div>
                    <div id="edition-6" className="submenu-texte submenu-iconspace">Coller</div>
                    <div id="edition-7" className="submenu-texte submenu-iconspace">Coller sur place</div>
                    <div id="edition-8" className="submenu-texte submenu-iconspace">Coller le style</div>
                    <div id="edition-9" className="submenu-texte submenu-iconspace">
                        Coller les dimensions
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-edition-coller-dimensions" className="submenu-listsub submenu-edition-coller-dimensions no-sub-menu">
                            <div id="edition-coller-dimensions-1" className="submenu-texte">
                                Coller les dimensions
                            </div>
                            <div id="edition-coller-dimensions-2" className="submenu-texte">
                                Coller la largeur
                            </div>
                            <div id="edition-coller-dimensions-3" className="submenu-texte">
                                Coller la hauteur
                            </div>
                            <div id="edition-coller-dimensions-4" className="submenu-texte">
                                Coller les dimensions séparément
                            </div>
                            <div id="edition-coller-dimensions-5" className="submenu-texte">
                                Coller la largeur séparément
                            </div>
                            <div id="edition-coller-dimensions-6" className="submenu-texte">
                                Coller la hauteur séparément
                            </div>
                        </div>
                    </div>
                    <hr className="topmenu-hr" />
                    <div id="edition-10" className="submenu-texte submenu-iconspace">Rechercher/remplacer</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-11" className="submenu-texte submenu-iconspace">Dupliquer</div>
                    <div id="edition-12" className="submenu-texte submenu-iconspace">
                        Cloner
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-edition-cloner" className="submenu-listsub submenu-cloner no-sub-menu">
                            <div id="cloner-1" className="submenu-texte">
                                Créer un clone
                            </div>
                            <div id="cloner-2" className="submenu-texte">
                                Créer un pavage de clones...
                            </div>
                            <div id="cloner-3" className="submenu-texte">
                                Délier le clone
                            </div>
                            <div id="cloner-4" className="submenu-texte">
                                Délier les clones récursivement
                            </div>
                            <div id="cloner-5" className="submenu-texte">
                                Relier à la copie
                            </div>
                            <div id="cloner-6" className="submenu-texte">
                                Sélectionner l'original
                            </div>
                            <div id="cloner-7" className="submenu-texte">
                                Cloner le chemin original (ECI)
                            </div>
                        </div>
                    </div>
                    <div id="edition-13" className="submenu-texte submenu-iconspace">Créer une copie matricielle</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-14" className="submenu-texte submenu-iconspace">Supprimer</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-15" className="submenu-texte submenu-iconspace">Sélectionner tout</div>
                    <div id="edition-16" className="submenu-texte submenu-iconspace">Tout sélectionner dans tous les calques</div>
                    <div id="edition-17" className="submenu-texte  submenu-iconspace">
                        Sélectionner même
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-edition-selectionner-meme" className="submenu-listsub submenu-selectionner-meme no-sub-menu">
                            <div id="selectionner-meme-1" className="submenu-texte">
                                Fond et contour
                            </div>
                            <div id="selectionner-meme-2" className="submenu-texte">
                                Couleur du fond
                            </div>
                            <div id="selectionner-meme-3" className="submenu-texte">
                                Couleur du contour
                            </div>
                            <div id="selectionner-meme-4" className="submenu-texte">
                                Style du contour
                            </div>
                            <div id="selectionner-meme-5" className="submenu-texte">
                                Type d'objet
                            </div>
                        </div>
                    </div>
                    <div id="edition-18" className="submenu-texte submenu-iconspace">Inverser la sélection</div>
                    <div id="edition-19" className="submenu-texte submenu-iconspace">Désélectionner</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-20" className="submenu-texte submenu-iconspace">Ajuster la taille de la page à la sélection</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-21" className="submenu-texte submenu-iconspace">Créer des guides autour de la page</div>
                    <div id="edition-22" className="submenu-texte">{<FontAwesomeIcon icon={["far", "square"]} />} Verrouiller tous les guides</div>
                    <div id="edition-23" className="submenu-texte submenu-iconspace">Supprimer tous les guides</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-24" className="submenu-texte submenu-iconspace">Editeur XML...</div>
                    <hr className="topmenu-hr" />
                    <div id="edition-25" className="submenu-texte submenu-iconspace">Périphériques de saisie...</div>
                    <div id="edition-26" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-left" icon={["fa", "fa-wrench"]} />
                        } 
                        Préférences
                    </div>
                </div>

                {/* MENU AFFICHAGE */}
                <div id="submenu-affichage" className="submenu-list submenu-affichage no-sub-menu">
                    {/* SUBMENU ZOOM */}
                    <div id="affichage-1" className="submenu-texte submenu-iconspace">
                        Zoom 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-affichage-zoom" className="submenu-list submenu-affichage-zoom no-sub-menu">
                            <div id="affichage-zoom-1" className="submenu-texte">Zoomer</div>
                            <div id="affichage-zoom-2" className="submenu-texte">Dézoomer</div>
                            <hr className="submenu-hr" />
                            <div id="affichage-zoom-3" className="submenu-texte">Zoomer à 1:1</div>
                            <div id="affichage-zoom-4" className="submenu-texte">Zoomer à 1:2</div>
                            <div id="affichage-zoom-5" className="submenu-texte">Zoomer à 2:1</div>
                            <hr className="submenu-hr" />
                            <div id="affichage-zoom-6" className="submenu-texte">Sélection</div>
                            <div id="affichage-zoom-7" className="submenu-texte">Dessin</div>
                            <div id="affichage-zoom-8" className="submenu-texte">Page</div>
                            <div id="affichage-zoom-9" className="submenu-texte">Lageur de la page</div>
                            <div id="affichage-zoom-10" className="submenu-texte">Centrer la page</div>
                            <hr className="submenu-hr" />
                            <div id="affichage-zoom-11" className="submenu-texte">Zoom précédent</div>
                            <div id="affichage-zoom-12" className="submenu-texte">Zoom suivant</div>
                        </div>
                    </div>
                    
                    {/* SUBMENU ORIENTATION */}
                    <div id="affichage-2" className="submenu-texte submenu-iconspace">
                        Orientation 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-affichage-orientation" className="submenu-listsub submenu-affichage-orientation no-sub-menu">
                            <div id="affichage-orientation-1" className="submenu-texte submenu-iconspace">Tourner dans le sens horaire</div>    
                            <div id="affichage-orientation-2" className="submenu-texte submenu-iconspace">Tourner dans le sens anti-horaire</div>    
                            <div id="affichage-orientation-3" className="submenu-texte submenu-iconspace">Aucune rotation</div>    
                            <div id="affichage-orientation-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-left" icon={["far", "check-square"]} />
                                } 
                                Verouiller la rotation
                                </div>    
                            <hr className="submenu-hr" />
                            <div id="affichage-orientation-5" className="submenu-texte submenu-iconspace">Retourner horizontalement</div>  
                            <div id="affichage-orientation-6" className="submenu-texte submenu-iconspace">Retourner verticallement</div>  
                            <div id="affichage-orientation-7" className="submenu-texte submenu-iconspace">Aucun retournement</div>  
                        </div>
                    </div>

                    {/* SUBMENU MODE AFFICHAGE */}
                    <div id="affichage-3" className="submenu-texte submenu-iconspace">
                        Mode d'affichage 
                        {
                            <FontAwesomeIcon 
                                className="submenu-arrowright" 
                                icon={
                                        [
                                            "fa", 
                                            "fa-chevron-right"
                                        ]
                                    } 
                            />
                        }
                        <div id="minimenu-affichage-mode-affichage" className="submenu-listsub submenu-affichage-mode-affichage no-sub-menu">
                            <div id="affichage-mode-affichage-1" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Normal
                            </div>
                            <div id="affichage-mode-affichage-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Contour
                            </div>
                            <div id="affichage-mode-affichage-3" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Sans filtre
                            </div>
                            <div id="affichage-mode-affichage-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-circle"]} 
                                    />
                                } 
                                Traits fins visibles
                            </div>
                            <div id="affichage-mode-affichage-5" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }     
                                Superposition de contours
                            </div>
                            <div id="affichage-mode-affichage-6" className="submenu-texte submenu-iconspace">
                                Cycler
                            </div>
                            <div id="affichage-mode-affichage-7" className="submenu-texte submenu-iconspace">
                                Alterner
                            </div>
                        </div>
                    </div>
                    
                    {/* SUBMENU AFFICHAGE SCINDE */}
                    <div id="affichage-4" className="submenu-texte submenu-iconspace">
                        Mode d'affichage scindé 
                        {
                            <FontAwesomeIcon 
                                className="submenu-arrowright" 
                                icon={["fa", "fa-chevron-right"]} 
                            />
                        }
                        <div id="minimenu-affichage-mode-affichage-scinde" className="submenu-listsub submenu-mode-affichage-scinde no-sub-menu">
                            <div id="mode-affichage-scinde-1" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle-check"]} 
                                    />
                                }
                                Aucun
                            </div>
                            <div id="mode-affichage-scinde-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Diviser
                            </div>
                            <div id="mode-affichage-scinde-3" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Rayon X
                            </div>
                        </div>
                    </div>
                    
                    <hr className="topmenu-hr" />
                    
                    {/* SUBMENU NIVEAUX GRIS */}
                    <div id="affichage-5" className="submenu-texte">
                        {
                            <FontAwesomeIcon 
                                className="submenu-left" 
                                icon={["far", "square"]} 
                            />
                        }
                        Niveaux de gris
                    </div>
                    
                    {/* SUBMENU GESTION COULEUR */}
                    <div id="affichage-6" className="submenu-texte">
                        {
                            <FontAwesomeIcon 
                                className="submenu-left" 
                                icon={["far", "square"]} 
                            />
                        } 
                        Gestion de la couleur
                    </div>
                    
                    {/* SUBMENU GRILLE */}
                    <div id="affichage-7" className="submenu-texte">
                        {
                            <FontAwesomeIcon 
                                className="submenu-left" 
                                icon={["far", "square"]} 
                            />
                        } 
                        Grille
                    </div>
                    
                    {/* SUBMENU GUIDES */}
                    <div id="affichage-8" className="submenu-texte">
                        {
                            <FontAwesomeIcon 
                                className="submenu-left" 
                                icon={["far", "check-square"]} 
                            />
                        } 
                        Guides
                    </div>

                    <hr className="topmenu-hr" />

                    {/* SUBMENU AFFICHER/CACHER */}
                    <div id="affichage-9" className="submenu-texte submenu-iconspace">
                        Afficher/cacher 
                        {
                            <FontAwesomeIcon 
                                className="submenu-arrowright" 
                                icon={["fa", "fa-chevron-right"]} 
                            />
                        }
                        <div id="minimenu-affichage-afficher-cacher" className="submenu-listsub submenu-affichage-afficher-cacher no-sub-menu">
                            <div id="affichage-afficher-cacher-1" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre des commandes
                            </div>
                            <div id="affichage-afficher-cacher-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre de contrôle du magnétisme
                            </div>
                            <div id="affichage-afficher-cacher-3" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre de contrôle des outils
                            </div>
                            <div id="affichage-afficher-cacher-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Boite à outils
                            </div>
                            <div id="affichage-afficher-cacher-5" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Règles
                            </div>
                            <div id="affichage-afficher-cacher-6" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barres de défilement
                            </div>
                            <div id="affichage-afficher-cacher-7" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Palette
                            </div>
                            <div id="affichage-afficher-cacher-8" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre d'état
                            </div>
                        </div>
                    </div>
                    
                    {/* SUBMENU AFFICHER/CACHER BOITES DIALOGUES */}
                    <div id="affichage-10" className="submenu-texte submenu-iconspace">
                        Afficher/cacher les boîtes de dialogue
                    </div>
                    
                    {/* SUBMENU PALETTE COMMANDE */}
                    <div id="affichage-11" className="submenu-texte submenu-iconspace">
                        Palette de commandes
                    </div>
                    
                    <hr className="topmenu-hr" />
                    
                    {/* SUBMENU PALETTES */}
                    <div id="affichage-12" className="submenu-texte submenu-iconspace">
                        Palettes...
                    </div>
                    
                    {/* SUBMENU MESSAGES */}
                    <div id="affichage-13" className="submenu-texte submenu-iconspace">
                        Messages...
                    </div>
                    
                    <hr className="topmenu-hr" />
                    
                    {/* SUBMENU FENETRE PRECEDENTE */}
                    <div id="affichage-14" className="submenu-texte submenu-iconspace">
                        Fenêtre précédente
                    </div>
                    
                    {/* SUBMENU FENETRE SUIVANTE */}
                    <div id="affichage-15" className="submenu-texte submenu-iconspace">
                        Fenêtre suivante
                    </div>
                    
                    <hr className="topmenu-hr" />
                    
                    {/* SUBMENU APERCU ICONE */}
                    <div id="affichage-16" className="submenu-texte submenu-iconspace">
                        Aperçu d'icône
                    </div>
                    
                    {/* SUBMENU DUPLIQUER FENETRE */}
                    <div id="affichage-17" className="submenu-texte submenu-iconspace">
                        Dupliquer la fenêtre
                    </div>
                    
                    
                    <hr className="topmenu-hr" />
                    
                    {/* SUBMENU PLEIN ECRAN */}
                    <div id="affichage-18" className="submenu-texte submenu-iconspace">
                        Plein écran
                    </div>
                    
                    <hr className="topmenu-hr" />
                    
                    {/* SUBMENU ECRAN LARGE */}
                    <div id="affichage-19" className="submenu-texte">
                        {
                            <FontAwesomeIcon 
                                className="submenu-left" 
                                icon={["far", "check-square"]} 
                            />
                        } 
                        Écran large
                    </div>
                </div>

                { /* MENU CALQUE */}
                <div id="submenu-calque" className="submenu-list submenu-calque no-sub-menu">
                    {/* SUBMENU CALQUE ET OBJETS */}
                    <div id="calque-1" className="submenu-texte">
                        Calques et objets...
                    </div>

                    <hr className="topmenu-hr" />

                    {/* SUBMENU AJOUTER CALQUE */}
                    <div id="calque-2" className="submenu-texte">
                        Ajouter un calque...
                    </div>

                    {/* SUBMENU RENOMMER CALQUE */}
                    <div id="calque-3" className="submenu-texte">
                        Renommer le calque...
                    </div>

                    <hr className="topmenu-hr" />

                    {/* SUBMENU AFFICHER/MASQUER CALQUE ACTIF */}
                    <div id="calque-4" className="submenu-texte">
                        Afficher/masquer le calque actif
                    </div>

                    {/* SUBMENU VEROUILLER/DEVEROUILLER CALQUE ACTIF */}
                    <div id="calque-5" className="submenu-texte">
                        Verrouiller/déverrouiller le calque actif
                    </div>
                    
                    <hr className="topmenu-hr" />

                    {/* SUBMENU CALQUE SUPERIEUR */}
                    <div id="calque-6" className="submenu-texte">
                        Passer au calque supérieur
                    </div>
                    
                    {/* SUBMENU CALQUE INFERIEUR */}
                    <div id="calque-7" className="submenu-texte">
                        Passer au calque inférieur
                    </div>
                    
                    <hr className="topmenu-hr" />

                    {/* SUBMENU DEPLACER SELECTION CALQUE + */}
                    <div id="calque-8" className="submenu-texte">
                        Déplacer la sélection au calque supérieur
                    </div>
                    
                    {/* SUBMENU DEPLACER SELECTION CALQUE - */}
                    <div id="calque-9" className="submenu-texte">
                        Déplacer la sélection au calque inférieur
                    </div>
                    
                    {/* SUBMENU DEPLACER SELECTION VERS CALQUE */}
                    <div id="calque-10" className="submenu-texte">
                        Déplacer la sélection vers le calque...
                    </div>
                    
                    <hr className="topmenu-hr" />

                    {/* SUBMENU CALQUE PREMIER PLAN */}
                    <div id="calque-11" className="submenu-texte">
                        Calque au premier plan
                    </div>

                    {/* SUBMENU MONTER CALQUE */}
                    <div id="calque-12" className="submenu-texte">
                        Monter le calque
                    </div>

                    {/* SUBMENU DESCENDRE CALQUE */}
                    <div id="calque-13" className="submenu-texte">
                        Descendre le calque
                    </div>

                    {/* SUBMENU CALQUE ARRIERE PLAN */}
                    <div id="calque-14" className="submenu-texte">
                        Calque à l'arrière-plan
                    </div>

                    <hr className="topmenu-hr" />

                    {/* SUBMENU DUPLIQUER CALQUE ACTIF */}
                    <div id="calque-15" className="submenu-texte">
                        Dupliquer le calque actif
                    </div>

                    {/* SUBMENU SUPPRIMER CALQUE ACTIF*/}
                    <div id="calque-16" className="submenu-texte">
                        Supprimer le calque actif
                    </div>
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
                        <div id="minimenu-objet-decoupe" className="submenu-listsub submenu-objet-decoupe no-sub-menu">
                            <div id="objet-decoupe-1" className="submenu-texte">
                                Définir une découpe
                            </div>
                            <div id="objet-decoupe-2" className="submenu-texte">
                                Découpe inversée
                            </div>
                            <div id="objet-decoupe-3" className="submenu-texte">
                                Relâcher la découpe
                            </div>
                        </div>
                    </div>    
                    <div id="objet-11" className="submenu-texte">
                        Masque
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-objet-masque" className="submenu-listsub submenu-objet-masque no-sub-menu">
                            <div id="objet-masque-1" className="submenu-texte">
                                Définir un masque
                            </div>
                            <div id="objet-masque-2" className="submenu-texte">
                                Définir un masque inversé (ECI)
                            </div>
                            <div id="objet-masque-3" className="submenu-texte">
                                Retirer le masque
                            </div>
                        </div>
                    </div>    
                    <div id="objet-12" className="submenu-texte">
                        Motif
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-objet-motif" className="submenu-listsub submenu-objet-motif no-sub-menu">
                            <div id="objet-motif-1" className="submenu-texte">
                                Objet en motif
                            </div>
                            <div id="objet-motif-2" className="submenu-texte">
                                Motif en objets
                            </div>
                        </div>
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
                    <div id="chemin-13" className="submenu-texte">Éroder</div> 
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
                    <div id="texte-2" className="submenu-texte">Éditeur de fontes SVG...</div> 
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
                    { /* SUBMENU BISEAUX */}
                    <div id="filtres-1" className="submenu-texte">
                        Biseaux
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-biseaux" className="submenu-listsub submenu-filtres-biseaux no-sub-menu">
                            <div id="filtres-biseaux-1" className="submenu-texte">
                                Biseau mat
                            </div>
                            <div id="filtres-biseaux-2" className="submenu-texte">
                                Bouton
                            </div>
                            <div id="filtres-biseaux-3" className="submenu-texte">
                                Contour en arête
                            </div>
                            <div id="filtres-biseaux-4" className="submenu-texte">
                                Contour surélevé
                            </div>
                            <div id="filtres-biseaux-5" className="submenu-texte">
                                Éclairage combiné
                            </div>
                            <div id="filtres-biseaux-6" className="submenu-texte">
                                Éclairage diffus...
                            </div>
                            <div id="filtres-biseaux-7" className="submenu-texte">
                                Éclairage spéculaire...
                            </div>
                            <div id="filtres-biseaux-8" className="submenu-texte">
                                Éclosion
                            </div>
                            <div id="filtres-biseaux-9" className="submenu-texte">
                                Gel fondant
                            </div>
                            <div id="filtres-biseaux-10" className="submenu-texte">
                                Gel fondant mat
                            </div>
                            <div id="filtres-biseaux-11" className="submenu-texte">
                                Get mat...
                            </div>
                            <div id="filtres-biseaux-12" className="submenu-texte">
                                Gel tout usages
                            </div>
                            <div id="filtres-biseaux-13" className="submenu-texte">
                                Huile grasse
                            </div>
                            <div id="filtres-biseaux-14" className="submenu-texte">
                                Métal brillant
                            </div>
                            <div id="filtres-biseaux-15" className="submenu-texte">
                                Métal fondu
                            </div>
                            <div id="filtres-biseaux-16" className="submenu-texte">
                                Métal luisant
                            </div>
                            <div id="filtres-biseaux-17" className="submenu-texte">
                                Métal moulé
                            </div>
                            <div id="filtres-biseaux-18" className="submenu-texte">
                                Microscope électronique
                            </div>
                            <div id="filtres-biseaux-19" className="submenu-texte">
                                Néon
                            </div>
                            <div id="filtres-biseaux-20" className="submenu-texte">
                                Pièce de puzzle
                            </div>
                            <div id="filtres-biseaux-21" className="submenu-texte">
                                Plastique profondément coloré
                            </div>
                            <div id="filtres-biseaux-22" className="submenu-texte">
                                Tôle emboutie
                            </div>
                            <div id="filtres-biseaux-23" className="submenu-texte">
                                Verre solaire
                            </div>
                            <div id="filtres-biseaux-24" className="submenu-texte">
                                Verre translucide
                            </div>
                            <div id="filtres-biseaux-25" className="submenu-texte">
                                Vitrail
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU  BOSSELAGE */}
                    <div id="filtres-2" className="submenu-texte">
                        Bosselage
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-bosselage" className="submenu-listsub submenu-filtres-bosselage no-sub-menu">
                            <div id="filtres-bosselage-1" className="submenu-texte">Acrylique épaisse</div>
                            <div id="filtres-bosselage-2" className="submenu-texte">Bosselage à deux lumières simple</div>
                            <div id="filtres-bosselage-3" className="submenu-texte">Bosselage bulleux</div>
                            <div id="filtres-bosselage-4" className="submenu-texte">Bosselage bulleur mat</div>
                            <div id="filtres-bosselage-5" className="submenu-texte">Bosselage cireux...</div>
                            <div id="filtres-bosselage-6" className="submenu-texte">Bosselage convoluté</div>
                            <div id="filtres-bosselage-7" className="submenu-texte">Bosselage diffus simple</div>
                            <div id="filtres-bosselage-8" className="submenu-texte">Bosselage gélatineux</div>
                            <div id="filtres-bosselage-9" className="submenu-texte">Bosselage papier</div>
                            <div id="filtres-bosselage-10" className="submenu-texte">Bosselage sombre</div>
                            <div id="filtres-bosselage-11" className="submenu-texte">Bosselage spéculaire simple</div>
                            <div id="filtres-bosselage-12" className="submenu-texte">Bosselage toilé</div>
                            <div id="filtres-bosselage-13" className="submenu-texte">Bosselage toilé mat</div>
                            <div id="filtres-bosselage-14" className="submenu-texte">Bosselage velouté</div>
                            <div id="filtres-bosselage-15" className="submenu-texte">Bosselage...</div>
                            <div id="filtres-bosselage-16" className="submenu-texte">Cuir repoussé</div>
                            <div id="filtres-bosselage-17" className="submenu-texte">Gravure bosselée</div>
                            <div id="filtres-bosselage-18" className="submenu-texte">Impression en relief</div>
                            <div id="filtres-bosselage-19" className="submenu-texte">Masque de bosselage bulleux</div>
                            <div id="filtres-bosselage-20" className="submenu-texte">Masque de bosselage toilé</div>
                            <div id="filtres-bosselage-21" className="submenu-texte">Masque de bosselage TSL</div>
                            <div id="filtres-bosselage-22" className="submenu-texte">Papier alluminium</div>
                            <div id="filtres-bosselage-23" className="submenu-texte">Pâte à modeler</div>
                            <div id="filtres-bosselage-24" className="submenu-texte">Peinture épaisse</div>
                            <div id="filtres-bosselage-25" className="submenu-texte">Peinture sur toile brute</div>
                            <div id="filtres-bosselage-26" className="submenu-texte">Plastifier</div>
                            <div id="filtres-bosselage-27" className="submenu-texte">Plâtre</div>
                            <div id="filtres-bosselage-28" className="submenu-texte">Plâtre coloré</div>
                            <div id="filtres-bosselage-29" className="submenu-texte">Toile de lin</div>
                            <div id="filtres-bosselage-30" className="submenu-texte">Vernis ridé</div>
                        </div>
                    </div> 

                    { /* SUBMENU COULEUR */}
                    <div id="filtres-3" className="submenu-texte">
                        Couleur
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-couleur" className="submenu-listsub submenu-filtres-couleur no-sub-menu">
                            <div id="filtres-couleur-1" className="submenu-texte">Brillance...</div>
                            <div id="filtres-couleur-2" className="submenu-texte">Canaux de peinture</div>
                            <div id="filtres-couleur-3" className="submenu-texte">Colorer...</div>
                            <div id="filtres-couleur-4" className="submenu-texte">Couleur douces</div>
                            <div id="filtres-couleur-5" className="submenu-texte">Décalage de couleur...</div>
                            <div id="filtres-couleur-6" className="submenu-texte">Décolore en noir ou blanc...</div>
                            <div id="filtres-couleur-7" className="submenu-texte">Déplacement des canaux CMJ...</div>
                            <div id="filtres-couleur-8" className="submenu-texte">Déplacement des canaux RVB...</div>
                            <div id="filtres-couleur-9" className="submenu-texte">Duochrome...</div>
                            <div id="filtres-couleur-10" className="submenu-texte">Éclairage...</div>
                            <div id="filtres-couleur-11" className="submenu-texte">Extraire un canal...</div>
                            <div id="filtres-couleur-12" className="submenu-texte">Fluorescence</div>
                            <div id="filtres-couleur-13" className="submenu-texte">Fondu...</div>
                            <div id="filtres-couleur-14" className="submenu-texte">Inverser...</div>
                            <div id="filtres-couleur-15" className="submenu-texte">Lumière noire</div>
                            <div id="filtres-couleur-16" className="submenu-texte">Luminosité et contraste...</div>
                            <div id="filtres-couleur-17" className="submenu-texte">Mélanger les opposés</div>
                            <div id="filtres-couleur-18" className="submenu-texte">Niveaux de gris...</div>
                            <div id="filtres-couleur-19" className="submenu-texte">Peinture par canal...</div>
                            <div id="filtres-couleur-20" className="submenu-texte">Perception des couleurs...</div>
                            <div id="filtres-couleur-21" className="submenu-texte">Quadritone fantaisie...</div>
                            <div id="filtres-couleur-22" className="submenu-texte">Simuler CMJ</div>
                            <div id="filtres-couleur-23" className="submenu-texte">Solariser...</div>
                            <div id="filtres-couleur-24" className="submenu-texte">Teinte vers blanc</div>
                            <div id="filtres-couleur-25" className="submenu-texte">Transfert de composantes...</div>
                            <div id="filtres-couleur-26" className="submenu-texte">Trichrome</div>
                            <div id="filtres-couleur-27" className="submenu-texte">Tritone...</div>
                        </div>
                    </div> 

                    { /* SUBMENU CRETES */}
                    <div id="filtres-4" className="submenu-texte">
                        Crêtes
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-cretes" className="submenu-listsub submenu-filtres-cretes no-sub-menu">
                            <div id="filtres-cretes-1" className="submenu-texte">Arrête mate</div>
                            <div id="filtres-cretes-2" className="submenu-texte">Arrête métalisée</div>
                            <div id="filtres-cretes-3" className="submenu-texte">Bulle brillante</div>
                            <div id="filtres-cretes-4" className="submenu-texte">Dragée</div>
                            <div id="filtres-cretes-5" className="submenu-texte">Gel réfringent A</div>
                            <div id="filtres-cretes-6" className="submenu-texte">Gel réfringent B</div>
                            <div id="filtres-cretes-7" className="submenu-texte">Membrane fine</div>
                        </div>
                    </div> 

                    { /* SUBMENU DEFORMATION */}
                    <div id="filtres-5" className="submenu-texte">
                        Déformation
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-deformation" className="submenu-listsub submenu-filtres-deformation no-sub-menu">
                            <div id="filtres-deformation-1" className="submenu-texte">Agitation dilatée</div>
                            <div id="filtres-deformation-2" className="submenu-texte">Agitation interne</div>
                            <div id="filtres-deformation-3" className="submenu-texte">Agitation...</div>
                            <div id="filtres-deformation-4" className="submenu-texte">Barbouillage de pixels</div>
                            <div id="filtres-deformation-5" className="submenu-texte">Clapotis</div>
                            <div id="filtres-deformation-6" className="submenu-texte">Éponge et craie</div>
                            <div id="filtres-deformation-7" className="submenu-texte">Estompage du pourtour...</div>
                            <div id="filtres-deformation-8" className="submenu-texte">Ondulation</div>
                            <div id="filtres-deformation-9" className="submenu-texte">Pourtour déchiré</div>
                            <div id="filtres-deformation-10" className="submenu-texte">Tourbillon</div>
                        </div>
                    </div> 

                    { /* SUBMENU DESSIN ET PEINTURE D'IMAGE */}
                    <div id="filtres-6" className="submenu-texte">
                        Dessin et peinture d'image
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-peinture-image" className="submenu-listsub submenu-filtres-peinture-image no-sub-menu">
                            <div id="filtres-peinture-image-1" className="submenu-texte">Affiche couleur amusante</div>
                            <div id="filtres-peinture-image-2" className="submenu-texte">Chromolitho alternatif</div>
                            <div id="filtres-peinture-image-3" className="submenu-texte">Chromolitho...</div>
                            <div id="filtres-peinture-image-4" className="submenu-texte">Contour lumineux</div>
                            <div id="filtres-peinture-image-5" className="submenu-texte">Crayon</div>
                            <div id="filtres-peinture-image-6" className="submenu-texte">Dessin d'image de base</div>
                            <div id="filtres-peinture-image-7" className="submenu-texte">Dessin de poster</div>
                            <div id="filtres-peinture-image-8" className="submenu-texte">Dessin liquide</div>
                            <div id="filtres-peinture-image-9" className="submenu-texte">Dessin néon...</div>
                            <div id="filtres-peinture-image-10" className="submenu-texte">Dessin transparent liquide</div>
                            <div id="filtres-peinture-image-11" className="submenu-texte">Dessin...</div>
                            <div id="filtres-peinture-image-12" className="submenu-texte">Électrisation...</div>
                            <div id="filtres-peinture-image-13" className="submenu-texte">Encre marbrée...</div>
                            <div id="filtres-peinture-image-14" className="submenu-texte">Gravure croisée...</div>
                            <div id="filtres-peinture-image-15" className="submenu-texte">Gravure par point...</div>
                            <div id="filtres-peinture-image-16" className="submenu-texte">Gravure transparente</div>
                            <div id="filtres-peinture-image-17" className="submenu-texte">Gravure transparente B</div>
                            <div id="filtres-peinture-image-18" className="submenu-texte">Litho</div>
                            <div id="filtres-peinture-image-19" className="submenu-texte">Patron</div>
                            <div id="filtres-peinture-image-20" className="submenu-texte">Peinture à l'huile...</div>
                            <div id="filtres-peinture-image-21" className="submenu-texte">Peinture et poster...</div>
                            <div id="filtres-peinture-image-22" className="submenu-texte">Poster d'agitation</div>
                            <div id="filtres-peinture-image-23" className="submenu-texte">Poster de bruit croisé</div>
                            <div id="filtres-peinture-image-24" className="submenu-texte">Poster de bruit croisé B</div>
                            <div id="filtres-peinture-image-25" className="submenu-texte">Postérisation simple...</div>
                            <div id="filtres-peinture-image-26" className="submenu-texte">Vieille carte postale</div>
                        </div>
                    </div> 

                    { /* SUBMENU EFFET D'IMAGE */}
                    <div id="filtres-7" className="submenu-texte">
                        Effets d'image
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-effet-image" className="submenu-listsub submenu-filtres-effet-image no-sub-menu">
                            <div id="filtres-effet-image-1" className="submenu-texte">Détection de bords...</div>
                            <div id="filtres-effet-image-2" className="submenu-texte">Grain photo</div>
                            <div id="filtres-effet-image-3" className="submenu-texte">Lentille à portrait</div>
                            <div id="filtres-effet-image-4" className="submenu-texte">Netteté</div>
                            <div id="filtres-effet-image-5" className="submenu-texte">Netteté renforcée</div>
                            <div id="filtres-effet-image-6" className="submenu-texte">Vieillissement</div>
                        </div>
                    </div> 

                    { /* SUBMENU EPARPILLER */}
                    <div id="filtres-8" className="submenu-texte">
                        Eparpiller
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-eparpiller" className="submenu-listsub submenu-filtres-eparpiller no-sub-menu">
                            <div id="filtres-eparpiller-1" className="submenu-texte">Aérosol</div>
                            <div id="filtres-eparpiller-2" className="submenu-texte">Cubes</div>
                            <div id="filtres-eparpiller-3" className="submenu-texte">Feuilles</div>
                            <div id="filtres-eparpiller-4" className="submenu-texte">Pointillisme</div>
                        </div>
                    </div> 

                    { /* SUBMENU FLOUS */}
                    <div id="filtres-9" className="submenu-texte">
                        Flous
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-flous" className="submenu-listsub submenu-filtres-flous no-sub-menu">
                            <div id="filtres-flous-1" className="submenu-texte">Apparition</div>
                            <div id="filtres-flous-2" className="submenu-texte">Estompage du pourtour...</div>
                            <div id="filtres-flous-3" className="submenu-texte">Évanescence</div>
                            <div id="filtres-flous-4" className="submenu-texte">Flou croisé...</div>
                            <div id="filtres-flous-5" className="submenu-texte">Flou double</div>
                            <div id="filtres-flous-6" className="submenu-texte">Flou...</div>
                            <div id="filtres-flous-7" className="submenu-texte">Hors focale...</div>
                            <div id="filtres-flous-8" className="submenu-texte">Nettoyage des bords...</div>
                        </div>
                    </div> 

                    { /* SUBMENU FOND ET TRANSPARENCE */}
                    <div id="filtres-10" className="submenu-texte">
                        Fond et transparence
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-transparence" className="submenu-listsub submenu-filtres-transparence no-sub-menu">
                            <div id="filtres-transparence-1" className="submenu-texte">Aplatir la transparence</div>
                            <div id="filtres-transparence-2" className="submenu-texte">Carte de saturation</div>
                            <div id="filtres-transparence-3" className="submenu-texte">Découpe rapide</div>
                            <div id="filtres-transparence-4" className="submenu-texte">Fondre...</div>
                            <div id="filtres-transparence-5" className="submenu-texte">Gomme lumière postérisée</div>
                            <div id="filtres-transparence-6" className="submenu-texte">Gomme lumière...</div>
                            <div id="filtres-transparence-7" className="submenu-texte">Monochrome transparent</div>
                            <div id="filtres-transparence-8" className="submenu-texte">Opacité...</div>
                            <div id="filtres-transparence-9" className="submenu-texte">Remplir le fond</div>
                            <div id="filtres-transparence-10" className="submenu-texte">Silhouette...</div>
                            <div id="filtres-transparence-11" className="submenu-texte">transparence par canal...</div>
                        </div>
                    </div> 

                    { /* SUBMENU MATIERES */}
                    <div id="filtres-11" className="submenu-texte">
                        Matières
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-matieres" className="submenu-listsub submenu-filtres-matieres no-sub-menu">
                            <div id="filtres-matieres-1" className="submenu-texte">Bijou en émail</div>
                            <div id="filtres-matieres-2" className="submenu-texte">Bois 3D</div>
                            <div id="filtres-matieres-3" className="submenu-texte">Cire d'abeille irisée</div>
                            <div id="filtres-matieres-4" className="submenu-texte">Fourrure de léopard</div>
                            <div id="filtres-matieres-5" className="submenu-texte">lave fissurée</div>
                            <div id="filtres-matieres-6" className="submenu-texte">Marbre en 3D</div>
                            <div id="filtres-matieres-7" className="submenu-texte">Métal érodé</div>
                            <div id="filtres-matieres-8" className="submenu-texte">Métal souple</div>
                            <div id="filtres-matieres-9" className="submenu-texte">Nacre en 3D</div>
                            <div id="filtres-matieres-10" className="submenu-texte">Pâte d'or</div>
                            <div id="filtres-matieres-11" className="submenu-texte">Peau de lézard</div>
                            <div id="filtres-matieres-12" className="submenu-texte">Peinture écaillée</div>
                            <div id="filtres-matieres-13" className="submenu-texte">Peinture métallisée</div>
                            <div id="filtres-matieres-14" className="submenu-texte">Projection d'or</div>
                        </div>
                    </div> 

                    { /* SUBMENU MORPHOLOGIE  */}
                    <div id="filtres-12" className="submenu-texte">
                        Morphologie
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-morphologie" className="submenu-listsub submenu-filtres-morphologie no-sub-menu">
                            <div id="filtres-morphologie-1" className="submenu-texte">Adoucissement...</div>
                            <div id="filtres-morphologie-2" className="submenu-texte">Chaud dedans</div>
                            <div id="filtres-morphologie-3" className="submenu-texte">Contour...</div>
                            <div id="filtres-morphologie-4" className="submenu-texte">Contours discrets</div>
                            <div id="filtres-morphologie-5" className="submenu-texte">Flou postérisé</div>
                            <div id="filtres-morphologie-6" className="submenu-texte">Froid dehors</div>
                            <div id="filtres-morphologie-7" className="submenu-texte">Table de contours</div>
                            <div id="filtres-morphologie-8" className="submenu-texte">Trou noir</div>
                        </div>
                    </div> 

                    { /* SUBMENU OMBRAGE 3D NON REALISTES */}
                    <div id="filtres-13" className="submenu-texte">
                        Ombrages 3D non réalistes
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-ombrages-3d" className="submenu-listsub submenu-filtres-ombrages-3d no-sub-menu">
                            <div id="filtres-ombrages-3d-1" className="submenu-texte">Aluminium</div>
                            <div id="filtres-ombrages-3d-2" className="submenu-texte">Bande dessinée</div>
                            <div id="filtres-ombrages-3d-3" className="submenu-texte">Bosselage alluminium</div>
                            <div id="filtres-ombrages-3d-4" className="submenu-texte">Bosselage chromé</div>
                            <div id="filtres-ombrages-3d-5" className="submenu-texte">Bosselage du contour</div>
                            <div id="filtres-ombrages-3d-6" className="submenu-texte">Bosselage ombré</div>
                            <div id="filtres-ombrages-3d-7" className="submenu-texte">Chrome</div>
                            <div id="filtres-ombrages-3d-8" className="submenu-texte">Chrome profond</div>
                            <div id="filtres-ombrages-3d-9" className="submenu-texte">Crème BD</div>
                            <div id="filtres-ombrages-3d-10" className="submenu-texte">Déco net</div>
                            <div id="filtres-ombrages-3d-11" className="submenu-texte">Décoloration BD</div>
                            <div id="filtres-ombrages-3d-12" className="submenu-texte">Dessin à la brosse</div>
                            <div id="filtres-ombrages-3d-13" className="submenu-texte">Ébauche BD</div>
                            <div id="filtres-ombrages-3d-14" className="submenu-texte">Gel réfringent</div>
                            <div id="filtres-ombrages-3d-15" className="submenu-texte">Métal brossé</div>
                            <div id="filtres-ombrages-3d-16" className="submenu-texte">Métal profond</div>
                            <div id="filtres-ombrages-3d-17" className="submenu-texte">Métal tranchant</div>
                            <div id="filtres-ombrages-3d-18" className="submenu-texte">Opaline</div>
                            <div id="filtres-ombrages-3d-19" className="submenu-texte">Opaline</div>
                        </div>
                    </div> 

                    { /* SUBMENU OMBRES ET LUEURS */}
                    <div id="filtres-14" className="submenu-texte">
                        Ombres et lueurs
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-ombres-lueurs" className="submenu-listsub submenu-filtres-ombres-lueurs no-sub-menu">
                            <div id="filtres-ombres-lueurs-1" className="submenu-texte">Découpe et flou</div>
                            <div id="filtres-ombres-lueurs-2" className="submenu-texte">Dedans et dehors</div>
                            <div id="filtres-ombres-lueurs-3" className="submenu-texte">Émergence</div>
                            <div id="filtres-ombres-lueurs-4" className="submenu-texte">Incrsutation</div>
                            <div id="filtres-ombres-lueurs-5" className="submenu-texte">Ombre et lumière</div>
                            <div id="filtres-ombres-lueurs-6" className="submenu-texte">Ombre portée...</div>
                        </div>
                    </div> 

                    { /* SUBMENU OUTIL PIXEL */}
                    <div id="filtres-15" className="submenu-texte">
                        Outils pixel
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-outil-pixel" className="submenu-listsub submenu-filtres-outil-pixel no-sub-menu">
                            <div id="filtres-outil-pixel-1" className="submenu-texte">Pixéliser</div>
                        </div>
                    </div> 

                    { /* SUBMENU PROTUBERANCES */}
                    <div id="filtres-16" className="submenu-texte">
                        Protubérances
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-protuberances" className="submenu-listsub submenu-filtres-protuberances no-sub-menu">
                            <div id="filtres-protuberances-1" className="submenu-texte">Bavure d'encre</div>
                            <div id="filtres-protuberances-2" className="submenu-texte">Chewing-gum</div>
                            <div id="filtres-protuberances-3" className="submenu-texte">Crête neigeuse...</div>
                            <div id="filtres-protuberances-4" className="submenu-texte">Feu</div>
                            <div id="filtres-protuberances-5" className="submenu-texte">Ruissellement</div>
                        </div>
                    </div> 

                    { /* SUBMENU SUPERMISITIONS */}
                    <div id="filtres-17" className="submenu-texte">
                        Superpositions
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-superpositions" className="submenu-listsub submenu-filtres-superpositions no-sub-menu">
                            <div id="filtres-superpositions-1" className="submenu-texte">Bruit croisé</div>
                            <div id="filtres-superpositions-2" className="submenu-texte">Bruit croisé B</div>
                            <div id="filtres-superpositions-3" className="submenu-texte">Carnaval</div>
                            <div id="filtres-superpositions-4" className="submenu-texte">Cellules vivantes</div>
                            <div id="filtres-superpositions-5" className="submenu-texte">Duotone turbulent</div>
                            <div id="filtres-superpositions-6" className="submenu-texte">Écossais</div>
                            <div id="filtres-superpositions-7" className="submenu-texte">Écossais</div>
                            <div id="filtres-superpositions-8" className="submenu-texte">Écossais ondoyant</div>
                            <div id="filtres-superpositions-9" className="submenu-texte">Fil barbelé</div>
                            <div id="filtres-superpositions-10" className="submenu-texte">Fond turbulent...</div>
                            <div id="filtres-superpositions-11" className="submenu-texte">Foule</div>
                            <div id="filtres-superpositions-12" className="submenu-texte">Fourrure de tigre</div>
                            <div id="filtres-superpositions-13" className="submenu-texte">Fromage bleu</div>
                            <div id="filtres-superpositions-14" className="submenu-texte">Fromage suisse</div>
                            <div id="filtres-superpositions-15" className="submenu-texte">Givre</div>
                            <div id="filtres-superpositions-16" className="submenu-texte">Gomme lumière craquelée</div>
                            <div id="filtres-superpositions-17" className="submenu-texte">Jardin des délices</div>
                            <div id="filtres-superpositions-18" className="submenu-texte">Liquide</div>
                            <div id="filtres-superpositions-19" className="submenu-texte">Liquide agité</div>
                            <div id="filtres-superpositions-20" className="submenu-texte">Monochrome transparent craquelé</div>
                            <div id="filtres-superpositions-21" className="submenu-texte">Montagnes d'Écosse</div>
                            <div id="filtres-superpositions-22" className="submenu-texte">Moucheture</div>
                            <div id="filtres-superpositions-23" className="submenu-texte">Nappe de pétrole</div>
                            <div id="filtres-superpositions-24" className="submenu-texte">Nuages</div>
                            <div id="filtres-superpositions-25" className="submenu-texte">Silhouette marbrée</div>
                            <div id="filtres-superpositions-26" className="submenu-texte">Tampon en caoutchouc</div>
                            <div id="filtres-superpositions-27" className="submenu-texte">Transparence agitée</div>
                            <div id="filtres-superpositions-28" className="submenu-texte">Transparence barbouillée</div>
                            <div id="filtres-superpositions-29" className="submenu-texte">Transparence pointilliste</div>
                            <div id="filtres-superpositions-30" className="submenu-texte">Transparence toilée</div>
                            <div id="filtres-superpositions-31" className="submenu-texte">Turbulence alpha</div>
                            <div id="filtres-superpositions-32" className="submenu-texte">Turbulence colorée</div>
                            <div id="filtres-superpositions-33" className="submenu-texte">Turbulence postérisée</div>
                            <div id="filtres-superpositions-34" className="submenu-texte">Zèbre</div>
                        </div>
                    </div> 

                    { /* SUBMENU TEXTURES */}
                    <div id="filtres-18" className="submenu-texte">
                        Textures
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-filtres-textures" className="submenu-listsub submenu-filtres-textures no-sub-menu">
                            <div id="filtres-textures-1" className="submenu-texte">Aquarelle</div>
                            <div id="filtres-textures-2" className="submenu-texte">Arc-en-ciel déformé</div>
                            <div id="filtres-textures-3" className="submenu-texte">Arc-en-ciel fondu</div>
                            <div id="filtres-textures-4" className="submenu-texte">Arc-en-ciel teinté</div>
                            <div id="filtres-textures-5" className="submenu-texte">Buvard</div>
                            <div id="filtres-textures-6" className="submenu-texte">Confiture</div>
                            <div id="filtres-textures-7" className="submenu-texte">Criblé</div>
                            <div id="filtres-textures-8" className="submenu-texte">Éclaté</div>
                            <div id="filtres-textures-9" className="submenu-texte">Écorce</div>
                            <div id="filtres-textures-10" className="submenu-texte">Feutre</div>
                            <div id="filtres-textures-11" className="submenu-texte">Gouache</div>
                            <div id="filtres-textures-12" className="submenu-texte">Impression à la cire</div>
                            <div id="filtres-textures-13" className="submenu-texte">Mur de pierres</div>
                            <div id="filtres-textures-14" className="submenu-texte">Papier à grain</div>
                            <div id="filtres-textures-15" className="submenu-texte">Peinture à l'encre</div>
                            <div id="filtres-textures-16" className="submenu-texte">Plastique chiffonné</div>
                            <div id="filtres-textures-17" className="submenu-texte">Plastique écrasé</div>
                            <div id="filtres-textures-18" className="submenu-texte">Pourtour brûlé</div>
                            <div id="filtres-textures-19" className="submenu-texte">Relief organique</div>
                            <div id="filtres-textures-20" className="submenu-texte">Tache d'encre...</div>
                            <div id="filtres-textures-21" className="submenu-texte">Tapis de soie</div>
                            <div id="filtres-textures-22" className="submenu-texte">Verre martelé</div>
                        </div>
                    </div> 
                    <hr className="topmenu-hr" />
                    <div id="filtres-19" className="submenu-texte">Editeur de filtres...</div> 
                    <div id="filtres-20" className="submenu-texte">Supprimer les filtres</div> 
                </div>

                { /* MENU EXTENSIONS */}
                <div id="submenu-extensions" className="submenu-list submenu-extensions no-sub-menu">

                    { /* SUBMENU EXTENSION PRECEDENTE */}
                    <div id="extensions-1" className="submenu-texte">Extension précédente</div> 

                    { /* SUBMENU PARAMETRES DE L'EXTENSION PRECEDENTE */}
                    <div id="extensions-2" className="submenu-texte">Paramètre de l'extension précédente...</div> 

                    <hr className="topmenu-hr" />

                    { /* SUBMENU COULEUR */}
                    <div id="extensions-3" className="submenu-texte">
                        Couleur
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-couleur" className="submenu-listsub submenu-extensions-couleur no-sub-menu">
                            <div id="extensions-couleur-1" className="submenu-texte">Ajuster TSL...</div>
                            <div id="extensions-couleur-2" className="submenu-texte">Aléatoire...</div>
                            <div id="extensions-couleur-3" className="submenu-texte">Augmenter la luminosité</div>
                            <div id="extensions-couleur-4" className="submenu-texte">Augmenter la saturation</div>
                            <div id="extensions-couleur-5" className="submenu-texte">Augmenter la teinte</div>
                            <div id="extensions-couleur-6" className="submenu-texte">Désaturer</div>
                            <div id="extensions-couleur-7" className="submenu-texte">Diminuer la luminosité</div>
                            <div id="extensions-couleur-8" className="submenu-texte">Diminuer la saturation</div>
                            <div id="extensions-couleur-9" className="submenu-texte">Diminuer la teinte</div>
                            <div id="extensions-couleur-10" className="submenu-texte">Liste tout</div>
                            <div id="extensions-couleur-11" className="submenu-texte">Négatif</div>
                            <div id="extensions-couleur-12" className="submenu-texte">Niveaux de gris</div>
                            <div id="extensions-couleur-13" className="submenu-texte">Noir et blanc..</div>
                            <div id="extensions-couleur-14" className="submenu-texte">Permuter RVB</div>
                            <div id="extensions-couleur-15" className="submenu-texte">Personnalisée...</div>
                            <div id="extensions-couleur-16" className="submenu-texte">Plus clair</div>
                            <div id="extensions-couleur-17" className="submenu-texte">plus foncé</div>
                            <div id="extensions-couleur-18" className="submenu-texte">Remplacer une couleur...</div>
                            <div id="extensions-couleur-19" className="submenu-texte">Supprimer le bleu</div>
                            <div id="extensions-couleur-20" className="submenu-texte">Supprimer le rouge</div>
                            <div id="extensions-couleur-21" className="submenu-texte">Supprimer le vert</div>
                        </div>
                    </div> 

                    { /* SUBMENU DOCUMENT */}
                    <div id="extensions-4" className="submenu-texte">
                        Document
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-document" className="submenu-listsub submenu-extensions-document no-sub-menu">
                            <div id="extensions-document-1" className="submenu-texte">Info DOC</div>
                            <div id="extensions-document-2" className="submenu-texte">PPP de 90 à 96</div>
                            <div id="extensions-document-3" className="submenu-texte">PPP de 96 à 90</div>
                            <div id="extensions-document-4" className="submenu-texte">SVG Adobe Illustrator...</div>
                        </div>
                    </div> 

                    { /* SUBMENU EXPORTER */}
                    <div id="extensions-5" className="submenu-texte">
                        Exporter
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-exporter" className="submenu-listsub submenu-extensions-exporter no-sub-menu">
                            <div id="extensions-exporter-1" className="submenu-texte">Exporter des découpes par calque...</div>
                            <div id="extensions-exporter-2" className="submenu-texte">Fichier de pré-traitement - Enregistrer sous...</div>
                            <div id="extensions-exporter-3" className="submenu-texte">Guillotine...</div>
                            <div id="extensions-exporter-4" className="submenu-texte">Impression Windows 32 bits</div>
                            <div id="extensions-exporter-5" className="submenu-texte">Traceur...</div>
                        </div>
                    </div> 

                    { /* SUBMENU FEUILLE DE STYLE */}
                    <div id="extensions-6" className="submenu-texte">
                        Feuille de style
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-feuille-style" className="submenu-listsub submenu-extensions-feuille-style no-sub-menu">
                            <div id="extensions-feuille-style-1" className="submenu-texte">Fusionner les styles dans du CSS...</div>
                        </div>
                    </div> 

                    { /* SUBMENU GCODETOOLS */}
                    <div id="extensions-7" className="submenu-texte">
                        Gcodetools
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-gcodetools" className="submenu-listsub submenu-extensions-gcodetools no-sub-menu">
                            <div id="extensions-gcodetools-1" className="submenu-texte">À propos...</div>
                            <div id="extensions-gcodetools-2" className="submenu-texte">Bibliothèque d'outils...</div>
                            <div id="extensions-gcodetools-3" className="submenu-texte">Chemin vers G-code...</div>
                            <div id="extensions-gcodetools-4" className="submenu-texte">Graffiti...</div>
                            <div id="extensions-gcodetools-5" className="submenu-texte">Gravure...</div>
                            <div id="extensions-gcodetools-6" className="submenu-texte">Points d'orientation...</div>
                            <div id="extensions-gcodetools-7" className="submenu-texte">Points DXF...</div>
                            <div id="extensions-gcodetools-8" className="submenu-texte">Préparer le chemin pour plasma...</div>
                            <div id="extensions-gcodetools-9" className="submenu-texte">Tour...</div>
                            <div id="extensions-gcodetools-10" className="submenu-texte">Zone...</div>
                        </div>
                    </div> 

                    { /* SUBMENU GENERER A PATIR DU CHEMIN */}
                    <div id="extensions-8" className="submenu-texte">
                        Générer à partir du chemin
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-generer" className="submenu-listsub submenu-extensions-generer no-sub-menu">
                            <div id="extensions-generer-1" className="submenu-texte">Diagramme de Voronoï...</div>
                            <div id="extensions-generer-2" className="submenu-texte">Éparpiller...</div>
                            <div id="extensions-generer-3" className="submenu-texte">Extrusion...</div>
                            <div id="extensions-generer-4" className="submenu-texte">Halo intérieur-extérieur...</div>
                            <div id="extensions-generer-5" className="submenu-texte">Interpoler...</div>
                            <div id="extensions-generer-6" className="submenu-texte">Motif de Voronoï...</div>
                            <div id="extensions-generer-7" className="submenu-texte">Motif le long d'un chemin...</div>
                            <div id="extensions-generer-8" className="submenu-texte">Mouvement...</div>
                        </div>
                    </div> 

                    { /* SUBMENU IMAGES */}
                    <div id="extensions-9" className="submenu-texte">
                        Images
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-images" className="submenu-listsub submenu-extensions-images no-sub-menu">
                            <div id="extensions-images-1" className="submenu-texte">
                                Définir les attributs de l'image...
                            </div>
                            <div id="extensions-images-2" className="submenu-texte">
                                Extraire les images...
                            </div>
                            <div id="extensions-images-3" className="submenu-texte">
                                Incorporer les images...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU IMAGES MATRICIELLES */}
                    <div id="extensions-10" className="submenu-texte">
                        Images matricielles
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-imagesM" className="submenu-listsub submenu-extensions-imagesM no-sub-menu">
                            <div id="extensions-imagesM-1" className="submenu-texte">
                                Adoucir les parasites
                            </div>
                            <div id="extensions-imagesM-2" className="submenu-texte">
                                Ajouter du bruit...
                            </div>
                            <div id="extensions-imagesM-3" className="submenu-texte">
                                Ajouter TSV...
                            </div>
                            <div id="extensions-imagesM-4" className="submenu-texte">
                                Améliorer
                            </div>
                            <div id="extensions-imagesM-5" className="submenu-texte">
                                Colorer...
                            </div>
                            <div id="extensions-imagesM-6" className="submenu-texte">
                                Composante...
                            </div>
                            <div id="extensions-imagesM-7" className="submenu-texte">
                                Contours...
                            </div>
                            <div id="extensions-imagesM-8" className="submenu-texte">
                                Contraste...
                            </div>
                            <div id="extensions-imagesM-9" className="submenu-texte">
                                Cycle des couleurs...
                            </div>
                            <div id="extensions-imagesM-10" className="submenu-texte">
                                Dispersion...
                            </div>
                            <div id="extensions-imagesM-11" className="submenu-texte">
                                Égaliser
                            </div>
                            <div id="extensions-imagesM-12" className="submenu-texte">
                                Embrosser...
                            </div>
                            <div id="extensions-imagesM-13" className="submenu-texte">
                                Flou gaussien...
                            </div>
                            <div id="extensions-imagesM-14" className="submenu-texte">
                                Flou...
                            </div>
                            <div id="extensions-imagesM-15" className="submenu-texte">
                                Fusain...
                            </div>
                            <div id="extensions-imagesM-16" className="submenu-texte">
                                Imploser...
                            </div>
                            <div id="extensions-imagesM-17" className="submenu-texte">
                                Inverser
                            </div>
                            <div id="extensions-imagesM-18" className="submenu-texte">
                                Masque de netteté...
                            </div>
                            <div id="extensions-imagesM-19" className="submenu-texte">
                                Médiane...
                            </div>
                            <div id="extensions-imagesM-20" className="submenu-texte">
                                Netteté...
                            </div>
                            <div id="extensions-imagesM-21" className="submenu-texte">
                                Niveau (par composante)...
                            </div>
                            <div id="extensions-imagesM-22" className="submenu-texte">
                                Niveau...
                            </div>
                            <div id="extensions-imagesM-23" className="submenu-texte">
                                Normaliser
                            </div>
                            <div id="extensions-imagesM-24" className="submenu-texte">
                                Ombre...
                            </div>
                            <div id="extensions-imagesM-25" className="submenu-texte">
                                Onde...
                            </div>
                            <div id="extensions-imagesM-26" className="submenu-texte">
                                Opacité...
                            </div>
                            <div id="extensions-imagesM-27" className="submenu-texte">
                                Peinture à l'huile...
                            </div>
                            <div id="extensions-imagesM-28" className="submenu-texte">
                                Ré-échantillonnage...
                            </div>
                            <div id="extensions-imagesM-29" className="submenu-texte">
                                Réduire le bruit...
                            </div>
                            <div id="extensions-imagesM-30" className="submenu-texte">
                                Relief...
                            </div>
                            <div id="extensions-imagesM-31" className="submenu-texte">
                                Rogner...
                            </div>
                            <div id="extensions-imagesM-32" className="submenu-texte">
                                Seuil adaptatif...
                            </div>
                            <div id="extensions-imagesM-33" className="submenu-texte">
                                Solariser...
                            </div>
                            <div id="extensions-imagesM-34" className="submenu-texte">
                                Tourbillon...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU INK/STITCH */}
                    <div id="extensions-11" className="submenu-texte">
                        Ink/Stitch
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="minimenu-extensions-inkstitch" className="submenu-listsub submenu-extensions-inkstitch no-sub-menu">
                            <div id="extensions-inkstitch-1" className="submenu-texte">
                                A propos...
                            </div>
                            <div id="extensions-inkstitch-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }   
                                Commandes
                                <div id="minimenu-extensions-inkstitch-commandes" className="submenu-listsub submenu-extensions-inkstitch-commandes no-sub-menu">
                                    <div id="extensions-inkstitch-commandes-1" className="submenu-texte">
                                        {
                                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                        }     
                                        Affichage
                                        <div id="minimenu-extensions-inkstitch-commandes-affichage" className="submenu-listsub extensions-inkstitch-commandes-affichage no-sub-menu">
                                            <div id="extensions-inkstitch-commandes-affichage-1" className="submenu-texte">
                                                Afficher / masquer les commandes des objets
                                            </div>
                                            <div id="extensions-inkstitch-commandes-affichage-2" className="submenu-texte">
                                                Mise à l'échelle des symboles de commande...
                                            </div>
                                        </div>
                                    </div>
                                    <div id="extensions-inkstitch-commandes-2" className="submenu-texte">
                                        Ajouter des commandes à des calques...
                                    </div>
                                    <div id="extensions-inkstitch-commandes-3" className="submenu-texte">
                                        Ajouter des commandes...
                                    </div>
                                    <div id="extensions-inkstitch-commandes-4" className="submenu-texte">
                                        Attacer des commandes à des objets sélectionnés...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-3" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }     
                                Edition
                                <div id="minimenu-extensions-inkstitch-edition" className="submenu-listsub extensions-inkstitch-edition no-sub-menu">
                                    <div id="extensions-inkstitch-edition-1" className="submenu-texte">
                                        Dupliquer les paramètres
                                    </div>
                                    <div id="extensions-inkstitch-edition-2" className="submenu-texte">
                                        Réempiler les objets dans l'ordre de leur sélection
                                    </div>
                                    <div id="extensions-inkstitch-edition-3" className="submenu-texte">
                                        Sélection vers ligne-guide
                                    </div>
                                    <div id="extensions-inkstitch-edition-4" className="submenu-texte">
                                        Sélection vers texture
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Gestion des couleurs de fil
                                <div id="minimenu-extensions-inkstitch-fil" className="submenu-listsub extensions-inkstitch-fil no-sub-menu">
                                    <div id="extensions-inkstitch-fil-1" className="submenu-texte">
                                        Appliquer la liste de fils...
                                    </div>
                                    <div id="extensions-inkstitch-fil-2" className="submenu-texte">
                                        {
                                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                        }
                                        Générer palette
                                        <div id="minimenu-extensions-inkstitch-fil-palette" className="submenu-listsub extensions-inkstitch-fil-palette no-sub-menu">
                                            <div id="extensions-inkstitch-fil-palette-1" className="submenu-texte">
                                                Générer palette de couleurs...
                                            </div>
                                            <div id="extensions-inkstitch-fil-palette-2" className="submenu-texte">
                                                Séparer le texte...
                                            </div>
                                        </div>
                                    </div>
                                    <div id="extensions-inkstitch-fil-3" className="submenu-texte">
                                        Installer des palettes de couleurs de fils à broder pour Inkscape
                                    </div>
                                    <div id="extensions-inkstitch-fil-4" className="submenu-texte">
                                        Installer une pallette Personnalisée...
                                    </div>
                                    <div id="extensions-inkstitch-fil-5" className="submenu-texte">
                                        Palette vers texte...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-5" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Gestion des polices
                                <div id="minimenu-extensions-inkstitch-police" className="submenu-listsub extensions-inkstitch-police no-sub-menu">
                                    <div id="extensions-inkstitch-police-1" className="submenu-texte">
                                        Forcer des points d'arrêt...
                                    </div>
                                    <div id="extensions-inkstitch-police-2" className="submenu-texte">
                                        Générer JSON...
                                    </div>
                                    <div id="extensions-inkstitch-police-3" className="submenu-texte">
                                        Lettres vers police...
                                    </div>
                                    <div id="extensions-inkstitch-police-4" className="submenu-texte">
                                        Répertoire de police personnalisé...
                                    </div>
                                    <div id="extensions-inkstitch-police-5" className="submenu-texte">
                                        Supprimer le crénage...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-6" className="submenu-texte">
                                Lettrage
                            </div>
                            <div id="extensions-inkstitch-7" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }    
                                Outils: Remplissage
                                <div id="minimenu-extensions-inkstitch-remplissage" className="submenu-listsub extensions-inkstitch-remplissage no-sub-menu">
                                    <div id="extensions-inkstitch-remplissage-1" className="submenu-texte">
                                        Briser des objets de remplissage...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-8" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }    
                                Outils: Satin
                                <div id="minimenu-extensions-inkstitch-satin" className="submenu-listsub extensions-inkstitch-satin no-sub-menu">
                                    <div id="extensions-inkstitch-satin-1" className="submenu-texte">
                                        Agencement automatique de colonnes satin...
                                    </div>
                                    <div id="extensions-inkstitch-satin-2" className="submenu-texte">
                                        Convertir le satin en trait...
                                    </div>
                                    <div id="extensions-inkstitch-satin-3" className="submenu-texte">
                                        Convertir ligne en satin
                                    </div>
                                    <div id="extensions-inkstitch-satin-4" className="submenu-texte">
                                        Intervertir les rails satin
                                    </div>
                                    <div id="extensions-inkstitch-satin-5" className="submenu-texte">
                                        Scinder colonne satin
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-9" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Outils: Trait
                                <div id="minimenu-extensions-inkstitch-trait" className="submenu-listsub extensions-inkstitch-trait no-sub-menu">
                                    <div id="extensions-inkstitch-trait-1" className="submenu-texte">
                                        Agencement automatique de Points Droits...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-10" className="submenu-texte">
                                Paramètres
                            </div>
                            <div id="extensions-inkstitch-11" className="submenu-texte">
                                Préférences...
                            </div>
                            <div id="extensions-inkstitch-12" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }    
                                Résolution de problèmes
                                <div id="minimenu-extensions-inkstitch-probleme" className="submenu-listsub extensions-inkstitch-probleme no-sub-menu">
                                    <div id="extensions-inkstitch-probleme-1" className="submenu-texte">
                                        Dépistage de problèmes avec des objets
                                    </div>
                                    <div id="extensions-inkstitch-probleme-2" className="submenu-texte">
                                        Nettoyer le document...
                                    </div>
                                    <div id="extensions-inkstitch-probleme-3" className="submenu-texte">
                                        Supprimer tous les paramètres de broderie...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-inkstitch-13" className="submenu-texte">
                                Segmentation Richelieu...
                            </div>
                            <div id="extensions-inkstitch-14" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }    
                                Visualiser et exporter
                                <div id="minimenu-extensions-inkstitch-visualiser" className="submenu-listsub extensions-inkstitch-visualiser no-sub-menu">
                                    <div id="extensions-inkstitch-visualiser-1" className="submenu-texte">
                                        Annuler l'aperçu du plan de broderie
                                    </div>
                                    <div id="extensions-inkstitch-visualiser-2" className="submenu-texte">
                                        Broder...
                                    </div>
                                    <div id="extensions-inkstitch-visualiser-3" className="submenu-texte">
                                        Carte de densité...
                                    </div>
                                    <div id="extensions-inkstitch-visualiser-4" className="submenu-texte">
                                        Export PDF
                                    </div>
                                    <div id="extensions-inkstitch-visualiser-5" className="submenu-texte">
                                        Prévisualisation du plan de broderie...
                                    </div>
                                    <div id="extensions-inkstitch-visualiser-6" className="submenu-texte">
                                        Simulateur / Aperçu réaliste
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU JESSYINK */}
                    <div id="extensions-12" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        JessyInk
                        <div id="minimenu-extensions-jessyink" className="submenu-listsub submenu-extensions-jessyink no-sub-menu">
                            <div id="extensions-jessyink-1" className="submenu-texte">
                                Désinstallation/suppression...
                            </div>
                            <div id="extensions-jessyink-2" className="submenu-texte">
                                Diapositive maîtresse...
                            </div>
                            <div id="extensions-jessyink-3" className="submenu-texte">
                                Effets...
                            </div>
                            <div id="extensions-jessyink-4" className="submenu-texte">
                                Gestion de la souris...
                            </div>
                            <div id="extensions-jessyink-5" className="submenu-texte">
                                Installation/mise à jour...
                            </div>
                            <div id="extensions-jessyink-6" className="submenu-texte">
                                Raccourcis clavier...
                            </div>
                            <div id="extensions-jessyink-7" className="submenu-texte">
                                Résumé...
                            </div>
                            <div id="extensions-jessyink-8" className="submenu-texte">
                                Textes automatiques...
                            </div>
                            <div id="extensions-jessyink-9" className="submenu-texte">
                                Transitions...
                            </div>
                            <div id="extensions-jessyink-10" className="submenu-texte">
                                Vidéo...
                            </div>
                            <div id="extensions-jessyink-11" className="submenu-texte">
                                Vue...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU MODIFIER LES CHEMINS */}
                    <div id="extensions-13" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Modifier les chemins
                        <div id="minimenu-extensions-chemins" className="submenu-listsub submenu-extensions-chemins no-sub-menu">
                            <div id="extensions-chemins-1" className="submenu-texte">
                                Absolu
                            </div>
                            <div id="extensions-chemins-2" className="submenu-texte">
                                Ajouter des noeuds...
                            </div>
                            <div id="extensions-chemins-3" className="submenu-texte">
                                Aligner au pixel...
                            </div>
                            <div id="extensions-chemins-4" className="submenu-texte">
                                Aplatir les courbes de Bézier...
                            </div>
                            <div id="extensions-chemins-5" className="submenu-texte">
                                Colorer les marqueurs...
                            </div>
                            <div id="extensions-chemins-6" className="submenu-texte">
                                Contour 3D...
                            </div>
                            <div id="extensions-chemins-7" className="submenu-texte">
                                Convertir en tirets
                            </div>
                            <div id="extensions-chemins-8" className="submenu-texte">
                                Déplacer les noeuds aléatoirement...
                            </div>
                            <div id="extensions-chemins-9" className="submenu-texte">
                                Élastique...
                            </div>
                            <div id="extensions-chemins-10" className="submenu-texte">
                                Enveloppe
                            </div>
                            <div id="extensions-chemins-11" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Filet
                                <div id="minimenu-extensions-chemins-filet" className="submenu-listsub submenu-extensions-chemins-filet no-sub-menu">
                                    <div id="extensions-chemins-filet-1" className="submenu-texte">
                                        Chemin en filet de dégradé...
                                    </div>
                                    <div id="extensions-chemins-filet-2" className="submenu-texte">
                                        Filet de dégradé en chemin...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-chemins-12" className="submenu-texte">
                                Interpoler l'attribut dans un groupe...
                            </div>
                            <div id="extensions-chemins-13" className="submenu-texte">
                                Perspective
                            </div>
                            <div id="extensions-chemins-14" className="submenu-texte">
                                Rendre les segments droits...
                            </div>
                            <div id="extensions-chemins-15" className="submenu-texte">
                                Tourbillon...
                            </div>
                            <div id="extensions-chemins-16" className="submenu-texte">
                                Transformer en fractale...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU ORGANISER */}
                    <div id="extensions-14" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Organiser
                        <div id="minimenu-extensions-organiser" className="submenu-listsub submenu-extensions-organiser no-sub-menu">
                            <div id="extensions-organiser-1" className="submenu-texte">
                                Dégrouper récursivement...
                            </div>
                            <div id="extensions-organiser-2" className="submenu-texte">
                                Réempiler...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU RENDU */}
                    <div id="extensions-15" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Rendu
                        <div id="minimenu-extensions-rendu" className="submenu-listsub submenu-extensions-rendu no-sub-menu">
                            <div id="extensions-rendu-1" className="submenu-texte">
                                Arbre aléatoire...
                            </div>
                            <div id="extensions-rendu-2" className="submenu-texte">
                                Boîte à plier...
                            </div>
                            <div id="extensions-rendu-3" className="submenu-texte">
                                Cadre...
                            </div>
                            <div id="extensions-rendu-4" className="submenu-texte">
                                Calendrier...
                            </div>
                            <div id="extensions-rendu-5" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Codes-barres
                                <div id="minimenu-extensions-rendu-codesbarres" className="submenu-listsub submenu-extensions-rendu-codesbarres no-sub-menu">
                                    <div id="extensions-rendu-codesbarres-1" className="submenu-texte">
                                        Classique...
                                    </div>
                                    <div id="extensions-rendu-codesbarres-2" className="submenu-texte">
                                        Datamatrix...
                                    </div>
                                    <div id="extensions-rendu-codesbarres-3" className="submenu-texte">
                                        QR Code...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-rendu-6" className="submenu-texte">
                                Courbes paramétriques...
                            </div>
                            <div id="extensions-rendu-7" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Engrenage
                                <div id="minimenu-extensions-rendu-engrenage" className="submenu-listsub submenu-extensions-rendu-engrenage no-sub-menu">
                                    <div id="extensions-rendu-engrenage-1" className="submenu-texte">
                                        Crémaillère...
                                    </div>
                                    <div id="extensions-rendu-engrenage-2" className="submenu-texte">
                                        Engrenage...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-rendu-8" className="submenu-texte">
                                Générateur de guides...
                            </div>
                            <div id="extensions-rendu-9" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Grilles
                                <div id="minimenu-extensions-rendu-grilles" className="submenu-listsub submenu-extensions-rendu-grilles no-sub-menu">
                                    <div id="extensions-rendu-grilles-1" className="submenu-texte">
                                        Grille cartésienne...
                                    </div>
                                    <div id="extensions-rendu-grilles-2" className="submenu-texte">
                                        Grille isométrique...
                                    </div>
                                    <div id="extensions-rendu-grilles-3" className="submenu-texte">
                                        Grille polaire...
                                    </div>
                                    <div id="extensions-rendu-grilles-4" className="submenu-texte">
                                        Grille...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-rendu-10" className="submenu-texte">
                                Jolis graphiques...
                            </div>
                            <div id="extensions-rendu-11" className="submenu-texte">
                                LaTeX (pdflatex)...
                            </div>
                            <div id="extensions-rendu-12" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Mise en page
                                <div id="minimenu-extensions-rendu-miseenpage" className="submenu-listsub submenu-extensions-rendu-miseenpage no-sub-menu">
                                    <div id="extensions-rendu-miseenpage-1" className="submenu-texte">
                                        Couverture dos carré collé...
                                    </div>
                                    <div id="extensions-rendu-miseenpage-2" className="submenu-texte">
                                        Marques d'impression...
                                    </div>
                                    <div id="extensions-rendu-miseenpage-3" className="submenu-texte">
                                        Mise en page multicadres...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-rendu-13" className="submenu-texte">
                                Polyèdre 3D...
                            </div>
                            <div id="extensions-rendu-14" className="submenu-texte">
                                Soupe alphabet...
                            </div>
                            <div id="extensions-rendu-15" className="submenu-texte">
                                Sphère fil de fer...
                            </div>
                            <div id="extensions-rendu-16" className="submenu-texte">
                                Spirographe...
                            </div>
                            <div id="extensions-rendu-17" className="submenu-texte">
                                Système de Lindenmayer...
                            </div>
                            <div id="extensions-rendu-18" className="submenu-texte">
                                Tracer à partir d'un triangle...
                            </div>
                            <div id="extensions-rendu-19" className="submenu-texte">
                                Traceur de fonction...
                            </div>
                            <div id="extensions-rendu-20" className="submenu-texte">
                                Triangle...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU TEXTE */}
                    <div id="extensions-16" className="submenu-texte"> 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Texte
                        <div id="minimenu-extensions-texte" className="submenu-listsub submenu-extensions-texte no-sub-menu">
                            <div id="extensions-texte-1" className="submenu-texte">
                                Convertir en Braille
                            </div>
                            <div id="extensions-texte-2" className="submenu-texte">
                                Diviser du texte...
                            </div>
                            <div id="extensions-texte-3" className="submenu-texte">
                                Extraire...
                            </div>
                            <div id="extensions-texte-4" className="submenu-texte">
                                Fusionner...
                            </div>
                            <div id="extensions-texte-5" className="submenu-texte">
                                Lorem ipsum...
                            </div>
                            <div id="extensions-texte-6" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Modifier la casse
                                <div id="minimenu-extensions-texte-casse" className="submenu-listsub submenu-extensions-texte-casse no-sub-menu">
                                    <div id="extensions-texte-casse-1" className="submenu-texte">
                                        cAssE ALÉatOIRe
                                    </div>
                                    <div id="extensions-texte-casse-2" className="submenu-texte">
                                        Casse des phrases
                                    </div>
                                    <div id="extensions-texte-casse-3" className="submenu-texte">
                                        Casse du titre
                                    </div>
                                    <div id="extensions-texte-casse-4" className="submenu-texte">
                                        iNVERSER lA cASSE
                                    </div>
                                    <div id="extensions-texte-casse-5" className="submenu-texte">
                                        MAJUSCULES
                                    </div>
                                    <div id="extensions-texte-casse-6" className="submenu-texte">
                                        minuscules
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-texte-7" className="submenu-texte">
                                Remplacer la police...
                            </div>
                            <div id="extensions-texte-8" className="submenu-texte">
                                Texte Hershey...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU TYPOGRAPHIE */}
                    <div id="extensions-17" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Typographie
                        <div id="minimenu-extensions-typographie" className="submenu-listsub submenu-extensions-typographie no-sub-menu">
                            <div id="extensions-typographie-1" className="submenu-texte">
                                (1) Paramétrer le canevas typographique...
                            </div>
                            <div id="extensions-typographie-2" className="submenu-texte">
                                (2) Ajouter un calque de glyphe...
                            </div>
                            <div id="extensions-typographie-3" className="submenu-texte">
                                (3) Convertir les calques de glyphe en police SVG
                            </div>
                            <div id="extensions-typographie-4" className="submenu-texte">
                                Convertir la fonte SVG en calques de glyphes...
                            </div>
                            <div id="extensions-typographie-5" className="submenu-texte">
                                Voir le glyphe précédent
                            </div>
                            <div id="extensions-typographie-6" className="submenu-texte">
                                Voir le glyphe suivant
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU VISUALISATION DE CHEMIN */}
                    <div id="extensions-18" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Visualisation de chemin
                        <div id="minimenu-extensions-chemin" className="submenu-listsub submenu-extensions-chemin no-sub-menu">
                            <div id="extensions-chemin-1" className="submenu-texte">
                                Dessiner les poignées
                            </div>
                            <div id="extensions-chemin-2" className="submenu-texte">
                                Dimensions...
                            </div>
                            <div id="extensions-chemin-3" className="submenu-texte">
                                Mesurer un chemin...
                            </div>
                            <div id="extensions-chemin-4" className="submenu-texte">
                                Numéroter les noeuds...
                            </div>
                        </div>
                    </div> 

                    { /* SUBMENU WEB */}
                    <div id="extensions-19" className="submenu-texte">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        web
                        <div id="minimenu-extensions-web" className="submenu-listsub submenu-extensions-web no-sub-menu">
                            <div id="extensions-web-1" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                Découpe
                                <div id="minimenu-extensions-web-decoupe" className="submenu-listsub submenu-extensions-web-decoupe no-sub-menu">
                                    <div id="extensions-web-decoupe-1" className="submenu-texte">
                                        Créer un rectangle de découpe...
                                    </div>
                                    <div id="extensions-web-decoupe-2" className="submenu-texte">
                                        Définir un groupe de composants...
                                    </div>
                                    <div id="extensions-web-decoupe-3" className="submenu-texte">
                                        Exporter les composants et le code HTML+CSS...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-web-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                                }
                                JavaScript
                                <div id="minimenu-extensions-web-javascript" className="submenu-listsub submenu-extensions-web-javascript no-sub-menu">
                                    <div id="extensions-web-javascript-1" className="submenu-texte">
                                        Définir les attributs...
                                    </div>
                                    <div id="extensions-web-javascript-2" className="submenu-texte">
                                        Transmettre les attributs...
                                    </div>
                                </div>
                            </div>
                            <div id="extensions-web-3" className="submenu-texte">
                                Maquette web interactive...
                            </div>
                        </div>
                    </div> 

                    <hr className="topmenu-hr" />

                    { /* SUBMENU GERER LES EXTENSIONS */}
                    <div id="extensions-20" className="submenu-texte">Gérer les extensions...</div> 
                </div>

                { /* MENU AIDE */}
                <div id="submenu-aide" className="submenu-list submenu-aide no-sub-menu">
                    <div id="aide-1" className="submenu-texte submenu-iconspace">Manuel d'inkscape</div>
                    <div id="aide-2" className="submenu-texte submenu-iconspace">Référence des raccourcis clavier et souris</div>
                    <div id="aide-3" className="submenu-texte submenu-iconspace">Poser une question</div>
                    <div id="aide-4" className="submenu-texte submenu-iconspace">
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        Didacticiels
                        <div id="minimenu-aide-didacticiel" className="submenu-listsub submenu-aide-didacticiel no-sub-menu">
                            <div id="aide-didacticiel-1" className="submenu-texte">
                                Inkscape: Basique
                            </div>
                            <div id="aide-didacticiel-2" className="submenu-texte">
                                Inkscape: Formes
                            </div>
                            <div id="aide-didacticiel-3" className="submenu-texte">
                                Inkscape: Avancé
                            </div>
                            <div id="aide-didacticiel-4" className="submenu-texte">
                                Inkscape: Vectorisation
                            </div>
                            <div id="aide-didacticiel-5" className="submenu-texte">
                                Inkscape: Vectoriser du pixel art
                            </div>
                            <div id="aide-didacticiel-6" className="submenu-texte">
                                Inkscape: Calligraphie
                            </div>
                            <div id="aide-didacticiel-7" className="submenu-texte">
                                Inkscape: Interpolation
                            </div>
                            <div id="aide-didacticiel-8" className="submenu-texte">
                                Rudiments de design
                            </div>
                            <div id="aide-didacticiel-9" className="submenu-texte">
                                Trucs et astuces
                            </div>
                        </div>
                    </div>
                    <div id="aide-5" className="submenu-texte submenu-iconspace">Option de la ligne de commande</div>
                    <div id="aide-6" className="submenu-texte submenu-iconspace">FAQ</div>
                    <div id="aide-7" className="submenu-texte submenu-iconspace">Nouveautés de cette version</div>
                    <div id="aide-8" className="submenu-texte submenu-iconspace">Signaler un problème</div>
                    <div id="aide-9" className="submenu-texte submenu-iconspace">Faire un don</div>
                    <div id="aide-10" className="submenu-texte submenu-iconspace">Spécification de SVG 1.1</div>
                    <div id="aide-11" className="submenu-texte submenu-iconspace">Spécification de SVG 2</div>
                    <hr className="topmenu-hr" />
                    <div id="aide-12" className="submenu-texte submenu-iconspace">Gestion de la mémoire</div>
                    <div id="aide-13" className="submenu-texte">
                        {
                            <FontAwesomeIcon 
                                className="submenu-left" 
                                icon={["fa", "fa-info-circle"]} 
                            />
                        }
                        À propos d'inkscape
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default TopMenu;
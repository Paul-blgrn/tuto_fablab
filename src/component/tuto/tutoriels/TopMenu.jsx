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
                        <div id="submenu-fichier-recents" className="submenu-listsub submenu-fichier-recents no-sub-menu">
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
                        <div id="submenu-coller-dimensions" className="submenu-listsub submenu-coller-dimensions no-sub-menu">
                            <div id="coller-dimensions-1" className="submenu-texte">
                                Coller les dimensions
                            </div>
                            <div id="coller-dimensions-2" className="submenu-texte">
                                Coller la largeur
                            </div>
                            <div id="coller-dimensions-3" className="submenu-texte">
                                Coller la hauteur
                            </div>
                            <div id="coller-dimensions-4" className="submenu-texte">
                                Coller les dimensions séparément
                            </div>
                            <div id="coller-dimensions-5" className="submenu-texte">
                                Coller la largeur séparément
                            </div>
                            <div id="coller-dimensions-6" className="submenu-texte">
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
                        <div id="submenu-cloner" className="submenu-listsub submenu-cloner no-sub-menu">
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
                        <div id="submenu-selectionner-meme" className="submenu-listsub submenu-selectionner-meme no-sub-menu">
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
                    </div>
                    
                    {/* SUBMENU ORIENTATION */}
                    <div id="affichage-2" className="submenu-texte submenu-iconspace">
                        Orientation 
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-orientation" className="submenu-listsub submenu-orientation no-sub-menu">
                            <div id="orientation-1" className="submenu-texte submenu-iconspace">Tourner dans le sens horaire</div>    
                            <div id="orientation-2" className="submenu-texte submenu-iconspace">Tourner dans le sens anti-horaire</div>    
                            <div id="orientation-3" className="submenu-texte submenu-iconspace">Aucune rotation</div>    
                            <div id="orientation-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon className="submenu-left" icon={["far", "check-square"]} />
                                } 
                                Verouiller la rotation
                                </div>    
                            <hr className="submenu-hr" />
                            <div id="orientation-5" className="submenu-texte submenu-iconspace">Retourner horizontalement</div>  
                            <div id="orientation-6" className="submenu-texte submenu-iconspace">Retourner verticallement</div>  
                            <div id="orientation-7" className="submenu-texte submenu-iconspace">Aucun retournement</div>  
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
                        <div id="submenu-mode-affichage" className="submenu-listsub submenu-mode-affichage no-sub-menu">
                            <div id="mode-affichage-1" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Normal
                            </div>
                            <div id="mode-affichage-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Contour
                            </div>
                            <div id="mode-affichage-3" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }
                                Sans filtre
                            </div>
                            <div id="mode-affichage-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-circle"]} 
                                    />
                                } 
                                Traits fins visibles
                            </div>
                            <div id="mode-affichage-5" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "circle"]} 
                                    />
                                }     
                                Superposition de contours
                            </div>
                            <div id="mode-affichage-6" className="submenu-texte submenu-iconspace">
                                Cycler
                            </div>
                            <div id="mode-affichage-7" className="submenu-texte submenu-iconspace">
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
                        <div id="submenu-mode-affichage-scinde" className="submenu-listsub submenu-mode-affichage-scinde no-sub-menu">
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
                        <div id="submenu-afficher-cacher" className="submenu-listsub submenu-afficher-cacher no-sub-menu">
                            <div id="afficher-cacher-1" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre des commandes
                            </div>
                            <div id="afficher-cacher-2" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre de contrôle du magnétisme
                            </div>
                            <div id="afficher-cacher-3" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barre de contrôle des outils
                            </div>
                            <div id="afficher-cacher-4" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Boite à outils
                            </div>
                            <div id="afficher-cacher-5" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Règles
                            </div>
                            <div id="afficher-cacher-6" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Barres de défilement
                            </div>
                            <div id="afficher-cacher-7" className="submenu-texte">
                                {
                                    <FontAwesomeIcon 
                                        className="submenu-left" 
                                        icon={["far", "check-square"]} 
                                    />
                                } 
                                Palette
                            </div>
                            <div id="afficher-cacher-8" className="submenu-texte">
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
                        <div id="submenu-decoupe" className="submenu-listsub submenu-decoupe no-sub-menu">
                            <div id="decoupe-1" className="submenu-texte">
                                Définir une découpe
                            </div>
                            <div id="decoupe-2" className="submenu-texte">
                                Découpe inversée
                            </div>
                            <div id="decoupe-3" className="submenu-texte">
                                Relâcher la découpe
                            </div>
                        </div>
                    </div>    
                    <div id="objet-11" className="submenu-texte">
                        Masque
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-masque" className="submenu-listsub submenu-masque no-sub-menu">
                            <div id="masque-1" className="submenu-texte">
                                Définir un masque
                            </div>
                            <div id="masque-2" className="submenu-texte">
                                Définir un masque inversé (ECI)
                            </div>
                            <div id="masque-3" className="submenu-texte">
                                Retirer le masque
                            </div>
                        </div>
                    </div>    
                    <div id="objet-12" className="submenu-texte">
                        Motif
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-motif" className="submenu-listsub submenu-motif no-sub-menu">
                            <div id="motif-1" className="submenu-texte">
                                Objet en motif
                            </div>
                            <div id="motif-2" className="submenu-texte">
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
                        <div id="submenu-filtres-biseaux" className="submenu-listsub submenu-filtres-biseaux no-sub-menu">
                            <div id="biseaux-1" className="submenu-texte">
                                Biseau mat
                            </div>
                            <div id="biseaux-2" className="submenu-texte">
                                Bouton
                            </div>
                            <div id="biseaux-3" className="submenu-texte">
                                Contour en arête
                            </div>
                            <div id="biseaux-4" className="submenu-texte">
                                Contour surélevé
                            </div>
                            <div id="biseaux-5" className="submenu-texte">
                                Éclairage combiné
                            </div>
                            <div id="biseaux-6" className="submenu-texte">
                                Éclairage diffus...
                            </div>
                            <div id="biseaux-7" className="submenu-texte">
                                Éclairage spéculaire...
                            </div>
                            <div id="biseaux-8" className="submenu-texte">
                                Éclosion
                            </div>
                            <div id="biseaux-9" className="submenu-texte">
                                Gel fondant
                            </div>
                            <div id="biseaux-10" className="submenu-texte">
                                Gel fondant mat
                            </div>
                            <div id="biseaux-11" className="submenu-texte">
                                Get mat...
                            </div>
                            <div id="biseaux-12" className="submenu-texte">
                                Gel tout usages
                            </div>
                            <div id="biseaux-13" className="submenu-texte">
                                Huile grasse
                            </div>
                            <div id="biseaux-14" className="submenu-texte">
                                Métal brillant
                            </div>
                            <div id="biseaux-15" className="submenu-texte">
                                Métal fondu
                            </div>
                            <div id="biseaux-16" className="submenu-texte">
                                Métal luisant
                            </div>
                            <div id="biseaux-17" className="submenu-texte">
                                Métal moulé
                            </div>
                            <div id="biseaux-18" className="submenu-texte">
                                Microscope électronique
                            </div>
                            <div id="biseaux-19" className="submenu-texte">
                                Néon
                            </div>
                            <div id="biseaux-20" className="submenu-texte">
                                Pièce de puzzle
                            </div>
                            <div id="biseaux-21" className="submenu-texte">
                                Plastique profondément coloré
                            </div>
                            <div id="biseaux-22" className="submenu-texte">
                                Tôle emboutie
                            </div>
                            <div id="biseaux-23" className="submenu-texte">
                                Verre solaire
                            </div>
                            <div id="biseaux-24" className="submenu-texte">
                                Verre translucide
                            </div>
                            <div id="biseaux-25" className="submenu-texte">
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
                        <div id="submenu-filtres-bosselage" className="submenu-listsub submenu-filtres-bosselage no-sub-menu">
                            <div id="bosselage-1" className="submenu-texte">Acrylique épaisse</div>
                            <div id="bosselage-2" className="submenu-texte">Bosselage à deux lumières simple</div>
                            <div id="bosselage-3" className="submenu-texte">Bosselage bulleux</div>
                            <div id="bosselage-4" className="submenu-texte">Bosselage bulleur mat</div>
                            <div id="bosselage-5" className="submenu-texte">Bosselage cireux...</div>
                            <div id="bosselage-6" className="submenu-texte">Bosselage convoluté</div>
                            <div id="bosselage-7" className="submenu-texte">Bosselage diffus simple</div>
                            <div id="bosselage-8" className="submenu-texte">Bosselage gélatineux</div>
                            <div id="bosselage-9" className="submenu-texte">Bosselage papier</div>
                            <div id="bosselage-10" className="submenu-texte">Bosselage sombre</div>
                            <div id="bosselage-11" className="submenu-texte">Bosselage spéculaire simple</div>
                            <div id="bosselage-12" className="submenu-texte">Bosselage toilé</div>
                            <div id="bosselage-13" className="submenu-texte">Bosselage toilé mat</div>
                            <div id="bosselage-14" className="submenu-texte">Bosselage velouté</div>
                            <div id="bosselage-15" className="submenu-texte">Bosselage...</div>
                            <div id="bosselage-16" className="submenu-texte">Cuir repoussé</div>
                            <div id="bosselage-17" className="submenu-texte">Gravure bosselée</div>
                            <div id="bosselage-18" className="submenu-texte">Impression en relief</div>
                            <div id="bosselage-19" className="submenu-texte">Masque de bosselage bulleux</div>
                            <div id="bosselage-20" className="submenu-texte">Masque de bosselage toilé</div>
                            <div id="bosselage-21" className="submenu-texte">Masque de bosselage TSL</div>
                            <div id="bosselage-22" className="submenu-texte">Papier alluminium</div>
                            <div id="bosselage-23" className="submenu-texte">Pâte à modeler</div>
                            <div id="bosselage-24" className="submenu-texte">Peinture épaisse</div>
                            <div id="bosselage-25" className="submenu-texte">Peinture sur toile brute</div>
                            <div id="bosselage-26" className="submenu-texte">Plastifier</div>
                            <div id="bosselage-27" className="submenu-texte">Plâtre</div>
                            <div id="bosselage-28" className="submenu-texte">Plâtre coloré</div>
                            <div id="bosselage-29" className="submenu-texte">Toile de lin</div>
                            <div id="bosselage-30" className="submenu-texte">Vernis ridé</div>
                        </div>
                    </div> 

                    { /* SUBMENU COULEUR */}
                    <div id="filtres-3" className="submenu-texte">
                        Couleur
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-couleur" className="submenu-listsub submenu-filtres-couleur no-sub-menu">
                            <div id="couleur-1" className="submenu-texte">Brillance...</div>
                            <div id="couleur-2" className="submenu-texte">Canaux de peinture</div>
                            <div id="couleur-3" className="submenu-texte">Colorer...</div>
                            <div id="couleur-4" className="submenu-texte">Couleur douces</div>
                            <div id="couleur-5" className="submenu-texte">Décalage de couleur...</div>
                            <div id="couleur-6" className="submenu-texte">Décolore en noir ou blanc...</div>
                            <div id="couleur-7" className="submenu-texte">Déplacement des canaux CMJ...</div>
                            <div id="couleur-8" className="submenu-texte">Déplacement des canaux RVB...</div>
                            <div id="couleur-9" className="submenu-texte">Duochrome...</div>
                            <div id="couleur-10" className="submenu-texte">Éclairage...</div>
                            <div id="couleur-11" className="submenu-texte">Extraire un canal...</div>
                            <div id="couleur-12" className="submenu-texte">Fluorescence</div>
                            <div id="couleur-13" className="submenu-texte">Fondu...</div>
                            <div id="couleur-14" className="submenu-texte">Inverser...</div>
                            <div id="couleur-15" className="submenu-texte">Lumière noire</div>
                            <div id="couleur-16" className="submenu-texte">Luminosité et contraste...</div>
                            <div id="couleur-17" className="submenu-texte">Mélanger les opposés</div>
                            <div id="couleur-18" className="submenu-texte">Niveaux de gris...</div>
                            <div id="couleur-19" className="submenu-texte">Peinture par canal...</div>
                            <div id="couleur-20" className="submenu-texte">Perception des couleurs...</div>
                            <div id="couleur-21" className="submenu-texte">Quadritone fantaisie...</div>
                            <div id="couleur-22" className="submenu-texte">Simuler CMJ</div>
                            <div id="couleur-23" className="submenu-texte">Solariser...</div>
                            <div id="couleur-24" className="submenu-texte">Teinte vers blanc</div>
                            <div id="couleur-25" className="submenu-texte">Transfert de composantes...</div>
                            <div id="couleur-26" className="submenu-texte">Trichrome</div>
                            <div id="couleur-27" className="submenu-texte">Tritone...</div>
                        </div>
                    </div> 

                    { /* SUBMENU CRETES */}
                    <div id="filtres-4" className="submenu-texte">
                        Crêtes
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-cretes" className="submenu-listsub submenu-filtres-cretes no-sub-menu">
                            <div id="cretes-1" className="submenu-texte">Arrête mate</div>
                            <div id="cretes-2" className="submenu-texte">Arrête métalisée</div>
                            <div id="cretes-3" className="submenu-texte">Bulle brillante</div>
                            <div id="cretes-4" className="submenu-texte">Dragée</div>
                            <div id="cretes-5" className="submenu-texte">Gel réfringent A</div>
                            <div id="cretes-6" className="submenu-texte">Gel réfringent B</div>
                            <div id="cretes-7" className="submenu-texte">Membrane fine</div>
                        </div>
                    </div> 

                    { /* SUBMENU DEFORMATION */}
                    <div id="filtres-5" className="submenu-texte">
                        Déformation
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-deformation" className="submenu-listsub submenu-filtres-deformation no-sub-menu">
                            <div id="deformation-1" className="submenu-texte">Agitation dilatée</div>
                            <div id="deformation-2" className="submenu-texte">Agitation interne</div>
                            <div id="deformation-3" className="submenu-texte">Agitation...</div>
                            <div id="deformation-4" className="submenu-texte">Barbouillage de pixels</div>
                            <div id="deformation-5" className="submenu-texte">Clapotis</div>
                            <div id="deformation-6" className="submenu-texte">Éponge et craie</div>
                            <div id="deformation-7" className="submenu-texte">Estompage du pourtour...</div>
                            <div id="deformation-8" className="submenu-texte">Ondulation</div>
                            <div id="deformation-9" className="submenu-texte">Pourtour déchiré</div>
                            <div id="deformation-10" className="submenu-texte">Tourbillon</div>
                        </div>
                    </div> 

                    { /* SUBMENU DESSIN ET PEINTURE D'IMAGE */}
                    <div id="filtres-6" className="submenu-texte">
                        Dessin et peinture d'image
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-peinture-image" className="submenu-listsub submenu-filtres-peinture-image no-sub-menu">
                            <div id="peinture-image-1" className="submenu-texte">Affiche couleur amusante</div>
                            <div id="peinture-image-2" className="submenu-texte">Chromolitho alternatif</div>
                            <div id="peinture-image-3" className="submenu-texte">Chromolitho...</div>
                            <div id="peinture-image-4" className="submenu-texte">Contour lumineux</div>
                            <div id="peinture-image-5" className="submenu-texte">Crayon</div>
                            <div id="peinture-image-6" className="submenu-texte">Dessin d'image de base</div>
                            <div id="peinture-image-7" className="submenu-texte">Dessin de poster</div>
                            <div id="peinture-image-8" className="submenu-texte">Dessin liquide</div>
                            <div id="peinture-image-9" className="submenu-texte">Dessin néon...</div>
                            <div id="peinture-image-10" className="submenu-texte">Dessin transparent liquide</div>
                            <div id="peinture-image-11" className="submenu-texte">Dessin...</div>
                            <div id="peinture-image-12" className="submenu-texte">Électrisation...</div>
                            <div id="peinture-image-13" className="submenu-texte">Encre marbrée...</div>
                            <div id="peinture-image-14" className="submenu-texte">Gravure croisée...</div>
                            <div id="peinture-image-15" className="submenu-texte">Gravure par point...</div>
                            <div id="peinture-image-16" className="submenu-texte">Gravure transparente</div>
                            <div id="peinture-image-17" className="submenu-texte">Gravure transparente B</div>
                            <div id="peinture-image-18" className="submenu-texte">Litho</div>
                            <div id="peinture-image-19" className="submenu-texte">Patron</div>
                            <div id="peinture-image-20" className="submenu-texte">Peinture à l'huile...</div>
                            <div id="peinture-image-21" className="submenu-texte">Peinture et poster...</div>
                            <div id="peinture-image-22" className="submenu-texte">Poster d'agitation</div>
                            <div id="peinture-image-23" className="submenu-texte">Poster de bruit croisé</div>
                            <div id="peinture-image-24" className="submenu-texte">Poster de bruit croisé B</div>
                            <div id="peinture-image-25" className="submenu-texte">Postérisation simple...</div>
                            <div id="peinture-image-26" className="submenu-texte">Vieille carte postale</div>
                        </div>
                    </div> 

                    { /* SUBMENU EFFET D'IMAGE */}
                    <div id="filtres-7" className="submenu-texte">
                        Effets d'image
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-effet-image" className="submenu-listsub submenu-filtres-effet-image no-sub-menu">
                            <div id="effet-image-1" className="submenu-texte">Détection de bords...</div>
                            <div id="effet-image-2" className="submenu-texte">Grain photo</div>
                            <div id="effet-image-3" className="submenu-texte">Lentille à portrait</div>
                            <div id="effet-image-4" className="submenu-texte">Netteté</div>
                            <div id="effet-image-5" className="submenu-texte">Netteté renforcée</div>
                            <div id="effet-image-6" className="submenu-texte">Vieillissement</div>
                        </div>
                    </div> 

                    { /* SUBMENU EPARPILLER */}
                    <div id="filtres-8" className="submenu-texte">
                        Eparpiller
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-eparpiller" className="submenu-listsub submenu-filtres-eparpiller no-sub-menu">
                            <div id="eparpiller-1" className="submenu-texte">Aérosol</div>
                            <div id="eparpiller-2" className="submenu-texte">Cubes</div>
                            <div id="eparpiller-3" className="submenu-texte">Feuilles</div>
                            <div id="eparpiller-4" className="submenu-texte">Pointillisme</div>
                        </div>
                    </div> 

                    { /* SUBMENU FLOUS */}
                    <div id="filtres-9" className="submenu-texte">
                        Flous
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-flous" className="submenu-listsub submenu-filtres-flous no-sub-menu">
                            <div id="flous-1" className="submenu-texte">Apparition</div>
                            <div id="flous-2" className="submenu-texte">Estompage du pourtour...</div>
                            <div id="flous-3" className="submenu-texte">Évanescence</div>
                            <div id="flous-4" className="submenu-texte">Flou croisé...</div>
                            <div id="flous-5" className="submenu-texte">Flou double</div>
                            <div id="flous-6" className="submenu-texte">Flou...</div>
                            <div id="flous-7" className="submenu-texte">Hors focale...</div>
                            <div id="flous-8" className="submenu-texte">Nettoyage des bords...</div>
                        </div>
                    </div> 

                    { /* SUBMENU FOND ET TRANSPARENCE */}
                    <div id="filtres-10" className="submenu-texte">
                        Fond et transparence
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-transparence" className="submenu-listsub submenu-filtres-transparence no-sub-menu">
                            <div id="transparence-1" className="submenu-texte">Aplatir la transparence</div>
                            <div id="transparence-2" className="submenu-texte">Carte de saturation</div>
                            <div id="transparence-3" className="submenu-texte">Découpe rapide</div>
                            <div id="transparence-4" className="submenu-texte">Fondre...</div>
                            <div id="transparence-5" className="submenu-texte">Gomme lumière postérisée</div>
                            <div id="transparence-6" className="submenu-texte">Gomme lumière...</div>
                            <div id="transparence-7" className="submenu-texte">Monochrome transparent</div>
                            <div id="transparence-8" className="submenu-texte">Opacité...</div>
                            <div id="transparence-9" className="submenu-texte">Remplir le fond</div>
                            <div id="transparence-10" className="submenu-texte">Silhouette...</div>
                            <div id="transparence-11" className="submenu-texte">transparence par canal...</div>
                        </div>
                    </div> 

                    { /* SUBMENU MATIERES */}
                    <div id="filtres-11" className="submenu-texte">
                        Matières
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-matieres" className="submenu-listsub submenu-filtres-matieres no-sub-menu">
                            <div id="matieres-1" className="submenu-texte">Bijou en émail</div>
                            <div id="matieres-2" className="submenu-texte">Bois 3D</div>
                            <div id="matieres-3" className="submenu-texte">Cire d'abeille irisée</div>
                            <div id="matieres-4" className="submenu-texte">Fourrure de léopard</div>
                            <div id="matieres-5" className="submenu-texte">lave fissurée</div>
                            <div id="matieres-6" className="submenu-texte">Marbre en 3D</div>
                            <div id="matieres-7" className="submenu-texte">Métal érodé</div>
                            <div id="matieres-8" className="submenu-texte">Métal souple</div>
                            <div id="matieres-9" className="submenu-texte">Nacre en 3D</div>
                            <div id="matieres-10" className="submenu-texte">Pâte d'or</div>
                            <div id="matieres-11" className="submenu-texte">Peau de lézard</div>
                            <div id="matieres-12" className="submenu-texte">Peinture écaillée</div>
                            <div id="matieres-13" className="submenu-texte">Peinture métallisée</div>
                            <div id="matieres-14" className="submenu-texte">Projection d'or</div>
                        </div>
                    </div> 

                    { /* SUBMENU MORPHOLOGIE  */}
                    <div id="filtres-12" className="submenu-texte">
                        Morphologie
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-morphologie" className="submenu-listsub submenu-filtres-morphologie no-sub-menu">
                            <div id="morphologie-1" className="submenu-texte">Adoucissement...</div>
                            <div id="morphologie-2" className="submenu-texte">Chaud dedans</div>
                            <div id="morphologie-3" className="submenu-texte">Contour...</div>
                            <div id="morphologie-4" className="submenu-texte">Contours discrets</div>
                            <div id="morphologie-5" className="submenu-texte">Flou postérisé</div>
                            <div id="morphologie-6" className="submenu-texte">Froid dehors</div>
                            <div id="morphologie-7" className="submenu-texte">Table de contours</div>
                            <div id="morphologie-8" className="submenu-texte">Trou noir</div>
                        </div>
                    </div> 

                    { /* SUBMENU OMBRAGE 3D NON REALISTES */}
                    <div id="filtres-13" className="submenu-texte">
                        Ombrages 3D non réalistes
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-ombrages-3d" className="submenu-listsub submenu-filtres-ombrages-3d no-sub-menu">
                            <div id="ombrages-3d-1" className="submenu-texte">Aluminium</div>
                            <div id="ombrages-3d-2" className="submenu-texte">Bande dessinée</div>
                            <div id="ombrages-3d-3" className="submenu-texte">Bosselage alluminium</div>
                            <div id="ombrages-3d-4" className="submenu-texte">Bosselage chromé</div>
                            <div id="ombrages-3d-5" className="submenu-texte">Bosselage du contour</div>
                            <div id="ombrages-3d-6" className="submenu-texte">Bosselage ombré</div>
                            <div id="ombrages-3d-7" className="submenu-texte">Chrome</div>
                            <div id="ombrages-3d-8" className="submenu-texte">Chrome profond</div>
                            <div id="ombrages-3d-9" className="submenu-texte">Crème BD</div>
                            <div id="ombrages-3d-10" className="submenu-texte">Déco net</div>
                            <div id="ombrages-3d-11" className="submenu-texte">Décoloration BD</div>
                            <div id="ombrages-3d-12" className="submenu-texte">Dessin à la brosse</div>
                            <div id="ombrages-3d-13" className="submenu-texte">Ébauche BD</div>
                            <div id="ombrages-3d-14" className="submenu-texte">Gel réfringent</div>
                            <div id="ombrages-3d-15" className="submenu-texte">Métal brossé</div>
                            <div id="ombrages-3d-16" className="submenu-texte">Métal profond</div>
                            <div id="ombrages-3d-17" className="submenu-texte">Métal tranchant</div>
                            <div id="ombrages-3d-18" className="submenu-texte">Opaline</div>
                            <div id="ombrages-3d-19" className="submenu-texte">Opaline</div>
                        </div>
                    </div> 

                    { /* SUBMENU OMBRES ET LUEURS */}
                    <div id="filtres-14" className="submenu-texte">
                        Ombres et lueurs
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-ombres-lueurs" className="submenu-listsub submenu-filtres-ombres-lueurs no-sub-menu">
                            <div id="ombres-lueurs-1" className="submenu-texte">Découpe et flou</div>
                            <div id="ombres-lueurs-2" className="submenu-texte">Dedans et dehors</div>
                            <div id="ombres-lueurs-3" className="submenu-texte">Émergence</div>
                            <div id="ombres-lueurs-4" className="submenu-texte">Incrsutation</div>
                            <div id="ombres-lueurs-5" className="submenu-texte">Ombre et lumière</div>
                            <div id="ombres-lueurs-6" className="submenu-texte">Ombre portée...</div>
                        </div>
                    </div> 

                    { /* SUBMENU OUTIL PIXEL */}
                    <div id="filtres-15" className="submenu-texte">
                        Outils pixel
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-outil-pixel" className="submenu-listsub submenu-filtres-outil-pixel no-sub-menu">
                            <div id="outil-pixel-1" className="submenu-texte">Pixéliser</div>
                        </div>
                    </div> 

                    { /* SUBMENU PROTUBERANCES */}
                    <div id="filtres-16" className="submenu-texte">
                        Protubérances
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-protuberances" className="submenu-listsub submenu-filtres-protuberances no-sub-menu">
                            <div id="protuberances-1" className="submenu-texte">Bavure d'encre</div>
                            <div id="protuberances-2" className="submenu-texte">Chewing-gum</div>
                            <div id="protuberances-3" className="submenu-texte">Crête neigeuse...</div>
                            <div id="protuberances-4" className="submenu-texte">Feu</div>
                            <div id="protuberances-5" className="submenu-texte">Ruissellement</div>
                        </div>
                    </div> 

                    { /* SUBMENU SUPERMISITIONS */}
                    <div id="filtres-17" className="submenu-texte">
                        Superpositions
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-superpositions" className="submenu-listsub submenu-filtres-superpositions no-sub-menu">
                            <div id="superpositions-1" className="submenu-texte">Bruit croisé</div>
                            <div id="superpositions-2" className="submenu-texte">Bruit croisé B</div>
                            <div id="superpositions-3" className="submenu-texte">Carnaval</div>
                            <div id="superpositions-4" className="submenu-texte">Cellules vivantes</div>
                            <div id="superpositions-5" className="submenu-texte">Duotone turbulent</div>
                            <div id="superpositions-6" className="submenu-texte">Écossais</div>
                            <div id="superpositions-7" className="submenu-texte">Écossais</div>
                            <div id="superpositions-8" className="submenu-texte">Écossais ondoyant</div>
                            <div id="superpositions-9" className="submenu-texte">Fil barbelé</div>
                            <div id="superpositions-10" className="submenu-texte">Fond turbulent...</div>
                            <div id="superpositions-11" className="submenu-texte">Foule</div>
                            <div id="superpositions-12" className="submenu-texte">Fourrure de tigre</div>
                            <div id="superpositions-13" className="submenu-texte">Fromage bleu</div>
                            <div id="superpositions-14" className="submenu-texte">Fromage suisse</div>
                            <div id="superpositions-15" className="submenu-texte">Givre</div>
                            <div id="superpositions-16" className="submenu-texte">Gomme lumière craquelée</div>
                            <div id="superpositions-17" className="submenu-texte">Jardin des délices</div>
                            <div id="superpositions-18" className="submenu-texte">Liquide</div>
                            <div id="superpositions-19" className="submenu-texte">Liquide agité</div>
                            <div id="superpositions-20" className="submenu-texte">Monochrome transparent craquelé</div>
                            <div id="superpositions-21" className="submenu-texte">Montagnes d'Écosse</div>
                            <div id="superpositions-22" className="submenu-texte">Moucheture</div>
                            <div id="superpositions-23" className="submenu-texte">Nappe de pétrole</div>
                            <div id="superpositions-24" className="submenu-texte">Nuages</div>
                            <div id="superpositions-25" className="submenu-texte">Silhouette marbrée</div>
                            <div id="superpositions-26" className="submenu-texte">Tampon en caoutchouc</div>
                            <div id="superpositions-27" className="submenu-texte">Transparence agitée</div>
                            <div id="superpositions-28" className="submenu-texte">Transparence barbouillée</div>
                            <div id="superpositions-29" className="submenu-texte">Transparence pointilliste</div>
                            <div id="superpositions-30" className="submenu-texte">Transparence toilée</div>
                            <div id="superpositions-31" className="submenu-texte">Turbulence alpha</div>
                            <div id="superpositions-32" className="submenu-texte">Turbulence colorée</div>
                            <div id="superpositions-33" className="submenu-texte">Turbulence postérisée</div>
                            <div id="superpositions-34" className="submenu-texte">Zèbre</div>
                        </div>
                    </div> 

                    { /* SUBMENU TEXTURES */}
                    <div id="filtres-18" className="submenu-texte">
                        Textures
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                        <div id="submenu-filtres-textures" className="submenu-listsub submenu-filtres-textures no-sub-menu">
                            <div id="textures-1" className="submenu-texte">Aquarelle</div>
                            <div id="textures-2" className="submenu-texte">Arc-en-ciel déformé</div>
                            <div id="textures-3" className="submenu-texte">Arc-en-ciel fondu</div>
                            <div id="textures-4" className="submenu-texte">Arc-en-ciel teinté</div>
                            <div id="textures-5" className="submenu-texte">Buvard</div>
                            <div id="textures-6" className="submenu-texte">Confiture</div>
                            <div id="textures-7" className="submenu-texte">Criblé</div>
                            <div id="textures-8" className="submenu-texte">Éclaté</div>
                            <div id="textures-9" className="submenu-texte">Écorce</div>
                            <div id="textures-10" className="submenu-texte">Feutre</div>
                            <div id="textures-11" className="submenu-texte">Gouache</div>
                            <div id="textures-12" className="submenu-texte">Impression à la cire</div>
                            <div id="textures-13" className="submenu-texte">Mur de pierres</div>
                            <div id="textures-14" className="submenu-texte">Papier à grain</div>
                            <div id="textures-15" className="submenu-texte">Peinture à l'encre</div>
                            <div id="textures-16" className="submenu-texte">Plastique chiffonné</div>
                            <div id="textures-17" className="submenu-texte">Plastique écrasé</div>
                            <div id="textures-18" className="submenu-texte">Pourtour brûlé</div>
                            <div id="textures-19" className="submenu-texte">Relief organique</div>
                            <div id="textures-20" className="submenu-texte">Tache d'encre...</div>
                            <div id="textures-21" className="submenu-texte">Tapis de soie</div>
                            <div id="textures-22" className="submenu-texte">Verre martelé</div>
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
                        <div id="submenu-extension-color" className="submenu-listsub submenu-extension-color no-sub-menu">
                        
                        </div>
                    </div> 

                    { /* SUBMENU DOCUMENT */}
                    <div id="extensions-4" className="submenu-texte">
                        Document
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU EXPORTER */}
                    <div id="extensions-5" className="submenu-texte">
                        Exporter
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU FEUILLE DE STYLE */}
                    <div id="extensions-6" className="submenu-texte">
                        Feuille de style
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU GCODETOOLS */}
                    <div id="extensions-7" className="submenu-texte">
                        Gcodetools
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU GENERER A PATIR DU CHEMIN */}
                    <div id="extensions-8" className="submenu-texte">
                        Générer à partir du chemin
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU IMAGES */}
                    <div id="extensions-9" className="submenu-texte">
                        Images
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU IMAGES MATRICIELLES */}
                    <div id="extensions-10" className="submenu-texte">
                        Images matricielles
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU INK/STITCH */}
                    <div id="extensions-11" className="submenu-texte">
                        Ink/Stitch
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU JESSYINK */}
                    <div id="extensions-12" className="submenu-texte">
                        JessyInk
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU MODIFIER LES CHEMINS */}
                    <div id="extensions-13" className="submenu-texte">
                        Modifier les chemins
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU ORGANISER */}
                    <div id="extensions-14" className="submenu-texte">
                        Organiser
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU RENDU */}
                    <div id="extensions-15" className="submenu-texte">
                        Rendu
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU TEXTE */}
                    <div id="extensions-16" className="submenu-texte"> 
                        Texte
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU TYPOGRAPHIE */}
                    <div id="extensions-17" className="submenu-texte">
                        Typographie
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU VISUALISATION DE CHEMIN */}
                    <div id="extensions-18" className="submenu-texte">
                        Visualisation de chemin
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    { /* SUBMENU WEB */}
                    <div id="extensions-19" className="submenu-texte">
                        Web
                        {
                            <FontAwesomeIcon className="submenu-arrowright" icon={["fa", "fa-chevron-right"]} />
                        }
                    </div> 

                    <hr className="topmenu-hr" />

                    { /* SUBMENU GERER LES EXTENSIONS */}
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
const Sauvegarder = () => {
    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour sauvegarder votre fichier, appuyez sur la touche «CTRL» et la touche «S» de votre clavier.
                <br/>
                Une fenetre va s'ouvrir, choisissez l'emplacement et le nom de votre ficher puis appuyez sur le bouton «Enregistrer». 
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple:</h2>
            </div>
            <div className='imagestuto'>
                <img className='keyboard' src='/images/keyboard.svg' alt='ctrl keyboard'/>
                <div className="pushtouch">
                    <div className="pushtouch-ctrl pushtouch-animate"></div>
                    <div className="pushtouch-s pushtouch-animate"></div>
                    <div className="pushtouch-test"></div>
                </div>
            </div>
        </div>
    );
}

export default Sauvegarder
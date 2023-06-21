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
                <img className='keyboard-touch scale-in-out-anim' src='/images/key_ctrl.svg' alt='ctrl keyboard'/>
                <div className='tutosignplusb'>+</div>
                <img className='keyboard-touch scale-in-out-anim' src='/images/key_s.svg' alt='ctrl keyboard'/>
            </div>
        </div>
    );
}

export default Sauvegarder
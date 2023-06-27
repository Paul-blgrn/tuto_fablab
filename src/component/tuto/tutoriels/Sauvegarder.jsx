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
                <div className="Keyboard-parent">
                    <img className="keyboard" src='/images/keyboard.svg' alt='ctrl keyboard'/>
                    <div className="push-keys">
                        {/* LINE 3 */}
                        <div className="keyboard-line3">
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                            <div className="touch"></div>
                        </div>

                        {/* LINE 4 */}
                        <div className="keyboard-line4">
                            <div className="touch2"></div>
                            <div className="touch2 key-animate"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                            <div className="touch2"></div>
                        </div>

                        {/* LINE 5 */}
                        <div className="keyboard-line5">
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                            <div className="touch3"></div>
                        </div>

                        {/* LINE 6 */}
                        <div className="keyboard-line6">
                            <div className="touch6 key-animate"></div>
                            <div className="touch6"></div>
                            <div className="touch6"></div>
                            <div className="touch6"></div>
                            <div className="touch6"></div>
                            <div className="touch6"></div>
                            <div className="touch6"></div>
                        </div>

                        {/* NUM PAD */}
                        <div className="keyboard-pad">
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                            <div className="touchpad"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sauvegarder
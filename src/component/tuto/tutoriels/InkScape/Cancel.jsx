import Keyboard from '../Keyboard';

const Cancel = () => {
    const localKey = [
        "Key-LCTRL", 
        "Key-Z"
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour annuler une ou plusieurs actions, appuyez sur la touche «CTRL» et la touche «Z» de votre clavier.
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple:</h2>
            </div>
            <div className='imagestuto'>
                <div className="Keyboard-parent">
                    <img className="keyboard" src='/images/keyboard.svg' alt='ctrl keyboard'/>
                    <div className="push-keys">
                        {localKey && <Keyboard key={localKey} keyboardKeys={localKey} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cancel
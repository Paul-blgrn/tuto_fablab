import Keyboard from '../KeyboardFunction';

const Cancel = () => {
    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LCTRL", 
                "Key-Z", 
            ]
        }
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
                    <img className="keyboard" src='/images/keyboard.svg' alt='keyboard'/>
                    <div className="push-keys">
                        {localKey && <Keyboard keyboardKeys={localKey} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cancel
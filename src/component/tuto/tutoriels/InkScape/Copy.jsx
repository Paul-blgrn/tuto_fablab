import Keyboard from '../KeyboardFunction';

const Copy = () => {
    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LCTRL", 
                "Key-C", 
            ],
            "menu" : []
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour copier du contenu, appuyez sur la touche «CTRL» et la touche «C» de votre clavier.
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple(s):</h2>
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

export default Copy;
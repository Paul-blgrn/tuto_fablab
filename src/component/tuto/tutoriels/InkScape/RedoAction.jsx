import Keyboard from '../KeyboardFunction';

const RedoAction = () => {
    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LCTRL", 
                "Key-Y", 
            ],
            "menu" : [],
            "topmenu" : [],
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour rétablir une ou plusieurs actions, appuyez sur la touche «CTRL» et la touche «y» de votre clavier.
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple:</h2>
            </div>
            <div className='imagestuto'>
                <div className="Keyboard-parent">
                    <div className="push-keys">
                        {localKey && <Keyboard keyboardKeys={localKey} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RedoAction;
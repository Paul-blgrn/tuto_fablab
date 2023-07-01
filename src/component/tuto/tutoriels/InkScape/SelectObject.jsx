import Keyboard from '../KeyboardFunction';

const SelectObject = () => {

    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LEFT-LSHIFT", 
            ]
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour selectionner un ou plusieurs objets, Maintenez la touche «SHIFT» de votre clavier.
                <br/>
                Puis
                <br/>
                Cliquez sur le bouton gauche de votre souris.
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple:</h2>
            </div>
            <div className='imagestuto'>
                <div className="Keyboard-parent">
                    <img className="keyboard" src='/images/keyboard.svg' alt='ctrl keyboard'/>
                    <div className="push-keys">
                        {localKey && <Keyboard keyboardKeys={localKey} />}
                    </div>
                </div>
                <div className='tutosignplus'>+</div>
                <div className='arrownmouse'>
                    <img className='mousewheelleftclick scale-in-out-anim' src='/images/right_pointer.svg' alt='pointer'/>
                    <img className="right-mouse" src='/images/mouseleft.svg' alt='mouseleft'/>
                </div>
            </div>
        </div>
    );
}

export default SelectObject;
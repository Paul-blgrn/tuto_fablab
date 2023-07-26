import Keyboard from '../KeyboardFunction';

const SelectObject = () => {

    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis «Clic-gauche»",
            "keys": [
                "Key-LEFT-LSHIFT", 
                "Mouse-LeftClick", 
            ],
            "menu" : [],
            "topmenu" : [],
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
                    <div className="push-keys">
                        {localKey && <Keyboard keyboardKeys={localKey} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectObject;
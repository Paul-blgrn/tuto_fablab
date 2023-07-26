import Keyboard from '../KeyboardFunction';

const Paste = () => {
    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis «V»",
            "keys": [
                "Key-LCTRL", 
                "Key-V", 
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "description": "«Clic-droit puis «Coller»",
            "keys": [
                "Mouse-RightClick",
            ],
            "menu" : [
                "submenu-3",
            ],
            "topmenu" : [],
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour coller du contenu, appuyez sur la touche «CTRL» et la touche «V» de votre clavier.
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple(s):</h2>
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

export default Paste;
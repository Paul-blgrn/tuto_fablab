import Keyboard from '../KeyboardFunction';

const Copy = () => {
    const localKey = [
        {
            "id": 1,
            "keys": [
                "no-keyboard",
            ],
            "menu" : [],
            "topmenu" : [
                "fichier",
            ],
            "submenu": [
                "importer",
            ],
        },
        {
            "id": 2,
            "keys": [
                "Key-LCTRL", 
                "Key-L", 
            ],
            "menu" : [],
            "topmenu" : [],
            "submenu": [],
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour importer du contenu, appuyez sur la touche «CTRL» et la touche «L» de votre clavier.
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

export default Copy;
import Keyboard from '../KeyboardFunction';

const Sauvegarder = () => {
    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis «S»",
            "keys": [
                "Key-LCTRL", 
                "Key-S",
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "description": "Cliquez sur «Fichier» puis «Enregistrer»",
            "keys": [],
            "menu" : [],
            "topmenu" : [
                "fichier",
                "fichier-6",
            ],
        },
        {
            "id": 3,
            "description": "Cliquez sur «Fichier» puis «Enregistrer sous»",
            "keys": [],
            "menu" : [],
            "topmenu" : [
                "fichier",
                "fichier-7",
            ],
        }
    ];

    return (
        <div className='contentbox'>
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

export default Sauvegarder
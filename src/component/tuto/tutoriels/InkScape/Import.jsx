import Keyboard from '../KeyboardFunction';

const Copy = () => {
    const localKey = [
        {
            "id": 1,
            "description" : "Cliquez sur «Fichier» puis «Importer»",
            "keys": [],
            "menu" : [],
            "topmenu" : [
                "fichier",
                "fichier-10",
            ],
        },
        {
            "id": 2,
            "description": "Pressez la touche «CTRL» puis «L»",
            "keys": [
                "Key-LCTRL",
                "Key-L",
            ],
            "menu" : [],
            "topmenu" : [],
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

export default Copy;
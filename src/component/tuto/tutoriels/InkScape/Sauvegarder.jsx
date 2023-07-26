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
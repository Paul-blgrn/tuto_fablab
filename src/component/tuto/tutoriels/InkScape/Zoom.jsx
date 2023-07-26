import Keyboard from '../KeyboardFunction';

const Zoom = () => {

    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis faites rouler la roulette vers le haut ou le bas",
            "keys": [
                "Key-LCTRL",
                "Mouse-Scroll",
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "description": "Pressez la touche «+» ou «-»",
            "keys": [
                "Key-PAD-SOUSTRACTION",
                "Key-PAD-ADDITION",
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 3,
            "description": "Pressez la touche «CTRL» puis «+» ou «-»",
            "keys": [
                "Key-LCTRL",
                "Key-)",
                "Key-=",
            ],
            "menu" : [],
            "topmenu" : [],
        }
    ];
    return (
        <div className='contentbox'>
            <div className="imagestuto">
                <div className="Keyboard-parent">
                    {localKey && <Keyboard keyboardKeys={localKey} />}
                </div>
            </div>
        </div>
    );
}

export default Zoom;
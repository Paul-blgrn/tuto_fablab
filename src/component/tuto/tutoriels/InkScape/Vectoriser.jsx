import Keyboard from '../KeyboardFunction';

const Vectoriser = () => {
    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «MAJ» puis «ALT» puis «B»",
            "keys": [
                "Key-LEFT-LSHIFT", 
                "Key-LALT", 
                "Key-B", 
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "description": "«Clic-droit» puis «Vectoriser un objet matriciel»",
            "keys": [
                "Mouse-RightClick",
            ],
            "menu" : [
                "submenu-9",
            ],
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

export default Vectoriser;
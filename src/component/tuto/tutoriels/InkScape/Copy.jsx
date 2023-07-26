import Keyboard from '../KeyboardFunction';

const Copy = () => {
    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis «C»",
            "keys": [
                "Key-LCTRL", 
                "Key-C", 
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "description": "«Clic-droit puis «Copier»",
            "keys": [
                "Mouse-RightClick",
            ],
            "menu" : [
                "submenu-2",
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

export default Copy;
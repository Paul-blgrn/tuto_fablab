import Keyboard from '../KeyboardFunction';

const RedoAction = () => {
    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis «Y»",
            "keys": [
                "Key-LCTRL", 
                "Key-Y", 
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "description": "Cliquez sur «Edition» puis «Rétablir»",
            "keys": [],
            "menu" : [],
            "topmenu" : [
                "edition",
                "edition-2",
            ],
        },
        {
            "id": 3,
            "description": "TEST",
            "keys": [],
            "menu" : [],
            "topmenu" : [
                "extensions",
                "extensions-11",
                "extensions-inkstitch",
                "extensions-inkstitch-1",
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

export default RedoAction;
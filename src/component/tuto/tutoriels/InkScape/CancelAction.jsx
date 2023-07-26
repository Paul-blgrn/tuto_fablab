import Keyboard from '../KeyboardFunction';

const Cancel = () => {
    const localKey = [
        {
            "id": 1,
            "description": "Pressez la touche «CTRL» puis «Z»",
            "keys": [
                "Key-LCTRL", 
                "Key-Z", 
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

export default Cancel
import Keyboard from '../KeyboardFunction';

const Vectoriser = () => {
    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LEFT-LSHIFT", 
                "Key-LALT", 
                "Key-B", 
            ],
            "menu" : []
        },
        {
            "id": 3,
            "keys": [
                "no-keyboard",
                "Mouse-RightClick",
            ],
            "menu" : [
                "submenu-9",
            ]
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour vectoriser une image:
                <hr className='hrcontent'/>
                Selectionnez votre image,
                <br/>
                puis :
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

export default Vectoriser;
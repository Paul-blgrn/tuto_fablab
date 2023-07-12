import Keyboard from '../KeyboardFunction';

const Vectoriser = () => {
    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LEFT-LSHIFT", 
                "Key-LALT", 
                "Key-B", 
            ]
        },
        {
            "id": 2,
            "keys": [
                "Key-B", 
                "Mouse-RightClick",
            ]
        },
        {
            "id": 3,
            "keys": [
                //"no-keyboard",
                "Mouse-LeftClick",
            ]
        }
    ];

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour vectoriser une image:
                <hr className='hrcontent'/>
                Clic droit sur votre image → «Vectoriser un objet matriciel» 
                <br/>
                où :
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
import Keyboard from '../Keyboard';

const Vectoriser = () => {
    const localKey = [
        "Key-LEFT-LSHIFT",
        "Key-LALT",
        "Key-B",
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
                    <img className="keyboard" src='/images/keyboard.svg' alt='ctrl keyboard'/>
                    <div className="push-keys">
                        {localKey && <Keyboard key={localKey} keyboardKeys={localKey} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vectoriser;
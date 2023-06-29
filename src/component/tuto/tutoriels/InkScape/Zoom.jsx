import Keyboard from '../Keyboard';

const Zoom = () => {

    const localKey = [
        "Key-LCTRL",
    ];
    
    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour Zoomer / Dezoomer, Maintenez la touche «CTRL» de votre clavier.
                <br/>
                Faites rouler la roue de votre souris vers le haut (+) ou le bas (-).
                <br/> 
                (+) = Zoomer || (-) = Dezoomer.
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple:</h2>
            </div>
            <div className="imagestuto">
                <div className="Keyboard-parent">
                    <img className="keyboard" src='/images/keyboard.svg' alt='keyboard'/>
                    {localKey && <Keyboard id="KeyboardZoom1" key={localKey.toString()} keyboardKeys={localKey} />}
                </div>
                <div className='tutosignplus'>+</div>
                <div className='arrownmouse'>
                    <img className='mousewheelarrows up-down-anim' src='/images/up_n_down.svg' alt='up and down'/>
                    <img className="your-image" src='/images/mousewheel.svg' alt='mousewheel'/>
                </div>
            </div>
        </div>
    );
}

export default Zoom;
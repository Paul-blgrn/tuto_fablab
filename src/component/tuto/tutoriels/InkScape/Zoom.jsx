import Keyboard from '../KeyboardFunction';

const Zoom = () => {

    const localKey = [
        {
            "id": 1,
            "keys": [
                "Key-LCTRL",
                "Mouse-Scroll",
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 2,
            "keys": [
                "Key-PAD-SOUSTRACTION",
                "Key-PAD-ADDITION",
            ],
            "menu" : [],
            "topmenu" : [],
        },
        {
            "id": 3,
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
                    {localKey && <Keyboard keyboardKeys={localKey} />}
                </div>
            </div>
        </div>
    );
}

export default Zoom;
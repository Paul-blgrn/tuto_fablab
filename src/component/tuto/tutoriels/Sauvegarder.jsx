import Keyboard from './Keyboard';
import { useEffect, useState } from 'react';

const Sauvegarder = () => {
    const localKey = ["Key-LCTRL", "Key-S"];

    const [data, setData] = useState();

    const getData = async () => {
		const results = localKey;
        setData(results);
    };

    useEffect(() => {
		  getData().catch((err) => console.log(err));
		  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour sauvegarder votre fichier, appuyez sur la touche «CTRL» et la touche «S» de votre clavier.
                <br/>
                Une fenetre va s'ouvrir, choisissez l'emplacement et le nom de votre ficher puis appuyez sur le bouton «Enregistrer». 
                <hr className='hrcontent'/>
                <h2 className='Home-Title2'>Exemple:</h2>
            </div>
            <div className='imagestuto'>
                <div className="Keyboard-parent">
                    <img className="keyboard" src='/images/keyboard.svg' alt='ctrl keyboard'/>
                    <div className="push-keys">
                        {/* {data && data.map((keys) => {
                            return(
                                <Keyboard key={keys} keyboardKeys={keys} />
                            );
                        })}  */}

                        {data && <Keyboard key={data} keyboardKeys={data} />}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sauvegarder
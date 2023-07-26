import Keyboard from './Keyboard';

const KeyboardFunction = (props) => {
    const { keyboardKeys } = props;
    
    //console.log(keyboardKeys)

    return(
        keyboardKeys.map((key) => {
            return(
                //<Keyboard key={key.id} id={key.id} Keys={key.keys} />
                <Keyboard key={key.id} id={key.id} keyboardKeys={key.keys} keyboardMenu={key.menu} topMenu={key.topmenu} />
            );
        })
    );
}

export default KeyboardFunction;
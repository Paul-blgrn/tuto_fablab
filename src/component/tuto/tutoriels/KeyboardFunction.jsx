import React, { useEffect, useState, useRef } from 'react';
import Keyboard from './Keyboard';

function usePrevious(value) {
    // create a new reference
    const ref = useRef();
  
    // store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // only re-run if value changes
  
    // return previous value (happens before update in useEffect above)
    return ref.current;
}

const KeyboardFunction = (props) => {
    const { keyboardKeys } = props;
    
    //console.log(keyboardKeys)

    return(
        keyboardKeys.map((key) => {
            return(
                //<Keyboard key={key.id} id={key.id} Keys={key.keys} />
                <Keyboard key={key.id} id={key.id} keyboardKeys={key.keys} />
            );
        })
    );
}

export default KeyboardFunction;
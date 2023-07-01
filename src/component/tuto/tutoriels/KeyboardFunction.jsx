import React, { useEffect, useState, useRef } from 'react';
//import Keyboard from './Keyboard';

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
    const [keys, setKeys] = useState([]);
    
    //console.log(keyboardKeys)

    const getData = async () => {
		const results = keyboardKeys;
        setKeys(results);
    };

    useEffect(() => {
        getData().catch((err) => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const prevKey = usePrevious(keys);

    useEffect(() => {

        prevKey && prevKey.map((key) => {
            return(
                //console.log(key),
                key.keys.map((oldKeys) => {
                    let oldKey = document.getElementById(oldKeys);
                    return(
                        //console.log(oldKeys),
                        oldKey && oldKey.classList.remove("key-show")
                    );
                })
            );
        })

        keys && keys.map((key) => {
            const countArray = JSON.parse(JSON.stringify(keys)).length;
            return(
                //console.log(countArray),
                countArray > 1 
                ?
                    console.log("Objects: " + countArray)
                    // key.forEach(value, key => {
                    //        <Keyboard />
                    // })
                :
                    console.log("Object: " + countArray),
                    key.keys.map((keys) => {
                        let actualKey = document.getElementById(keys);
                        return(
                            //console.log(keys),
                            actualKey && actualKey.classList.add("key-show")
                        );
                    })
            );
        })
    }, [keys, prevKey]);

    // useEffect(() => {
    //     keys && keys.map((key) => {
    //         let customid = document.getElementsByClassName("Keyboard-touch")
    //         return(
    //             //customid.setAttribute("id", `${key.id}`)
    //             console.log(customid)
    //         );
    //     })
    // })

    return(
        <div id="keyboard" className="Keyboard-touch">
            {/* LINE 1 */}
            <div className="keyboard-line1">
                <div></div>
            </div>

            {/* LINE 2 */}
            <div className="keyboard-line2">

            </div>

            {/* LINE 3 */}
            <div className="keyboard-line3">
                <div id="Key-A" className="touch3"></div>
                <div id="Key-Z" className="touch3"></div>
                <div id="Key-E" className="touch3"></div>
                <div id="Key-R" className="touch3"></div>
                <div id="Key-T" className="touch3"></div>
                <div id="Key-Y" className="touch3"></div>
                <div id="Key-U" className="touch3"></div>
                <div id="Key-I" className="touch3"></div>
                <div id="Key-O" className="touch3"></div>
                <div id="Key-P" className="touch3"></div>
                <div id="Key-CIRCONFLEX" className="touch3"></div>
                <div id="Key-DOLLAR" className="touch3"></div>
            </div>

            {/* LINE 4 */}
            <div className="keyboard-line4">
                <div id="Key-Q" className="touch4"></div>
                <div id="Key-S" className="touch4"></div>
                <div id="Key-D" className="touch4"></div>
                <div id="Key-F" className="touch4"></div>
                <div id="Key-G" className="touch4"></div>
                <div id="Key-H" className="touch4"></div>
                <div id="Key-J" className="touch4"></div>
                <div id="Key-K" className="touch4"></div>
                <div id="Key-L" className="touch4"></div>
                <div id="Key-M" className="touch4"></div>
                <div id="Key-PERCENT" className="touch4"></div>
                <div id="Key-STAR" className="touch4"></div>
            </div>

            {/* LINE 5 */}
            <div className="keyboard-line5">
                <div id="Key-BRACKETS" className="touch5"></div>
                <div id="Key-W" className="touch5"></div>
                <div id="Key-X" className="touch5"></div>
                <div id="Key-C" className="touch5"></div>
                <div id="Key-V" className="touch5"></div>
                <div id="Key-B" className="touch5"></div>
                <div id="Key-N" className="touch5"></div>
                <div id="Key-VIRGULE" className="touch5"></div>
                <div id="Key-DOT" className="touch5"></div>
                <div id="Key-DOUBLEDOT" className="touch5"></div>
                <div id="Key-EXCLAMATION" className="touch5"></div>
            </div>

            {/* LINE 6 */}
            <div className="keyboard-line6">
                <div id="Key-LCTRL" className="touch6"></div>
                <div id="Key-FN" className="touch6"></div>
                <div id="Key-WIN" className="touch6"></div>
                <div id="Key-LALT" className="touch6"></div>
                <div id="Key-SPACE" className="touch6"></div>
                <div id="Key-ALTGR" className="touch6"></div>
                <div id="Key-RCTRL" className="touch6"></div>
            </div>

            {/* NUM PAD */}
            <div className="keyboard-pad">
                <div id="Key-PAD-VERNUM" className="touchpad"></div>
                <div id="Key-PAD-SLASH" className="touchpad"></div>
                <div id="Key-PAD-MULTIPLY" className="touchpad"></div>
                <div id="Key-PAD-SOUSTRACTION" className="touchpad"></div>
                <div id="Key-PAD-7" className="touchpad"></div>
                <div id="Key-PAD-8" className="touchpad"></div>
                <div id="Key-PAD-9" className="touchpad"></div>
                <div id="Key-PAD-ADDITION" className="touchpad"></div>
                <div id="Key-PAD-4" className="touchpad"></div>
                <div id="Key-PAD-5" className="touchpad"></div>
                <div id="Key-PAD-6" className="touchpad"></div>
                <div id="Key-PAD-ENTER" className="touchpad"></div>
                <div id="Key-PAD-1" className="touchpad"></div>
                <div id="Key-PAD-2" className="touchpad"></div>
                <div id="Key-PAD-3" className="touchpad"></div>
                <div id="Key-PAD-POINT" className="touchpad"></div>
                <div id="Key-PAD-0" className="touchpad"></div>
            </div>

            {/* LEFT */}
            <div className="keyboard-left">
                <div id="Key-LEFT-ECHAP" className="kleft"></div>
                <div id="Key-LEFT-²" className="kleft"></div>
                <div id="Key-LEFT-TAB" className="kleft"></div>
                <div id="Key-LEFT-VERMAJ" className="kleft"></div>
                <div id="Key-LEFT-LSHIFT" className="kleft"></div>
            </div>
        </div>
    );
}

export default KeyboardFunction;
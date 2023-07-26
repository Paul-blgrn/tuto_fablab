import React, { useEffect, useState, useRef } from 'react';
import './Tutoriels.css';
import TopMenu from './TopMenu';

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


const Keyboard = (props) => {
    const { id, description, keyboardKeys, keyboardMenu, topMenu } = props;
    const [keys, setKeys] = useState([]);
    const [menu, setMenu] = useState([]);

    //console.log(keyboardMenu)

    const getData = async () => {
		const results = keyboardKeys;
        setKeys(results);
    };

    const getMenu = async () => {
        const resultMenu = keyboardMenu;
        setMenu(resultMenu);
    };

    useEffect(() => {
        getData().catch((err) => console.log(err));
        getMenu().catch((err) => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const prevKey = usePrevious(keys);
    const prevMenu = usePrevious(menu);

    useEffect(() => {
        prevKey && prevKey.map((key) => {
            const keyboardID = document.getElementById(id);
            const keyboardTouchID = document.getElementById("Keyboard-" + id)
            const keyboardTouch = keyboardTouchID.getElementsByTagName('div').namedItem(key)
            return(
                //console.log(keyboardID),
                key === "Mouse-RightClick" || key === "Mouse-LeftClick" || key === "Mouse-Scroll"  ?
                    keyboardID && keyboardID
                        .getElementsByTagName('div')
                        .namedItem(key).classList
                        .remove("content-show")
                : 
                    // if no touch hide keyboard else show keyboard and animation
                    keyboardTouchID && keyboardTouchID.classList.add('no-keyboard-image'),
                    keyboardTouch && keyboardTouch.classList.remove('key-show')

            );
        })
    
        keys && keys.map((key) => {
            //const countArray = JSON.parse(JSON.stringify(keys)).length;
            const keyboardID = document.getElementById(id);
            const keyboardTouchID = document.getElementById("Keyboard-" + id)
            const keyboardTouch = keyboardTouchID.getElementsByTagName('div').namedItem(key)
            return(
                //console.log(key),
                    key === "Mouse-RightClick" || key === "Mouse-LeftClick" || key === "Mouse-Scroll"  ?
                        keyboardID && keyboardID
                            .getElementsByTagName('div')
                            .namedItem(key).classList
                            .add("content-show")
                    :
                        // if no touch hide keyboard else show keyboard and animation
                        keyboardTouchID && keyboardTouchID.classList.remove('no-keyboard-image'),
                        keyboardTouch && keyboardTouch.classList.add('key-show')
            );
        })

        prevMenu && prevMenu.map((key) => {
            //console.log(key)
            const keyboardTouchID = document.getElementById("menu-context-" + id)
            return(
                keyboardTouchID
                    .classList
                    .add("content-hide"),
                keyboardTouchID
                    .getElementsByTagName('div')
                    .namedItem(key)
                    .classList.remove("menu-show")
            );
        })

        menu && menu.map((key) => {
            //console.log(key)
            const keyboardTouchID = document.getElementById("menu-context-" + id)
            return(
                keyboardTouchID
                    .classList
                    .remove("content-hide"),
                keyboardTouchID
                    .getElementsByTagName('div')
                    .namedItem(key)
                    .classList.add("menu-show")
            );
        })
    }, [id, keys, prevKey, menu, prevMenu]);

    return(
        <div id={id}>
            <hr className='hrcontent'/>
            <div id={"hint-" + id}>
                <p className="keyboard-hint">{description}</p>
            </div>
            <div id={"Keyboard-" + id} className="keyboard-touch no-keyboard-image">
                {/* LINE 1 */}
                <div className="keyboard-line1">
                <div id="Key-F1" className="touch1"></div>
                <div id="Key-F2" className="touch1"></div>
                <div id="Key-F3" className="touch1"></div>
                <div id="Key-F4" className="touch1"></div>
                <div id="Key-F5" className="touch1"></div>
                <div id="Key-F6" className="touch1"></div>
                <div id="Key-F7" className="touch1"></div>
                <div id="Key-F8" className="touch1"></div>
                <div id="Key-F9" className="touch1"></div>
                <div id="Key-F10" className="touch1"></div>
                <div id="Key-F11" className="touch1"></div>
                <div id="Key-F12" className="touch1"></div>
                <div id="Key-inser" className="touch1"></div>
                <div id="Key-suppr" className="touch1"></div>
                <div id="Key-calc" className="touch1"></div>
                <div id="Key-CE" className="touch1"></div>
                <div id="Key-plusmoins" className="touch1"></div>
                <div id="Key-power" className="touch1"></div>
                </div>

                {/* LINE 2 */}
                <div className="keyboard-line2">
                    <div id="Key-1" className="touch2"></div>
                    <div id="Key-2" className="touch2"></div>
                    <div id="Key-3" className="touch2"></div>
                    <div id="Key-4" className="touch2"></div>
                    <div id="Key-5" className="touch2"></div>
                    <div id="Key-6" className="touch2"></div>
                    <div id="Key-7" className="touch2"></div>
                    <div id="Key-8" className="touch2"></div>
                    <div id="Key-9" className="touch2"></div>
                    <div id="Key-0" className="touch2"></div>
                    <div id="Key-)" className="touch2"></div>
                    <div id="Key-=" className="touch2"></div>
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

            <div className="bottomKeyboard">  
                <div className="arrownmouse">
                    <div id="Mouse-LeftClick" className="content-hide">
                        <img className="mousewheelleftclick scale-in-out-anim" src="/images/right_pointer.svg" alt="pointer"/>
                        <img className="your-image" src="/images/mouseleft.svg" alt="mouseleft"/>
                    </div>

                    <div id="Mouse-RightClick" className="content-hide">
                        <img className="mousewheelrightlick scale-in-out-anim" src="/images/left_pointer.svg" alt="pointer"/>
                        <img className="your-image" src="/images/mouseright.svg" alt="mouseright"/>
                    </div>

                    <div id="Mouse-Scroll" className="content-hide">
                        <img className="mousewheelarrows up-down-anim" src="/images/up_n_down.svg" alt="up and down"/>
                        <img className="your-image" src="/images/mousewheel.svg" alt="mousewheel"/>
                    </div>
                </div>


                <div id={"menu-context-" + id} className="menu-rightclick content-hide">
                    <div className="submenu ">
                        <div id="submenu-1" className="menu1"></div>
                        <div id="submenu-2" className="menu1"></div>
                        <div id="submenu-3" className="menu1"></div>
                        <div id="submenu-4" className="menu1"></div>
                        <div id="submenu-5" className="menu1"></div>
                        <div id="submenu-6" className="menu1"></div>
                        <div id="submenu-7" className="menu1"></div>
                        <div id="submenu-8" className="menu1"></div>
                        <div id="submenu-9" className="menu1"></div>
                        <div id="submenu-10" className="menu1"></div>
                        <div id="submenu-11" className="menu1"></div>
                        <div id="submenu-12" className="menu1"></div>
                        <div id="submenu-13" className="menu1"></div>
                        <div id="submenu-14" className="menu1"></div>
                        <div id="submenu-15" className="menu1"></div>
                        <div id="submenu-16" className="menu1"></div>
                        <div id="submenu-17" className="menu1"></div>
                    </div>
                </div>
            </div>
            <div id={"menu-top-" + id} className="menu-top">
                <TopMenu id={id} topMenu={topMenu} />
            </div>

            <hr className='hrcontent'/>
        </div>
    );
}

export default Keyboard;
import React from "react";
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function KeyboardTelephone({ handleButton, handleResetNumberTelephone }) {
    const [activeId, setActiveId] = React.useState(5);
    React.useEffect(() => {
        deleteFocus();
        setFocus();
    }, [activeId]);

    const deleteFocus = () => {
        var foo = document.querySelectorAll("button");
        for (var i = 0; i < foo.length; i++) {
            foo[i].classList.remove("keyboard__button_active");
        }
    }
    const setFocus = () => {
        if (activeId == 0) {
            addClassElement(9);
        }
        else {
            if (activeId == 10) {
                addClassElement(10);
            }
            else {
                addClassElement(activeId - 1);
            }
        }
    }
    const addClassElement = (id) => {
        const newFocusElement = document.getElementById(id);
        newFocusElement.classList.add('keyboard__button_active');
        newFocusElement.focus();
    }
    const pressOnButton = (evt) => {
        setActiveId(evt.target.textContent);
        handleButton(evt.target.textContent);
    }
    const resetNumberTelephone = (evt) => {
        setActiveId(10);
        handleResetNumberTelephone();
    }
    const checkKeys = (evt) => {
        let nextActiveId = parseInt(activeId);
        switch (evt.keyCode) {  // проверяем какую клавишу нажали
            case 40: {
                nextActiveId += 3;
                break;
            }
            case 38: {
                nextActiveId -= 3;
                break;
            }
            case 39: {
                nextActiveId += 1;
                break;
            }
            case 37: {
                nextActiveId -= 1;
                break;
            }
            case 48: {
                nextActiveId = 0;
                handleButton('0');
                break;
            }
            case 49: {
                nextActiveId = 1;
                handleButton(1);
                break;
            }
            case 50: {
                nextActiveId = 2;
                handleButton(2);
                break;
            }
            case 51: {
                nextActiveId = 3;
                handleButton(3);
                break;
            }
            case 52: {
                nextActiveId = 4;
                handleButton(4);
                break;
            }
            case 53: {
                nextActiveId = 5;
                handleButton(5);
                break;
            }
            case 54: {
                nextActiveId = 6;
                handleButton(6);
                break;
            }
            case 55: {
                nextActiveId = 7;
                handleButton(7);
                break;
            }
            case 56: {
                nextActiveId = 8;
                handleButton(8);
                break;
            }
            case 57: {
                nextActiveId = 9;
                handleButton(9);
                break;
            }
        }
        if (nextActiveId < -1) return;
        if (nextActiveId == 12) nextActiveId = 0; //переход с кнопки 9 вниз на кнопку 0
        if (nextActiveId == 11 && activeId == 10) nextActiveId = 0;  //переход с кнопки стереть вправо на кнопку 0
        if (nextActiveId == 11 && activeId == 8) nextActiveId = 10; //переход с кнопки 8 вниз на кнопку стереть
        if (nextActiveId == -1 && activeId == 0) nextActiveId = 10; //переход с кнопки 0 влево на кнопку стереть
        if (nextActiveId == -1 && activeId == 2) return; // нажатие на кнопке 2 вверх
        if (nextActiveId == 13) return; //нажатие на кнопке стереть вниз
        setActiveId(nextActiveId);
    }
    return (
        <div className="keyboard" onKeyDownCapture={checkKeys}>
            {NUMBERS.map((item, index) => <button className="keyboard__button" type="button" key={index} id={index} onClick={pressOnButton}>{item}</button>)}
            <button className="keyboard__button keyboard__button_erase" type="reset" id="10" onClick={resetNumberTelephone}>СТЕРЕТЬ</button>
        </div>
    )
}
export default KeyboardTelephone;
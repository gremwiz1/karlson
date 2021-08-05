import React from "react";
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function KeyboardTelephone({ handleButton, handleResetNumberTelephone }) {
    const changeFocus = (evt) => {
        var foo = document.querySelectorAll("button");
        for (var i = 0; i < foo.length; i++) {
            foo[i].classList.remove("keyboard__button_active");
        }
        evt.target.classList.add('keyboard__button_active');
    }
    const pressOnButton = (evt) => {
        changeFocus(evt);
        handleButton(evt.target.textContent);
    }
    const resetNumberTelephone = (evt) => {
        changeFocus(evt);
        handleResetNumberTelephone();
    }
    return (
        <div className="keyboard">
            {NUMBERS.map((item, index) => <button className="keyboard__button" type="button" key={index} onClick={pressOnButton}>{item}</button>)}
            <button className="keyboard__button keyboard__button_erase" type="reset" onClick={resetNumberTelephone}>СТЕРЕТЬ</button>
        </div>
    )
}
export default KeyboardTelephone;
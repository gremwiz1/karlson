import React from "react";

function KeyboardTelephone({ handleButton, handleResetNumberTelephone }) {
    function pressOnButton(evt) {
        var foo = document.querySelectorAll("button");
        for (var i = 0; i < foo.length; i++) {
            foo[i].classList.remove("keyboard__button_active");
        }
        evt.target.classList.add('keyboard__button_active');
        handleButton(evt.target.textContent);
    }
    function resetNumberTelephone(evt) {
        var foo = document.querySelectorAll("button");

        for (var i = 0; i < foo.length; i++) {
            foo[i].classList.remove("keyboard__button_active");
        }
        evt.target.classList.add('keyboard__button_active');
        handleResetNumberTelephone();
    }
    return (
        <div className="keyboard">
            <button className="keyboard__button" type="button" onClick={pressOnButton}>1</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>2</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>3</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>4</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>5</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>6</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>7</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>8</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>9</button>
            <button className="keyboard__button keyboard__button_erase" type="reset" onClick={resetNumberTelephone}>СТЕРЕТЬ</button>
            <button className="keyboard__button" type="button" onClick={pressOnButton}>0</button>

        </div>
    )
}
export default KeyboardTelephone;
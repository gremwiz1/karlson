import React from 'react';
import KeyboardTelephone from './KeyBoardTelephone';
import PanelNumberTelephone from './PanelNumberTelephone';
function Panels() {

    const [numberTelephone, SetNumberTelephone] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);
    function handleCheckBox() {
        const el = document.querySelector('.checkbox_invisible');
        el.checked = !isChecked;
        setIsChecked(!isChecked);
    }
    function pressKeyboardTelephone(number) {

        SetNumberTelephone(prevState => {
            return [...prevState, number]
        })
    }
    function pressResetTelephoneNumber() {
        SetNumberTelephone([]);
    }

    return (
        <form className="panels">
            <h2 className="panels__title">Введите ваш номер мобильного телефона</h2>
            <PanelNumberTelephone numberTelephone={numberTelephone} />
            <p className="panels__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <KeyboardTelephone handleButton={pressKeyboardTelephone} handleResetNumberTelephone={pressResetTelephoneNumber} />
            <div className="panels__agreement">
                <label className="checkbox">
                    <input type="checkbox" class="checkbox_invisible" id="1" name="checkbox" />
                    <div className={isChecked ? "checkbox_visible checkbox_checked" : "checkbox_visible"} onClick={handleCheckBox}></div>
                </label>
                <p className="checkbox__text">Согласие на обработку персональных данных</p>
            </div>
            <button type="submit" className="panels__button">ПОДТВЕРДИТЬ НОМЕР</button>
        </form>

    )
}
export default Panels;

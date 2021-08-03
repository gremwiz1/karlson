import React from 'react';
import KeyboardTelephone from './KeyBoardTelephone';
import PanelNumberTelephone from './PanelNumberTelephone';
function Panels() {

    const [numberTelephone, SetNumberTelephone] = React.useState([]);


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
                    <div class="checkbox_visible"></div>
                </label>
                <p className="checkbox__text">Согласие на обработку персональных данных</p>
            </div>
            <button type="submit" className="panels__button">ПОДТВЕРДИТЬ НОМЕР</button>
        </form>

    )
}
export default Panels;

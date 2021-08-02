import React from 'react';
import KeyboardTelephone from './KeyBoardTelephone';
function Panels() {
    const [numberTelephone, SetNumberTelephone] = React.useState([]);
    return (
        <form className="panels">
            <h2 className="panels__title">Введите ваш номер мобильного телефона</h2>
            <p className="panels__number-telephone">+7(
                {numberTelephone[0] ? numberTelephone[0] : "_"}
                {numberTelephone[1] ? numberTelephone[1] : "_"}
                {numberTelephone[2] ? numberTelephone[2] : "_"}
                )
                {numberTelephone[3] ? numberTelephone[3] : "_"}
                {numberTelephone[4] ? numberTelephone[4] : "_"}
                {numberTelephone[5] ? numberTelephone[5] : "_"}
                -
                {numberTelephone[6] ? numberTelephone[6] : "_"}
                {numberTelephone[7] ? numberTelephone[7] : "_"}
                -
                {numberTelephone[8] ? numberTelephone[8] : "_"}
                {numberTelephone[9] ? numberTelephone[9] : "_"}
            </p>
            <p className="panels__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <KeyboardTelephone />
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

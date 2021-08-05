import React from 'react';
import KeyboardTelephone from './KeyBoardTelephone';
import PanelNumberTelephone from './PanelNumberTelephone';
function Panels({ setValidNumberTelephone }) {

    const [numberTelephone, SetNumberTelephone] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);
    const [isValidationTelephoneNumber, setIsValidationTelephoneNumber] = React.useState(true);

    React.useEffect(() => {
        validationForm();
    }, [isChecked, numberTelephone]);
    const handleCheckBox = () => {
        const checkBoxElement = document.querySelector('.checkbox_invisible');
        checkBoxElement.checked = !isChecked;
        setIsChecked(!isChecked);
    }
    const pressKeyboardTelephone = (number) => {
        SetNumberTelephone(prevState => {
            return [...prevState, number]
        })
    }
    const pressResetTelephoneNumber = () => {
        SetNumberTelephone([]);
        setIsValidationTelephoneNumber(true);
    }
    const validationForm = () => {
        const buttonSubmit = document.querySelector('.panels__button');
        buttonSubmit.setAttribute('disabled', true);
        if (buttonSubmit.classList.contains('keyboard__button_active')) {
            buttonSubmit.classList.remove('keyboard__button_active');
        }
        if (numberTelephone.length === 10 && isChecked) {
            buttonSubmit.removeAttribute('disabled');
            const activeElement = document.querySelector('.keyboard__button_active');
            activeElement.classList.remove('keyboard__button_active');
            buttonSubmit.classList.add('keyboard__button_active');
        }
    }
    const submitForm = (evt) => {
        evt.preventDefault();
        const telephone = numberTelephone.join('');
        apiNumberTelephoneValidation(telephone)
            .then((result) => {
                setValidNumberTelephone(result.valid);
                setIsValidationTelephoneNumber(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const apiNumberTelephoneValidation = (telephone) => {
        return fetch(`http://apilayer.net/api/validate?access_key=40f9d88b9f643c2271948f1d9db131c2&number=
        ${telephone}&country_code=RU&format=1`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    return (
        <form className="panels" onSubmit={submitForm}>
            <h2 className="panels__title">Введите ваш номер мобильного телефона</h2>
            <PanelNumberTelephone numberTelephone={numberTelephone} isValidationTelephoneNumber={isValidationTelephoneNumber} />
            <p className="panels__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <KeyboardTelephone handleButton={pressKeyboardTelephone} handleResetNumberTelephone={pressResetTelephoneNumber} />
            {isValidationTelephoneNumber ?
                <div className="panels__agreement">
                    <label className="checkbox">
                        <input type="checkbox" class="checkbox_invisible" id="1" name="checkbox" />
                        <div className={isChecked ? "checkbox_visible checkbox_checked" : "checkbox_visible"} onClick={handleCheckBox}></div>
                    </label>
                    <p className="checkbox__text">Согласие на обработку персональных данных</p>
                </div>
                :
                <p className="panels__invalid-text">НЕВЕРНО ВВЕДЕН НОМЕР</p>}

            <button type="submit" className="panels__button">ПОДТВЕРДИТЬ НОМЕР</button>
        </form>

    )
}
export default Panels;

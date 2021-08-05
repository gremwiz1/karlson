import React from 'react';
function Banner({ clickBanner }) {
    const handleClickBanner = () => {
        clickBanner();
    }
    return (
        <div className="banner">
            <p className="banner__subtitle">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br />ПОДАРИТЕ ЕМУ СОБАКУ!</p>
            <div className="banner__barcode"></div>
            <p className="banner__text">Сканируйте QR-код или нажмите ОК</p>
            <button type="button" className="banner__button" onClick={handleClickBanner}>ОК</button>
        </div>
    )
}
export default Banner;
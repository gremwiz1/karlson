import React from 'react';
function RightPanel() {
    return (
        <div className="right-panel">
            <button type="button" className="button-close"></button>
            <div className="right-panel__barcode">
                <p className="right-panel__text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                <div className="right-panel__image"></div>
            </div>

        </div>

    )
}
export default RightPanel;
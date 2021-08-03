import React from 'react';
function PanelNumberTelephone({ numberTelephone }) {
    return (
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
    )
}
export default PanelNumberTelephone;
import React from 'react';
import Leftpanel from './Leftpanel';
import Panels from './Panels';
import RightPanel from './RightPanel';
function SecondScreen() {
    const [isValidNumberTelephone, setIsValidNumberTelephone] = React.useState(false);
    const setValidNumberTelephone = (flag) => {
        setIsValidNumberTelephone(flag);
    }
    return (
        <>
            {isValidNumberTelephone ? <Leftpanel /> : <Panels setValidNumberTelephone={setValidNumberTelephone} />}
            <RightPanel />
        </>

    );
}
export default SecondScreen;
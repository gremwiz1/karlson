import React, { useState } from "react";
import Panels from "./Panels";
import RightPanel from "./RightPanel";
import Leftpanel from "./Leftpanel";

function App() {
  const [isValidNumberTelephone, setIsValidNumberTelephone] = useState(false);
  function setValidNumberTelephone(flag) {
    setIsValidNumberTelephone(flag);
  }
  return (
    <div className="page">
      {isValidNumberTelephone ? <Leftpanel /> : <Panels setValidNumberTelephone={setValidNumberTelephone} />}
      <RightPanel />
    </div>
  );
}

export default App;

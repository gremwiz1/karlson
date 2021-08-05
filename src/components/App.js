import React from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";

function App() {

  const [isClickOnBanner, setIsClickOnBanner] = React.useState(false);
  const showSecondScreen = () => {
    setIsClickOnBanner(true);
  }
  return (
    <div className="page">
      {isClickOnBanner ? <SecondScreen /> : <FirstScreen showSecondScreen={showSecondScreen} />}
    </div>
  );
}

export default App;

import { React } from "react";
import "./App.css";

import Retrait from "./component/Retrait";
import Ouverture from "./component/Ouverture";

function App() {
  return (
    <div className="App">
      <Ouverture />
      <Retrait />
    </div>
  );
}

export default App;

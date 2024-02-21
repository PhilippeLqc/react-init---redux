import { React } from "react";
import "./App.css";

import Retrait from "./component/Retrait";
import Ouverture from "./component/Ouverture";
import Agios from "./component/Agios";

function App() {
  return (
    <div className="App">
      <Ouverture />
      <Retrait />
      <Agios/>
    </div>
  );
}

export default App;

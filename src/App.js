import React, { useState } from "react";
import "./App.css";
import Board from "./components/board";
// import { Board1 } from "./components/board";
import Data1 from "./components/profiledata1";
import Database1 from "./components/database1";
import Data from "./components/profiledata";
import Database from "./components/database";
// import Data3 from "./components/profiledata3";
import Data2 from "./components/profiledata2";
import Database2 from "./components/database2";
function App() {
  const [active, setActive] = useState("f");
  return (
    <div className="App">
      <div className="board">
        <div className="ho">
          <h1 className="header">
            <div className="des"></div>
            Learnable 22 database
          </h1>
          <div className="button">
            <button onClick={() => setActive("f")} className="butt">
              Frontend
            </button>
            <button onClick={() => setActive("b")} className="butt">
              Backend
            </button>
            <button onClick={() => setActive("w")} className="butt">Web3</button>
          </div>
        </div>
        {/* <Board /> */}
        {active === "f" && <Data Database={Database} lindex="0" />}
        {active === "b" && <Data1 Database1={Database1} lindex="1" />}
        {active === "w" && <Data2 Database2={Database2} lindex="2" />}

        {/* <Data Database={Database} /> */}
      </div>
    </div>
  );
}

export default App;

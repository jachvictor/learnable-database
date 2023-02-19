import React from "react";
import Data from "./profiledata";
import Database from "./database";
import Database1 from "./database1";
import Data1 from "./profiledata";

function Board() {
  const handleclick = () => {
    return (
      <div id="li">
        {/* <Data1 Database1={Database1} /> */}
        {/* {Board} */}
      </div>
    );
  };
  return (
    <div className="board">
      {/* <img className="img2" src="K.jpg" /> */}
      <div className="hold">
        <h1 className="header">
          <div className="des"></div>Learnable database
        </h1>

        <div className="button">
          <a href="#li">
            <button className="butt" onClick={handleclick}>
              top scorers
            </button>
          </a>
          <button className="butt" onClick={handleclick}>
            middle class
          </button>
          <button className="butt" onClick={handleclick}>
            low grades
          </button>
        </div>
      </div>
      <Data Database={Database} />
      {/* <Data1 Database1={Database1}/> */}
    </div>
  );
}
// Filter(Database, 100);
export default Board;

function Filter(data, btw) {
  // const sc = 100;
  // const top = new sc();
  // const middle = new sc(top);
  // middle.settop(middle.gettop() - (btw + 1));
  // let filter = data.filter((val) => {
  //   let usertop = new top(val).score;
  //   return middle <= usertop && top >= usertop;
  // });
  // return filter.sort((a, b) => {
  //   if (a.score === b.score) {
  //     return b.score - a.score;
  //   } else {
  //     return b.score - a.score;
  //   }
  // });
}

// Filter(Database, 100);
// export default Board1;

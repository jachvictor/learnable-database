import React from "react";
import Board from "./board";

function Data1({ Database1 }) {
  return (
    <div>
      <div className="profile">{item1(Database1)}</div>
      {/* <div className="profil">{item1(Database1)}</div> */}
    </div>
  );
}
export default Data1;

function item1(data1) {
  return (
    <>
      {data1.map((value1, index1) => (
        <div className="contain" key={index1}>
          <div className="item">
            <div className="details">
              <img className="imgp" src={value1.img} alt="" />

              <div className="con">
                <h3 className="name">Name: {value1.name}</h3>
                <span className="gender">gender: {value1.gender}</span> <br />
                <span className="score">total Score: {value1.score}</span> <br />
                <span className="score">power ranking: {value1.rank}</span> <br />
                <span className="score">position: {value1.pos}</span>
              </div>
              {/* <div className="des1"></div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

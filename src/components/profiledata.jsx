import React from "react";
import Board from "./board";

function Data({ Database }) {
  return (
    <div>
      <div className="profile">{item(Database)}</div>
    </div>
  );
}
export default Data;

function item(data) {
  return (
    <>
      {data.map((value, index) => (
        // <iframe src="/components/profiledata.jsx" frameborder="20">
        <div className="contain" key={index}>
          <div className="item">
            <div className="details">
              {/* <div className="des1"></div> */}
              <img className="imgp" src={value.img} alt="" />

              <div className="con">
                <h3 className="name">name: {value.name}</h3>
                <span className="gender">gender: {value.gender}</span> <br />
                <span className="score">total Score: {value.score}</span> <br />
                <span className="score">power ranking: {value.rank}</span> <br />
                <span className="score">position: {value.pos}</span>
              </div>
            </div>

            {/* <div className="des1"></div> */}
          </div>
        </div>
        // </div>
      ))}
    </>
  );
}

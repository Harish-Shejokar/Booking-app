import React from "react";
import "./Box.css";
import Seats from "../Seats";

const Box = (props) => {
  return (
    <div className="box">
      <div className="head">{props.box}</div>
      <div className="box-layout">
        <div>
          {props.dataLeft.map((item) => (
            <Seats key={item.id} item={item} seatNum={item.seatNum} />
          ))}
        </div>
        <div className="right-seats">
          <div className="r-1">
            {props.dataRightLeft.map((item) => (
              <Seats key={item.id} item={item} seatNum={item.seatNum} />
            ))}
          </div>
          <div className="r-2">
            {props.dataRightRight.map((item) => (
              <Seats key={item.id} item={item} seatNum={item.seatNum} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

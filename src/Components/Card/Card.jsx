import React, { useContext, useState } from "react";
import "./Card.css";
import Context from "../../Store/Cart-Context";

const Card = () => {
  const Ctx = useContext(Context);
  const bookedSeats = () => {
    Ctx.bookedSeats();
  };
  return (
    <>
      <div className="outer">
        <div className="card">
          <div className="cardView">
            <div>
              <span>{Ctx.totalSeats} - </span>
              <span>Seats</span>
              <span>|{Ctx.allSeats}</span>
            </div>
            <div>
              <span>Rs{Ctx.totalAmount}</span>
              <button>+</button>
            </div>
          </div>
        </div>
        <button
          onClick={bookedSeats}
          className="cont-btn"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Card;

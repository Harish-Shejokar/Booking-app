import React, { useContext, useState } from "react";
import "./Seats.css";
import Context from "../Store/Cart-Context";
const Seats = (props) => {
  const Ctx = useContext(Context);
  const [selected, setSelected] = useState("chair-white");

  const bookSeat = () => {
    setSelected((prev) => {
      if (
        prev === "chair-white" &&
        (props.item.status === "Available" || props.item.status === "ForWomen")
      ) {
        Ctx.addToCart(props.item);
        return "chair-green";
      } else if (
        props.item.status === "Available" ||
        props.item.status === "ForWomen"
      ) {
        Ctx.removeFromCart(props.item);
        return "chair-white";
      }
    });
    // console.log(props.item);
  };

  const status = props.item.status;
  // console.log(status);

  return (
    <>
      <div className="main">
        <div className="label">Rs{props.item.price}</div>
        <div className={`chair ${selected} ${status}`} onClick={bookSeat}>
          {props.seatNum}
        </div>
      </div>
    </>
  );
};

export default Seats;

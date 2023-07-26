import React, { useEffect, useState } from "react";
import Context from "./Cart-Context";

const CartProvider = (props) => {
  const [seats, setSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [allSeats, setAllSeats] = useState("");
  const [totalSeats, setTotalSeats] = useState(0);

  const removeFromCart = (item) => {
    let updatedItem = seats.filter(elem => item.id !== elem.id);
    setSeats(updatedItem);
  }

  const addToCart = (item) => {
    setSeats((prev) => {
      //   totalAmountHandler([...prev, item]);
      return [...prev, item];
    });
    //   console.log(seats);
  };

  const totalAmountHandler = (arr) => {
    let str = "";
    let num = 0;
    const amount = seats.reduce((sum, curr) => {
      //   console.log(curr.price);
      str +=  curr.seatNum + "," ;
      num++;
      return sum + Number(curr.price);
    }, 0);
    // console.log(amount);
    setTotalAmount(amount);
    setAllSeats(str);
    setTotalSeats(num);
  };

  const bookedSeats = () => {
    setSeats([]);
  }

  useEffect(() => {
    totalAmountHandler();
  });

  const context = {
    bookedSeats: seats,
    totalAmount,
    allSeats,
    addToCart,
    removeFromCart,
    totalSeats,
    bookedSeats,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default CartProvider;

import React from 'react'
import Box from './Box'
import './BookingPage.css';
import DetailsPage from './DetailsChart/DetailsPage';

const BookingPage = () => {
   const lowerDeck = [
     { id: "L1", seatNum: "L1", price: 2999, status: "Available" },
     { id: "L2", seatNum: "L2", price: 2999, status: "ForWomen" },
     { id: "L3", seatNum: "L3", price: 2999, status: "BookedByOther" },
     { id: "L4", seatNum: "L4", price: 2999, status: "Available" },
     { id: "L5", seatNum: "L5", price: 2999, status: "BookedByWomen" },
   ];

   const lowerDeckRight = [
     { id: "1", seatNum: "P1", price: 2999, status: "Available" },
     { id: "2", seatNum: "P2", price: 2999 ,status:"ForWomen"},
     { id: "3", seatNum: "P3", price: 2999, status: "ForWomen" },
     { id: "4", seatNum: "P4", price: 2999, status: "BookedByWomen" },
     { id: "5", seatNum: "P5", price: 2999, status: "Available" },
   ];
   const lowerDeckRight2 = [
     { id: "h", seatNum: "Y1", price: 2999, status: "ForWomen" },
     { id: "i", seatNum: "Y2", price: 2999, status: "Available" },
     { id: "j", seatNum: "Z3", price: 2999, status: "BookedByOther" },
     { id: "k", seatNum: "Y4", price: 2999, status: "Available" },
     { id: "l", seatNum: "Y5", price: 2999, status: "Available" },
   ];


   const upperDeck = [
     { id: "R1", seatNum: "R1", price: 2999, status: "ForWomen" },
     { id: "R2", seatNum: "R2", price: 2999, status: "Available" },
     { id: "R3", seatNum: "R3", price: 2999, status: "BookedByWomen" },
     { id: "R4", seatNum: "R4", price: 2999, status: "Available" },
     { id: "R5", seatNum: "R5", price: 2999, status: "Available" },
   ];
  const upperDeckRight = [
    { id: "a", seatNum: "U1", price: 2999, status: "ForWomen" },
    { id: "b", seatNum: "U2", price: 2999, status: "Available" },
    { id: "c", seatNum: "U3", price: 2999, status: "ForWomen" },
    { id: "d", seatNum: "U4", price: 2999, status: "Available" },
    { id: "e", seatNum: "U5", price: 2999, status: "Available" },
  ];
  const upperDeckRight2 = [
    { id: "p", seatNum: "Z1", price: 2999, status: "Available" },
    { id: "q", seatNum: "Z2", price: 2999, status: "Available" },
    { id: "r", seatNum: "Z3", price: 2999, status: "ForWomen" },
    { id: "s", seatNum: "Z4", price: 2999, status: "BookedByWomen" },
    { id: "t", seatNum: "Z5", price: 2999, status: "Available" },
  ];

  
  return (
    <div className="display">
      <DetailsPage />
      <Box
        box="Lower-deck"
        dataLeft={lowerDeck}
        dataRightLeft={lowerDeckRight}
        dataRightRight={lowerDeckRight2}
      />
      <Box
        box="Upper-deck"
        dataLeft={upperDeck}
        dataRightLeft={upperDeckRight}
        dataRightRight={upperDeckRight2}
      />
    </div>
  );
}

export default BookingPage

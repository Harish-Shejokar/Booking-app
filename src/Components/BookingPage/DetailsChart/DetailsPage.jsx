import React from 'react'
import './DetailsPage.css'
import Seats from '../../Seats'



const DetailsPage = () => {
  return (
    <div className="detail">
      <h3>Know about your Seats</h3>
      <div className="layout ">
        <div className="seat Available">
          {/* <div className='btm'>1</div> */}
        </div>
        <div className="description">Available</div>
      </div>
      <div className="layout">
        <div className="seat women"></div>
        <div className="description">Available only for women</div>
      </div>
      <div className="layout">
        <div className="seat selected"></div>
        <div className="description">Selected by you</div>
      </div>
      <div className="layout">
        <div className="seat other"></div>
        <div className="description">Booked by others</div>
      </div>
      <div className="layout">
        <div className="seat bookedByfemale"></div>
        <div className="description">Booked by female passenger</div>
      </div>
    </div>
  );
}

export default DetailsPage

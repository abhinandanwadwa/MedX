import React from 'react'
import '../css/Card.css'

const Card = (props) => {
  return (
    <>
    <div className="card">
          <div className="image">
            <img className='doctor' src= {props.img1} alt="doctor-img" />
            <img className='card-over-img' src={props.img2} alt="tooth-img" />
          </div>
          <div className="label">Dental</div>
    </div>
    </>
  )
}

export default Card

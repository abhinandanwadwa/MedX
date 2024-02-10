import React from 'react'
import '../css/InfoCard.css'

const InfoCard = (props) => {
  return (
    <>
        <div className="info-card">
          <div className="card-header">
            <div className='card-header-title'>{props.title}</div>
            <img  className="info-card-img" src={props.img} alt="pdf-icon" />
          </div>
          <div className="card-footer">{props.footer}</div>
        </div>
    </>
  )
}

export default InfoCard

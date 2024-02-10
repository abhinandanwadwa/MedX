import React from 'react'
import '../css/AppointmentCard.css'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import { red } from '@mui/material/colors';

const AppointmentCard = (props) => {
  return (
    <div>
      <center>
        <div className="appointment-card">
          <div className="appointment-card-header">
            {/* <div className="appointment-image"></div> */}
            <img className="appointment-image" src={props.img} alt="doctor-img" />
            <div className="name">Dr.Virat Kohli</div>
            <div className="appointment-details">
            {/* <svg data-testid={AddLocationAltIcon}></svg> */}
            <div className="detail-1">
            <AddLocationAltIcon fontSize='large'  sx={{ color: red[700] }} />
            <span className="hospital-name">Anushka Hospital</span>
            </div>
            <div className="detail-2">
              <AlarmOnIcon fontSize='large' sx={{color : red[900]}}/>
              <span className='appointment-time'>9:45 AM</span>
            </div>
            </div>
          </div>
          <div className="appointment-card-footer">DETAILED VIEW</div>
        </div>
      </center>
    </div>
  )
}

export default AppointmentCard

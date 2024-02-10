// import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/AppointmentPageDate.css'
import doctor from '../images/doctor2.jpg'
import { Link } from 'react-router-dom';
import * as React from 'react';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

const AppointmentPageDate = () => {


    return (


        <>
            <div className="appointment-page-date-wrapper">
                <div className="appointment-page">
                    <div className="head">
                        <Link to='/appointment'><ArrowBackIosIcon fontSize='large' /></Link>
                        <img className='profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMKDYj1tajNxECf3nNySP1ysB9Fwd0t_YCLX1eRv7Tw7kA5DOi9FVketO9OOXhxFRCKc&usqp=CAU" alt="profile-img" />
                    </div>
                    <center>
                        <div className="doctor-card">
                            <img className='doctor-image' src={doctor} alt="doctor-img" />
                            <div className="doctor-name">Dr.Virat Kohli</div>
                            <div className="doctor-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aspernatur dolorem saepe expedita molestias quasi.</div>
                        </div>
                    </center>
                </div>
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{fontFamily:"Nunito', sans-serif",fontSize:"40px"}} defaultValue={dayjs('2024-02-10')} />
                    <center>
                    <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                    </center>
                    </LocalizationProvider>
                </div>
            </div>

            <div className="footer">
                <Link style={{textDecoration:"none"}} to='/appointment/description' className="next-button">NEXT</Link>
            </div>
            </>
    )
}

export default AppointmentPageDate

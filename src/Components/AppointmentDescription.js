// import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/AppointmentPageDate.css'
import doctor from '../images/doctor2.jpg'
import { Link , useNavigate } from 'react-router-dom';
import * as React from 'react';
import { ToastContainer, toast } from 'react-custom-alert';
import TextField from '@mui/material/TextField';
import 'react-custom-alert/dist/index.css';

const AppointmentDescription = () => {

    const alertSuccess = () => toast.success("Appointment Confirmed",{toastStyle:{fontSize:"20px",fontFamily:"fantasy"}});

    const navigate = useNavigate();

    return (


        <>
        <ToastContainer floatingTime={2000} />
            <div className="appointment-page-date-wrapper">
                <div className="appointment-page">
                    <div className="head">
                        <Link to='/appointment/date'><ArrowBackIosIcon fontSize='large' /></Link>
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
                

                <center>
                    <h3  style={{width:"60%",textAlign:"center",color:"#00495E",fontFamily:` 'Nunito', sans-serif `}} className="description-header">Can you describe your medical condition?</h3>
                <TextField fullWidth multiline rows={9} label="Tell us more(optional)" id="fullWidth" />
                </center>


            </div>

            <div className="footer">
                <div onClick={()=>{alertSuccess()
                    ;setTimeout(()=>{navigate("/appointment/route")},2000)
                    
                    }} className="next-button">CONFIRM</div>
            </div>
            </>
    )
}

export default AppointmentDescription

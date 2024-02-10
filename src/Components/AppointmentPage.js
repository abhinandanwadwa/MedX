import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/AppointmentPage.css'
import doctor from '../images/doctor2.jpg'
import CheckIcon from '@mui/icons-material/Check';
import img1 from '../images/AppointmentPage/1.png'
import img2 from '../images/AppointmentPage/2.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const AppointmentPage = () => {


    return (
        <div className='appointment-page-wrapper'>
            <div className="appointment-page">
                <div className="head">
                    <Link to='/'><ArrowBackIosIcon fontSize='large' /></Link>
                    <img className='profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMKDYj1tajNxECf3nNySP1ysB9Fwd0t_YCLX1eRv7Tw7kA5DOi9FVketO9OOXhxFRCKc&usqp=CAU" alt="profile-img" />
                </div>

                <center>
                    <div className="doctor-card">
                        <img className='doctor-image' src={doctor} alt="doctor-img" />
                        <div className="doctor-name">Dr.Virat Kohli</div>
                        <div className="doctor-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aspernatur dolorem saepe expedita molestias quasi.</div>
                    </div>
                </center>

                <div className="reviews">
                    <div className="review">
                        <div className="review-logo" style={{ backgroundColor: "rgb(255,218,68)" }}><div style={{}}>8.9</div></div>
                        <div className="review-detail">{`(125) Reviews`}</div>
                    </div>
                    <div className="review">
                        <div className="review-logo" style={{ backgroundColor: "rgb(140,213,255)" }}>7-9</div>
                        <div className="review-detail">Active Hours</div>
                    </div>
                    <div className="review">
                        <div className="review-logo" style={{ backgroundColor: "rgb(72,176,44)" }}><CheckIcon sx={{ color: '#FFFFFF' }} /></div>
                        <div className="review-detail"><div>Verified</div></div>
                    </div>
                </div>

                <div className="carousel">
                    <div className="carousel-image"><img src={img1} alt="img1" /></div>
                    <div className="carousel-image"><img src={img2} alt="img1" /></div>
                    <div className="carousel-image"><img src={img1} alt="img1" /></div>
                    <div className="carousel-image"><img src={img2} alt="img1" /></div>
                    <div className="carousel-image"><img src={img1} alt="img1" /></div>
                    <div className="carousel-image"><img src={img2} alt="img1" /></div>
                </div>


                <h2 className='about-us'>About Us</h2>

                <div className="about-us-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam modi sed quaerat deleniti obcaecati harum perferendis error, est earum dolores reiciendis? Porro natus voluptatibus repudiandae, odit quaerat aspernatur sunt! Sunt?</div>

                <h2 className="patients-opinions-title">Patients' opinions</h2>


                <div className="patient-opinion">
                    <div className="patient-profile-img"><img className='profile' src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw" alt="profile-img" /></div>
                    <div className="patient-review-wrapper">
                        <div className="patient-name">Aisha Wadhwa</div>
                        <div className="patient-review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat quo atque, ut eius provident cupiditate. Fugit pariatur enim beatae.</div>
                    </div>
                </div>

                <div className="patient-opinion">
                    <div className="patient-profile-img"><img className='profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMKDYj1tajNxECf3nNySP1ysB9Fwd0t_YCLX1eRv7Tw7kA5DOi9FVketO9OOXhxFRCKc&usqp=CAU" alt="profile-img" /></div>
                    <div className="patient-review-wrapper">
                        <div className="patient-name">Nayra Wadhwa</div>
                        <div className="patient-review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat quo atque, ut eius provident cupiditate. Fugit pariatur enim beatae.</div>
                    </div>
                </div>

            </div>

            <div className="footer">
                <Link to="/appointment/date" style={{textDecoration:"none"}}><div className="appointment-button">Take Appointment</div></Link>
                <FavoriteBorderIcon fontSize='large' sx={{ color: "#DC143C" }} />
            </div>

        </div>
    )
}

export default AppointmentPage

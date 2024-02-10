import * as React from 'react';
import '../css/Home.css';
import doctor from '../images/doctor2.jpg';
import tooth from '../images/tooth.png';
import pdf from '../images/pdf.png';
import checklist from '../images/checklist.png';
import AppointmentCard from '../Components/AppointmentCard';
import InfoCard from '../Components/InfoCard';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className="header">
        <div className="greeting">Hi again</div>
        <div className="profile"><img className='profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMKDYj1tajNxECf3nNySP1ysB9Fwd0t_YCLX1eRv7Tw7kA5DOi9FVketO9OOXhxFRCKc&usqp=CAU" alt="profile-img" /></div>
      </div>

      <div className="search-box">
        <input className='search' placeholder='search' type="text" name="seach" id="search" />
      </div>

      <h2 className="looking">Book An Appointment</h2>

      <div className="cards">
        <Link style={{textDecoration:"none"}} to="/appointment"><Card img1={doctor} img2={tooth} /></Link>
        <Link style={{textDecoration:"none"}} to="/appointment"><Card img1={doctor} img2={tooth} /></Link>
        <Link style={{textDecoration:"none"}} to="/appointment"><Card img1={doctor} img2={tooth} /></Link>
        <Link style={{textDecoration:"none"}} to="/appointment"><Card img1={doctor} img2={tooth} /></Link>
        <Link style={{textDecoration:"none"}} to="/appointment"><Card img1={doctor} img2={tooth} /></Link>
        <Link style={{textDecoration:"none"}} to="/appointment"><Card img1={doctor} img2={tooth} /></Link>
      </div>

      <h2 className="more-info">More Info</h2>

      <div className="info-cards">
        <InfoCard img={pdf} title="Your medical history" footer="VIEW" />
        <InfoCard img={checklist} title="Checklist" footer="CHECK" />
      </div>

      <h2 className="appointment">Your Appointment</h2>

      <AppointmentCard img={doctor}/>

      <h2 className="our-recommendations">Our Recommendations</h2>


      <div className="upload-button"><strong>Upload Prescription</strong></div>

    </div>
  )
}

export default Home

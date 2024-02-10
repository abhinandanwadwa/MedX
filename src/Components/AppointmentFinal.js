// import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/AppointmentPageDate.css'
import doctor from '../images/doctor2.jpg'
import { Link } from 'react-router-dom';
import * as React from 'react';
import 'react-custom-alert/dist/index.css';
import { useState , useEffect} from 'react';

import { useJsApiLoader, GoogleMap, MarkerF, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const AppointmentFinal = () => {


    useEffect(()=>{});



    const center = {
        lat: 30.7597702,
        lng: 76.773732
      };
      
      const containerStyle = {
        marginTop:"30px",
        width: '90%',
        height: '45vh',
        borderRadius:"20px"
      };
    
      const [map, setmap] = useState(null);
      const [origin, setorigin] = useState('');
      const [destination, setdestination] = useState('');
      const [directions, setdirections] = useState(null);
      const [distance, setdistance] = useState('');
      const [duration, setduration] = useState('');
    
      const handleOrigin = (e)=>{
        setorigin(e.target.value);
      }
    
      const handleDestination = (e)=>{
        setdestination(e.target.value);
      }
    
      const Route = async()=>{
    
        if(origin === '' || destination === '')
        {
          return
        }
        
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: origin,
          destination: destination,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING
        })
    
        setdirections(results);
        setdistance(results.routes[0].legs[0].distance.text);
        setduration(results.routes[0].legs[0].duration.text);
      }
    
      const clearRoute = ()=>{
        setdirections(null);
        setdestination('');
        setdistance('');
        setorigin('');
        setduration('');
      }
    
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBYFcoTOwc44KeY1dnbe3mSw8yB8kcibxo",
        libraries: ['places']
      })
    
      if(!isLoaded)
      {
        return <>Loading...</>
      }
    
      


   






    return (
        <div>
            <div className="appointment-page">
                <div className="head">
                    <Link to='/appointment/description'><ArrowBackIosIcon fontSize='large' /></Link>
                    <img className='profile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMKDYj1tajNxECf3nNySP1ysB9Fwd0t_YCLX1eRv7Tw7kA5DOi9FVketO9OOXhxFRCKc&usqp=CAU" alt="profile-img" />
                </div>
                <center>
                    <div className="doctor-card">
                        <img className='doctor-image' src={doctor} alt="doctor-img" />
                        <div className="doctor-name">Dr.Virat Kohli</div>
                        {/* <div className="doctor-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aspernatur dolorem saepe expedita molestias quasi.</div> */}
                    </div>
                </center>
            </div>

            <div  style={{display:"flex",justifyContent:"center"}}   className="App">
                <GoogleMap center={center} zoom={16} mapContainerStyle={containerStyle} onLoad={map => setmap(map)}>
                    <MarkerF position={center} />
                    {
                        directions && (<DirectionsRenderer directions={directions} />)
                    }
                </GoogleMap>

                {/* <div className="head">
                    <div className="route">
                        <div className='input'>
                            <Autocomplete>
                                <input type="text" placeholder='Origin' onChange={handleOrigin} />
                            </Autocomplete>
                            <Autocomplete>
                                <input type="text" placeholder='Destination' onChange={handleDestination} />
                            </Autocomplete>
                            <button onClick={Route}>Find Route</button>
                        </div>
                    </div>
                    <div className='details'>
                        <div>Distance : {distance}</div>
                        <div>Duration : {duration}</div>
                        <button onClick={clearRoute} className='x'>X</button>
                        <button onClick={() => {
                            map.panTo(center)
                            map.setZoom(15)
                        }} className='r'>🏠</button>
                    </div>
                </div> */}
            </div>
            <div style={{ textAlign: 'center' }}>
                <a target='_blank' href={`https://www.google.com/maps?q=${center.lat},${center.lng}`}><button style={{ fontFamily:"sans-serif",background: 'cyan', fontSize:"16px",marginTop: 10, padding: '12px 20px', borderRadius: '10px', fontWeight:"600",color: 'black', border: 'none' }}>Directions</button></a>
            </div>

        </div>
    )
}

export default AppointmentFinal

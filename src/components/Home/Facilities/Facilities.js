import React from 'react';
import './Facilities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHeart, faUsers, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'


const hours = <FontAwesomeIcon icon={faRocket} />
const care = <FontAwesomeIcon icon={faHeart} />
const family = <FontAwesomeIcon icon={faUsers} />
const emergency = <FontAwesomeIcon icon={faHandHoldingMedical} />
const Facilities = () => {
    return (
        <div className="">
            
            <h1 className="top-facilities mt-5">Our Latest Facilities</h1>
            
           
            <div className="container" >

                <div className="row">
                <div className="images col-sm-12 col-lg-3">
                    <span className="icon">{hours}</span>
                    <h3 className="text-facilities">24/7</h3>
                    <p className="text-center fw-light">Square Hospital Emergency Room (ER) provides non-stop life-saving care when required, 24 hours a day, seven days a week. ER has got all the life saving support </p>
  
                </div>
                <div className=" images col-sm-12 col-lg-3">
                <span className="icon">{care}</span>
                    <h3 className="text-facilities">Intensive Care</h3>
                    <p className="text-center fw-light">The ICU is concerned with the provision of life support or organ support system in patient who critically ill and who usually require intensive monitoring .</p>
  
                </div>
                <div className="images col-sm-12 col-lg-3">
                <span className="icon">{family}</span>
                    <h3 className="text-facilities">Family Planning</h3>
                    <p className="text-center">Our Centre has an experienced team of doctors, nurses, embryologist and technicians trained in Singapore and India. We fully understand the needs of individual .</p>
  
                </div>
                <div className="images col-sm-12 col-lg-3">
                <span className="icon">{emergency}</span>
                    <h3 className="text-facilities">Emergency</h3>
                    <p className="text-center">We provide emergency care for respiratory disorders septicemia, and trauma including sports injuries, pediatric problems of the gastrointestinal system </p>
  
                
                </div>
                </div>
            </div>
            
        </div>

    );
};

export default Facilities;


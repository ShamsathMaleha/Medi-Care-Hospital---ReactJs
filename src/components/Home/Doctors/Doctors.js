import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor'
import './Doctors.css'


import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] =useState([])
    useEffect(()=>{
        fetch('/doctor.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
        
    },[])
  
    return (
        <div id="doctors" className=" pt-5 mt-5 ">
            <div className=" mb-5 ">
             
            <h1 >Our<span className="text-color"></span> Consultants</h1>
            <p> We doctor provide extensive knowledge in the domain of medical science,<br /> who applies and dedicates his knowledge to identify the medical problem faced  <br /> by the patient and then uses his skill to prevent or cure it.</p>
            </div>
         
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-md-center">
            {
                    
                        
                  doctors.map(doctor => <Doctor 
                    key={doctor.id}
                    doctor={doctor}></Doctor>)      
                    
                    }
            </Row>
           </Container>
           </div>
           
       
    );
};


export default Doctors;
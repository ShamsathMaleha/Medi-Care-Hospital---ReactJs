import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        
    },[])
  
    return (
        <div id="services" className="services-section pt-5 mt-5 ">
            <div className="text-white mb-5 ">
             
            <h1 >Our Offered<span className="texts-color"> Services</span></h1>
            <p>Medi Care Hospitals Limited is a tertiary care hospital and the leading contributor <br /> of private healthcare services in Bangladesh. This has been achieved <br /> only through consistent commitment to improve the lives of people through utmost service excellence </p>
            </div>
         
            <Container>
           <Row xs={1} md={2} lg={3} className="g-5 justify-content-md-center">
            {
                    
                        services.map(service=><Service 
                            key={service.id}
                            service={service} ></Service>)
                        
                    
                    }
            </Row>
           </Container>
           </div>
           
       
    );
};

export default Services;
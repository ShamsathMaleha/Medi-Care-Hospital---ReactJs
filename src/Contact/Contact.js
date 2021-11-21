
import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAddressCard, faMailBulk } from '@fortawesome/free-solid-svg-icons'


const phone = <FontAwesomeIcon icon={faPhone} />
const address = <FontAwesomeIcon icon={faAddressCard} />
const email = <FontAwesomeIcon icon={faMailBulk} />

const Contact = () => {
    const history = useHistory();
    const handleButton =()=>{
        history.push('/thankYou')
    }
    return (
      
<div className="container mb-4 contact mt-5">


    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? <br /> Please do not hesitate to contact us directly. <br /> Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row ml-5">

      
        <div className="col-md-6 mb-md-0 mb-5">
        <Container fluid="md">
            <form >

               
                <div className="row">

                    
                    <div className="col-md-6">
                        <div className=" mb-0">
                            <input type="text" id="name" required name="name" placeholder="Enter your name" className="form-control"/>
                           
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="mb-0">
                            <input type="text" id="email" name="email" required placeholder="Enter your email" className="form-control mb-3"/>
  
                        </div>
                    </div>
                    

                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className=" mb-0">
                            <input type="text" id="subject" name="subject" placeholder="Subject" className="form-control mb-3"/>
                        </div>
                    </div>
                </div>
               
                <div className="row">

                   
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" placeholder="Write something" className="form-control md-textarea mb-3"></textarea>
                            
                        </div>

                    </div>
                </div>
               

            </form>
            </Container>

            <div className="text-center text-md-left">
                <button onClick={handleButton} className="btn btn-success ">Send</button>
            </div>
            <div className="status"></div>
        </div>
       
        <div className="col-md-6 text-end">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p> <span className="icon-color">{address}</span> Uttara, Chourasta, Bangladesh</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p> <span className="icon-color">{phone}</span> + 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p> <span className="icon-color"> {email}</span>  medicareservices@gmail.com</p>
                </li>
            </ul>
        </div>
      
       
    </div>

</div>



         
    );
};

export default Contact;
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Appointment.css'

const Appointment = () => {
    const history = useHistory();
    const handleButton =()=>{
        history.push('/thankYou')
    }
    return (
        <div  className="d-flex justify-content-center h-75 mb-5 mt-5 pt-5 pb-5 appointment">
             <form >
    <h1>Get a Appintment</h1>

<div className="form-group">
    
    <input type="text" className="form-control mb-3" placeholder="Your Name" />
</div>

<div className="form-group mb-3">
    
    <input type="email" className="form-control" placeholder="Enter Email" />
</div>  


<div className="form-group">
    
    <input type="text" className="form-control mb-3" placeholder="Doctor Name" />
</div>

<div className="form-group">
    
    <input type="number" className="form-control mb-3" placeholder="Visit" />
</div>
<div className="form-group">
    
<input className="form-control mb-3" type="datetime-local" id="datetime" name="datetime"/>
</div>


<button type="submit" onClick={handleButton} className="btn btn-success btn-lg btn-block">Make Appointment</button>

</form>


        </div>
    );
};

export default Appointment;
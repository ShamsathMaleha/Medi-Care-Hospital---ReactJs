import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck , faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import './Doctor.css'
  

const appointment = <FontAwesomeIcon icon={faCalendarCheck} />
const money = <FontAwesomeIcon icon={faMoneyBill} />


const Doctor = (props) => {
    const {id,img,name,visit, speciality} = props.doctor
    const history = useHistory();

    const uri = `/appointment/${id}`;
    const handleAppointment =()=>{
        history.push(uri)
    }
  
    return (
        <div className="doctor-card">
            <Col>
      <Card className="images" >
        <Card.Img variant="top "  src={img} />
        <Card.Body>
          <Card.Title> <h1>{name}</h1> </Card.Title>
          <Card.Text>
        <h4> {speciality} </h4>
          </Card.Text>
          <Card.Text>
        Visit fee: {visit} {money}
          </Card.Text>
          <button onClick={handleAppointment} type="button" className="btn btn-success" >Appointment {appointment}</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;
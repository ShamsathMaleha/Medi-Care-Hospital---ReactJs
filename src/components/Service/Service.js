
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img,name,id} = props.service
    const history = useHistory();

    

    const uris = `/details/${id}`;
    const handleDetails =()=>{
        history.push(uris)  
    }
    return (
        <div className="service-card" >
      <Col >
      <Card className="service-col images">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
         <button type="button" className="btn  btn-outline-secondary" onClick={handleDetails}>Details</button>
          </Card.Text>
        </Card.Body>
      </Card>  
    </Col>
        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {  useHistory, useParams } from 'react-router-dom';

const Details = () => {
  
    
    const {sId} = useParams()
    const [details, setDetails] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => {
                const matchedDetail = data.find((details) => details.id == sId);
                if (matchedDetail) {
                    setDetails(matchedDetail);
                }
            });

    }, [])

  const handleHome = ()=>{
      history.push('/')
  }
 
    console.log(details)
    return (
        <div className="container h-100 mt-5 w-75">
            <Row>
             <Col >
      <Card className="service-col">
       
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>
         {details.description}
          </Card.Text>
           <Card.Text>
         <button type="button" className="btn  btn-outline-secondary" onClick={handleHome}>Back Home</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
        </div>
    );
};

export default Details;

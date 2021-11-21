import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../../../image/banner/banner-1.jpg'
import second from '../../../image/banner/banner-2.jpg'
import './Carousal.css'

const Carousal = () => {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item interval={1000}>
                <img height="580px"
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h1 >We Care For Your healthy</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    height="580px"
                    className="d-block w-100 "
                    src="https://www.kiwitech.com/assets/images/industry/healthcare/banner.jpg?fbclid=IwAR1OYUGOd0OV99I9XIKe7mCphxZxLWTKKsQDL_4jrCWuJx5W0z9Vtry_tRI"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>We Ensure Your Healthy Life</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    height="580px"
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Our Services Make You Healty Life</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Carousal;
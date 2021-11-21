import React from 'react';
import errorImge from '../../image/google/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={errorImge} alt="" />
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ use }) => {

    const { img, education, district, city, phone, linkedin } = use;

    return (
        <div>
            <img className='rounded-full my-4' src={img} alt="profileImage" />
            <p> Education : {education} </p>
            <p> District : {district} </p>
            <p> City : {city} </p>
            <p> Phone : {phone} </p>
            <p><Link to={linkedin}> {linkedin} </Link></p>
        </div>
    );
};

export default Profile;
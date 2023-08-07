/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name,email,address, phone}=user;
    return (
        <div className='m-4 bg-slate-400 p-8 font-semibold'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><Link to={`/user/${id}`}>Details</Link></p>
            
            
        </div>
    );
};

export default User;
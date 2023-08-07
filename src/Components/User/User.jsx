/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const User = ({user}) => {
    const {id, name,email,address, phone}=user;
    return (
        <div className='m-4 bg-slate-400 p-8 font-semibold'>
            <h3>Name: {name}</h3>
            <h1>ID: {id}</h1>
            <p>Email: {email}</p>
            <p>Address: {address.city}</p>
            <h4>Contact: {phone}</h4>
            
        </div>
    );
};

export default User;
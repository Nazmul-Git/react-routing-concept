/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user=useLoaderData();
    console.log(user);
    return (
        <div>
            <p>user details</p>
            <h2>Name: {user.name}</h2>
            <p>Phone: {user.phone}</p>
            


        </div>
    );
};

export default UserDetails;
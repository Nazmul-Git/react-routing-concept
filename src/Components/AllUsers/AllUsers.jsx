/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const AllUsers = () => {
    const usersData=useLoaderData();
    // console.log(usersData);
    return (
        <div>
            <h2 className='text-center'>Users..</h2>
            <div className='md: grid grid-cols-3  m-8 '>
                {
                    usersData.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default AllUsers;
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   
    return (
        
        <nav className='m-8 text-blue-500'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;
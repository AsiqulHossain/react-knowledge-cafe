import React from 'react';
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between item-center p-4  border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl '> knowledge Cafe </h1>
             <img src={profile}></img>
        </header>
    );
};

export default Header;
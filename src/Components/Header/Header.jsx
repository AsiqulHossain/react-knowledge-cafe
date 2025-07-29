import React from 'react';
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between item-center p-4 mx-4 border-b-2'>
            <h1 className='text-4xl '> knowledge Cafe </h1>
             <img src={profile}></img>
        </div>
    );
};

export default Header;
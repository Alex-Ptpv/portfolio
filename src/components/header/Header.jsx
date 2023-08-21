import React from 'react';
import my_photo from '../../images/my_photo.jpg'

const Header = () => {
  return (
    <header className="header">
      <img className='photo' src={my_photo} alt="my-photo" />
      <div>
        <h1>Oleksii Potapov</h1>
        <h2>Frontend Developer</h2>
      </div>
    </header>
  );
};

export default Header;

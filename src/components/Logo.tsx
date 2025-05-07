import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = () => {
  return (
    <img
      src={logoImg}
      alt="Growth Grub Logo"
      className="h-56 w-auto object-contain mt-2 ml-2"
    />
  );
};

export default Logo;
import React from 'react';

interface NavbarProps {
  title: string;
  imageUrl: string;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, imageUrl, className }) => {
  const navbarStyle = {
    backgroundSize: 'cover',
  };

  return (
    <nav className={`navbar ${className}`} style={navbarStyle}>
      <div className="navbar-content">
        <h1 className="navbar-title">{title}</h1>
        <img src={imageUrl} alt={title} className="navbar-image" />
      </div>
    </nav>
  );
};

export default Navbar;

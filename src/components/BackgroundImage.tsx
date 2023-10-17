import React from 'react';

interface BackgroundImageProps {
  backgroundImage: string; // Path to the background image
  title: string; // Heading text
  buttonText: string; // Button text
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  backgroundImage,
  title,
  buttonText,
}) => {
  const backgroundStyle: any = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '600px',
  width: '82%', // Set a maximum width
  margin: '0 auto', // Center horizontally
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  };

  return (
    <>
    <div className='backgroundimage-style' style={backgroundStyle}>
      <h2 className='font-fam background-font' style={{color:"#FFFFFF"}}>{title}</h2>
      <br/>
      <button className='font-fam background-btn p-2' style={{color:"#98002E"}}>{buttonText}</button>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
}

export default BackgroundImage;

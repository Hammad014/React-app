import React from 'react'

interface MainSectionProps {
  h1: string;
  p: string;
  image: string;
  reverse: boolean;
  index: number;
}

const MainSection: React.FC<MainSectionProps> = (props) => {
  const rowClass = `row ${props.reverse ? 'flex-row-reverse' : ''}`;
  const fontSize = (index: number) => (index >= 1 && index <= 3) ? "26px" : "43px";
  const fontSizep = (index: number) => (index >= 1 && index <= 3) ? "16px" : "24px";
  const fontWeight = (index: number) => (index >= 1 && index <= 3) ? "600" : "300";

  return (
    <>
      <div className="container">
        <div className={rowClass}>
          <div className="col-md-6 d-flex align-items-center">
            <div className="content">
              <h1 className='text-center custom-heading' style={{ color: "#98002E", fontSize: fontSize(props.index), fontWeight: fontWeight(props.index) }}>
                {props.h1}
              </h1>
              <p className='text-center custom-paragraph' style={{fontSize: fontSizep(props.index)}}>{props.p}</p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={props.image}
              alt="Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default MainSection
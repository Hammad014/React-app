import React from 'react'

interface MainSection2Props {
  h1: string;
  image: string;
  detail: string;
}

const MainSection2: React.FC<MainSection2Props> = (props) => {
  return (
    <>
    <div style={{maxWidth:"100%"}}>
    <div className="card" style={{maxWidth:" 32rem", border:"none"}}>
    <h5 style={{textAlign:"center", color:"#98002E"}} className="card-title font-fam">{props.h1} </h5>
    <br/>
  <img className="card-img-top" src={props.image}  alt="Card image cap"/>
     <div className="card-body">
    <p style={{}} className="card-text font-fam">{props.detail}</p>
  </div>
</div>
    <br/>
    <br/>
    </div>
    </>
   
  );
}

export default MainSection2;

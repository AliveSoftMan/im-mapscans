import React, {useState} from "react";
import "./BecomeScanner.css";
import "./HomePage.css"
import Feature from "./Feature"
import Tour from "./Tour"
import ProfessionalMarket from './ProfessionalMarket'
import Subscribe from './Subscribe'
import Getintouch from './Getintouch'
import Howitworks from './Howitworks'

function Home(props) {


  return (
    <div className="home">
      <ProfessionalMarket id="professional-market" />
      <Feature id="feature" />
      <Tour id="tour" />
      <Howitworks id="how-it-work" />
      <Subscribe id="subscribe" openDialog={props.openDialog} />
      <Getintouch id="getin-touch" openDialog={props.openDialog} />      
    </div>
  );
}

export default Home;

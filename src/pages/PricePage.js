import React from "react"
import "./PricePage.css"

import Ordernow from './Ordernow'
import PriceComp from './PriceComp'

import {Element} from "react-scroll";


function PricePage(props) {
  return (
    <Element className="home" name="myScrollToElement">       
      <PriceComp id="price-comp"/>
      <Ordernow id="order-now" openDialog={props.openDialog} />
    </Element>
  );
}

export default PricePage;

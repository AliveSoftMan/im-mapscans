import React from "react"
import "./ScannerPage.css"

import BecomeScanner from './BecomeScanner'
import ScannerComp from './ScannerComp'

function ScannerPage(props) {
  return (
    <div className="home">       
      <ScannerComp id="price-comp"/>
      <BecomeScanner id="become-scanner" openDialog={props.openDialog} />
    </div>
  );
}

export default ScannerPage;

import React, {useState, useEffect} from "react";
import "./SideDrawer.css";
import { Link as ScrollLink} from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const SideDrawer = (props) => {
  let drawerClasses = "sidedrawer__nav"
  if (props.show) {
    drawerClasses = "sidedrawer__nav open"
  }
  const location = useLocation()
  const [home, setHome] = useState(true)
  const [scrollName, setScrollName] = useState("")
  useEffect(() => {
    if (
      location.pathname === "/scanner" ||
      location.pathname === "/3dtour" ||
      location.pathname === "/videotour" ||
      location.pathname === "/terms&conditions" ||
      location.pathname === "/privacypolicy"||
      location.pathname === "/pricing"
    ) {
      setHome(false)
    } else {
      setHome(true)
    }
  }, [location])


  return (
    <div className="sidedrawer">      
      <nav className={drawerClasses}>
        <ul>
          <li>
            <div className="exit-div">
              <img src={require('../imgs/icon/exit-icon.png')} onClick={props.closeSlider}/>
            </div>
          </li>

          {!home && <li style={{color: '#1f0988'}}>
            <Link
              to="/"
            >
              Home
            </Link>
          </li>}

          {home && <li style={{color: (scrollName=="professional-market")? '#5fd672':'#1f0988' }} ><ScrollLink

                to="professional-market"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive = {(e)=>{
                  setScrollName(e)
                }}
              >
                Home
          </ScrollLink></li>}

          {home &&<li style={{color: (scrollName=="feature")? '#5fd672':'#1f0988' }}>
            <ScrollLink
              to="feature"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive = {(e)=>{
                setScrollName(e)
              }}
            >
              Services
            </ScrollLink>
          </li>}

          <li style={{color: location.pathname=='/pricing'? '#5fd672':'#1f0988'}} >
            <Link
              to="/pricing"
            >
              Pricing
            </Link>
          </li>

          {home &&<li style={{color: (scrollName=="how-it-work")? '#5fd672':'#1f0988' }}>
            <ScrollLink
              to="how-it-work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive = {(e)=>{
                setScrollName(e)
              }}
            >
              How it works
            </ScrollLink>
          </li>}

          <li style={{color: location.pathname=='/scanner'? '#5fd672':'#1f0988'}}>
            <Link
              to="/scanner"
            >
              Become a Scanner
            </Link>
          </li>

          {home &&<li style={{color: (scrollName=="getin-touch")? '#5fd672':'#1f0988' }}>
            <ScrollLink
              to="getin-touch"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive = {(e)=>{
                setScrollName(e)
              }}
            >
              Contact us
            </ScrollLink>
          </li>}

        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer

import React, {useState, useEffect} from "react";
import "./SideDrawer.css";
import { Link as ScrollLink} from "react-scroll";
import { Link, useHistory, useLocation } from "react-router-dom";

const SideDrawer = (props) => {

  let drawerClasses = "sidedrawer__nav";
  if (props.show) {
    drawerClasses = "sidedrawer__nav open";
  }

  const location = useLocation();

  const [home, setHome] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/scanner" ||
      location.pathname === "/3dtour" ||
      location.pathname === "/videotour" ||
      location.pathname === "/terms&conditions" ||
      location.pathname === "/privacypolicy"||
      location.pathname === "/pricing"
    ) {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [location]);


  return (
    <div className="sidedrawer">      
      <nav className={drawerClasses}>
        <ul>
          <li>
            <div className="exit-div">
              <img src={require('../imgs/icon/exit-icon.png')} onClick={props.closeSlider}/>
            </div>
          </li>
          {!home && <li>
            <Link
              to="/"
            >
              Home
            </Link>
          </li>}
          {home &&<li>
            <ScrollLink
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </ScrollLink>
          </li>}
          <li>
            <Link
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
          {home &&<li>
            <ScrollLink
              activeClass="active"
              to="how-it-work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              How it works
            </ScrollLink>
          </li>}
          <li>
            <Link
              to="/scanner"
            >
              Become a Scanner
            </Link>
          </li>
          {home &&<li>
            <ScrollLink
              activeClass="active"
              to="getin-touch"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact us
            </ScrollLink>
          </li>}
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;

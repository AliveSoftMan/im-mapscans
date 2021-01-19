import React, { useState, useEffect } from "react"
import "./Header.css"
import logo from "../imgs/Logo.svg"
import DrawerButton from "./DrawerButton"
import { Link, animateScroll as scroll } from "react-scroll"
import { useHistory, useLocation } from "react-router-dom"

function Header(props) {
  const location = useLocation();
  const history = useHistory();

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
      let scrollVar = location.search
      scrollVar = new URLSearchParams(scrollVar);
      scrollVar = scrollVar.get('scroll')
      if(scrollVar == 'bottom')
        scroll.scrollToBottom()
    } else {
      setHome(true);
    }

    var inputClasses = document.getElementsByTagName('input');
    var length = inputClasses.length;
    for (var i = 0; i < length; i++) {
      inputClasses[i].className = inputClasses[i].className + " gtag-class";
    }

  }, [location]);

  return (
    <div className="header">
      <div className="header__drawer">
        <DrawerButton click={props.drawerClickHandler} />
      </div>
      <div className="header__main">
        <div className="header__logo" onClick={() => history.push("/")}>
          <img className="header__icon" src={logo} />
        </div>
        <div className="header__content">
          <ul>
            <li style={{ display: home ? "flex" : "none", color: location.pathname=='/'? 'grey':'#1f0988' }}>
              <Link
                activeClass="active"
                to="banner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li style={{ display: home ? "flex" : "none" }}>
              <Link
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>

            <li onClick={() => history.push("/")} style={{ display: home ? "none" : "flex" }} >            
                Home
            </li>

            <li onClick={() => history.push("/pricing")} style={{color: location.pathname=='/pricing'? 'grey':'#1f0988'}} >            
                Pricing
            </li>

            <li style={{ display: home ? "flex" : "none" }}>
              <Link
                activeClass="active"
                to="how-it-work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                How it works
              </Link>
            </li>
            <li onClick={() => history.push("/scanner")} style={{color: location.pathname=='/scanner'? 'grey':'#1f0988'}}>
              Become a scanner
            </li>
            <li style={{ display: home ? "flex" : "none" }}>
              <Link
                activeClass="active"
                to="getin-touch"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

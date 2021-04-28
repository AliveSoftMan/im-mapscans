import React, { useState, useEffect } from "react"
import "./Header.css"
import logo from "../imgs/Logo.svg"
import DrawerButton from "./DrawerButton"
import { Link, animateScroll as scroll, scroller } from "react-scroll"
import { useHistory, useLocation } from "react-router-dom"
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-K5KDBJK'
}
TagManager.initialize(tagManagerArgs)

function Header(props) {
  const location = useLocation()
  const history = useHistory()
  const [home, setHome] = useState(true)
  const [scrollName, setScrollName] = useState("")

  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview',
      page: {
        url: location,
        title: location.pathname.substr(1, location.pathname.length)
      }
    })

    let scrollVar = location.search
    scrollVar = new URLSearchParams(scrollVar)
    scrollVar = scrollVar.get('scroll')

    if (
      location.pathname === "/scanner" ||
      location.pathname === "/3dtour" ||
      location.pathname === "/videotour" ||
      location.pathname === "/terms&conditions" ||
      location.pathname === "/privacypolicy"||
      location.pathname === "/pricing"
    ) {
        setHome(false)
        if(scrollVar == 'bottom')
          scroll.scrollToBottom()

      } else {

        setHome(true)
        if(scrollVar == "services"){
          
          var scrollPos = document.getElementById("feature").offsetTop
          scroll.scrollTo(scrollPos +300)
          setScrollName("feature")

        }else if(scrollVar == "how-it-work"){

          var scrollPos = document.getElementById("how-it-work").offsetTop
          scroll.scrollTo(scrollPos + 800 * 1.2)
          setScrollName("how-it-work")

        }else if(scrollVar == "contact-us"){
          scroll.scrollToBottom()
          setScrollName("getin-touch")
        }else{
          setScrollName("professional-market")

        }

      }
      var inputClasses = document.getElementsByTagName('input')
      var length = inputClasses.length

      for (var i = 0; i < length; i++) {
        inputClasses[i].className = inputClasses[i].className + " gtag-class"
    }
  }, [location])

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
            <li style={{ display: home ? "flex" : "none", color: (location.pathname=='/'&&scrollName=="professional-market")? '#5fd672':'#1f0988' }}>
              <Link
                activeClass="active"
                to="professional-market"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive = {(e)=>{
                  setScrollName(e)
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ display: home ? "flex" : "none", color: (location.pathname=='/'&&scrollName=="feature")? '#5fd672':'#1f0988'}}>
              <Link
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive = {(e)=>{
                  setScrollName(e)
                }}
              >
                Services
              </Link>
            </li>

            <li onClick={() => history.push("/")} style={{ display: home ? "none" : "flex" }} >            
                Home
            </li>

            <li onClick={() => history.push("/?scroll=services")} style={{ display: home ? "none" : "flex" }} >            
                Services
            </li>

            <li onClick={() => history.push("/pricing")} style={{color: location.pathname=='/pricing'? '#5fd672':'#1f0988'}} >            
                Pricing
            </li>

            <li style={{ display: home ? "flex" : "none", color: (location.pathname=='/'&&scrollName=="how-it-work")? '#5fd672':'#1f0988'}}>
              <Link
                activeClass="active"
                to="how-it-work"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onSetActive = {(e)=>{
                  setScrollName(e)
                }}
              >
                How it works
              </Link>
            </li>

            <li onClick={() => history.push("/?scroll=how-it-work")} style={{ display: home ? "none" : "flex" }} >            
                How it works
            </li>

            <li onClick={() => history.push("/scanner")} style={{color: location.pathname=='/scanner'? '#5fd672':'#1f0988'}}>
              Become a scanner
            </li>

            <li style={{ display: home ? "flex" : "none",color: (location.pathname=='/'&&scrollName=="getin-touch")? '#5fd672':'#1f0988'}}>
              <Link
                activeClass="active"
                to="getin-touch"
                spy={true}
                smooth={true}
                offset={-500}
                duration={500}
                onSetActive = {(e)=>{
                  setScrollName(e)
                }}
              >
                Contact us
              </Link>
            </li>

            <li onClick={() => history.push("/?scroll=contact-us")} style={{ display: home ? "none" : "flex" }} >            
                Contact Us
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

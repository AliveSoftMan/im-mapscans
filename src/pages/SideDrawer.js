import React from "react";
import "./SideDrawer.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";

const SideDrawer = (props) => {
  const history = useHistory();
  let drawerClasses = "sidedrawer__nav";
  if (props.show) {
    drawerClasses = "sidedrawer__nav open";
  }
  return (
    <div className="sidedrawer">
      <nav className={drawerClasses}>
        <ul>
          <li>
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
          <li>
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
          <li>
            <Link
              activeClass="active"
              to="tour"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              How it works
            </Link>
          </li>
          <div onClick={() => history.push("/scanner")}>
            {" "}
            <li>Become a scanner</li>
          </div>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >

              Contact us

            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;

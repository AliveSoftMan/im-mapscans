import React, { useState, useEffect } from "react";
import "./Footer.css";

import { useHistory, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const history = useHistory();

  const [home, setHome] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/scanner" ||
      location.pathname === "/3dtour" ||
      location.pathname === "/videotour" ||
      location.pathname === "/terms&conditions" ||
      location.pathname === "/privacypolicy"
    ) {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [location]);

  return (
    <div className="footer">
      <p>All rights reserved by MapScans.</p>
    
      <ul>
        <li onClick={() => history.push("/terms&conditions")}>
          Terms of Service &nbsp;&nbsp;
        </li>

        <li onClick={() => history.push("/privacypolicy")}>Privacy policy</li>
      </ul>
    </div>
  );
}

export default Footer;

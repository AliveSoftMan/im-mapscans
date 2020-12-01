import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Typical from "react-typical";
import { Link, animateScroll as scroll } from "react-scroll";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function Banner(id) {
  const history = useHistory();

   
  const images = [
    {
      original: require('../Images/banner-img.png'),
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/'
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
   
  ];

  return (
    <div className="banner" id={id}>
   
      <ImageGallery items={images} showThumbnails={false} showNav={false} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true}  />

      <div className="banner__info">
        <h2>Professional Marketing Content For Your Listings</h2>
        <p>
        Looking for Virtual Tours, Floor Plans, Video Tours or HDR Photos for your listing? <br/>
MapScans provides exceptional marketing content for you, all in one place!
        </p>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ORDER NOW
          </Link>
        </Button>
        {/* <Typical
          steps={[
            "attract customers",
            3000,
            "boost sales",
            3000,
            "maximize revenues",
            3000,
            "build your brand",
            3000,
            "increase views",
            3000,
          ]}
          loop={Infinity}
          wrapper="h2"
        /> */}
        <h5>
        Get 20% off your first order!
        </h5>
       
      </div>

      <div className="banner__info_mobile">
        <h2>Professional Marketing Content For Your Listings</h2>
        <p>
        Looking for Virtual Tours, Floor Plans, Video Tours or HDR Photos for your listing? <br/>
MapScans provides exceptional marketing content for you, all in one place!
        </p>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ORDER NOW
          </Link>
        </Button>
        <h5>
          Get 20% off your first order!
        </h5>
      </div>
    </div>
  );
}

export default Banner;

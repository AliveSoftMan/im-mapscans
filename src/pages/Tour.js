import React, {useState, useRef, useEffect} from "react";
import "./Tour.css";
import "./TourCard";

import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Iframe from 'react-iframe'
import BaSlider from "./BaSlider.js"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    marginTop: 21,
    padding: '0 3%',
    width: '84%'
  },

  bringListing: {
    width: '92%'
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 172,
    minWidth: 152,
    maxWidth: 182,
    margin: 'auto'
  },
  
  listingFrame:{
    marginLeft: '8%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  videoFrame:{
    position: 'absolute',
    padding: '18px',
    cursor: 'pointer',
    marginLeft: '1%',
    borderRadius: '50%',
    border: 'hidden',
    background: 'transparent',
    color: 'transparent',
    outline: 'none',
    outlineOffset: 'unset'
  }

}));

function Tour({ id }) {
  // const history = useHistory()
  const classes = useStyles()
  const [bringListing, setBringListing] =  useState(false)
  const blRef = useRef(null)
  const blSize = useWindowSize(blRef)

  return (
    <div>
      <div className="tour bg-white" id={id}>
        <div className={classes.root}>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12} sm={6}>
              <div className="tour__headerContent">
                <h1>Virtual Tours Sell Better!</h1>
                <h5>
                  Much better than photos.
                </h5>
                <p>
                  Let buyers view your listings from the comfort of their home. Customers can get a better feel for a properties by making it feel as if they were actually there, 
                  something that photos alone can never provide.  Feature property highlights and sell your home faster.
                </p>
                <h5>
                  Sell faster.
                </h5>
                <p>
                  Showing off your listings has never been easier. Consistent, high-definition 3D tours are proven to deliver significantly 
                  better results while selling your property.  Have an Open House 24/7 with virtual reality integration!
                </p>
                <Link
                  to="pricing?scroll=bottom">
                  <Button>
                    Book Online
                  </Button>
                </Link>
                &nbsp;&nbsp;
                <Link
                  to="3dtour">
                  <Button>
                    SEE MORE 3D TOURS
                  </Button>
                </Link>

              </div>
            </Grid>
            <Grid item xs={12} sm={6}>

              <div className="tour__headerContent" style={{display: 'flex', justifyContent: 'flex-end', margin: 0, width: '94%',  marginLeft: "6%"}}>
              </div>

              <video style={{ width: '94%', marginLeft: '6%', marginTop: '3%'}} autoPlay={true} controls={true} >
                <source src="assets/homeVideo.mp4" type="video/mp4" />
              </video>
              
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="tour bg-blue" id={id}>
        <div className={`${classes.bringListing}`}>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12} sm={6}>
              <div className="img-blue-bg-left">
                <div className={classes.listingFrame}>

                    <img ref={blRef} style={{width: "100%"}}  src={require('../Images/bg-11.png')} alt="alt-image" />
                    <button className={classes.videoFrame} onClick={()=>setBringListing(true)}>
                      Play
                    </button>
                    {bringListing &&<Iframe
                      url="https://www.insidemaps.com/app/walkthrough-v2/?propertyId=GaMP2AhxVo&projectId=SZjZcHXGuu&env=production&floorId=o5hIuYt7Ay&spinId=ciQQu5rQ6G_0&quatX=-0.020&quatY=0.698&quatZ=0.020&quatW=0.715&fov=65.0"
                      width={blSize.width}
                      height={blSize.height}
                      display= "initial" 
                      position="absolute"
                    />}
                    
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tour__headerContent">
                <h1>Bring Your Listings To Life</h1>
                <h5>
                  Videos Drive Engagement
                </h5>
                <p>
                  Let potential clients and buyers view a video walk-through of your property listing or storefront.  Visual content drives engagement.  Viewers spend 100% more time on pages that have videos on them.  With 3D Tour Videos you will have engaging real estate video content for your website.
                </p>
                <h5>
                  Market Better.
                </h5>
                <p>
                  Video walkthroughs are a perfect tool to showcase your home in listing sites, websites, as well as social media.
                </p>
                <ScrollLink
                   activeClass="active"
                   to="getin-touch"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
                  >
                  <Button className="learn-more-btn" >
                    Learn More
                  </Button>
                </ScrollLink>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="tour bg-white" id={id}>
        <div className={`${classes.root}`}>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12} sm={5}>
              <div className="tour__headerContent">
                <h1>Photography For Real Estate</h1>

                <h5>
                  PROFESSIONAL HDR
                  </h5>
                <p>
                  Get the biggest bang for your buck with sky replacements, color enhancement and lot cleanup. Also ask about our virtual staging!
                  </p>
                <h5 className="">
                  Unmatched Turn-Around Time
                  </h5>
                <p>
                  We typically have your order completed and delivered within 24/48 hours of your shoot date.
                  </p>
                <br />
                <p>
                  Three sets of photos delivered with every order!
                </p>
                <ScrollLink
                   activeClass="active"
                   to="getin-touch"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
                  >
                  <Button>
                    Learn More
                  </Button>
                </ScrollLink>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className="bar-slide-div">
                <div className="bar-slide-content">
                  <BaSlider />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="tour bg-blue" id={id}>
        <div className={`${classes.bringListing}`}>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12} sm={6}>
              <div className="img-blue-bg-left">
                <img style={{ width: '100%', marginLeft: '12%' }} src={require('../Images/floorplan-bg.png')} alt="alt-image" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tour__headerContent">
                <h1>Floor Plan</h1>
                <h5>
                  An Affordable Selling Tool
                </h5>
                <p>
                  Buyers rank floor plans as one of the most important features on a property’s website. Along with professional photography and detailed information on the home, floor plans are an excellent marketing tool for viewers.
                </p>
                <h5>
                  Understanding The Space
                </h5>
                <p>
                  Buyers can understand how the home may work for them with the complete floor plan layout and home measurements. Paired with real estate photography, floor plans provide a better comprehension of the property for viewers!
                </p>               
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}


// Hook
function useWindowSize(ref) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: Math.round(ref.current.clientWidth * 0.635),
        height: Math.round(ref.current.clientWidth * 0.40),
        mleft: Math.round(ref.current.clientWidth * 0.01)
      })

    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default Tour;

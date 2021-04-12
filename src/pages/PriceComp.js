import React from "react";
import "./PriceComp.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1210,
    margin: 'auto',
    marginTop: 21,
    overflow: 'auto'
  },
  banner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#1f0988'
  },
  bannerImg: {
    width: '100%'
  }  
}))

function PriceComp(id) {
  const classes = useStyles();
  return (
    <div className="price-comp">      
      <div className={classes.banner}>
        <img alt="image"  src={require('../imgs/Pricing Banner.jpg')} className={classes.bannerImg} />
        <h1>Pricing</h1>
        <h3>
          Select one of the pricing packages based on your property size
        </h3>     
      </div>

      <div className={classes.root}>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>2000 sqft</th>
              <th>3000 sqft</th>
              <th>4000 sqft</th>
              <th>4000+ sqft</th>
            </tr>            
          </thead>
          
          <tbody>
            <tr>
              <td>
              {/* Video Walkthrough */}
              </td>
            </tr>

            <tr>
              <td>
                3D Virtual Tours
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
            </tr>
            
            <tr>
              <td>
                HDR Photos
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
            </tr>
            <tr>
              <td>
                Floor Plans
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
              <td>
                <img alt="image"  src={require('../imgs/Tick-02.svg')}/>
              </td>
            </tr>

            <tr>
              <td></td>
              <td><b>$99</b>&nbsp;USD</td>
              <td><b>$119</b>&nbsp;USD</td>
              <td><b>$139</b>&nbsp;USD</td>
              <td>Call For Price</td>
            </tr>
            <tr>
              <td>Video Walkthrough</td>
              <td align="center"><b>+ $14.95*</b>&nbsp;USD<br></br><span>(Discounted from $19.95 for a limited time only!)</span>
              </td>
              <td align="center"><b>+ $14.95*</b>&nbsp;USD<br></br><span>(Discounted from $19.95 for a limited time only!)</span>
              </td>
              <td align="center"><b>+ $14.95*</b>&nbsp;USD<br></br><span>(Discounted from $19.95 for a limited time only!)</span>
              </td>
              <td>Call For Price</td>
            </tr>
            <tr>
              <td>Property Page</td>
              <td align="center"><b>+ $9.95*</b>&nbsp;USD<br></br><span>(Discounted from $19.95 for a limited time only!)</span>
              </td>
              <td align="center"><b>+ $9.95*</b>&nbsp;USD<br></br><span>(Discounted from $19.95 for a limited time only!)</span>
              </td>
              <td align="center"><b>+ $9.95*</b>&nbsp;USD<br></br><span>(Discounted from $19.95 for a limited time only!)</span>
              </td>
              <td>Call For Price</td>
            </tr>

          </tbody>
        </table>

        

      </div>

    </div>
  );
}

export default PriceComp;

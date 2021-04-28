import React, { Component } from "react";
import "./App.css";
import Home from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import TourPage from "./pages/TourPage";
import VideoPage from "./pages/VideoPage";
// import Scanner from "./pages/Scanner";
import ScannerPage from './pages/ScannerPage'
import SideDrawer from "./pages/SideDrawer";
import Backdrop from "./pages/Backdrop";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import PricePage from './pages/PricePage';
import {withStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide'


const styles = (theme) => ({
	root: {
	  margin: 0,
	  padding: theme.spacing(2),
	},
	closeButton: {
	  position: 'absolute',
	  right: theme.spacing(1),
	  top: theme.spacing(1),
	  color: theme.palette.grey[500],
	},
  });


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
})

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
	  <MuiDialogTitle disableTypography className={classes.root} {...other}>
		<p>{children}</p>
		{onClose ? (
		  <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
			<CloseIcon />
		  </IconButton>
		) : null}
	  </MuiDialogTitle>
	)
})



class App extends Component {
  state = {
    sideDrawerOpen: false,
    openAlert: false,
    alertText: {up:"", down:""}
  };
  drawerToggleCLickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleClose = () => {
    this.setState({openAlert: false})
  }

  openDialog = (text)=>{
    this.setState({openAlert: true, alertText: text})
  }
  

  render() {
    let backDrop;

    let {openAlert, alertText} = this.state

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="app">
        <Router>
          <Header drawerClickHandler={this.drawerToggleCLickHandler} />

          <SideDrawer show={this.state.sideDrawerOpen}  closeSlider={this.backdropClickHandler} />
          {backDrop}

          <Switch>
            
            <Route path="/scanner">
              <ScannerPage openDialog={this.openDialog} />
            </Route>
            
            <Route path="/3dtour">
              <TourPage />
            </Route>

            <Route path="/videotour">
              <VideoPage />
            </Route>

            <Route path="/terms&conditions">
              <Terms />
            </Route>
            
            <Route path="/privacypolicy">
              <Privacy />
            </Route>

            <Route path="/pricing">
              <PricePage openDialog={this.openDialog} />
            </Route>

            <Route path="/">
              <Home openDialog={this.openDialog}/>
            </Route>

          </Switch>

          <Footer />
        </Router>

        
      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" onClose={this.handleClose}>{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img src={require('./imgs/letter-png.png')} alt="alt-image"/> <br/>
            {alertText.up} <br/> {alertText.down}
          </DialogContentText>
        </DialogContent>		
      </Dialog>

      </div>
    );
  }
}

export default App;

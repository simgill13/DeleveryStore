// import React from 'react'
// import { Link } from 'react-router-dom'

// // The Header creates links that can be used to navigate
// // between routes.
// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/sim'>sim</Link></li>
        
//       </ul>
//     </nav>
//   </header>
// )

// export default Header

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import  TemporaryDrawer from './Drawer'
import red from '@material-ui/core/colors/red';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
      <AppBar className='Sim' position="fixed" >
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> */}
           
            <TemporaryDrawer/>
          {/* </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
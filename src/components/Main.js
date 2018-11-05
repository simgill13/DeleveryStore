import React,{ Component }                from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar                             from './Header'
import TemporaryDrawer from './Drawer'
import { Zoom } from 'react-slideshow-image';
import van from '../images/van.png'
import van2 from '../images/van2.png'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {styles ,tiers,footers} from '../styles/main'
import '../styles/main.scss'
import '../styles/mainIphone.scss'
import Icon from '@material-ui/core/Icon';
import Row from './Row';




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      address: ''
    }
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  render(){
    const { classes } = this.props;
    return(
 
      <React.Fragment>
      {/* <img style={{maxHeight:'100%',maxWidth:'100%'}} src={van2} /> */}
      <div>
        <div className='headerpic'>
        {/* <img style={{maxHeight:'100%',maxWidth:'100%'}}  src={van2} alt="boohoo" className="img-responsive"/> */}
        </div>
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='addressSearchContainer'>
            <input
              {...getInputProps({
                placeholder: 'Delivery Location.',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#ffffff', cursor: 'pointer' }
                  : { backgroundColor: 'transparent', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className='SIMM'>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        </div>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar> */}
        <ButtonAppBar/>
      </AppBar>


        <div className='gurantee'>
          <div className='icontext'>
            <Icon className='motoicon'>motorcycle</Icon>
          </div>
          <div className='icontext'>
            <p className='quickD'> Quick Delivery</p>
          </div>
         
        </div>

        <Row/>
      
      {/* <Typography component="h4" variant="h5" align="left" color="textPrimary" gutterBottom>
            Flower 
          </Typography>

          <Typography variant="h6" align="lect" color="textSecondary" component="p">
            We Strive to bring you to the highest quality products, stright from the source.
          </Typography> */}


      <main className={classes.layout}>
        {/* Hero unit */}



        
        


        


        <div className={classes.heroContent}>

          
        
        </div> 
        {/* End hero unit */}
         <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> 
      </main>


















      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
    </React.Fragment>
    )
  }
}


Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);